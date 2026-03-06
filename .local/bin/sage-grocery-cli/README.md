# Sage Phase 2 - Grocery CLI

A production-ready TypeScript CLI tool for auto-generating grocery lists from meal plans.

## Installation

```bash
cd /Volumes/ziggy/openclaw-workspace/.local/bin/sage-grocery-cli
npm install
npm run build
chmod +x bin/sage-grocery
```

## Usage

```bash
# Basic: print grocery list to stdout
./bin/sage-grocery "Meal Plan - Current Week"

# Write to file
./bin/sage-grocery "Meal Plan - Current Week" -o grocery-list.md

# Debug mode
./bin/sage-grocery "Meal Plan - Current Week" --debug
```

## How It Works

1. **Reads Meal Plan** - Parses the meal plan note from the vault
2. **Extracts Recipes** - Finds all `[[Recipe Name]]` wikilinks
3. **Reads Recipes** - Loads each recipe note from the vault
4. **Parses Ingredients** - Extracts items from "## 📋 Ingredients" sections
5. **Aggregates** - Combines duplicate ingredients, sums quantities
6. **Organizes** - Groups into store sections (Produce, Pantry, etc.)
7. **Formats** - Generates markdown with proper frontmatter

## File Structure

- `src/index.ts` - CLI entry point, arg parsing
- `src/vault-reader.ts` - Read & parse .md files from vault
- `src/parser.ts` - Extract wikilinks & ingredients from notes
- `src/aggregator.ts` - Combine ingredients, map to sections
- `src/formatter.ts` - Generate markdown output
- `src/types.ts` - TypeScript interfaces & ingredient mapping
- `bin/sage-grocery` - Shell wrapper for easy execution

## Ingredient Mapping

Ingredients are automatically categorized into:

- **🥬 Produce** - Vegetables, fruits, herbs
- **🥫 Canned & Jarred** - Beans, sauces, jars
- **🍝 Grains & Pasta** - Rice, pasta, bread, oats
- **🧂 Pantry Staples** - Spices, oils, vinegar, sauces
- **🧀 Dairy Alternatives** - Tofu, milk alternatives, vegan products
- **🌶️ Optional** - Anything not categorized above

Edit `INGREDIENT_MAPPING` in `src/types.ts` to customize.

## Output Format

The generated grocery list includes:

- YAML frontmatter with `type: grocery-list`, recipes list, status
- Navigation links to Obsidian vault
- Recipe list (with wikilinks)
- Sectioned ingredients with checkboxes
- Recipe attribution for multi-recipe items

## Troubleshooting

**"Note not found: ..."**
- Meal plan or recipe file doesn't exist in vault
- Check exact filename in `/Volumes/ziggy/openclaw-workspace/Pinky & The Brain/Notes/`
- CLI uses fuzzy matching, but ensure the file exists

**"No ingredients section found"**
- Recipe doesn't have a "## 📋 Ingredients" section
- Edit the recipe to add proper ingredients section

**"No recipes found in meal plan"**
- Meal plan doesn't have any `[[Recipe Name]]` wikilinks
- Edit meal plan to add recipe links

**Use `--debug` flag for detailed troubleshooting:**
```bash
./bin/sage-grocery "Meal Plan - Current Week" --debug
```

## Sage Integration

For Sage chef agent to call this CLI programmatically:

```typescript
import { exec } from "child_process";

async function generateGroceryList(mealPlanName: string): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(
      `~/.local/bin/sage-grocery-cli/bin/sage-grocery "${mealPlanName}"`,
      (error, stdout, stderr) => {
        if (error) reject(error);
        else resolve(stdout);
      }
    );
  });
}

// Usage in Sage:
// const groceryList = await generateGroceryList("Meal Plan - Current Week");
```

## Development

```bash
# Install dependencies
npm install

# Build TypeScript
npm run build

# Run tests
npm test

# Dev mode (with ts-node)
npm run dev "Meal Plan - Current Week"
```

## Future Enhancements

- [ ] Quantity unit normalization (convert all to metric, etc.)
- [ ] Meal plan validation (warn if recipes missing)
- [ ] Price estimation from grocery store data
- [ ] Smart quantity suggestions (yield, servings adjustments)
- [ ] Export to CSV/JSON formats
- [ ] Integration with grocery delivery APIs
