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

# 🚧 PROJECTS
> *Active projects across all areas of life. Work and personal.*

```dataview
TABLE WITHOUT ID
	file.link AS "Project",
	area AS "Area",
	client AS "Client",
	status AS "Status",
	target_date AS "Target"
FROM "Notes"
WHERE type = "project" AND status != "archived" AND status != "complete"
SORT area ASC, status ASC
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
> *Reference material, databases, and saved knowledge.*

```dataview
TABLE WITHOUT ID
	file.link AS "Resource",
	resource_type AS "Type",
	dateformat(file.mday, "MM/dd") AS "Updated"
FROM "Notes"
WHERE type = "resource" OR type = "database"
SORT resource_type ASC, file.name ASC
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
- [[Ziggy Drafts]] — Active drafts being worked on with Claude
