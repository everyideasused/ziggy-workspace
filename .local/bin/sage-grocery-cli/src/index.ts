#!/usr/bin/env node

import * as fs from "fs";
import { VaultReader } from "./vault-reader";
import { Parser } from "./parser";
import { Aggregator } from "./aggregator";
import { Formatter } from "./formatter";
import { Ingredient } from "./types";

interface CLIOptions {
  mealPlan: string;
  output?: string;
  debug: boolean;
}

function parseArgs(): CLIOptions {
  const args = process.argv.slice(2);

  const options: CLIOptions = {
    mealPlan: "",
    debug: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === "--debug") {
      options.debug = true;
    } else if (arg === "--output" || arg === "-o") {
      options.output = args[++i];
    } else if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    } else if (!arg.startsWith("-")) {
      options.mealPlan = arg;
    }
  }

  return options;
}

function printHelp(): void {
  console.log(`
sage-grocery - Generate grocery lists from meal plans

USAGE:
  sage-grocery <meal-plan-name> [OPTIONS]

OPTIONS:
  -o, --output FILE     Write output to file instead of stdout
  --debug               Enable debug logging
  -h, --help            Show this help message

EXAMPLES:
  sage-grocery "Meal Plan - Current Week"
  sage-grocery "Meal Plan - Current Week" -o grocery-list.md
  sage-grocery "Meal Plan - Current Week" --debug
`);
}

async function main(): Promise<void> {
  const options = parseArgs();

  if (!options.mealPlan) {
    console.error("Error: Meal plan name required");
    console.error('Try "sage-grocery --help" for usage information');
    process.exit(1);
  }

  try {
    if (options.debug) {
      console.log("[Main] Starting sage-grocery CLI");
      console.log(`[Main] Options:`, options);
    }

    // Initialize components
    const vaultReader = new VaultReader(options.debug);
    const parser = new Parser(options.debug);
    const aggregator = new Aggregator(options.debug);
    const formatter = new Formatter(options.debug);

    // Step 1: Read meal plan
    if (options.debug) console.log(`[Main] Reading meal plan: "${options.mealPlan}"`);
    const mealPlanNote = vaultReader.readNote(options.mealPlan);

    // Step 2: Extract recipes from meal plan
    const recipeNames = parser.parseMealPlan(mealPlanNote);
    if (recipeNames.length === 0) {
      throw new Error("No recipes found in meal plan");
    }

    console.log(`Found ${recipeNames.length} recipes: ${recipeNames.join(", ")}`);

    // Step 3: Read each recipe and extract ingredients
    const ingredientsByRecipe = new Map<string, Ingredient[]>();

    for (const recipeName of recipeNames) {
      try {
        const recipeNote = vaultReader.readNote(recipeName);
        const ingredients = parser.parseRecipe(recipeNote);
        ingredientsByRecipe.set(recipeName, ingredients);

        console.log(`  ✓ ${recipeName} (${ingredients.length} ingredients)`);
      } catch (e) {
        console.warn(`  ⚠ Could not read recipe "${recipeName}":`, (e as Error).message);
      }
    }

    if (ingredientsByRecipe.size === 0) {
      throw new Error("Could not read any recipes");
    }

    // Step 4: Aggregate ingredients
    const aggregated = aggregator.aggregateIngredients(ingredientsByRecipe);
    console.log(`Aggregated to ${aggregated.size} unique ingredients`);

    // Step 5: Organize into sections
    const sections = aggregator.organizeBySections(aggregated);
    console.log(`Organized into ${sections.length} sections`);

    // Step 6: Format to markdown
    const weekOf = (mealPlanNote.frontmatter.week_of as string) || new Date().toISOString().split("T")[0];
    const groceryList = {
      week_of: weekOf,
      recipes: recipeNames,
      sections,
    };

    const markdown = formatter.formatToMarkdown(groceryList);

    // Step 7: Output result
    if (options.output) {
      fs.writeFileSync(options.output, markdown, "utf-8");
      console.log(`\nGrocery list written to: ${options.output}`);
    } else {
      console.log("\n" + markdown);
    }
  } catch (error) {
    console.error("Error:", (error as Error).message);
    if (options.debug) {
      console.error((error as Error).stack);
    }
    process.exit(1);
  }
}

main();
