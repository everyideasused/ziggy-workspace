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

# WF-Scope-Gap-Analysis — Finding What GCs Missed

> A scope gap is any item of work required to complete the project that is not assigned to any party in any contract. Scope gaps become change orders — or worse, they become disputes. The estimator's job is to find every gap before the contract is signed.

---

## Why Scope Gaps Happen

1. **Design incomplete at GMP** — drawings don't show everything; GC doesn't price what isn't shown
2. **Division of work unclear** — owner, landlord, GC, and separate contractors all have scope; the boundaries weren't defined
3. **"By others" is everyone's problem** — GC marks something "by others"; no one assigns it; it falls through
4. **Allowances too low** — real scope is hidden as an allowance that will be exceeded
5. **Owner-furnished equipment (OFE) not coordinated** — tenant provides equipment; building infra not coordinated
6. **New scope triggered by existing scope** — demolition reveals conditions requiring additional work
7. **Code compliance not fully scoped** — ADA, fire, energy code requirements triggered but not budgeted

---

## The Master Gap Analysis Framework

Run this analysis against every GC scope package before GMP execution.

### Layer 1: CSI Division Coverage Check

For each division triggered by the project type, confirm someone owns it:

| Division | In GC Scope? | In Landlord Scope? | In Owner Direct? | Unassigned? |
|---|---|---|---|---|
| 01 – General Requirements | | | | |
| 02 – Existing Conditions / Demo | | | | |
| 03 – Concrete | | | | |
| 05 – Metals | | | | |
| 06 – Wood / Millwork | | | | |
| 07 – Thermal / Moisture | | | | |
| 08 – Openings | | | | |
| 09 – Finishes | | | | |
| 10 – Specialties | | | | |
| 21 – Fire Suppression | | | | |
| 22 – Plumbing | | | | |
| 23 – HVAC | | | | |
| 26 – Electrical | | | | |
| 27 – Communications | | | | |
| 28 – Fire Alarm | | | | |
| 31–33 – Site Work | | | | |

**Any unassigned division = scope gap. Assign it before GMP.**

### Layer 2: Interface Points Analysis

The most dangerous scope gaps live at the interface between scopes — where one party's work ends and another's begins:

