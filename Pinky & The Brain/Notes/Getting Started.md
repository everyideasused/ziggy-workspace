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

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# 🚀 Getting Started
## From Zero to Operational — Do This First

---

## Step 1: Install the Vault

### If starting fresh (new vault):
1. Create a new vault in Obsidian (File → Open Vault → Create)
2. Note the vault folder location on your computer
3. Unzip `Obsidian_Command_Center.zip`
4. Open the `obsidian_vault/` folder inside the zip
5. Copy **everything** from inside `obsidian_vault/` into your vault's root folder
6. You should see `🏠base.md`, `Journal/`, `Notes/`, `Templates/`, `Attachments/` at the top level
7. Reopen the vault in Obsidian — all files should appear in the sidebar

### If migrating from an existing vault:
1. **Keep your `.obsidian/` folder** — it holds your plugin configs, themes, and hotkeys
2. Move any notes you want to keep into a temporary folder outside the vault
3. Delete everything else (except `.obsidian/`)
4. Follow steps 3–7 above
5. Move your kept notes back into `Notes/`
6. Add proper frontmatter to any migrated notes (see [[System Guide]] for required fields)

---

## Step 2: Install Required Plugins

Open Settings → Community Plugins → Browse

### Required (vault won't work without these):

**1. Templater**
- Install and enable
- This powers every template, the workout auto-detection, date navigation, and task scheduling

**2. Dataview**
- Install and enable
- This powers every query on every hub note — project lists, workout history, habit tables, financial dashboards, task rollups

**3. Calendar**
- Install and enable
- This gives you a visual calendar in the sidebar linked to your daily notes

### Obsidian Git (recommended)
- Install from Community Plugins
- Enables automatic version control with GitHub backup
- Auto-commits and pushes every 10 minutes — offsite backup + rollback safety net
- See [[Ziggy Memory Architecture]] for full configuration

### Recommended (not required but significantly improves experience):

**4. Homepage** — Auto-opens `🏠base` when you launch Obsidian
**5. Quick Add** — Faster note creation with template picker (Cmd+P alternative)
**6. Periodic Notes** — Better weekly note support for weekly reviews

---

## Step 3: Configure Settings

This is the critical step. **Do all of these or the vault won't function correctly.**

### 3A: Core Obsidian Settings

**Settings → Files & Links:**
- Default location for new notes: **In the folder specified below** → `Notes`
- Default location for new attachments: **In the folder specified below** → `Attachments`
- Automatically update internal links: **ON**

**Settings → Core Plugins:**
- Daily notes: **ON**

**Settings → Core Plugins → Daily Notes:**
- New file location: `Journal`
- Date format: `YYYY-MM-DD`
- Template file location: `Templates/Daily Note`

### 3B: Templater Settings

**Settings → Community Plugins → Templater:**
- Template folder location: `Templates`
- Trigger Templater on new file creation: **ON** ← CRITICAL
- Enable folder templates: **ON** ← CRITICAL
  - Click "Add New" under Folder Templates
  - Folder: `Journal`
  - Template: `Templates/Daily Note`

> **Why this matters:** When you click a date link like `[[2026-03-15]]` and that note doesn't exist, Obsidian creates it in `Journal/` (because of the Daily Notes setting). Templater then sees a new file was created in `Journal/` and auto-applies the Daily Note template. This is what gives you a fully rendered daily note with the correct workout, tasks, habits, and navigation — instead of a blank file.

### 3C: Dataview Settings

**Settings → Community Plugins → Dataview:**
- Enable JavaScript Queries: **ON** ← CRITICAL (the daily note workout calculator uses JS)
- Enable Inline Queries: **ON**

### 3D: Calendar Settings

**Settings → Community Plugins → Calendar:**
- Should use the Daily Notes settings automatically — no extra config needed

### 3E: Homepage Settings (if installed)

**Settings → Community Plugins → Homepage:**
- Homepage: `🏠base`
- Open on startup: **ON**

---

## Step 4: Verify Everything Works

