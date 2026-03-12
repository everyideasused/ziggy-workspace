---
type: process
area: household
status: active
tags:
  - meal-planning
  - process
  - sunday-routine
---

> [[🏠base|🏠]] · [[Household Hub|Household Hub]] · [[Recipe Index]]

---

# 🗓️ Sunday Meal Planning Process

**When:** Every Sunday, 10am-2pm  
**Duration:** ~15-20 minutes  
**Goal:** Plan 4-7 dinners for the week + generate grocery list

---

## 📋 Step-by-Step Workflow

### 1️⃣ Ziggy Creates Suggestions (Automated)

**Trigger:** Nathan says "Let's start planning this week's meal plan"

**Ziggy does:**
- Reads Recipe Index (43 vegan, high-protein recipes)
- Selects 10 diverse dinner options:
  - Mix of cuisines (Italian, Thai, Mexican, Indian, Asian, American)
  - Mix of quick (≤20 min) and meal-prep/freezer options
  - All high-protein (20g+ per meal)
  - Avoids last week's selections
- Updates `Meal Plan - Current Week.md` with new week's suggestions
- Includes checkboxes for each suggestion

### 2️⃣ Nathan Selects Meals (Manual)

- Open meal plan note in Obsidian
- Check off 4-7 recipes you want to cook
- Assign each selected meal to a specific day (Sun-Sat)

### 3️⃣ Ziggy Generates Grocery List (Automated)

**Trigger:** Nathan says "Build grocery list for this week's meal plan"

**Ziggy does:**
- Reads checked recipes from meal plan
- Aggregates all ingredients
- Organizes by category (Produce, Canned/Jarred, Grains, Pantry, Dairy Alternatives, Optional Toppings)
- Creates grocery list: `Grocery List - Week of YYYY-MM-DD.md`
- Includes checkboxes for each item

### 4️⃣ Nathan Shops (Manual)

- Open grocery list in Obsidian
- Check off items already at home
- Shop for unchecked items (Sunday or Monday)

### 5️⃣ Ziggy Populates Daily Notes (Automated)

**Trigger:** After grocery list is finalized, Nathan says "Add this week's meals to daily notes"

**Ziggy does:**
- Reads day assignments from meal plan
- Populates each daily note (Sun-Sat) with "Dinner Tonight" section
- Links to recipe and meal plan

---

## 🔄 Weekly Cadence

| Day | Action |
|-----|--------|
| **Sunday 10am-2pm** | Plan meals + generate grocery list |
| **Sunday/Monday** | Shop for groceries |
| **Sun-Sat** | Cook assigned meals, rate in daily note |
| **End of week** | Ziggy syncs ratings back to recipes |

---

## 📊 Key Files

| File | Purpose | Location |
|------|---------|----------|
| **Recipe Index** | Browse all 43 recipes | `Notes/Recipe Index.md` |
| **Meal Plan - Current Week** | Current week's selections (updates each Sunday) | `Notes/Meal Plan - Current Week.md` |
| **Grocery List - Week of [Date]** | Shopping list with checkboxes | `Notes/Grocery List - Week of YYYY-MM-DD.md` |
| **Daily Notes** | Dinner assignments + ratings | `Journal/YYYY-MM-DD.md` |

---

## 🎯 Design Principles

1. **Zero friction** — Ziggy does the heavy lifting (reading, aggregating, formatting)
2. **Choice, not burden** — Nathan picks from curated suggestions, doesn't start from scratch
3. **Diversity by default** — Ziggy ensures cuisine/cook-time variety in suggestions
4. **Integration** — Meal plan → Daily notes → Recipe ratings (full loop)

---

## 🔔 Automation Hooks

**HEARTBEAT.md reminder:**
- On Sundays around 10am-2pm, Ziggy checks if next week's meal plan exists
- If not: reminds Nathan to start planning
- After meal plan created: reminds to shop

**Daily note population:**
- Happens once after meal selections finalized
- Prevents daily friction of "what's for dinner?"

---

_Last Updated: 2026-03-08_  
_Version: 2.0 (Sunday suggestion workflow)_

---

Created by: Ziggy · AI: anthropic/claude-sonnet-4-5-20250929
