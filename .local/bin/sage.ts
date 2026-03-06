#!/usr/bin/env -S npx ts-node
/**
 * sage.ts
 * Orchestrator for Sage agent
 * High-level nutrition and meal planning operations
 */

import {
  searchRecipes,
  getRecipe,
  getHighProteinRecipes,
  getQuickRecipes,
  getRecipesByCuisine,
  getFavoriteRecipes,
  getTopRatedRecipes
} from './sage-recipe';

import { generateGroceryList } from './sage-grocery';

import {
  initSageDirectories,
  readMemory,
  logRecipeRating,
  logFavoriteCuisine,
  logLovedIngredient,
  logDislikedIngredient,
  logMealPlanningFeedback,
  logProteinCompliance,
  updateTasteSummary,
  writeSessionLog,
  getRecentSessions,
  getSageContext
} from './sage-memory';

/**
 * Find recipes matching criteria and protein target
 */
export async function findRecipesForMealPlan(params: {
  cuisine?: string;
  minProtein?: number;
  maxPrepTime?: number;
  count?: number;
}): Promise<any[]> {
  const minProtein = params.minProtein || 35; // High-protein by default
  const count = params.count || 5;
  
  let recipes = searchRecipes({
    cuisine: params.cuisine,
    minProtein,
    maxPrepTime: params.maxPrepTime
  });
  
  // If not enough, broaden search
  if (recipes.length < count) {
    recipes = searchRecipes({ minProtein });
  }
  
  // Sort by rating (if available)
  recipes.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  
  return recipes.slice(0, count);
}

/**
 * Build weekly grocery list from current meal plan
 */
export async function buildGroceryList(): Promise<string> {
  return generateGroceryList();
}

/**
 * Log recipe feedback from daily note
 */
export async function logRecipeFeedback(recipeName: string, rating: number, date: string): Promise<void> {
  logRecipeRating(recipeName, rating, date);
  
  // If rating is 5, potentially add to favorites section
  if (rating === 5) {
    console.log(`⭐ ${recipeName} is a 5-star recipe!`);
  }
}

/**
 * Log meal planning session
 */
export async function logMealPlanningSession(
  weekOf: string,
  recipes: string[],
  notes?: string
): Promise<void> {
  const content = `
## Week of ${weekOf}

### Recipes Selected
${recipes.map(r => `- [[Recipe - ${r}]]`).join('\n')}

${notes ? `### Notes\n${notes}` : ''}
`;
  
  writeSessionLog(weekOf, content);
}

/**
 * Analyze taste patterns and update summary
 */
export async function analyzeTastePatterns(): Promise<string> {
  const context = getSageContext();
  
  // Extract patterns from memory
  const memory = context.memory;
  
  // Count cuisines from 5-star recipes
  const fiveStarMatch = memory.match(/## 5-Star Recipes\n\n([\s\S]*?)\n\n##/);
  const fiveStarRecipes = fiveStarMatch ? fiveStarMatch[1].split('\n').filter(l => l.startsWith('- ')) : [];
  
  // Simple pattern analysis (could be more sophisticated)
  const cuisineCount: Record<string, number> = {};
  for (const recipe of fiveStarRecipes) {
    // This is a placeholder - in reality, you'd parse recipe metadata
    // For now, return a basic summary prompt
  }
  
  return `Analyzing ${fiveStarRecipes.length} top-rated recipes. Update SAGE_MEMORY.md with inferred patterns.`;
}

/**
 * Get full Sage context (for agent system prompt injection)
 */
export async function getFullContext(): Promise<{
  memory: string;
  recentSessions: string[];
  highProteinRecipes: any[];
  favoriteRecipes: any[];
}> {
  const context = getSageContext();
  
  return {
    ...context,
    highProteinRecipes: getHighProteinRecipes(35),
    favoriteRecipes: getFavoriteRecipes()
  };
}

