---
type: work-project
area: work
client: "<% await tp.system.prompt("Client name") %>"
client_id: "<% await tp.system.prompt("Client ID (e.g., CLT-001)") %>"
program_id: "<% await tp.system.prompt("Program ID (e.g., PRG-001)") %>"
project_id: "<% await tp.system.prompt("Project ID (e.g., PJ-001)") %>"
project_name: "<% tp.file.title %>"
store_number: ""
city: "<% await tp.system.prompt("City") %>"
state: "<% await tp.system.prompt("State abbreviation") %>"
address: ""
phase: "<% await tp.system.suggester(["Real Estate", "Design", "Permitting", "Pre-Construction", "Construction", "Closeout", "Complete"], ["Real Estate", "Design", "Permitting", "Pre-Construction", "Construction", "Closeout", "Complete"]) %>"
project_type: "<% await tp.system.suggester(["Ground-Up", "Renovation", "Remodel"], ["Ground-Up", "Renovation", "Remodel"]) %>"
status: active
health: green
gc: ""
architect: ""
ahj: ""
budget: 
start_date: <% tp.date.now("YYYY-MM-DD") %>
target_date: 
tags:
  - project
  - work
  - site-project
next_action: ""
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Work Hub|Work Hub]] · [[<% await tp.system.prompt("Link to Client Project note name") %>|🏢 Client]]

---

# <% tp.file.title %>

**`= this.client`** | `= this.project_id` | `= this.city`, `= this.state`
**Phase:** `= this.phase` | **Health:** `= this.health` | **Type:** `= this.project_type`
**GC:** `= this.gc` | **Architect:** `= this.architect` | **AHJ:** `= this.ahj`

---

## 🧠 My Strategic Notes
> *Your observations, instincts, and context that don't belong in Smartsheet. What's really going on with this project?*

- 

---

## 📌 Current Focus
> *The 1-3 things that matter most on this project right now.*

1. 
2. 
3. 

---

## ⚠️ Risks & Concerns (My Assessment)
> *Your gut-level risk assessment. The official register is in Smartsheet — this is where you think out loud.*

- 

---

## 🏛️ AHJ & Permit Intelligence
> *What you know about this jurisdiction that won't fit in a spreadsheet row. Relationships, quirks, tips.*

**AHJ:** `= this.ahj`
- 

---

## 👷 Vendor & Team Notes
> *Working observations about GC performance, sub quality, team dynamics.*

- 

---

## 📸 Site Visit Observations
> *Quick notes from visits. Photos stay in Smartsheet/project files — capture your thinking here.*

### <% tp.date.now("YYYY-MM-DD") %>
- 

---

## 📝 Key Decisions & Conversations
> *Important decisions made and the context behind them.*

- 

---

## 📔 Activity Log
```dataview
LIST
FROM "Journal" OR "Notes"
WHERE contains(file.outlinks, this.file.link)
SORT file.cday DESC
LIMIT 15
```

---

<%* tR += "Created by: " + (tp.user?.agentName || "Ziggy") + " · AI: " + (tp.user?.modelName || "anthropic/claude-sonnet-4-6"); %>
