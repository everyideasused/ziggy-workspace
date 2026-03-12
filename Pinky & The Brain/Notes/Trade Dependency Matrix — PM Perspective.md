---
type: resource
area: work
status: active
tags:
  - work
  - resource
  - knowledge-base
  - construction
  - trades
  - scheduling
  - construction-kb
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Work Hub|Work Hub]] · [[Construction PM Knowledge Base|Construction KB]]

---

# Trade Dependency Matrix — PM Perspective

> Cross-cutting reference for [[Construction PM Knowledge Base]]
> Related: [[07 - Construction Execution]], [[Schedule Recovery & Acceleration]], [[Risk Management Framework]]
> Builder-layer counterpart: [[Trade Coordination & Subcontractor Management]] (Hammer KB)

---

## Purpose

The Hammer KB covers trade sequencing from the builder's operational perspective — who shows up and in what order. This note covers the same territory from the **program manager's perspective**: what to monitor, what to escalate, where the portfolio-level risks live, and how to read the signals that a trade conflict is about to blow up your schedule. The PM doesn't manage the trades directly — the GC does — but the PM needs to know when the GC is managing them poorly.

---

## The PM's Trade Dependency Model

### Why This Matters to the PM

On a typical 10-week retail TI, there are 12-18 separate trade subcontractors cycling through a 1,500-5,000 SF space. Each trade depends on the one before it. A single trade that slips by 3 days can cascade into 10+ days of project delay because every downstream trade shifts. The PM doesn't need to know how to route ductwork — but the PM absolutely needs to know that if HVAC rough-in slips, insulation can't start, which means drywall can't start, which means the entire finish sequence slides.

### The Critical Dependencies a PM Must Track

Not all trade transitions carry equal risk. Some have built-in float; others are single-point-of-failure handoffs where a slip has immediate critical-path impact. The PM should focus monitoring energy on the high-risk transitions.

---

## Trade Dependency Map — Commercial / Retail

### Phase 1: Site & Structure

```
Erosion Control / Demo
    └─► Mass Grading + Underground Utilities
         └─► Foundation (footing inspection gate)
              └─► Underslab MEP (plumbing + electrical)
                   └─► Slab Pour (underslab inspection gate)
                        └─► Structural Frame (steel or framing)
                             └─► Roof Deck / Sheathing
```

**PM Watch Points:**

| Transition | Risk Level | What to Monitor | Escalation Trigger |
|-----------|-----------|----------------|-------------------|
| Grading → Foundation | Medium | Geotech confirmation; compaction test results | Failed compaction; unexpected soil conditions |
| Foundation → Underslab MEP | High | Are underslab plumbing and electrical subs scheduled and confirmed? | Sub not booked; inspection backlog at AHJ |
| Underslab → Slab Pour | High | All underslab inspections passed? Concrete supplier confirmed? | Failed inspection; concrete batch plant scheduling conflict |
| Slab → Framing/Steel | Critical | Steel fabrication delivery confirmed? Framing crew available? | Steel delivery slips; framing crew pulled to another job |

**Portfolio-Level Risk:** If the same concrete sub is on three of your program sites and they're all hitting slab pour in the same two-week window, you have a resource conflict. The PM should identify these overlaps in the program schedule and stagger pours or confirm the sub has adequate crews.

### Phase 2: Envelope (Dry-In)

```
Structural Frame Complete
    ├─► Exterior Sheathing + Weather Barrier
    │    └─► Windows + Exterior Doors
    │         └─► Siding / Cladding
    └─► Roof System
         └─► BUILDING DRIED IN ★
```

**PM Watch Points:**

| Transition | Risk Level | What to Monitor | Escalation Trigger |
|-----------|-----------|----------------|-------------------|
| Frame → Sheathing/WRB | Medium | Framing inspection passed? Sheathing material on site? | Failed framing inspection; material delivery delay |
| Sheathing → Windows | High | Window order confirmed and delivery tracked? | Custom windows: 4-8 week lead. Any slip here cascades. |
| Frame → Roof | High | Roofing sub scheduled? Material staged? | Roofing subs are weather-dependent and heavily booked in season |
| All → Dried-In Milestone | Critical | Is the building weather-tight? | If not dried in before rainy season, interior work is at risk |

**PM Rule:** The dried-in milestone is the single most important schedule checkpoint during construction. Until the building is weather-tight, every interior activity is weather-dependent. Track this milestone obsessively and escalate any risk to it immediately.

### Phase 3: MEP Rough-In (The Highest-Risk Zone)

