/**
 * Cart Memory Operations
 * Shopping assistant memory management
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const MEMORY_PATH = '/Volumes/ziggy/openclaw-workspace/Pinky & The Brain/Notes/CART_MEMORY.md';
const SESSIONS_PATH = '/Volumes/ziggy/openclaw-workspace/Pinky & The Brain/Notes/Cart_Sessions';

interface PurchaseLog {
  date: string;
  item: string;
  needLevel: number;
  researched: boolean;
  boughtAt: string;
  price: number;
  satisfaction: number;
  wouldRepeat: boolean;
  notes?: string;
}

interface BrandPerformance {
  brand: string;
  category: string;
  quality: number;
  value: number;
  durability: string;
  notes?: string;
  lastUpdated: string;
}

interface DealAssessment {
  date: string;
  dealType: string;
  item: string;
  advertisedSavings: string;
  actualValue: string;
  quality: string;
  notes?: string;
}

interface PriceWatch {
  item: string;
  targetPrice: number;
  currentPrice: number;
  source: string;
  alertSet: boolean;
  notes?: string;
}

/**
 * Read CART_MEMORY.md content
 */
export function readMemory(): string {
  try {
    return readFileSync(MEMORY_PATH, 'utf-8');
  } catch {
    return '';
  }
}

/**
 * Log a purchase to calibration table
 */
export function logPurchase(
  item: string,
  needLevel: number,
  researched: boolean,
  boughtAt: string,
  price: number,
  satisfaction: number,
  wouldRepeat: boolean,
  notes?: string
): void {
  const date = new Date().toISOString().split('T')[0];
  const entry = `| ${date} | ${item} | ${needLevel} | ${researched ? 'Yes' : 'No'} | ${boughtAt} | $${price} | ${satisfaction} | ${wouldRepeat ? 'Yes' : 'No'} | ${notes || ''} |`;
  
  let content = readMemory();
  // Insert after Purchase Calibration Log table header
  const tableHeader = '| Date | Item | Need Level (1-5) | Researched? | Bought At | Price | Satisfaction (1-5) | Would Repeat? | Notes |';
  content = content.replace(tableHeader + '\n|------|------|------------------|-------------|-----------|-------|-------------------|---------------|-------|', 
    tableHeader + '\n|------|------|------------------|-------------|-----------|-------|-------------------|---------------|-------|\n' + entry);
  
  writeFileSync(MEMORY_PATH, content);
}

/**
 * Log brand performance entry
 */
export function logBrand(
  brand: string,
  category: string,
  quality: number,
  value: number,
  durability: string,
  notes?: string
): void {
  const date = new Date().toISOString().split('T')[0];
  const entry = `| ${brand} | ${category} | ${quality} | ${value} | ${durability} | ${notes || ''} | ${date} |`;
  
  let content = readMemory();
  const tableHeader = '| Brand | Category | Quality (1-5) | Value (1-5) | Durability | Notes | Last Updated |';
  content = content.replace(tableHeader + '\n|-------|----------|---------------|-------------|------------|-------|--------------|',
    tableHeader + '\n|-------|----------|---------------|-------------|------------|-------|--------------|\n' + entry);
  
  writeFileSync(MEMORY_PATH, content);
}

/**
 * Log deal quality assessment
 */
export function logDeal(
  dealType: string,
  item: string,
  advertisedSavings: string,
  actualValue: string,
  quality: string,
  notes?: string
): void {
  const date = new Date().toISOString().split('T')[0];
  const entry = `| ${date} | ${dealType} | ${item} | ${advertisedSavings} | ${actualValue} | ${quality} | ${notes || ''} |`;
  
  let content = readMemory();
  const tableHeader = '| Date | Deal Type | Item | Advertised Savings | Actual Value | Deal Quality (A-F) | Notes |';
  content = content.replace(tableHeader + '\n|------|-----------|------|-------------------|--------------|-------------------|-------|',
    tableHeader + '\n|------|-----------|------|-------------------|--------------|-------------------|-------|\n' + entry);
  
  writeFileSync(MEMORY_PATH, content);
}

/**
 * Add active price watch
 */
