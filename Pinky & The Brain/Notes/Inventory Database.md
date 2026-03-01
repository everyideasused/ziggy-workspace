---
type: database
area: household
status: active
tags:
  - database
  - inventory
resource_type: database
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# 📦 Inventory Database

---

## 🖥️ Physical Items

```dataview
TABLE WITHOUT ID
	file.link AS "Item",
	category AS "Category",
	brand AS "Brand",
	location AS "Location",
	condition AS "Condition",
	purchase_price AS "Cost",
	end_of_life AS "EOL"
FROM "Notes"
WHERE type = "item" AND item_type = "physical" AND status = "active"
SORT category ASC, file.name ASC
```

---

## 🔄 Subscriptions & Services

```dataview
TABLE WITHOUT ID
	file.link AS "Service",
	category AS "Category",
	monthly_cost AS "$/mo",
	annual_cost AS "$/yr",
	renewal_date AS "Renews",
	vendor AS "Vendor"
FROM "Notes"
WHERE type = "item" AND (item_type = "subscription" OR item_type = "service" OR item_type = "software") AND status = "active"
SORT category ASC, file.name ASC
```

**Monthly Total:** *Sum your active subscriptions manually or use DataviewJS*

---

## ⚠️ Expiring Soon
> *Items, warranties, and subscriptions expiring in the next 90 days.*

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

## 🏷️ By Location

```dataview
TABLE WITHOUT ID
	file.link AS "Item",
	category AS "Category",
	condition AS "Condition"
FROM "Notes"
WHERE type = "item" AND item_type = "physical" AND status = "active"
GROUP BY location
SORT location ASC
```

---

## 📔 Retired / Disposed

```dataview
TABLE WITHOUT ID
	file.link AS "Item",
	category AS "Category",
	end_of_life AS "Retired"
FROM "Notes"
WHERE type = "item" AND (status = "retired" OR status = "disposed" OR status = "archived")
SORT end_of_life DESC
```
