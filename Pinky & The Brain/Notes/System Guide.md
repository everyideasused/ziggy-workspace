---
type: system
area: system
status: active
tags:
  - system
  - guide
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[System Hub|System Hub]]

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
**The first non-blank line after frontmatter closing `---` must be the navigation header.**

**Format 1: Daily Notes (Journal/)**
```
> [[🏠base|🏠]] · [[2026-03-01|← Yesterday]] · [📅 Today](obsidian://daily) · [[2026-03-03|Tomorrow →]]
```
- Yesterday/Tomorrow use static date wikilinks (actual YYYY-MM-DD dates)
- Today uses dynamic `obsidian://daily` protocol (always opens today's note)

**Format 2: System Notes & Area Hubs**
```
> [[🏠base|🏠]] · [📅 Today](obsidian://daily)
```
- System notes (area: system) use simple format
- Area hub notes (Health Hub, Work Hub, etc.) use simple format

**Format 3: Area-Specific Notes (Most Notes)**
```
> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Area Hub|Area Hub]]
```
Examples by area:
- Work: `> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Work Hub|Work Hub]]`
- Health: `> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Health Hub|Health Hub]]`
- Household: `> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Household Hub|Household Hub]]`
- Finances: `> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Finances Hub|Finances Hub]]`
- Relationships: `> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Relationships Hub|Relationships Hub]]`
- Interests: `> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Interests Hub|Interests Hub]]`
- Education: `> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Education Hub|Education Hub]]`

**Format 4: Special Context Notes**
```
> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Specific Hub|Context]]
```
Example - Workout logs link to program:
```
> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Workout Program|🏋️ Program]]
```

**Critical Rules:**
- **ONLY ONE navigation header per note** — no duplicates
- **Always use `[📅 Today](obsidian://daily)`** — never static dates for "Today" link
- **Area-specific notes link to their area hub** — one click back to context
- Header appears immediately after frontmatter, before any content

**Structure:**
```
---
frontmatter fields
---
[blank line]
> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Area Hub|Area Hub]]
[blank line]
---
[blank line]
# Note Title
``` 

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
| `meal-plan` | Weekly meal plan |
| `grocery-list` | Grocery/shopping list |
| `documentation` | System or process documentation |
| `process` | Workflow or process reference |
| `research` | Research outputs and analysis |
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
| **Tasks** | Task queries with done dates, recurring tasks | Global filter: blank; Done date: ON |
| **Buttons** | Quick Create buttons on daily note | No config needed |
| **QuickAdd** | Fast note creation from templates | Choices: Quick Capture, New Meeting |

### Recommended Additional Plugins
| Plugin | Purpose |
|--------|---------|
| **Periodic Notes** | Weekly note support (for weekly reviews) |
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

Tasks live where the work lives — in daily notes, project notes, and anywhere else. Two query systems work together.

### Two Query Systems

**Dataview** (`[due:: YYYY-MM-DD]` inline fields) — used on hub notes and project pages for area-based filtering.

**Tasks plugin** (`tasks` code blocks) — used on the daily note and weekly review for done dates, recurring tasks, and short mode display.

Both systems read the same tasks. You can write due dates in either format:
- `- [ ] Task [due:: 2026-03-15]` — Dataview style (original)
- `- [ ] Task 📅 2026-03-15` — Tasks plugin style (also valid)

### Two Types of Checkboxes

**1. Simple to-dos (no due date)**
```
- [ ] Buy groceries
- [ ] Review the exercise guide
```
These stay LOCAL to the note where you wrote them. They never appear on any daily note.

**2. Scheduled tasks (with due date)**
```
- [ ] Call the electrician [due:: 2026-03-10]
- [ ] Submit report 📅 2026-03-10
```
These surface on the daily note for that date. If missed, they roll into "Overdue."

### Recurring Tasks (NEW)

The Tasks plugin supports recurring tasks:
```
- [ ] Weekly Review 📅 2026-03-15 🔁 every week
- [ ] Monthly Finance Review 📅 2026-04-01 🔁 every month
```
When you check off a recurring task, it auto-creates the next occurrence.

The daily note also auto-generates review triggers:
- **Monday** → creates a Weekly Review task due Sunday
- **1st of month** → creates a Monthly Finance Review task
- **Every 4th Monday** of the fitness program → creates a Fitness Assessment task

### Work Hours Tracking

Daily notes include inline fields at the bottom of the Work Log:
```
**Total hours today:** [hours:: 3.5]
**Primary client:** [work_client:: CFA]
```

These are aggregated by the Weekly Review and Dashboard using dataviewjs queries. Fill them in at end of day.

### Task Workflow
1. Quick to-dos → write in daily note (no due date)
2. Tasks due on a specific day → add `[due:: YYYY-MM-DD]`
3. Tasks tied to a project → write in project note with due date
4. Overdue tasks roll forward automatically
5. Complete a task → check the box → it disappears from queries and shows in "Yesterday's Wins"

---

## 🔁 Habit Tracking

### How Habits Work
1. Create a habit note from the **Habit** template
2. Set frequency and target per day
3. The daily note has two habit systems that work together:
   - **Hardcoded checkboxes** — core habits with emoji prefixes, ordered AM/PM
   - **Dataview table** — pulls all active habit notes with streak data
4. The `update-habit-streaks` script calculates streaks by matching checkbox text to habit notes

### The Habit Contract

The streak script matches daily note checkbox text to habit note filenames. This mapping must stay in sync:

| Checkbox Text | Habit Note | Area | Time |
|---|---|---|---|
| 🚶 Morning Walk | `Morning Walk.md` | health | AM |
| 💧 Water started | `Water Intake.md` | health | AM |
| 📖 Read 30 min | `Read 30 Minutes.md` | interests | PM |
| 🌯 Protein (150g+) | `Protein Target.md` | health | PM |
| 😴 Sleep (7+ hrs last night) | `Sleep Quality.md` | health | PM |

Work habits (📅📊📧🔄⏱️) are not streak-tracked by default.

### Adding a New Habit
1. Create a Habit note from template
2. Add a matching checkbox line to the Daily Note template
3. Add the mapping to the Habit Contract table above
4. The streak script picks it up automatically

Or just tell Ziggy: "I want to start meditating for 10 minutes daily" — and Ziggy handles all three steps.

---

## 🏗️ The Two-System Architecture

### System 1: Smartsheet PMO (Team Operational Layer)
25-sheet workspace for TEAM operations: client/program/project trackers (CLT-XXX, PRG-XXX, PJ-XXX IDs), permits, financials, change orders, risk, issues, vendors, AHJ directory, billing, time tracking.

### System 2: Obsidian Vault (Personal Knowledge Layer)
Nathan's PERSONAL command center: strategic thinking, relationship context, AHJ intelligence, personal life management (health, finances, household, relationships, interests, education).

### THE GOLDEN RULE
**Never duplicate Smartsheet data in Obsidian.** Reference by ID, write strategically. Operational updates → Smartsheet. Thinking and context → Obsidian.

### Bridge IDs
- Client ID: `CLT-XXX` (e.g., CLT-001 = Chick-fil-A)
- Program ID: `PRG-XXX` (e.g., PRG-001 = CFA 2025 SE Expansion)
- Project ID: `PJ-XXX` (e.g., PJ-001 = CFA Nashville - Green Hills)

---

## 📋 Specialized Frontmatter Schemas

### Work Projects
Hierarchy: Client Program (`type: project`) → Site Projects (`type: work-project`). Site projects link to parent via `client`, `client_id` frontmatter + `[[wikilink]]` in body.

Key fields: `client`, `client_id` (CLT-XXX), `program`, `program_id` (PRG-XXX), `project_id` (PJ-XXX), `phase`, `project_type`, `health` (green/yellow/red), `gc`, `architect`, `ahj`, `city`, `state`, `budget`, `next_action`

### Personal Projects
`client: "Nathan"`, `client_id: "PERSONAL"`, `priority`, `health`, `target_date`, `next_action`

### Inventory Items
`item_type` (physical/subscription/service/software/warranty/insurance), `category`, `brand`, `model`, `serial_number`, `purchase_date`, `purchase_price`, `location`, `condition`, `renewal_date`, `monthly_cost`, `annual_cost`, `end_of_life`, `warranty_expiry`

### Financial Accounts
`account_type` (checking/savings/credit-card/investment/retirement/hsa/auto-loan/mortgage/student-loan/property), `institution`, `account_last4`, `balance`, `balance_date`, `interest_rate`, `credit_limit`, `minimum_payment`, `auto_pay`

### Bills
`payee`, `category` (housing/utilities/insurance/transportation/health/subscriptions/debt-payment/taxes), `amount`, `due_day`, `frequency`, `payment_method`, `auto_pay`

### Monthly Finance Reviews
Named `YYYY-MM Finances`. Fields: `month`, `total_income`, `total_expenses`, `total_savings`, `savings_rate`.
Budget categories: housing, utilities, groceries, dining, transportation, health, subscriptions, insurance, personal, household, education, entertainment, gifts, savings, debt-payment, taxes, business, misc

### Books
`title`, `author`, `genre`, `format` (physical/kindle/audiobook/pdf), `progress`, `rating` (1-5), `started`, `finished`

### Recipes
`category` (breakfast/lunch/main/snack/meal-prep/drink), `servings`, `prep_time`, `cook_time`, `calories`, `protein_grams`, `favorite`, `rating`

### Habits
`frequency` (daily/weekdays/3x-week/2x-week/weekly), `target_per_day`, `streak`, `best_streak`, `start_date`

### Workouts
`workout`, `mesocycle`, `week`, `kb_weight`, `bodyweight`, `session_rpe`, `energy_level`, `sleep_hours`, `protein_hit`, `water_hit`

---

## 🤖 Common Tasks Reference

For full agent profiles and dispatch rules, see [[Agent Registry]].

| Nathan Says | What Happens |
|-------------|--------------|
| "Save this" | Format as note with `ziggy` + `save-state` tags |
| "Quick note about [X]" | Quick Capture with `status: inbox` |
| "New project for [client]" | Work Client Project or Site Project template |
| "What workout is today" | Calculate from Nathan 170@12 rotation + current date |
| "Log my workout" | Create Workout note with day-specific frontmatter |
| "Spent $X on [category]" | Update monthly finance review |
| "I want to start [habit]" | Create Habit note (auto-shows in daily note) |
| "Add a task for [date]" | `- [ ] Task [due:: YYYY-MM-DD]` in relevant note |
| "Save this recipe" | Create Recipe note with ingredients + macros |
| "Weekly review" | Walk through all sections |
| "Save the session state" | Update Session State note (under 500 words) |

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

## 📝 Agent Authorship Rule

**Every file or document created by Ziggy or any sub-agent MUST include an authorship footnote.**

**Format:**
```markdown
---
Created by: [Agent Name] · AI: [Model Name]
---
```

**Placement:** At the end of the document (after all content, before navigation header if one exists at bottom).

**Examples:**
- `Created by: Ziggy · AI: anthropic/claude-sonnet-4-6`
- `Created by: Atlas · AI: anthropic/claude-sonnet-4-6`
- `Created by: Forge · AI: openrouter/moonshotai/kimi-k2.5`

**Applies to:**
- All markdown notes in `Notes/`
- All daily notes in `Journal/`
- All templates in `Templates/`
- Any vault documentation

**When creating files:**
1. Include the required frontmatter (`type`, `area`, `status`, `tags`)
2. Add content
3. End with the authorship footer

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

---

Created by: Ziggy · AI: anthropic/claude-sonnet-4-6
