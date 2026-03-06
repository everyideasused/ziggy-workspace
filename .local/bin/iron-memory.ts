#!/usr/bin/env -S npx ts-node
/**
 * iron-memory.ts
 * Memory operations for Iron agent (Fitness Coach)
 * Read/write IRON_MEMORY.md, log workouts, track mesocycles, monitor compliance
 */

import * as fs from 'fs';
import * as path from 'path';

const VAULT_PATH = process.env.VAULT_PATH || '/Volumes/ziggy/openclaw-workspace/Pinky & The Brain';
const NOTES_DIR = path.join(VAULT_PATH, 'Notes');
const MEMORY_PATH = path.join(NOTES_DIR, 'IRON_MEMORY.md');
const SESSIONS_DIR = path.join(NOTES_DIR, 'Iron_Sessions');

/**
 * Initialize Iron directories
 */
export function initIronDirectories(): void {
  if (!fs.existsSync(SESSIONS_DIR)) {
    fs.mkdirSync(SESSIONS_DIR, { recursive: true });
  }
}

/**
 * Read IRON_MEMORY.md
 */
export function readMemory(): string {
  if (!fs.existsSync(MEMORY_PATH)) {
    throw new Error('IRON_MEMORY.md not found');
  }
  return fs.readFileSync(MEMORY_PATH, 'utf-8');
}

/**
 * Log personal record (PR)
 */
export function logPR(
  day: 'A' | 'B1' | 'B2' | 'C',
  exercise: string,
  achievement: string,
  date: string
): void {
  let content = readMemory();
  
  const prEntry = `- ${exercise}: ${achievement} (${date})`;
  
  const dayMap: Record<string, string> = {
    'A': 'Day A (Upper Push)',
    'B1': 'Day B1 (Lower - Squat Focus)',
    'B2': 'Day B2 (Lower - Hinge Focus)',
    'C': 'Day C (Upper Pull + Arms)'
  };
  
  const sectionName = dayMap[day];
  const sectionRegex = new RegExp(`(\\*\\*${sectionName}\\*\\*[\\s\\S]*?)(\\n- —|\\n\\n\\*\\*|\\n\\n###)`);
  
  const match = content.match(sectionRegex);
  if (match && match[1].includes('- —')) {
    content = content.replace(sectionRegex, `$1\n${prEntry}$2`);
    content = content.replace('- —\n- ', '- ');
  } else if (match) {
    content = content.replace(sectionRegex, `$1\n${prEntry}$2`);
  }
  
  fs.writeFileSync(MEMORY_PATH, content);
}

/**
 * Log plateau breakthrough
 */
