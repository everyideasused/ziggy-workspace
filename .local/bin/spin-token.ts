import fs from 'fs';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const TOKEN_PATH = process.env.SPIN_TOKEN_PATH || `${process.env.HOME}/spin-token.json`;

export async function getAccessToken(): Promise<string> {
 const raw = fs.readFileSync(TOKEN_PATH, 'utf-8');
 let tokens = JSON.parse(raw);

 // Refresh if within 5 minutes of expiry
 if (Date.now() > tokens.expires_at - 300000) {
 const res = await fetch('https://accounts.spotify.com/api/token', {
 method: 'POST',
 headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
 body: new URLSearchParams({
 grant_type: 'refresh_token',
 refresh_token: tokens.refresh_token,
 client_id: CLIENT_ID,
 }),
 });
 const fresh = await res.json();
 tokens = {
 ...tokens,
 access_token: fresh.access_token,
 expires_at: Date.now() + fresh.expires_in * 1000,
 ...(fresh.refresh_token && { refresh_token: fresh.refresh_token }),
 };
 fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));
 }

 return tokens.access_token;
}
