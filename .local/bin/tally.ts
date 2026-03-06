#!/usr/bin/env -S npx ts-node
/**
 * tally.ts
 * Orchestrator tool for Tally (Construction Estimator agent)
 * Wires together KB access, memory, and helper functions for estimate calculations.
 */

import * as fs from 'fs';
import * as path from 'path';
import { readMemory, getTallyContext, initTallyDirectories } from './tally-memory';

// Paths
const VAULT_PATH = '/Volumes/ziggy/openclaw-workspace/Pinky & The Brain';
const NOTES_DIR = path.join(VAULT_PATH, 'Notes');

/**
 * Read a KB note by name (fuzzy match)
 */
export function readKBNote(name: string): string {
  const files = fs.readdirSync(NOTES_DIR).filter(f => f.endsWith('.md'));
  const match = files.find(f => 
    f.toLowerCase().includes(name.toLowerCase()) ||
    name.toLowerCase().includes(f.toLowerCase().replace('.md', ''))
  );
  
  if (!match) {
    throw new Error(`KB note not found: ${name}`);
  }
  
  return fs.readFileSync(path.join(NOTES_DIR, match), 'utf-8');
}

/**
 * Read master KB (Tally — Construction Estimator Knowledge Base)
 */
export function readMasterKB(): string {
  return readKBNote('Tally — Construction Estimator Knowledge Base');
}

/**
 * Search KB notes by keyword
 */
export function searchKB(keyword: string): string[] {
  const files = fs.readdirSync(NOTES_DIR)
    .filter(f => f.endsWith('.md'))
    .filter(f => {
      const content = fs.readFileSync(path.join(NOTES_DIR, f), 'utf-8');
      return content.toLowerCase().includes(keyword.toLowerCase());
    });
  
  return files;
}

/**
 * Get project type KB note by project type keyword
 */
export function getProjectTypeKB(projectType: string): string {
  const ptMap: { [key: string]: string } = {
    'ground-up': 'PT-Ground-Up-Commercial',
    'medical': 'PT-Medical-Healthcare',
    'healthcare': 'PT-Medical-Healthcare',
    'merchandising': 'PT-Merchandising-Services',
    'restaurant': 'PT-Restaurant-TI',
    'qsr': 'PT-Restaurant-TI',
    'fsr': 'PT-Restaurant-TI',
    'retail': 'PT-Retail-TI',
    'shell': 'PT-Shell-and-Core',
    'core': 'PT-Shell-and-Core'
  };
  
  for (const [key, file] of Object.entries(ptMap)) {
    if (projectType.toLowerCase().includes(key)) {
      return readKBNote(file);
    }
  }
  
  throw new Error(`Project type KB not found for: ${projectType}. Available: ground-up, medical, merchandising, restaurant, retail, shell`);
}

/**
 * Get workflow KB note by workflow keyword
 */
export function getWorkflowKB(workflow: string): string {
  const wfMap: { [key: string]: string } = {
    'bid-leveling': 'WF-Bid-Leveling',
    'change-order': 'WF-Change-Order-Review',
    'rom': 'WF-Conceptual-ROM-Budget',
    'conceptual': 'WF-Conceptual-ROM-Budget',
    'scope-gap': 'WF-Scope-Gap-Analysis',
    'tia': 'WF-TIA-and-GMP',
    'gmp': 'WF-TIA-and-GMP'
  };
  
  for (const [key, file] of Object.entries(wfMap)) {
    if (workflow.toLowerCase().includes(key)) {
      return readKBNote(file);
    }
  }
  
  throw new Error(`Workflow KB not found for: ${workflow}. Available: bid-leveling, change-order, rom, scope-gap, tia, gmp`);
}

/**
 * Get benchmark KB notes (all BM- files)
 */
export function getBenchmarkKBs(): string {
  const bmFiles = [
    'BM-Medical-and-Merchandising',
    'BM-Regional-Cost-Index',
    'BM-Restaurant-and-Retail-Benchmarks'
  ];
  
  return bmFiles.map(f => readKBNote(f)).join('\n\n---\n\n');
}

