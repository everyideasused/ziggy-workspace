---
type: area-hub
area: work
status: active
tags:
  - area
  - work
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# 💼 Work Hub
## Construction Program Management — Command Center

---

## 📊 Portfolio at a Glance

### Active Client Programs
```dataview
TABLE WITHOUT ID
	file.link AS "Client",
	client_id AS "ID",
	program AS "Program",
	health AS "Health",
	next_action AS "Next Action"
FROM "Notes"
WHERE type = "project" AND area = "work" AND contains(tags, "client") AND status = "active"
SORT client ASC
```

### Active Site Projects
```dataview
TABLE WITHOUT ID
	file.link AS "Project",
	client AS "Client",
	project_id AS "ID",
	phase AS "Phase",
	health AS "Health",
	city AS "City"
FROM "Notes"
WHERE type = "work-project" AND status = "active"
SORT client ASC, phase ASC
```

---

## 🔴 Items Needing Attention
> *Projects at Yellow or Red health across the portfolio.*

```dataview
TABLE WITHOUT ID
	file.link AS "Project",
	client AS "Client",
	health AS "Health",
	next_action AS "Next Action"
FROM "Notes"
WHERE (type = "project" OR type = "work-project") AND area = "work" AND (health = "yellow" OR health = "red") AND status = "active"
SORT health ASC
```

---

## 📅 Upcoming Meetings
```dataview
TABLE WITHOUT ID
	file.link AS "Meeting",
	client AS "Client",
	meeting_type AS "Type",
	date AS "Date"
FROM "Notes"
WHERE type = "meeting" AND area = "work" AND date >= date(today)
SORT date ASC
LIMIT 10
```

---

## 📝 Recent Work Notes
```dataview
LIST
FROM "Notes" OR "Journal"
WHERE area = "work"
SORT file.mday DESC
LIMIT 10
```

---

## 🔗 Quick Links
- [[Construction PM Knowledge Base]] — Full construction lifecycle reference (28 notes)
- **Smartsheet PMO:** *(paste your Smartsheet workspace URL here)*
- [[Tags Reference]] — Tag conventions for work items
