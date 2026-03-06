---
type: process
area: household
status: active
tags:
  - household
  - process
  - recipe
  - meal-planning
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Household Hub|Household Hub]]

---

# 🍳 Recipe to Grocery List — Process

**Purpose:** Streamline weekly meal planning → grocery shopping workflow

---

## 🎯 Workflow Overview

```
Browse Recipe Index → Select Recipes for Week → Ask Ziggy to Build Grocery List → 
Check Off What You Have → Shop for Rest → Cook
```

**All in Obsidian — No external apps required**

---

## Step 1: Browse & Select Recipes

**Location:** [[Recipe Index]] → Browse all recipes by cuisine, protein, prep time, etc.

**Two ways to plan:**

### Option A: Browse Existing Recipes
1. Open [[Recipe Index]] in Obsidian
2. Browse recipes by category (breakfast, lunch, dinner, snacks)
3. Filter by cuisine, protein content, or prep time
4. Select 4-7 recipes for the week
5. Add selected recipes to [[Meal Plan - Current Week]]

### Option B: Research New Recipes
1. Tell Ziggy: "Let's plan dinners for the week" + preferences
2. Ziggy researches new recipes matching criteria
3. Approve/adjust selections
4. Ziggy adds recipes to vault + meal plan

---

## Step 2: Add Recipes to Vault

**Location:** `/Volumes/ziggy/openclaw-workspace/Pinky & The Brain/Notes/`

**Naming:** `[Recipe Name].md` (title case)

**Frontmatter template:**
```yaml
---
type: recipe
area: household
category: main | breakfast | snack | etc.
meal_type: breakfast | lunch | dinner | snack | side
cuisine: asian | mexican | mediterranean | indian | american | italian | other
vegan: true
servings: [number]
prep_time: [minutes]
cook_time: [minutes]
total_time: [minutes]
calories: [number]
protein: [grams]
favorite: false
rating: 
source: [URL]
status: active
tags:
  - recipe
  - household
  - vegan
  - [other relevant tags]
---
```

**Required sections:**
1. Title with emoji (🍳)
2. Metadata display (using Dataview inline fields)
3. 📋 Ingredients (organized by component if needed)
4. 👨‍🍳 Instructions (numbered steps)
5. 📝 Notes (tips, substitutions, storage)
6. 🔗 Related (links to Grocery List, Recipe Index, source)

---

## Step 3: Generate Grocery List

**Location:** `/Volumes/ziggy/openclaw-workspace/Pinky & The Brain/Notes/`

**Naming:** `Grocery List - Week of [YYYY-MM-DD].md`

**How to trigger:**
- Say to Ziggy: **"Build grocery list for this week's meal plan"**
- Or: **"Generate grocery list from [Recipe 1], [Recipe 2], [Recipe 3]"**

**Process:**
1. Ziggy reads [[Meal Plan - Current Week]] to see selected recipes
2. Opens each recipe note and extracts ingredient lists
3. Aggregates and consolidates quantities
4. Organizes by category:
   - 🥬 Produce
   - 🥫 Canned & Jarred
   - 🍝 Grains & Pasta
   - 🧂 Pantry Staples
   - 🧀 Dairy Alternatives
   - 🌶️ Optional Toppings & Add-Ins
5. Adds checkboxes for shopping
6. Notes shared ingredients and meal prep tips
7. Links back to recipes and meal plan

**Frontmatter template:**
```yaml
---
type: grocery-list
area: household
week_of: YYYY-MM-DD
recipes:
  - "[[Recipe 1]]"
  - "[[Recipe 2]]"
  - "[[Recipe 3]]"
  - "[[Recipe 4]]"
status: active
tags:
  - household
  - grocery
  - meal-prep
---
```

---

## Step 4: Check Pantry & Shop

**Check what you have:**
1. Open [[Grocery List - Week of Mar 2]] (or current week)
2. Go through your pantry, fridge, and freezer
3. Check off items you already have
4. Remaining unchecked items = what you need to buy

**Shopping:**
- Open grocery list on phone (Obsidian mobile or pkm.mouthygeese.com)
- Shop for unchecked items only
- Check off as you add to cart
- Update list with actual brands/notes if helpful

**Cooking:**
- Open recipe notes on phone/tablet
- Follow instructions
- Add notes section updates (what worked, what didn't)
- Rate recipe after eating (update `rating:` field in frontmatter)

---

## 🔄 Future Enhancements

**Phase 2 — Skill Development:**
- Build CLI tool to auto-generate grocery list from recipe links in frontmatter
- Export grocery list to iOS Reminders or Apple Notes
- Budget tracking (cost per meal)
- Nutrition rollup (weekly totals)

**Phase 3 — Meal Planner:**
- Calendar view of weekly meals
- Automatic scheduling (quick meals on busy nights, longer on weekends)
- Leftover tracking
- Favorite rotation suggestions

---

## 📋 Quick Commands

**Browse recipes:**
> Open [[Recipe Index]] in Obsidian

**Plan new week with research:**
> "Let's plan dinners for the week. [Constraints: quick, high-protein, diverse, etc.]"

**Generate grocery list from meal plan:**
> "Build grocery list for this week's meal plan"

**Generate grocery list from specific recipes:**
> "Generate grocery list from [Recipe 1], [Recipe 2], [Recipe 3], [Recipe 4]"

**Add single recipe:**
> "Add this recipe to the vault: [URL or description]"

**Access from anywhere:**
- **Desktop:** Obsidian → Household Hub → Recipe Index or Grocery Lists
- **Mobile:** Obsidian app → Notes → Household Hub
- **Web:** pkm.mouthygeese.com → Notes → Household Hub

---

## 🔗 Related
- [[Recipe Index|🍳 Recipes]]
- [[Household Hub|Household Hub]]
- [[Grocery List - Week of Mar 2]] (example)
