/**
 * Cart — Shopping Assistant
 * KB retrieval and shopping workflows
 */

import { readFileSync } from 'fs';
import { join } from 'path';
import { readMemory, getRecentSessions } from './cart-memory';

const VAULT_PATH = '/Volumes/ziggy/openclaw-workspace/Pinky & The Brain/Notes';

// KB module mapping
const KB_MODULES: Record<string, string> = {
  'groceries': 'Cart KB 01 — Groceries and Food.md',
  'food': 'Cart KB 01 — Groceries and Food.md',
  'travel': 'Cart KB 02 — Travel and Experiences.md',
  'flights': 'Cart KB 02 — Travel and Experiences.md',
  'hotels': 'Cart KB 02 — Travel and Experiences.md',
  'vacation': 'Cart KB 02 — Travel and Experiences.md',
  'coupons': 'Cart KB 03 — Promo Codes and Coupons.md',
  'promo': 'Cart KB 03 — Promo Codes and Coupons.md',
  'deals': 'Cart KB 03 — Promo Codes and Coupons.md',
  'subscriptions': 'Cart KB 04 — Subscriptions and Digital.md',
  'digital': 'Cart KB 04 — Subscriptions and Digital.md',
  'vehicles': 'Cart KB 05 — Vehicles.md',
  'car': 'Cart KB 05 — Vehicles.md',
  'auto': 'Cart KB 05 — Vehicles.md',
  'home-services': 'Cart KB 06 — Home Services and Contractors.md',
  'contractors': 'Cart KB 06 — Home Services and Contractors.md',
  'insurance': 'Cart KB 07 — Insurance and Financial.md',
  'financial': 'Cart KB 07 — Insurance and Financial.md',
  'education': 'Cart KB 08 — Education and Development.md',
  'courses': 'Cart KB 08 — Education and Development.md',
  'health': 'Cart KB 09 — Health and Medical.md',
  'medical': 'Cart KB 09 — Health and Medical.md',
  'real-estate': 'Cart KB 10 — Real Estate Wedding Kids Secondhand.md',
  'wedding': 'Cart KB 10 — Real Estate Wedding Kids Secondhand.md',
  'kids': 'Cart KB 10 — Real Estate Wedding Kids Secondhand.md',
  'secondhand': 'Cart KB 10 — Real Estate Wedding Kids Secondhand.md',
  'seasonal': 'Cart KB 11 — Seasonal and Luxury.md',
  'luxury': 'Cart KB 11 — Seasonal and Luxury.md'
};

/**
 * Read KB note by name
 */
export function readKB(noteName: string): string {
  try {
    return readFileSync(join(VAULT_PATH, noteName), 'utf-8');
  } catch {
    return '';
  }
}

/**
 * Get KB module by keyword
 */
export function getKBByKeyword(keyword: string): string {
  const normalized = keyword.toLowerCase().trim();
  const moduleName = KB_MODULES[normalized];
  return moduleName ? readKB(moduleName) : '';
}

/**
 * Get all KB modules for a purchase type
 */
export function getKBForPurchaseType(type: string): string[] {
  const normalized = type.toLowerCase();
  const modules: string[] = [];
  
  const typeMap: Record<string, string[]> = {
    'grocery': ['groceries'],
    'travel': ['travel'],
    'car': ['vehicles'],
    'vehicle': ['vehicles'],
    'home': ['home-services'],
    'insurance': ['insurance'],
    'education': ['education'],
    'health': ['health'],
    'medical': ['health'],
    'wedding': ['real-estate'],
    'subscription': ['subscriptions'],
    'deal': ['coupons'],
    'promo': ['coupons']
  };
  
  const keys = typeMap[normalized] || [];
  for (const key of keys) {
    const content = getKBByKeyword(key);
    if (content) modules.push(content);
  }
  
  return modules;
}

/**
 * Master KB index
 */
export function getMasterKB(): string {
  return readKB('Cart — Shopping Assistant Knowledge Base.md');
}

/**
 * Get all KB content (for comprehensive queries)
 */
