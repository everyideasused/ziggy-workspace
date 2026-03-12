---
type: database
area: household
status: active
tags:
  - database
  - inventory
resource_type: database
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Household Hub|Household Hub]]

---

# 📦 Inventory Database

---

## 🏠 All Physical Items

```dataview
TABLE WITHOUT ID
	file.link AS "Item",
	category AS "Category",
	brand AS "Brand",
	location AS "Location",
	condition AS "Condition",
	"$" + string(purchase_price) AS "Cost",
	personal_value AS "PV",
	life_value AS "LV"
FROM "Notes"
WHERE type = "item" AND item_type = "physical" AND status = "active" AND ownership = "owned"
SORT category ASC, file.name ASC
```

**Grouped small items:** [[Household Supplies]]

---

## 🔄 Subscriptions & Services

```dataview
TABLE WITHOUT ID
	file.link AS "Service",
	category AS "Category",
	"$" + string(monthly_cost) AS "$/mo",
	"$" + string(annual_cost) AS "$/yr",
	renewal_date AS "Renews",
	vendor AS "Vendor"
FROM "Notes"
WHERE type = "item" AND (item_type = "subscription" OR item_type = "service" OR item_type = "software") AND status = "active"
SORT category ASC, file.name ASC
```

**Monthly Total:** 
```dataviewjs
const items = dv.pages('"Notes"')
    .where(p => p.type === "item" && (p.item_type === "subscription" || p.item_type === "service" || p.item_type === "software") && p.status === "active" && p.monthly_cost);
const total = items.values.reduce((sum, p) => sum + (p.monthly_cost || 0), 0);
dv.paragraph(`**$${total.toFixed(2)}/mo** ($${(total * 12).toFixed(2)}/yr)`);
```

---

## 🛒 Wishlist & Ideas

```dataview
TABLE WITHOUT ID
	file.link AS "Item",
	category AS "Category",
	"$" + string(purchase_price) AS "Est. Cost",
	necessity AS "Necessity",
	personal_value AS "PV"
FROM "Notes"
WHERE type = "item" AND (ownership = "wishlist" OR ownership = "idea")
SORT necessity ASC, personal_value DESC
```

---

## 📍 By Location

```dataview
TABLE WITHOUT ID
	file.link AS "Item",
	category AS "Category",
	condition AS "Condition"
FROM "Notes"
WHERE type = "item" AND item_type = "physical" AND status = "active" AND ownership = "owned"
GROUP BY location
SORT location ASC
```

---

## 🧹 Declutter Candidates
> *Low personal value + low life value + unnecessary = consider removing.*

```dataview
TABLE WITHOUT ID
	file.link AS "Item",
	category AS "Category",
	personal_value AS "PV",
	life_value AS "LV",
	necessity AS "Need?",
	condition AS "Condition"
FROM "Notes"
WHERE type = "item" AND status = "active" AND ownership = "owned"
  AND (personal_value <= 2 OR life_value <= 2)
  AND necessity = "unnecessary"
SORT life_value ASC, personal_value ASC
```

---

## 🔧 Maintenance Needed

```dataview
TABLE WITHOUT ID
	file.link AS "Item",
	category AS "Category",
	location AS "Location",
	condition AS "Condition"
FROM "Notes"
WHERE type = "item" AND status = "active" AND (condition = "maintenance-needed" OR condition = "poor")
SORT file.name ASC
```

---

## ⚠️ Expiring Soon
> *Warranties, subscriptions, and items expiring in the next 90 days.*

```dataview
TABLE WITHOUT ID
	file.link AS "Item",
	item_type AS "Type",
	choice(end_of_life, end_of_life, renewal_date) AS "Expiry",
	warranty_expiry AS "Warranty"
FROM "Notes"
WHERE type = "item" AND status = "active" AND (
	(end_of_life AND end_of_life <= date(today) + dur(90 days)) OR
	(renewal_date AND renewal_date <= date(today) + dur(90 days)) OR
	(warranty_expiry AND warranty_expiry <= date(today) + dur(90 days))
)
SORT end_of_life ASC
```

---

## 🛡️ Insurance-Ready Report
> *Items with purchase price, serial numbers, and documents — your claims reference.*

```dataview
TABLE WITHOUT ID
	file.link AS "Item",
	brand AS "Brand",
	model AS "Model",
	serial_number AS "Serial #",
	"$" + string(purchase_price) AS "Cost",
	"$" + string(current_value) AS "Value",
	insurance_policy AS "Policy"
FROM "Notes"
WHERE type = "item" AND status = "active" AND ownership = "owned" AND item_type = "physical"
  AND (purchase_price OR serial_number OR insurance_policy)
SORT purchase_price DESC
```

---

## 💰 Total Asset Value

```dataviewjs
const items = dv.pages('"Notes"')
    .where(p => p.type === "item" && p.status === "active" && p.ownership === "owned" && p.item_type === "physical");

const totalPurchase = items.values.reduce((sum, p) => sum + (p.purchase_price || 0), 0);
const totalCurrent = items.values.reduce((sum, p) => sum + (p.current_value || p.purchase_price || 0), 0);
const count = items.length;

dv.paragraph(`**${count} tracked items** | Purchase total: **$${totalPurchase.toLocaleString()}** | Current est. value: **$${totalCurrent.toLocaleString()}**`);
```

---

## 📔 Retired / Disposed / Given Away

```dataview
TABLE WITHOUT ID
	file.link AS "Item",
	category AS "Category",
	condition AS "Condition",
	end_of_life AS "Retired"
FROM "Notes"
WHERE type = "item" AND (status = "retired" OR status = "disposed" OR status = "archived" OR condition = "giveaway")
SORT end_of_life DESC
```

---

## 🔗 Quick Links
- [[Household Supplies]] — Grouped items under $25
- [[Household Hub|Household Hub]]
- [[Finances Hub|Finances Hub]] — Subscription costs roll into monthly budget
