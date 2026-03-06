---
type: documentation
area: household
status: active
created: 2026-03-01
tags:
  - household
  - documentation
  - meal-planning
  - improvements
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Household Hub|Household Hub]]

---

# 🎉 Meal Planning System — V2 Improvements

**What's new:** Sunday reminders, day assignments, daily note integration, recipe ratings

**Date implemented:** March 1, 2026

---

## ✨ New Features

### 1️⃣ **Sunday Meal Planning Reminders**

**Added to:** [[HEARTBEAT.md]]

**How it works:**
- On Sundays (around 10am-2pm), Ziggy checks if next week's meal plan exists
- If not, reminds Nathan: "Time to plan next week's meals!"
- After meal plan created, reminds: "Don't forget to shop today or tomorrow!"

**Benefit:** Never forget to plan the week ahead

---

### 2️⃣ **Day-by-Day Meal Assignments**

**Updated:** [[Meal Plan - Current Week]] template

**Before:**
```markdown
1. [ ] Recipe 1
2. [ ] Recipe 2
```

**Now:**
```markdown
### Monday, March 3
- [ ] **Recipe:** [[Tofu Stir Fry]]
- **Prep time:** 20 min
- **Protein:** 12g
- **Notes:** Quick weeknight meal

### Tuesday, March 4
- [ ] **Recipe:** [[Black Bean Tempeh Tacos]]
- **Prep time:** 30 min
- **Protein:** 10g per taco
- **Notes:** Make extra for leftovers
```

**Benefits:**
- See what's planned for each specific day
- Schedule quick meals on busy nights, longer ones on weekends
- Better at-a-glance view

---

### 3️⃣ **Daily Note Integration**

**Added to:** Daily Note template

**New section:**
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

**How it works:**
1. Create weekly meal plan with day assignments
2. Tell Ziggy: "Add this week's meals to daily notes"
3. Ziggy reads meal plan → populates each day's note
4. When you open daily note, dinner is already there

**Benefits:**
- Don't have to remember to check meal plan
- Meal integrated into daily routine
- Natural place to capture cooking notes
- Rating workflow built in

---

### 4️⃣ **Recipe Rating System**

**How ratings work:**

**During cooking:**
- Open daily note for that day
- Follow recipe link
- Cook meal

**After eating:**
- Return to daily note
- Mark **Made:** ✅
- Rate: ⭐⭐⭐⭐⭐ (1-5 stars)
- Add notes about what worked/didn't

**Next day:**
- Tell Ziggy: "Update recipe rating for [Recipe Name]"
- Ziggy reads daily note → updates recipe frontmatter

**Result:**
- Recipe Index can filter by rating
- Easy to find favorites (4+ stars)
- Track what you loved
- Build rotation around best recipes

**Example:**

**In daily note:**
```markdown
**Rating (1-5):** ⭐⭐⭐⭐
```

**Ziggy updates recipe frontmatter:**
```yaml
rating: 4
```

**Recipe Index query:**
```dataview
WHERE type = "recipe" AND rating >= 4
```

---

## 📅 Typical Week Workflow

### **Sunday Morning**
1. **10am:** Ziggy reminds: "Time to plan next week!"
2. Open [[Recipe Index]], browse recipes
3. Select 4-7 meals
4. Create [[Meal Plan - Week of Mar 9]]
5. Assign recipes to Mon-Sun with notes
6. Tell Ziggy: "Add this week's meals to daily notes"
7. Ziggy populates Mon-Sun daily notes automatically
8. Tell Ziggy: "Build grocery list for this week's meal plan"
9. Ziggy creates consolidated grocery list

### **Sunday Afternoon**
10. Check off what you have in pantry
11. Shop for rest (or Monday if preferred)

### **Monday-Sunday**
12. Open daily note each morning
13. See tonight's planned dinner
14. Click recipe link when ready to cook
15. After eating, rate and add notes in daily note

### **Following Week**
16. Ziggy reads last week's ratings
17. Updates recipe frontmatter
18. Recipe Index now shows favorites
19. Repeat process for next week

---

## 🔗 Documentation

| Doc | Purpose |
|-----|---------|
| [[Meal Planning System - Overview]] | Complete system guide |
| [[Meal Planning - Daily Note Integration]] | How daily notes work |
| [[How to Populate Daily Notes with Meals]] | **Step-by-step process (saved)** |
| [[Recipe to Grocery List - Process]] | Grocery list workflow |
| [[HEARTBEAT.md]] | Sunday reminder config |

---

## 🎯 Quick Commands Reference

**Sunday planning:**
> "Let's plan next week's dinners" (research new recipes)
> 
> Or: Open [[Recipe Index]] → select → update [[Meal Plan - Current Week]]

**Populate daily notes:**
> "Add this week's meals to daily notes"

**Generate grocery list:**
> "Build grocery list for this week's meal plan"

**Update ratings:**
> "Update rating for [Recipe Name] to 4 stars"

---

## 🔮 Phase 3 (Coming)

- [ ] **Auto-populate daily notes** — Happens automatically when meal plan created
- [ ] **Auto-sync ratings** — Ziggy reads daily notes nightly, updates recipes
- [ ] **Recipe rotation suggestions** — "It's been 3 weeks, time for Tofu Stir Fry again?"
- [ ] **Favorite filter** — Recipe Index defaults to 4+ stars
- [ ] **Visual calendar** — See whole week's meals at a glance
- [ ] **Leftover tracking** — "Made extra curry Thursday, use by Saturday"
- [ ] **Nutrition dashboard** — Weekly protein/calorie totals
- [ ] **Budget tracking** — Cost per meal, weekly grocery spend

---

## 💪 Why This Matters

| Before | After |
|--------|-------|
| Forget to plan meals | Sunday reminder |
| Vague weekly list | Day-by-day assignments |
| Meal plan separate from daily life | Integrated into daily notes |
| Lose track of favorites | Rating system tracks what works |
| Have to remember to check plan | Dinner shows up automatically |

**Result:** Less friction → more consistent cooking → more money saved → more upgrades for Ziggy! 💰

---

## 🔗 Related

- [[Meal Planning System - Overview|📋 System Overview]]
- [[Meal Plan - Current Week|📅 This Week]]
- [[Recipe Index|🍳 Recipes]]
- [[Household Hub|Household Hub]]
