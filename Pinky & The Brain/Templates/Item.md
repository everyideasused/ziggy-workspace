---
type: item
area: "<% await tp.system.suggester(["household", "work", "health", "interests", "education", "finances"], ["household", "work", "health", "interests", "education", "finances"]) %>"
item_type: "<% await tp.system.suggester(["Physical Item", "Subscription", "Service", "Software License", "Warranty", "Insurance Policy"], ["physical", "subscription", "service", "software", "warranty", "insurance"]) %>"
category: "<% await tp.system.prompt("Category (e.g., Electronics, Kitchen, Tools, Streaming, SaaS, Fitness)") %>"
brand: ""
model: ""
serial_number: ""
purchase_date: 
purchase_price: 
current_value: 
location: "<% await tp.system.prompt("Location (e.g., Office, Garage, Kitchen, Cloud)") %>"
condition: "<% await tp.system.suggester(["New", "Excellent", "Good", "Fair", "Poor", "End of Life"], ["new", "excellent", "good", "fair", "poor", "end-of-life"]) %>"
end_of_life: 
renewal_date: 
monthly_cost: 
annual_cost: 
manual_link: ""
receipt_link: ""
warranty_expiry: 
vendor: ""
status: active
tags:
  - item
  - inventory
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# <% tp.file.title %>

**Type:** `= this.item_type` | **Category:** `= this.category`
**Brand:** `= this.brand` | **Model:** `= this.model`
**Location:** `= this.location` | **Condition:** `= this.condition`

---

## 💰 Financial
| Field | Value |
|-------|-------|
| Purchase Date | `= this.purchase_date` |
| Purchase Price | $`= this.purchase_price` |
| Current Value | $`= this.current_value` |
| Monthly Cost | $`= this.monthly_cost` |
| Annual Cost | $`= this.annual_cost` |
| Renewal Date | `= this.renewal_date` |
| End of Life | `= this.end_of_life` |

## 📋 Details
| Field | Value |
|-------|-------|
| Serial Number | `= this.serial_number` |
| Warranty Expiry | `= this.warranty_expiry` |
| Vendor | `= this.vendor` |
| Manual | `= this.manual_link` |
| Receipt | `= this.receipt_link` |

## 📝 Notes
> *Setup instructions, maintenance history, issues, accessories, etc.*

- 

## 🔗 Related
- 

---

<%* tR += "Created by: " + (tp.user?.agentName || "Ziggy") + " · AI: " + (tp.user?.modelName || "anthropic/claude-sonnet-4-6"); %>