**GC / Landlord Interface:**
- [ ] Who modifies the storefront? (landlord delivers standard; tenant pays for modification)
- [ ] Who connects to utility stub-ins? (landlord delivers to a point; GC connects from that point)
- [ ] Who does work on the roof? (landlord owns roof; tenant work on roof needs landlord coordination)
- [ ] Who removes landlord-furnished items? (if landlord vanilla box has items tenant doesn't want)
- [ ] Who patches and repairs landlord finishes damaged during construction?

**GC / OFE Interface (Owner-Furnished Equipment):**
- [ ] All rough-in (plumbing, electrical, gas, data) for OFE is in GC scope
- [ ] Structural reinforcement for heavy OFE is in GC scope
- [ ] Final connections (plug-in vs. hardwired) — who does it? GC or vendor?
- [ ] Blocking and backing for wall-mounted OFE is in GC scope
- [ ] Floor preparation for walk-in coolers, heavy equipment is in GC scope
- [ ] Delivery and receiving coordination — who is on-site when OFE arrives?

**GC / Technology Vendors Interface:**
- [ ] POS system: rough-in conduit and outlets by GC; system by owner or vendor
- [ ] Drive-thru communication: infra by GC; hardware/software by owner or brand
- [ ] Security/access control: conduit/wire by GC; hardware by owner or vendor
- [ ] Digital signage: conduit/power by GC; screens/mounts by owner or vendor
- [ ] AV systems: conduit/power/blocking by GC; equipment by owner or vendor

**GC / Separate Contractors Interface:**
- [ ] Sign contractor: GC provides conduit, disconnect, structural backing; sign contractor installs sign
- [ ] Kitchen equipment vendor: GC provides all infra; vendor delivers and sets equipment; who does final connections?
- [ ] Landscaping (if separate): who does irrigation, who does sleeving under paving?
- [ ] Elevator (if applicable): who does pit, who does hoistway, who does machine room?

### Layer 3: Exclusions Register

Read every exclusion in the GC's scope letter and assign a cost and owner:

| # | GC Exclusion Language | Estimated Cost | Assigned To | Notes |
|---|---|---|---|---|
| 1 | "Permit fees excluded" | $15,000 | Owner direct | Typical |
| 2 | "Utility connection fees excluded" | $75,000 | Owner direct | Verify with utility |
| 3 | "Hazardous material abatement excluded" | $0–$50,000 | Owner / unknown | Survey first |
| 4 | "Testing and balancing excluded" | $8,000 | Owner direct | Get TAB contractor |
| 5 | "Special inspections excluded" | $10,000 | Owner direct | Structural, MEP |
| 6 | "Owner-furnished equipment final connections excluded" | $12,000 | Separate contract | Coordinate |
| 7 | "IT/AV/POS excluded" | $35,000 | Owner / brand | Confirm with client |

**Every unassigned exclusion = gap. Cost it and assign it before GMP.**

### Layer 4: OFE / FFE Coordination Gaps

For any owner-furnished equipment program, run this checklist:

**For each piece of OFE:**
- [ ] Equipment schedule confirmed (model numbers, dimensions, weights, utility requirements)
- [ ] Rough-in drawings coordinated with equipment submittals
- [ ] Structural support confirmed for equipment weight
- [ ] Utilities sized for equipment (electrical, gas, plumbing, data)
- [ ] Clearances confirmed (service access, ventilation, egress)
- [ ] Delivery schedule confirmed (will equipment arrive before or after GC completes rough-in?)
- [ ] Final connection responsibility confirmed in writing

**Common OFE gaps in restaurant construction:**
- Walk-in cooler/freezer: GC does slab prep, electrical, refrigeration stub-out — vendor sets panels; who does final refrigeration connection?
- Hood system: brand or vendor provides hood; GC installs and connects — exhaust duct, make-up air, fire suppression
- POS kiosks: power and data rough-in by GC; mounting by GC; hardware by brand or vendor
- Drive-thru window: specialty assembly — who installs? GC or vendor?

### Layer 5: Permit and Code Gap Analysis

**Code compliance items often excluded from early estimates:**

| Item | When Triggered | Typical Cost |
|---|---|---|
| ADA path of travel upgrades | Any TI > 20% of building value (some jurisdictions) | $10,000–$80,000 |
| ADA restroom upgrades | Occupancy change or any renovation touching restrooms | $15,000–$50,000 |
| ADA parking upgrades | Any permit requiring site work | $5,000–$30,000 |
| Egress improvements | Occupancy change, added occupant load | $5,000–$40,000 |
| Energy code compliance (lighting controls, insulation) | Any TI > threshold SF | $5,000–$30,000 |
| Seismic upgrades | High seismic zones; structural work | $20,000–$200,000+ |
| Fire rating upgrades | Occupancy change; structural modifications | $10,000–$50,000 |
| Grease duct enclosure (2-hr rated) | Any new or extended kitchen exhaust | $10,000–$25,000 |

**Always verify code trigger with the AHJ (Authority Having Jurisdiction) before finalizing budget.**

---

## Gap Analysis Output: Owner Exposure Register

Summarize all identified gaps into a single register for client review:

```
SCOPE GAP ANALYSIS — OWNER EXPOSURE REGISTER
Project: ___________________  Date: ___________
GMP Under Review: $___________

CATEGORY 1: UNASSIGNED SCOPE (No contract covers this)
─────────────────────────────────────────────────────
Item                              Est. Cost    Action Needed
[Item 1]                          $XX,XXX      Add to GC scope / Owner direct
[Item 2]                          $XX,XXX      
Total Unassigned:                 $XX,XXX

CATEGORY 2: GC EXCLUSIONS (In GC scope letter as excluded)
─────────────────────────────────────────────────────
Item                              Est. Cost    Assigned To
Permit fees                       $XX,XXX      Owner direct
Utility connection fees           $XX,XXX      Owner direct
[Item 3]                          $XX,XXX      
Total GC Exclusions:              $XX,XXX

CATEGORY 3: OFE COORDINATION GAPS
─────────────────────────────────────────────────────
Item                              Est. Cost    Notes
[Equipment infra gap 1]           $XX,XXX      
Total OFE Gaps:                   $XX,XXX

CATEGORY 4: CODE / PERMIT UNCERTAINTY
─────────────────────────────────────────────────────
Item                              Est. Cost    Trigger
[ADA path of travel]              $XX,XXX      Confirm with AHJ
Total Code Uncertainty:           $XX,XXX

═══════════════════════════════════════════════
TOTAL OWNER EXPOSURE (gaps not in GMP):  $XXX,XXX
Recommended owner contingency add:       $XXX,XXX (Category 1+2 + 15% buffer)
═══════════════════════════════════════════════

RECOMMENDED ACTIONS BEFORE GMP EXECUTION:
1. Add [item] to GC scope — estimated $X,XXX
2. Confirm ADA requirements with AHJ
3. Assign final connections for [OFE items]
4. Establish owner-direct contracts for: [list]
```

---

## Gap Analysis for Merchandising Programs

Scope gaps look different in merchandising than in construction:

**Typical merchandising program gaps:**

| Gap | Description | Cost Impact |
|---|---|---|
| Store access not confirmed | Store manager approval needed; not all stores confirmed | Schedule risk; crew idle time |
| Fixture delivery not coordinated with crew | Crew arrives; fixtures aren't there | Rescheduling cost + travel |
| Non-standard stores not identified | 15% of stores are non-prototype; scope varies | Per-store budget variance |
| Technology rough-in not confirmed | GC scope assumed; actually not complete | Crew can't complete work |
| Store-specific clearance requirements | Lease terms, brand requirements, local regs | Scope additions |
| Inventory not moved before reset | Crew can't access sections | Delay + cost |
| Disposal of old fixtures not assigned | Old gondola, displays — who hauls it? | $200–$800/store gap |

---

*Tags: #scope-gap #GMP #OFE #code-compliance #estimating #program-management*
*Links: [[ESTIMATOR-MOC]] | [[WF-TIA-and-GMP]] | [[WF-Change-Order-Review]] | [[RISK-Red-Flags-and-Matrix]]*
