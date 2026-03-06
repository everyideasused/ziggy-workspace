# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## Storage Architecture

**My workspace:** `/Volumes/ziggy/openclaw-workspace/` (2TB external SSD)  
**Internal storage:** 256GB - use sparingly

All my files live on the external SSD. Collaboration happens through Obsidian Sync.

## Obsidian - Pinky & The Brain Vault (aka: Pinky)

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

When routing to specialized agents, I use vault toolkit to pull only the domain-specific notes they need:

| Agent | Typical Commands |
|-------|-----------------|
| **Atlas** | `vault tag "construction-kb"`, `vault read "AHJ Research Methodology"` |
| **Tally** | `vault tag "estimating-kb"`, `vault read "Tally — Construction Estimator Knowledge Base"` |
| **Iron** | `vault read "Workout Program"`, `vault workouts 7`, `vault habits` |
| **Sage** | `vault read "Meal Plan - Current Week"`, `vault recent recipe 10` |
| **Spin** | `vault area interests`, `vault tag "music"` |
| **Compass** | `vault tag "travel"`, `vault search "Jazz Fest"` |
| **Forge** | `vault tag "app-development"`, `vault read "Ziggy Email Bridge Architecture"` |
| **Ledger** | `vault tag "finance"`, `vault search "budget"`, `vault search "debt"` |
| **Hammer** | `vault tag "carpentry"`, `vault tag "building-science"` |

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
**Status:** ✅ Fully operational (v2 — tracks, albums, playlists, podcasts)

### Available Devices
- 🔊 **Deck** — Deck speaker
  - Spotify ID: `364fcf0cb3a61043a81f930b70ac904757a6fb12`
  - Shows as "Deck (AVR)" in device list
- 🏠 **House** — House speaker (Wiim Ultra)
  - Spotify ID: `fccb3c03cefb2fb15e41b0169b28f006ffb073bd`
  - Shows as "House (AVR)" in device list
- 💻 **ziggy's Mac mini** — Computer output
  - Shows as "ziggy's Mac mini (Computer)" in device list

### Play Commands — Full Support

**Play Individual Track:**
```bash
~/.local/bin/ziggy-spotify play "Cocaine and Lexapro" --track
~/.local/bin/ziggy-spotify play "Still Alive" --track --device "House"
```

**Play Full Album (Includes Compilations):**
```bash
~/.local/bin/ziggy-spotify play "OK Computer" --album
~/.local/bin/ziggy-spotify play "Thriller" --album --device "House"
```

**Play Playlist:**
```bash
~/.local/bin/ziggy-spotify play "Lofi Study"
~/.local/bin/ziggy-spotify play "lo-fi beats" --device "House"
```

**Play Podcast (Latest Episode):**
```bash
~/.local/bin/ziggy-spotify play "Joe Rogan Experience" --podcast
~/.local/bin/ziggy-spotify play "Joe Rogan" --show --device "House"
```

**Default Behavior (No Flag):**
- Searches playlists first
- Falls back to track search if no playlist found
```bash
~/.local/bin/ziggy-spotify play "Still Alive"
```

### Search Commands — Full Support

**Search Individual Tracks:**
```bash
~/.local/bin/ziggy-spotify search track "Cocaine and Lexapro"
```

**Search Albums (Includes Compilations):**
```bash
~/.local/bin/ziggy-spotify search album "Thriller"
```

**Search Playlists:**
```bash
~/.local/bin/ziggy-spotify search playlist "workout"
~/.local/bin/ziggy-spotify search "lo-fi"  # Defaults to playlist
```

**Search Podcasts:**
```bash
~/.local/bin/ziggy-spotify search podcast "Joe Rogan Experience"
~/.local/bin/ziggy-spotify search show "The Daily"
```

### Playback Control

```bash
~/.local/bin/ziggy-spotify devices                    # List available devices
~/.local/bin/ziggy-spotify pause                      # Pause playback
~/.local/bin/ziggy-spotify next                       # Next track
~/.local/bin/ziggy-spotify previous                   # Previous track
~/.local/bin/ziggy-spotify status                     # Show current playback
~/.local/bin/ziggy-spotify volume 75                  # Set volume 0-100
```

### Flag Combinations

You can combine `--device` with content type flags:
```bash
~/.local/bin/ziggy-spotify play "Still Alive" --track --device "House"
~/.local/bin/ziggy-spotify play "Thriller" --album --device "ziggy's Mac mini"
~/.local/bin/ziggy-spotify play "Joe Rogan Experience" --podcast --device "House"
```

### How to Add More Devices
1. Device must support **Spotify Connect** (Wiim, Sonos, Alexa, etc.)
2. Open Spotify app on the device (to make it visible)
3. Run `ziggy-spotify devices` to see it
4. Use exact device name **or ID** in commands
   - If device has friendly name: use that (e.g., `"House"`, `"Deck"`, `"ziggy's Mac mini"`)
   - If device shows as ID only: use the full ID
   - Note: Some devices only show friendly names when active

### Troubleshooting
- **No devices found:** Open Spotify app on Mac Mini or target device
- **Auth expired:** Script auto-refreshes token
- **Device not responding:** Check if device is active in Spotify app
- **Wrong result found:** Use specific flags (`--track`, `--album`, `--podcast`) to force content type

