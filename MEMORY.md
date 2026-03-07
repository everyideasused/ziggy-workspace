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

### Pinky & The Brain — Web Access & Infra

- **URL:** https://pkm.mouthygeese.com (NoteDiscovery web) + Obsidian Desktop
- **Password:** suxvIm-nipnod-sygro0
- **Docker container:** `notediscovery` on port 8000
- **Tunnel:** cloudflared `affine-pkm-tunnel` → pkm.mouthygeese.com → localhost:8000
- **API access:** `curl -b "session=..." http://localhost:8000/api/notes/{path}` (GET/POST/DELETE)
- **Login:** `POST /login` with form data `password=...` returns session cookie
- **Remaining infra:** cloudflared LaunchAgent auto-start still needs fixing (won't survive reboot)

**Obsidian Plugins & Macros:**
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


### System Update — March 7, 2026: Daily Note v2 + Go Live

**What changed:**
- Daily note redesigned with Life/Work split, AM/PM habits, Yesterday's Wins, Goals, catch-up nudge
- Tasks plugin installed — daily note and weekly review use `tasks` code blocks alongside Dataview
- Buttons plugin installed — Quick Create buttons (Quick Capture, New Meeting) on daily note
- Meal Plan template fixed — now generates [date::] format the dinner query reads
- Dashboard repurposed — removed daily task queries (those live on daily note only), added goals and hours aggregation
- Weekly Review updated — added Goals section, Tasks plugin queries, hours aggregation
- Work hours tracked via inline fields `[hours::]` and `[work_client::]` — aggregated in weekly review and Dashboard
- Recurring review triggers: Monday→weekly review, 1st→finance review, every 4th Monday→fitness assessment
- Habit tracking contract documented in SOUL.md — exact checkbox text ↔ habit note mapping
- All daily notes use `type: daily` (not `type: journal`) — enforced going forward
- Daily note `area` changed from `health` to `system` (spans all areas)

**Plugin stack after update:**
- Templater (existing)
- Dataview (existing)
- Calendar (existing)
- QuickAdd (existing — added Quick Capture + New Meeting choices)
- Tasks (NEW — recurring tasks, done dates)
- Buttons (NEW — quick create on daily note)
- Periodic Notes (recommended)
- Homepage (recommended)
