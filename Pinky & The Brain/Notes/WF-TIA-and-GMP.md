---
type: resource
area: work
status: active
tags:
  - tally
  - estimating
  - construction-kb
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Work Hub|Work Hub]] · [[Tally — Construction Estimator Knowledge Base|Tally KB]]

---

# TIA Validation & GMP Review Workflows

---

## WF-TIA-Validation — Tenant Improvement Allowance Review

### Purpose
Validate whether the negotiated TIA is sufficient to fund the tenant's build-out, and identify the gap or surplus to inform deal negotiation.

### Step-by-Step Process

**Step 1: Establish Shell Delivery Condition**
Document exactly what the landlord is delivering:
- [ ] Demised space (walls, columns, slab) — **almost always included**
- [ ] Storefront (type: open, framed, or full glass) — **varies**
- [ ] Restrooms (existing, rough-in only, or none) — **varies**
- [ ] HVAC stub-in (tons delivered, location) — **varies widely**
- [ ] Electrical stub-in (amps, panel location) — **varies**
- [ ] Plumbing stub-in (locations, sizes) — **varies**
- [ ] Fire suppression rough-in — **sometimes**
- [ ] Demising walls (finished or just stud) — **varies**

**Common Shell Delivery Standards:**
| Delivery Standard | What's Included |
|---|---|
| "Warm dark shell" | Slab, structure, roof, exterior walls, HVAC rough-in, electrical stub-in at panel |
| "Cold dark shell" | Slab, structure, roof, exterior walls — NO MEP |
| "Vanilla box" | Warm shell + interior finish (paint, ceiling, basic flooring, restrooms) |
| "As-is" | Existing condition of previous tenant — inspect carefully |

**Step 2: Scope the Tenant's Work**
Using the CSI checklist and project type guide, build a complete scope of tenant's work:
- Everything NOT provided by landlord
- Brand standards and upgrades above landlord standard
- Specialty items (drive-thru, kitchen, bar, etc.)
- Owner-furnished equipment infrastructure

**Step 3: Estimate Tenant's Scope**
Run a conceptual estimate using:
- SF benchmarks from project type notes
- Breakdown by CSI division
- Apply regional multiplier
- Apply appropriate contingency

**Step 4: Calculate TIA Gap/Surplus**

```
TIA Amount:                    $_________
Estimated Tenant Hard Cost:    $_________
  + Soft Costs (permits, etc): $_________
  + GC Overhead & Profit:      $_________
= Total Tenant Cost:           $_________

TIA Coverage:                  $_________
GAP (or surplus):              $_________
```

**Step 5: Identify Negotiation Levers**
If gap exists:
- Increase TIA in lease negotiation
- Request additional landlord work (HVAC, plumbing rough-in)
- Value-engineer tenant scope
- Negotiate free rent to offset gap
- Phase construction (landlord work in year 1, tenant upgrades later)

---

## WF-GMP-Review — GC GMP Audit Process

### Purpose
Verify that the GC's Guaranteed Maximum Price is complete, accurate, and reasonably priced before execution.

### Prerequisites
- 100% CDs (or near-complete)
- GC's GMP package (schedule of values, subcontractor bid tabs, clarifications, exclusions list)
- GC's general conditions breakdown
- Estimator's independent estimate

### Step 1: Scope Completeness Review

Compare GC's scope against estimator's independent scope checklist:
- [ ] All CSI divisions accounted for
- [ ] All brand standards included
- [ ] All site work included
- [ ] All utility connections included (or explicitly excluded)
- [ ] All permit fees accounted for (GC scope or owner direct)
- [ ] All specialty items (drive-thru, kitchen, bar) included
- [ ] All owner-furnished equipment infra included

**Red flag:** Anything "by others" or "TBD" without a corresponding allowance

### Step 2: Exclusions Scrub

Every GC exclusion represents a risk. For each exclusion:
1. Who is responsible?
2. What is the estimated cost?
3. Is it in another contract?
4. If unassigned — add to owner's contingency

**Common GC Exclusions to Watch:**
- Permit fees
- Utility connection fees
- Testing and balancing
- Special inspections
- Commissioning
- Hazardous material abatement (if unknown)
- Structural engineering changes from shop drawing review
- Unforeseen conditions below slab
- Owner-furnished equipment final connections (sometimes)
- IT/AV/POS (sometimes)
- Exterior signage (almost always)

### Step 3: Allowance Review

Allowances are budget placeholders for undefined scope — they are NOT fixed costs:
- List all allowances in the GMP
- Assess whether each allowance is realistic
- Flag low allowances that will likely be exceeded
- Total allowance exposure = risk to owner budget

### Step 4: General Conditions Audit

GC general conditions should be itemized. Benchmark:
- 8–15% of direct cost is normal
- >15% = question staffing levels and duration
- <8% = verify scope includes required oversight

**GC General Conditions Checklist:**
- [ ] Superintendent (name, hours, rate)
- [ ] Project manager (field vs. office allocation)
- [ ] Project engineer / estimator support
- [ ] Administrative / document control
- [ ] Site trailer or field office
- [ ] Temporary utilities (power, water, phone/data)
- [ ] Temporary fencing and security
- [ ] Temporary signage
- [ ] Dumpsters and waste removal
- [ ] Cleaning (progress and final)
- [ ] Safety equipment and program
- [ ] Quality control program
- [ ] As-built drawings
- [ ] Schedule updates

