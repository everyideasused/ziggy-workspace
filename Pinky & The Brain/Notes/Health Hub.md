---
type: area-hub
area: health
status: active
tags:
  - area
  - health
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# 🏛️ Health Hub

---

## 🎯 Active Projects
```dataview
TABLE WITHOUT ID
	file.link AS "Project",
	health AS "Health",
	next_action AS "Next Action"
FROM "Notes"
WHERE type = "project" AND area = "health" AND status = "active"
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
WHERE type = "goal" AND area = "health" AND status = "active"
```

## 🔁 Health Habits
```dataview
TABLE WITHOUT ID
	file.link AS "Habit",
	streak AS "Streak",
	frequency AS "Freq"
FROM "Notes"
WHERE type = "habit" AND area = "health" AND status = "active"
```

## 🏋️ Recent Workouts
```dataview
TABLE WITHOUT ID
	file.link AS "Session",
	workout AS "Day",
	session_rpe AS "RPE",
	bodyweight AS "Weight"
FROM "Notes"
WHERE type = "workout" AND status = "active"
SORT date DESC
LIMIT 7
```

## 📝 Health Notes
```dataview
LIST
FROM "Notes"
WHERE area = "health" AND type = "note" AND status = "active"
SORT file.cday DESC
LIMIT 10
```