---

Add whatever helps you do your job. This is your cheat sheet.
---

## Browser Automation

**Command:** `openclaw browser`
**Status:** ✅ Fully operational (Chromium, Playwright-backed)
**Available to:** Ziggy, Atlas, Tally, Compass, Forge, Spin, Hammer

The browser is a **shared resource** — one instance, one active tab at a time. Always close when done.

### 🔒 Security Policy — PUBLIC RESEARCH ONLY

**CRITICAL RULE: No private or client data ever enters a browser session.**

- ✅ **Allowed:** Public research (building codes, cost indices, docs, event listings, general lookups)
- ❌ **Forbidden:** Client project data, permit details, estimate values, project names, site addresses, GC names, any PII, financial data

**If browser work requires client/project data:**
1. Agent identifies what's needed
2. Agent routes to Ziggy for review
3. Ziggy sanitizes request → presents to Nathan
4. Nathan performs manually if approved

**Why:** Browser state is shared. URLs, form inputs, cookies, search history can leak data. Keep the vault air-gapped from web sessions.

**Ledger has NO browser access** — financial work is vault-only unless Nathan explicitly opens a URL.

### Core Workflow (AI-Optimized)

```bash
# 1. Open a page
openclaw browser open https://example.com

# 2. Get snapshot (accessibility tree with refs)
openclaw browser snapshot --efficient

# 3. Interact using refs from snapshot
openclaw browser click 12           # Click ref e12
openclaw browser type 23 "query"    # Type into ref e23
openclaw browser fill --fields '[{"ref":"5","value":"hello"}]'

# 4. Re-snapshot after page changes
openclaw browser snapshot --efficient

# 5. Always close when done
openclaw browser close
```

### Snapshot Options

```bash
openclaw browser snapshot                    # Full tree (default)
openclaw browser snapshot --efficient        # Compact — best for AI use
openclaw browser snapshot --interactive      # Interactive elements only
openclaw browser snapshot --format aria      # Raw accessibility tree
openclaw browser snapshot --limit 200        # Cap nodes
```

**Use `--efficient` by default.** It reduces token size significantly while keeping all actionable refs.

### Navigation & Content

```bash
openclaw browser navigate https://new-url.com   # Navigate current tab
openclaw browser open https://url.com           # New tab
openclaw browser screenshot                     # Capture screenshot
openclaw browser screenshot --full-page         # Full page capture
openclaw browser get text                       # Get page text (after snapshot)
openclaw browser wait --text "Loaded"           # Wait for content
openclaw browser wait --load networkidle        # Wait for network
openclaw browser press Enter                    # Press key
openclaw browser scroll down                    # Scroll
```

### Status & Lifecycle

```bash
openclaw browser status     # Check if running
openclaw browser start      # Start browser (auto-starts on first use)
openclaw browser stop       # Stop browser
openclaw browser tabs       # List open tabs
openclaw browser close      # Close current tab
```

### Agent Use Cases

| Agent | When to Use Browser | Example Tasks |
|-------|--------------------|--------------| 
| **Ziggy** | General research, fact lookup, anything without a dedicated tool | "Look up X", "What's the current price of Y" |
| **Atlas** | Public AHJ research, general jurisdiction rules, public code references | Building code sites, general AHJ methodology (NO client-specific permit portals) |
| **Tally** | Public cost databases, general material pricing, regional indices | RSMeans online, public material data (NO client project estimates) |
| **Compass** | Flight search, hotel lookup, restaurant research, venue details, event info | Google Flights, Airbnb, Yelp, venue websites |
| **Forge** | Docs lookup, GitHub PRs/issues (when `gh` CLI isn't enough), package registries, Stack Overflow | MDN docs, npm package pages, GitHub web UI |
| **Spin** | Concert listings, setlist.fm, artist pages, streaming links, event details | Setlist.fm, Bandsintown, venue sites |
| **Hammer** | Material specs, building codes, tool research, public supplier catalogs | Building code sites, material data sheets, Home Depot/Lowe's (NO client project details) |

### Rules

1. **Always `openclaw browser close` when done** — shared resource, don't leave tabs open
2. **Use `--efficient` snapshot** — smaller output, same refs
3. **Snapshot before interacting** — refs change on navigation, always re-snapshot after page loads
4. **Prefer existing tools first** — use `web_search`/`web_fetch` for simple lookups; only use browser when you need to interact with a page (login, fill form, click through, scrape dynamic content)
5. **Don't browse speculatively** — only open the browser when Nathan's request requires it

### When NOT to Use Browser

- Simple factual lookups → use `web_search` tool (faster, cheaper)
- Fetching a static URL → use `web_fetch` tool
- GitHub issues/PRs → use `gh` CLI skill
- Spotify → use `ziggy-spotify` CLI
- Vault content → use `vault` toolkit

### Troubleshooting

```bash
# Browser not responding
openclaw browser stop && openclaw browser start

# Check what's running
openclaw browser status
openclaw browser tabs

# Snapshot returning nothing
openclaw browser wait --load networkidle
openclaw browser snapshot --efficient
```

