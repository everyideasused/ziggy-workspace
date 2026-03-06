/**
 * Sage Phase 2: Grocery Aggregation CLI
 * Implementation Scaffold & Pseudocode
 * 
 * This file contains the complete TypeScript structure and implementation details
 * for the sage-grocery command-line tool.
 */

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface Ingredient {
  name: string;              // "Chicken breast"
  quantity: number;          // 3
  unit: string;              // "lbs", "cups", "cloves", etc.
  section: string;           // "Meat & Protein", "Produce", etc.
  recipesSources: string[];  // Where this ingredient came from
  notes?: string;            // "boneless, skinless"
}

interface AggregatedIngredient extends Ingredient {
  totalQuantity: number;     // After summing duplicates
  unitWarnings?: string[];   // If unit inconsistency detected
  recipeCount: number;       // How many recipes use this
}

interface ParsedRecipe {
  name: string;
  ingredients: Ingredient[];
  servings?: number;
}

interface MealPlanData {
  name: string;
  recipes: string[];         // Recipe names to load
  generatedDate: Date;
}

interface GroceryListOutput {
  frontmatter: Record<string, unknown>;
  sections: Map<string, AggregatedIngredient[]>;
  summary: {
    totalRecipes: number;
    uniqueIngredients: number;
    totalLines: number;
    warnings: string[];
  };
}

// ============================================================================
// VAULT READER
// ============================================================================

/**
 * Load a markdown note from the vault by name.
 * Handles fuzzy matching: "Chicken Salad" finds "Chicken Salad.md"
 */
async function loadNote(noteName: string, vaultPath: string): Promise<string> {
  const fs = require('fs').promises;
  const path = require('path');

  // Try exact match first
  let filePath = path.join(vaultPath, `${noteName}.md`);
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch (err) {
    // Try fuzzy: case-insensitive, with/without .md
    const files = await fs.readdir(vaultPath);
    const fuzzyMatch = files.find(f => 
      f.toLowerCase().replace('.md', '') === noteName.toLowerCase()
    );
    
    if (fuzzyMatch) {
      filePath = path.join(vaultPath, fuzzyMatch);
      return await fs.readFile(filePath, 'utf-8');
    }
    
    throw new Error(`Note not found: "${noteName}" in ${vaultPath}`);
  }
}

// ============================================================================
// MEAL PLAN PARSER
// ============================================================================

/**
 * Extract all [[Recipe Name]] wikilinks from a meal plan note.
 * Handles duplicates: if recipe appears twice, include both
 */
function extractRecipeLinks(mealPlanContent: string): string[] {
  // Regex: [[anything inside brackets]]
  const wikiLinkRegex = /\[\[([^\]]+)\]\]/g;
  const matches = [];
  let match;

  while ((match = wikiLinkRegex.exec(mealPlanContent)) !== null) {
    const recipeName = match[1].trim();
    // Skip special links like [[2026-03-02|← Yesterday]]
    if (!recipeName.includes('|') && recipeName.length > 0) {
      matches.push(recipeName);
    }
  }

  return matches;
}

/**
 * Parse meal plan and return metadata + recipe list
 */
function parseMealPlan(mealPlanContent: string, mealPlanName: string): MealPlanData {
  const recipes = extractRecipeLinks(mealPlanContent);
  
  // Try to extract week date from content or filename
  // E.g., "Meal Plan - Week of Mar 9" → infer 2026-03-09
  // For now, use current date
  
  return {
    name: mealPlanName,
    recipes,
    generatedDate: new Date(),
  };
}

// ============================================================================
// RECIPE PARSER
// ============================================================================

/**
 * Parse a single recipe and extract all ingredients.
 * Expects format: "- quantity unit ingredient name"
 */
