---
type: area-hub
area: household
status: active
tags:
  - area
  - household
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# 🏡 Household Hub

---

## 🍳 Meal Planning & Recipes

- [[Recipe Index|🍳 Recipe Index]] — Browse all recipes
- [[Meal Plan - Current Week|📅 This Week's Meal Plan]]
- [[Grocery Lists|🛒 Grocery Lists]]

### 👩‍🍳 Sage — Chef & Nutritionist Agent

- [[Sage Agent Profile|Agent Profile]] — Full agent scope and capabilities
- [[Sage Session State|📊 Sage Session State]] — Current meal planning context
- [[Sage Nutrition & Culinary Knowledge Base|📚 Knowledge Base]] — Recipes, nutrition, meal planning system

---

## 🎯 Active Projects
```dataview
TABLE WITHOUT ID
	file.link AS "Project",
	health AS "Health",
	next_action AS "Next Action"
FROM "Notes"
WHERE type = "project" AND area = "household" AND status = "active"
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
WHERE type = "goal" AND area = "household" AND status = "active"
```

## 🔁 Habits
```dataview
TABLE WITHOUT ID
	file.link AS "Habit",
	streak AS "Streak",
	frequency AS "Freq"
FROM "Notes"
WHERE type = "habit" AND area = "household" AND status = "active"
```

## 📝 Notes
```dataview
LIST
FROM "Notes"
WHERE area = "household" AND status = "active" AND type != "area-hub"
SORT file.cday DESC
LIMIT 10
```
