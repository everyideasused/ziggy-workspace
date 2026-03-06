#!/usr/bin/env -S npx ts-node
/**
 * sage-grocery.ts
 * Grocery list generation from meal plan
 * Reads meal plan, extracts ingredients, consolidates, organizes by store section
 */

import * as fs from 'fs';
import * as path from 'path';

const VAULT_PATH = process.env.VAULT_PATH || '/Volumes/ziggy/openclaw-workspace/Pinky & The Brain';
const NOTES_DIR = path.join(VAULT_PATH, 'Notes');

interface Ingredient {
  name: string;
  quantity?: string;
  section: string;
}

// Store section mapping
const SECTION_MAP: Record<string, string> = {
  // Produce
  'spinach': 'Produce',
  'kale': 'Produce',
  'arugula': 'Produce',
  'lettuce': 'Produce',
  'tomato': 'Produce',
  'tomatoes': 'Produce',
  'bell pepper': 'Produce',
  'onion': 'Produce',
  'garlic': 'Produce',
  'ginger': 'Produce',
  'carrot': 'Produce',
  'celery': 'Produce',
  'broccoli': 'Produce',
  'cauliflower': 'Produce',
  'zucchini': 'Produce',
  'mushrooms': 'Produce',
  'avocado': 'Produce',
  'lemon': 'Produce',
  'lime': 'Produce',
  'cilantro': 'Produce',
  'parsley': 'Produce',
  'basil': 'Produce',
  'jalapeño': 'Produce',
  
  // Canned/Jarred
  'black beans': 'Canned/Jarred',
  'chickpeas': 'Canned/Jarred',
  'lentils': 'Canned/Jarred',
  'coconut milk': 'Canned/Jarred',
  'diced tomatoes': 'Canned/Jarred',
  'tomato paste': 'Canned/Jarred',
  'tomato sauce': 'Canned/Jarred',
  'salsa': 'Canned/Jarred',
  'tahini': 'Canned/Jarred',
  'peanut butter': 'Canned/Jarred',
  'almond butter': 'Canned/Jarred',
  
  // Grains & Pasta
  'quinoa': 'Grains & Pasta',
  'rice': 'Grains & Pasta',
  'brown rice': 'Grains & Pasta',
  'pasta': 'Grains & Pasta',
  'spaghetti': 'Grains & Pasta',
  'penne': 'Grains & Pasta',
  'oats': 'Grains & Pasta',
  'bread': 'Grains & Pasta',
  'tortillas': 'Grains & Pasta',
  
  // Pantry
  'olive oil': 'Pantry',
  'vegetable oil': 'Pantry',
  'sesame oil': 'Pantry',
  'soy sauce': 'Pantry',
  'tamari': 'Pantry',
  'vinegar': 'Pantry',
  'apple cider vinegar': 'Pantry',
  'balsamic vinegar': 'Pantry',
  'maple syrup': 'Pantry',
  'nutritional yeast': 'Pantry',
  'flour': 'Pantry',
  'cornstarch': 'Pantry',
  'baking powder': 'Pantry',
  'baking soda': 'Pantry',
  
  // Refrigerated
  'tempeh': 'Refrigerated',
  'tofu': 'Refrigerated',
  'firm tofu': 'Refrigerated',
  'extra-firm tofu': 'Refrigerated',
  'plant milk': 'Refrigerated',
  'almond milk': 'Refrigerated',
  'oat milk': 'Refrigerated',
  'soy milk': 'Refrigerated',
  'vegan butter': 'Refrigerated',
  'hummus': 'Refrigerated',
  
  // Frozen
  'edamame': 'Frozen',
  'frozen vegetables': 'Frozen',
  'frozen fruit': 'Frozen',
  
  // Spices
  'cumin': 'Spices',
  'paprika': 'Spices',
  'chili powder': 'Spices',
  'oregano': 'Spices',
  'basil': 'Spices',
  'thyme': 'Spices',
  'turmeric': 'Spices',
  'curry powder': 'Spices',
  'cinnamon': 'Spices',
  'salt': 'Spices',
  'black pepper': 'Spices',
  'red pepper flakes': 'Spices',
};

/**
 * Get section for ingredient (fuzzy match)
 */
function getSection(ingredient: string): string {
  const lower = ingredient.toLowerCase();
  
  // Exact match
  if (SECTION_MAP[lower]) {
    return SECTION_MAP[lower];
  }
  
  // Partial match
  for (const [key, section] of Object.entries(SECTION_MAP)) {
    if (lower.includes(key) || key.includes(lower)) {
      return section;
    }
  }
  
  // Default to Pantry
  return 'Pantry';
}

