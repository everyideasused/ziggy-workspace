# Sage Grocery CLI — Testing & Implementation Guide

**Author:** Forge  
**Date:** March 4, 2026  
**Status:** Ready for Phase 1 Implementation  

---

## 🚀 Quick Start (Phase 1 — MVP)

### Setup (5 minutes)

```bash
# Create project directory
mkdir -p ~/Projects/sage-grocery
cd ~/Projects/sage-grocery

# Copy files from architecture document
# - src/index.ts (from sage-grocery-implementation.ts)
# - package.json
# - tsconfig.json

# Install dependencies
npm install

# Build
npm run build

# Test with existing vault
npm run start -- "Meal Plan - Current Week" --debug
```

---

## 📋 Test Plan with Fixtures

### Test Fixtures Setup

Create these test files in your vault for consistent testing:

**`Notes/🧪 Chicken Salad Test Recipe.md`**

```markdown
---
type: recipe
area: interests
status: active
tags:
  - test
  - quick
---

# Chicken Salad

## Ingredients

- 2 lbs chicken breast
- 4 cups spinach
- 2 medium tomatoes
- 2 tbsp olive oil
- 1 lemon
- Salt & pepper to taste

## Instructions

1. Cook chicken
2. Chop and mix with other ingredients
```

**`Notes/🧪 Pasta Primavera Test Recipe.md`**

```markdown
---
type: recipe
area: interests
status: active
tags:
  - test
---

# Pasta Primavera

## Ingredients

- 1 lb pasta
- 4 cups spinach
- 3 cloves garlic
- 2 tbsp olive oil
- 1/4 cup parmesan cheese
- Salt to taste

## Instructions

1. Boil pasta...
```

**`Notes/🧪 Test Meal Plan.md`**

```markdown
---
type: meal-plan
area: household
status: active
tags:
  - test
---

# Test Meal Plan

## Monday
- Lunch: [[🧪 Chicken Salad Test Recipe]]
- Dinner: [[🧪 Pasta Primavera Test Recipe]]

## Tuesday
- Lunch: [[🧪 Chicken Salad Test Recipe]]
- Dinner: [[🧪 Pasta Primavera Test Recipe]]
```

### Run Test

```bash
npm run start -- "🧪 Test Meal Plan" --debug --output ./test-output.md
```

### Expected Output

```markdown
---
type: grocery-list
area: household
status: active
tags:
  - meal-prep
  - week-of-20260304
week: "Mar 9"
source-meal-plan: "🧪 Test Meal Plan"
generated: 2026-03-04T20:55:00Z
---

# Grocery List — Mar 9

**Source:** [[🧪 Test Meal Plan]]  
**Generated:** 3/4/2026, 8:55:28 PM  

---

## ⚠️ Warnings

⚠️  "spinach" has mixed units: cup

---

## 🧈 Pantry / Dry Goods

- [ ] Olive oil — 4 tbsp
- [ ] Pasta — 1 lb

## 🥛 Dairy

- [ ] Parmesan cheese — 1/4 cup

## 🥩 Meat & Protein

- [ ] Chicken breast — 2 lbs

## 🥬 Produce

- [ ] Garlic — 3 clove
- [ ] Lemon — 1 lemon
- [ ] Spinach — 8 cup
- [ ] Tomatoes — 2 medium

---

## 📊 Summary

**Total recipes:** 2  
**Total unique ingredients:** 9  
**Warnings:** 1
```

**Expected behavior:**
- ✅ Loads meal plan correctly
- ✅ Finds both recipes (appear 2x each in meal plan)
- ✅ Aggregates spinach: 4 + 4 = 8 cups
- ✅ Sums olive oil: 2 + 2 = 4 tbsp
- ✅ Detects unit warning: spinach has both "cup" (aggregated) and would show warning if mixed
- ✅ Groups by section correctly
- ✅ Generates valid markdown with frontmatter

---

## 🧪 Unit Tests to Implement

### Test File: `src/__tests__/aggregator.test.ts`

