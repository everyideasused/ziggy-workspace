---
type: project
area: <% await tp.system.suggester(["work", "relationships", "household", "health", "interests", "education", "finances"], ["work", "relationships", "household", "health", "interests", "education", "finances"]) %>
client: "<% await tp.system.prompt("Client name (or 'Nathan' for personal)") %>"
client_id: "<% await tp.system.prompt("Client ID (e.g., CLT-001 or PERSONAL)") %>"
status: active
health: green
priority: normal
start_date: <% tp.date.now("YYYY-MM-DD") %>
target_date: 
tags:
  - project
  - <% await tp.system.prompt("Area tag (e.g., work, health, finances)") %>
next_action: ""
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# <% tp.file.title %>

## 📋 Overview
> *What is this project? What does "done" look like?*

**Objective:** 

**Success Criteria:** 

**Deadline:** 

---

## 🎯 Goals & Milestones

| Milestone | Target Date | Status |
|-----------|------------|--------|
| | | ⬜ Not Started |
| | | ⬜ Not Started |
| | | ⬜ Not Started |

---

## ✅ Active Tasks
- [ ] 

---

## 📝 Notes & Decisions
> *Running log of important notes, decisions, and context.*

### <% tp.date.now("YYYY-MM-DD") %>
- 

---

## 🔗 Related
- **Area:** 
- **People:** 
- **Resources:** 

---

## 📔 Log
> *Linked daily notes and meetings where this project was discussed.*

```dataview
LIST
FROM "Journal" OR "Notes"
WHERE contains(file.outlinks, this.file.link)
SORT file.cday DESC
LIMIT 15
```
