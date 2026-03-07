### Obsidian and Collaboration

- The primary Obsidian vault for Nathan's construction PMO and life organization is named **"Pinky & The Brain."** We call it **"P&B"** or **"narf"** for short.
- It is located on my external SSD at `/Volumes/ziggy/openclaw-workspace/Pinky & The Brain/`.
- Collaboration and syncing occur via **Obsidian Sync** (switched from Proton Drive for simplicity).
- Web access via NoteDiscovery at https://pkm.mouthygeese.com.
- The vault's content includes a comprehensive PARA-based structure with templates and dashboards for program, project, RFP, team, and portfolio management.
- I am configured to use "Pinky & The Brain" as my default Obsidian vault via `obsidian-cli`.

### Communication Channels

- **iMessage** - Personal relationship, friendship, building our partnership
- **Discord (ziggy-mothership)** - Project work, construction PM discussions, technical topics
- Future plan: Build custom web app at our own domain to replace/augment Obsidian

### Important People

- **Bibba** - Nathan's life partner and best friend. They live together and love each other. I treat her with absolute kindness and respect.

### Health & Diet

- **Nathan is vegan** — All recipes should be vegan or easily convertible to vegan
- When researching recipes, prioritize plant-based options
- When converting recipes, suggest vegan substitutions (e.g., tofu for meat, cashew cream for dairy, flax eggs for eggs)

### Recipe & Meal Planning System

- **All in Obsidian vault** — No external apps (Reminders, etc.)
- **Location:** All recipes, meal plans, and grocery lists in `Pinky & The Brain/Notes/`
- **Access points:** Household Hub → Recipe Index, Meal Plans, Grocery Lists
- **Process documented:** See `Meal Planning System - Overview.md` and `Recipe to Grocery List - Process.md`
- **Workflow:** 
  1. Browse [[Recipe Index]] → Select 4-7 recipes
  2. Update [[Meal Plan - Current Week]] with selections
  3. Ask Ziggy: "Build grocery list for this week's meal plan"
  4. Ziggy aggregates ingredients → creates grocery list with checkboxes
  5. Nathan checks off what he has at home → shops for rest
- **Recipe preferences:** Vegan, high-protein (20g+ per meal), quick (≤30 min preferred), diverse cuisines
- **Grocery list format:** Organized by category (Produce, Canned/Jarred, Grains, Pantry, Dairy Alternatives, Optional Toppings) with checkboxes
- **Grocery list naming:** `Grocery List - Week of [YYYY-MM-DD].md`
- **Meal plan naming:** `Meal Plan - Current Week.md` (updates weekly)
- **Recipe template:** Includes frontmatter (type, cuisine, vegan, servings, times, protein, source), ingredients, instructions, notes, related links
- **First meal plan created:** March 2, 2026 — 4 dinners (Tofu Stir Fry, Black Bean Tempeh Tacos, Mediterranean Chickpea Pasta Salad, Coconut Chickpea Curry)
- **System architecture:** Household Hub → Recipe Index ← Meal Plan → Ziggy reads → Grocery List
- **V2 Improvements (Mar 1, 2026):**
  - Sunday reminders (HEARTBEAT.md) for planning and shopping
  - Day-by-day meal assignments (Mon-Sun in meal plan)
  - Daily note integration ("Dinner Tonight" section auto-populated)
  - Recipe rating system (rate in daily note → updates recipe frontmatter)
  - Workflow: Plan on Sunday → Ziggy populates daily notes → Cook → Rate → Ziggy updates recipes
- **Process saved:** `How to Populate Daily Notes with Meals.md`
- **Populate command:** User says "Add this week's meals to daily notes" → I read meal plan → populate each day's journal note with dinner section
- **Rating sync:** User says "Update rating for [Recipe]" → I read recent daily notes for rating → update recipe frontmatter
- **Daily notes location:** `Journal/YYYY-MM-DD.md` (date format with dashes)
- **Important:** Always verify current date when calculating meal plan dates (e.g., if today is Sunday Mar 1, Monday is Mar 2, not Mar 3)

### App Development Plans

- Nathan and I will be building apps together in the future.
- Created comprehensive specification framework (Feb 15, 2026) in Pinky & The Brain vault Resources/:
  - **App Specification Template.md** — Practical intake template for describing app requirements
  - **How to Specify Apps - Best Practices.md** — Educational guide on software specification principles
- Specification approach combines:
  - Software Requirements Specification (SRS) industry standards
  - Jobs-to-be-Done framework for user stories
  - SMART criteria for clear requirements
  - MVP-first philosophy (must-have vs nice-to-have)
  - Plain language emphasis (problem before solution)
