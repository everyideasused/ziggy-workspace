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

# 02-Labor-Burden-and-Rates — Labor Costing Reference

---

## Why Labor Burden Matters

When a GC or sub gives you a "labor rate," that is almost never the all-in cost. The **fully-burdened labor rate** is what actually drives the estimate. Missing burden is one of the most common ways subs underestimate their own bids.

### Labor Cost Components

```
Base wage:              $XX.XX/hour
  + Payroll taxes:      7.65% (FICA: SS 6.2% + Medicare 1.45%)
  + FUTA/SUTA:          ~2–4% (varies by state/experience rating)
  + Workers comp:       varies widely by trade (see table below)
  + General liability:  1–3%
  + Health/benefits:    $3–$8/hour equivalent
  + Vacation/holiday:   5–8% (accrued)
  + Training/apprenticeship: 0.5–2% (union)
  + Small tools:        1–3%
─────────────────────────────
Total Burden:           ~35–55% above base wage
```

**Rule:** Assume fully-burdened labor rate = 1.40–1.55× base wage for budget purposes.

### Workers' Compensation by Trade (Approximate)

Workers' comp rates vary by state and company experience rating (EMR). These are rough national averages:

| Trade | Approx. WC Rate (% of wages) |
|---|---|
| Concrete / masonry | 12–20% |
| Structural steel / ironwork | 18–28% |
| Carpentry / framing | 10–18% |
| Roofing | 20–35% |
| Electrical | 5–10% |
| Plumbing | 8–14% |
| HVAC / sheet metal | 8–14% |
| Painting | 8–14% |
| Drywall | 10–16% |
| General laborer | 10–20% |
| Landscaping | 8–14% |

**EMR (Experience Modification Rate):** A modifier applied to a contractor's WC premium based on their claims history. 1.00 = average. A GC with 0.75 EMR pays 25% less; 1.25 pays 25% more.

---

## Union vs. Open Shop Labor

### Union Labor
- Governed by collective bargaining agreements (CBAs) by trade and jurisdiction
- Wages + benefits set by agreement; cannot be negotiated by individual employer
- Benefit packages typically include: health, pension, annuity, training, vacation
- All-in package rates typically 20–50% higher than comparable open shop

**Union markets (major):** NYC, Chicago, Boston, San Francisco, Seattle, Detroit, Philadelphia, Cleveland

**When union rates apply:**
- Publicly funded projects (often require prevailing wage = union-equivalent)
- Some owner requirements (universities, hospitals, union employers)
- Large commercial in union markets (may not be required but union subs dominate)

### Open Shop / Merit Shop
- Wages set by employer and market competition
- Benefits vary by employer
- Generally 15–40% lower cost than union for equivalent trade
- Dominant in Southeast, South-Central, Mountain regions

**Prevailing Wage (Davis-Bacon):**
Required on federally funded or assisted projects. Sets minimum wage rates by trade and county — essentially union wage scale even if workers are non-union.
- Always check for prevailing wage requirement before finalizing labor-based estimate
- Source: SAM.gov for federal; state labor departments for state prevailing wage

---

## Labor Productivity Factors

Unit costs in this KB assume average productivity. Adjust for:

| Factor | Productivity Impact |
|---|---|
| Occupied building (night work, phasing) | -20 to -40% (takes longer, costs more) |
| Tight access / confined space | -10 to -25% |
| Multi-story (floors 3+) | -5 to -15% per floor above grade |
| Extreme heat or cold | -5 to -20% |
| Overtime (>40 hrs/week) | -10 to -20% (fatigue + premium pay) |
| Learning curve (new product, new system) | -10 to -30% on first installations |
| High crew size without coordination | -10 to -20% |
| Lean/efficient site, experienced crew | +10 to +20% |

**Productivity adjustment formula:**
```
Adjusted unit cost = Base unit cost / Productivity factor
Example: $8/SF GWB × (1/0.75) = $10.67/SF for occupied building
```

---

# 03-Overhead-Profit-Escalation — Markup & Escalation Reference

## GC Markup Structure

### Markup Components

| Component | Typical Range | Notes |
|---|---|---|
| General conditions | 8–15% | Field overhead: super, PM, trailer, temp |
| Home office overhead | 3–7% | Admin, estimating, accounting, office |
| Profit | 3–8% | Pure margin; varies by risk and competition |
| Contingency (GC-held) | 1–5% | GC's own risk reserve (not owner contingency) |
| Bonds (performance + payment) | 0.5–2% | Required on most public; some private |
| Builder's risk insurance | 0.5–1.5% | Sometimes separate from GC markup |

**Gross margin (overhead + profit):** 12–22% of direct cost for most commercial projects

