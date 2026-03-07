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

### Vault Writing Rules
See `Pinky & The Brain/Notes/System Guide.md` for complete vault conventions (folder structure, frontmatter schemas, navigation headers, type taxonomy).

---

## Tasks Plugin (Obsidian)

**Status:** ✅ Installed (March 7, 2026)
**Purpose:** Advanced task management — recurring tasks, done dates, better queries

The daily note and weekly review use `tasks` code blocks for task queries. These coexist with Dataview `[due::]` inline fields.

### Key Queries (used in daily note)
```
# Tasks due on a specific date
```tasks
not done
due on 2026-03-15
short mode
```

# Tasks completed on a date (Yesterday's Wins)
```tasks
done on 2026-03-14
short mode
```

# Overdue tasks
```tasks
not done
due before today
short mode
```

# Recurring task example
- [ ] Weekly Review 📅 2026-03-15 🔁 every week
```

### Vault Toolkit Updates
When Nathan says:
| Nathan Says... | I Do... |
|---|---|
| "What did I get done yesterday?" | Check daily note's "Yesterday's Wins" section or `vault yesterday` |
| "How many hours this week?" | Check Dashboard or weekly review (reads `[hours::]` from daily notes) |
| "Create a recurring task" | Use Tasks plugin format: `📅 YYYY-MM-DD 🔁 every [interval]` |

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

---

## Cart — Shopping Assistant

**Command:** Vault-based (TypeScript tooling in `cart.ts`, `cart-memory.ts`)
**Status:** ✅ Deployed 2026-03-06
**Model:** Local (qwen3:14b) default, Cloud (Sonnet) for complex analysis

### What It Does

Purchase research, price comparison, deal hunting, subscription audits, and buying recommendations. Think of Cart as your deal-savvy friend who always checks unit pricing, stacks coupons, and knows when to buy winter coats (March, not December).

### Knowledge Base (11 Modules, 161 KB)

| Module | Focus | Key Value |
|--------|-------|-----------|
| 01 — Groceries & Food | Store tiers, unit pricing | Save $2,800-3,600/year |
| 02 — Travel & Experiences | Flight timing, points, hotels | $1,200 saved per trip |
| 03 — Promo Codes & Coupons | Honey, Rakuten, stacking | Extra 5-20% off |
| 04 — Subscriptions & Digital | Audits, cancellation scripts | $360/year per $30/mo service |
| 05 — Vehicles | True cost to own, negotiation | Avoid $5,000+ mistakes |
| 06 — Home Services | 3-bid rule, vetting | Quality contractors |
| 07 — Insurance & Financial | Comparison shopping | Better coverage, lower rates |
| 08 — Education & Development | ROI analysis, free alternatives | Avoid worthless certifications |
| 09 — Health & Medical | In-network, HSA optimization | Lower healthcare costs |
| 10 — Real Estate/Wedding/Kids | Major life purchases | Timing + depreciation math |
| 11 — Seasonal & Luxury | Black Friday reality, outlet myths | Buy winter coats in March |

### Dispatch Triggers

- buy, purchase, deal, coupon, price, compare, subscription
- discount, save money, where to buy, is this a good price

### Core Principles (From KB)

1. **Unit pricing wins** — Always compare per-unit cost, never sticker price
2. **Stack everything** — Coupons + cashback + promo codes + points
3. **Timing matters** — Flights 6-8 weeks, cars end-of-quarter, coats in March
4. **Audit subscriptions quarterly** — $30/month × 12 = $360/year
5. **Three bids minimum** — Home services, contractors
6. **Calculate total cost of ownership** — Not just purchase price

### Integration with Other Agents

| Purchase Type | Coordination |
|---------------|--------------|
| Grocery optimization | Sage (meal planning) |
| Travel booking | Compass (execution) |
| Home services contractors | Hammer (craft layer) |
| Construction materials | Tally (estimating) |
| Budget impact | Ledger (financial) |

### Memory System

- **CART_MEMORY.md:** Purchase calibration, brand performance, deal quality
- **Cart Session State.md:** Active price watches, pending recommendations
- **Cart_Sessions/:** Dated shopping session logs

### TypeScript Tooling

```bash
# KB retrieval by keyword
npx ts-node cart.ts kb groceries
npx ts-node cart.ts travel

# Unit price calculation
npx ts-node cart.ts unit 12.99 24 oz

# Deal comparison
npx ts-node cart.ts deal 199.99 149.99

# Subscription impact
npx ts-node cart.ts sub 29.99

# Full context (memory + KB + sessions)
npx ts-node cart.ts context
```

### Output Formats

| Purchase Size | Format |
|---------------|--------|
| Under $100 | Quick recommendation (3-5 bullets) |
| $100-500 | Comparison matrix (options + trade-offs) |
| Over $500 | Research brief (timing + TCO + alternatives) |

---

Add whatever helps you do your job. This is your cheat sheet.