export function getAllKBs(): Record<string, string> {
  return {
    master: getMasterKB(),
    groceries: readKB('Cart KB 01 — Groceries and Food.md'),
    travel: readKB('Cart KB 02 — Travel and Experiences.md'),
    coupons: readKB('Cart KB 03 — Promo Codes and Coupons.md'),
    subscriptions: readKB('Cart KB 04 — Subscriptions and Digital.md'),
    vehicles: readKB('Cart KB 05 — Vehicles.md'),
    homeServices: readKB('Cart KB 06 — Home Services and Contractors.md'),
    insurance: readKB('Cart KB 07 — Insurance and Financial.md'),
    education: readKB('Cart KB 08 — Education and Development.md'),
    health: readKB('Cart KB 09 — Health and Medical.md'),
    realEstate: readKB('Cart KB 10 — Real Estate Wedding Kids Secondhand.md'),
    seasonal: readKB('Cart KB 11 — Seasonal and Luxury.md')
  };
}

/**
 * Helper: Calculate unit price
 */
export function calculateUnitPrice(totalPrice: number, quantity: number, unit: string): string {
  const unitPrice = totalPrice / quantity;
  return `$${unitPrice.toFixed(2)} per ${unit}`;
}

/**
 * Helper: Compare deal value
 */
export function compareDealValue(regularPrice: number, salePrice: number): {
  savings: number;
  percentOff: number;
  isWorthIt: boolean;
} {
  const savings = regularPrice - salePrice;
  const percentOff = (savings / regularPrice) * 100;
  return {
    savings,
    percentOff: Math.round(percentOff),
    isWorthIt: percentOff >= 20 // Arbitrary threshold from KB
  };
}

/**
 * Helper: Subscription annual impact
 */
export function calculateSubscriptionImpact(monthly: number): {
  annual: number;
  fiveYear: number;
  opportunityCost: string;
} {
  const annual = monthly * 12;
  const fiveYear = annual * 5;
  return {
    annual,
    fiveYear,
    opportunityCost: `$${fiveYear} over 5 years`
  };
}

/**
 * Helper: Flight booking timing recommendation
 */
export function getFlightBookingAdvice(domestic: boolean): {
  bookWhen: string;
  bestDays: string[];
  avoidDays: string[];
} {
  if (domestic) {
    return {
      bookWhen: '1-3 months out, sweet spot: 6-8 weeks',
      bestDays: ['Tuesday', 'Wednesday', 'Saturday'],
      avoidDays: ['Friday', 'Sunday']
    };
  }
  return {
    bookWhen: '2-8 months out, sweet spot: 3-5 months (economy), 6-8 months (business)',
    bestDays: ['Tuesday', 'Wednesday', 'Saturday'],
    avoidDays: ['Friday', 'Sunday']
  };
}

/**
 * Full context aggregation
 */
export function getFullContext(): {
  memory: string;
  masterKB: string;
  recentSessions: Array<{date: string, file: string, topic: string}>;
} {
  return {
    memory: readMemory(),
    masterKB: getMasterKB(),
    recentSessions: getRecentSessions(5)
  };
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case 'kb':
      console.log(getKBByKeyword(args[1]));
      break;
    case 'type':
      console.log(getKBForPurchaseType(args[1]).join('\n---\n'));
      break;
    case 'unit':
      console.log(calculateUnitPrice(parseFloat(args[1]), parseFloat(args[2]), args[3]));
      break;
    case 'deal':
      console.log(compareDealValue(parseFloat(args[1]), parseFloat(args[2])));
      break;
    case 'sub':
      console.log(calculateSubscriptionImpact(parseFloat(args[1])));
      break;
    case 'flight':
      console.log(getFlightBookingAdvice(args[1] === 'domestic'));
      break;
    case 'context':
      console.log(JSON.stringify(getFullContext(), null, 2));
      break;
    default:
      console.log('Commands: kb <keyword>, type <purchase-type>, unit <price> <qty> <unit>, deal <regular> <sale>, sub <monthly>, flight <domestic|international>, context');
  }
}
