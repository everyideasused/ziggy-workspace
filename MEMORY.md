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
- **📥 Inbox** — Quick capture zone
- **📚 Resources** — Reference library
- **📦 Archives** — Completed work
- **Folder structure:** PARA with zero-padded numbering: 00-Inbox, 01-Projects, 02-Areas, 03-Resources, 04-Archives, 05-System
- **Daily notes:** Live in vault root with dot-formatted dates: `YYYY.MM.DD.md`
- **Subfolders allowed** anywhere within 00–05 PARA structure as long as logically placed
- **Vault rules:** Every note needs frontmatter (created, updated, type, area, tags, status). See `05-System/vault-rules.md`

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
- **New Project** → Creates in 3-Projects/ using template
- **Quick Capture** → One-keystroke inbox dump
- **New Journal Entry** → Creates dated note in 6-Journal/
- **Go Home** → Returns to ✱ Home

**Templates:**
- **Daily Note** — Full journal with morning/evening prompts, metrics
- **Project Template** — Status, milestones, actions, definition of done
- **Area Note** — Simple linked note for any area

**Inbox workflow:** Nathan drops items in 📥 Inbox (web or desktop). Ziggy processes and routes to right Hub/location.

**Remaining infra:** cloudflared LaunchAgent auto-start still needs fixing (won't survive reboot)