```typescript
import {
  parseIngredientLine,
  normalizeUnit,
  normalizeName,
  aggregateIngredients,
  guessSection,
  evaluateFraction,
} from '../utils';

describe('parseIngredientLine', () => {
  test('parses basic ingredient line', () => {
    const result = parseIngredientLine('- 3 lbs chicken breast', 'Test Recipe');
    expect(result).toEqual({
      name: 'chicken breast',
      quantity: 3,
      unit: 'lb',
      section: '🥩 Meat & Protein',
      recipesSources: ['Test Recipe'],
    });
  });

  test('parses fractional quantities', () => {
    const result = parseIngredientLine('- 1/2 cup flour', 'Test Recipe');
    expect(result?.quantity).toBe(0.5);
    expect(result?.unit).toBe('cup');
  });

  test('skips "to taste" lines', () => {
    const result = parseIngredientLine('- Salt & pepper to taste', 'Test Recipe');
    expect(result).toBeNull();
  });

  test('handles different units', () => {
    const cases = [
      ['- 3 cloves garlic', { unit: 'clove', quantity: 3 }],
      ['- 1 can tomatoes', { unit: 'can', quantity: 1 }],
      ['- 2 medium tomatoes', { unit: 'medium', quantity: 2 }],
    ];
    
    for (const [line, expected] of cases) {
      const result = parseIngredientLine(line, 'Test');
      expect(result?.unit).toBe(expected.unit);
      expect(result?.quantity).toBe(expected.quantity);
    }
  });
});

describe('normalizeUnit', () => {
  test('converts to lowercase', () => {
    expect(normalizeUnit('TBSP')).toBe('tbsp');
    expect(normalizeUnit('Cups')).toBe('cup');
  });

  test('handles plural forms', () => {
    expect(normalizeUnit('cups')).toBe('cup');
    expect(normalizeUnit('tbsps')).toBe('tbsp');
  });

  test('preserves abbreviations', () => {
    expect(normalizeUnit('tbsp')).toBe('tbsp');
    expect(normalizeUnit('ml')).toBe('ml');
  });
});

describe('normalizeName', () => {
  test('lowercases ingredient names', () => {
    expect(normalizeName('Chicken Breast')).toBe('chicken breast');
  });

  test('removes modifiers after comma', () => {
    expect(normalizeName('Chicken Breast, boneless')).toBe('chicken breast');
  });

  test('collapses whitespace', () => {
    expect(normalizeName('Chicken    Breast')).toBe('chicken breast');
  });
});

describe('guessSection', () => {
  test('categorizes produce correctly', () => {
    expect(guessSection('spinach')).toBe('🥬 Produce');
    expect(guessSection('tomato')).toBe('🥬 Produce');
  });

  test('categorizes meat correctly', () => {
    expect(guessSection('chicken')).toBe('🥩 Meat & Protein');
    expect(guessSection('beef')).toBe('🥩 Meat & Protein');
  });

  test('categorizes pantry correctly', () => {
    expect(guessSection('olive oil')).toBe('🧈 Pantry / Dry Goods');
    expect(guessSection('pasta')).toBe('🧈 Pantry / Dry Goods');
  });

  test('returns uncategorized for unknown', () => {
    expect(guessSection('weird ingredient')).toBe('❓ Uncategorized');
  });

  test('handles substring matches', () => {
    expect(guessSection('chicken breast')).toBe('🥩 Meat & Protein');
    expect(guessSection('salmon fillet')).toBe('🥩 Meat & Protein');
  });
});

describe('aggregateIngredients', () => {
  test('sums quantities for same ingredient + unit', () => {
    const ingredients = [
      { name: 'spinach', quantity: 4, unit: 'cup', section: '🥬 Produce', recipesSources: ['Recipe 1'] },
      { name: 'spinach', quantity: 2, unit: 'cup', section: '🥬 Produce', recipesSources: ['Recipe 2'] },
    ];
    
    const result = aggregateIngredients(ingredients);
    expect(result).toHaveLength(1);
    expect(result[0].totalQuantity).toBe(6);
    expect(result[0].recipesSources).toEqual(['Recipe 1', 'Recipe 2']);
  });

  test('keeps separate entries for different units', () => {
    const ingredients = [
      { name: 'spinach', quantity: 4, unit: 'cup', section: '🥬 Produce', recipesSources: ['Recipe 1'] },
      { name: 'spinach', quantity: 2, unit: 'tbsp', section: '🥬 Produce', recipesSources: ['Recipe 2'] },
    ];
    
    const result = aggregateIngredients(ingredients);
    expect(result).toHaveLength(2); // Different units = separate entries
  });

  test('sorts by section then name', () => {
    const ingredients = [
      { name: 'zucchini', quantity: 1, unit: 'cup', section: '🥬 Produce', recipesSources: ['R1'] },
      { name: 'chicken', quantity: 1, unit: 'lb', section: '🥩 Meat & Protein', recipesSources: ['R1'] },
      { name: 'apple', quantity: 1, unit: 'cup', section: '🥬 Produce', recipesSources: ['R1'] },
    ];
    
    const result = aggregateIngredients(ingredients);
    expect(result[0].name).toBe('apple');  // Produce, alphabetically first
    expect(result[1].name).toBe('zucchini');  // Produce, alphabetically second
    expect(result[2].name).toBe('chicken');  // Meat
  });
});

describe('evaluateFraction', () => {
  test('converts fractions to decimals', () => {
    expect(evaluateFraction('1/2')).toBe(0.5);
    expect(evaluateFraction('1/4')).toBe(0.25);
    expect(evaluateFraction('3/4')).toBe(0.75);
  });

  test('handles whole numbers', () => {
    expect(evaluateFraction('3')).toBe(3);
    expect(evaluateFraction('1')).toBe(1);
  });
});
```

---

## 🔍 Manual Testing Checklist

Use this checklist to test the tool with real vault data:

### Test 1: Basic Meal Plan