```
Framing Inspection Passed
    ├─► Plumbing Rough (largest pipes — goes first)
    ├─► HVAC Rough (largest ducts — goes second)
    ├─► Electrical Rough (most flexible — goes third)
    ├─► Fire Protection Rough (sprinkler piping)
    └─► Low-Voltage Rough (data, security, AV)
         └─► ALL ROUGH INSPECTIONS (multi-trade inspection gate)
              └─► Insulation
                   └─► Insulation Inspection
                        └─► DRYWALL CAN BEGIN ★
```

**PM Watch Points:**

| Transition | Risk Level | What to Monitor | Escalation Trigger |
|-----------|-----------|----------------|-------------------|
| Frame Inspection → MEP Start | Critical | All three MEP subs confirmed and sequenced? Pre-rough coordination meeting held? | Any MEP sub not scheduled within 3 days of framing inspection pass |
| Plumbing ↔ HVAC ↔ Electrical | Critical | Are trades stacking on top of each other? Routing conflicts? | GC reports routing conflict; trades working in same area simultaneously without coordination |
| Fire Protection | High | Sprinkler sub scheduled? Deferred submittals approved by AHJ? | Fire protection is often the forgotten MEP trade — long lead on materials, limited subs in some markets |
| All MEP → Rough Inspections | Critical | Are all four/five trades complete? Has the GC done a pre-inspection walk? | Any trade incomplete blocks the entire inspection. One failed trade = all trades wait. |
| Inspections → Insulation | High | All rough inspections passed? Insulation sub scheduled? | Spray foam applicators have limited availability — book early |
| Insulation → Drywall | High | Insulation inspection passed? Drywall crew confirmed? | Drywall subs juggle multiple projects; if you're not confirmed, you get bumped |

**This is the zone where projects die.** Three to five trades competing for the same wall cavities and floor joist bays, followed by a multi-discipline inspection gate that requires 100% completion from all trades before any can be covered up. A PM who isn't tracking this zone weekly is going to be surprised.

**What Good Looks Like from the GC:**
- Pre-rough coordination meeting with all MEP trades before anyone starts
- Clear routing priority: plumbing first, HVAC second, electrical third
- GC superintendent walks rough-in daily and identifies conflicts early
- Pre-inspection walkthrough by GC before calling AHJ
- All rough inspections scheduled as a coordinated block, not piecemeal

**What Bad Looks Like:**
- MEP trades show up ad-hoc without a coordination meeting
- Plumber and HVAC guy arguing on site about who gets the 14" joist bay
- GC calls for inspection with incomplete work ("we'll finish while the inspector is here")
- Trades drilling through engineered framing members without approval
- Low-voltage contractor shows up after insulation is in

**PM Response When Bad Looks Are Detected:**
1. Raise at OAC meeting immediately — this is a schedule risk, not a "field issue"
2. Request the GC's MEP coordination plan in writing
3. If the GC doesn't have one, that's a red flag about overall project management
4. Track the rough inspection pass/fail rate — multiple failed inspections indicate systemic coordination problems

### Phase 4: Interior Finishes (The Sequencing Gauntlet)

```
Drywall (hang → tape → mud → sand → prime)
    └─► Paint (primer + first coat)
         ├─► Ceiling Grid + Tile
         ├─► Cabinets / Millwork
         │    └─► Countertops (template after install; 2-3 week fab)
         │         └─► Plumbing Trim (fixtures, faucets — need counters first)
         ├─► Flooring (tile, LVT, carpet — sequence varies)
         └─► Door Hardware
              └─► Trim Carpentry (base, case, crown)
                   └─► Electrical Trim (devices, fixtures)
                        └─► HVAC Trim (grilles, diffusers, thermostat)
                             └─► Final Paint Touch-Up
                                  └─► Final Clean
```

**PM Watch Points:**

| Transition | Risk Level | What to Monitor | Escalation Trigger |
|-----------|-----------|----------------|-------------------|
| Drywall complete → Paint | Medium | Drywall sub finished and off site? Paint crew confirmed? | Drywall finishing takes longer than GCs estimate — watch the 3-coat mud cycle |
| Paint → Cabinets/Millwork | Critical | Cabinet order confirmed? Delivery date tracked? Lead time: 4-12 weeks. | This is the #1 finish-phase delay in retail and restaurant. If cabinets aren't ordered by the time framing starts, you're already at risk. |
| Cabinets → Countertops | High | Template scheduled within days of cabinet install? Fabrication lead time confirmed? | 2-4 weeks from template to install. This is the most commonly underestimated lead time in residential and restaurant. |
| Countertops → Plumbing Trim | Medium | Plumber aware of countertop install date? | Plumber can't set sink or faucet until counters are in. If plumber isn't scheduled tightly behind countertop install, you lose days. |
| All Finishes → Final Paint | Low-Medium | Is a final touch-up visit in the painting contract? | Every trade after the first paint coat damages walls. Budget one final touch-up visit. If it's not in the contract, the painter won't come back. |

