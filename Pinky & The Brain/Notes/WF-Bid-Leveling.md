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

# WF-Bid-Leveling — Bid Comparison & Leveling Workflow

> The goal of bid leveling is not to find the cheapest number — it is to find the most complete, accurately-scoped, reasonably-priced bid and make a defensible award recommendation. Two bids that look 20% apart are almost always a scope difference, not a price difference.

---

## The Bid Leveling Mindset

**Bid leveling is scope verification, not price comparison.**

Before you compare numbers, you must confirm every bid is answering the same question. Rushing to compare raw totals is how projects blow budgets.

**The three root causes of bid spread:**
1. **Scope differences** — one sub included X, another didn't (most common)
2. **Assumption differences** — same scope, different site/schedule assumptions
3. **Pricing differences** — same scope, same assumptions, different unit costs (least common)

Identify which type of spread you have before making any recommendation.

---

## Minimum Bid Requirements

Before accepting a bid for leveling, confirm it includes:

- [ ] Complete scope of work (written description, not just a number)
- [ ] List of inclusions and exclusions
- [ ] Clarifications and qualifications
- [ ] Schedule / duration (days or weeks)
- [ ] Validity period (30, 60, 90 days)
- [ ] Alternates (if requested)
- [ ] Unit prices (for likely change order work)
- [ ] Subcontractor list (for GC bids)
- [ ] Bond/insurance confirmation (if required)

**Missing any of these = incomplete bid. Request completion before leveling.**

---

## Bid Receipt & Log

When bids come in, log immediately:

| Bidder | Received | Total Bid | Scope Notes | Valid Until | Contact |
|---|---|---|---|---|---|
| Sub A | [date] | $XXX,XXX | Includes X, excludes Y | [date] | |
| Sub B | [date] | $XXX,XXX | Full scope | [date] | |
| Sub C | [date] | $XXX,XXX | Excludes permit | [date] | |
| No bid | [date] | — | Capacity conflict | — | |

---

## Step-by-Step Bid Leveling Process

### Step 1: Establish the Scope Baseline

Before opening any bid, document what the bid was supposed to include:
- Plans and specifications that were issued
- Addenda issued (confirm all bidders received all addenda)
- Bid instructions (inclusions/exclusions, alternates requested)
- Site access and schedule constraints communicated

This becomes the "Level Playing Field" document.

### Step 2: Read Every Clarification List

Most subcontractors attach clarifications. These are not boilerplate — they are scope modifications:
- Highlight every exclusion
- Highlight every assumption that differs from the baseline
- Flag anything that says "by others," "not included," "assumed," "allowance"

**Rule:** An exclusion without a dollar value is a budget risk. Price it before leveling.

### Step 3: Build the Leveling Matrix

Create a line-by-line comparison that adjusts for scope differences:

**Trade Bid Leveling Matrix Format:**

| Line Item | Included in Scope? | Sub A | Sub B | Sub C |
|---|---|---|---|---|
| [Scope Item 1] | Yes | ✅ Included | ✅ Included | ❌ Excluded |
| [Scope Item 2] | Yes | ✅ Included | ❌ Excluded | ✅ Included |
| [Scope Item 3] | No | ❌ Excluded | ❌ Excluded | ✅ Included |
| **Raw Bid Total** | | $XXX,XXX | $XXX,XXX | $XXX,XXX |
| Add: Missing scope items | | — | +$X,XXX | — |
| Deduct: Out-of-scope items | | — | — | -$X,XXX |
| **Leveled Total** | | $XXX,XXX | $XXX,XXX | $XXX,XXX |

### Step 4: Resolve Scope Questions

For significant exclusions or differences:
1. Call the sub — get clarification in writing (email is fine)
2. Ask: "If you included [item], what would your number be?"
3. Document the response

Never assume what a sub meant — ask.

### Step 5: Check Completeness vs. Estimator's Independent Estimate

Compare each leveled bid to your independent estimate:
- If leveled bids cluster 10–20% above your estimate: your estimate may be low; investigate
- If leveled bids cluster 10–20% below: verify scope — likely something is excluded
- If one bid is >15% below the cluster: almost certainly a scope miss; verify before awarding

### Step 6: Assess Non-Price Factors

Cost is not the only factor in awarding work:

