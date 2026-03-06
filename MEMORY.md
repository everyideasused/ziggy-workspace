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