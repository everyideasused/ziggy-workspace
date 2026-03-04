# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## Storage Architecture

**My workspace:** `/Volumes/ziggy/openclaw-workspace/` (2TB external SSD)  
**Internal storage:** 256GB - use sparingly

All my files live on the external SSD. Collaboration happens through Obsidian Sync.

## Obsidian - Pinky & The Brain Vault

**Vault location:** `/Volumes/ziggy/openclaw-workspace/Pinky & The Brain/`  
**Shared via:** Obsidian Sync + NoteDiscovery web at https://pkm.mouthygeese.com  
**Structure:** Flat PARA — organization via frontmatter + Dataview, not folders

**Key folders (4 only, flat Notes/):**
- `Journal/` — Daily notes (YYYY-MM-DD.md) only
- `Notes/` — **ALL notes flat here** — projects, research, meetings, resources, people
- `Templates/` — Templater templates
- `Attachments/` — Images, PDFs, files

**Organization method:** Frontmatter fields (`type:`, `area:`, `status:`) + Dataview queries — no subfolders

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

## Vault Toolkit — Direct Vault Access

**Command:** `/Volumes/ziggy/openclaw-workspace/.local/bin/vault`
**Added:** 2026-03-03 (v2 system prompt deployment)
**Status:** ✅ Fully operational

### What It Does
The vault toolkit gives me **direct read access** to the Obsidian vault without needing to paste full context upfront. This is **massively more token-efficient** — I only read what I need, when I need it.

### Core Commands

**READ:**
```bash
vault read "Note Name"        # Read any note by fuzzy name match
vault today                   # Today's daily note
vault yesterday               # Yesterday's daily note
vault session                 # Current Session State note
vault agents                  # Agent Registry
```

**SEARCH:**
```bash
vault search "keyword"        # Full-text search with context
vault find "keyword"          # Find notes by filename
vault type workout            # List all notes of a type
vault area health             # List all notes in an area
vault tag construction-kb     # Find notes by tag
```

**QUERY:**
```bash
vault recent recipe 10        # 10 most recent recipes
vault overdue                 # All overdue tasks
vault due 2026-03-05          # Tasks due on a specific date
vault inbox                   # All inbox items
vault habits                  # Active habits with streaks
vault workouts 7              # Last 7 workout logs
```

**WRITE:**
```bash
vault write "Note Name"       # Write to a note (reads from stdin)
vault append "Note Name"      # Append to a note (reads from stdin)
```

### Usage Pattern

**Old way (v1):**
- Paste full context upfront (50-200k tokens)
- Answer from memory
- Expensive, stale data

**New way (v2):**
- Read on demand: `vault read "Workout Program"`
- Answer from current data
- Cheap (~200-500 tokens per read), always fresh

### When to Use

| Nathan Says... | I Do... |
|----------------|---------|
| "What workout is today?" | `vault today` to check daily note OR calculate from V-Shape rotation |
| "What's for dinner?" | `vault read "Meal Plan - Current Week"` |
| "How's my fitness going?" | `vault workouts 7` to see last week's logs |
| "Show me overdue tasks" | `vault overdue` |
| "What recipes do I have?" | `vault recent recipe 20` |
| "What's in my construction KB?" | `vault tag "construction-kb"` |
| Session startup | `vault session` to read Session State for continuity |

### Agent Dispatch Integration

When routing to specialized agents (Atlas, Iron, Sage, Spin, Compass, Forge), I use vault toolkit to pull only the domain-specific notes they need:

| Agent | Typical Commands |
|-------|-----------------|
| **Atlas** | `vault tag "construction-kb"`, `vault read "AHJ Research Methodology"` |
| **Iron** | `vault read "Workout Program"`, `vault workouts 7`, `vault habits` |
| **Sage** | `vault read "Meal Plan - Current Week"`, `vault recent recipe 10` |
| **Spin** | `vault area interests`, `vault tag "music"` |
| **Compass** | `vault tag "travel"`, `vault search "Jazz Fest"` |
| **Forge** | `vault tag "app-development"`, `vault read "Ziggy Email Bridge Architecture"` |

### PATH Setup

The toolkit is already in PATH via workspace `.local/bin/`. If commands fail:
```bash
export PATH="/Volumes/ziggy/openclaw-workspace/.local/bin:$PATH"
```

---

## Pinky & The Brain — Vault Writing Checklist

### ⚠️ CRITICAL — Read Before Writing

**Allowed folders (ROOT ONLY):**
```
Pinky & The Brain/
├── 🏠base.md              ← Home hub
├── Journal/               ← Daily notes ONLY (YYYY-MM-DD.md)
├── Notes/                 ← EVERYTHING else. FLAT. NO SUBFOLDERS.
├── Templates/             ← Templates only
└── Attachments/           ← Images, PDFs, files
```

### ✅ Writing Rules (MUST VERIFY)

**Rule 1: NEVER create new folders at root**
- Only 4 folders exist. If it doesn't exist, don't create it.
- When in doubt, use `Notes/` flat.

**Rule 2: Notes/ is ALWAYS flat**
- NO subfolders in Notes/
- Organization happens via frontmatter + Dataview, not folders
- Frontmatter fields: `type:`, `area:`, `status:`, `tags:` (all required)

**Rule 3: Journal/ is for daily notes only**
- Format: `YYYY-MM-DD.md`
- Use Daily Note template (Templater handles navigation links)
- No other note types in Journal/

**Rule 4: Verify before writing**
```
Before: write(path="Pinky & The Brain/something/new.md")
Check:  Does path start with one of the 4 allowed folders?
        Does Notes/ path contain any subfolders?
If NO:  STOP — ask Nathan or use Notes/ flat
```

### Where Things Go

| Content Type | Location | Example Path |
|--------------|----------|--------------|
| Daily notes | `Journal/` | `Journal/2026-03-02.md` |
| Work projects | `Notes/` (flat) | `Notes/CFA Nashville - Green Hills.md` |
| Research | `Notes/` (flat) | `Notes/NO Jazz Fest 2025 Accommodations.md` |
| Workout logs | `Notes/` (flat) | `Notes/2026-03-02 — Day A.md` |
| Meeting notes | `Notes/` (flat) | `Notes/Meeting - Client Check-in.md` |
| Quick captures | `Notes/` (flat, status: inbox) | `Notes/Random thought.md` |
| Resources | `Notes/` (flat) | `Notes/Resource - API Docs.md` |

### Frontmatter Required (Every Note)

```yaml
---
type: [project|meeting|person|resource|note|habit|workout|etc]
area: [work|health|household|finances|relationships|interests|education]
status: [inbox|active|complete|archived]
tags:
  - [at least one tag]
---
```

### Navigation Header (After frontmatter)

**Daily notes:**
```markdown
> [[🏠base|🏠]] · [[YYYY-MM-DD|← Yesterday]] · [📅 Today](obsidian://daily) · [[YYYY-MM-DD|Tomorrow →]]
```

**Area-specific notes:**
```markdown
> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Area Hub|Area Hub]]
```

See `Notes/System Guide.md` for complete rules.

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
