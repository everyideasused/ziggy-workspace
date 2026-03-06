import crypto from 'crypto';
import http from 'http';
import open from 'open';
import fs from 'fs';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const REDIRECT_URI = 'http://localhost:8888/callback';
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

function generateCodeVerifier(): string {
 return crypto.randomBytes(32).toString('base64url');
}

function generateCodeChallenge(verifier: string): string {
 return crypto.createHash('sha256').update(verifier).digest('base64url');
}

async function authenticate() {
 const verifier = generateCodeVerifier();
 const challenge = generateCodeChallenge(verifier);
 const state = crypto.randomBytes(16).toString('hex');

 const authUrl = new URL('https://accounts.spotify.com/authorize');
 authUrl.searchParams.set('client_id', CLIENT_ID);
 authUrl.searchParams.set('response_type', 'code');
 authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
 authUrl.searchParams.set('scope', SCOPES);
 authUrl.searchParams.set('state', state);
 authUrl.searchParams.set('code_challenge_method', 'S256');
 authUrl.searchParams.set('code_challenge', challenge);

 console.log('Opening Spotify login in browser...');
 await open(authUrl.toString());

 // Local server to catch the callback
 const code = await new Promise<string>((resolve, reject) => {
 const server = http.createServer((req, res) => {
 const url = new URL(req.url!, `http://localhost:8888`);
 const code = url.searchParams.get('code');
 const returnedState = url.searchParams.get('state');
 
 if (returnedState !== state) {
 res.end('State mismatch. Auth failed.');
 reject(new Error('State mismatch'));
 return;
 }
 
 res.end('Spotify auth complete. You can close this tab.');
 server.close();
 resolve(code!);
 });
 server.listen(8888);
 });

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

 const tokens = await tokenRes.json() as any;
 tokens.expires_at = Date.now() + (tokens.expires_in as number) * 1000;

 fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));
 console.log(`✅ Spin authenticated. Token saved to ${TOKEN_PATH}`);
}

authenticate().catch(console.error);
