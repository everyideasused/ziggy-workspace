---
type: project
area: work
client: "<% await tp.system.prompt("Client name (e.g., Chick-fil-A)") %>"
client_id: "<% await tp.system.prompt("Client ID (e.g., CLT-001)") %>"
program: "<% await tp.system.prompt("Program name") %>"
program_id: "<% await tp.system.prompt("Program ID (e.g., PRG-001)") %>"
contract_start: 
contract_end: 
retainer: 
billing_rate: 
status: active
health: green
priority: normal
start_date: <% tp.date.now("YYYY-MM-DD") %>
target_date: 
primary_contact: ""
primary_email: ""
tags:
  - project
  - work
  - client
next_action: ""
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Work Hub|Work Hub]]

---

# <% tp.file.title %>

## 📋 Client Overview
> *Strategic context, relationship notes, and big picture.*

**Client:** `= this.client`
**Program:** `= this.program`
**Contract:** `= this.contract_start` → `= this.contract_end`
**Retainer:** $`= this.retainer`/mo | **Rate:** $`= this.billing_rate`/hr
**Primary Contact:** `= this.primary_contact` · `= this.primary_email`
**Health:** `= this.health`

---

## 🏗️ Active Projects
> *Individual store/site projects under this client. Each is tracked in Smartsheet — this is your strategic layer.*

```dataview
TABLE WITHOUT ID
	file.link AS "Project",
	project_id AS "ID",
	phase AS "Phase",
	health AS "Health",
	city AS "City"
FROM "Notes"
WHERE type = "work-project" AND client_id = this.client_id AND status != "archived"
SORT phase ASC
```

---

## 🎯 Program Priorities
> *Top strategic priorities for this client right now.*

1. 
2. 
3. 

---

## ⚠️ Active Risks & Issues
> *Things keeping you up at night about this client/program. Detail lives in Smartsheet — capture your thinking here.*

| Risk/Issue | Severity | My Take / Strategy |
|-----------|----------|-------------------|
| | | |

---

## 💰 Financial Pulse
> *High-level financial awareness. Detailed tracking in Smartsheet.*

| Month | Retainer | Add'l Hours | Expenses | Total | Paid |
|-------|----------|-------------|----------|-------|------|
| | | | | | |

**AR Notes:**

---

## 🤝 Relationship Notes
> *Context about key people, political dynamics, preferences, communication style. The stuff that doesn't go in Smartsheet.*

**Key People:**
- **Name** — Role. Notes on working style, preferences, etc.

**Political Landscape:**
- 

**Communication Preferences:**
- 

---

## 📝 Meeting & Conversation Notes
> *Linked from daily notes and meeting notes.*

```dataview
LIST
FROM "Notes"
WHERE type = "meeting" AND client_id = this.client_id
SORT file.cday DESC
LIMIT 10
```

---

## 📊 Monthly Review Log
> *Brief monthly assessment. How's this client going?*

### <% tp.date.now("YYYY-MM") %>
- **Health:** 
- **Key wins:** 
- **Concerns:** 
- **Next month focus:** 

---

## 📔 Activity Log
```dataview
LIST
FROM "Journal" OR "Notes"
WHERE contains(file.outlinks, this.file.link)
SORT file.cday DESC
LIMIT 15
```
