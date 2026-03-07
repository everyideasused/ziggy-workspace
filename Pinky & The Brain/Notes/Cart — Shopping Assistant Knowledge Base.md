---
type: resource
area: household
status: active
tags:
  - cart
  - agent-kb
  - shopping
  - index
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Household Hub|Household Hub]]

# Cart — Shopping Assistant Knowledge Base

Master index for the Cart shopping assistant agent. 11 knowledge base modules covering $5,000+ to $500,000+ purchase categories.

## KB Modules

| Module | Focus | Size | Key Topics |
|--------|-------|------|------------|
| [[Cart KB 01 — Groceries and Food\|01 — Groceries and Food]] | Household staples | 25 KB | Store tiers, unit pricing, loss leaders, bulk buying |
| [[Cart KB 02 — Travel and Experiences\|02 — Travel and Experiences]] | Flights, hotels, trips | 19 KB | Flight booking timing, points, fare classes, accommodation |
| [[Cart KB 03 — Promo Codes and Coupons\|03 — Promo Codes and Coupons]] | Deal hunting | 17 KB | Honey, Rakuten, RetailMeNot, stacking strategies |
| [[Cart KB 04 — Subscriptions and Digital\|04 — Subscriptions and Digital]] | Recurring services | 16 KB | Audits, cancellation scripts, annual vs monthly |
| [[Cart KB 05 — Vehicles\|05 — Vehicles]] | Cars, maintenance | 15 KB | True cost to own, negotiation, maintenance timing |
| [[Cart KB 06 — Home Services and Contractors\|06 — Home Services and Contractors]] | Bids, vetting | 13 KB | 3-bid rule, red flags, payment terms |
| [[Cart KB 07 — Insurance and Financial\|07 — Insurance and Financial]] | Policies, rates | 13 KB | Comparison shopping, coverage gaps, deductible math |
| [[Cart KB 08 — Education and Development\|08 — Education and Development]] | Courses, certifications | 11 KB | ROI analysis, free alternatives, accreditation |
| [[Cart KB 09 — Health and Medical\|09 — Health and Medical]] | Healthcare costs | 8 KB | In-network, HSA, comparison shopping |
| [[Cart KB 10 — Real Estate Wedding Kids Secondhand\|10 — Real Estate Wedding Kids Secondhand]] | Major life purchases | 16 KB | Closing costs, wedding markup, kid gear depreciation |
| [[Cart KB 11 — Seasonal and Luxury\|11 — Seasonal and Luxury]] | Timing, psychology | 9 KB | Black Friday reality, outlet myths, luxury alternatives |

## Usage by Purchase Type

| Purchase Type | Primary KB | Secondary KBs |
|---------------|------------|---------------|
| Grocery optimization | 01 | — |
| Vacation planning | 02 | 03 (deals) |
| Car purchase | 05 | 07 (insurance) |
| Home renovation | 06 | 05 (if vehicle), 07 |
| Insurance shopping | 07 | — |
| Course/certification | 08 | — |
| Medical procedure | 09 | 07 |
| Wedding planning | 10 | 03, 11 |
| Black Friday deals | 11 | 03 |
| Any purchase >$100 | 03 | Category-specific |

## Core Operating Principles

1. **Unit pricing wins** — Always compare per-unit cost (Module 01)
2. **Timing matters** — Flights 6-8 weeks, cars end-of-quarter, winter coats in March (Module 11)
3. **Stack everything** — Coupons + cashback + promo codes + credit card points (Module 03)
4. **Audit subscriptions quarterly** — $30/month = $360/year (Module 04)
5. **Three bids minimum** — Home services, contractors, major repairs (Module 06)
6. **Calculate total cost of ownership** — Not just purchase price (Modules 05, 07)

## Agent Integration

- **Primary:** Cart (shopping decisions)
- **Coordination:**
  - Sage — Grocery list integration (Module 01 groceries only)
  - Compass — Travel booking execution (Module 02)
  - Ledger — Budget impact analysis
  - Hammer — Home services contractor layer (Module 06)
  - Tally — Construction material estimating

## Memory & Learning

- Purchase calibration: Need vs. bought vs. satisfaction
- Brand performance tracking
- Deal quality assessment over time
- Budget adherence patterns
- Seasonal timing intelligence

See: [[CART_MEMORY.md]] · [[Cart Session State]]

---
Created by: Ziggy · AI: anthropic/claude-sonnet-4-5-20250929
