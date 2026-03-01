---
name: spotify-control
description: Control Spotify playback via natural language commands. Use when the user wants to play music, playlists, or albums on Spotify; control playback (play, pause, skip, volume); switch between devices (House, Mac mini, Bluetooth speakers); or search for and queue music. Handles device selection, playlist vs track detection, and volume control automatically.
---

# Spotify Control

## Overview

This skill enables natural language control of Spotify playback on the user's devices. It translates requests like "play classical coffee on House" into appropriate CLI commands.

## Quick Commands

| User Says | Action |
|-----------|--------|
| "play [song/artist/playlist]" | Search and play |
| "play [query] on [device]" | Play on specific device |
| "pause/stop" | Pause playback |
| "next/skip" | Skip to next track |
| "previous/back" | Go to previous track |
| "volume [0-100]" | Set volume level |
| "connect to [device]" | Switch active device |
| "what's playing" | Show current track |
| "devices" | List available devices |

## Available Devices

Common device names to recognize:
- **"House"** or **"AVR"** — Primary speaker (Wiim Ultra)
- **"Mac mini"**, **"computer"**, **"ziggy"** — Mac Mini output
- **"JBL"**, **"BoomBox"**, **"bluetooth"** — Bluetooth speaker

## Command Patterns

### Play Music

```bash
scripts/ziggy-spotify play "<search query>" [--device "<device>"]
```

The script automatically:
- Searches for playlists first (for continuous playback)
- Falls back to individual tracks if no playlist found
- Handles "radio" mode for artist-based stations

### Control Playback

```bash
scripts/ziggy-spotify pause
scripts/ziggy-spotify next
scripts/ziggy-spotify previous
scripts/ziggy-spotify status
```

### Manage Devices

```bash
scripts/ziggy-spotify devices              # List all devices
scripts/ziggy-spotify volume <0-100>      # Set volume
```

## Model Configuration

**Default Model:** `vllm/glm-4.7-flash:latest`

This skill uses a local model by default because:
- Spotify commands are simple, structured tasks
- Local execution is free and fast
- No sensitive data leaves the machine
- Works offline

## Examples

**User:** "play some jazz on House"
```bash
scripts/ziggy-spotify play "jazz" --device "House"
```

**User:** "pause the music"
```bash
scripts/ziggy-spotify pause
```

**User:** "what's playing?"
```bash
scripts/ziggy-spotify status
```

**User:** "volume 50"
```bash
scripts/ziggy-spotify volume 50
```

## Resources

### scripts/

- `ziggy-spotify` — Main control script (Python/spotipy)
  - Handles authentication (token cached at `~/.openclaw/spotify_cache.json`)
  - Supports playlists, tracks, albums, and radio stations
  - Device selection and volume control
