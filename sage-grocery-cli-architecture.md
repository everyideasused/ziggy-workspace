# Sage Phase 2: Grocery Aggregation CLI — Architecture & Implementation Plan

**Author:** Forge (Sr. Engineer)  
**Date:** March 4, 2026  
**Status:** Design Phase Complete  
**Tech Stack:** Node.js + TypeScript  

---

## 📋 Executive Summary

**Problem:** Nathan manually aggregates grocery ingredients every week:
1. Reads meal plan (wikilinks to recipes)
2. Opens each recipe, reads ingredients + quantities
3. Manually sums duplicates
4. Organizes by store section
5. Creates markdown grocery list

**Solution:** `sage-grocery` CLI that automates steps 1-4, outputs a ready-to-use markdown grocery list.

**Expected time savings:** ~20 mins/week → 2 mins (automated)

---

## 🎯 Tool Specification

### Input
```
sage-grocery "Meal Plan - Week of Mar 9"
```

**Arguments:**
- `<mealPlanName>` (required): Exact note name from vault, with or without .md
- `--vault-path` (optional): Override default vault path (default: `/Volumes/ziggy/openclaw-workspace/Pinky & The Brain/Notes/`)
- `--output` (optional): Output file path (default: `stdout`)
- `--format` (optional): `markdown` (default) or `json`
- `--by-section` (optional): Group by store section (default: true)
- `--check-unit-consistency` (optional): Warn if same ingredient has mixed units (default: true)

### Output Format

```markdown
---
type: grocery-list
area: household
status: active
tags:
  - meal-prep
  - week-of-2026-03-09
week: "2026-03-09"
source-meal-plan: "Meal Plan - Week of Mar 9"
generated: 2026-03-04T20:55:00Z
---

# Grocery List — Week of Mar 9, 2026

**Source:** [[Meal Plan - Week of Mar 9]]  
**Generated:** 2026-03-04 @ 20:55 CST  

---

## 🥬 Produce

- [ ] Spinach — 4 cups
- [ ] Tomatoes — 6 medium
- [ ] Garlic — 8 cloves

## 🥩 Meat & Protein

- [ ] Chicken breast — 3 lbs
- [ ] Ground beef — 2 lbs

## 🧈 Pantry / Dry Goods

- [ ] Olive oil — 1 cup
- [ ] Salt — 1 tbsp

## 📊 Summary

**Total recipes:** 5  
**Total unique ingredients:** 23  
**Estimated cost:** ~$75 (based on recent history)  
**Dietary notes:** Vegan recipes excluded this week
```

---

## 🏗️ Architecture Design

### Core Components

```
sage-grocery/
├── src/
│   ├── index.ts                 # CLI entry point
│   ├── vaultReader.ts           # Read notes from vault
│   ├── mealPlanParser.ts        # Parse meal plan wikilinks
│   ├── recipeParser.ts          # Parse recipe ingredients + quantities
│   ├── ingredientAggregator.ts  # Sum & deduplicate ingredients
│   ├── outputFormatter.ts       # Generate markdown grocery list
│   ├── types.ts                 # TypeScript interfaces
│   └── utils.ts                 # Helpers (unit conversion, logging)
├── test/
│   ├── fixtures/                # Test recipes & meal plans
│   └── aggregator.test.ts       # Unit tests
├── package.json
├── tsconfig.json
└── README.md
```

### Data Flow Diagram

```
[CLI Argument: "Meal Plan - Week of Mar 9"]
          ↓
[VaultReader: Load meal plan note]
          ↓
[MealPlanParser: Extract [[Recipe Name]] wikilinks]
          ↓
[RecipeParser: Load each recipe, extract ingredients + quantities]
          ↓
[IngredientAggregator: Deduplicate, sum quantities, normalize units]
          ↓
[OutputFormatter: Group by section, apply frontmatter, generate markdown]
          ↓
[Write to file OR stdout]
```

---

## 📝 Key Data Structures

### Ingredient Representation

