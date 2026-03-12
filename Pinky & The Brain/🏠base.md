---
created: 2025-02-01
updated: 2026-03-08
type: area-hub
area: system
tags:
  - home
  - dashboard
  - system
status: active
---
> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

> **First time?** Start here → [[Human Guide]] · [[Getting Started]] · [[System Guide]]

---
# 📥 INBOX
> *Process these — assign an area, convert to a project, move to resources, or archive.*

```dataview
TABLE WITHOUT ID
	file.link AS "Note",
	dateformat(file.cday, "MM/dd") AS "Captured",
	tags AS "Tags"
FROM "Notes"
WHERE status = "inbox"
SORT file.cday DESC
```

### ⚠️ Missing Frontmatter
> *These notes have no `type` field — they're invisible to the system. Add frontmatter or apply a template.*

```dataview
TABLE WITHOUT ID
	file.link AS "Note",
	dateformat(file.cday, "MM/dd") AS "Created"
FROM "Notes"
WHERE !type
SORT file.cday DESC
```

---

# 🌿 ACTIVE PERSONAL PROJECTS

```dataview
TABLE WITHOUT ID
	file.link AS "Project",
	area AS "Area",
	health AS "Health",
	phase AS "Phase",
	target_date AS "Target"
FROM "Notes"
WHERE type = "project" AND status = "active" AND area != "work"
SORT health ASC, area ASC
```

---

# 💼 ACTIVE WORK PROJECTS

```dataview
TABLE WITHOUT ID
	file.link AS "Project",
	client AS "Client",
	health AS "Health",
	phase AS "Phase",
	target_date AS "Target"
FROM "Notes"
WHERE type = "project" AND status = "active" AND area = "work"
SORT health ASC
```

---

# 🏛️ AREAS
> *Ongoing areas of responsibility. Each has its own hub note.*

```dataview
TABLE WITHOUT ID
	file.link AS "Area",
	length(filter(file.inlinks, (x) => true)) AS "Linked Notes"
FROM "Notes"
WHERE type = "area-hub"
SORT file.name ASC
```

---

# 💧 RESOURCES
> *Recently used reference material, databases, and saved knowledge.*

```dataview
TABLE WITHOUT ID
	file.link AS "Resource",
	resource_type AS "Type",
	dateformat(file.mtime, "MM/dd HH:mm") AS "Last Used"
FROM "Notes"
WHERE type = "resource" OR type = "database" OR type = "reference"
SORT file.mtime DESC
LIMIT 5
```

---

# 📔 ARCHIVES
> *Completed and inactive items. [[Archives Hub|Browse Archives →]]*

```dataview
LIST
FROM "Notes"
WHERE status = "archived"
SORT file.mday DESC
LIMIT 10
```

---
---

# ⚙️ SYSTEM
- [[Dashboard]] — Weekly at-a-glance: fitness, habits, tasks, finances
- [[Human Guide]] — Plain-English guide to using this vault
- [[Getting Started]] — Step-by-step technical setup
- [[System Guide]] — How this vault works, rules, conventions
- [[Templates Hub]] — All templates and when to use them
- [[Tags Reference]] — Master tag list and definitions

# 🤖 ZIGGY
- [[Ziggy Hub]] — AI conversation saves, research drafts, notes in progress
- [[Agent Registry]] — Specialized agents, their roles, and how they work together
- [[Ziggy Drafts]] — Active drafts being worked on
