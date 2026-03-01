---
type: area-hub
area: relationships
status: active
tags:
  - area
  - relationships
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# 👥 Relationships Hub

---

## 🎯 Active Projects
```dataview
TABLE WITHOUT ID
	file.link AS "Project",
	health AS "Health",
	next_action AS "Next Action"
FROM "Notes"
WHERE type = "project" AND area = "relationships" AND status = "active"
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
WHERE type = "goal" AND area = "relationships" AND status = "active"
```

## 🔁 Habits
```dataview
TABLE WITHOUT ID
	file.link AS "Habit",
	streak AS "Streak",
	frequency AS "Freq"
FROM "Notes"
WHERE type = "habit" AND area = "relationships" AND status = "active"
```

## 📝 Notes
```dataview
LIST
FROM "Notes"
WHERE area = "relationships" AND status = "active" AND type != "area-hub"
SORT file.cday DESC
LIMIT 10
```
