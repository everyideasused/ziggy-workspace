---
type: documentation
area: household
status: active
tags:
  - household
  - documentation
  - meal-planning
  - recipes
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Household Hub|Household Hub]]

---

# 🍳 Meal Planning System — Overview

**Everything in Obsidian. No external apps.**

---

## 🎯 What This System Does

✅ **Browse recipes** — All in one searchable vault  
✅ **Plan weekly meals** — Select 4-7 recipes for the week  
✅ **Auto-generate grocery list** — Ziggy consolidates all ingredients  
✅ **Check what you have** — Mark pantry items before shopping  
✅ **Shop efficiently** — Only buy what you need  
✅ **Save money** — Shared ingredients, no duplicates  

---

## 📍 Key Locations

All in: `Pinky & The Brain/Notes/`

| What | Link |
|------|------|
| **Recipe Index** | [[Recipe Index\|🍳 Browse All Recipes]] |
| **Current Meal Plan** | [[Meal Plan - Current Week\|📅 This Week]] |
| **Grocery Lists** | [[Grocery Lists\|🛒 All Lists]] |
| **Household Hub** | [[Household Hub\|🏠 Hub]] |
| **Process Docs** | [[Recipe to Grocery List - Process\|📋 How It Works]] |

---

## 🔄 The Workflow

### 1️⃣ Browse & Select Recipes

**Option A: Pick from existing recipes**
1. Open [[Recipe Index]]
2. Browse by cuisine, protein, prep time
3. Select 4-7 for the week
4. Update [[Meal Plan - Current Week]] with recipe links

**Option B: Research new recipes**
1. Tell Ziggy: *"Let's plan dinners for the week. I want quick, high-protein, diverse cuisines."*
2. Ziggy researches → presents options
3. Approve selections
4. Ziggy adds to vault + updates meal plan

---

### 2️⃣ Generate Grocery List

**Trigger:**  
Say to Ziggy: *"Build grocery list for this week's meal plan"*

**What happens:**
1. Ziggy reads [[Meal Plan - Current Week]]
2. Opens each recipe → extracts ingredients
3. Consolidates quantities
4. Organizes by category (Produce, Canned, Grains, Pantry, etc.)
5. Adds checkboxes
6. Creates `Grocery List - Week of [Date].md`

**Result:**  
One comprehensive grocery list with checkboxes, organized by aisle.

---

### 3️⃣ Check Pantry

**Before shopping:**
1. Open this week's grocery list
2. Go through pantry, fridge, freezer
3. Check off items you already have
4. Unchecked = what you need to buy

---

### 4️⃣ Shop

**Access list on phone:**
- **Obsidian mobile app** (best)
- **Web:** pkm.mouthygeese.com

**While shopping:**
- Check off items as you add to cart
- Only buy unchecked items

---

### 5️⃣ Cook

1. Open recipe note on phone/tablet
2. Follow instructions
3. Add notes (what worked, what didn't)
4. Rate recipe (update `rating:` in frontmatter)

---

## 📱 Access Anywhere

| Device | How to Access |
|--------|---------------|
| **Mac** | Obsidian app → Pinky & The Brain vault |
| **iPhone/iPad** | Obsidian mobile → Household Hub |
| **Any browser** | https://pkm.mouthygeese.com |

---

## 💡 Pro Tips

- **Meal prep** — Look for recipes that keep 5+ days (curry, pasta salad)
- **Batch cooking** — Make double portions for leftovers
- **Shared ingredients** — Recipes with common items = cost savings
- **Quick meals on busy nights** — Filter by `prep_time <= 30`
- **High protein** — Filter by `protein >= 20`
- **Update notes** — Add substitutions and tips as you cook

---

## 🔮 Phase 2 Features (Coming)

- [ ] **Auto-aggregate skill** — One command generates list from meal plan (no manual aggregation)
- [ ] **Budget tracking** — Cost per meal, weekly totals
- [ ] **Nutrition rollup** — Weekly protein/calorie totals
- [ ] **Favorite rotation** — "Suggest meals based on my favorites"
- [ ] **Calendar view** — Visual meal schedule for the week
- [ ] **Leftover tracking** — Know what's in the fridge

---

## 🎨 System Architecture

```
┌─────────────────────────────────────────────┐
│          Household Hub                      │
│  (Central navigation for everything)        │
└──────────────┬──────────────────────────────┘
               │
       ┌───────┴────────┐
       │                │
   ┌───▼───┐      ┌────▼─────┐
   │Recipe │      │  Meal    │
   │Index  │◄─────┤  Plan    │
   └───┬───┘      └────┬─────┘
       │               │
       │          (Ziggy reads)
       │               │
       │          ┌────▼─────┐
       └──────────►Grocery   │
                  │  List    │
                  └──────────┘
```

---

## 📋 Quick Commands

**Browse recipes:**
> Open [[Recipe Index]]

**Plan with research:**
> "Let's plan dinners for the week. [preferences]"

**Generate grocery list:**
> "Build grocery list for this week's meal plan"

**Add single recipe:**
> "Add this recipe: [URL]"

---

## 🔗 Related

- [[Recipe Index|🍳 Recipes]]
- [[Meal Plan - Current Week|📅 This Week]]
- [[Grocery Lists|🛒 Lists]]
- [[Household Hub|🏠 Hub]]
- [[Recipe to Grocery List - Process|📋 Grocery List Process]]
- [[How to Populate Daily Notes with Meals|📝 Daily Notes Process]]
