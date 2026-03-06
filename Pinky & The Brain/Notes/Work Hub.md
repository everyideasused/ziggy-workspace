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

## 📚 Knowledge Bases

### Construction PM Advisor (Atlas)
- [[Construction PM Knowledge Base]] — Full construction lifecycle reference (28 notes)
- **System Config:** [[Construction PM Advisor Prompt]] (Ziggy's route target for construction questions)

### Carpenter & GC Advisor (Hammer)
- [[Carpenter and General Contractor - Master Reference]] — Craft and execution KB (14 notes)

#### Hammer's Advisory Framework
> *Building science, framing, finish carpentry, materials, codes, trades, estimating, tools, quality, safety. When construction management meets craft execution.*

| Priority         | Domain                | Reference Note                                    |
| ---------------- | --------------------- | ------------------------------------------------- |
| 🔴 **CRITICAL**  | Building Science      | [[Building Science Fundamentals]]                 |
| 🔴 **CRITICAL**  | Framing & Structure   | [[Framing & Structural Carpentry]]                |
| 🟡 **IMPORTANT** | Codes & Inspection    | [[Building Codes & Inspection Readiness]]         |
| 🟡 **IMPORTANT** | Materials & Fasteners | [[Materials & Fasteners Reference]]               |
| 🟢 **OPTIMIZE**  | Finish Carpentry      | [[Finish Carpentry & Trim Work]]                  |
| 🟢 **OPTIMIZE**  | Estimating            | [[Estimating & Takeoffs]]                         |
| 🟢 **OPTIMIZE**  | Trade Coordination    | [[Trade Coordination & Subcontractor Management]] |
| —                | Construction Sequence | [[Residential Construction Sequencing]]           |
| —                | Quality Control       | [[Common Defects & Quality Control]]              |
| —                | Tools & Equipment     | [[Tools & Equipment Reference]]                   |
| —                | Safety                | [[Construction Safety & OSHA Residential]]        |
| —                | PM-to-Builder Bridge  | [[PM-to-Builder Translation Guide]]               |

**System Config:** [[Carpenter Advisor Prompt]] (Ziggy's route target for carpentry/GC questions)

---

## 🔗 Quick Links
- **Smartsheet PMO:** *(paste your Smartsheet workspace URL here)*
- [[Tags Reference]] — Tag conventions for work items
- [[Ziggy Hub]] — Session notes and drafts
