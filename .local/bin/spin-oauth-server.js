import express from 'express';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const REDIRECT_URI = 'https://pkm.mouthygeese.com/spin-callback';
const TOKEN_PATH = process.env.SPIN_TOKEN_PATH || `${process.env.HOME}/spin-token.json`;

const SCOPES = [
 'playlist-modify-public',
 'playlist-modify-private',
 'user-read-playback-state',
 'user-modify-playback-state',
 'user-read-recently-played',
 'user-library-read',
 'streaming'
].join(' ');

// Store PKCE verifier in memory (one request at a time)
let pendingAuth = null;

const app = express();

// Helper functions
function generateCodeVerifier() {
 return crypto.randomBytes(32).toString('base64url');
}

function generateCodeChallenge(verifier) {
 return crypto.createHash('sha256').update(verifier).digest('base64url');
}

// Route: GET /spin-auth - Start the OAuth flow
app.get('/spin-auth', (req, res) => {
 const verifier = generateCodeVerifier();
 const challenge = generateCodeChallenge(verifier);
 const state = crypto.randomBytes(16).toString('hex');

 // Store verifier for later
 pendingAuth = { verifier, state };

 const authUrl = new URL('https://accounts.spotify.com/authorize');
 authUrl.searchParams.set('client_id', CLIENT_ID);
 authUrl.searchParams.set('response_type', 'code');
 authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
 authUrl.searchParams.set('scope', SCOPES);
 authUrl.searchParams.set('state', state);
 authUrl.searchParams.set('code_challenge_method', 'S256');
 authUrl.searchParams.set('code_challenge', challenge);

 res.redirect(authUrl.toString());
});

// Route: GET /spin-callback - Handle Spotify's redirect
app.get('/spin-callback', async (req, res) => {
 try {
 const { code, state } = req.query;

 if (!code) {
 return res.status(400).send('❌ No authorization code received');
 }

 if (!pendingAuth || state !== pendingAuth.state) {
 return res.status(400).send('❌ State mismatch. Authorization failed.');
 }

 const { verifier } = pendingAuth;
 pendingAuth = null; // Clear after use

 // Exchange code for tokens
 const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
 method: 'POST',
 headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
 body: new URLSearchParams({
 grant_type: 'authorization_code',
 code,
 redirect_uri: REDIRECT_URI,
 client_id: CLIENT_ID,
 code_verifier: verifier,
 }),
 });

 const tokens = await tokenRes.json();

 if (tokens.error) {
 return res.status(400).send(`❌ Token exchange failed: ${tokens.error_description}`);
 }

 tokens.expires_at = Date.now() + tokens.expires_in * 1000;

 // Save token to file
 fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));

 res.send(`
 <html>
 <head>
 <style>
 body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 40px; text-align: center; }
 .success { color: #22c55e; font-size: 48px; margin-bottom: 20px; }
 .title { font-size: 24px; font-weight: bold; margin: 20px 0; }
 .detail { color: #666; margin: 10px 0; font-size: 14px; }
 .close { margin-top: 30px; }
 </style>
 </head>
 <body>
 <div class="success">✅</div>
 <div class="title">Spin Authenticated!</div>
 <div class="detail">Token saved to ${TOKEN_PATH}</div>
 <div class="detail">You can close this window.</div>
 <div class="close"><small>Returning to CLI in 3 seconds...</small></div>
 <script>
 setTimeout(() => window.close(), 3000);
 </script>
 </body>
 </html>
 `);

 console.log('\n✅ Token received and saved!');
 } catch (err) {
 console.error('Error:', err);
 res.status(500).send(`❌ Authentication error: ${err.message}`);
 }
});

// Start server
const PORT = process.env.PORT || process.env.SPIN_OAUTH_PORT || 3000;
app.listen(PORT, () => {
 console.log(`\n🎵 Spin OAuth Server listening on port ${PORT}`);
 console.log(`Tunnel: https://pkm.mouthygeese.com/spin-callback → localhost:${PORT}/spin-callback`);
});
