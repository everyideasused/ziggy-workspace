#!/usr/bin/env -S npx ts-node
/**
 * atlas.ts
 * Orchestrator for Atlas agent (Construction PMO)
 * High-level PM operations, KB retrieval, lessons learned
 */

import {
  initAtlasDirectories,
  readMemory,
  logLessonLearned,
  logAHJIntelligence,
  logVendorPerformance,
  logIssueSolution,
  writeSessionLog,
  getRecentSessions,
  searchLessons,
  getAHJIntel,
  getAtlasContext
} from './atlas-memory';

import * as fs from 'fs';
import * as path from 'path';

const VAULT_PATH = process.env.VAULT_PATH || '/Volumes/ziggy/openclaw-workspace/Pinky & The Brain';
const NOTES_DIR = path.join(VAULT_PATH, 'Notes');

/**
 * Get KB note content by name
 */
export async function getKBNote(noteName: string): Promise<string | null> {
  const filePath = path.join(NOTES_DIR, `${noteName}.md`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  return fs.readFileSync(filePath, 'utf-8');
}

/**
 * Search KB by keyword
 */
export async function searchKB(keyword: string): Promise<string[]> {
  const kbFiles = [
    'Construction PM Knowledge Base',
    '01 - Real Estate Pipeline & Site Selection',
    '02 - Feasibility & Due Diligence',
    '03 - Design — SD, DD, CD',
    '04 - Entitlements & Permitting',
    '05 - Procurement & Bidding',
    '06 - Preconstruction',
    '07 - Construction Execution',
    '08 - Closeout & Turnover',
    '09 - Post-Construction & Warranty',
    '10 - Asset Stabilization & Operations',
    'AHJ Research Methodology',
    'Contract Types & Structures',
    'Financial Management & Billing',
    'Risk Management Framework',
    'Project Delivery Methods',
    'Tenant Improvement Allowances',
    'Appendix — Petroleum & Fuel Station Construction',
    'Appendix — Grocery & Supermarket Construction',
    'Appendix — Restaurant Construction',
    'Appendix — Medical, Dental & Veterinary Construction'
  ];
  
  const results: string[] = [];
  
  for (const fileName of kbFiles) {
    const filePath = path.join(NOTES_DIR, `${fileName}.md`);
    if (!fs.existsSync(filePath)) continue;
    
    const content = fs.readFileSync(filePath, 'utf-8');
    if (content.toLowerCase().includes(keyword.toLowerCase())) {
      results.push(fileName);
    }
  }
  
  return results;
}

/**
 * Identify project phase from context
 */
export async function identifyPhase(description: string): Promise<string> {
  const phases = [
    { name: 'Phase 1: Real Estate Pipeline', keywords: ['site', 'location', 'pipeline', 'selection'] },
    { name: 'Phase 2: Feasibility', keywords: ['feasibility', 'due diligence', 'proforma'] },
    { name: 'Phase 3: Design', keywords: ['design', 'sd', 'dd', 'cd', 'schematic', 'architect'] },
    { name: 'Phase 4: Permitting', keywords: ['permit', 'entitlement', 'ahj', 'zoning', 'building department'] },
    { name: 'Phase 5: Procurement', keywords: ['bid', 'procurement', 'gc selection', 'contract'] },
    { name: 'Phase 6: Preconstruction', keywords: ['preconstruction', 'mobilization', 'ntp'] },
    { name: 'Phase 7: Construction', keywords: ['construction', 'build', 'execution', 'oac'] },
    { name: 'Phase 8: Closeout', keywords: ['closeout', 'punch', 'co', 'certificate'] },
    { name: 'Phase 9: Warranty', keywords: ['warranty', 'post-construction', 'defect'] },
    { name: 'Phase 10: Stabilization', keywords: ['stabilization', 'operations', 'tenant occupancy'] }
  ];
  
  const lower = description.toLowerCase();
  
  for (const phase of phases) {
    if (phase.keywords.some(kw => lower.includes(kw))) {
      return phase.name;
    }
  }
  
  return 'Unknown phase';
}

/**
 * Log project milestone session
 */
export async function logMilestoneSession(
  date: string,
  project: string,
  milestone: string,
  decisions: string[],
  nextActions: string[]
): Promise<void> {
  const content = `
## Project: ${project}
## Milestone: ${milestone}

### Decisions Made
${decisions.map(d => `- ${d}`).join('\n')}

### Next Actions
${nextActions.map(a => `- ${a}`).join('\n')}
`;
  
  writeSessionLog(date, content);
}

/**
 * Get phase-specific KB note
 */
export async function getPhaseKB(phaseNumber: number): Promise<string | null> {
  const phaseMap: Record<number, string> = {
    1: '01 - Real Estate Pipeline & Site Selection',
    2: '02 - Feasibility & Due Diligence',
    3: '03 - Design — SD, DD, CD',
    4: '04 - Entitlements & Permitting',
    5: '05 - Procurement & Bidding',
    6: '06 - Preconstruction',
    7: '07 - Construction Execution',
    8: '08 - Closeout & Turnover',
    9: '09 - Post-Construction & Warranty',
    10: '10 - Asset Stabilization & Operations'
  };
  
  const noteName = phaseMap[phaseNumber];
  return noteName ? getKBNote(noteName) : null;
}

/**
 * Get sector-specific appendix
 */
export async function getSectorAppendix(sector: 'petroleum' | 'grocery' | 'restaurant' | 'medical'): Promise<string | null> {
  const sectorMap: Record<string, string> = {
    petroleum: 'Appendix — Petroleum & Fuel Station Construction',
    grocery: 'Appendix — Grocery & Supermarket Construction',
    restaurant: 'Appendix — Restaurant Construction',
    medical: 'Appendix — Medical, Dental & Veterinary Construction'
  };
  
  const noteName = sectorMap[sector];
  return noteName ? getKBNote(noteName) : null;
}

/**
 * Get full Atlas context (for agent system prompt injection)
 */
export async function getFullContext(): Promise<{
  memory: string;
  recentSessions: string[];
  masterKB: string | null;
}> {
  const context = getAtlasContext();
  const masterKB = await getKBNote('Construction PM Knowledge Base');
  
  return {
    ...context,
    masterKB
  };
}
