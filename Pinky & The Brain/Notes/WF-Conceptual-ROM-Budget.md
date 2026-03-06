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

# WF-Conceptual-ROM-Budget — ROM & SD Estimate Workflows

---

## WF-Conceptual-ROM-Budget

### What Is a ROM and When Do You Use It?

A **ROM (Rough Order of Magnitude)** is a rapid, benchmark-based estimate used when:
- Evaluating site feasibility for a new location
- Making a go/no-go decision on a deal
- Informing lease negotiation and TIA ask
- Setting initial project budget before design begins
- Comparing multiple sites

**Accuracy expectation: ±25–40%**

This is not a flaw — it is appropriate for the information available. Always communicate the range explicitly.

---

### ROM Estimate: Step-by-Step

**Time to complete:** 30 minutes (experienced estimator with this KB) to 2 hours (detailed parametric)

#### Step 1: Confirm Minimum Inputs

You cannot produce a defensible ROM without:
- [ ] Project type (restaurant, retail, medical, etc.)
- [ ] Square footage (GFA or estimated program)
- [ ] Location (city/state for regional index)
- [ ] Shell delivery condition (cold dark shell? warm shell? vanilla box? as-is?)
- [ ] Approximate schedule (to apply escalation)

If you don't have these — ask. Don't estimate.

#### Step 2: Select Benchmark

From [[ESTIMATOR-MOC]] Quick Reference Table, select the appropriate $/SF benchmark range:
- Use the **mid-point** as your central estimate
- Use **low–high range** to establish accuracy bounds
- Adjust for:
  - Spec level (above or below average brand standards?)
  - Shell delivery condition (warm shell: subtract $20–$40/SF vs. cold shell)
  - Known site conditions (existing conditions requiring demo or remediation)

#### Step 3: Apply Regional Multiplier

From [[BM-Regional-Cost-Index]]:
```
Adjusted $/SF = Benchmark $/SF × Regional Multiplier
Example: $230/SF (QSR) × 1.35 (Boston) = $311/SF
```

#### Step 4: Calculate Hard Cost

```
Hard Cost = Adjusted $/SF × GFA
Example: $311/SF × 2,800 SF = $870,800
```

#### Step 5: Add Site-Specific Adjustments

For anything not covered in the $/SF benchmark:
- Drive-thru (if not in benchmark): +$100,000–$350,000
- In-ground grease interceptor (if not standard): +$15,000–$40,000
- Utility connections (estimate or research): +$50,000–$150,000
- Unusual demo or existing conditions: add allowance

#### Step 6: Apply Contingency

| Phase | Rate |
|---|---|
| ROM (conceptual) | 20–30% |

```
Contingency = Hard Cost × Contingency %
Example: $870,800 × 25% = $217,700
```

#### Step 7: Apply Escalation

From [[BM-Regional-Cost-Index]] escalation methodology:
```
Months from estimate to construction midpoint: ___
Annual escalation rate: 4% (baseline 2024–2025)
Escalation factor = 1 + (0.04 × months/12)
Escalated cost = (Hard Cost + Contingency) × Escalation factor
```

#### Step 8: Add Soft Costs (if total project budget needed)

| Item | % of Hard Cost | Notes |
|---|---|---|
| Permits | 0.5–2% | Jurisdiction dependent |
| Testing & inspections | 0.5–1.5% | |
| A/E (if applicable) | 3–8% | Full service vs. brand prototype |
| Owner PM | 1–3% | If not in-house |
| Utility connection fees | Varies | Budget $50K–$200K; verify with utility |

#### Step 9: State Your Assumptions and Exclusions

