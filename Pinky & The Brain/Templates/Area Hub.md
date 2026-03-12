---
type: area-hub
area: "<% await tp.system.suggester(["relationships", "household", "health", "interests", "education", "finances", "work"], ["relationships", "household", "health", "interests", "education", "finances", "work"]) %>"
status: active
tags:
  - area
  - <% await tp.system.prompt("Area tag") %>
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# <% tp.file.title %>

## 📋 Overview
> *What does this area of life cover? What does "well-maintained" look like here?*

- 

---

## 🚧 Active Projects
```dataview
TABLE WITHOUT ID
	file.link AS "Project",
	status AS "Status",
	health AS "Health",
	target_date AS "Target"
FROM "Notes"
WHERE type = "project" AND area = this.area AND status != "archived" AND status != "complete"
SORT status ASC
```

---

## 📌 Standing Commitments & Routines
> *Recurring responsibilities in this area.*

- 

---

## 🎯 Current Goals
> *What am I working toward in this area right now?*

1. 
2. 
3. 

---

## 📝 Notes
> *Running notes, thoughts, and observations about this area.*

### <% tp.date.now("YYYY-MM-DD") %>
- 

---

## 📔 Recent Activity
```dataview
LIST
FROM "Notes"
WHERE area = this.area AND status != "archived"
SORT file.mday DESC
LIMIT 10
```

---

<%* tR += "Created by: " + (tp.user?.agentName || "Ziggy") + " · AI: " + (tp.user?.modelName || "anthropic/claude-sonnet-4-5-20250929"); %>
