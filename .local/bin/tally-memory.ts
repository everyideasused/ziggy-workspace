#!/usr/bin/env -S npx ts-node
/**
 * tally-memory.ts
 * Memory operations for Tally (Construction Estimator agent)
 * Handles estimate calibration, regional cost intelligence, GC pricing patterns,
 * scope gap lessons, VE wins, market conditions, and session logging.
 */

import * as fs from 'fs';
import * as path from 'path';

// Paths
const VAULT_PATH = '/Volumes/ziggy/openclaw-workspace/Pinky & The Brain';
const MEMORY_PATH = path.join(VAULT_PATH, 'Notes', 'TALLY_MEMORY.md');
const SESSIONS_DIR = path.join(VAULT_PATH, 'Notes', 'Tally_Sessions');

/**
 * Initialize directories for Tally
 */
export function initTallyDirectories(): void {
  if (!fs.existsSync(SESSIONS_DIR)) {
    fs.mkdirSync(SESSIONS_DIR, { recursive: true });
  }
}

/**
 * Read TALLY_MEMORY.md
 */
export function readMemory(): string {
  if (!fs.existsSync(MEMORY_PATH)) {
    throw new Error('TALLY_MEMORY.md not found');
  }
  return fs.readFileSync(MEMORY_PATH, 'utf-8');
}

/**
 * Append a line to a specific section in TALLY_MEMORY.md
 */
export function appendToSection(section: string, line: string): void {
  const memory = readMemory();
  const sectionHeader = `## ${section}`;
  
  if (!memory.includes(sectionHeader)) {
    throw new Error(`Section "${section}" not found in TALLY_MEMORY.md`);
  }

  // Find the section and append after the table header
  const lines = memory.split('\n');
  let inSection = false;
  let insertIndex = -1;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith(`## ${section}`)) {
      inSection = true;
    } else if (inSection && lines[i].startsWith('## ')) {
      // Found next section, insert before it
      insertIndex = i;
      break;
    }
  }

  if (insertIndex === -1) {
    insertIndex = lines.length; // Append to end
  }

  lines.splice(insertIndex, 0, line);
  fs.writeFileSync(MEMORY_PATH, lines.join('\n'), 'utf-8');
}

/**
 * Log estimate calibration entry
 */
export function logEstimateCalibration(
  project: string,
  type: string,
  phase: string,
  estimated: string,
  gmpActual: string,
  variance: string,
  divisionOff: string,
  rootCause: string,
  kbUpdate: string
): void {
  const date = new Date().toISOString().split('T')[0];
  const line = `| ${date} | ${project} | ${type} | ${phase} | ${estimated} | ${gmpActual} | ${variance} | ${divisionOff} | ${rootCause} | ${kbUpdate} |`;
  appendToSection('Estimate Calibration Log', line);
}

/**
 * Log regional cost intelligence entry
 */
export function logRegionalCost(
  city: string,
  state: string,
  projectType: string,
  divisionSystem: string,
  unitCostActual: string,
  vsBenchmark: string,
  adjustment: string
): void {
  const date = new Date().toISOString().split('T')[0];
  const line = `| ${date} | ${city} | ${state} | ${projectType} | ${divisionSystem} | ${unitCostActual} | ${vsBenchmark} | ${adjustment} |`;
  appendToSection('Regional Cost Intelligence', line);
}

/**
 * Log GC/subcontractor pricing pattern
 */
export function logGCPricing(
  gcSub: string,
  tradeScope: string,
  project: string,
  bidAmount: string,
  estimator: string,
  variance: string,
  notes: string
): void {
  const date = new Date().toISOString().split('T')[0];
  const line = `| ${date} | ${gcSub} | ${tradeScope} | ${project} | ${bidAmount} | ${estimator} | ${variance} | ${notes} |`;
  appendToSection('GC & Subcontractor Pricing Patterns', line);
}

/**
 * Log scope gap lesson
 */
export function logScopeGap(
  projectType: string,
  scopeGap: string,
  costImpact: string,
  howCaught: string,
  prevention: string
): void {
  const date = new Date().toISOString().split('T')[0];
  const line = `| ${date} | ${projectType} | ${scopeGap} | ${costImpact} | ${howCaught} | ${prevention} |`;
  appendToSection('Scope Gap Lessons', line);
}

/**
 * Log value engineering win
 */
export function logVEWin(
  project: string,
  veStrategy: string,
  originalCost: string,
  veCost: string,
  savings: string,
  tradeoffs: string
): void {
  const date = new Date().toISOString().split('T')[0];
  const line = `| ${date} | ${project} | ${veStrategy} | ${originalCost} | ${veCost} | ${savings} | ${tradeoffs} |`;
  appendToSection('Value Engineering Wins', line);
}

/**
 * Log market conditions & escalation data
 */
export function logMarketConditions(
  market: string,
  estimateDate: string,
  bidDate: string,
  months: number,
  projectedEscalation: string,
  actualEscalation: string,
  notes: string
): void {
  const date = new Date().toISOString().split('T')[0];
  const line = `| ${date} | ${market} | ${estimateDate} | ${bidDate} | ${months} | ${projectedEscalation} | ${actualEscalation} | ${notes} |`;
  appendToSection('Market Conditions & Escalation', line);
}

