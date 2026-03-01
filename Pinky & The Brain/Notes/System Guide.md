---
type: system
area: 
status: active
tags:
  - system
  - guide
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# ⚙️ System Guide
## How This Vault Works

---

## 🗂️ Vault Structure

```
Vault Root/
├── 🏠base.md              ← Home hub. Start here every day.
├── Journal/                ← Daily notes only. One per day.
│   └── 2025-07-15.md
├── Notes/                  ← Everything else. Flat folder. No sub-folders.
│   ├── Work Hub.md
│   ├── Ziggy Hub.md
│   ├── CFA Nashville - Green Hills.md
│   ├── Mac Mini M4.md
│   └── ... every note you create
├── Templates/              ← Templater templates. Never edit directly.
│   ├── Daily Note.md
│   ├── Weekly Review.md
│   ├── Project.md
│   ├── Work Client Project.md
│   ├── Work Site Project.md
│   ├── Area Hub.md
│   ├── Meeting.md
│   ├── Person.md
│   ├── Organization.md
│   ├── Item.md
│   ├── Goal.md
│   ├── Resource.md
│   └── Quick Capture.md
└── Attachments/            ← Images, PDFs, files. Auto-organized.
```

**Why flat Notes folder?** Organization happens through frontmatter, tags, and Dataview queries — not folders. Every note is findable through search, links, and queries regardless of where it physically sits. Folders create false hierarchies that break as your vault grows.

---

## 📐 Core Rules

### Rule 1: Every Note Gets a Navigation Header
The first line of every note is always:
```
> [[🏠base|🏠]] · [[YYYY-MM-DD|📅 Today]]
```
Daily notes add yesterday/tomorrow links. Work notes add the Work Hub and Client links. This means you are never more than one click from home or today.

### Rule 2: Frontmatter Drives Everything
Every note has YAML frontmatter that tells the system what it is. The key fields are:

| Field | Purpose | Required |
|-------|---------|----------|
| `type` | What kind of note this is | Yes — always |
| `area` | Which life area it belongs to | Yes — always |
| `status` | Current state (inbox, active, complete, archived) | Yes — always |
| `tags` | Additional categorization | Yes — at least one |

If a note doesn't have these four fields, it won't show up in Dataview queries and effectively becomes invisible to the system.

### Rule 3: Status Controls Visibility
| Status | Meaning | Shows Up In |
|--------|---------|-------------|
| `inbox` | Uncategorized, needs processing | 📥 Inbox on base note |
| `active` | Currently relevant and in use | Project lists, area hubs, databases |
| `complete` | Done, but still reference-worthy | Activity logs via backlinks |
| `archived` | No longer relevant | Archives section on base note |
| `retired` | For items — no longer owned/active | Inventory retired list |

### Rule 4: Link Liberally
When you mention a project, person, client, or concept — link it with `[[double brackets]]`. Every link creates a bidirectional connection. Your future self will thank you when searching for "every time I mentioned the Charlotte fire marshal."

### Rule 5: IDs Connect to Smartsheet
For work items, always include `client_id` and `project_id` in frontmatter so you can cross-reference between Obsidian and Smartsheet. The IDs are the bridge between your personal knowledge layer and the team's operational system.

---

## 🏷️ Type Taxonomy

| Type Value | Template | Purpose |
|-----------|----------|---------|
| `project` | Project.md | Any project (personal or work client) |
| `work-project` | Work Site Project.md | Individual construction site/store project |
| `area-hub` | Area Hub.md | Hub note for a life area |
| `meeting` | Meeting.md | Meeting notes |
| `person` | Person.md | A person you interact with |
| `organization` | Organization.md | A company, agency, or group |
| `item` | Item.md | Physical item, subscription, or service |
| `account` | Account.md | Financial account (bank, card, loan, investment) |
| `bill` | Bill.md | Recurring payment or bill |
| `monthly-finance` | Monthly Finance Review.md | Monthly financial review |
| `goal` | Goal.md | A measurable goal |
| `resource` | Resource.md | Reference material, guides, articles |
| `database` | *(manual)* | Hub notes that aggregate data (like Inventory) |
| `note` | Quick Capture.md | General note / inbox capture |
| `system` | *(manual)* | System documentation (like this guide) |

