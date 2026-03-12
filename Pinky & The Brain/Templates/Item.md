---
type: item
area: "<% await tp.system.suggester(["household", "work", "health", "interests", "education", "finances"], ["household", "work", "health", "interests", "education", "finances"]) %>"
item_type: "<% await tp.system.suggester(["Physical Item", "Subscription", "Service", "Software License", "Warranty", "Insurance Policy"], ["physical", "subscription", "service", "software", "warranty", "insurance"]) %>"
ownership: "<% await tp.system.suggester(["Owned", "Wishlist", "Idea"], ["owned", "wishlist", "idea"]) %>"
payment_type: "<% await tp.system.suggester(["Single Charge", "Monthly", "Annual", "N/A"], ["single", "monthly", "annual", "na"]) %>"
category: "<% await tp.system.prompt("Category (e.g., Electronics, Furniture, Tools, Kitchen, Vehicle, Appliance, Outdoor, Clothing, Fitness)") %>"
brand: ""
model: ""
serial_number: ""
purchase_date: 
purchase_price: 
current_value: 
personal_value: <% await tp.system.suggester(["1 — Don't care", "2 — Meh", "3 — Nice to have", "4 — Important", "5 — Irreplaceable"], [1, 2, 3, 4, 5]) %>
life_value: <% await tp.system.suggester(["1 — Never use", "2 — Rarely use", "3 — Sometimes", "4 — Frequently", "5 — Daily essential"], [1, 2, 3, 4, 5]) %>
necessity: "<% await tp.system.suggester(["Necessary", "Unnecessary"], ["necessary", "unnecessary"]) %>"
location: "<% await tp.system.prompt("Location (e.g., Living Room, Garage, Kitchen, Office, Bedroom, Shed, Vehicle)") %>"
condition: "<% await tp.system.suggester(["New", "Excellent", "Good", "Fair", "Poor", "Maintenance Needed", "End of Life", "Giveaway"], ["new", "excellent", "good", "fair", "poor", "maintenance-needed", "end-of-life", "giveaway"]) %>"
end_of_life: 
renewal_date: 
monthly_cost: 
annual_cost: 
warranty_expiry: 
vendor: ""
manual_link: ""
receipt_link: ""
insurance_policy: ""
registration: ""
active_project: ""
status: active
tags:
  - item
  - inventory
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Inventory Database|📦 Inventory]]

---

# <% tp.file.title %>

**Type:** `= this.item_type` | **Category:** `= this.category` | **Ownership:** `= this.ownership`
**Brand:** `= this.brand` | **Model:** `= this.model`
**Location:** `= this.location` | **Condition:** `= this.condition`
**Necessity:** `= this.necessity` | **Personal Value:** `= this.personal_value`/5 | **Life Value:** `= this.life_value`/5

---

## 📸 Photos

> *Drag photos into this section. They'll save to `Attachments/` automatically.*



---

## 🧾 Receipts

> *Drag receipt images or PDFs here. For external receipt links, use the Documents section below.*



---

## 💰 Financial

| Field | Value |
|-------|-------|
| Purchase Date | `= this.purchase_date` |
| Purchase Price | $`= this.purchase_price` |
| Current Value | $`= this.current_value` |
| Payment Type | `= this.payment_type` |
| Monthly Cost | $`= this.monthly_cost` |
| Annual Cost | $`= this.annual_cost` |
| Renewal Date | `= this.renewal_date` |
| End of Life | `= this.end_of_life` |

---

## 📋 Details

| Field | Value |
|-------|-------|
| Serial Number | `= this.serial_number` |
| Warranty Expiry | `= this.warranty_expiry` |
| Vendor | `= this.vendor` |

---

## 📎 Documents

> *Link to manuals, receipts, insurance docs, registration. Drag PDFs into vault or paste links.*

| Document | Link |
|----------|------|
| Manual | `= this.manual_link` |
| Receipt | `= this.receipt_link` |
| Insurance | `= this.insurance_policy` |
| Registration | `= this.registration` |

---

## 🔗 Related

**Active Project:** `= this.active_project`

```dataview
LIST
FROM "Notes"
WHERE type = "project" AND contains(file.outlinks, this.file.link)
LIMIT 5
```

---

## 📝 Notes
> *Setup, maintenance history, accessories, issues, mod ideas.*

- 

---

<%* tR += "Created by: " + (tp.user?.agentName || "Ziggy") + " · AI: " + (tp.user?.modelName || "anthropic/claude-sonnet-4-5-20250929"); %>
