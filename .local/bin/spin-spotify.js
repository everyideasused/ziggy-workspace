import fs from 'fs';

const BASE = 'https://api.spotify.com/v1';

async function getAccessToken() {
 const tokenPath = process.env.SPIN_TOKEN_PATH || `${process.env.HOME}/spin-token.json`;
 const raw = fs.readFileSync(tokenPath, 'utf-8');
 let tokens = JSON.parse(raw);

 // Refresh if within 5 minutes of expiry
 if (Date.now() > tokens.expires_at - 300000) {
 const res = await fetch('https://accounts.spotify.com/api/token', {
 method: 'POST',
 headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
 body: new URLSearchParams({
 grant_type: 'refresh_token',
 refresh_token: tokens.refresh_token,
 client_id: process.env.SPOTIFY_CLIENT_ID,
 }),
 });
 const fresh = await res.json();
 tokens = {
 ...tokens,
 access_token: fresh.access_token,
 expires_at: Date.now() + fresh.expires_in * 1000,
 ...(fresh.refresh_token && { refresh_token: fresh.refresh_token }),
 };
 fs.writeFileSync(tokenPath, JSON.stringify(tokens, null, 2));
 }

 return tokens.access_token;
}

async function spotifyFetch(path, options = {}) {
 const token = await getAccessToken();
 const res = await fetch(`${BASE}${path}`, {
 ...options,
 headers: {
 Authorization: `Bearer ${token}`,
 'Content-Type': 'application/json',
 ...(options.headers || {}),
 },
 });
 if (!res.ok) {
 const err = await res.text();
 throw new Error(`Spotify API error ${res.status}: ${err}`);
 }
 if (res.status === 204) return null;
 return res.json();
}

export async function searchTrack(query) {
 const data = await spotifyFetch(
 `/search?q=${encodeURIComponent(query)}&type=track&limit=1`
 );
 const track = data?.tracks?.items?.[0];
 if (!track) return null;
 return {
 uri: track.uri,
 name: track.name,
 artist: track.artists[0].name,
 id: track.id,
 };
}

export async function getAudioFeatures(trackId) {
 return spotifyFetch(`/audio-features/${trackId}`);
}

export async function getMyUserId() {
 const data = await spotifyFetch('/me');
 return data.id;
}

export async function createPlaylist(name, description, isPublic = false) {
 const userId = await getMyUserId();
 const data = await spotifyFetch(`/users/${userId}/playlists`, {
 method: 'POST',
 body: JSON.stringify({ name, description, public: isPublic }),
 });
 return data.id;
}

export async function addTracksToPlaylist(playlistId, trackUris) {
 // Spotify max 100 per request
 for (let i = 0; i < trackUris.length; i += 100) {
 await spotifyFetch(`/playlists/${playlistId}/tracks`, {
 method: 'POST',
 body: JSON.stringify({ uris: trackUris.slice(i, i + 100) }),
 });
 }
}

export async function addToQueue(trackUri) {
 await spotifyFetch(
 `/me/player/queue?uri=${encodeURIComponent(trackUri)}`,
 { method: 'POST' }
 );
}

export async function startPlayback(contextUri, trackUris) {
 const body = {};
 if (contextUri) body.context_uri = contextUri;
 if (trackUris) body.uris = trackUris;
 await spotifyFetch('/me/player/play', {
 method: 'PUT',
 body: JSON.stringify(body),
 });
}

export async function getRecentlyPlayed(limit = 50) {
 const data = await spotifyFetch(
 `/me/player/recently-played?limit=${limit}`
 );
 return (data?.items || []).map((item) => ({
 name: item.track.name,
 artist: item.track.artists[0].name,
 id: item.track.id,
 played_at: item.played_at,
 }));
}

export async function getRecommendations(params) {
 const q = new URLSearchParams();
 if (params.seed_tracks?.length)
 q.set('seed_tracks', params.seed_tracks.slice(0, 5).join(','));
 if (params.seed_artists?.length)
 q.set('seed_artists', params.seed_artists.slice(0, 5).join(','));
 if (params.seed_genres?.length)
 q.set('seed_genres', params.seed_genres.slice(0, 5).join(','));
 if (params.target_tempo) q.set('target_tempo', String(params.target_tempo));
 if (params.target_energy) q.set('target_energy', String(params.target_energy));
 if (params.target_valence) q.set('target_valence', String(params.target_valence));
 q.set('limit', String(params.limit || 20));

 const data = await spotifyFetch(`/recommendations?${q.toString()}`);
 return (data?.tracks || []).map((t) => ({
 uri: t.uri,
 name: t.name,
 artist: t.artists[0].name,
 id: t.id,
 }));
}
