---
type: note
area: household
status: active
tags:
  - household
  - documentation
  - meal-planning
  - automation
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Household Hub|Household Hub]]

---

# Meal Planning Auto-Sync System

**What this does:** Daily notes automatically pull dinner plans from the active meal plan. Update the meal plan once, all daily notes reflect the change instantly.

---

## How It Works

### Meal Plan Format
The meal plan uses **inline date fields** that Dataview can query:

```markdown
- [date:: 2026-03-04] **[[Recipe Name]]** | Cuisine | Time | Protein | Notes
```

**Example:**
```markdown
- [date:: 2026-03-04] **[[Black Bean Tempeh Tacos]]** | Mexican | 30 min | 10g per taco | Make extra for leftovers
```

### Daily Notes
Each daily note has a **Dataviewjs query** in the "Dinner Tonight" section that:
1. Reads the current date from the note's frontmatter
2. Searches `Meal Plan - Current Week` for a matching date
3. Extracts and displays the meal details

### The Magic
✅ Update meal plan → All daily notes update automatically  
✅ No manual syncing needed  
✅ Shift meals by just editing dates in one file  

---

## How to Use

### 1. Update the Meal Plan
Edit `Meal Plan - Current Week.md`:

```markdown
## 🍽️ This Week's Dinners

- [date:: 2026-03-02] **[[Recipe]]** | Cuisine | Time | Protein | Notes
- [date:: 2026-03-03] **[[Recipe]]** | Cuisine | Time | Protein | Notes
```

### 2. Shifting Meals
Just change the dates:

**Before:**
```markdown
- [date:: 2026-03-03] **[[Tacos]]** | Mexican | 30 min | 10g | Notes
- [date:: 2026-03-04] **[[Curry]]** | Indian | 45 min | 7g | Notes
```

**After (shift by 1 day):**
```markdown
- [date:: 2026-03-04] **[[Tacos]]** | Mexican | 30 min | 10g | Notes
- [date:: 2026-03-05] **[[Curry]]** | Indian | 45 min | 7g | Notes
```

All daily notes update instantly.

### 3. Skipping a Day
Use placeholder text:

```markdown
- [date:: 2026-03-03] _Skipped - eating out tonight_
```

---

## Template Updates

The **Daily Note template** now includes the Dataviewjs query. All new daily notes will auto-pull meals.

**To update existing notes:**
Replace the static "Dinner Tonight" section with the query from the template.

---

## Troubleshooting

**"No meal found"**
- Check that the date in the meal plan matches exactly (YYYY-MM-DD format)
- Make sure `[date:: ...]` syntax is correct (two colons!)

**Recipe not linking**
- Ensure recipe is wrapped in `[[double brackets]]`
- Format: `**[[Recipe Name]]**`

**Query not rendering**
- Make sure Dataview plugin is enabled
- Check that the meal plan file is named exactly: `Meal Plan - Current Week`

---

## Benefits

| Old Way | New Way |
|---------|---------|
| Update meal plan | Update meal plan |
| Manually update 7 daily notes | ✅ Done! All notes auto-update |
| High chance of inconsistency | Always in sync |
| Time consuming | Instant |

---

## Related

- [[Meal Plan - Current Week]]
- [[Recipe Index]]
- [[Recipe to Grocery List - Process]]
- [[Household Hub]]
