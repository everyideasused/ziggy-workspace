import fs from 'fs';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const TOKEN_PATH = process.env.SPIN_TOKEN_PATH || `${process.env.HOME}/spin-token.json`;

async function authenticate() {
 console.log('\n🎵 Spin Spotify Authentication (Client Credentials)\n');

 // Get access token via Client Credentials
 const auth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
 const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
 method: 'POST',
 headers: {
 'Authorization': `Basic ${auth}`,
 'Content-Type': 'application/x-www-form-urlencoded',
 },
 body: new URLSearchParams({
 grant_type: 'client_credentials',
 }),
 });

 const tokens = await tokenRes.json();

 if (tokens.error) {
 console.error('❌ Authentication failed:', tokens.error_description);
 process.exit(1);
 }

 tokens.expires_at = Date.now() + tokens.expires_in * 1000;

 fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));
 console.log(`✅ Spin authenticated via Client Credentials`);
 console.log(`✅ Token saved to ${TOKEN_PATH}`);
 console.log(`✅ Access token expires in ${tokens.expires_in} seconds\n`);
}

authenticate().catch(err => {
 console.error('Auth failed:', err.message);
 process.exit(1);
});