```typescript
interface Ingredient {
  name: string;                    // "Chicken breast"
  quantity: number;                // 3
  unit: string;                    // "lbs", "cups", "tbsp", "cloves", etc.
  section: string;                 // "Meat & Protein", "Produce", etc.
  recipesSources: string[];        // ["Recipe 1", "Recipe 2"] — where it came from
  notes?: string;                  // "boneless, skinless"
}

interface AggregatedIngredient extends Ingredient {
  totalQuantity: number;           // After summing all uses
  unitWarnings?: string[];         // If unit inconsistency detected
}
```

### Recipe Format (Expected)

```markdown
---
type: recipe
area: interests
status: active
tags:
  - vegan
  - quick
---

# Pasta Primavera

## Ingredients

- 1 lb pasta
- 4 cups spinach
- 3 cloves garlic, minced
- 1/4 cup olive oil
- Salt & pepper to taste

## Instructions

1. Boil pasta...
```

### Meal Plan Format (Expected)

```markdown
---
type: meal-plan
area: household
---

# Meal Plan — Week of Mar 9

## Monday
- Breakfast: [[Scrambled Eggs]]
- Lunch: [[Caesar Salad]]
- Dinner: [[Pasta Primavera]]

## Tuesday
- Breakfast: [[Oatmeal with Berries]]
- Lunch: [[Pasta Primavera]]
- Dinner: [[Chicken Stir Fry]]
```

---

## 🔧 Implementation Plan

### Phase 1: Core Parsing (Days 1-2)

**VaultReader** (`vaultReader.ts`):
```typescript
async function loadNote(noteName: string, vaultPath: string): Promise<string>
```
- Use `fs` to read markdown file
- Handle fuzzy matching (strip .md, handle case variations)
- Return raw file content

**MealPlanParser** (`mealPlanParser.ts`):
```typescript
function extractRecipeLinks(mealPlanContent: string): string[]
```
- Regex: `\[\[([^\]]+)\]\]` to find all `[[Recipe Name]]` wikilinks
- Deduplicate (if same recipe appears multiple times, count it once, or once per mention?)
- Return array of recipe names

**RecipeParser** (`recipeParser.ts`):
```typescript
function parseRecipeIngredients(recipeContent: string): Ingredient[]
```
- Split on `## Ingredients` section
- Parse each line: "- 3 lbs chicken breast" → `{quantity: 3, unit: "lbs", name: "chicken breast"}`
- Handle variations: "3 medium tomatoes", "1/4 cup", "to taste" (skip), "1 can"
- Use section metadata from recipe frontmatter OR default to "Uncategorized"

### Phase 2: Aggregation (Days 2-3)

**IngredientAggregator** (`ingredientAggregator.ts`):
```typescript
function aggregateIngredients(ingredients: Ingredient[]): AggregatedIngredient[]
```
- **Deduplication logic:**
  - Normalize names: "Chicken breast" == "chicken breast" (lowercase)
  - Strip common modifiers: "chicken breast (boneless)" → match "chicken breast"
  - Store modifiers in `notes` field
  
- **Quantity summation:**
  - Group by (normalized name, unit)
  - Sum quantities
  - If same ingredient has different units, flag warning and store both entries OR convert units
  
- **Unit normalization (optional):**
  - "tbsp" ↔ "tsp" (1:3)
  - "cup" ↔ "tbsp" (1:16)
  - "oz" ↔ "lbs" (1:16)
  - If mixing metric/imperial: warn, don't convert

- **Section assignment:**
  - Use recipe frontmatter `grocery-section` field, OR
  - Hardcoded lookup table: `tomato` → "Produce", `chicken` → "Meat & Protein"
  - Fallback to "Uncategorized"

**Section Lookup Table** (hardcoded):
```typescript
const INGREDIENT_SECTIONS: Record<string, string> = {
  // Produce
  spinach: "🥬 Produce",
  tomatoes: "🥬 Produce",
  garlic: "🥬 Produce",
  onion: "🥬 Produce",
  
  // Meat & Protein
  chicken: "🥩 Meat & Protein",
  beef: "🥩 Meat & Protein",
  salmon: "🥩 Meat & Protein",
  
  // Pantry
  olive_oil: "🧈 Pantry / Dry Goods",
  salt: "🧈 Pantry / Dry Goods",
  pasta: "🧈 Pantry / Dry Goods",
};
```

### Phase 3: Output Formatting (Day 3)

