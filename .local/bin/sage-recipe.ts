#!/usr/bin/env -S npx ts-node
/**
 * sage-recipe.ts
 * Recipe vault operations for Sage agent
 * Search, create, update recipes in Obsidian vault
 */

import * as fs from 'fs';
import * as path from 'path';

const VAULT_PATH = process.env.VAULT_PATH || '/Volumes/ziggy/openclaw-workspace/Pinky & The Brain';
const NOTES_DIR = path.join(VAULT_PATH, 'Notes');

interface Recipe {
  name: string;
  path: string;
  category?: string;
  cuisine?: string;
  protein?: number;
  calories?: number;
  rating?: number;
  favorite?: boolean;
  prepTime?: number;
  cookTime?: number;
}

/**
 * Search recipes by criteria
 */
export function searchRecipes(query: {
  cuisine?: string;
  category?: string;
  minProtein?: number;
  maxPrepTime?: number;
  rating?: number;
  favorite?: boolean;
}): Recipe[] {
  const recipes: Recipe[] = [];
  
  const files = fs.readdirSync(NOTES_DIR)
    .filter(f => f.startsWith('Recipe - ') && f.endsWith('.md'));
  
  for (const file of files) {
    const filePath = path.join(NOTES_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const frontmatter = extractFrontmatter(content);
    
    // Apply filters
    if (query.cuisine && frontmatter.cuisine !== query.cuisine) continue;
    if (query.category && frontmatter.category !== query.category) continue;
    if (query.minProtein && (!frontmatter.protein || frontmatter.protein < query.minProtein)) continue;
    if (query.maxPrepTime && frontmatter.total_time && frontmatter.total_time > query.maxPrepTime) continue;
    if (query.rating && (!frontmatter.rating || frontmatter.rating < query.rating)) continue;
    if (query.favorite && !frontmatter.favorite) continue;
    
    recipes.push({
      name: file.replace('Recipe - ', '').replace('.md', ''),
      path: filePath,
      category: frontmatter.category,
      cuisine: frontmatter.cuisine,
      protein: frontmatter.protein,
      calories: frontmatter.calories,
      rating: frontmatter.rating,
      favorite: frontmatter.favorite,
      prepTime: frontmatter.prep_time,
      cookTime: frontmatter.cook_time
    });
  }
  
  return recipes;
}

/**
 * Get recipe by name
 */
export function getRecipe(name: string): { content: string; frontmatter: any } | null {
  const fileName = `Recipe - ${name}.md`;
  const filePath = path.join(NOTES_DIR, fileName);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const frontmatter = extractFrontmatter(content);
  
  return { content, frontmatter };
}

/**
 * Extract frontmatter from markdown
 */
function extractFrontmatter(content: string): any {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  
  const yaml = match[1];
  const data: any = {};
  
  // Parse YAML fields
  const lines = yaml.split('\n');
  for (const line of lines) {
    if (line.includes(': ')) {
      const [key, ...valueParts] = line.split(': ');
      const value = valueParts.join(': ').trim();
      
      // Convert types
      if (value === 'true') data[key] = true;
      else if (value === 'false') data[key] = false;
      else if (!isNaN(Number(value)) && value !== '') data[key] = Number(value);
      else data[key] = value;
    }
  }
  
  return data;
}

/**
 * Get high-protein recipes (≥35g per serving)
 */
export function getHighProteinRecipes(minProtein: number = 35): Recipe[] {
  return searchRecipes({ minProtein });
}

/**
 * Get quick recipes (≤30 min total time)
 */
export function getQuickRecipes(maxTime: number = 30): Recipe[] {
  return searchRecipes({ maxPrepTime: maxTime });
}

/**
 * Get recipes by cuisine
 */
export function getRecipesByCuisine(cuisine: string): Recipe[] {
  return searchRecipes({ cuisine });
}

/**
 * Get favorite recipes
 */
export function getFavoriteRecipes(): Recipe[] {
  return searchRecipes({ favorite: true });
}

/**
 * Get top-rated recipes (4+ stars)
 */
export function getTopRatedRecipes(minRating: number = 4): Recipe[] {
  return searchRecipes({ rating: minRating });
}

