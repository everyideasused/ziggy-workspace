import { spawn } from 'child_process';
import { exec } from 'child_process';
import readline from 'readline';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const PORT = process.env.SPIN_OAUTH_PORT || 3000;

console.log('\n🎵 Starting Spin OAuth Server...\n');

// Start the Express server
const server = spawn('node', ['/Volumes/ziggy/openclaw-workspace/.local/bin/spin-oauth-server.js'], {
 cwd: '/Volumes/ziggy/openclaw-workspace',
 env: { ...process.env },
 stdio: 'pipe'
});

server.stdout.on('data', (data) => {
 console.log(data.toString());
});

server.stderr.on('data', (data) => {
 console.error(data.toString());
});

// Wait a moment for server to start, then open browser
setTimeout(() => {
 const authUrl = `https://pkm.mouthygeese.com/spin-auth`;
 
 console.log('\n📱 Opening browser to: ' + authUrl);
 console.log('\n1. Log in with your Spotify account');
 console.log('2. Click "Agree" to authorize Spin');
 console.log('3. You\'ll be redirected and the token will be saved');
 console.log('\nPress Ctrl+C here to stop the server when done.\n');
 
 exec(`open "${authUrl}"`);
}, 1000);

// Keep server running
server.on('exit', (code) => {
 process.exit(code);
});

// Handle Ctrl+C
process.on('SIGINT', () => {
 console.log('\n\n🛑 Stopping Spin OAuth Server...');
 server.kill();
 process.exit(0);
});
