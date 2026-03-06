#!/usr/bin/env -S npx ts-node
/**
 * sage-memory.ts
 * Memory operations for Sage agent
 * Read/write SAGE_MEMORY.md, log ratings, update taste profile
 */

import * as fs from 'fs';
import * as path from 'path';

const VAULT_PATH = process.env.VAULT_PATH || '/Volumes/ziggy/openclaw-workspace/Pinky & The Brain';
const NOTES_DIR = path.join(VAULT_PATH, 'Notes');
const MEMORY_PATH = path.join(NOTES_DIR, 'SAGE_MEMORY.md');
const SESSIONS_DIR = path.join(NOTES_DIR, 'Sage_Sessions');

/**
 * Initialize Sage directories
 */
export function initSageDirectories(): void {
  if (!fs.existsSync(SESSIONS_DIR)) {
    fs.mkdirSync(SESSIONS_DIR, { recursive: true });
  }
}

/**
 * Read SAGE_MEMORY.md
 */
export function readMemory(): string {
  if (!fs.existsSync(MEMORY_PATH)) {
    throw new Error('SAGE_MEMORY.md not found');
  }
  return fs.readFileSync(MEMORY_PATH, 'utf-8');
}

/**
 * Append to a section in SAGE_MEMORY.md
 */
export function appendToSection(section: string, line: string): void {
  let content = readMemory();
  
  // Find section
  const sectionRegex = new RegExp(`(## ${section}[\\s\\S]*?)(\\n- —|\\n\\n##|$)`);
  const match = content.match(sectionRegex);
  
  if (!match) {
    console.warn(`Section not found: ${section}`);
    return;
  }
  
  // Replace placeholder or append
  if (match[1].includes('- —')) {
    content = content.replace(sectionRegex, `$1\n- ${line}$2`);
    content = content.replace('- —\n- ', '- '); // Remove placeholder
  } else {
    content = content.replace(sectionRegex, `$1\n- ${line}$2`);
  }
  
  fs.writeFileSync(MEMORY_PATH, content);
}

/**
 * Update Inferred Taste Summary
 */
export function updateTasteSummary(summary: string): void {
  let content = readMemory();
  
  const sectionRegex = /(## Inferred Taste Summary[\s\S]*?\n\n)(—|\S[\s\S]*?)(\n\n##|$)/;
  const replacement = `$1${summary}$3`;
  
  content = content.replace(sectionRegex, replacement);
  fs.writeFileSync(MEMORY_PATH, content);
}

/**
 * Write session log to Sage_Sessions/
 */
export function writeSessionLog(date: string, content: string): void {
  initSageDirectories();
  
  const fileName = `${date}.md`;
  const filePath = path.join(SESSIONS_DIR, fileName);
  
  const markdown = `---
type: session-log
area: health
status: active
tags:
  - sage
  - session-log
  - nutrition
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[SAGE_MEMORY|Sage Memory]]

---

# Sage Session — ${date}

${content}

---

Created by: Sage · AI: anthropic/claude-sonnet-4-5-20250929
`;
  
  fs.writeFileSync(filePath, markdown);
}

/**
 * Get recent sessions (last N)
 */
export function getRecentSessions(n: number = 3): string[] {
  initSageDirectories();
  
  const files = fs.readdirSync(SESSIONS_DIR)
    .filter(f => f.endsWith('.md'))
    .sort()
    .reverse()
    .slice(0, n);
  
  return files.map(f => {
    const filePath = path.join(SESSIONS_DIR, f);
    return fs.readFileSync(filePath, 'utf-8');
  });
}

/**
 * Log recipe rating
 */
export function logRecipeRating(recipeName: string, rating: number, date: string): void {
  const stars = '★'.repeat(rating);
  const line = `${stars} ${recipeName} (${date})`;
  
  let section: string;
  if (rating === 5) section = '5-Star Recipes';
  else if (rating === 4) section = '4-Star Recipes';
  else if (rating === 3) section = '3-Star Recipes';
  else section = '2-Star or Lower (Avoid)';
  
  appendToSection(section, line);
}

/**
 * Log favorite cuisine
 */
export function logFavoriteCuisine(cuisine: string): void {
  appendToSection('Favorite Cuisines (Ranked)', cuisine);
}

/**
 * Log loved ingredient
 */
export function logLovedIngredient(ingredient: string): void {
  appendToSection('Loved Ingredients', ingredient);
}

/**
 * Log disliked ingredient
 */
export function logDislikedIngredient(ingredient: string): void {
  appendToSection('Disliked Ingredients', ingredient);
}

/**
 * Log meal planning feedback
 */
export function logMealPlanningFeedback(category: 'works' | 'doesnt-work', feedback: string): void {
  const section = category === 'works' ? 'What Works' : "What Doesn't Work";
  appendToSection(section, feedback);
}

/**
 * Log protein compliance
 */
export function logProteinCompliance(weekOf: string, daysHit: number): void {
  const line = `Week of ${weekOf}: ${daysHit}/7 days`;
  appendToSection('Protein Hit Rate (Last 4 Weeks)', line);
}

/**
 * Get full context for Sage (KB + memory + recent sessions)
 */
export function getSageContext(): {
  memory: string;
  recentSessions: string[];
} {
  return {
    memory: readMemory(),
    recentSessions: getRecentSessions(3)
  };
}