export function addPriceWatch(
  item: string,
  targetPrice: number,
  currentPrice: number,
  source: string,
  notes?: string
): void {
  const entry = `| ${item} | $${targetPrice} | $${currentPrice} | ${source} | ⏳ | ${notes || ''} |`;
  
  let content = readMemory();
  const tableHeader = '| Item | Target Price | Current Price | Source | Alert Set? | Notes |';
  content = content.replace(tableHeader + '\n|------|--------------|---------------|--------|------------|-------|',
    tableHeader + '\n|------|--------------|---------------|--------|------------|-------|\n' + entry);
  
  writeFileSync(MEMORY_PATH, content);
}

/**
 * Log subscription audit finding
 */
export function logSubscriptionAudit(
  service: string,
  monthly: number,
  annual: number,
  findings: string,
  actionTaken: string,
  savings: number
): void {
  const date = new Date().toISOString().split('T')[0];
  const entry = `| ${service} | $${monthly} | $${annual} | ${date} | ${findings} | ${actionTaken} | $${savings} |`;
  
  let content = readMemory();
  const tableHeader = '| Service | Monthly | Annual | Last Audit | Findings | Action Taken | Savings |';
  content = content.replace(tableHeader + '\n|---------|---------|--------|------------|----------|--------------|---------|',
    tableHeader + '\n|---------|---------|--------|------------|----------|--------------|---------|\n' + entry);
  
  writeFileSync(MEMORY_PATH, content);
}

/**
 * Create dated session log
 */
export function logSession(topic: string, keyDecision?: string): string {
  const date = new Date().toISOString().split('T')[0];
  const sessionFile = `${SESSIONS_PATH}/${date} — ${topic.replace(/[^a-zA-Z0-9]/g, ' ').trim()}.md`;
  
  const content = `---
type: meeting
area: household
status: complete
tags:
  - cart
  - session
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[CART_MEMORY|Cart Memory]]

# ${date} — ${topic}

**Key Decision:** ${keyDecision || 'TBD'}

## Research Conducted

## Options Considered

## Recommendation

## Outcome

---
Created by: Cart · AI: anthropic/claude-sonnet-4-5-20250929
`;
  
  try {
    writeFileSync(sessionFile, content);
    return sessionFile;
  } catch (e) {
    return '';
  }
}

/**
 * Get recent sessions
 */
export function getRecentSessions(limit: number = 5): Array<{date: string, file: string, topic: string}> {
  try {
    const files = readdirSync(SESSIONS_PATH)
      .filter(f => f.endsWith('.md'))
      .map(f => {
        const stat = statSync(join(SESSIONS_PATH, f));
        return { file: f, mtime: stat.mtime };
      })
      .sort((a, b) => b.mtime.getTime() - a.mtime.getTime())
      .slice(0, limit);
    
    return files.map(f => {
      const parts = f.file.replace('.md', '').split(' — ');
      return {
        date: parts[0] || '',
        file: f.file,
        topic: parts[1] || ''
      };
    });
  } catch {
    return [];
  }
}

/**
 * Aggregate full context for Cart
 */
export function getFullContext(): { memory: string; sessions: string; recentSessions: Array<{date: string, file: string, topic: string}> } {
  return {
    memory: readMemory(),
    sessions: '', // Would read all session content if needed
    recentSessions: getRecentSessions(5)
  };
}

// Export for CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case 'purchase':
      logPurchase(args[1], parseInt(args[2]), args[3] === 'true', args[4], parseFloat(args[5]), parseInt(args[6]), args[7] === 'true', args[8]);
      break;
    case 'brand':
      logBrand(args[1], args[2], parseInt(args[3]), parseInt(args[4]), args[5], args[6]);
      break;
    case 'deal':
      logDeal(args[1], args[2], args[3], args[4], args[5], args[6]);
      break;
    case 'watch':
      addPriceWatch(args[1], parseFloat(args[2]), parseFloat(args[3]), args[4], args[5]);
      break;
    case 'session':
      logSession(args[1], args[2]);
      break;
    case 'recent':
      console.log(JSON.stringify(getRecentSessions(parseInt(args[1]) || 5), null, 2));
      break;
    default:
      console.log('Commands: purchase, brand, deal, watch, session, recent');
  }
}
