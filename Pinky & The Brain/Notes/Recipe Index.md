---
type: database
area: household
status: active
tags:
  - household
  - database
  - recipe
  - cooking
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Household Hub|Household Hub]]

---

# 🍳 Recipe Index

**Quick Links:**
- [[Meal Plan - Current Week|📅 This Week's Plan]]
- [[Grocery Lists|🛒 Grocery Lists]]
- [[Household Hub|🏠 Household]]

---

## 📊 All Recipes

```dataview
TABLE WITHOUT ID
	file.link AS "Recipe",
	cuisine AS "Cuisine",
	meal_type AS "Meal",
	prep_time AS "Prep",
	protein AS "Protein (g)"
FROM "Notes"
WHERE type = "recipe"
SORT file.name ASC
```

---

## 🌱 Vegan Recipes

```dataview
TABLE WITHOUT ID
	file.link AS "Recipe",
	meal_type AS "Meal",
	protein AS "Protein (g)",
	prep_time AS "Prep Time"
FROM "Notes"
WHERE type = "recipe" AND vegan = true
SORT file.name ASC
```

---

## 🌯 High-Protein Recipes
> *150g+ protein per day target for bulking*

```dataview
TABLE WITHOUT ID
	file.link AS "Recipe",
	protein AS "Protein (g)",
	prep_time AS "Prep Time"
FROM "Notes"
WHERE type = "recipe" AND protein >= 30
SORT protein DESC
```

---

## ⚡ Quick Meals
> *30 minutes or less prep + cook time*

```dataview
TABLE WITHOUT ID
	file.link AS "Recipe",
	total_time AS "Total Time",
	protein AS "Protein (g)"
FROM "Notes"
WHERE type = "recipe" AND total_time <= 30
SORT total_time ASC
```

---

## 🌅 Breakfast

```dataview
LIST
FROM "Notes"
WHERE type = "recipe" AND meal_type = "breakfast"
SORT file.name ASC
```

## 🍽️ Lunch

```dataview
LIST
FROM "Notes"
WHERE type = "recipe" AND meal_type = "lunch"
SORT file.name ASC
```

## 🍴 Dinner

```dataview
LIST
FROM "Notes"
WHERE type = "recipe" AND meal_type = "dinner"
SORT file.name ASC
```

## 🍪 Snacks & Sides

```dataview
LIST
FROM "Notes"
WHERE type = "recipe" AND (meal_type = "snack" OR meal_type = "side")
SORT file.name ASC
```

---

## 🌍 By Cuisine

### Mexican
```dataview
LIST FROM "Notes" WHERE type = "recipe" AND cuisine = "mexican"
```

### Italian
```dataview
LIST FROM "Notes" WHERE type = "recipe" AND cuisine = "italian"
```

### Asian
```dataview
LIST FROM "Notes" WHERE type = "recipe" AND cuisine = "asian"
```

### American
```dataview
LIST FROM "Notes" WHERE type = "recipe" AND cuisine = "american"
```

---

## 📝 Recipe Notes
> *Meal planning tips, substitutions, cooking techniques*

```dataview
LIST
FROM "Notes"
WHERE area = "household" AND contains(tags, "cooking") AND type = "note"
SORT file.cday DESC
LIMIT 10
```

---

## 🔗 Quick Links
- [[Grocery List|🛒 Grocery List]]
- [[Household Hub|🏠 Household Hub]]
- Use the **Recipe** template to add a new recipe
