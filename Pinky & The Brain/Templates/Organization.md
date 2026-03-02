---
type: organization
area: "<% await tp.system.suggester(["work", "relationships", "household", "health", "interests", "education", "finances"], ["work", "relationships", "household", "health", "interests", "education", "finances"]) %>"
org_type: "<% await tp.system.suggester(["Client", "Vendor/GC", "AHJ", "Architect", "Subcontractor", "Landlord", "Personal Service", "Other"], ["Client", "Vendor/GC", "AHJ", "Architect", "Subcontractor", "Landlord", "Personal Service", "Other"]) %>"
client_id: ""
website: ""
phone: ""
address: ""
status: active
tags:
  - organization
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# <% tp.file.title %>

**Type:** `= this.org_type` | **Website:** `= this.website`
**Phone:** `= this.phone` | **Address:** `= this.address`

## 👥 Key People
```dataview
TABLE WITHOUT ID
	file.link AS "Person",
	role AS "Role",
	phone AS "Phone",
	email AS "Email"
FROM "Notes"
WHERE type = "person" AND organization = this.file.name
```

## 📝 Notes
> *Institutional knowledge — how they operate, quirks, tips, history.*

- 

## 🔗 Related
```dataview
LIST
FROM "Notes" OR "Journal"
WHERE contains(file.outlinks, this.file.link)
SORT file.cday DESC
LIMIT 10
```