### Markup by Project Size

| Project Size | Typical O&P Range | Rationale |
|---|---|---|
| < $250K | 20–30% | Small project overhead burden |
| $250K–$1M | 15–22% | Still small; but more competitive |
| $1M–$5M | 12–18% | Most commercial TI range |
| $5M–$20M | 10–15% | Larger project = spread overhead |
| > $20M | 8–13% | High competition; efficient overhead |

### Subcontractor Markup (on top of their own costs)

Subcontractors also carry markup:
- Sub overhead and profit: typically 12–20% of their direct cost
- GC marks up sub cost (at a lower rate than self-perform): 5–12%

**Result:** An item that costs $10,000 in direct materials + labor may become $14,000–$18,000 by the time it reaches the owner — through 2 layers of markup.

---

## Escalation Methodology

### Annual Rate Reference

| Period | Rate | Market Notes |
|---|---|---|
| 2024 | 3–5% | Normalizing post-COVID |
| 2025 forecast | 3–6% | Watch tariffs on steel/aluminum; labor tight |
| Long-term normal (2010–2019) | 3–5% | Baseline reference |
| COVID spike (2021–2022) | 15–20% | Outlier; do not use for baseline |

### How to Apply Escalation

**Rule:** Apply from estimate date to **midpoint of construction**, not to bid date and not to end of construction.

```
Step 1: Identify estimate date (today)
Step 2: Identify expected bid/award date
Step 3: Identify expected construction start
Step 4: Identify expected substantial completion
Step 5: Calculate construction midpoint
Step 6: Calculate months from estimate to midpoint
Step 7: Apply: Escalated Cost = Base Cost × [1 + (Annual Rate × Months/12)]

Example:
  Estimate date: Jan 2025
  Construction start: Oct 2025 (9 months out)
  Duration: 6 months → midpoint: Jan 2026 (12 months from estimate)
  Annual rate: 4.5%
  Factor: 1 + (0.045 × 12/12) = 1.045
  Base hard cost: $2,500,000
  Escalated cost: $2,500,000 × 1.045 = $2,612,500
  Escalation add: $112,500
```

### Material-Specific Escalation Exposure

Some materials are more volatile than others. For large projects, track separately:

| Material | Volatility | Hedge Strategy |
|---|---|---|
| Structural steel | High | Price lock at GMP; escalation clause |
| Copper / electrical wire | High | Same |
| Aluminum (storefront, curtain wall) | Medium-High | Early order or price lock |
| Lumber / OSB | Very high | Early buy-out recommended |
| PVC/CPVC pipe | Medium | Standard |
| Concrete | Low-Medium | Regional; local aggregate |
| Drywall | Low-Medium | |

---

# 04-Quantity-Takeoff-Methods — QTO Reference

## QTO Hierarchy

| Method | Accuracy | Speed | When to Use |
|---|---|---|---|
| Parametric ($/SF) | ±20–35% | Fast | ROM, site selection |
| Assembly-based | ±15–20% | Medium | SD estimates |
| Detailed QTO | ±5–10% | Slow | GMP, hard bid |
| Model-based (BIM) | ±3–8% | Medium (with BIM) | Large complex projects |

## Parametric Quantity Rules of Thumb

When drawings aren't available, use these to generate reasonable quantities:

| Item | Rule of Thumb |
|---|---|
| Interior linear feet of walls | 1.5–2.5 LF per SF of floor plate (typical office/retail) |
| Doors (interior) | 1 per 250–400 SF of TI space |
| Electrical outlets | 1 per 100–150 SF (commercial) |
| Sprinkler heads | 1 per 100–150 SF (standard) |
| HVAC supply diffusers | 1 per 200–300 SF |
| Plumbing fixtures | Per restroom count (confirm FGI if healthcare) |
| Ceiling tile (SF) | ~90–95% of floor SF (allow for walls, structure) |
| Paint (SF of walls) | Floor SF × 2.5 (approximates wall area) |

## Cross-Check Rules

After completing a QTO, always run these sanity checks:

1. **Total SF check:** Add up all room types — does it equal total GFA?
2. **MEP % check:** MEP ÷ total hard cost — within range for project type?
3. **$/SF check:** Total ÷ SF — within benchmark range?
4. **Door count check:** Count doors vs. parametric rule
5. **Fixture count check:** Count plumbing fixtures vs. plan

**If any check fails by >15% — find the error before proceeding.**

---

*Tags: #labor #burden #union #prevailing-wage #markup #escalation #QTO*
*Links: [[ESTIMATOR-MOC]] | [[CSI-MasterFormat-Index]] | [[BM-Regional-Cost-Index]] | [[01-Estimating-Philosophy]]*
