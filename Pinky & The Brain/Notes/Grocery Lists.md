---
type: database
area: household
status: active
tags:
  - household
  - database
  - grocery
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Household Hub|Household Hub]]

---

# 🛒 Grocery Lists

---

## 📋 Current Week

**Active:** [[Grocery List - Week of Mar 2]]

---

## 📊 All Grocery Lists

```dataview
TABLE WITHOUT ID
	file.link AS "Week",
	week_of AS "Date",
	length(recipes) AS "Recipes"
FROM "Notes"
WHERE type = "grocery-list"
SORT week_of DESC
```

---

## 🔄 How It Works

1. **Plan meals** — Select recipes in [[Meal Plan - Current Week]]
2. **Ask Ziggy** — "Build grocery list for this week's meal plan"
3. **Shop** — Open grocery list on phone, check off items as you shop
4. **Cook** — Open recipe notes, follow instructions

---

## 💡 Tips

- **Check pantry first** — Mark what you already have before shopping
- **Batch cooking** — Look for recipes that keep 5+ days
- **Shared ingredients** — Recipes with common items = cost savings
- **Obsidian mobile** — Access grocery lists on phone at the store
- **Web access** — https://pkm.mouthygeese.com for shopping on any device

---

## 🔗 Quick Links

- [[Recipe Index|🍳 Browse Recipes]]
- [[Meal Plan - Current Week|📅 This Week's Plan]]
- [[Household Hub|🏠 Household]]
- [[Recipe to Grocery List - Process|📋 Process Docs]]

---

## 🔮 Coming Soon (Phase 2)

- ✨ Auto-generate grocery list from meal plan (skill/script)
- 📊 Budget tracking (cost per meal)
- 🥗 Nutrition rollup (weekly totals)
- 🔄 Export to iOS Reminders (optional)
