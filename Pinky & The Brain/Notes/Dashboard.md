---
type: database
area: system
status: active
tags:
  - system
  - database
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[System Hub|System Hub]]

---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# 📊 Dashboard

---

## 🏋️ Fitness This Week

### Recent Workouts
```dataview
TABLE WITHOUT ID
	file.link AS "Session",
	workout AS "Day",
	session_rpe AS "RPE",
	bodyweight AS "Wt (lbs)"
FROM "Notes"
WHERE type = "workout"
SORT date DESC
LIMIT 7
```

### Body Composition Trend
```dataview
TABLE WITHOUT ID
	file.link AS "Assessment",
	mesocycle AS "Meso",
	date AS "Date"
FROM "Notes"
WHERE type = "assessment" AND contains(tags, "v-shape")
SORT date DESC
LIMIT 4
```

---

## 🔁 Habit Streaks

```dataview
TABLE WITHOUT ID
	file.link AS "Habit",
	streak AS "🔥 Streak",
	best_streak AS "Best",
	frequency AS "Freq"
FROM "Notes"
WHERE type = "habit" AND status = "active"
SORT streak DESC
```

---

## ✅ Tasks

### Due Today
```dataviewjs
const today = dv.date("today");
dv.taskList(
	dv.pages('"Notes" or "Journal"').file.tasks
		.where(t => !t.completed && t.due && t.due.equals(today))
		.sort(t => t.due, 'asc')
);
```

### Overdue
```dataviewjs
const today = dv.date("today");
dv.taskList(
	dv.pages('"Notes" or "Journal"').file.tasks
		.where(t => !t.completed && t.due && t.due < today)
		.sort(t => t.due, 'asc')
);
```

### Upcoming (Next 7 Days)
```dataviewjs
const today = dv.date("today");
const nextWeek = dv.date("today").plus({days: 7});
dv.taskList(
	dv.pages('"Notes" or "Journal"').file.tasks
		.where(t => !t.completed && t.due && t.due > today && t.due <= nextWeek)
		.sort(t => t.due, 'asc')
);
```

---

## 🚧 Project Health

```dataview
TABLE WITHOUT ID
	file.link AS "Project",
	area AS "Area",
	health AS "Health",
	next_action AS "Next Action"
FROM "Notes"
WHERE type = "project" AND status = "active"
SORT health ASC, area ASC
```

---

## 💰 Financial Snapshot

### Monthly Spend Trend
```dataview
TABLE WITHOUT ID
	file.link AS "Month",
	total_income AS "Income",
	total_expenses AS "Expenses",
	savings_rate AS "Savings Rate"
FROM "Notes"
WHERE type = "monthly-finance"
SORT file.name DESC
LIMIT 3
```

### Bills Due Soon
```dataview
TABLE WITHOUT ID
	file.link AS "Bill",
	"$" + string(amount) AS "Amount",
	due_day AS "Due Day",
	auto_pay AS "Auto?"
FROM "Notes"
WHERE type = "bill" AND status = "active"
SORT due_day ASC
```

### Active Subscriptions
```dataview
TABLE WITHOUT ID
	file.link AS "Service",
	"$" + string(monthly_cost) AS "$/mo"
FROM "Notes"
WHERE type = "item" AND (item_type = "subscription" OR item_type = "software") AND status = "active"
SORT monthly_cost DESC
LIMIT 10
```

---

## 📚 Currently Reading

```dataview
TABLE WITHOUT ID
	file.link AS "Book",
	author AS "Author",
	progress AS "Progress"
FROM "Notes"
WHERE type = "book" AND status = "active"
```

---

## 🔗 Quick Links
- [📅 Today](obsidian://daily)
- [[🏠base|🏠 Home]]
- [[Work Hub|Work Hub]]
- [[Health Hub|Health Hub]]
- [[Finances Hub|Finances Hub]]
- [[Grocery Lists|🛒 Grocery]]
- [[Recipe Index|🍳 Recipes]]