**PM Rule on Cabinets/Millwork:** Ask for cabinet order confirmation at the first OAC meeting during rough-in. If the GC can't confirm the order, flag it as a schedule risk immediately. By the time you're hanging drywall, it's too late to recover a cabinet lead time problem.

### Phase 5: Commissioning & Closeout

```
All Finishes + MEP Trim Complete
    ├─► Systems Commissioning (HVAC, controls, fire alarm)
    ├─► Test & Balance (TAB)
    ├─► Fire Alarm Testing / Fire Marshal Inspection
    └─► Punch List Walkthrough
         └─► Punch List Corrections
              └─► Final AHJ Inspections (all trades)
                   └─► Certificate of Occupancy ★
```

**PM Watch Points:**

| Transition | Risk Level | What to Monitor | Escalation Trigger |
|-----------|-----------|----------------|-------------------|
| MEP Trim → Commissioning | High | Are controls sub and TAB sub scheduled? Are sequences of operation documented? | Controls commissioning is frequently the last bottleneck — limited subs, complex work |
| Fire Alarm → Fire Marshal | High | Has the fire alarm acceptance test been scheduled? Are there deferred submittals still pending? | Fire marshal inspections often have 1-2 week scheduling lead times. Don't wait until everything else is done to schedule. |
| Punch → Final Inspections | Medium | Is the GC aggressively closing punch items? How many items are open? | Punch lists that aren't managed daily will drag for weeks. Track completion percentage at every OAC meeting. |
| Final Inspections → CO | Critical | Are all inspection prerequisites complete? Any outstanding corrections? | A single failed final inspection can delay CO by 1-2 weeks depending on re-inspection availability |

---

## Sector-Specific Trade Dependencies

### Restaurant — Kitchen Equipment Chain

```
Standard finish sequence PLUS:
    Kitchen Hood Fabrication (6-10 week lead)
         └─► Hood Installation (requires framing/blocking done)
              └─► Fire Suppression Installation (requires hood in place)
                   └─► Make-Up Air Unit Connection (requires hood + fire suppression)
                        └─► Health Department Pre-Inspection
                             └─► Equipment Set (walk-in, line equipment, smallwares)
                                  └─► Final Health Department Inspection
                                       └─► CAN OPEN FOR BUSINESS ★
```

**PM Warning:** The CO does NOT equal permission to open a restaurant. The health department inspection is a separate gate. Schedule it early and understand local timelines. Some jurisdictions require two visits (rough + final). The health department final can happen before or after CO, but the restaurant cannot serve food until both are in hand.

### Grocery — Refrigeration Chain

```
Standard finish sequence PLUS:
    Refrigeration Equipment (8-14 week lead)
         └─► Walk-in Cooler/Freezer Installation
              └─► Refrigerant Piping
                   └─► Rack System Installation
                        └─► Case Installation + Connection
                             └─► Refrigeration Commissioning (72-hr run test)
                                  └─► Health Department Inspection
                                       └─► STOCK AND OPEN ★
```

**PM Warning:** Refrigeration commissioning requires a 72-hour continuous run test. This must be factored into the schedule — you cannot open the day after refrigeration is installed. Plan for at least one week between refrigeration commissioning and store opening.

### Medical / Dental — Specialty Systems Chain

```
Standard finish sequence PLUS:
    Medical Gas Piping (requires framing; rough-in with MEP)
         └─► Medical Gas Testing + Certification
    Lead-Lined Walls (if imaging suite — install during framing)
         └─► Radiation Shielding Inspection (state health dept)
    Equipment Rough-In (dental chairs, imaging units — specific electrical + plumbing)
         └─► Equipment Final Set + Calibration
              └─► State Health Department Inspection (medical only)
                   └─► CAN TREAT PATIENTS ★
```

**PM Warning:** State health department inspections for medical facilities operate on their own timeline, which is often slower and less predictable than local building department inspections. Start the application process during construction, not at closeout.

### Petroleum / Fuel Station — Below-Grade Chain

```
UST Installation (requires excavation; before slab)
    └─► UST Testing + State Registration
         └─► Dispenser Installation (requires paving + electrical)
              └─► Product Delivery + Tank Fill
                   └─► Weights & Measures Inspection
                        └─► CAN SELL FUEL ★
```

