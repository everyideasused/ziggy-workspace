# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## Storage Architecture

**My workspace:** `/Volumes/ziggy/openclaw-workspace/` (2TB external SSD)  
**Internal storage:** 256GB - use sparingly

All my files live on the external SSD. Collaboration happens through Obsidian Sync.

## Obsidian - Pinky & The Brain Vault

**Vault location:** `/Volumes/ziggy/openclaw-workspace/Pinky & The Brain/`  
**Shared via:** Obsidian Sync + NoteDiscovery web at https://pkm.mouthygeese.com  
**Structure:** Construction PMO + Life (PARA method)

**Key folders:**
- Programs/ — Multi-site rollouts (e.g., 8000-site programs)
- Projects/ — Individual sites
- Resources/ — RFP pipeline, prototypes, vendor DB
- Areas/ — Team management, business ops
- Dashboards/ — Portfolio KPIs
- Templates/ — 7+ professional templates

**CLI commands:**
```bash
obsidian-cli set-default "Pinky & The Brain"
obsidian-cli search "query"
obsidian-cli search-content "text in notes"
obsidian-cli create "path/note" --content "..."
obsidian-cli move "old/path" "new/path"  # Updates all links
```

**What I can do:**
- Create projects from templates
- Search across all notes
- Update project statuses
- Generate rollup reports
- Track action items and deadlines

## Pinky Workflow Rules

**Default output location for all research and documents:**

| Output Type | Location | Notes |
|-------------|----------|-------|
| Research reports | `03-Resources/Research/` | Dated, tagged |
| Project work | `01-Projects/Project Name/` | Linked to Area |
| Quick captures | `00-Inbox/` | Triaged later |
| Meeting notes | `6-Journal/YYYY.MM.DD.md` | Daily note (dot format) |
| Templates | `Templates/` | Reusable |

**Always include:**
- YAML frontmatter with `tags:`, `date:`, `related: [[links]]`
- Wiki-links to related notes
- Proper PARA placement

---

## Spotify Control

**Command:** `~/.local/bin/ziggy-spotify` (custom wrapper using spotipy)
**Auth:** OAuth complete (token cached at `~/.openclaw/spotify_cache.json`)
**Status:** ✅ Fully operational

### Available Devices
- 🔊 **House** (AVR/Wiim Ultra) — Primary speaker
- 💻 **ziggy's Mac mini** — Computer output

### Voice Commands via OpenClaw
| Say this... | Result |
|-------------|--------|
| "ziggy play [song] on House" | Plays on House speaker |
| "ziggy pause music" | Pauses |
| "ziggy next track" | Skips forward |
| "ziggy volume 50 on House" | Sets volume |

### CLI Commands
```bash
~/.local/bin/ziggy-spotify devices                    # List devices
~/.local/bin/ziggy-spotify play "Still Alive"         # Play on active device
~/.local/bin/ziggy-spotify play "Song" --device "House"  # Play on specific device
~/.local/bin/ziggy-spotify pause/next/previous        # Playback controls
~/.local/bin/ziggy-spotify volume 75                  # Volume 0-100
~/.local/bin/ziggy-spotify status                     # Current song info
```

### How to Add More Devices
1. Device must support **Spotify Connect** (Wiim, Sonos, Alexa, etc.)
2. Open Spotify app on the device (to make it visible)
3. Run `ziggy-spotify devices` to see it
4. Use exact device name in commands

### Troubleshooting
- **No devices found:** Open Spotify app on Mac Mini or target device
- **Auth expired:** Script auto-refreshes token
- **Device not responding:** Check if device is active in Spotify app

---

Add whatever helps you do your job. This is your cheat sheet.
