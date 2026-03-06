---
type: note
area: household
status: active
tags:
  - spotify
  - music
  - spin
  - integration
  - automation
created: 2026-03-05
updated: 2026-03-05
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Interests Hub|Interests Hub]]

---

# Spotify Integration State

> Complete Spotify control via CLI with full playback and queue management. Spin-curated playlists delivered instantly to Deck +1.

---

## ✅ What's Working

| Feature | Status | Command |
|---------|--------|---------|
| Playback Control | ✅ | `ziggy-spotify play "song" [--device "Deck +1"]` |
| Device Selection | ✅ | `ziggy-spotify devices` |
| Search | ✅ | `ziggy-spotify search track/album/show "query"` |
| Queue Single Track | ✅ | `ziggy-spotify queue "song"` |
| Queue Multiple | ✅ | `ziggy-spotify queue-multiple "song1" "song2"...` |
| Skip/Previous | ✅ | `ziggy-spotify next` / `previous` |
| Volume | ✅ | `ziggy-spotify volume <0-100>` |
| Status | ✅ | `ziggy-spotify status` |

---

## ❌ Known Limitations

| Feature | Status | Note |
|---------|--------|------|
| Create Playlists | ❌ 403 | Spotify app-level restriction — requires verification |
| Add to Existing Playlist | ❌ 403 | Same limitation as above |
| Save to Library | ❌ | Not implemented in CLI |

**Workaround:** Use **queue-multiple** for Spin-curated lists — same result, instant delivery.

---

## 🎵 Current Workflow

### For Music Requests

```
Nathan: "Spin, curate a [genre] playlist"
Spin: *Generates tracklist*
Ziggy: *Queues all tracks via queue-multiple*
Result: 15-20 songs ready to play on Deck +1
```

### Direct Commands

```bash
# Play something now
ziggy-spotify play "Rebel Rebel" --device "Deck +1"

# Queue up Spin's curation
ziggy-spotify queue-multiple \
  "Song 1" "Song 2" "Song 3"...

# Check what's playing
ziggy-spotify status

# Skip
ziggy-spotify next
```

---

## 🔧 Technical Details

**CLI Location:** `~/.local/bin/ziggy-spotify`

**Auth:** OAuth with refresh token cached at `~/.openclaw/spotify_cache.json`

**Scopes Granted:**
- `user-read-playback-state`
- `user-modify-playback-state`
- `user-read-currently-playing`
- `playlist-read-private`
- `playlist-modify-private` *(granted but 403 on use)*
- `playlist-modify-public` *(granted but 403 on use)*
- `user-read-email`
- `user-read-private`

**Primary Device:** Deck +1 (AVR) — Wiim Ultra system

**Account:** ziggy@mouthygeese.com (Premium)

---

## 📋 Spin Curation Delivery

When Spin creates a playlist:

1. **Tracklist** → Saved to `Pinky & The Brain/Notes/[Playlist Name].md`
2. **Playback** → Queued immediately via `queue-multiple`
3. **Re-use** → Can re-queue anytime by referencing the saved tracklist

---

## 🎯 Future Improvements

- [ ] Resolve 403 on playlist creation (requires Spotify app verification)
- [ ] Add ability to save/play existing user playlists by name
- [ ] Integration with daily notes ("what's playing today")

---

## 📁 Related Files

- [[Bowie At Full Volume — Playlist]] — First Spin-curated playlist (18 tracks, queued 2026-03-05)
- [[Household Hub]] — Entertainment center
- TOOLS.md — Spotify CLI reference

---

**Last Updated:** 2026-03-05 by Ziggy  
**Status:** ✅ Production Ready

---
*Created by: Ziggy · AI: openrouter/moonshotai/kimi-k2.5*
