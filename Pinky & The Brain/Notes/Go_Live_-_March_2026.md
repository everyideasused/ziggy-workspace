---
type: note
area: system
status: active
tags:
  - system
  - ziggy
  - changelog
  - go-live
created: 2026-03-07
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[System Hub|System Hub]]

---

# 🚀 Go Live — Daily Note v2 & System Updates
## March 7, 2026

This document contains everything needed to deploy the v2 daily note system. Follow each section in order. Ziggy: when Nathan says "deploy the go-live changes," follow this document top to bottom.

---

## Part 1: Plugin Installation

### 1.1 Tasks Plugin (REQUIRED)
The daily note and weekly review now use `tasks` code blocks instead of raw Dataview for task queries. This gives us recurring tasks, done dates, and better filtering.

**Install:**
1. Obsidian → Settings → Community Plugins → Browse
2. Search **"Tasks"** (by Martin Schenck / obsidian-tasks-group)
3. Install → Enable

**Settings to configure:**
1. Settings → Tasks
2. **Global filter:** Leave blank (captures all tasks vault-wide)
3. **Date format:** `YYYY-MM-DD` (matches our `[due::]` convention)
4. **Done date:** ON (records when tasks are completed — powers "Yesterday's Wins")
5. **Recurrence:** ON (enables recurring tasks)
6. **Set done date on every task completion:** ON
7. **Remove done date on task un-completion:** ON

**IMPORTANT — Compatibility with existing `[due::]` fields:**
The Tasks plugin reads its own emoji-based format (`📅 2026-03-15`) by default. Our vault uses Dataview inline fields (`[due:: 2026-03-15]`). To make Tasks read our existing format:

1. Settings → Tasks → "Use Filename as Default Date" → OFF
2. Under "Custom Statuses" → leave defaults
3. The `tasks` code blocks in the daily note use explicit date strings from Templater, so they work regardless of format

**Going forward, both formats work.** You can write either:
- `- [ ] Task [due:: 2026-03-15]` (Dataview-style — existing convention)
- `- [ ] Task 📅 2026-03-15` (Tasks-native — also works)

Both show up in Tasks queries. Dataview queries still only see the `[due::]` format.

---

### 1.2 Buttons Plugin (REQUIRED)
Powers the Quick Create buttons on the daily note.

**Install:**
1. Obsidian → Settings → Community Plugins → Browse
2. Search **"Buttons"** (by shabegom)
3. Install → Enable

**No settings to configure.** The button code blocks in the daily note template wire directly to QuickAdd commands.

---

### 1.3 QuickAdd — New Choices (REQUIRED)
You likely already have QuickAdd installed. Add these two choices if they don't exist:

**Setting up Quick Capture:**
1. Settings → QuickAdd
2. Type `Quick Capture` in the name field → select **Template** → click "Add Choice"
3. Click the gear icon next to Quick Capture:
   - Template path: `Templates/Quick Capture.md`
   - File Name Format: `{{VALUE:title}}`
   - Create in folder: `Notes`
4. Enable the choice (toggle the lightning bolt to ON)

**Setting up New Meeting:**
1. Type `New Meeting` in the name field → select **Template** → click "Add Choice"
2. Click the gear icon next to New Meeting:
   - Template path: `Templates/Meeting.md`
   - File Name Format: `{{DATE:YYYY-MM-DD}} — {{VALUE:Meeting title}}`
   - Create in folder: `Notes`
3. Enable the choice (toggle the lightning bolt to ON)

---

## Part 2: Template Replacement

### 2.1 Daily Note
Replace `Templates/Daily Note.md` with the new version (provided as separate file: `Daily_Note.md`).

**What changed:**
- Life/Work split with clear visual separation
- AM/PM habit grouping (morning habits first, evening habits second)
- Workout calculator updated for Nathan 170@12 program
- Tasks plugin queries replace Dataview for task blocks
- Work hours use inline fields (`[hours::]`, `[work_client::]`) for aggregation
- Collapsible "This Week" sections using `> [!abstract]-` callouts
- Collapsible Active Goals for both Life and Work
- "Yesterday's Wins" block showing completed tasks (uses Tasks plugin `done on` query)
- Catch-up nudge: warns if yesterday's note has >3 unchecked habits
- Quick Create buttons at bottom (Buttons plugin)
- Recurring review triggers: Monday creates weekly review task, 1st of month creates finance review task, every 4th Monday creates fitness assessment task

### 2.2 Weekly Review
Replace `Templates/Weekly Review.md` with the new version (provided: `Weekly_Review.md`).