function parseRecipeIngredients(
  recipeContent: string,
  recipeName: string
): Ingredient[] {
  const ingredients: Ingredient[] = [];

  // Find ## Ingredients section (case-insensitive)
  const ingredientMatch = recipeContent.match(
    /##\s+Ingredients\s*\n([\s\S]*?)(?=##|$)/i
  );

  if (!ingredientMatch) {
    console.warn(`⚠️  No ingredients section found in "${recipeName}"`);
    return [];
  }

  // Split by lines and process each
  const ingredientLines = ingredientMatch[1]
    .split('\n')
    .filter(line => line.trim().startsWith('-'));

  for (const line of ingredientLines) {
    const parsed = parseIngredientLine(line, recipeName);
    if (parsed) {
      ingredients.push(parsed);
    }
  }

  return ingredients;
}

/**
 * Parse a single ingredient line: "- 3 lbs chicken breast"
 * Regex: quantity unit name
 */
function parseIngredientLine(line: string, recipeName: string): Ingredient | null {
  const cleaned = line.replace(/^-\s*/, '').trim();

  // Skip lines like "salt & pepper to taste"
  if (cleaned.toLowerCase().includes('to taste')) {
    return null;
  }

  // Pattern: "3 lbs chicken breast" or "1/2 cup flour"
  const match = cleaned.match(/^([\d.\/]+)\s+(\w+(?:\s+\w+)?)\s+(.+)$/);

  if (!match) {
    console.warn(`  ⚠️  Could not parse: "${cleaned}"`);
    return null;
  }

  const quantity = evaluateFraction(match[1]); // 1/2 → 0.5, 3 → 3
  const unit = normalizeUnit(match[2]);        // "tbsp" → "tbsp", "Tbsp" → "tbsp"
  const name = normalizeName(match[3]);         // "Chicken Breast" → "chicken breast"

  return {
    name,
    quantity,
    unit,
    section: guessSection(name),
    recipesSources: [recipeName],
  };
}

/**
 * Convert "1/2" to 0.5, keep "3" as 3
 */
function evaluateFraction(quantityStr: string): number {
  if (quantityStr.includes('/')) {
    const [num, denom] = quantityStr.split('/').map(Number);
    return num / denom;
  }
  return parseFloat(quantityStr);
}

/**
 * Normalize unit names: "Tbsp" → "tbsp", "cups" → "cup" (singular)
 */
function normalizeUnit(unit: string): string {
  const normalized = unit.toLowerCase();
  
  // Standardize to singular
  if (normalized.endsWith('s')) {
    return normalized.slice(0, -1);
  }
  
  // Standard abbreviations
  const unitMap: Record<string, string> = {
    'tbsp': 'tbsp',
    'tsp': 'tsp',
    'cup': 'cup',
    'oz': 'oz',
    'lb': 'lb',
    'ml': 'ml',
    'l': 'l',
    'clove': 'clove',
    'can': 'can',
    'jar': 'jar',
  };
  
  return unitMap[normalized] || normalized;
}

/**
 * Normalize ingredient names: "Chicken Breast" → "chicken breast"
 */
function normalizeName(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')      // Collapse whitespace
    .replace(/,.*/, '');       // Remove descriptors after comma
}

/**
 * Hardcoded section mapping for ingredients
 */