Do these tests in order. If any fail, go back to Step 3 and check the relevant setting.

### Test 1: Home page loads
- Open `🏠base.md`
- You should see the Dataview queries rendering (they'll show "No results" since the vault is new — that's fine)
- The `[📅 Today](obsidian://daily)` link should be clickable

### Test 2: Daily note creates correctly
- Click the `[📅 Today](obsidian://daily)` link on `🏠base`
- A new note should appear in `Journal/` named with today's date
- **Check that Templater processed it:**
  - The date in the `#` heading should show the actual day name and date (e.g., "Saturday, February 28, 2026") — NOT raw Templater code like `<% tp.date.now(...) %>`
  - The workout section should show either "Rest Day" (Sunday) or the correct workout day, or "Program starts March 2nd" (before the program starts)
  - The navigation links at the top should show actual dates
- **If you see raw `<%` code instead:** Templater is not configured correctly. Go back to Step 3B.

### Test 3: Date links create new daily notes
- In today's daily note, click the "Tomorrow →" link
- A new daily note for tomorrow should be created with Templater fully processed
- Click "← Yesterday" on that note to go back

### Test 4: Template creation works
- Press Cmd+N (or your new note shortcut) to create a new note
- It should land in `Notes/`
- Open the command palette (Cmd+P) → Type "Templater" → Select "Templater: Insert Template"
- Pick any template (try "Quick Capture")
- The template should process — Templater prompts should appear, dates should fill in