/**
 * Extract ingredients from recipe
 */
function extractIngredientsFromRecipe(recipeName: string): Ingredient[] {
  const fileName = `Recipe - ${recipeName}.md`;
  const filePath = path.join(NOTES_DIR, fileName);
  
  if (!fs.existsSync(filePath)) {
    console.warn(`Recipe not found: ${recipeName}`);
    return [];
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const ingredients: Ingredient[] = [];
  
  // Find ingredients section
  const ingredientsMatch = content.match(/## Ingredients\n\n([\s\S]*?)\n\n##/);
  if (!ingredientsMatch) return [];
  
  const ingredientLines = ingredientsMatch[1].split('\n');
  
  for (const line of ingredientLines) {
    if (line.startsWith('- ')) {
      const text = line.replace('- ', '').trim();
      
      // Extract quantity and name (simple parser)
      const parts = text.split(' ');
      const name = parts.slice(2).join(' '); // Skip quantity and unit
      const quantity = parts.slice(0, 2).join(' '); // Approximate
      
      ingredients.push({
        name: name || text,
        quantity: quantity || undefined,
        section: getSection(name || text)
      });
    }
  }
  
  return ingredients;
}

/**
 * Generate grocery list from meal plan
 */
export function generateGroceryList(mealPlanPath?: string): string {
  const planPath = mealPlanPath || path.join(NOTES_DIR, 'Meal Plan - Current Week.md');
  
  if (!fs.existsSync(planPath)) {
    throw new Error('Meal plan not found');
  }
  
  const content = fs.readFileSync(planPath, 'utf-8');
  
  // Extract recipe names from meal plan
  const recipeNames: string[] = [];
  const recipeLinks = content.match(/\[\[Recipe - (.*?)\]\]/g) || [];
  
  for (const link of recipeLinks) {
    const name = link.replace('[[Recipe - ', '').replace(']]', '');
    if (!recipeNames.includes(name)) {
      recipeNames.push(name);
    }
  }
  
  // Collect all ingredients
  const allIngredients: Ingredient[] = [];
  for (const recipeName of recipeNames) {
    const ingredients = extractIngredientsFromRecipe(recipeName);
    allIngredients.push(...ingredients);
  }
  
  // Group by section
  const sections: Record<string, Ingredient[]> = {};
  for (const ing of allIngredients) {
    if (!sections[ing.section]) {
      sections[ing.section] = [];
    }
    sections[ing.section].push(ing);
  }
  
  // Build grocery list markdown
  const date = new Date().toISOString().split('T')[0];
  const monday = getMondayOfWeek(new Date());
  
  let markdown = `---
type: resource
area: household
status: active
tags:
  - household
  - grocery
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Household Hub|Household Hub]]

---

# 🛒 Grocery List - Week of ${monday}

> Generated from [[Meal Plan - Current Week]]

---

## Instructions

- [ ] Review list and check off items you already have at home
- [ ] Shop for unchecked items
- [ ] Mark items as complete when purchased

---

`;
  
  // Preferred section order
  const sectionOrder = [
    'Produce',
    'Refrigerated',
    'Frozen',
    'Canned/Jarred',
    'Grains & Pasta',
    'Pantry',
    'Spices',
    'Optional Toppings'
  ];
  
  for (const section of sectionOrder) {
    if (sections[section] && sections[section].length > 0) {
      markdown += `## ${section}\n\n`;
      
      // Deduplicate ingredients
      const unique = new Map<string, Ingredient>();
      for (const ing of sections[section]) {
        unique.set(ing.name, ing);
      }
      
      for (const ing of unique.values()) {
        markdown += `- [ ] ${ing.name}`;
        if (ing.quantity) {
          markdown += ` (${ing.quantity})`;
        }
        markdown += '\n';
      }
      
      markdown += '\n';
    }
  }
  
  markdown += `---

Created by: Sage · AI: anthropic/claude-sonnet-4-5-20250929
`;
  
  return markdown;
}

/**
 * Get Monday of current week (for naming)
 */
function getMondayOfWeek(date: Date): string {
  const day = date.getDay();
  const diff = (day === 0 ? -6 : 1) - day; // Adjust to Monday
  const monday = new Date(date);
  monday.setDate(date.getDate() + diff);
  
  const year = monday.getFullYear();
  const month = String(monday.getMonth() + 1).padStart(2, '0');
  const dayOfMonth = String(monday.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${dayOfMonth}`;
}