function guessSection(normalizedName: string): string {
  const sectionMap: Record<string, string> = {
    // Produce
    'spinach': '🥬 Produce',
    'tomato': '🥬 Produce',
    'tomatoes': '🥬 Produce',
    'garlic': '🥬 Produce',
    'onion': '🥬 Produce',
    'lettuce': '🥬 Produce',
    'carrot': '🥬 Produce',
    'broccoli': '🥬 Produce',
    'bell pepper': '🥬 Produce',
    'lemon': '🥬 Produce',
    'lime': '🥬 Produce',

    // Meat & Protein
    'chicken': '🥩 Meat & Protein',
    'beef': '🥩 Meat & Protein',
    'salmon': '🥩 Meat & Protein',
    'fish': '🥩 Meat & Protein',
    'shrimp': '🥩 Meat & Protein',
    'pork': '🥩 Meat & Protein',
    'egg': '🥩 Meat & Protein',
    'tofu': '🥩 Meat & Protein',

    // Dairy
    'milk': '🥛 Dairy',
    'cheese': '🥛 Dairy',
    'butter': '🥛 Dairy',
    'yogurt': '🥛 Dairy',

    // Pantry / Dry Goods
    'olive oil': '🧈 Pantry / Dry Goods',
    'oil': '🧈 Pantry / Dry Goods',
    'salt': '🧈 Pantry / Dry Goods',
    'pepper': '🧈 Pantry / Dry Goods',
    'pasta': '🧈 Pantry / Dry Goods',
    'rice': '🧈 Pantry / Dry Goods',
    'flour': '🧈 Pantry / Dry Goods',
    'sugar': '🧈 Pantry / Dry Goods',
    'vinegar': '🧈 Pantry / Dry Goods',
    'soy sauce': '🧈 Pantry / Dry Goods',
  };

  // Try exact match
  if (sectionMap[normalizedName]) {
    return sectionMap[normalizedName];
  }

  // Try substring match (e.g., "chicken breast" contains "chicken")
  for (const [key, section] of Object.entries(sectionMap)) {
    if (normalizedName.includes(key)) {
      return section;
    }
  }

  return '❓ Uncategorized';
}

// ============================================================================
// INGREDIENT AGGREGATOR
// ============================================================================

/**
 * Take a flat list of ingredients and aggregate by name + unit.
 * Sum quantities, track recipe sources.
 */
function aggregateIngredients(ingredients: Ingredient[]): AggregatedIngredient[] {
  const aggregated = new Map<string, AggregatedIngredient>();

  for (const ing of ingredients) {
    // Key: normalized name + unit
    const key = `${ing.name}|${ing.unit}`;

    if (aggregated.has(key)) {
      const existing = aggregated.get(key)!;
      existing.totalQuantity += ing.quantity;
      existing.recipesSources.push(...ing.recipesSources);
    } else {
      aggregated.set(key, {
        ...ing,
        totalQuantity: ing.quantity,
      });
    }
  }

  // Convert to array and sort by section, then name
  return Array.from(aggregated.values())
    .sort((a, b) => {
      if (a.section !== b.section) {
        return a.section.localeCompare(b.section);
      }
      return a.name.localeCompare(b.name);
    });
}

/**
 * Check for unit inconsistencies: same ingredient with different units
 */
function detectUnitWarnings(aggregated: AggregatedIngredient[]): string[] {
  const warnings: string[] = [];
  const nameMap = new Map<string, Set<string>>();

  for (const ing of aggregated) {
    if (!nameMap.has(ing.name)) {
      nameMap.set(ing.name, new Set());
    }
    nameMap.get(ing.name)!.add(ing.unit);
  }

  for (const [name, units] of nameMap.entries()) {
    if (units.size > 1) {
      warnings.push(
        `⚠️  "${name}" has mixed units: ${Array.from(units).join(', ')}`
      );
    }
  }

  return warnings;
}

// ============================================================================
// OUTPUT FORMATTER
// ============================================================================

/**
 * Generate a markdown grocery list with frontmatter
 */
