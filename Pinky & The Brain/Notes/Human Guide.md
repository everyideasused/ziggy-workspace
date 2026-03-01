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

# 📖 Human Guide
## How to Use This Vault Without Losing Your Mind

*This guide assumes you know nothing about Obsidian. If something doesn't make sense, it's the guide's fault, not yours.*

---

## What Is This Thing?

Your Obsidian vault is like a personal headquarters. It's one app that holds your work notes, fitness tracking, finances, grocery list, reading list, habits, and anything else going on in your life.

It's NOT a to-do app. It's NOT a spreadsheet. It's a connected notebook where everything links to everything else, and smart queries automatically pull the right information to the right place at the right time.

> **Think of it this way:** Obsidian is your brain's external hard drive. You dump stuff in, tag it properly, and the system organizes it for you.

---

## The Only 5 Things You Need to Know

### 1. There Are Only 4 Folders

That's it. Four. Don't create more.

| Folder | What Goes In It | You Touch It? |
|--------|----------------|---------------|
| Journal/ | Daily notes (one per day, named by date) | Every day |
| Notes/ | EVERYTHING else (projects, people, recipes, habits, etc.) | Often |
| Templates/ | Pre-built note templates (the system uses these) | Never |
| Attachments/ | Images, PDFs, files you attach to notes | Rarely |

> 🚨 **Golden Rule: Never create sub-folders inside Notes/.** The system finds things using tags and metadata, not folders. Folders will break the magic.

### 2. Every Note Starts From a Template

When you create a new note, you always pick a template first. The template fills in the structure and asks you a few questions. You fill in the blanks.

Think of templates like pre-printed forms. A doctor's visit form looks different from a tax form. Same idea.

**There are 24 templates. Here are the ones you'll use most:**

| Template | When To Use It |
|----------|---------------|
| Daily Note | Automatically created when you open today's date |
| Quick Capture | "I just need to jot something down real quick" |
| Workout Day A/B1/B2/C | Logging a workout (the right one shows on your daily note) |
| Meeting | After a meeting worth remembering |
| Book | Starting a new book or saving one to read later |
| Recipe | Saving a recipe you want to keep |
| Habit | Starting a new daily/weekly habit to track |
| Weekly Review | Sunday evening check-in on everything |
| Work Client Project | New client in your work PMO |
| Project | Any personal project (non-work) |

**How to use a template:** Create a new note (Cmd+N on Mac), then press Cmd+P, type "Templater", and pick "Insert Template." Choose the one you want. Done.

### 3. Your Day Starts On One Page

Every morning, you open Obsidian and click the calendar icon or the "Today" link. Your daily note opens (or gets created automatically). It shows you:

- **What workout to do today** (or says "Rest Day")
- **Your tasks** (scheduled for today + any overdue)
- **Your habits** (water, protein, sleep + any custom ones)
- A place to log work hours
- A place to jot notes
- An end-of-day reflection

That's it. Everything you need for the day is right there. You don't need to go hunting.

> **The yesterday/tomorrow links at the top work like a time machine.** Click tomorrow's date and it creates tomorrow's note. Click any date in the vault and it opens (or creates) that day. They all get the full template automatically.

### 4. The Home Page Is Your Radar

The file called "🏠base" is your home page. It automatically shows you:

- **Inbox:** Notes you captured but haven't organized yet
- **Orphans:** Notes missing their metadata (you forgot to use a template)
- **Projects:** All active projects with their status
- **Areas:** Links to your 7 life areas (Work, Health, Finances, etc.)
- **Resources:** Reference material and databases

You don't need to update any of these lists manually. They update themselves based on the metadata in your notes. This is the magic of the system.

### 5. Tags and Metadata Do the Organizing

Every note has a hidden section at the very top called "frontmatter." It looks like this:

```yaml
---
type: project
area: health
status: active
tags:
  - project
  - health
  - fitness
---
```

You usually don't have to write this yourself. Templates fill it in. But here's why it matters:

- The **type** field tells the system what kind of note it is (project, recipe, workout, etc.)
- The **area** field says which part of your life it belongs to
- The **status** field controls where it shows up (inbox, active, complete, archived)
- The **tags** give it extra labels for searching

**If a note has no frontmatter, the system can't see it.** That's why it shows up in the "Orphans" section on your home page so you can fix it.

---

## Your Daily Routine

### Morning (2 minutes)

1. Open Obsidian
2. Click the calendar or "Today" link to open your daily note
3. Glance at the workout section (it tells you what to do)
4. Glance at tasks (anything due today or overdue?)
5. Start your day

### Workout Time (during the session)

1. Your daily note says which workout day it is (A, B1, B2, or C)
2. Create a new note and apply that day's Workout template
3. It asks for mesocycle and week number, then fills in all exercises
4. Every exercise has target sets, reps, form cues, and progression notes
5. Fill in your numbers as you go
6. Fill in the session summary and nutrition log after

### During the Day

