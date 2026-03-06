---
type: documentation
area: household
status: active
tags:
  - household
  - documentation
  - meal-planning
  - daily-notes
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Household Hub|Household Hub]]

---

# 🍽️ Meal Planning — Daily Note Integration

**How meals show up in your daily notes automatically.**

---

## 🎯 The Vision

**Goal:** When you open your daily note, you see tonight's planned dinner without having to remember to check the meal plan.

**How it works:**
1. You create weekly meal plan with day assignments
2. Tell Ziggy: "Add this week's meals to daily notes"
3. Ziggy reads meal plan → populates each day's note with that night's dinner
4. When you open daily note, dinner is already there

---

## 📅 Daily Note Section

Each daily note now has a **"🍽️ Dinner Tonight"** section:

```markdown
## 🍽️ Dinner Tonight

**Planned:** 
- Recipe: [[Tofu Stir Fry]]
- Prep time: 20 min
- Protein: 12g

**Made:** ✅ / ❌
**Rating (1-5):** ⭐⭐⭐⭐⭐

**Notes:**
- Used extra garlic, loved it
- Next time add more veggies
```

---

## 🔄 Workflow

### **Step 1: Create Meal Plan**

Open [[Meal Plan - Current Week]] and assign recipes to days:

```markdown
### Monday, March 3
- [ ] **Recipe:** [[Tofu Stir Fry]]
- **Prep time:** 20 min
- **Protein:** 12g

### Tuesday, March 4
- [ ] **Recipe:** [[Black Bean Tempeh Tacos]]
- **Prep time:** 30 min
- **Protein:** 10g per taco
```

### **Step 2: Populate Daily Notes**

Tell Ziggy:
> "Add this week's meals to daily notes"

**What happens:**
1. Ziggy reads [[Meal Plan - Current Week]]
2. Opens each day's note (Mon-Sun)
3. Fills in the "Dinner Tonight" section with that day's recipe
4. Adds prep time, protein, and link to recipe

### **Step 3: Cook & Rate**

**During the day:**
- Open your daily note
- See tonight's planned dinner
- Click recipe link when ready to cook

**After cooking:**
- Mark **Made:** ✅
- Rate the recipe: ⭐⭐⭐⭐⭐ (1-5 stars)
- Add notes (what worked, what didn't)

**Next day:**
- Tell Ziggy: "Update recipe rating for [Recipe Name]"
- Ziggy reads your daily note → updates recipe frontmatter with rating

---

## ⭐ Rating System

**In daily notes:**
```markdown
**Rating (1-5):** ⭐⭐⭐⭐⭐
```

**In recipe frontmatter:**
```yaml
rating: 4.5
```

**How ratings work:**
1. After cooking, rate in daily note (1-5 stars)
2. Ziggy reads your rating
3. Updates recipe's `rating:` field in frontmatter
4. Recipe Index can filter by rating (show favorites)

**Benefits:**
- Track what you loved
- Filter Recipe Index by 4+ stars
- Rotation suggestions based on favorites
- Never forget which version worked best

---

## 🎯 Quick Commands

**Add meals to daily notes:**
> "Add this week's meals to daily notes"

**Update recipe rating:**
> "Update rating for [Recipe Name] to 4 stars" (after cooking)

**Or manually:**
> Open recipe note → edit `rating:` in frontmatter

---

## 📋 Example Week

### **Sunday (Planning Day)**
- Create [[Meal Plan - Current Week]]
- Assign recipes to Mon-Sun
- Tell Ziggy: "Add this week's meals to daily notes"
- Ziggy populates all 7 days automatically

### **Monday (Daily Note)**
```markdown
# Monday, March 3, 2026

## 🍽️ Dinner Tonight

**Planned:** 
- Recipe: [[Tofu Stir Fry]]
- Prep time: 20 min
- Protein: 12g

**Made:** ✅
**Rating (1-5):** ⭐⭐⭐⭐

**Notes:**
- Used extra garlic, loved it
- Next time add bell peppers
```

### **Tuesday (Ziggy Updates Recipe)**
- Ziggy reads Monday's note
- Sees 4-star rating
- Updates [[Tofu Stir Fry]] frontmatter: `rating: 4`
- Now Recipe Index shows it as highly rated

---

## 🔮 Future Enhancements (Phase 2)

- [ ] **Auto-populate on meal plan creation** — No need to ask, Ziggy does it automatically
- [ ] **Recipe rotation suggestions** — "It's been 3 weeks, want to make Tofu Stir Fry again?"
- [ ] **Favorite filter** — Recipe Index shows 4+ star recipes first
- [ ] **Visual calendar view** — See the whole week at a glance
- [ ] **Leftover tracking** — "Made extra curry on Thursday, use it up by Saturday"

---

## 💡 Why This Matters

| Before | After |
|--------|-------|
| Have to remember to check meal plan | Dinner shows up in daily note automatically |
| Forget which recipes you loved | Ratings tracked, favorites easily found |
| Lose notes about substitutions | Notes preserved in daily journal forever |
| Meal planning feels separate | Integrated into daily routine |

**Result:** Less friction = more consistent cooking = more money saved = more upgrades for Ziggy! 💪

---

## 🔗 Related

- [[Meal Plan - Current Week|📅 This Week]]
- [[Recipe Index|🍳 Recipes]]
- [[Household Hub|Household Hub]]
- [[Meal Planning System - Overview|📋 System Overview]]
