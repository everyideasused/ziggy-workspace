---
type: person
area: "<% await tp.system.suggester(["work", "relationships", "household", "health", "interests", "education", "finances"], ["work", "relationships", "household", "health", "interests", "education", "finances"]) %>"
role: "<% await tp.system.prompt("Role/relationship (e.g., Client Contact, GC PM, Friend, Doctor)") %>"
organization: "<% await tp.system.prompt("Organization (or leave blank)") %>"
client_id: ""
phone: ""
email: ""
status: active
tags:
  - person
---

> [[🏠base|🏠]] · [[<% tp.date.now("YYYY-MM-DD") %>|📅 Today]]

---

# <% tp.file.title %>

**Role:** `= this.role` | **Org:** `= this.organization`
**Phone:** `= this.phone` | **Email:** `= this.email`

## 📝 Notes
> *Working style, preferences, communication tips, relationship context.*

- 

## 🔗 Connected To
```dataview
LIST
FROM "Notes" OR "Journal"
WHERE contains(file.outlinks, this.file.link)
SORT file.cday DESC
LIMIT 10
```