### Test 5: Dataview queries work
- Open `Notes/Workout Program.md`
- Scroll to the bottom — the "Recent Workouts" and "Assessments" sections should show rendered Dataview blocks (empty results is fine)
- **If you see raw ````dataview` code blocks instead:** Dataview is not enabled. Go back to Step 3C.

### Test 6: Workout auto-detection works
- Open today's daily note
- The 🏋️ Workout section should show contextual content:
  - Before March 2: "Program starts March 2nd"
  - Sunday: "Rest Day"
  - Monday of week 1: "Day A: Upper Push"
  - etc.
- **If you see raw JavaScript instead:** Dataview JavaScript queries are not enabled. Go back to Step 3C and enable JavaScript Queries.

---

## Step 5: Your First Day Using the Vault

### Morning Routine
1. **Open Obsidian** → `🏠base` loads (if Homepage plugin installed)
2. **Click `[📅 Today]`** → Today's daily note opens (or is created)
3. **Check the workout section** → It tells you what to do today
4. **Check tasks** → Scheduled and overdue tasks appear automatically
5. **Check habits** → Your habit table shows active streaks
6. **Start your day**

### Creating a Workout Log
1. From your daily note, note which workout day it is (A, B1, B2, or C)
2. Create a new note (Cmd+N)
3. Name it: `2026-03-02 Workout` (date + Workout)
4. Insert template → Pick `Workout Day A` (or whichever day it is)
5. Templater prompts for mesocycle and week number
6. All exercises are pre-loaded with target sets, reps, form cues, and progression notes
7. Fill in your numbers during the workout
8. Update the session summary and nutrition log after
9. Update frontmatter fields: `session_rpe`, `bodyweight`, `protein_hit`, `water_hit`
10. The workout auto-appears in the V-Shape project note's "Recent Workouts" query

### Creating Any Other Note
1. Create new note (Cmd+N)
2. Open command palette (Cmd+P) → "Templater: Insert Template"
3. Pick the right template for what you're creating
4. Fill in the Templater prompts
5. Done — the note auto-appears in the right hub based on its frontmatter

### Quick Capture (Phone or On The Go)
1. Create a new note
2. Apply the **Quick Capture** template
3. Write your thought
4. It auto-lands in your inbox on `🏠base` because `status: inbox`
5. Process it later — assign a proper type, area, and status

### Scheduling a Task for a Future Date
Write this anywhere in any note:
```
- [ ] Call the electrician about the outlet [due:: 2026-03-10]
```
That task will show up on the March 10th daily note under "Scheduled (Due Today)." If you don't complete it by March 10th, it rolls forward into "Overdue" on every subsequent daily note until you check it off.

**Important:** Only tasks with `[due:: YYYY-MM-DD]` show up on daily notes. Regular checkboxes without due dates (like prep checklists in project notes) stay local to where you wrote them and never clutter your daily view.

### Starting a New Habit
1. Create a new note → Apply **Habit** template
2. Fill in frequency, target per day
3. The habit auto-appears in the daily note's habit table
4. Or just tell Ziggy: "I want to start meditating for 10 minutes daily"

---

## Step 6: Set Up Syncthing (Multi-Device)

If you want the vault on your MacBook, iPhone, and Mac Mini:

1. Install Syncthing on Mac Mini and MacBook (syncthing.net)
2. Install Möbius Sync on iPhone (App Store — Syncthing client for iOS)
3. Share the vault folder between all devices
4. Install Obsidian on each device and open the synced vault folder
5. Plugin settings sync with the vault (they're in `.obsidian/`)
6. **Conflict handling:** Syncthing uses last-write-wins. Avoid editing the same note on two devices simultaneously. In practice this is rarely an issue since you're usually on one device at a time.

---

## Step 7: Give Ziggy Context

When starting a conversation with any AI assistant (Claude, local Ollama model, etc.):

1. Open `Notes/Ziggy System Context.md`
2. Copy the entire contents
3. Paste it into the beginning of your AI conversation
4. Ziggy now understands your full vault structure, frontmatter schema, naming conventions, and how to create properly formatted notes

For specialized topics, also paste:
- **Work questions:** The relevant client/project notes
- **Fitness questions:** `Workout Program.md`
- **Financial questions:** `Finances Hub.md`
- **Email bridge project:** `Ziggy Email Bridge Architecture.md`

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Daily note shows raw `<% ... %>` code | Templater not configured. Check Step 3B — enable "Trigger on new file creation" and set folder template for `Journal/` |
| Dataview queries show code blocks instead of tables | Dataview not enabled or JS queries off. Check Step 3C |
| Workout section shows JavaScript code | Dataview JavaScript Queries not enabled. Step 3C |
| Clicking date links creates blank notes | Templater folder template not set. Step 3B — map `Journal/` to `Daily Note` template |
| New notes land in vault root instead of Notes/ | Files & Links → Default location not set to `Notes`. Step 3A |
| Templates don't show Templater prompts | Templater plugin not installed or enabled. Step 2 |
| Hub notes show "No results" | This is normal for a new vault. Results appear as you create notes with proper frontmatter |
| Task with `[due:: date]` doesn't show on daily note | Make sure the date format is exactly `YYYY-MM-DD` and there's a space before the `[due::` |

---

## What's In This Vault

### 25 Templates
| Template | Creates | Use When |
|----------|---------|----------|
| Daily Note | `daily` | Auto-applied to journal notes |
| Weekly Review | `review` | Sunday evening or Monday morning |
| Project | `project` | Any personal project |
| Work Client Project | `project` | New client in your PMO |
| Work Site Project | `work-project` | New store/site under a client |
| Area Hub | `area-hub` | Setting up a new life area (7 are pre-built) |
| Meeting | `meeting` | After any meeting worth noting |
| Person | `person` | New contact worth remembering |
| Organization | `organization` | Company, agency, or group |
| Item | `item` | Physical item, subscription, or service |
| Account | `account` | Financial account (bank, card, loan) |
| Bill | `bill` | Recurring payment |
| Monthly Finance Review | `monthly-finance` | First of each month |
| Goal | `goal` | New measurable goal |
| Habit | `habit` | New recurring habit |
| Book | `book` | Start reading or add to reading list |
| Recipe | `recipe` | Save a recipe with ingredients and macros |
| Workout Day A | `workout` | Upper Push training day |
| Workout Day B1 | `workout` | Lower (Glute/Quad) training day |
| Workout Day B2 | `workout` | Lower (Posterior Chain) training day |
| Workout Day C | `workout` | Upper Pull + Arms training day |
| Fitness Assessment | `assessment` | Every 4 weeks |
| Resource | `resource` | Reference material to save |
| Quick Capture | `note` | Fast inbox capture |
| Session State |` system `| End-of-session summary for Ziggy continuity |

### 34 Pre-Built Notes
| Note | What It Does |
|------|-------------|
| 🏠base | Home dashboard — inbox, orphan catcher, projects, areas, resources |
| Dashboard | Weekly at-a-glance — fitness, habits, tasks, finances, reading |
| Work Hub | PMO command center — all clients and projects |
| Finances Hub | Financial dashboard — accounts, bills, budgets |
| Health Hub | Fitness, nutrition, health habits |
| Household Hub | Home, garden, grocery, recipes |
| Interests Hub | Hobbies, reading, philosophy, creative |
| Relationships Hub | Family, friends, social |
| Education Hub | Learning, courses, certifications |
| Inventory Database | Physical items, subscriptions, expiring soon |
| Reading List | Currently reading, finished, want-to-read queue |
| Recipe Index | All recipes, high-protein filter, by category |
| Grocery List | Running grocery list by store section |
| Ziggy Hub | AI saves, drafts, system context |
| Ziggy Drafts | Active AI-assisted work in progress |
| Ziggy System Context | Complete vault reference for AI assistants |
| Ziggy Email Bridge | Email integration project (starts April) |
| Ziggy Email Bridge Architecture | Technical architecture doc |
| Workout Program | Fitness project — the active program |
| V-Shape Program | Full program reference (exercises, progression, nutrition) |
| V-Shape Exercise Guide | Form cues and video links for every exercise |
| V-Shape Daily Logs | Log template reference (legacy — use day-specific templates) |
| Water Intake | Habit: daily water tracking |
| Protein Target | Habit: daily protein tracking |
| Sleep Quality | Habit: daily sleep tracking |
| System Guide | Vault rules, workflows, settings, taxonomy |
| Getting Started | Step-by-step setup guide (you're reading it) |
| Templates Hub | When to use each template |
| Tags Reference | Complete tag taxonomy |
| Archives Hub | Browse archived and completed items |
| Agent Registry | specialized agents, roles, dispatch rules |
| Ziggy Memory Architecture | memory system documentation |
| Human Guide | plain-English usage guide |
| Vault Rules - Quick Reference | fast lookup for vault standards |
| Ziggy Session Log | running log of all sessions |

---

## Quick Reference Card

| I want to... | Do this |
|---|---|
| Start my day | Open Obsidian → click 📅 Today |
| See everything at a glance | Open [[Dashboard]] |
| Log a workout | New note → Workout Day [A/B1/B2/C] template |
| Capture a quick thought | New note → Quick Capture template |
| Schedule a task | `- [ ] Task [due:: YYYY-MM-DD]` anywhere |
| Start a new habit | New note → Habit template |
| Track a purchase | New note → Item template |
| Add a bill | New note → Bill template |
| Monthly finances | New note → Monthly Finance Review template |
| Meeting notes | New note → Meeting template |
| New work project | New note → Work Client Project or Work Site Project template |
| Weekly review | New note → Weekly Review template |
| Start reading a book | New note → Book template (`status: active`) |
| Save a book for later | New note → Book template (`status: inbox`) |
| Save a recipe | New note → Recipe template |
| Grocery shopping | Open [[Grocery Lists]], check items off as you buy |
| Find a recipe | Open [[Recipe Index]] |
| Find anything | Cmd+O (quick switcher) or Cmd+Shift+F (search) |
| Go home | Click 🏠 in any note's nav bar |
| Go to today | Click 📅 Today in any note's nav bar |
| Give Ziggy context | Copy Ziggy System Context.md into the conversation |

---

*Once you've completed Steps 1–5, you're operational. Everything else is learning by doing. The system is designed to be self-documenting — explore the hub notes, click the links, and let the queries show you how it all connects.*