function generateMarkdownGroceryList(
  aggregated: AggregatedIngredient[],
  mealPlanName: string,
  weekOf: string
): string {
  // Group by section
  const sections = new Map<string, AggregatedIngredient[]>();
  for (const ing of aggregated) {
    if (!sections.has(ing.section)) {
      sections.set(ing.section, []);
    }
    sections.get(ing.section)!.push(ing);
  }

  // Build frontmatter
  const now = new Date().toISOString();
  const frontmatter = `---
type: grocery-list
area: household
status: active
tags:
  - meal-prep
  - week-of-${weekOf.replace(/\D/g, '')}
week: "${weekOf}"
source-meal-plan: "${mealPlanName}"
generated: ${now}
---
`;

  // Build content
  const warnings = detectUnitWarnings(aggregated);
  let content = frontmatter + '\n';
  content += `# Grocery List — ${weekOf}\n\n`;
  content += `**Source:** [[${mealPlanName}]]  \n`;
  content += `**Generated:** ${new Date().toLocaleString()}  \n\n`;

  if (warnings.length > 0) {
    content += '---\n\n';
    content += '## ⚠️ Warnings\n\n';
    for (const warning of warnings) {
      content += `${warning}\n`;
    }
    content += '\n---\n\n';
  }

  // Add sections
  for (const [section, items] of sections) {
    content += `## ${section}\n\n`;
    for (const item of items) {
      const line = `- [ ] ${capitalize(item.name)} — ${item.totalQuantity} ${item.unit}`;
      content += line + '\n';
    }
    content += '\n';
  }

  // Summary
  content += '---\n\n';
  content += '## 📊 Summary\n\n';
  content += `**Total recipes:** ${new Set(
    aggregated.flatMap(a => a.recipesSources)
  ).size}\n`;
  content += `**Total unique ingredients:** ${aggregated.length}\n`;
  if (warnings.length > 0) {
    content += `**Warnings:** ${warnings.length}\n`;
  }

  return content;
}

/**
 * Capitalize first letter
 */
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ============================================================================
// MAIN CLI ENTRY POINT
// ============================================================================

async function main() {
  const program = require('commander').program;
  const fs = require('fs').promises;

  program
    .name('sage-grocery')
    .description('Aggregate groceries from a meal plan')
    .argument('<mealPlanName>', 'Name of the meal plan note')
    .option(
      '--vault-path <path>',
      'Path to vault Notes folder',
      '/Volumes/ziggy/openclaw-workspace/Pinky & The Brain/Notes/'
    )
    .option('--output <file>', 'Output file path (default: stdout)')
    .option('--format <format>', 'markdown or json', 'markdown')
    .option('--debug', 'Enable debug output')
    .parse();

  const mealPlanName = program.args[0];
  const opts = program.opts();

  try {
    console.log(`📋 Loading meal plan: "${mealPlanName}"...`);
    const mealPlanContent = await loadNote(mealPlanName, opts.vaultPath);

    // Parse meal plan
    const mealPlan = parseMealPlan(mealPlanContent, mealPlanName);
    console.log(`✅ Found ${mealPlan.recipes.length} recipes`);

    if (opts.debug) {
      console.log('Recipes:', mealPlan.recipes);
    }

    // Load and parse all recipes
    console.log(`📖 Reading recipes...`);
    const allIngredients: Ingredient[] = [];
    let loadedCount = 0;

    for (const recipeName of mealPlan.recipes) {
      try {
        const recipeContent = await loadNote(recipeName, opts.vaultPath);
        const ingredients = parseRecipeIngredients(recipeContent, recipeName);
        allIngredients.push(...ingredients);
        loadedCount++;
      } catch (err: any) {
        console.warn(`⚠️  Could not load recipe: "${recipeName}" — ${err.message}`);
      }
    }

    console.log(`✅ Parsed ${loadedCount} recipes, found ${allIngredients.length} ingredient lines`);

    // Aggregate
    console.log(`🔄 Aggregating ingredients...`);
    const aggregated = aggregateIngredients(allIngredients);
    console.log(`✅ Aggregated to ${aggregated.length} unique ingredients`);

    // Format output
    console.log(`📝 Generating grocery list...`);
    const output = generateMarkdownGroceryList(mealPlanName, mealPlanName, 'Mar 9');

    // Write or print
    if (opts.output) {
      await fs.writeFile(opts.output, output);
      console.log(`✅ Grocery list written to: ${opts.output}`);
    } else {
      console.log('\n' + '='.repeat(60) + '\n');
      console.log(output);
    }
  } catch (error: any) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
}

// ============================================================================
// EXPORTS (for testing)
// ============================================================================

module.exports = {
  loadNote,
  extractRecipeLinks,
  parseRecipeIngredients,
  aggregateIngredients,
  generateMarkdownGroceryList,
  parseIngredientLine,
  normalizeUnit,
  normalizeName,
  guessSection,
};

// Run if executed directly
if (require.main === module) {
  main().catch(console.error);
}