**Required assumptions to document:**
1. Delivery condition assumed ([warm shell / cold shell / as-is])
2. Regional cost index applied ([city], [multiplier])
3. Brand standard level assumed ([standard / premium / custom])
4. Drive-thru scope ([included / excluded / what's included])
5. FF&E ([excluded — by owner])
6. Signage ([excluded — by owner or sign contractor])
7. Utility connection fees ([excluded / estimated allowance of $X])
8. Escalation applied ([months], [rate])
9. Contingency rationale ([phase], [specific risks])

---

### ROM Output Template

```
ROM ESTIMATE
─────────────────────────────────────────────────────
Project:         [Name / Client]
Type:            [QSR / Retail / Medical / etc.]
Location:        [City, State]
Date:            [Date]
Prepared by:     @estimator
Phase:           Pre-Design / ROM
Accuracy:        ±25–35%

SCOPE BASIS:
[2–3 sentence description of what is included]

────────────────────────────────────
HARD COST ESTIMATE
────────────────────────────────────
Building TI (X,XXX SF × $XXX/SF):      $XXX,XXX
Site-specific additions:
  - [Item 1]:                           $XX,XXX
  - [Item 2]:                           $XX,XXX
  Subtotal:                             $XX,XXX

DIRECT COST SUBTOTAL:                   $XXX,XXX
Contingency (XX%):                      $XX,XXX
Escalation (XX%, X months):             $XX,XXX
────────────────────────────────────
HARD COST TOTAL:                        $XXX,XXX
Per SF:                                 $XXX/SF

SOFT COSTS (if applicable):
  Permits / fees:                       $XX,XXX
  Testing / inspection:                 $XX,XXX
  Utility connection (estimate):        $XX,XXX
SOFT COST TOTAL:                        $XX,XXX

════════════════════════════════════
TOTAL PROJECT BUDGET:                   $X,XXX,XXX
Range (±30%):            $XXX,XXX – $X,XXX,XXX
════════════════════════════════════

ASSUMPTIONS:
1. [Assumption 1]
2. [Assumption 2]
...

EXCLUSIONS:
1. FF&E / Owner-furnished equipment
2. Signage
3. [Other exclusions]

WHAT WOULD MATERIALLY CHANGE THIS ESTIMATE:
+ [Higher cost risk]: [description]
- [Lower cost opportunity]: [description]

Next step to refine accuracy: [SD drawings / conditions survey / utility quotes]
```

---

## WF-Schematic-Design-Estimate

### When to Use

SD estimates are produced when:
- 30–60% construction documents are available
- Program is defined; major decisions made; details still pending
- Moving from ROM to a basis for lease/deal finalization
- Updating ROM with actual design information

**Accuracy expectation: ±15–20%**

### How SD Estimates Differ from ROM

1. **Quantity-informed** — use actual SF of each room type from floor plan; don't just use total GFA
2. **System-by-system** — estimate MEP, finishes, structure separately based on design intent
3. **Scope-validated** — walk through CSI checklist against actual drawings
4. **Assumption-reduced** — fewer assumptions; more decisions documented

### SD Estimate Process

**Step 1: Takeoff from SD Drawings**

Even without dimensions, extract from floor plan:
- Total GFA and each major zone (dining, kitchen, retail floor, exam rooms, etc.)
- Count of doors, restroom fixtures, sinks
- Linear feet of storefront
- Number of RTUs shown on roof plan
- Count of electrical panels shown

**Step 2: Assign Costs by Zone**

Different zones have different costs per SF:
```
Restaurant Kitchen: $180–$280/SF (MEP-heavy)
Dining area:        $120–$180/SF
Drive-thru:         Separate breakdown
Restrooms:          $150–$250/SF
Back-of-house:      $80–$120/SF
```

**Step 3: Check MEP Allocation**

MEP should represent 35–55% of TI hard cost. If SD drawings show:
- Kitchen footprint larger than expected: increase MEP allocation
- Extensive plumbing (medical, dental): increase plumbing allocation
- Heavy electrical (kitchen, imaging): verify service size

**Step 4: Reduce Contingency**

At SD phase, contingency drops vs. ROM:
- SD with clear program: 15–20%
- SD with known issues: 18–25%

**Step 5: Document Design Assumptions**

List every design decision that is still TBD:
- "Finish level in dining to be confirmed with brand"
- "Kitchen hood layout pending equipment schedule"
- "Drive-thru lane count not confirmed"

Each TBD = remaining contingency justification.

---

*Tags: #ROM #conceptual #SD #workflow #estimating*
*Links: [[ESTIMATOR-MOC]] | [[01-Estimating-Philosophy]] | [[BM-Regional-Cost-Index]] | [[TPL-ROM-Budget]]*
