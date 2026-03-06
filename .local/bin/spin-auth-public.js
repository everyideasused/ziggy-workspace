import crypto from 'crypto';
import fs from 'fs';
import readline from 'readline';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const TOKEN_PATH = process.env.SPIN_TOKEN_PATH || `${process.env.HOME}/spin-token.json`;
const REDIRECT_URI = 'https://pkm.mouthygeese.com/spin-callback';

const SCOPES = [
 'playlist-modify-public',
 'playlist-modify-private',
 'user-read-playback-state',
 'user-modify-playback-state',
 'user-read-recently-played',
 'user-library-read',
 'streaming'
].join(' ');

function generateCodeVerifier() {
 return crypto.randomBytes(32).toString('base64url');
}

function generateCodeChallenge(verifier) {
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

 console.log('\n🎵 Spin Spotify Authentication\n');
 console.log('1. Copy and paste this URL into your browser:');
 console.log(authUrl.toString());
 console.log('\n2. Log in and authorize Spin');
 console.log('3. You\'ll be redirected to pkm.mouthygeese.com/spin-callback');
 console.log('4. Copy the code from the URL bar (the part after "code=")');
 console.log('\n');

 const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
 });

 const code = await new Promise((resolve) => {
 rl.question('Paste the code here: ', (answer) => {
 resolve(answer.trim());
 });
 });

 rl.close();

 // Exchange code for tokens
 console.log('\nExchanging code for access token...');
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
 console.error('❌ Token exchange failed:', tokens.error_description);
 process.exit(1);
 }

 tokens.expires_at = Date.now() + tokens.expires_in * 1000;

 fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));
 console.log(`\n✅ Spin authenticated. Token saved to ${TOKEN_PATH}\n`);
}

authenticate().catch(err => {
 console.error('Auth failed:', err.message);
 process.exit(1);
});
