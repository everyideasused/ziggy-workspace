import {
 searchTrack,
 createPlaylist,
 addTracksToPlaylist,
 getAudioFeatures,
} from './spin-spotify.js';

import {
 initSpinDirectories,
 readMemory,
 getRecentSessions,
 logLikedSong,
 logSkippedSong,
 logLikedArtist,
 writeSessionLog,
} from './spin-memory.js';

initSpinDirectories();

export async function createAndPlayPlaylist(name, description, trackNames) {
 const uris = [];
 const notFound = [];

 for (const trackName of trackNames) {
 const result = await searchTrack(trackName);
 if (result) {
 uris.push(result.uri);
 } else {
 notFound.push(trackName);
 }
 }

 const playlistId = await createPlaylist(name, description);
 await addTracksToPlaylist(playlistId, uris);

 return { playlistId, tracksFound: uris.length, tracksNotFound: notFound };
}

export async function logFeedback(type, name, context, extra) {
 switch (type) {
 case 'liked_song':
 const [song, artist] = name.split(' — ');
 logLikedSong(song, artist || 'Unknown', context);
 return `Logged liked song: ${name}`;
 case 'skipped_song':
 const [s, a] = name.split(' — ');
 logSkippedSong(s, a || 'Unknown', context);
 return `Logged skip: ${name}`;
 case 'liked_artist':
 logLikedArtist(name, context);
 return `Logged liked artist: ${name}`;
 }
}

export async function writeSession(vibe, tracks, notes) {
 const date = new Date().toISOString().split('T')[0];
 const trackList = tracks
 .map((t, i) => ` ${i + 1}. ${t.name} — ${t.artist}${t.feedback ? ` [${t.feedback}]` : ''}`)
 .join('\n');

 const content = `# Spin Session — ${date}

## Context / Vibe
${vibe}

## Tracks Played
${trackList}

## Notes
${notes || 'No additional notes.'}
`;

 writeSessionLog(date, content);
 return `Session logged: ${date}`;
}

export function getSpinContext() {
 const memory = readMemory();
 const recent = getRecentSessions(3).join('\n\n---\n\n');
 return `=== SPIN MEMORY ===\n${memory}\n\n=== RECENT SESSIONS ===\n${recent}`;
}

export async function verifyTrack(query) {
 const track = await searchTrack(query);
 if (!track) return { found: false };

 const features = await getAudioFeatures(track.id);
 return {
 found: true,
 name: track.name,
 artist: track.artist,
 bpm: Math.round(features?.tempo || 0),
 energy: features?.energy,
 valence: features?.valence,
 danceability: features?.danceability,
 key: features?.key,
 mode: features?.mode,
 };
}
