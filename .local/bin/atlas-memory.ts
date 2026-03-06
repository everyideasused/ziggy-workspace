#!/usr/bin/env -S npx ts-node
/**
 * atlas-memory.ts
 * Memory operations for Atlas agent
 * Read/write ATLAS_MEMORY.md, log lessons learned, track AHJ intelligence
 */

import * as fs from 'fs';
import * as path from 'path';

const VAULT_PATH = process.env.VAULT_PATH || '/Volumes/ziggy/openclaw-workspace/Pinky & The Brain';
const NOTES_DIR = path.join(VAULT_PATH, 'Notes');
const MEMORY_PATH = path.join(NOTES_DIR, 'ATLAS_MEMORY.md');
const SESSIONS_DIR = path.join(NOTES_DIR, 'Atlas_Sessions');

/**
 * Initialize Atlas directories
 */
export function initAtlasDirectories(): void {
  if (!fs.existsSync(SESSIONS_DIR)) {
    fs.mkdirSync(SESSIONS_DIR, { recursive: true });
  }
}

/**
 * Read ATLAS_MEMORY.md
 */
export function readMemory(): string {
  if (!fs.existsSync(MEMORY_PATH)) {
    throw new Error('ATLAS_MEMORY.md not found');
  }
  return fs.readFileSync(MEMORY_PATH, 'utf-8');
}

/**
 * Append to a section in ATLAS_MEMORY.md
 */
export function appendToSection(section: string, line: string): void {
  let content = readMemory();
  
  // Find section
  const sectionRegex = new RegExp(`(## ${section}[\\s\\S]*?)(\\n- —|\\n\\n##|\\n\\n---|\$)`);
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
 * Log lesson learned
 */
export function logLessonLearned(
  phase: string,
  project: string,
  issue: string,
  lesson: string,
  date: string
): void {
  const line = `[${project}/${phase}] — ${issue} → ${lesson} (${date})`;
  
  // Determine section based on phase
  let section: string;
  if (phase.match(/Phase [1-3]|Design|Feasibility|Real Estate/i)) {
    section = 'Phase 1-3: Pre-Design & Design';
  } else if (phase.match(/Phase 4|Permit|Entitlement/i)) {
    section = 'Phase 4: Entitlements & Permitting';
  } else if (phase.match(/Phase [5-6]|Procurement|Preconstruction/i)) {
    section = 'Phase 5-6: Procurement & Preconstruction';
  } else if (phase.match(/Phase 7|Construction Execution/i)) {
    section = 'Phase 7: Construction Execution';
  } else {
    section = 'Phase 8-10: Closeout, Warranty & Stabilization';
  }
  
  appendToSection(section, line);
}

/**
 * Log AHJ intelligence
 */
export function logAHJIntelligence(
  city: string,
  state: string,
  jurisdictionType: string,
  timeline: string,
  requirements: string[],
  quirks: string[],
  date: string
): void {
  let content = readMemory();
  
  const ahjEntry = `
### ${city}, ${state}
**Jurisdiction Type:** ${jurisdictionType}  
**Typical Timeline:** ${timeline}  
**Key Requirements:**
${requirements.map(r => `- ${r}`).join('\n')}

**Quirks / Notes:**
${quirks.map(q => `- ${q}`).join('\n')}

**Last Updated:** ${date}

`;
  
  // Find AHJ Intelligence Database section and append
  const sectionRegex = /(## AHJ Intelligence Database[\s\S]*?)(### \[|---|\n\n##)/;
  content = content.replace(sectionRegex, `$1${ahjEntry}$2`);
  
  fs.writeFileSync(MEMORY_PATH, content);
}

/**
 * Log vendor performance
 */
export function logVendorPerformance(
  vendorType: 'GC' | 'Architect' | 'Consultant',
  name: string,
  projects: string[],
  performance: string,
  strengths: string[],
  watchItems: string[]
): void {
  let content = readMemory();
  
  const vendorEntry = `
**${name}**
- **Projects worked:** ${projects.join(', ')}
- **Performance:** ${performance}
- **Strengths:** ${strengths.join('; ')}
- **Watch items:** ${watchItems.join('; ')}

`;
  
  let section: string;
  if (vendorType === 'GC') section = 'General Contractors';
  else if (vendorType === 'Architect') section = 'Architects';
  else section = 'Specialty Consultants';
  
  const sectionRegex = new RegExp(`(### ${section}[\\s\\S]*?)(\\n###|\\n\\n##|\\n\\n---)`);
  content = content.replace(sectionRegex, `$1${vendorEntry}$2`);
  
  fs.writeFileSync(MEMORY_PATH, content);
}

/**
 * Log common issue & solution
 */
export function logIssueSolution(
  category: 'Permitting Delays' | 'Design Coordination Gaps' | 'GC Change Order Management' | 'TIA Budget Reconciliation',
  issue: string,
  rootCause: string,
  solution: string,
  outcome: string
): void {
  let content = readMemory();
  
  const entryText = `
**Issue:** ${issue}  
**Root Cause:** ${rootCause}  
**Solution Applied:** ${solution}  
**Outcome:** ${outcome}

`;
  
  const sectionRegex = new RegExp(`(### ${category}[\\s\\S]*?)(\\n###|\\n\\n##|\\n\\n---)`);
  content = content.replace(sectionRegex, `$1${entryText}$2`);
  
  fs.writeFileSync(MEMORY_PATH, content);
}

/**
 * Write session log to Atlas_Sessions/
 */
export function writeSessionLog(date: string, content: string): void {
  initAtlasDirectories();
  
  const fileName = `${date}.md`;
  const filePath = path.join(SESSIONS_DIR, fileName);
  
  const markdown = `---
type: session-log
area: work
status: active
tags:
  - atlas
  - session-log
  - construction
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[ATLAS_MEMORY|Atlas Memory]]

---

# Atlas Session — ${date}

${content}

---

Created by: Atlas · AI: anthropic/claude-sonnet-4-5-20250929
`;
  
  fs.writeFileSync(filePath, markdown);
}

/**
 * Get recent sessions (last N)
 */
export function getRecentSessions(n: number = 3): string[] {
  initAtlasDirectories();
  
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
 * Search lessons learned by keyword
 */
export function searchLessons(keyword: string): string[] {
  const content = readMemory();
  
  // Extract lessons learned section
  const lessonsMatch = content.match(/## Lessons Learned Log([\s\S]*?)##/);
  if (!lessonsMatch) return [];
  
  const lessons = lessonsMatch[1]
    .split('\n')
    .filter(line => line.startsWith('- ') && line.toLowerCase().includes(keyword.toLowerCase()));
  
  return lessons.map(l => l.replace('- ', ''));
}

/**
 * Get AHJ intelligence for a jurisdiction
 */
export function getAHJIntel(city: string, state?: string): string | null {
  const content = readMemory();
  
  const searchTerm = state ? `${city}, ${state}` : city;
  const regex = new RegExp(`### ${searchTerm}([\\s\\S]*?)(?=###|##|---|\$)`);
  const match = content.match(regex);
  
  return match ? match[0] : null;
}

/**
 * Get full context for Atlas (KB + memory + recent sessions)
 */
export function getAtlasContext(): {
  memory: string;
  recentSessions: string[];
} {
  return {
    memory: readMemory(),
    recentSessions: getRecentSessions(3)
  };
}