export function logBreakthrough(
  exercise: string,
  plateau: string,
  breakthroughMethod: string,
  date: string
): void {
  let content = readMemory();
  
  const breakthroughEntry = `
**Exercise:** ${exercise}  
**Plateau:** ${plateau}  
**Breakthrough Method:** ${breakthroughMethod}  
**Date:** ${date}

`;
  
  const sectionRegex = /(### Plateau Breakthroughs[\s\S]*?)(###|---|\n\n##)/;
  content = content.replace(sectionRegex, `$1${breakthroughEntry}$2`);
  
  fs.writeFileSync(MEMORY_PATH, content);
}

/**
 * Log mesocycle assessment
 */
export function logMesocycleAssessment(params: {
  mesocycle: number;
  startDate: string;
  endDate: string;
  startingBodyweight: number;
  endingBodyweight: number;
  startingKBWeight: number;
  endingKBWeight: number;
  strengthProgress: string[];
  workoutsCompleted: number;
  proteinHitRate: number;
  waterHitRate: number;
  sleepAverage: number;
  weightChange: string;
  visualProgress: string;
  averageRPE: number;
  recoveryQuality: string;
  lessonsLearned: string[];
  programAdjustments: string[];
  date: string;
}): void {
  let content = readMemory();
  
  const assessmentEntry = `
### Mesocycle ${params.mesocycle}
**Dates:** ${params.startDate} to ${params.endDate} (4 weeks)  
**Starting Bodyweight:** ${params.startingBodyweight} lbs  
**Ending Bodyweight:** ${params.endingBodyweight} lbs  
**Starting KB Weight:** ${params.startingKBWeight} kg  
**Ending KB Weight:** ${params.endingKBWeight} kg

**Strength Progress:**
${params.strengthProgress.map(p => `- ${p}`).join('\n')}

**Compliance:**
- Workouts completed: ${params.workoutsCompleted} / 24 (goal: 22+)
- Protein hit rate: ${params.proteinHitRate} / 28 days
- Water hit rate: ${params.waterHitRate} / 28 days
- Sleep average: ${params.sleepAverage} hrs/night

**Body Composition:**
- Weight change: ${params.weightChange}
- Visual progress: ${params.visualProgress}

**Energy & Recovery:**
- Average session RPE: ${params.averageRPE}
- Recovery quality: ${params.recoveryQuality}

**Lessons Learned:**
${params.lessonsLearned.map(l => `- ${l}`).join('\n')}

**Program Adjustments for Next Mesocycle:**
${params.programAdjustments.map(a => `- ${a}`).join('\n')}

**Date:** ${params.date}

`;
  
  const sectionRegex = /(## Mesocycle Assessments[\s\S]*?)(###|---|\n\n##)/;
  content = content.replace(sectionRegex, `$1${assessmentEntry}$2`);
  
  fs.writeFileSync(MEMORY_PATH, content);
}

/**
 * Log compliance (protein, water, workouts)
 */
export function logCompliance(
  type: 'protein' | 'water' | 'workout',
  weekOf: string,
  daysHit: number
): void {
  let content = readMemory();
  
  const complianceEntry = `- Week of ${weekOf}: ${daysHit}/7 days`;
  
  let sectionName: string;
  if (type === 'protein') sectionName = 'Protein Compliance (Last 8 Weeks)';
  else if (type === 'water') sectionName = 'Water Compliance (Last 8 Weeks)';
  else sectionName = 'Workout Completion Rate (Last 8 Weeks)';
  
  const sectionRegex = new RegExp(`(### ${sectionName}[\\s\\S]*?)(\\n\\*\\*|\\n\\n###|\\n\\n##)`);
  content = content.replace(sectionRegex, `$1\n${complianceEntry}$2`);
  
  fs.writeFileSync(MEMORY_PATH, content);
}

/**
 * Log red flag and intervention
 */
export function logRedFlag(
  issue: string,
  firstNoticed: string,
  rootCause: string,
  intervention: string,
  outcome: string
): void {
  let content = readMemory();
  
  const redFlagEntry = `
### Red Flag Pattern
**Issue:** ${issue}  
**First Noticed:** ${firstNoticed}  
**Root Cause:** ${rootCause}  
**Intervention:** ${intervention}  
**Outcome:** ${outcome}

`;
  
  const sectionRegex = /(## Red Flags & Interventions[\s\S]*?)(###|---|\n\n##)/;
  content = content.replace(sectionRegex, `$1${redFlagEntry}$2`);
  
  fs.writeFileSync(MEMORY_PATH, content);
}

/**
 * Log exercise substitution
 */
export function logExerciseSubstitution(
  original: string,
  substitute: string,
  reason: string,
  date: string,
  performance: string,
  permanent: boolean
): void {
  let content = readMemory();
  
  const subEntry = `
### ${original} → ${substitute}
**Reason for Swap:** ${reason}  
**Date:** ${date}  
**Performance:** ${performance}  
**Permanent or Temporary:** ${permanent ? 'Permanent' : 'Temporary'}

`;
  
  const sectionRegex = /(## Exercise Substitutions[\s\S]*?)(###|---|\n\n##)/;
  content = content.replace(sectionRegex, `$1${subEntry}$2`);
  
  fs.writeFileSync(MEMORY_PATH, content);
}

/**
 * Log deload week
 */
export function logDeload(
  date: string,
  trigger: string,
  protocol: string,
  outcome: string
): void {
  let content = readMemory();
  
  const deloadEntry = `
### Deload Week ${date}
**Trigger:** ${trigger}  
**Protocol:** ${protocol}  
**Recovery Outcome:** ${outcome}

`;
  
  const sectionRegex = /(## Deload & Recovery Notes[\s\S]*?)(###|---|\n\n##)/;
  content = content.replace(sectionRegex, `$1${deloadEntry}$2`);
  
  fs.writeFileSync(MEMORY_PATH, content);
}

/**
 * Write session log to Iron_Sessions/
 */
export function writeSessionLog(date: string, content: string): void {
  initIronDirectories();
  
  const fileName = `${date}.md`;
  const filePath = path.join(SESSIONS_DIR, fileName);
  
  const markdown = `---
type: session-log
area: health
status: active
tags:
  - iron
  - session-log
  - fitness
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[IRON_MEMORY|Iron Memory]]

---

# Iron Session — ${date}

${content}

---

Created by: Iron · AI: anthropic/claude-sonnet-4-5-20250929
`;
  
  fs.writeFileSync(filePath, markdown);
}

/**
 * Get recent sessions (last N)
 */
export function getRecentSessions(n: number = 3): string[] {
  initIronDirectories();
  
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
 * Get full context for Iron (KB + memory + recent sessions)
 */
export function getIronContext(): {
  memory: string;
  recentSessions: string[];
} {
  return {
    memory: readMemory(),
    recentSessions: getRecentSessions(3)
  };
}