**OutputFormatter** (`outputFormatter.ts`):
```typescript
function generateMarkdownGroceryList(
  aggregated: AggregatedIngredient[],
  mealPlanName: string,
  weekOf: string
): string
```
- Generate frontmatter (YAML)
- Group ingredients by section
- Format each ingredient line: `- [ ] Ingredient — quantity unit`
- Add summary section (total recipes, unique ingredients, warnings)
- Return markdown string

---

## 💻 Implementation Pseudocode

### Main Entry Point

```typescript
import { program } from 'commander';
import { loadNote } from './vaultReader';
import { extractRecipeLinks } from './mealPlanParser';
import { parseRecipeIngredients } from './recipeParser';
import { aggregateIngredients } from './ingredientAggregator';
import { generateMarkdownGroceryList } from './outputFormatter';

async function main() {
  program
    .argument('<mealPlanName>', 'Name of meal plan note')
    .option('--vault-path <path>', 'Path to vault Notes folder', 
      '/Volumes/ziggy/openclaw-workspace/Pinky & The Brain/Notes/')
    .option('--output <file>', 'Output file path (default: stdout)')
    .option('--format <format>', 'markdown or json', 'markdown')
    .parse();

  const mealPlanName = program.args[0];
  const opts = program.opts();

  try {
    // 1. Load meal plan
    const mealPlanContent = await loadNote(mealPlanName, opts.vaultPath);
    
    // 2. Extract recipe links
    const recipeNames = extractRecipeLinks(mealPlanContent);
    console.log(`Found ${recipeNames.length} recipes`);

    // 3. Parse all recipes
    const allIngredients: Ingredient[] = [];
    for (const recipeName of recipeNames) {
      const recipeContent = await loadNote(recipeName, opts.vaultPath);
      const ingredients = parseRecipeIngredients(recipeContent);
      allIngredients.push(...ingredients);
    }

    // 4. Aggregate
    const aggregated = aggregateIngredients(allIngredients);

    // 5. Format & output
    const output = generateMarkdownGroceryList(aggregated, mealPlanName, 'Mar 9');
    
    if (opts.output) {
      fs.writeFileSync(opts.output, output);
      console.log(`✅ Grocery list written to ${opts.output}`);
    } else {
      console.log(output);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
```

### Recipe Parser Details

```typescript
function parseRecipeIngredients(content: string): Ingredient[] {
  const ingredients: Ingredient[] = [];
  
  // Extract ## Ingredients section
  const ingredientMatch = content.match(
    /##\s+Ingredients\s*\n([\s\S]*?)(?=##|$)/i
  );
  
  if (!ingredientMatch) {
    console.warn('No ingredients section found');
    return [];
  }

  const ingredientLines = ingredientMatch[1]
    .split('\n')
    .filter(line => line.trim().startsWith('-'));

  for (const line of ingredientLines) {
    const parsed = parseLine(line);
    if (parsed) ingredients.push(parsed);
  }

  return ingredients;
}

function parseLine(line: string): Ingredient | null {
  // Remove markdown bullet and trim
  const cleaned = line.replace(/^-\s*/, '').trim();
  
  // Regex: "3 lbs chicken breast"
  const match = cleaned.match(/^([\d.]+)\s+(\w+)\s+(.+)$/);
  
  if (!match) {
    // Try "1 can tomatoes"
    const canMatch = cleaned.match(/^([\d.]+)\s+(\w+)\s+(.+)$/);
    if (canMatch) {
      return {
        quantity: parseFloat(canMatch[1]),
        unit: canMatch[2], // "can"
        name: canMatch[3],
        section: guessSection(canMatch[3]),
        recipesSources: [],
      };
    }
    return null; // Skip lines like "salt & pepper to taste"
  }

  return {
    quantity: parseFloat(match[1]),
    unit: match[2],
    name: match[3],
    section: guessSection(match[3]),
    recipesSources: [],
  };
}
```

---

## 🧪 Test Plan

### Test Fixtures

Create sample recipes and meal plan in `test/fixtures/`:

**`chicken-salad.md`:**
```markdown
---
type: recipe
---

# Chicken Salad

## Ingredients

- 2 lbs chicken breast
- 4 cups spinach
- 2 tbsp olive oil
- 1 lemon
- Salt & pepper to taste
```

