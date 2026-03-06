---
type: recipe
area: household
category: "<% await tp.system.suggester(["Breakfast", "Lunch", "Dinner / Main", "Snack", "Meal Prep", "Drink / Smoothie"], ["breakfast", "lunch", "main", "snack", "meal-prep", "drink"]) %>"
meal_type: "<% await tp.system.suggester(["Breakfast", "Lunch", "Dinner", "Snack", "Side"], ["breakfast", "lunch", "dinner", "snack", "side"]) %>"
cuisine: "<% await tp.system.suggester(["Mexican", "Italian", "Asian", "American", "Mediterranean", "Indian", "Other"], ["mexican", "italian", "asian", "american", "mediterranean", "indian", "other"]) %>"
vegan: true
servings: <% await tp.system.prompt("Servings") %>
prep_time: <% await tp.system.prompt("Prep time (minutes)", "15") %>
cook_time: <% await tp.system.prompt("Cook time (minutes)", "30") %>
total_time: 
calories: 
protein: 
favorite: false
rating: 
source: ""
status: active
tags:
  - recipe
  - household
  - vegan
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Household Hub|Household Hub]]

---

# 🍳 <% tp.file.title %>

**Meal Type:** `= this.meal_type` | **Cuisine:** `= this.cuisine` | **Servings:** `= this.servings`
**Prep:** `= this.prep_time` min | **Cook:** `= this.cook_time` min | **Total:** `= this.total_time` min
**Calories:** `= this.calories` | **Protein:** `= this.protein`g | **Favorite:** `= choice(this.favorite, "⭐", "")`

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
- [[Recipe Index|🍳 Recipes]]
- Source: `= this.source`

---

<%* tR += "Created by: " + (tp.user?.agentName || "Ziggy") + " · AI: " + (tp.user?.modelName || "anthropic/claude-sonnet-4-6"); %>