/**
 * Append a lesson learned narrative entry
 */
export function logLessonLearned(title: string, content: string): void {
  const date = new Date().toISOString().split('T')[0];
  const entry = `\n### ${date} — ${title}\n\n${content}\n`;
  appendToSection('Lessons Learned', entry);
}

/**
 * Write a session log to Tally_Sessions/ folder
 */
export function writeSessionLog(date: string, content: string): void {
  initTallyDirectories();
  const sessionPath = path.join(SESSIONS_DIR, `${date}.md`);
  
  const frontmatter = `---
type: session-log
area: work
status: active
tags:
  - tally
  - session-log
  - estimating
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Work Hub|Work Hub]]

---

# Tally Session — ${date}

`;

  fs.writeFileSync(sessionPath, frontmatter + content, 'utf-8');
}

/**
 * Get recent session logs (last N)
 */
export function getRecentSessions(n: number = 3): string[] {
  initTallyDirectories();
  const files = fs.readdirSync(SESSIONS_DIR)
    .filter(f => f.endsWith('.md'))
    .sort()
    .reverse()
    .slice(0, n);
  
  return files.map(f => fs.readFileSync(path.join(SESSIONS_DIR, f), 'utf-8'));
}

/**
 * Full context aggregation (memory + recent sessions)
 */
export function getTallyContext(): string {
  const memory = readMemory();
  const sessions = getRecentSessions(3);
  
  return `# TALLY MEMORY\n\n${memory}\n\n# RECENT SESSIONS (Last 3)\n\n${sessions.join('\n\n---\n\n')}`;
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];

  try {
    switch (command) {
      case 'init':
        initTallyDirectories();
        console.log('Tally directories initialized');
        break;
      
      case 'read':
        console.log(readMemory());
        break;
      
      case 'context':
        console.log(getTallyContext());
        break;
      
      case 'log-calibration':
        if (args.length < 9) {
          console.error('Usage: tally-memory log-calibration <project> <type> <phase> <estimated> <gmpActual> <variance> <divisionOff> <rootCause> <kbUpdate>');
          process.exit(1);
        }
        logEstimateCalibration(args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]);
        console.log('Calibration entry logged');
        break;
      
      case 'log-regional':
        if (args.length < 8) {
          console.error('Usage: tally-memory log-regional <city> <state> <projectType> <divisionSystem> <unitCostActual> <vsBenchmark> <adjustment>');
          process.exit(1);
        }
        logRegionalCost(args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
        console.log('Regional cost entry logged');
        break;
      
      case 'log-gc-pricing':
        if (args.length < 8) {
          console.error('Usage: tally-memory log-gc-pricing <gcSub> <tradeScope> <project> <bidAmount> <estimator> <variance> <notes>');
          process.exit(1);
        }
        logGCPricing(args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
        console.log('GC pricing entry logged');
        break;
      
      case 'log-scope-gap':
        if (args.length < 6) {
          console.error('Usage: tally-memory log-scope-gap <projectType> <scopeGap> <costImpact> <howCaught> <prevention>');
          process.exit(1);
        }
        logScopeGap(args[1], args[2], args[3], args[4], args[5]);
        console.log('Scope gap logged');
        break;
      
      case 'log-ve':
        if (args.length < 7) {
          console.error('Usage: tally-memory log-ve <project> <veStrategy> <originalCost> <veCost> <savings> <tradeoffs>');
          process.exit(1);
        }
        logVEWin(args[1], args[2], args[3], args[4], args[5], args[6]);
        console.log('VE win logged');
        break;
      
      case 'log-market':
        if (args.length < 8) {
          console.error('Usage: tally-memory log-market <market> <estimateDate> <bidDate> <months> <projectedEsc> <actualEsc> <notes>');
          process.exit(1);
        }
        logMarketConditions(args[1], args[2], args[3], parseInt(args[4]), args[5], args[6], args[7]);
        console.log('Market conditions logged');
        break;
      
      case 'log-lesson':
        if (args.length < 3) {
          console.error('Usage: tally-memory log-lesson <title> <content>');
          process.exit(1);
        }
        logLessonLearned(args[1], args.slice(2).join(' '));
        console.log('Lesson learned logged');
        break;
      
      case 'write-session':
        if (args.length < 3) {
          console.error('Usage: tally-memory write-session <YYYY-MM-DD> <content>');
          process.exit(1);
        }
        writeSessionLog(args[1], args.slice(2).join(' '));
        console.log(`Session log written: ${args[1]}`);
        break;
      
      case 'recent-sessions':
        const n = args[1] ? parseInt(args[1]) : 3;
        const sessions = getRecentSessions(n);
        sessions.forEach((s, i) => {
          console.log(`\n=== SESSION ${i + 1} ===\n${s}`);
        });
        break;
      
      default:
        console.error('Unknown command. Available: init, read, context, log-calibration, log-regional, log-gc-pricing, log-scope-gap, log-ve, log-market, log-lesson, write-session, recent-sessions');
        process.exit(1);
    }
  } catch (error: any) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}