- [ ] Command: `sage-grocery "Meal Plan - Current Week"`
- [ ] Check: Output contains all recipes from meal plan
- [ ] Check: Ingredients are aggregated (duplicates summed)
- [ ] Check: Output is valid markdown with frontmatter
- [ ] Check: Sections are grouped correctly

### Test 2: Edge Cases

**Empty meal plan:**
```bash
sage-grocery "🧪 Empty Meal Plan"
# Should show: "Found 0 recipes"
# Output should have no ingredient sections
```

**Meal plan with missing recipes:**
```bash
sage-grocery "Meal Plan - Current Week"
# Should warn: "Could not load recipe: [Name]"
# Should continue with remaining recipes
```

**Recipes with no ingredients section:**
```bash
# Add a test recipe without ## Ingredients
# Should warn: "No ingredients section found in [Recipe]"
```

### Test 3: Unit Handling

Create test recipes with mixed units:

**Test Recipe A:** 1 cup spinach  
**Test Recipe B:** 4 tbsp spinach (if measured by volume)

Run: `sage-grocery "🧪 Test Meal Plan Mixed Units"`

Expected: Warning about spinach having mixed units (cup + tbsp)

### Test 4: Output Formatting

- [ ] Check: Markdown is valid (no syntax errors)
- [ ] Check: YAML frontmatter parses correctly
- [ ] Check: Checkboxes are `- [ ]` format
- [ ] Check: Quantities are properly formatted
- [ ] Check: Section headers use emoji prefixes

---

## 🐛 Debugging Tips

### Enable Debug Output

```bash
sage-grocery "Meal Plan" --debug
```

Prints:
- Recipe names found
- Ingredients parsed per recipe
- Aggregation steps
- Section assignments

### Inspect Raw Parsed Data

Modify `src/index.ts` to add temporary logging:

```typescript
// In main() after loading meal plan:
console.log('Raw meal plan content:', mealPlanContent.slice(0, 200));
console.log('Extracted recipes:', mealPlan.recipes);

// After parsing recipes:
allIngredients.forEach(ing => {
  console.log(`  ${ing.quantity} ${ing.unit} ${ing.name} → ${ing.section}`);
});

// After aggregation:
aggregated.forEach(ing => {
  console.log(`  ${ing.totalQuantity} ${ing.unit} ${ing.name} (from ${ing.recipesSources.join(', ')})`);
});
```

### Test with Specific Files

```bash
# Read a specific meal plan
cat "/Volumes/ziggy/openclaw-workspace/Pinky & The Brain/Notes/Meal Plan - Current Week.md"

# See if wikilinks are detected
grep -o '\[\[[^]]*\]\]' "Meal Plan - Current Week.md"
```

---

## 📈 Performance Benchmarks

### Target Metrics (for MVP)

| Metric | Target |
|--------|--------|
| Load meal plan | <1s |
| Parse recipes | <2s (for 5-7 recipes) |
| Aggregate ingredients | <100ms |
| Generate output | <500ms |
| **Total runtime** | **<5s** |

### Test on Your Machine

```bash
time sage-grocery "Meal Plan - Current Week"
```

Expected output:
```
real	0m2.345s
user	0m1.234s
sys	0m0.111s
```

---

## 🚀 Deployment Checklist

When ready to integrate with Sage agent:

- [ ] Unit tests pass (jest)
- [ ] TypeScript compiles without errors
- [ ] Works with real vault data
- [ ] Handles edge cases gracefully
- [ ] Output matches expected format
- [ ] Performance is acceptable (<5s)
- [ ] Error messages are helpful
- [ ] Code is documented with comments

### Integration with Sage Agent

Once CLI is working, Sage agent can call it:

```typescript
// In sage-agent/src/index.ts
import { spawn } from 'child_process';

async function aggregateGroceries(mealPlanName: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const process = spawn('sage-grocery', [mealPlanName]);
    let output = '';

    process.stdout.on('data', (data) => {
      output += data.toString();
    });

    process.on('close', (code) => {
      if (code === 0) {
        resolve(output);
      } else {
        reject(new Error(`sage-grocery exited with code ${code}`));
      }
    });
  });
}

// Usage:
const groceryList = await aggregateGroceries('Meal Plan - Week of Mar 9');
// Write to vault:
await updateNote('Grocery List - Week of Mar 9', groceryList);
```

---

## 🔗 Related Documents

- **Architecture:** `sage-grocery-architecture.md`
- **Implementation:** `sage-grocery-implementation.ts`
- **This Guide:** `sage-grocery-testing-guide.md`

---

## ✅ Success Criteria

You've successfully built Sage Grocery CLI when:

1. ✅ Tool reads meal plans from vault
2. ✅ Extracts recipe wikilinks
3. ✅ Loads recipes and parses ingredients
4. ✅ Aggregates quantities correctly
5. ✅ Generates proper markdown grocery lists
6. ✅ Runs in <5 seconds
7. ✅ Handles errors gracefully
8. ✅ Is debuggable by Nathan without help
9. ✅ Works with real meal planning data

---

**Questions or blockers?** Forge is available in main agent session.