/**
 * Get risk assessment KBs (all RISK- files)
 */
export function getRiskKBs(): string {
  const riskFiles = [
    'RISK-Market-Conditions',
    'RISK-Red-Flags-and-Matrix'
  ];
  
  return riskFiles.map(f => readKBNote(f)).join('\n\n---\n\n');
}

/**
 * Get template KB by type
 */
export function getTemplateKB(templateType: string): string {
  const tplMap: { [key: string]: string } = {
    'bid-leveling': 'TPL-Bid-Leveling-and-GMP-and-Narrative',
    'gmp': 'TPL-Bid-Leveling-and-GMP-and-Narrative',
    've': 'TPL-Merchandising-and-VE',
    'value-engineering': 'TPL-Merchandising-and-VE',
    'rom': 'TPL-ROM-and-Division-Estimate',
    'division': 'TPL-ROM-and-Division-Estimate'
  };
  
  for (const [key, file] of Object.entries(tplMap)) {
    if (templateType.toLowerCase().includes(key)) {
      return readKBNote(file);
    }
  }
  
  throw new Error(`Template KB not found for: ${templateType}. Available: bid-leveling, gmp, ve, rom, division`);
}

/**
 * Calculate escalation factor
 * @param months - Number of months from estimate date to construction midpoint
 * @param annualRate - Annual escalation rate (default 4%)
 * @returns Escalation factor (e.g., 1.02 for 2% over period)
 */
export function calculateEscalation(months: number, annualRate: number = 0.04): number {
  return 1 + (annualRate * months / 12);
}

/**
 * Apply regional cost multiplier to base cost
 * @param baseCost - National average cost
 * @param multiplier - Regional multiplier from BM-Regional-Cost-Index
 * @returns Adjusted cost
 */
export function applyRegionalMultiplier(baseCost: number, multiplier: number): number {
  return baseCost * multiplier;
}

/**
 * Calculate contingency by phase
 * @param phase - Design phase (rom, sd, dd, cd, post-award)
 * @returns Contingency percentage (decimal, e.g., 0.20 for 20%)
 */
export function getContingencyByPhase(phase: string): number {
  const phaseMap: { [key: string]: number } = {
    'rom': 0.25,           // 25% for pre-design ROM
    'pre-design': 0.25,
    'sd': 0.175,           // 17.5% for schematic design
    'schematic': 0.175,
    'dd': 0.125,           // 12.5% for design development
    'design-development': 0.125,
    'cd': 0.075,           // 7.5% for 100% CDs
    'construction-documents': 0.075,
    'post-award': 0.04     // 4% for post-award change order reserve
  };
  
  for (const [key, value] of Object.entries(phaseMap)) {
    if (phase.toLowerCase().includes(key)) {
      return value;
    }
  }
  
  return 0.15; // Default 15% if phase unclear
}

/**
 * Validate MEP percentage of TI hard cost (should be 35-55%)
 * @param mepCost - Total MEP cost (plumbing + HVAC + electrical + fire suppression + fire alarm)
 * @param hardCost - Total TI hard cost
 * @returns Validation result with flag if out of range
 */
export function validateMEPPercentage(mepCost: number, hardCost: number): { 
  percentage: number; 
  isValid: boolean; 
  message: string;
} {
  const percentage = (mepCost / hardCost) * 100;
  const isValid = percentage >= 35 && percentage <= 55;
  
  let message = `MEP is ${percentage.toFixed(1)}% of TI hard cost`;
  if (!isValid) {
    if (percentage < 35) {
      message += ` — FLAG: Low (expected 35-55%). Investigate if MEP scope is complete.`;
    } else {
      message += ` — FLAG: High (expected 35-55%). Investigate if MEP is over-specified or includes unusual systems.`;
    }
  } else {
    message += ` — VALID (within expected 35-55% range)`;
  }
  
  return { percentage, isValid, message };
}

/**
 * Full context aggregation for Tally
 * Loads master KB, memory, recent sessions, and core methodology
 */
