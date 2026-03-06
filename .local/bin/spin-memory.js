import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const VAULT_PATH = process.env.OBSIDIAN_VAULT_PATH || '/Volumes/ziggy/openclaw-workspace/Pinky & The Brain';
const MEMORY_PATH = path.join(VAULT_PATH, 'Notes', 'SPIN_MEMORY.md');
const SESSIONS_PATH = path.join(VAULT_PATH, 'Notes', 'Spin_Sessions');

export function initSpinDirectories() {
 if (!fs.existsSync(SESSIONS_PATH)) fs.mkdirSync(SESSIONS_PATH, { recursive: true });
}

export function readMemory() {
 if (!fs.existsSync(MEMORY_PATH)) return '';
 return fs.readFileSync(MEMORY_PATH, 'utf-8');
}

export function appendToSection(section, line) {
 let content = readMemory();
 const marker = `## ${section}`;
 const idx = content.indexOf(marker);
 if (idx === -1) return;

 const nextSection = content.indexOf('\n## ', idx + marker.length);
 const insertAt = nextSection === -1 ? content.length : nextSection;

 const newLine = `- ${line}\n`;
 content = content.slice(0, insertAt) + newLine + content.slice(insertAt);
 fs.writeFileSync(MEMORY_PATH, content);
}

export function writeSessionLog(date, content) {
 const filePath = path.join(SESSIONS_PATH, `${date}.md`);
 fs.writeFileSync(filePath, content);
}

export function getRecentSessions(n = 5) {
 if (!fs.existsSync(SESSIONS_PATH)) return [];
 return fs
 .readdirSync(SESSIONS_PATH)
 .filter(f => f.endsWith('.md'))
 .sort()
 .slice(-n)
 .map(f => fs.readFileSync(path.join(SESSIONS_PATH, f), 'utf-8'));
}

export function logLikedSong(song, artist, context) {
 const date = new Date().toISOString().split('T')[0];
 appendToSection('Liked Songs', `${song} — ${artist} | ${context} | ${date}`);
}

export function logSkippedSong(song, artist, context) {
 const date = new Date().toISOString().split('T')[0];
 appendToSection('Skipped Songs', `${song} — ${artist} | ${context} | ${date}`);
}

export function logLikedArtist(artist, context) {
 const date = new Date().toISOString().split('T')[0];
 appendToSection('Liked Artists', `${artist} | ${context} | ${date}`);
}