| Factor | Sub A | Sub B | Sub C |
|---|---|---|---|
| Relevant project experience | High | Medium | High |
| References checked | Yes | No | Yes |
| Schedule fits project | Yes | Yes | Risk |
| Financial stability | Strong | Unknown | Strong |
| Local vs. out-of-area | Local | Out-of-area | Local |
| Safety record (EMR) | 0.85 | N/A | 0.92 |
| Bonding capacity | Yes | No | Yes |

### Step 7: Award Recommendation

**Format:**

```
BID LEVELING SUMMARY — [Trade]
Project: [Name] | Date: [Date]

BIDS RECEIVED: [#] of [#] invited

LEVELED RESULTS:
  Sub A (leveled): $XXX,XXX
  Sub B (leveled): $XXX,XXX
  Sub C (leveled): $XXX,XXX
  
Estimator's independent estimate: $XXX,XXX

SCOPE NOTES:
  [Key differences found and how resolved]

NON-PRICE ASSESSMENT:
  [Brief notes on qualifications, schedule fit, references]

RECOMMENDATION: Award to [Sub X] at $XXX,XXX
  Rationale: [2–3 sentences]
  
Conditions on award:
  [Any scope clarifications, schedule confirmations, or substitution approvals needed]
```

---

## GC-Level Bid Leveling (Full Project Bids)

When leveling full GC bids (not just trade packages):

### Additional Checks for GC Bids

**General Conditions:**
- Request itemized GC general conditions breakdown
- Benchmark: 8–15% of direct cost
- Verify superintendent allocation and experience level
- Confirm schedule duration matches general conditions duration

**Subcontractor Coverage:**
- Request sub bid tabs for all major trades
- How many bids did GC receive per trade?
- Are MEP subs qualified and local?
- Any self-performed work? At what rate?

**Allowances:**
- List all allowances in each GC bid
- Are they equivalent across all bidders?
- Are they realistic?

**Alternates:**
- Price alternates separately and compare
- Do all GCs price same alternates?

**Schedule:**
- Compare proposed schedule across GCs
- Short schedule = compressed = premium or risk
- Long schedule = higher general conditions

### GC Bid Leveling Matrix

| Item | GC A | GC B | GC C | Notes |
|---|---|---|---|---|
| Direct cost (sub + self-perform) | | | | |
| General conditions (itemized) | | | | |
| OH&P | | | | |
| Contingency | | | | |
| Escalation | | | | |
| Bonds | | | | |
| **Raw Total** | | | | |
| Scope adjustments | | | | |
| **Leveled Total** | | | | |
| GC team experience | | | | |
| Schedule (months) | | | | |
| Key sub commitments | | | | |

---

## Common Bid Leveling Errors

1. **Comparing raw totals without reading the qualifications** — most common and most expensive mistake
2. **Awarding lowest bid without scope verification** — guarantees change orders
3. **Ignoring the cluster outlier** — one bid 25% below all others is almost never "a good price"
4. **Not checking sub coverage** — GC with one MEP bid is not market-checked
5. **Treating allowances as real costs** — they are not; they are contingency in disguise
6. **Missing addenda** — confirm all bidders received the same information
7. **Not requesting unit prices** — unit prices are essential for change order management; get them at bid
8. **Forgetting scope period validity** — a bid expires; if decision is delayed, re-confirm price

---

## Bid Leveling for Merchandising Programs

Merchandising bid leveling has different variables from construction:

| Factor | Construction | Merchandising |
|---|---|---|
| Key scope variable | Inclusions/exclusions | Hours per store assumption |
| Most common spread cause | Missing scope items | Different productivity assumptions |
| Reference check | Project experience | Program execution references |
| Key qualifier | Bonding, safety, license | Geographic coverage, crew availability |
| Unit price for COs | $/SF, $/LF, $/unit | $/hour, $/store, $/fixture |

**Merchandising bid leveling checklist:**
- [ ] Hours per store assumption confirmed for each bidder
- [ ] Travel and per diem model verified
- [ ] Geographic coverage confirmed (especially rural markets)
- [ ] Program management approach defined
- [ ] Technology/reporting platform confirmed
- [ ] Contingency for out-of-scope stores addressed

---

*Tags: #bid-leveling #procurement #GC-selection #estimating #workflow*
*Links: [[ESTIMATOR-MOC]] | [[WF-TIA-and-GMP]] | [[TPL-Bid-Leveling-Matrix]] | [[01-Estimating-Philosophy]]*