export function getTallyFullContext(): string {
  const masterKB = readMasterKB();
  const philosophy = readKBNote('01-Estimating-Philosophy');
  const moc = readKBNote('ESTIMATOR-MOC');
  const memory = readMemory();
  
  return `# TALLY FULL CONTEXT\n\n## MASTER KB\n\n${masterKB}\n\n## CORE PHILOSOPHY\n\n${philosophy}\n\n## METHOD OF CONSTRUCTION\n\n${moc}\n\n## MEMORY\n\n${memory}`;
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];

  try {
    switch (command) {
      case 'read-kb':
        if (args.length < 2) {
          console.error('Usage: tally read-kb <note-name>');
          process.exit(1);
        }
        console.log(readKBNote(args[1]));
        break;
      
      case 'master-kb':
        console.log(readMasterKB());
        break;
      
      case 'search-kb':
        if (args.length < 2) {
          console.error('Usage: tally search-kb <keyword>');
          process.exit(1);
        }
        const results = searchKB(args[1]);
        console.log(`Found ${results.length} notes:`);
        results.forEach(r => console.log(`  - ${r}`));
        break;
      
      case 'project-type':
        if (args.length < 2) {
          console.error('Usage: tally project-type <type> (ground-up, medical, merchandising, restaurant, retail, shell)');
          process.exit(1);
        }
        console.log(getProjectTypeKB(args[1]));
        break;
      
      case 'workflow':
        if (args.length < 2) {
          console.error('Usage: tally workflow <type> (bid-leveling, change-order, rom, scope-gap, tia, gmp)');
          process.exit(1);
        }
        console.log(getWorkflowKB(args[1]));
        break;
      
      case 'benchmarks':
        console.log(getBenchmarkKBs());
        break;
      
      case 'risk':
        console.log(getRiskKBs());
        break;
      
      case 'template':
        if (args.length < 2) {
          console.error('Usage: tally template <type> (bid-leveling, gmp, ve, rom, division)');
          process.exit(1);
        }
        console.log(getTemplateKB(args[1]));
        break;
      
      case 'escalation':
        if (args.length < 2) {
          console.error('Usage: tally escalation <months> [annualRate]');
          process.exit(1);
        }
        const months = parseInt(args[1]);
        const rate = args[2] ? parseFloat(args[2]) : 0.04;
        const factor = calculateEscalation(months, rate);
        console.log(`Escalation factor for ${months} months at ${(rate * 100).toFixed(1)}% annual: ${factor.toFixed(4)} (${((factor - 1) * 100).toFixed(2)}% increase)`);
        break;
      
      case 'regional':
        if (args.length < 3) {
          console.error('Usage: tally regional <baseCost> <multiplier>');
          process.exit(1);
        }
        const baseCost = parseFloat(args[1]);
        const multiplier = parseFloat(args[2]);
        const adjusted = applyRegionalMultiplier(baseCost, multiplier);
        console.log(`Base cost: $${baseCost.toLocaleString()}`);
        console.log(`Regional multiplier: ${multiplier}`);
        console.log(`Adjusted cost: $${adjusted.toLocaleString()}`);
        break;
      
      case 'contingency':
        if (args.length < 2) {
          console.error('Usage: tally contingency <phase> (rom, sd, dd, cd, post-award)');
          process.exit(1);
        }
        const contingency = getContingencyByPhase(args[1]);
        console.log(`Contingency for ${args[1]}: ${(contingency * 100).toFixed(1)}%`);
        break;
      
      case 'validate-mep':
        if (args.length < 3) {
          console.error('Usage: tally validate-mep <mepCost> <hardCost>');
          process.exit(1);
        }
        const mepCost = parseFloat(args[1]);
        const hardCost = parseFloat(args[2]);
        const validation = validateMEPPercentage(mepCost, hardCost);
        console.log(validation.message);
        if (!validation.isValid) {
          process.exit(1); // Exit with error if out of range
        }
        break;
      
      case 'context':
        console.log(getTallyFullContext());
        break;
      
      default:
        console.error('Unknown command. Available: read-kb, master-kb, search-kb, project-type, workflow, benchmarks, risk, template, escalation, regional, contingency, validate-mep, context');
        process.exit(1);
    }
  } catch (error: any) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}