**What changed:**
- Added 🎯 Goal Check-In section between Inbox and Projects
- Hours This Week now uses dataviewjs to aggregate `[hours::]` inline fields from daily notes
- Overdue tasks use Tasks plugin query
- Next week tasks use Tasks plugin query
- Fitness section updated to reference Nathan 170@12 program
- Habit compliance table expanded to include all active habits
- Sessions completed changed to /5 (Mon-Fri training schedule)

### 2.3 Meal Plan
Replace `Templates/Meal Plan.md` with the new version (provided: `Meal_Plan.md`).

**What changed:**
- Template now generates `[date:: YYYY-MM-DD]` inline field format that the daily note dinner query actually reads
- Old format (heading-based sections) was incompatible with the dataviewjs dinner query
- Includes instructions callout explaining how to fill it in

### 2.4 Dashboard
Replace `Notes/Dashboard.md` with the new version (provided: `Dashboard.md`).

**What changed:**
- Removed "Due Today", "Overdue", and "Upcoming" task sections (these now live only on the daily note — no duplication)
- Added "All Active Goals" section
- Added "Hours This Week" aggregation from daily note inline fields
- Kept financial snapshot, habit leaderboard, training trend, reading, project health
- Header callout points user to daily note for today's tasks

---

## Part 3: Fix Existing Daily Note Frontmatter

March 7's note has `type: journal` — should be `type: daily` for consistency.

**Fix:**
Open `Journal/2026-03-07.md` and change:
```yaml
type: journal  →  type: daily
```

**Ziggy instruction:** When creating or editing daily notes, always use `type: daily`. Never use `type: journal`. The `update-habit-streaks` script and all daily note queries depend on `type: daily`.

---

## Part 4: System File Patches

### 4.1 SOUL.md — Add to "Vault Rules" section

Add this block after the existing "Vault Rules" section (before "Agent Dispatch"):

```markdown
## Task Management Rules

**Two query systems coexist:**
- **Dataview** (`[due:: YYYY-MM-DD]`) — for hub notes, project pages, and area-based filtering
- **Tasks plugin** (`tasks` code blocks) — for the daily note and weekly review (supports done dates, recurring tasks)

**Both formats are valid for due dates:**
- `- [ ] Task [due:: 2026-03-15]` — Dataview inline field (original convention)
- `- [ ] Task 📅 2026-03-15` — Tasks plugin native format

**Recurring tasks** use Tasks plugin syntax:
- `- [ ] Weekly Review 📅 2026-03-15 🔁 every week`
- `- [ ] Monthly Finance Review 📅 2026-04-01 🔁 every month`

**The daily note auto-generates recurring review triggers:**
- Monday → creates Weekly Review task for the following Sunday
- 1st of month → creates Monthly Finance Review task
- Every 4th Monday of the fitness program → creates Fitness Assessment task

**Work hours tracking:**
Daily notes include inline fields `[hours:: ]` and `[work_client:: ]`. These are aggregated by the weekly review and Dashboard. Fill them in at end of day.

## Habit Tracking Contract

**How habit checkboxes and habit notes connect:**

The daily note has hardcoded checkboxes for core habits. The `update-habit-streaks` script scans daily notes for these exact strings to calculate streaks. The strings must match exactly:

| Daily Note Checkbox Text | Matches Habit Note |
|---|---|
| `🚶 Morning Walk` | `Morning Walk.md` |
| `💧 Water started` | `Water Intake.md` |
| `📖 Read 30 min` | `Read 30 Minutes.md` |
| `🌯 Protein (150g+)` | `Protein Target.md` |
| `😴 Sleep (7+ hrs last night)` | `Sleep Quality.md` |

**Work habits** (📅📊📧🔄⏱️) are not streak-tracked by default. To add streak tracking for a work habit, create a Habit note with `area: work` and add the matching emoji+text to the contract table above.

**Adding a new personal habit:**
1. Create a Habit note from template (sets `type: habit`)
2. Add a checkbox line to the Daily Note template with matching emoji + text
3. Add the mapping to this contract table
4. The streak script will pick it up automatically
```

### 4.2 TOOLS.md — Add after "Vault Toolkit" section

Add this block after the Vault Toolkit section:

```markdown
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
- [ ] Weekly Review 🔁 every week 📅 2026-03-15
```

### Vault Toolkit Updates
When Nathan says:
| Nathan Says... | I Do... |
|---|---|
| "What did I get done yesterday?" | Check daily note's "Yesterday's Wins" section or `vault yesterday` |
| "How many hours this week?" | Check Dashboard or weekly review (reads `[hours::]` from daily notes) |
| "Create a recurring task" | Use Tasks plugin format: `📅 YYYY-MM-DD 🔁 every [interval]` |
```

### 4.3 AGENTS.md — Add to "Memory" section

Add this after the existing Memory section:

```markdown
## Daily Note Conventions (v2 — March 7, 2026)