### Step 5: Markup Analysis

Compare GC markup to market benchmarks:

| Item | Low | High | GC Proposed | Variance |
|---|---|---|---|---|
| Overhead | 3% | 7% | ___% | ___% |
| Profit | 3% | 8% | ___% | ___% |
| Bonds (if required) | 0.5% | 2% | ___% | ___% |
| Insurance | 1% | 2% | ___% | ___% |

**Note:** GC markup should be evaluated against project size and complexity. Smaller, complex projects = higher justified markup.

### Step 6: Subcontractor Bid Leveling

For major trades (MEP, concrete, framing), review sub bid tabs:
- How many bids received per trade?
- Are all subs bidding the same scope?
- Is lowest bidder an apparent scope miss or legitimate?
- Are mid-range bids consistent?

**Standard Bid Leveling Matrix:**

| Trade | Sub A | Sub B | Sub C | Leveled Scope | Recommended |
|---|---|---|---|---|---|
| Plumbing | $XXX | $XXX | $XXX | $XXX | Sub B |
| HVAC | $XXX | $XXX | $XXX | $XXX | Sub A |
| Electrical | $XXX | $XXX | $XXX | $XXX | Sub C |

### Step 7: Schedule Crosscheck

Does the schedule support the GMP?
- Too short a schedule = crew overtime or compression risk = change orders
- General conditions should match schedule duration
- Lead times for long-lead items (gear, RTUs, switchgear) — are they accounted for?

**Current Lead Times (2024–2025):**
| Item | Typical Lead Time |
|---|---|
| Electrical switchgear | 30–52 weeks |
| Medium-voltage transformers | 40–80 weeks |
| RTUs (commercial, >10 ton) | 16–30 weeks |
| Fire alarm panels | 8–20 weeks |
| Elevator equipment | 20–40 weeks |
| Custom millwork | 8–16 weeks |
| Structural steel | 8–16 weeks |

**Any long-lead item not ordered at GMP execution = schedule risk = potential cost impact**

### Step 8: Final GMP Assessment

Summarize findings:
1. Completeness score (% of scope covered)
2. Total exclusions exposure
3. Allowance risk
4. Markup reasonableness
5. Schedule risk
6. Recommended adjustments or owner contingency additions

**GMP Audit Output Format:**

```
GMP AUDIT SUMMARY
Project: _______________ | Date: _______________
GC: ___________________ | GMP Amount: $_________

SCOPE COMPLETENESS: [Complete / Minor Gaps / Major Gaps]
Missing scope items: ________________________
Estimated value: $__________

EXCLUSION EXPOSURE:
Listed exclusions with no home: $__________
Allowances at risk: $__________
Total unbudgeted exposure: $__________

MARKUP ANALYSIS: [Below Market / Market / Above Market]
Recommended adjustment: $__________

SCHEDULE RISK: [Low / Medium / High]
Long-lead items not ordered: ________________

RECOMMENDED OWNER CONTINGENCY: $__________

OVERALL ASSESSMENT: [Approve / Approve with Conditions / Reject]
Conditions: ________________________________
```

---

## WF-Value-Engineering — VE Methodology

### Purpose
Identify cost reductions that preserve function and program requirements while reducing construction cost.

### VE Principles
- VE is NOT scope reduction — it is finding equivalent value at lower cost
- Best VE happens at design development, not after GMP
- Every VE item needs: description, cost impact, scope impact, timeline to decide

### VE Library by Division

**Division 03 — Concrete**
- Polished concrete floor instead of tile: Save $8–$15/SF
- Reduce slab thickness where structurally permissible

**Division 06 — Millwork**
- Plastic laminate instead of painted MDF: Save $50–$150/LF
- Reduce custom millwork; use standard modular casework
- Simplify profile details

**Division 07 — Roofing**
- TPO vs. built-up: Save $2–$4/SF
- Reduce R-value to code minimum (evaluate vs. energy savings)

**Division 08 — Openings**
- Reduce number of entry doors
- Standard aluminum vs. thermally broken: Save $15–$30/SF of storefront
- Hollow metal interior doors vs. wood: Save $300–$800/door

**Division 09 — Finishes**
- Open-to-structure ceiling vs. ACT vs. GWB: Evaluate — open may save $2–$5/SF
- VCT vs. LVT: Save $3–$6/SF
- Reduce accent tile area; increase paint
- Simplify restroom tile design

**Division 23 — HVAC**
- Package RTUs vs. split system (typically RTU wins on cost)
- Reduce BAS complexity for smaller projects
- Simplify duct distribution routing

**Division 26 — Electrical**
- Reduce lighting levels to code minimum
- Postpone lighting controls (ASHRAE 90.1 may require — verify)
- Standard LED fixtures vs. designer

**Structural**
- Open-web joists vs. wide flange beams (if applicable)
- Reduce structural upgrade scope for RTUs (coordinate with mechanical)

### VE Log Format

| # | Division | VE Item | Cost Savings | Scope Impact | Decision Needed By | Status |
|---|---|---|---|---|---|---|
| 1 | 09 | VCT vs. LVT flooring | $15,000 | Minor — different product | 30 days before flooring install | Open |

---

*Tags: #TIA #GMP #VE #workflow #estimating*
*Links: [[ESTIMATOR-MOC]] | [[01-Estimating-Philosophy]] | [[RISK-Red-Flags]] | [[TPL-GMP-Checklist]]*
