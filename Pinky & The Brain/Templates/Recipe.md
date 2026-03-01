---
type: recipe
area: household
category: "<% await tp.system.suggester(["Breakfast", "Lunch", "Dinner / Main", "Snack", "Meal Prep", "Drink / Smoothie"], ["breakfast", "lunch", "main", "snack", "meal-prep", "drink"]) %>"
servings: <% await tp.system.prompt("Servings") %>
prep_time: "<% await tp.system.prompt("Prep time (e.g., 15 min)") %>"
cook_time: "<% await tp.system.prompt("Cook time (e.g., 30 min)") %>"
calories: 
protein_grams: 
favorite: false
rating: 
source: ""
status: active
tags:
  - recipe
  - household
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Recipe Index|🍳 Recipes]]

---

# 🍳 <% tp.file.title %>

**Category:** `= this.category` | **Servings:** `= this.servings` | **Prep:** `= this.prep_time` | **Cook:** `= this.cook_time`
**Calories:** `= this.calories` | **Protein:** `= this.protein_grams`g | **Favorite:** `= this.favorite`

---

## 📋 Ingredients

- 
- 
- 
- 
- 

---

## 👨‍🍳 Instructions

1. 
2. 
3. 
4. 
5. 

---

## 📝 Notes
> *Tweaks, substitutions, what worked, what didn't.*

- 

---

## 🔗 Related
- [[Grocery List]]
- Source: `= this.source`
