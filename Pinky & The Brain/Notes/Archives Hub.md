---
type: system
area: 
status: active
tags:
  - system
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# 📔 Archives Hub

## Completed Projects
```dataview
TABLE WITHOUT ID
	file.link AS "Project",
	area AS "Area",
	client AS "Client",
	dateformat(file.mday, "MM/dd/yy") AS "Archived"
FROM "Notes"
WHERE type = "project" AND status = "archived"
SORT file.mday DESC
```

## Archived Notes
```dataview
TABLE WITHOUT ID
	file.link AS "Note",
	type AS "Type",
	area AS "Area",
	dateformat(file.mday, "MM/dd/yy") AS "Archived"
FROM "Notes"
WHERE status = "archived" AND type != "project"
SORT file.mday DESC
```