- Nathan will use template to describe app ideas; I'll build based on clear specs
- Goal: Train Nathan to specify requests effectively for best output
- **Feb 15, 2026 — Pivoted from custom build to existing tools:**
  - Original plan: Custom PKM+PMO app using BlockSuite — tabled (too long to build)
  - **New plan:** Obsidian (Pinky & The Brain vault) as PKM/second brain + Smartsheet for construction PMO
  - Smartsheet: enterprise PMO — programs, sites, Gantt, budgets, dashboards
  - Intake questionnaire still in vault but may not be needed now

### Pinky & The Brain — PKM System

- **URL:** https://pkm.mouthygeese.com (NoteDiscovery web) + Obsidian Desktop
- **Preferred Model:** Kimi (openrouter/moonshotai/kimi-k2.5) — stay on free model for cost savings, fine for PKM/task work
- **Discord #pkm channel:** Always use Kimi (cost savings)
- **Platform:** NoteDiscovery (web access) + Obsidian (desktop/power user)
- **Password:** suxvIm-nipnod-sygro0
- **Vault location:** `/Volumes/ziggy/openclaw-workspace/Pinky & The Brain/`
- **Docker container:** `notediscovery` on port 8000
- **Tunnel:** cloudflared `affine-pkm-tunnel` → pkm.mouthygeese.com → localhost:8000
- **Ziggy access:** Direct filesystem read/write (Obsidian vault) + NoteDiscovery REST API (web)
  - Files: Read/write markdown directly at vault path
  - API: `curl -b "session=..." http://localhost:8000/api/notes/{path}` (GET/POST/DELETE)
  - Login: `POST /login` with form data `password=...` returns session cookie

**Forever Notes-inspired Structure:**
- **Philosophy:** Simple, modular, grows with you. One Home note links to all Hubs
- **✱ Home** — Landing page with live Dataview dashboards (opens on startup)
- **📓 Journal** — Daily reflection hub with Dataview auto-listing
- **🧠 Knowledge / 💝 Relationships / 🏠 Household / 💪 Health / 💰 Finances / 👔 Professional** — Six Area Hubs with bi-directional links
- **🎯 Goals / 📋 Projects / ✅ Actions** — Action layer Hubs
- **📥 Inbox** — Quick capture zone (via Dataview in Home, notes tagged status: inbox)
- **📚 Resources** — Reference library (notes in Notes/ folder tagged appropriately)
- **📦 Archives** — Completed work (status: archived)
- **Folder structure (AUTHORITATIVE):** See `System Guide.md` — 4 root folders only: `🏠base.md`, `Journal/`, `Notes/`, `Templates/`, `Attachments/`
- **Daily notes:** In `Journal/` folder with format `YYYY-MM-DD.md` (dashes, not dots)
- **All other notes:** In `Notes/` flat folder (no subfolders)
- **Vault rules:** Every note needs frontmatter (type, area, status, tags). See `System Guide.md` for complete rules

**Obsidian Plugins Installed:**
- **Dataview** — Auto-updating queries in Home/Hubs (most important)
- **Tasks** — Task tracking with completion
- **Templater** — Dynamic templates with variables
- **Periodic Notes** — Daily/weekly/monthly notes
- **Kanban** — Visual boards
- **QuickAdd** — Fast capture macros: New Project, Quick Capture, New Journal, Go Home
- **Auto Note Mover** — Rules-based filing
- **Omnisearch** — Better vault search
- **Excalidraw** — Diagrams
- **Projects** — Table/board views
- **Tracker** — Habit/metrics
- **Breadcrumbs** — Navigation
- **Tag Wrangler** — Tag management

**QuickAdd Macros:**
- **New Project** → Creates in Notes/ folder using template (flat structure)
- **Quick Capture** → One-keystroke inbox dump to Notes/ (status: inbox)
- **New Journal Entry** → Creates dated note in Journal/ folder (YYYY-MM-DD.md format)
- **Go Home** → Returns to 🏠base

**Templates:**
- **Daily Note** — Full journal with morning/evening prompts, metrics
- **Project Template** — Status, milestones, actions, definition of done
- **Area Note** — Simple linked note for any area

**Inbox workflow:** Nathan drops items in 📥 Inbox (web or desktop). Ziggy processes and routes to right Hub/location.

