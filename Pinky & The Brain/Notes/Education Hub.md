---
type: area-hub
area: education
status: active
tags:
  - area
  - education
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# 📚 Education Hub

---

## 🎯 Active Projects
```dataview
TABLE WITHOUT ID
	file.link AS "Project",
	health AS "Health",
	next_action AS "Next Action"
FROM "Notes"
WHERE type = "project" AND area = "education" AND status = "active"
SORT file.name ASC
```

## 🎯 Active Goals
```dataview
TABLE WITHOUT ID
	file.link AS "Goal",
	metric AS "Metric",
	current_value AS "Current",
	target_value AS "Target"
FROM "Notes"
WHERE type = "goal" AND area = "education" AND status = "active"
```

## 🔁 Habits
```dataview
TABLE WITHOUT ID
	file.link AS "Habit",
	streak AS "Streak",
	frequency AS "Freq"
FROM "Notes"
WHERE type = "habit" AND area = "education" AND status = "active"
```

## 📝 Notes
```dataview
LIST
FROM "Notes"
WHERE area = "education" AND status = "active" AND type != "area-hub"
SORT file.cday DESC
LIMIT 10
```
