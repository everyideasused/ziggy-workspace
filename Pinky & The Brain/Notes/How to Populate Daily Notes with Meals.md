---
type: process
area: household
status: active
tags:
  - household
  - process
  - meal-planning
  - daily-notes
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Household Hub|Household Hub]]

---

# 📝 How to Populate Daily Notes with Meals

**Process for adding weekly meal plan to daily notes automatically**

---

## 🎯 Purpose

Take the weekly meal plan (with day-by-day recipe assignments) and automatically populate each day's journal note with that night's planned dinner.

---

## 📋 Prerequisites

1. **Meal plan exists** with day assignments
   - Example: [[Meal Plan - Current Week]]
   - Must have recipes assigned to specific days (Monday, Tuesday, etc.)

2. **Daily notes exist** for the week
   - Location: `Journal/YYYY-MM-DD.md`
   - Created from Daily Note template

3. **Recipes exist** in vault
   - Location: `Notes/[Recipe Name].md`

---

## 🔄 Step-by-Step Process

### **User Request**
User says: **"Add this week's meals to daily notes"**

### **Ziggy's Process**

1. **Read the meal plan**
   - Open [[Meal Plan - Current Week]] (or specified meal plan)
   - Extract recipe assignments for each day
   - Note: Recipe name, cuisine, prep time, protein, notes

2. **For each day in the meal plan:**
   
   a. **Calculate the date**
      - If meal plan says "Monday, March 2" → file is `2026-03-02.md`
   
   b. **Open the daily note**
      - Path: `Journal/YYYY-MM-DD.md`
   
   c. **Find insertion point**
      - Look for the title line: `# [Day], [Month] [Date], [Year]`
      - Insert dinner section immediately after title
   
   d. **Add dinner section**
```markdown
---

## 🍽️ Dinner Tonight

**Planned:** 
- Recipe: [[Recipe Name]]
- Cuisine: [cuisine]
- Prep time: [X] min
- Protein: [X]g
- Notes: [meal plan notes]

**Made:** ✅ / ❌
**Rating (1-5):** ⭐⭐⭐⭐⭐

**Cooking notes:**
- 

---
```

3. **Confirm completion**
   - Report how many days were populated
   - List the days and recipes

---

## 📐 Template Structure

**Dinner section goes after the title, before workout/tasks:**

```markdown
# Monday, March 2, 2026

---

## 🍽️ Dinner Tonight
[dinner details here]

---

## 🏋️ Workout: [if applicable]
[workout details]

---

## ✅ Tasks
[tasks section]
```

---

## 🎯 Example

**Meal Plan says:**
```markdown
### Monday, March 2
- [ ] **Recipe:** [[Tofu Stir Fry]]
- **Cuisine:** Asian | **Prep time:** 20 min | **Protein:** 12g
- **Notes:** Quick weeknight meal, serve with rice
```

**Daily note gets:**
```markdown
# Monday, March 2, 2026

---

## 🍽️ Dinner Tonight

**Planned:** 
- Recipe: [[Tofu Stir Fry]]
- Cuisine: Asian
- Prep time: 20 min
- Protein: 12g
- Notes: Quick weeknight meal, serve with rice

**Made:** ✅ / ❌
**Rating (1-5):** ⭐⭐⭐⭐⭐

**Cooking notes:**
- 

---

## 🏋️ Workout: Day A — Upper Push
[rest of daily note continues...]
```

---

## ⚠️ Important Notes

### **Date Accuracy**
- Always verify the current date before calculating meal plan dates
- If user says "this week's meals" and today is Sunday, the meal plan starts Monday (tomorrow)
- Double-check: Monday = day after Sunday, not two days after

### **Preserve Existing Content**
- Only add the dinner section if it doesn't already exist
- Don't overwrite other sections (workout, tasks, etc.)
- Insert cleanly with proper spacing (---) before and after

### **Handle Missing Files**
- If a daily note doesn't exist for a date, skip it and note in response
- Suggest creating the daily note first

### **Only Populate Days with Meals**
- If meal plan has 4 meals but week has 7 days, only populate the 4 days with assigned meals
- Don't add empty dinner sections to days without planned meals

---

## 🔄 Rating Sync Process (Separate)

**After cooking**, user rates in daily note. To sync rating to recipe:

**User says:** "Update rating for [Recipe Name]"

**Ziggy's process:**
1. Search recent daily notes (past 7 days) for that recipe name
2. Find the rating line (⭐ count)
3. Convert stars to number (1-5)
4. Open recipe note at `Notes/[Recipe Name].md`
5. Update `rating:` field in frontmatter
6. Confirm update

---

## 📋 Quick Commands

**Populate meals:**
> "Add this week's meals to daily notes"

**Populate specific week:**
> "Add meals from [Meal Plan Name] to daily notes"

**Update rating:**
> "Update rating for [Recipe Name] to 4 stars"

**Or Ziggy can infer:**
> "Update rating for [Recipe Name]" (reads from daily note)

---

## 🔗 Related

- [[Meal Planning System - Overview]]
- [[Meal Planning - Daily Note Integration]]
- [[Meal Plan - Current Week]]
- [[Recipe to Grocery List - Process]]