**`pasta-primavera.md`:**
```markdown
---
type: recipe
---

# Pasta Primavera

## Ingredients

- 1 lb pasta
- 4 cups spinach
- 3 cloves garlic
- 2 tbsp olive oil
```

**`meal-plan-test.md`:**
```markdown
---
type: meal-plan
---

# Test Meal Plan

## Monday
- Lunch: [[Chicken Salad]]
- Dinner: [[Pasta Primavera]]

## Tuesday
- Lunch: [[Chicken Salad]]
```

### Test Cases

| Test | Input | Expected Output |
|------|-------|-----------------|
| **Parse meal plan** | `meal-plan-test.md` | `["Chicken Salad", "Pasta Primavera"]` (Chicken Salad appears twice, deduplicated) |
| **Parse recipe** | `chicken-salad.md` | 4 ingredients: chicken 2lbs, spinach 4cups, olive oil 2tbsp, lemon 1 |
| **Aggregate** | Both recipes | spinach 8 cups, chicken 2 lbs, olive oil 4 tbsp, garlic 3 cloves, pasta 1 lb, lemon 1 |
| **Group by section** | Aggregated list | Produce: spinach, lemon, garlic; Meat: chicken; Pantry: olive oil, pasta |
| **Generate markdown** | Grouped list | Properly formatted markdown with frontmatter & checkboxes |

---

## 🚀 Quick Start (MVP)

### Minimal Version (Day 1)

For Nathan to test immediately:
1. VaultReader: read files from disk
2. MealPlanParser: extract wikilinks with regex
3. RecipeParser: parse basic "- quantity unit name" format
4. IngredientAggregator: simple dedup + sum
5. OutputFormatter: basic markdown

### No time for:
- Unit conversion
- Fuzzy ingredient matching
- Complex recipe formats
- JSON output

---

## 🐛 Known Limitations & Future Work

| Issue | Mitigation | Priority |
|-------|-----------|----------|
| Recipe format variations | Define standard template in vault | Medium |
| Unit mismatches (cups + tbsp) | Warn user, don't auto-convert | Medium |
| "To taste" ingredients | Skip them | Low |
| Multiple meal plan references | Document expected format | Low |
| Ingredient name variations | Manual lookup table + regex normalization | Medium |
| Nested sections in recipe | Only parse ## Ingredients | Low |

---

## 📦 Tech Stack Rationale

| Technology | Why |
|-----------|-----|
| **Node.js** | Already used by OpenClaw, CLI-friendly |
| **TypeScript** | Type safety, maintainable by Nathan |
| **Commander.js** | Clean CLI argument parsing |
| **No external deps** | Keep it simple, fs is enough for vault reading |

---

## 📊 Metrics for Success

- ✅ Runs in <5 seconds for typical week (5-7 recipes)
- ✅ Accurately aggregates ingredient quantities
- ✅ Generates proper markdown with frontmatter
- ✅ Debuggable by Nathan without help
- ✅ Handles at least 90% of current recipe formats

---

## 🎬 Next Steps

1. **Approval & feedback** — Nathan reviews architecture
2. **Build Phase 1** — VaultReader + MealPlanParser + basic RecipeParser
3. **Test with real data** — Run against actual vault recipes
4. **Iterate** — Handle edge cases from real recipes
5. **Polish** — Better error messages, unit conversion, section logic
6. **Integration** — Sage agent calls `sage-grocery` CLI

---

## 📞 Questions for Nathan

1. When same recipe appears multiple times in meal plan, should we count it once or multiple times?
   - *Likely:* Once per appearance (e.g., Pasta Monday + Thursday = 2x the ingredients)
   
2. What unit conversion do we care about? (tbsp ↔ cups, oz ↔ lbs, etc.)
   - *Likely:* Skip for MVP, warn on mismatch, add later
   
3. Should we track "which recipe uses this ingredient" in the output?
   - *Likely:* Not in markdown, but good for debugging
   
4. Do recipes have a standard `grocery-section` field, or should we guess?
   - *Likely:* Build lookup table based on ingredient names

---

**End of Architecture Document**
