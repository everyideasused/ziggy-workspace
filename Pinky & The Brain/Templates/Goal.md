---
type: goal
area: "<% await tp.system.suggester(["work", "relationships", "household", "health", "interests", "education", "finances"], ["work", "relationships", "household", "health", "interests", "education", "finances"]) %>"
timeframe: "<% await tp.system.suggester(["Q1", "Q2", "Q3", "Q4", "Annual", "Ongoing"], ["Q1", "Q2", "Q3", "Q4", "Annual", "Ongoing"]) %>"
year: <% tp.date.now("YYYY") %>
status: active
health: green
target_date: 
metric: ""
target_value: ""
current_value: ""
tags:
  - goal
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# <% tp.file.title %>

**Area:** `= this.area` | **Timeframe:** `= this.timeframe` `= this.year`
**Status:** `= this.status` | **Health:** `= this.health`

---

## 🎯 Definition
> *What does success look like? Be specific and measurable.*

**Goal:** 

**Metric:** `= this.metric`
**Target:** `= this.target_value`
**Current:** `= this.current_value`

---

## 🪜 Milestones / Steps

- [ ] 
- [ ] 
- [ ] 

---

## 📝 Progress Log

### <% tp.date.now("YYYY-MM-DD") %>
- 

---

## 🔗 Related Projects
```dataview
LIST
FROM "Notes"
WHERE type = "project" AND contains(file.outlinks, this.file.link)
```