**PM Warning:** UST (Underground Storage Tank) work creates an early critical-path dependency because it must happen before the slab is poured. If UST delivery slips, the entire project schedule shifts. Track UST fabrication and delivery with the same intensity as structural steel.

---

## Reading the GC's Schedule for Trade Problems

The PM reviews the GC's weekly schedule updates. Here's what to look for:

### Red Flags in the 3-Week Look-Ahead

| Red Flag | What It Means | PM Action |
|----------|--------------|-----------|
| Two MEP trades scheduled in the same area on the same day | Stacking conflict — one will bump the other | Ask GC for the coordination sequence |
| A finish trade scheduled before its predecessor is complete | GC is hoping to overlap — without formal fast-tracking, this causes rework | Confirm the predecessor is actually complete; challenge if it's not |
| Inspection not on the look-ahead but work requiring that inspection is scheduled | GC hasn't scheduled the inspection or is assuming same-day approval | Require inspection to appear on the look-ahead; verify AHJ lead times |
| Same sub appears on multiple projects in the same week | Resource conflict across your program | Confirm sub has separate crews; if not, prioritize and advise client |
| A long-lead item has no delivery date noted | GC may not have ordered it or doesn't know the delivery date | Demand confirmation with PO number and tracking |
| Cabinet/millwork installation scheduled but no delivery confirmation | GC is scheduling optimistically without material confirmation | Require delivery confirmation before scheduling downstream work |
| No float on any activity for 3+ consecutive weeks | Schedule is too tight — any disruption becomes a critical delay | Discuss adding buffer or re-sequencing to create breathing room |

### Red Flags in the Baseline Schedule

| Red Flag | What It Means | PM Action |
|----------|--------------|-----------|
| No logic ties between activities (everything is date-constrained) | GC built a bar chart, not a CPM schedule — delays won't cascade correctly in the model | Reject and require proper logic ties |
| Unrealistic durations for known activities | GC is being aggressive to win the schedule argument | Compare against duration benchmarks; push back with data |
| Critical path runs through non-critical activities | Logic is wrong; critical path should run through structural → MEP → drywall → finishes on most projects | Require GC to review and correct logic |
| No resource loading | Can't validate whether the GC actually has enough people to execute the plan | Require resource loading on critical-path activities at minimum |
| Multiple calendars hiding weather days | Some GCs create calendars that exclude weather to make the schedule look shorter | Confirm weather days are accounted for; compare to historical data |

---

## Program-Level Trade Dependency Management

When managing multiple projects for the same client, trade dependencies create portfolio-level risks that don't exist on a single project.

### Shared Sub Resource Conflicts

**The Problem:** Your program uses the same MEP sub across 6 sites. Three sites hit rough-in in the same month. The sub doesn't have three separate crews — they'll spread one crew thin or prioritize one site and ignore the others.

**PM Actions:**
- Maintain a **program-level trade calendar** showing when each sub is needed on each project
- Identify resource conflicts 4-6 weeks in advance (during the 3-week look-ahead review)
- Stagger project schedules to avoid same-trade overlap when possible
- For unavoidable overlaps, get the sub's commitment to crew sizing at each site in writing
- Have backup subs pre-qualified for critical trades (at minimum: MEP, drywall, flooring)
- For the complete resource conflict framework and resolution playbook, see [[Multi-Project Resource Conflicts]]

### GC Performance Correlation

**The Problem:** When a GC is on three of your program sites and starts struggling on one, the other two are at risk. A GC with cash flow problems, superintendent turnover, or sub payment issues will underperform across all projects, not just one.

**PM Actions:**
- Track schedule performance across all projects with the same GC
- If one project shows signs of distress (slow progress, sub complaints, late pay apps), proactively investigate the others
- Monitor sub payment: if subs start calling the PM about late payments from the GC, it's a leading indicator of broader problems
- Maintain a GC performance log in [[ATLAS_MEMORY]] for reference on future program assignments

### Long-Lead Procurement Coordination

**The Problem:** When running 10+ sites on a rollout program, long-lead items (kitchen hoods, custom millwork, specialty electrical panels, HVAC units) compete for the same manufacturer production slots.

**PM Actions:**
- Consolidate long-lead procurement across the program where possible (bulk orders get priority)
- Maintain a program-level long-lead tracking log with PO numbers, lead times, and delivery dates per site
- Release long-lead POs as early as possible — don't wait for each site's individual construction start
- For prototype/rollout programs, standardize specs to reduce long-lead variability

---

## Trade Dependency Monitoring Cadence

