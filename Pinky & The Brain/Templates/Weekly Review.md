---
type: review
area: 
date: <% tp.date.now("YYYY-MM-DD") %>
status: active
tags:
  - review
  - weekly
---

> [[🏠base|🏠]] · [[<% tp.date.now("YYYY-MM-DD") %>|📅 Today]]

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

| Client | Hours | Notes |
|--------|-------|-------|
| | | |
| | | |
| **Total** | | |

---

## 🏋️ Fitness Check-In
> *How did training go this week? Reference [[V-Shape Calisthenics KB Program]].*

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

**Sessions completed:** /6
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
| 🥩 Protein (150g+) | | | | | | | | /7 |
| 😴 Sleep (7+ hrs) | | | | | | | | /7 |
| | | | | | | | | /7 |

- [ ] Update streak counts in habit notes

---

## 💰 Financial Pulse
> *Quick check — no deep dive unless it's the 1st of the month.*

- **Unexpected expenses this week?** 
- **Bills coming due next week?** 
- **Subscription changes?** 
- **On budget?** ✅ / ⚠️ / ❌

---

## 🛒 Grocery & Meal Prep
> *Stock up for next week. Reference [[Grocery List]] and [[Recipe Index]].*

**Protein sources to buy:**
- [ ] 
- [ ] 
- [ ] 

**Meals to prep:**
- 

**Running low on:**
- 

---

## 📚 Reading Check-In
> *What are you reading? How's progress?*

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
**Key takeaway or quote:** 

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

```dataview
TASK
FROM "Notes" OR "Journal"
WHERE !completed AND due AND due < date("<% tp.date.now('YYYY-MM-DD') %>")
SORT due ASC
```

---

## 🎯 Next Week Priorities
> *Top 3-5 things that must happen next week.*

1. 
2. 
3. 

**Scheduled tasks next week:**
```dataview
TASK
FROM "Notes" OR "Journal"
WHERE !completed AND due AND due >= date("<% tp.date.now('YYYY-MM-DD', 1) %>") AND due <= date("<% tp.date.now('YYYY-MM-DD', 8) %>")
SORT due ASC
```

---

## 💭 Reflection

**Wins:**
- 

**Challenges:**
- 

**Lessons / Observations:**
- 

**One thing to do differently next week:**
- 
