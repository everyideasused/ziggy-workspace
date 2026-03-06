---
type: resource
area: work
status: active
tags:
  - tally
  - estimating
  - memory
  - agent
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Work Hub|Work Hub]]

---

# 🧮 TALLY_MEMORY — Estimator Learning Log

**Last Updated:** 2026-03-05  
**Purpose:** Learning system for Tally (Construction Estimator agent)

---

## Estimate Calibration Log

Track estimate accuracy over time to continuously improve unit costs and benchmarks.

| Date | Project | Type | Phase | Estimated | GMP/Actual | Variance | Division Off | Root Cause | KB Update |
|------|---------|------|-------|-----------|------------|----------|--------------|------------|-----------|
| — | — | — | — | — | — | — | — | — | — |

**Calibration targets:**
- ROM estimates: within ±25% of GMP
- DD estimates: within ±15% of GMP
- CD estimates: within ±8% of GMP

**When variance exceeds target:**
1. Identify which division was off
2. Classify: scope miss, unit cost error, or quantity error
3. Update relevant KB benchmark or project type template
4. Log lesson learned below

---

## Regional Cost Intelligence

Track actual costs by market to refine regional multipliers.

| Date | City | State | Project Type | Division/System | Unit Cost Actual | vs. KB Benchmark | Adjustment Needed |
|------|------|-------|--------------|----------------|------------------|------------------|-------------------|
| — | — | — | — | — | — | — | — |

---

## GC & Subcontractor Pricing Patterns

Track pricing behavior by contractor to improve bid analysis.

| Date | GC/Sub | Trade/Scope | Project | Bid Amount | Estimator | Variance | Notes |
|------|--------|-------------|---------|------------|-----------|----------|-------|
| — | — | — | — | — | — | — | — |

**Patterns to watch for:**
- Consistently high/low bidders by trade
- GCs who underprice general conditions
- Subs who lowball to win then change order
- Regional specialists with better pricing

---

## Scope Gap Lessons

Common items missed in GC bids or design documents.

| Date | Project Type | Scope Gap | Cost Impact | How Caught | Prevention |
|------|--------------|-----------|-------------|------------|------------|
| — | — | — | — | — | — |

**Most common gaps (update as learned):**
- MEP permits and inspections
- Architect/engineer fees during construction
- Testing and commissioning
- Owner-furnished equipment installation labor
- Temporary power/water during construction
- Landlord coordination and access fees

---

## Value Engineering Wins

Successful cost reductions without compromising function.

| Date | Project | VE Strategy | Original Cost | VE Cost | Savings | Trade-offs |
|------|---------|-------------|---------------|---------|---------|------------|
| — | — | — | — | — | — | — |

---

## Market Conditions & Escalation

Track actual escalation rates vs. projections.

| Date | Market | Estimate Date | Bid Date | Months | Projected Escalation | Actual Escalation | Notes |
|------|--------|---------------|----------|--------|---------------------|-------------------|-------|
| — | — | — | — | — | — | — | — |

---

## Decision Patterns

Repeating decision frameworks for common estimating situations.

### When to Escalate to Opus

- Multi-building program GMP review (>$50M)
- Complex cost-benefit analysis across multiple delivery methods
- Regulatory compliance cost modeling across jurisdictions
- Full program financial reconciliation

### ROM to DD Estimate Triggers

Upgrade from ROM to division-level estimate when:
- Client ready to commit to site/building
- Design advancing to DD phase
- TIA negotiation requires detailed backup
- GC bidding begins

### Contingency Adjustments

**Increase contingency (+5-10%) when:**
- Unknown existing conditions (no invasive survey)
- Occupied building with active business
- Compressed schedule (<80% of typical duration)
- Supply chain volatility (steel, lumber, equipment lead times)
- Complex brand standards (first-time prototype)

**Decrease contingency (-3-5%) when:**
- 100% CDs with full specs
- Pre-bid site visits completed
- GC pre-construction services engaged
- Material/equipment already procured

---

## Lessons Learned

Narrative lessons from estimate reviews, post-mortems, and calibration sessions.

### 2026-03-05 — Initial Deployment

**Context:** Tally deployed as 10th agent in Nathan's system. KB includes 268 KB across 24 modules covering foundation methodology, project type benchmarks, regional data, risk assessment, templates, and workflows.

**Initial scope:**
- ROM through GMP estimates
- Bid analysis and leveling
- TIA validation
- Scope gap identification
- Value engineering support
- Change order review

**Integration points:**
- Atlas (PM layer) — estimating feeds budgeting, financial management, and OAC reporting
- Hammer (craft layer) — material knowledge, labor productivity, quality expectations
- Ziggy (orchestrator) — cross-domain coordination when estimates touch multiple agents

**Deployment time:** ~90 minutes (KB provided pre-built by Nathan)

---

## Session Index

Links to dated session logs in `Tally_Sessions/` folder (created on first session).

| Date | Session Focus | Key Estimates | Notes |
|------|---------------|---------------|-------|
| — | — | — | — |

---

Created by: Ziggy · AI: anthropic/claude-sonnet-4-5-20250929