| Frequency | What to Review | Where |
|-----------|---------------|-------|
| **Weekly (at OAC)** | 3-week look-ahead for stacking conflicts; inspection scheduling; long-lead delivery status | OAC meeting agenda item |
| **Bi-weekly** | Program-level trade calendar for shared sub conflicts | Program status meeting or internal review |
| **Monthly** | Critical path logic check; float consumption trend; baseline vs. actual trade durations | Monthly owner progress report |
| **At Phase Transitions** | Confirm all predecessor trades are complete and inspected before releasing the next phase | Gate review per [[Construction PM Knowledge Base]] phase gates |
| **At Rough-In Start** | Confirm all MEP trades are scheduled, coordinated, and have held a pre-rough meeting | Special focus — the highest-risk zone |
| **At Finish Start** | Confirm all long-lead finish materials are on site or confirmed for delivery | Cabinet/millwork/countertop/specialty flooring |

---

## Escalation Framework

Not every trade issue needs to reach the PM. The GC's superintendent should handle day-to-day trade coordination. The PM escalates when the issue threatens the schedule, budget, or quality at a level the GC cannot resolve alone.

| Issue | GC Handles | PM Escalates |
|-------|-----------|-------------|
| Trade shows up late Monday morning | ✓ | |
| Two trades disagree on routing in one wall bay | ✓ | |
| Trade fails rough inspection on one item | ✓ | |
| Same trade fails rough inspection on multiple items | | ✓ (systemic quality issue) |
| Sub misses scheduled start date | ✓ (if recoverable) | ✓ (if it impacts critical path) |
| Sub pulls crew to another job mid-work | | ✓ (sub performance issue — track in ATLAS_MEMORY) |
| Long-lead material delivery slips | | ✓ (always — immediate schedule impact assessment) |
| GC can't confirm sub availability for upcoming phase | | ✓ (leading indicator of schedule risk) |
| Sub disputes scope boundary with another sub | ✓ (scope gap resolution per contract) | ✓ (if it stops work or requires a change order) |
| MEP coordination failure causing rework | | ✓ (cost impact + schedule impact + GC management concern) |

---

## Quick Reference: Critical Lead Times by Trade

These are the lead times that the PM should track for schedule protection. "Lead time" = time from order/booking to delivery/mobilization.

| Trade / Item | Planning Lead | Material Lead | Mobilization Lead |
|-------------|-------------|--------------|------------------|
| Structural Steel | Order at DD | 8-14 weeks fabrication | 1-2 weeks |
| Engineered Trusses | Order at framing start | 4-6 weeks | 1 week |
| Windows (custom) | Order at early CD | 6-10 weeks | 1 week |
| Windows (stock) | — | 1-3 weeks | 1 week |
| HVAC Equipment | Order at permit | 4-8 weeks (longer in peak) | 2-3 weeks |
| Kitchen Hood (restaurant) | Order at SD/DD | 6-10 weeks fabrication | 1 week |
| Cabinets (custom) | Order by rough-in start | 8-12 weeks | 1 week |
| Cabinets (semi-custom) | Order by rough-in start | 4-8 weeks | 1 week |
| Countertops | Template after cabinet install | 2-4 weeks after template | 1 day |
| Elevator | Order at early design | 12-20 weeks | 2-4 weeks |
| Switchgear / Electrical Panels | Order at CD | 6-12 weeks (can be longer) | 1 week |
| Refrigeration Equipment (grocery) | Order at DD | 8-14 weeks | 2-3 weeks |
| UST (fuel station) | Order at permit | 8-12 weeks fabrication | 1-2 weeks |
| Fire Suppression (hood system) | Order with hood | 4-6 weeks | 1 week |
| Specialty Flooring (terrazzo, custom tile) | Order at DD/CD | 6-12 weeks | 1-2 weeks |

**PM Rule:** If the lead time exceeds the duration of the current phase, the order must be placed in the current phase — not the next one. This is the most common long-lead mistake: waiting until procurement to order items that should have been released during design.

---

## Related

- [[Construction PM Knowledge Base]] — Master reference
- [[07 - Construction Execution]] — Phase 7 detail
- [[Schedule Recovery & Acceleration]] — When trade dependencies cause delays
- [[Risk Management Framework]] — Risk categories and response strategies
- [[Trade Coordination & Subcontractor Management]] — Builder-layer trade operations (Hammer KB)
- [[PM-to-Builder Translation Guide]] — Translating between PM and builder perspectives
- [[Sector Profiles — Retail, Commercial, Residential, Civil]] — Sector context
- [[ATLAS_MEMORY]] — GC and sub performance tracking
- [[Subcontractor Default & Replacement]] — When a trade dependency breaks due to sub failure

---

*Update with project-specific trade dependency lessons, local sub lead time benchmarks, and program-level resource conflict patterns as they emerge across projects.*