- Log work hours in the daily note's work log table
- Capture quick thoughts with Quick Capture template
- Check off habits as you hit them (water, protein, etc.)

### Evening (1 minute)

1. Fill in the "End of Day" section on your daily note
2. Rate your energy, note one win, one thing to improve
3. Done. Close it.

### Sunday (15-20 minutes)

1. Create a Weekly Review note from the template
2. Walk through each section: inbox, projects, work, fitness, habits, finances, reading
3. Set your priorities for next week
4. Write a quick reflection

---

## How To Do Specific Things

| I Want To... | Do This |
|---|---|
| Start my day | Open Obsidian → click Today link |
| See everything at a glance | Open the [[Dashboard]] note |
| Log a workout | New note → Workout Day [A/B1/B2/C] template |
| Jot a quick thought | New note → Quick Capture template |
| Schedule a task for a specific day | Write: `- [ ] Task name [due:: 2026-03-15]` |
| Add a grocery item | Open [[Grocery List]] → add checkbox to right section |
| Save a recipe | New note → Recipe template |
| Start reading a book | New note → Book template (set status: active) |
| Save a book for later | New note → Book template (set status: inbox) |
| Start a new habit | New note → Habit template |
| Track a bill | New note → Bill template |
| Track a bank account | New note → Account template |
| Do monthly finances | New note → Monthly Finance Review template |
| Log a meeting | New note → Meeting template |
| Update habit streaks | Ask Ziggy or run `update-habit-streaks` in terminal |
| Calculate net worth | Ask Ziggy or run `calculate-net-worth --update-hub` |
| Check vault health | Ask Ziggy or run `vault-health-check` in terminal |
| Find anything | Cmd+O (quick switcher) or Cmd+Shift+F (search) |
| Go home | Click the 🏠 icon at the top of any note |

---

## How Tasks Work

There are two kinds of checkboxes in this vault and they work differently.

### Simple To-Do (stays where you wrote it)

```
- [ ] Buy groceries
```

This checkbox lives on the note where you wrote it. It never shows up anywhere else. Use these for checklists, brainstorms, and anything that doesn't need to show up on a specific day.

### Scheduled Task (shows up on a daily note)

```
- [ ] Call the electrician [due:: 2026-03-10]
```

This checkbox will automatically appear on your March 10th daily note under "Scheduled Tasks." If you don't finish it by March 10th, it rolls into "Overdue" and keeps showing up every day until you check it off.

> **The rule is simple:** No `[due::]` = stays local. Has `[due::]` = shows up on that day.

---

## Understanding the Home Page

Your home page (🏠base) has these sections, from top to bottom:

| Section | What It Shows | What To Do About It |
|---------|-------------|-------------------|
| Inbox | Notes with status: inbox (need processing) | Open each, assign a type/area, change status to active |
| Missing Frontmatter | Notes with no metadata (forgot template) | Open each, add frontmatter or apply a template |
| Projects | All active projects across work and personal | Review status, update health/next action if needed |
| Areas | Links to your 7 life area hubs | Click into whichever area you need |
| Resources | Reference material and databases | Browse when you need to look something up |
| Archives | Completed/inactive items | Only look if searching for something old |

**Key insight:** You never manually edit these lists. They update automatically based on the metadata in your notes. When you change a note's status from "active" to "complete," it disappears from the active list on its own.

---

## Getting Around

### The Navigation Bar

Every note has a navigation line at the very top:

> 🏠 · 📅 Today

- **🏠** = Go home (always)
- **📅 Today** = Go to today's daily note (always)
- Some notes also show their parent hub (like Work Hub or Health Hub)

You are never more than one click from home or today.

### The Dashboard

The [[Dashboard]] note is your "everything at a glance" view. It shows recent workouts, habit streaks, tasks due today and upcoming, all active projects with health status, recent financial summaries, and what you're currently reading. Open it whenever you want a bird's eye view.

### Searching

- **Cmd+O** (Quick Switcher) = Find a note by name. Start typing and it shows matches.
- **Cmd+Shift+F** (Search) = Full text search across every note in the vault.
- **Cmd+P** (Command Palette) = Find any command or action. Type what you want to do.

---

## Your 7 Areas of Life

Everything in the vault belongs to one of these areas. Each has its own hub note with relevant queries.

| Area | Hub Note | What It Covers |
|------|---------|----------------|
| Work | [[Work Hub]] | Client PMO, projects, meetings, business |
| Health | [[Health Hub]] | Fitness program, workouts, nutrition, habits, medical |
| Finances | [[Finances Hub]] | Bank accounts, bills, budgets, investments |
| Household | [[Household Hub]] | Home maintenance, garden, grocery list, recipes |
| Interests | [[Interests Hub]] | Philosophy, reading, tech hobbies, creative projects |
| Relationships | [[Relationships Hub]] | Family, friends, social connections |
| Education | [[Education Hub]] | Courses, certifications, learning |