The daily note is now split into **Life** and **Work** sections. When creating or editing daily notes:

1. **Type is always `daily`** — never `journal`, never anything else
2. **Area is `system`** — daily notes span all areas, not just health
3. **Habits are AM/PM ordered** — morning habits first, evening habits second
4. **Work hours use inline fields** — `[hours:: ]` and `[work_client:: ]` at bottom of work log
5. **Task queries use Tasks plugin** — `tasks` code blocks, not Dataview, in daily/weekly templates
6. **Review triggers are automatic** — Monday creates weekly review task, 1st creates finance review task
7. **Goals surface on daily note** — collapsed callouts, one for Life and one for Work
```

### 4.4 MEMORY.md — Add to end of file

Add this block at the end:

```markdown
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
```

### 4.5 System Guide — Patches

**Patch 1: Update Plugin Table**
Find the "Required Plugins" table and replace with:

```markdown
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
```

**Patch 2: Update Task Management section**
Replace the existing "Task Management" section (starting at "## ✅ Task Management") with:

```markdown
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
```

**Patch 3: Update Habit Tracking section**
Replace the existing "Habit Tracking" section with:

```markdown
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
```

### 4.6 Agent Registry — Update Iron agent's workout reference

Find Iron's "Reference Notes" section and update any references from "V-Shape" or "Workout Program" to:
- `[[Nathan 170@12 — Kettlebell Calisthenics Program]]`

### 4.7 Templates Hub — Update

Add to the template table:

| Template | Use When... | Creates Type |
|----------|------------|--------------|
| **Meal Plan** | Sunday meal planning — select week's recipes | `meal-plan` |

And add a new section:

```markdown
### Quick Create Setup (for Buttons on Daily Note)

The daily note has Quick Create buttons at the bottom. One-time setup:

1. Install **Buttons** plugin (Community Plugins → search "Buttons")
2. Install **QuickAdd** plugin if not already installed
3. In QuickAdd settings, create two **Template** choices:
   - **Quick Capture** → template: `Templates/Quick Capture.md`, folder: `Notes`
   - **New Meeting** → template: `Templates/Meeting.md`, folder: `Notes`
4. Buttons auto-wire to these QuickAdd choices via command names
```

---

## Part 5: Seed the First Recurring Tasks

Create these tasks somewhere in the vault (daily note or a project note) to kickstart the recurring review cycle:

```markdown
- [ ] 📋 Weekly Review 📅 2026-03-08 🔁 every week
- [ ] 💰 Monthly Finance Review 📅 2026-04-01 🔁 every month
```

After this, the daily note's auto-generation handles future instances, and checking off the recurring tasks creates the next occurrence automatically via the Tasks plugin.

---

## Part 6: Verification Checklist

After deploying everything, verify:

- [ ] Open today's daily note — does it render with Life/Work split?
- [ ] Check that task queries show (they'll be empty if no tasks exist yet, that's OK)
- [ ] Click the collapsed "This Week" callout — does it expand?
- [ ] Click the collapsed "Active Goals" callout — does it expand?
- [ ] Click "Yesterday's Wins" — does it expand and query?
- [ ] Buttons appear at the bottom? Click "Quick Capture" — does QuickAdd fire?
- [ ] Open Weekly Review template — does the Goals section appear?
- [ ] Open Meal Plan template — does it generate `[date::]` format entries?
- [ ] Open Dashboard — no more daily task queries, goals section present?
- [ ] Create a test task: `- [ ] Test task 📅 2026-03-08` — does it appear in "This Week" callout?
- [ ] Check the test task off — does "Yesterday's Wins" pick it up tomorrow?

---

## Part 7: The 30-Day Rule

**Effective March 7, 2026: System building moratorium.**

The vault infrastructure is complete. For the next 30 days (through April 6, 2026), focus on *using* the system, not *tweaking* it. The daily note, weekly review, habits, meals, workouts, projects, and finances are all wired up. Let friction tell you what needs fixing.

**Exceptions** (things Ziggy can still do):
- Create new notes from existing templates
- Run automation scripts (streaks, net worth, vault health)
- Fix actual bugs discovered through use
- Create meal plans, grocery lists, workout logs

**Not allowed for 30 days:**
- Redesigning templates
- Adding new plugins
- Restructuring hubs or the base note
- Creating new template types

Track friction in a running list. Review it at the 30-day mark.

---

Created by: Ziggy · AI: anthropic/claude-opus-4-6