---

## 🏛️ Areas

These are your permanent areas of responsibility. They don't end — they're maintained.

| Area Tag | Hub Note | Covers |
|----------|---------|--------|
| `work` | [[Work Hub]] | All client work, PMO, business |
| `relationships` | [[Relationships Hub]] | Family, friends, partner, social |
| `household` | [[Household Hub]] | Home maintenance, inventory, garden |
| `health` | [[Health Hub]] | Fitness, nutrition, medical, mental health |
| `interests` | [[Interests Hub]] | Hobbies, reading, philosophy, creative |
| `education` | [[Education Hub]] | Learning, courses, certifications |
| `finances` | [[Finances Hub]] | Budget, investments, taxes, insurance |

---

## 🔄 Workflows

### Starting Your Day
1. Open `🏠base`
2. Click today's daily note link
3. Check the inbox section — anything to process quickly?
4. Scan the Projects section — any health changes?
5. Start working in your daily note

### Quick Capture (Phone or Desktop)
1. Create a new note (Cmd+N or mobile quick action)
2. Use the **Quick Capture** template
3. Write your thought
4. The note is automatically `status: inbox` and will appear on your base note
5. Process it later during daily or weekly review

### Inbox Processing
When you see items in the 📥 Inbox section on `🏠base`:
1. Open the note
2. Read it — decide what it is
3. Update frontmatter:
   - Assign a `type` (project, note, resource, goal, etc.)
   - Assign an `area` (work, health, finances, etc.)
   - Change `status` from `inbox` to `active` (or `archived` if it's not worth keeping)
   - Add relevant `tags`
4. Link it to related notes with `[[wikilinks]]`
5. Done — it disappears from the inbox and appears in the right hub

Process inbox items during your daily check-in or weekly review. Don't let things sit in inbox for more than a week.

### Creating a New Work Client
1. Create a new note in `Notes/`
2. Apply the **Work Client Project** template
3. Fill in the Templater prompts (client name, IDs, etc.)
4. The note auto-appears in your Work Hub and base Projects list

### Creating a New Site Project
1. Create a new note in `Notes/`
2. Apply the **Work Site Project** template
3. Fill in the prompts
4. Link it to the Client Project note
5. It auto-appears under that client's Active Projects query

### Weekly Review
1. Create a new note using the **Weekly Review** template
2. Work through each section: inbox, projects, work status, areas, planning
3. Update any project health/status in frontmatter
4. This is also when you prep your Smartsheet updates

### Adding an Inventory Item
1. Create a new note in `Notes/`
2. Apply the **Item** template
3. Fill in the prompts (physical item, subscription, etc.)
4. It auto-appears in the [[Inventory Database]] hub

---

## 🔌 Required Plugins

| Plugin | Purpose | Settings |
|--------|---------|----------|
| **Templater** | Powers all templates with prompts and date logic | Template folder: `Templates/` |
| **Dataview** | Powers all dynamic queries on hub notes | Enable JavaScript queries |
| **Calendar** | Visual calendar linked to daily notes | Daily notes folder: `Journal/` |

### Recommended Additional Plugins
| Plugin | Purpose |
|--------|---------|
| **Periodic Notes** | Weekly note support (for weekly reviews) |
| **Quick Add** | Faster note creation with template selection |
| **Homepage** | Auto-open `🏠base` on launch |

---

## ⚙️ Settings to Configure

### Templater Settings
- Template folder location: `Templates`
- Trigger Templater on new file creation: **ON**
- Enable folder templates: **ON**
  - `Journal/` → `Templates/Daily Note.md`

> **CRITICAL:** The folder template rule above is what makes yesterday/tomorrow links work. When you click `[[2026-03-05]]` and that note doesn't exist, Obsidian creates it in `Journal/` (because of the Daily Notes setting below), and Templater auto-applies the Daily Note template (because of this folder rule). This gives you a fully rendered daily note with the correct workout, tasks, and habits — not a blank file.

### Daily Notes (Core Plugin) Settings
- New file location: `Journal`
- Date format: `YYYY-MM-DD`
- Template file location: `Templates/Daily Note.md`

> **How date links work:** Any `[[YYYY-MM-DD]]` wikilink in the vault acts as a link to that day's daily note. If the note exists, it opens it. If it doesn't, Obsidian creates it in `Journal/` and Templater processes the template. This means you can write `[[2026-04-15]]` anywhere in any note and it becomes a clickable link to that day. The yesterday/tomorrow nav links on each daily note work the same way.

### Attachments Settings
- Default location for new attachments: `Attachments`

### File & Links Settings
- Default location for new notes: `Notes`

---

## ✅ Task Management

Tasks live where the work lives — in daily notes, project notes, and anywhere else. Dataview pulls scheduled ones to the right daily note.

### Two Types of Checkboxes

**1. Simple to-dos (no due date)**
```markdown
- [ ] Buy groceries
- [ ] Review the exercise guide
```
These stay LOCAL to the note where you wrote them. They never appear on any daily note. Use these for checklists, prep lists, brainstorm items, and anything that doesn't need to surface on a specific day.

**2. Scheduled tasks (with due date)**
```markdown
- [ ] Call the electrician about the outlet [due:: 2026-03-10]
- [ ] Submit Q2 report to client [due:: 2026-04-01] [[CFA Nashville]]
```
These surface on the daily note for that date under "Scheduled (Due Today)." If you miss the date, they roll into "Overdue" on every subsequent daily note until checked off.

**The rule is simple:** No `[due::]` = stays where you wrote it. Has `[due::]` = shows up on that day's daily note.

### How to Create Scheduled Tasks
Add `[due:: YYYY-MM-DD]` to any checkbox anywhere in the vault:
```markdown
- [ ] Task text [due:: 2026-03-15]
- [ ] Task with project link [due:: 2026-03-15] [[Project Name]]
```

The `[due:: YYYY-MM-DD]` is a Dataview inline field. The format must be exact — `YYYY-MM-DD` with the double colon and spaces.

### Where Scheduled Tasks Show Up
- **Daily note → "Scheduled (Due Today)"** — all uncompleted tasks where `[due:: today]`
- **Daily note → "Overdue"** — all uncompleted tasks where `[due::]` is before today
- **Monday daily note → "This Week at a Glance"** — all tasks due this week (Mondays only)
- **The original note** — the task always stays visible where you wrote it too

### Task Workflow
1. Quick to-dos with no specific deadline → write in today's daily note under "Today" (no due date needed)
2. Tasks due on a specific day → add `[due:: YYYY-MM-DD]` — it'll show up on that day
3. Tasks tied to a project → write them in the project note with a due date — they appear on both the project and the daily note
4. Overdue tasks roll forward automatically until completed
5. Complete a task → check the box wherever it lives — it disappears from all queries

### What Does NOT Show Up on Daily Notes
- Prep checklists in project notes (no due dates)
- Implementation phase tasks (no due dates unless you explicitly schedule them)
- Any checkbox that is just a local checklist item

---

## 🔁 Habit Tracking

Habits are tracked as `type: habit` notes with their own template.

### How Habits Work
1. Create a habit note from the **Habit** template (e.g., "Morning Walk", "Read 30 Minutes")
2. Set frequency (daily, weekdays, 3x/week, etc.) and target per day
3. The daily note shows a Dataview table of your active habits with current streaks
4. Default habit checkboxes (water, protein, sleep) are built into every daily note
5. Custom habits show in the Dataview table — check them off manually in the daily note
6. Update the `streak` field in the habit note's frontmatter as you go
7. To add a new habit: tell Ziggy or create from Habit template

### Telling Ziggy to Add a Habit
Just say: "I want to start reading 30 minutes a day" and Ziggy will create a Habit note with:
- `type: habit`, `frequency: daily`, `target_per_day: 1`
- The habit auto-appears in every daily note's habit table

---

## 🏷️ Tag Conventions

### Tags vs Frontmatter — When to Use Which

**Frontmatter fields** are structured data for precise filtering. They have specific values that Dataview queries filter on.
- `type: project` — Dataview pulls all projects
- `client_id: CLT-001` — bridges to Smartsheet
- `health: green` — queryable status indicator
- `budget: 1200000` — numeric value for calculations

**Tags** are broad categories for cross-cutting concerns and quick searching. They supplement frontmatter.
- `#work` — marks anything work-related regardless of type
- `#ziggy` — marks AI-generated or AI-related content
- `#v-shape` — cross-cuts across workouts, assessments, resources

**The rule:** If Dataview needs to filter on it, it goes in frontmatter. If it's for human browsing and search, it goes in tags. Both can coexist — a work client project has `area: work` in frontmatter AND `#work` in tags.

Tags supplement frontmatter — use them for cross-cutting concerns that don't fit neatly into one area.

| Tag | Use For |
|-----|---------|
| `#project` | All projects |
| `#work` | Work-related anything |
| `#client` | Client project notes |
| `#site-project` | Individual store/site projects |
| `#meeting` | Meeting notes |
| `#person` | People notes |
| `#organization` | Organization notes |
| `#item` | Inventory items |
| `#inventory` | Inventory-related |
| `#goal` | Goals |
| `#resource` | Reference material |
| `#area` | Area hubs |
| `#ziggy` | AI/Claude content |
| `#draft` | Work in progress |
| `#save-state` | Saved Claude conversations |
| `#research` | Research outputs |
| `#review` | Weekly/monthly reviews |
| `#system` | Vault system documentation |

---

## 🤖 Automation Scripts

Three Python scripts automate vault maintenance tasks:

### Vault Health Check
**Script:** `vault-health-check`  
**Location:** `~/.local/bin/vault-health-check`  
**Purpose:** Scans the vault for common issues and generates a health report

**Checks for:**
- Missing or incomplete frontmatter (type, area, status, tags)
- Invalid status or type values
- Broken wiki-links
- Inbox items older than 7 days
- Orphaned notes (no inbound links)

**Usage:**
```bash
vault-health-check              # Run full scan and report
```

**When to run:** Weekly during weekly review, or on-demand when troubleshooting

---

### Habit Streak Updater
**Script:** `update-habit-streaks`  
**Location:** `~/.local/bin/update-habit-streaks`  
**Purpose:** Calculates habit streaks by scanning daily notes for completed checkboxes and updates habit note frontmatter

**How it works:**
1. Finds all `type: habit`, `status: active` notes
2. Scans daily notes backward from target date
3. Counts consecutive days with `- [x] Habit Name` checked
4. Updates `streak` and `best_streak` fields
5. Reports changes

**Usage:**
```bash
update-habit-streaks                    # Update as of today
update-habit-streaks --date 2026-03-15  # Update as of specific date
```

**When to run:** Daily after completing habits, or weekly during review

---

### Net Worth Calculator
**Script:** `calculate-net-worth`  
**Location:** `~/.local/bin/calculate-net-worth`  
**Purpose:** Aggregates all Account and Bill notes to calculate total assets, liabilities, and net worth

**Calculates:**
- Assets: Cash, Savings, Investments, Property
- Liabilities: Credit Cards, Loans
- Net Worth: Assets - Liabilities
- Monthly recurring bills total

**Usage:**
```bash
calculate-net-worth                 # Display report only
calculate-net-worth --update-hub    # Display + update Finances Hub
```

**When to run:** Monthly during Monthly Finance Review

**Output:** Detailed breakdown of accounts by category, net worth summary, and monthly bills total. With `--update-hub`, automatically updates the summary table in Finances Hub.

---

## 🚨 Common Mistakes to Avoid

1. **Creating folders to organize notes.** Don't. Use frontmatter + Dataview.
2. **Forgetting frontmatter on a new note.** Always use a template. No naked notes.
3. **Leaving status as inbox forever.** Process inbox in weekly review at minimum.
4. **Duplicating Smartsheet data in Obsidian.** Obsidian is your THINKING layer. Smartsheet is your DATA layer. Don't copy spreadsheet rows into Obsidian — link to them and write about them.
5. **Not linking.** When in doubt, `[[link it]]`. Links are free and backlinks are gold.
