#!/usr/bin/env -S npx ts-node
/**
 * forge-memory.ts
 * Memory operations for Forge agent (Sr. Engineer)
 * Read/write FORGE_MEMORY.md, log decisions, tech debt, debugging wins
 */

import * as fs from 'fs';
import * as path from 'path';

const VAULT_PATH = process.env.VAULT_PATH || '/Volumes/ziggy/openclaw-workspace/Pinky & The Brain';
const NOTES_DIR = path.join(VAULT_PATH, 'Notes');
const MEMORY_PATH = path.join(NOTES_DIR, 'FORGE_MEMORY.md');
const SESSIONS_DIR = path.join(NOTES_DIR, 'Forge_Sessions');

/**
 * Initialize Forge directories
 */
export function initForgeDirectories(): void {
  if (!fs.existsSync(SESSIONS_DIR)) {
    fs.mkdirSync(SESSIONS_DIR, { recursive: true });
  }
}

/**
 * Read FORGE_MEMORY.md
 */
export function readMemory(): string {
  if (!fs.existsSync(MEMORY_PATH)) {
    throw new Error('FORGE_MEMORY.md not found');
  }
  return fs.readFileSync(MEMORY_PATH, 'utf-8');
}

/**
 * Log architecture decision
 */
export function logArchitectureDecision(
  project: string,
  decision: string,
  context: string,
  optionsConsidered: string[],
  rationale: string,
  consequences: string,
  date: string
): void {
  let content = readMemory();
  
  const decisionEntry = `
### ${project}
**Date:** ${date}  
**Decision:** ${decision}  
**Context:** ${context}  
**Options Considered:**
${optionsConsidered.map((opt, i) => `${i + 1}. ${opt}`).join('\n')}

**Rationale:** ${rationale}  
**Consequences:** ${consequences}

`;
  
  const sectionRegex = /(## Architecture Decision Log[\s\S]*?)(###|---|\n\n##)/;
  content = content.replace(sectionRegex, `$1${decisionEntry}$2`);
  
  fs.writeFileSync(MEMORY_PATH, content);
}

/**
 * Log technology choice
 */
export function logTechnologyChoice(
  category: string,
  technology: string,
  useCase: string,
  alternatives: string[],
  rationale: string,
  wouldUseAgain: 'Yes' | 'No' | 'Depends'
): void {
  let content = readMemory();
  
  const techEntry = `
### ${category}
**Technology:** ${technology}  
**Use Case:** ${useCase}  
**Alternatives Considered:** ${alternatives.join(', ')}  
**Rationale:** ${rationale}  
**Would Use Again:** ${wouldUseAgain}

`;
  
  const sectionRegex = /(## Technology Choices[\s\S]*?)(###|---|\n\n##)/;
  content = content.replace(sectionRegex, `$1${techEntry}$2`);
  
  fs.writeFileSync(MEMORY_PATH, content);
}

/**
 * Log technical debt
 */
export function logTechnicalDebt(
  system: string,
  debtType: 'Architecture' | 'Code Quality' | 'Performance' | 'Security',
  description: string,
  impact: string,
  severity: 'Critical' | 'High' | 'Medium' | 'Low',
  priority: string,
  estimatedEffort: string
): void {
  let content = readMemory();
  
  const debtEntry = `
### ${system}
**Debt Type:** ${debtType}  
**Description:** ${description}  
**Impact:** ${impact}  
**Severity:** ${severity}  
**Mitigation Priority:** ${priority}  
**Estimated Effort:** ${estimatedEffort}

`;
  
  const sectionRegex = /(## Technical Debt Inventory[\s\S]*?)(###|---|\n\n##)/;
  content = content.replace(sectionRegex, `$1${debtEntry}$2`);
  
  fs.writeFileSync(MEMORY_PATH, content);
}

/**
 * Log debugging win
 */
export function logDebuggingWin(
  system: string,
  symptom: string,
  investigation: string,
  rootCause: string,
  fix: string,
  prevention: string,
  date: string
): void {
  let content = readMemory();
  
  const debugEntry = `
### ${system}
**Symptom:** ${symptom}  
**Investigation:** ${investigation}  
**Root Cause:** ${rootCause}  
**Fix:** ${fix}  
**Prevention:** ${prevention}  
**Date:** ${date}

`;
  
  const sectionRegex = /(## Debugging Wins[\s\S]*?)(###|---|\n\n##)/;
  content = content.replace(sectionRegex, `$1${debugEntry}$2`);
  
  fs.writeFileSync(MEMORY_PATH, content);
}

/**
 * Log performance optimization
 */
export function logPerformanceOptimization(
  component: string,
  baseline: string,
  bottleneck: string,
  optimization: string,
  result: string,
  impact: string,
  date: string
): void {
  let content = readMemory();
  
  const perfEntry = `
### ${component}
**Baseline:** ${baseline}  
**Bottleneck:** ${bottleneck}  
**Optimization:** ${optimization}  
**Result:** ${result}  
**Impact:** ${impact}  
**Date:** ${date}

`;
  
  const sectionRegex = /(## Performance Optimization Log[\s\S]*?)(###|---|\n\n##)/;
  content = content.replace(sectionRegex, `$1${perfEntry}$2`);
  
  fs.writeFileSync(MEMORY_PATH, content);
}

/**
 * Log deployment outcome
 */
export function logDeploymentOutcome(
  date: string,
  system: string,
  changes: string,
  outcome: 'Success' | 'Rollback' | 'Partial',
  issues: string,
  lessons: string,
  followUp: string
): void {
  let content = readMemory();
  
  const deployEntry = `
### ${date}
**System:** ${system}  
**Changes:** ${changes}  
**Outcome:** ${outcome}  
**Issues:** ${issues}  
**Lessons:** ${lessons}  
**Follow-up:** ${followUp}

`;
  
  const sectionRegex = /(## Deployment Outcomes[\s\S]*?)(###|---|\n\n##)/;
  content = content.replace(sectionRegex, `$1${deployEntry}$2`);
  
  fs.writeFileSync(MEMORY_PATH, content);
}

/**
 * Write session log to Forge_Sessions/
 */
export function writeSessionLog(date: string, content: string): void {
  initForgeDirectories();
  
  const fileName = `${date}.md`;
  const filePath = path.join(SESSIONS_DIR, fileName);
  
  const markdown = `---
type: session-log
area: system
status: active
tags:
  - forge
  - session-log
  - engineering
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[FORGE_MEMORY|Forge Memory]]

---

# Forge Session — ${date}

${content}

---

Created by: Forge · AI: anthropic/claude-sonnet-4-5-20250929
`;
  
  fs.writeFileSync(filePath, markdown);
}

/**
 * Get recent sessions (last N)
 */
export function getRecentSessions(n: number = 3): string[] {
  initForgeDirectories();
  
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
 * Search technical decisions by keyword
 */
export function searchDecisions(keyword: string): string[] {
  const content = readMemory();
  
  const decisionsMatch = content.match(/## Architecture Decision Log([\s\S]*?)##/);
  if (!decisionsMatch) return [];
  
  const decisions = decisionsMatch[1]
    .split('###')
    .filter(section => section.toLowerCase().includes(keyword.toLowerCase()));
  
  return decisions.map(d => `###${d}`);
}

/**
 * Get technical debt by severity
 */
export function getTechnicalDebtBySeverity(severity: 'Critical' | 'High' | 'Medium' | 'Low'): string[] {
  const content = readMemory();
  
  const debtMatch = content.match(/## Technical Debt Inventory([\s\S]*?)##/);
  if (!debtMatch) return [];
  
  const debts = debtMatch[1]
    .split('###')
    .filter(section => section.includes(`**Severity:** ${severity}`));
  
  return debts.map(d => `###${d}`);
}

/**
 * Get full context for Forge (KB + memory + recent sessions)
 */
export function getForgeContext(): {
  memory: string;
  recentSessions: string[];
} {
  return {
    memory: readMemory(),
    recentSessions: getRecentSessions(3)
  };
}