---

## The Fitness System

Your V-Shape program is deeply integrated into the vault. Here's how it works.

### The Daily Note Knows Your Workout

Every daily note automatically shows which workout you should do that day based on the date. You don't need to look it up. It either says "Rest Day" (Sundays), "Day A: Upper Push" with the template name to use, or whichever day is scheduled. The rotation alternates every two weeks automatically.

### Logging a Workout

1. Your daily note tells you what day it is (A, B1, B2, or C)
2. Create a new note, apply the matching Workout Day template
3. Every exercise is already listed with target sets, reps, and form cues
4. Fill in your numbers during the workout
5. Fill in session summary + nutrition after
6. The workout automatically appears in your fitness project and dashboard

### Every 4 Weeks: Assessment

Create a Fitness Assessment note from the template. Test your maxes, take measurements, compare to last time. The [[V-Shape Calisthenics KB Program]] project note has tables for tracking everything over time.

---

## Working With Ziggy (AI Assistant)

Ziggy is your AI assistant. Ziggy knows how your vault works and can help you create notes, plan workouts, analyze trends, and manage your system.

### How To Give Ziggy Context

1. Open the note called [[Ziggy System Context]]
2. Copy the entire contents
3. Paste it at the start of your AI conversation
4. Now Ziggy knows your vault structure, rules, and conventions

You can then say things like:

- "Create a project note for my bathroom renovation"
- "Add eggs and chicken thighs to my grocery list"
- "I want to start meditating 10 minutes a day"
- "What workout do I have tomorrow?"
- "Save this recipe for high-protein overnight oats"

Ziggy will create properly formatted notes with all the right metadata, or tell you exactly what to update.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Daily note shows code like `<% tp.date... %>` | Templater not configured. Settings → Templater → turn on "Trigger on new file creation" and set Journal/ folder template to Daily Note |
| Queries show code blocks instead of results | Dataview not enabled or JS queries off. Settings → Dataview → enable + turn on JavaScript queries |
| Note doesn't show up anywhere | Missing frontmatter. Open the note and add type, area, status, tags at the top |
| Task shows up in overdue when it shouldn't | Check if the task has `[due:: date]`. If it shouldn't have a due date, remove it |
| New note lands in wrong folder | Settings → Files & Links → Default location = Notes |
| Clicking a date creates a blank note | Templater folder template not set. Map Journal/ to Daily Note template |
| Everything looks empty | Normal for a new vault! Results appear as you create notes |

---

## The 3 Required Plugins

Your vault needs exactly 3 community plugins to work.

### Templater
**What it does:** Makes templates smart. When you create a note from a template, Templater fills in today's date, asks you questions (like "which client?"), and runs the workout calculator.

**Key setting:** "Trigger Templater on new file creation" must be ON, and the folder template for Journal/ must point to Daily Note. This is what makes date links work.

### Dataview
**What it does:** Creates live, auto-updating lists and tables on your notes. Every query you see (workout history, project lists, habit tables, task rollups) is powered by Dataview. It reads the metadata in your notes and shows you what's relevant.

**Key setting:** "Enable JavaScript Queries" must be ON. The workout day calculator on your daily note needs this.

### Calendar
**What it does:** Shows a mini calendar in the sidebar. Click any date to open that day's note. Dots show which days have notes.

> **That's it.** Three plugins. If you install nothing else, these three make the whole system work.

---

## Cheat Sheet

### Keyboard Shortcuts

| Shortcut | What It Does |
|----------|-------------|
| Cmd+N | Create new note |
| Cmd+O | Quick switcher (find note by name) |
| Cmd+P | Command palette (find any action) |
| Cmd+Shift+F | Search all notes |
| Cmd+E | Toggle edit/preview mode |
| Cmd+Click | Open link in new tab |

### Status Cheat Sheet

| Status | Means | Shows Up In |
|--------|-------|-------------|
| inbox | Needs processing | Home page inbox |
| active | Currently in use | Hub pages, project lists |
| complete | Done | Accessible via search/backlinks |
| archived | No longer relevant | Archives Hub only |

### Daily Note Sections

| Section | What To Fill In |
|---------|----------------|
| Workout | Automatically shows what to do. Create workout note from template. |
| Tasks → Today | Quick to-dos for today (no due date needed) |
| Tasks → Scheduled | Auto-shows tasks with `[due:: today's date]` |
| Tasks → Overdue | Auto-shows past-due tasks (handle them!) |
| Habits | Check off water, protein, sleep + any custom habits |
| Work Log | Client, project, what you did, hours |
| Notes | Anything else on your mind |
| End of Day | Energy rating, one win, one improvement |

---

> **The best system is the one you actually use.** Start simple. Open your daily note every morning. Log your workouts. The rest will come naturally.

---

*For detailed technical setup instructions, see [[Getting Started]]. For vault rules and conventions, see [[System Guide]]. For AI instructions, see [[Ziggy System Context]].*