**Remaining infra:** cloudflared LaunchAgent auto-start still needs fixing (won't survive reboot)

### 🚨 CRITICAL VAULT RULES (Added Mar 6, 2026)

**1. NEVER add files to the vault without frontmatter and navigation headers.**

Every file MUST include:
- **Frontmatter** (type, area, status, tags)
- **Navigation header** (`> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Hub|Hub]]`)

**When importing KB modules or external content:**
- DO NOT import raw files directly
- ADD frontmatter + nav header BEFORE writing to vault
- Use vault structure from System Guide.md

**Lesson learned:** March 5, 2026 — Imported 26 Tally KB files without frontmatter during rapid deployment. Required cleanup script on March 6. Never again.

**2. Hub naming MUST match actual hub filenames.**

**Actual hub files (no emoji in filename):**
- `Health Hub.md`, `Work Hub.md`, `Household Hub.md`, `Interests Hub.md`, `Finances Hub.md`, `Relationships Hub.md`, `Education Hub.md`, `Archives Hub.md`, `Ziggy Hub.md`

**Navigation headers:**
- Correct: `[[Health Hub|Health Hub]]` or just `[[Health Hub]]`
- Incorrect: `[[💪 Health Hub|Health Hub]]`, `[[Health Hub|💪 Health Hub]]`, `[[Household Hub|🏠 Household]]`

**Rule:** Emoji in note titles/headers is fine (decorative). Emoji in wiki-link targets or display text is wrong — use actual hub filenames.

**Lesson learned:** March 6, 2026 — I created inconsistent hub links with emoji during agent deployments. Fixed 35 files. Hub filenames = source of truth for links.

### Fitness & Workout Tracking System

- **Program:** Nathan 170@12 — Kettlebell Calisthenics Program (36 weeks, 3 phases)
- **Goal:** Build from 147.7 lbs @ 18.7% BF → 170 lbs @ 12% BF
- **Training schedule:** M/W/F strength (30 min), T/Th conditioning (30 min), Sat/Sun rest
- **Phase 1 (Weeks 1-12):** Foundation + lean bulk (March 9 - May 31, 2026)
- **Location:** All program notes in `Pinky & The Brain/Notes/`
- **Workout logs:** `Iron_Sessions/` folder (YYYY-MM-DD format)

**Daily Note Integration (March 6, 2026):**
- **Pattern:** Same as Sage meal planning — zero friction tracking
- **Implementation:** 83 daily notes populated (March 9 - May 31, 2026) with workout sections
- **Pre-created:** 60 workout log files in `Iron_Sessions/` with templates
- **Progressive overload:** Weights/reps automatically increase by week in daily notes
- **Workflow:** Open daily note → see workout → do workout → click log link → fill blanks → done

**Daily note format:**
```markdown
## 🏋️ Workout Today

**Day:** [Workout Name] (Week X)  
**Program:** [[Nathan 170@12 — Kettlebell Calisthenics Program]]  
**Workout Guide:** [[Nathan 170@12 — [Day Name]]]  
**Log File:** [[Iron_Sessions/YYYY-MM-DD — Week X [Day Name]]]

### Quick Summary
[Exercise list with target weights/reps/RPE]

**Duration:** 30 minutes
```

**Log file template:** Pre-created with frontmatter, navigation, pre-workout section (weight, sleep, energy, protein), main work (exercise blanks), notes (form, difficulty, modifications), post-workout (protein, recovery)

**Key principle:** Nathan opens daily note, workout is there, one click to log file, fill in after workout. Same zero-friction pattern as Sage meals.

**First workout:** Monday, March 9, 2026 (Week 1 Monday Lower)

### Subagent & Tool Access Configuration

**Issue discovered (March 6, 2026):** Spin couldn't run `ziggy-spotify` commands — hit approval prompts even though Ziggy could run same commands fine.

**Root cause:**
1. Subagents not in `~/.openclaw/exec-approvals.json`
2. `ziggy-spotify` command not on security allowlist

**Fix applied:**
1. Updated `exec-approvals.json` — added all 8 subagents (atlas, sage, iron, compass, spin, forge, ledger, hammer) with `policy: "allow"`
2. Added `~/.local/bin/ziggy-spotify` to allowlist: `openclaw approvals allowlist add --agent "*" "$HOME/.local/bin/ziggy-spotify"`
3. Reloaded gateway (kill -HUP 787)

**Result:** All agents now have exec permissions. Spin has full Spotify control without approval prompts.

**Lesson:** Subagent exec access requires TWO things:
- Agent policy in exec-approvals.json (`policy: "allow"`)
- Command on security allowlist (via `openclaw approvals allowlist add`)

### Browser Automation Capabilities

**Tested:** March 6, 2026 — setlist.fm navigation to fetch Turnpike Troubadours setlist

**What works:**
- ✅ Open pages, search, navigate, interact with forms
- ✅ Basic page snapshots and screenshots
- ✅ Click, type, wait for loading

**What has limitations:**
- ⚠️ Dynamic content sites (setlist.fm) — content loads via JavaScript, readability extraction misses actual data
- ⚠️ Some sites timeout on complex pages
- ⚠️ Anti-bot measures (403, captcha) on sites like jambase.com, concerty.com

**Best use cases:**
- Public research (building codes, cost databases, documentation)
- Static content sites
- Form submissions when API unavailable

**Not ideal for:**
- Sites with heavy JavaScript rendering
- Sites with anti-bot protection
- When API exists (use API instead)

**Security note:** Browser = public research only. Never use for client/project data. See TOOLS.md security policy.