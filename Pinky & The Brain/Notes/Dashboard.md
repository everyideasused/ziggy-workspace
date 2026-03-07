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

# 📊 Dashboard
> *Trends and big-picture metrics. For today's tasks and habits, use your [[<% tp.date.now("YYYY-MM-DD") %>|daily note]].*

---

## 🏋️ Training Trend (Last 2 Weeks)

```dataview
TABLE WITHOUT ID
	file.link AS "Session",
	workout AS "Day",
	session_rpe AS "RPE",
	bodyweight AS "Wt (lbs)"
FROM "Notes"
WHERE type = "workout"
SORT date DESC
LIMIT 10
```

### Body Composition Trend
```dataview
TABLE WITHOUT ID
	file.link AS "Assessment",
	mesocycle AS "Meso",
	date AS "Date"
FROM "Notes"
WHERE type = "assessment"
SORT date DESC
LIMIT 4
```

---

## 🔁 Habit Streaks — Leaderboard

```dataview
TABLE WITHOUT ID
	file.link AS "Habit",
	streak AS "🔥 Current",
	best_streak AS "🏆 Best",
	frequency AS "Freq"
FROM "Notes"
WHERE type = "habit" AND status = "active"
SORT streak DESC
```

---

## 🎯 All Active Goals

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

---

## 🚧 Project Health — Full Portfolio

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
LIMIT 6
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

## ⏱️ Hours This Week

```dataviewjs
const today = dv.date("today");
const weekStart = today.minus({days: today.weekday - 1});
const weekEnd = weekStart.plus({days: 6});

const dailyNotes = dv.pages('"Journal"')
    .where(p => p.date && p.date >= weekStart && p.date <= weekEnd && p.hours);

if (dailyNotes.length > 0) {
    const totalHours = dailyNotes.values.reduce((sum, p) => sum + (p.hours || 0), 0);
    dv.table(
        ["Date", "Hours", "Client"],
        dailyNotes.sort(p => p.date).map(p => [p.file.link, p.hours, p.work_client || "—"])
    );
    dv.paragraph(`**Total: ${totalHours} hrs**`);
} else {
    dv.paragraph("_No hours logged yet this week._");
}
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
