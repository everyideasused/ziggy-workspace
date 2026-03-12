---
type: review
area: system
date: <% tp.date.now("YYYY-MM-DD") %>
status: active
tags:
  - review
  - weekly
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# 📋 Weekly Review — <% tp.date.now("YYYY-[W]ww") %>
**Week of <% tp.date.now("MMMM D, YYYY", 1 - new Date().getDay()) %> – <% tp.date.now("MMMM D, YYYY", 7 - new Date().getDay()) %>**

---

## 📥 Process Inbox
> *Review every inbox item. For each: assign to a project/area, move to resources, or archive.*

```dataview
TABLE WITHOUT ID
	file.link AS "Note",
	dateformat(file.cday, "MM/dd") AS "Captured"
FROM "Notes"
WHERE status = "inbox"
SORT file.cday ASC
```

```dataview
TABLE WITHOUT ID
	file.link AS "Note",
	dateformat(file.cday, "MM/dd") AS "Created"
FROM "Notes"
WHERE !type
SORT file.cday DESC
```

- [ ] Inbox processed to zero
- [ ] All orphaned notes have frontmatter

---

## 🎯 Goal Check-In
> *How am I tracking against my goals? Update `current_value` in each goal note.*

```dataview
TABLE WITHOUT ID
	file.link AS "Goal",
	area AS "Area",
	metric AS "Metric",
	current_value AS "Now",
	target_value AS "Target",
	health AS "Health"
FROM "Notes"
WHERE type = "goal" AND status = "active"
SORT area ASC, health ASC
```

**Goal updates this week:**
- 

**Any goals to adjust, complete, or retire?**
- 

---

## 🚧 Project Check-In
> *Review each active project. Update status, health, next actions.*

```dataview
TABLE WITHOUT ID
	file.link AS "Project",
	area AS "Area",
	health AS "Health",
	next_action AS "Next Action"
FROM "Notes"
WHERE type = "project" AND status != "archived" AND status != "complete"
SORT area ASC
```

**Project updates this week:**
- 

**Any projects to archive or mark complete?**
- 

---

## 💼 Work — Client Status Summary
> *Prep for Smartsheet updates and client communications.*

```dataview
TABLE WITHOUT ID
	file.link AS "Client Project",
	client AS "Client",
	health AS "Health",
	next_action AS "Next Action"
FROM "Notes"
WHERE type = "project" AND area = "work" AND status = "active"
SORT client ASC
```

**Key items to update in Smartsheet:**
- [ ] 
- [ ] 

### Hours This Week

```dataviewjs
// Pull hours from daily notes this week
const weekStart = dv.date("<% tp.date.now('YYYY-MM-DD', 1 - new Date().getDay()) %>");
const weekEnd = dv.date("<% tp.date.now('YYYY-MM-DD', 7 - new Date().getDay()) %>");

const dailyNotes = dv.pages('"Journal"')
    .where(p => p.date && p.date >= weekStart && p.date <= weekEnd && p.hours);

if (dailyNotes.length > 0) {
    const totalHours = dailyNotes.values.reduce((sum, p) => sum + (p.hours || 0), 0);
    dv.table(
        ["Date", "Hours", "Client"],
        dailyNotes.sort(p => p.date).map(p => [p.file.link, p.hours, p.work_client || "—"])
    );
    dv.paragraph(`**Total hours this week:** ${totalHours}`);
} else {
    dv.paragraph("_No hours logged this week via daily notes._");
}
```

---

## 🏋️ Fitness Check-In
> *How did training go this week? Reference [[Nathan 170@12 — Kettlebell Calisthenics Program|Program]].*

### Workouts Completed
```dataview
TABLE WITHOUT ID
	file.link AS "Session",
	workout AS "Day",
	session_rpe AS "RPE",
	bodyweight AS "Weight"
FROM "Notes"
WHERE type = "workout" AND date >= date("<% tp.date.now('YYYY-MM-DD', 1 - new Date().getDay()) %>") AND date <= date("<% tp.date.now('YYYY-MM-DD', 7 - new Date().getDay()) %>")
SORT date ASC
```

**Sessions completed:** /5
**Average RPE:** 
**Average energy:** /5

**Weekly weigh-in (Sunday AM):** lbs
**Change from last week:** lbs
**On track for quarterly target?** 

**PRs or breakthroughs this week:**
- 

**Stalls or concerns:**
- 

**Progressions to attempt next week:**
- 

---

## 🔁 Habit Review

```dataview
TABLE WITHOUT ID
	file.link AS "Habit",
	streak AS "Current Streak",
	best_streak AS "Best",
	frequency AS "Freq"
FROM "Notes"
WHERE type = "habit" AND status = "active"
SORT file.name ASC
```

### This Week's Compliance

| Habit | Mon | Tue | Wed | Thu | Fri | Sat | Sun | Score |
|-------|-----|-----|-----|-----|-----|-----|-----|-------|
| 💧 Water (75+ oz) | | | | | | | | /7 |
| 🌯 Protein (150g+) | | | | | | | | /7 |
| 😴 Sleep (7+ hrs) | | | | | | | | /7 |
| 🚶 Morning Walk | | | | | | | | /7 |
| 📖 Read 30 min | | | | | | | | /7 |
| 📊 Smartsheet check | | | | | | | | /5 |
| 📧 Process email | | | | | | | | /5 |

- [ ] Update streak counts in habit notes
- [ ] Run `update-habit-streaks` if available

---

## 💰 Financial Pulse
> *Quick check — no deep dive unless it's the 1st of the month.*

- **Unexpected expenses this week?** 
- **Bills coming due next week?** 
- **On budget?** ✅ / ⚠️ / ❌

---

## 🛒 Grocery & Meal Prep
> *Stock up for next week. Reference [[Grocery Lists]] and [[Recipe Index]].*

**Protein sources to buy:**
- [ ] 
- [ ] 

**Meals to prep:**
- 

**Running low on:**
- 

---

## 📚 Reading Check-In

```dataview
TABLE WITHOUT ID
	file.link AS "Book",
	author AS "Author",
	progress AS "Progress",
	rating AS "Rating"
FROM "Notes"
WHERE type = "book" AND status = "active"
SORT file.name ASC
```

**Pages/chapters this week:** 
**Key takeaway:** 

---

## 🏛️ Areas Scan
> *Quick pulse check — anything need attention?*

- [ ] **Work** — *(covered above)*
- [ ] **Health** — *(covered above)*
- [ ] **Finances** — *(covered above)*
- [ ] **Relationships** — 
- [ ] **Household** — 
- [ ] **Interests** — 
- [ ] **Education** — 

---

## ✅ Overdue Tasks
> *Anything lingering that needs to be rescheduled or killed?*

```tasks
not done
due before <% tp.date.now("YYYY-MM-DD") %>
path does not include Templates
short mode
```

---

## 🎯 Next Week Priorities
> *Top 3-5 things that must happen next week.*

1. 
2. 
3. 

**Scheduled tasks next week:**
```tasks
not done
due after <% tp.date.now("YYYY-MM-DD") %>
due before <% tp.date.now("YYYY-MM-DD", 8) %>
path does not include Templates
short mode
```

---

## 💭 Reflection

**Wins:**
- 

**Challenges:**
- 

**One thing to do differently next week:**
- 

---

<%* tR += "Created by: " + (tp.user?.agentName || "Ziggy") + " · AI: " + (tp.user?.modelName || "anthropic/claude-sonnet-4-5-20250929"); %>
