---
type: resource
area: work
status: active
tags:
  - work
  - resource
  - knowledge-base
  - construction
  - schedule
  - specifications
  - construction-kb
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Work Hub|Work Hub]] · [[Construction PM Knowledge Base|Construction KB]]

---

# Schedule Specification & Analysis Methods

> Cross-cutting reference for [[Construction PM Knowledge Base]]
> Related: [[06 - Preconstruction]], [[07 - Construction Execution]], [[Schedule Recovery & Acceleration]], [[Delay Documentation & Claims]], [[Contract Types & Structures]]

---

## Purpose

The construction schedule is a contract document — it defines when things happen, what depends on what, and who is accountable for the timeline. A good schedule specification ensures the GC produces a schedule the PM can actually use for monitoring, decision-making, and delay analysis. A bad schedule specification (or none at all) produces a bar chart that looks pretty in an OAC meeting but crumbles the moment there's a dispute. This note covers what to specify in the contract, how to evaluate a GC's schedule submission, and how to read schedule updates for the signals that matter.

---

## Schedule Specification — What to Include in the Contract

The schedule specification should be part of Division 01 (General Requirements) of the project specifications, or included as an exhibit to the contract. These requirements should be established during [[05 - Procurement & Bidding]] and confirmed during [[06 - Preconstruction]].

### Core Requirements

| Requirement | Specification Language | Why It Matters |
|-------------|----------------------|----------------|
| **Software** | "The Contractor shall prepare and maintain the project schedule using Oracle Primavera P6 or Microsoft Project. Bar charts, spreadsheets, and PDF-only submissions are not acceptable." | CPM software maintains logic ties, calculates float, and enables delay analysis. A bar chart cannot do any of these things. |
| **Methodology** | "The schedule shall be prepared using the Critical Path Method (CPM) with logical relationships (Finish-to-Start, Start-to-Start, Finish-to-Finish, Start-to-Finish) between all activities." | CPM is the industry standard. Without logic ties, there is no critical path, no float calculation, and no ability to perform delay analysis. |
| **Activity count and detail** | "The schedule shall contain a minimum of [X] activities and a maximum of [Y] activities, with no activity exceeding [Z] working days in duration." | Too few activities = not enough detail to monitor. Too many = noise. Activity duration caps force the GC to break large tasks into trackable pieces. |
| **Critical path identification** | "The Contractor shall identify and highlight the critical path in every schedule submission and update. The longest path method shall be used for critical path determination." | Ensures the GC actively manages the critical path, not just the activities that are convenient. |
| **Float** | "Total float is a shared project resource and shall not be considered the exclusive property of either party. The Contractor shall not sequence activities to artificially consume or create float." | Prevents the GC from manipulating float to their advantage (e.g., front-loading float on their activities and zero float on owner-dependent activities). |
| **Constraints** | "The use of constraints (Must Start, Must Finish, Start No Later Than) shall be minimized. Any constraint other than the project completion milestone shall be identified and justified in writing." | Constraints override logic and can mask the true critical path. A schedule full of constraints is a bar chart pretending to be a CPM schedule. |
| **Calendars** | "The Contractor shall define calendars that reflect actual working days, including weather days based on [specified] historical data for the project location. Calendars shall be submitted for approval." | Prevents the GC from using unrealistic calendars (e.g., 7-day work weeks, no holidays, no weather) to make the schedule look shorter. |
| **Cost loading** | "The Contractor shall cost-load the schedule by assigning the cost of each activity consistent with the approved Schedule of Values." | Enables earned value tracking: the PM can compare planned expenditure vs. actual expenditure vs. schedule progress. |
| **Resource loading** | "The Contractor shall resource-load all critical path activities, showing planned labor hours or crew sizes by trade." | Enables the PM to validate that the GC actually has enough people to execute the plan. A schedule that shows 4 trades on the critical path in the same week with a total crew of 6 people isn't realistic. |
| **Milestone identification** | "The following milestones shall be included in the schedule: [list project-specific milestones — permit, NTP, dry-in, power-on, substantial completion, CO, etc.]" | Establishes the key dates the PM will track and report against. |

### Update and Submission Requirements

| Requirement | Specification Language | Why It Matters |
|-------------|----------------------|----------------|
| **Baseline submission** | "The Contractor shall submit the baseline schedule within [14-21] days of NTP for Owner review and approval. Construction shall not proceed beyond initial mobilization activities until the baseline schedule is approved." | Establishes the agreed-upon plan before work begins. Without an approved baseline, there is no reference point for measuring delay. |
| **Monthly updates** | "The Contractor shall update the schedule monthly, reflecting actual start and finish dates for completed activities, remaining duration for in-progress activities, and any logic or sequence changes." | Keeps the schedule current and creates the record needed for delay analysis. |
| **Narrative report** | "Each schedule update shall be accompanied by a written narrative describing: (a) activities completed since last update, (b) activities started since last update, (c) critical path changes, (d) schedule variance explanation for any activity more than [5] days behind plan, (e) recovery measures for any critical path slippage." | Forces the GC to explain deviations rather than just submit updated dates. The narrative is often more valuable than the schedule data itself. |
| **Recovery schedule** | "If the project falls [X] days behind the current approved schedule on the critical path, the Contractor shall submit a recovery schedule within [7-10] business days at no additional cost to the Owner, demonstrating how the Contractor will recover the lost time." | Contractual obligation to recover — shifts the burden to the GC for non-excusable delays. See [[Schedule Recovery & Acceleration]] for recovery techniques. |
| **3-week look-ahead** | "The Contractor shall provide a rolling 3-week look-ahead schedule at each weekly OAC meeting, showing activities planned for the next three weeks with responsible trade, planned manpower, and required inspections." | The operational scheduling tool. The master schedule shows the big picture; the look-ahead shows what's happening next week. |
| **Electronic submission** | "Schedule submissions shall be in native format (.xer for P6, .mpp for MS Project) AND PDF. Native format is required to enable independent schedule analysis." | PDF-only submissions cannot be analyzed. The PM needs the native file to verify logic, check constraints, and perform independent delay analysis. |

### Duration and Activity Guidelines by Project Type

| Project Type | Recommended Activity Count | Max Activity Duration | Update Frequency |
|-------------|--------------------------|----------------------|-----------------|
| Retail TI (1,500-5,000 SF) | 75-150 activities | 10 working days | Bi-weekly or monthly |
| Restaurant build-out | 100-200 activities | 10 working days | Bi-weekly or monthly |
| Retail pad site (new build) | 150-300 activities | 15 working days | Monthly |
| Ground-up commercial (10k-50k SF) | 300-600 activities | 15 working days | Monthly |
| National rollout program (per site) | 100-200 per site + program-level summary | 10 working days | Monthly per site; weekly program summary |

---

## Evaluating the Baseline Schedule

When the GC submits the baseline schedule, the PM must review it critically before approving. An approved baseline is the measuring stick for the entire project — approving a bad baseline creates problems that compound for the duration of construction.

### Baseline Review Checklist

| Check | What to Look For | Acceptable | Unacceptable |
|-------|-----------------|-----------|-------------|
| **Logic completeness** | Every activity (except the first and last) has at least one predecessor and one successor | All activities linked | Open-ended activities ("danglers") that don't connect to the network |
| **Relationship types** | Primarily Finish-to-Start (FS) relationships. SS and FF used sparingly and with justification. | 80%+ FS relationships | Heavy use of SS/FF without lags = artificially compressed schedule |
| **Constraints** | Minimal constraints beyond the project start and completion milestones | < 5% of activities constrained | Constraints on many activities = bar chart, not CPM |
| **Critical path reasonableness** | The critical path runs through the logically longest chain of activities (typically: foundation → structure → MEP rough → drywall → finishes → CO) | CP matches expected construction logic for this project type | CP runs through non-typical activities (e.g., landscaping is critical before the building is dried in) |
| **Float distribution** | Float is distributed logically — early activities have more float, late activities have less | Float ranges from 20+ days early to 0-5 days near completion | All activities have 0 float (over-constrained) or all have 40+ days float (fake logic) |
| **Duration reasonableness** | Activity durations match industry benchmarks for the scope and crew size | Durations align with trade benchmarks and specified resource loading | Unrealistic durations (5 days for a scope that typically takes 15) |
| **Calendar accuracy** | Working day calendar reflects actual conditions (holidays, weather days, restricted hours) | Calendar matches the contract requirements and local conditions | 7-day calendar with no holidays or weather |
| **Milestone alignment** | Contract milestones are included and match the contractual dates | All specified milestones present and on target | Missing milestones or dates that don't match the contract |
| **Resource loading (if required)** | Critical path activities show adequate labor to achieve the planned duration | Crew sizes match the work volume and available space | Unrealistic crew sizes (12 electricians in a 2,000 SF space) |
| **Cost loading (if required)** | Activity costs align with the approved SOV | Costs match SOV line items; front-loading is minimal | Costs heavily front-loaded (GC trying to bill ahead of actual progress) |

### Common Baseline Manipulation Tactics

GCs sometimes submit schedules that serve their interests rather than accurately modeling the project. The PM should watch for:

| Tactic | How to Identify | PM Response |
|--------|----------------|-------------|
| **Hidden float** | Activities have excessive lag times or padded durations that create artificial float the GC can consume | Compare durations against benchmarks; challenge lags without justification |
| **Constraint-driven schedule** | Many activities are date-constrained rather than logic-driven. When you change one activity, nothing else moves. | Check constraint count. Require logic ties instead of constraints. |
| **Artificial critical path** | The stated critical path doesn't match the logical longest path because of constraint manipulation | Run the longest-path calculation independently; compare |
| **Front-loaded SOV** | Cost loading assigns disproportionate value to early activities so the GC can bill ahead of actual progress | Compare cost loading against actual material and labor distribution; reject if skewed |
| **Optimistic durations on GC-controlled activities; pessimistic durations on owner-dependent activities** | GC shows 5 days for their submittals but 21 days for architect review | Apply the same standards to both: contractual review periods for the architect; realistic durations for the GC |
| **Missing predecessor logic on owner activities** | Owner-dependent activities (decisions, approvals, FFE delivery) don't have predecessors, so they can't be shown as causing delay | Require logic ties on all activities, including owner responsibilities |

---

## Reading Schedule Updates for Problems

After the baseline is approved, the PM reviews monthly updates. Here's what to look for:

### Key Metrics to Track

| Metric | What It Shows | How to Calculate | Warning Threshold |
|--------|-------------|-----------------|-------------------|
| **Schedule Variance (SV)** | Whether the project is ahead of or behind plan | Earned Value of work completed - Planned Value of work scheduled | Negative SV > 5% of total project value |
| **Schedule Performance Index (SPI)** | Efficiency of schedule execution | Earned Value ÷ Planned Value | SPI < 0.90 |
| **Critical Path Float Trend** | Whether the critical path is gaining or losing float over time | Plot total float on the critical path at each update | Declining trend for 3+ consecutive updates |
| **Activity Completion Rate** | Whether activities are finishing on time | % of activities completed within planned duration ÷ total activities completed | < 70% on-time completion |
| **Out-of-Sequence Progress** | Whether work is happening in a different order than planned | Count activities with actual progress but whose predecessors are incomplete | Any critical-path activity progressing out of sequence |

### Schedule Update Red Flags

| Red Flag | What It Means | PM Action |
|----------|-------------|-----------|
| Logic changes without explanation | GC may be manipulating the critical path to avoid showing delay | Require logic change justification in the narrative report |
| Added constraints on updates | Same manipulation — constraints can hide float consumption | Reject updates with unexplained new constraints |
| Activities "completed" without field verification | GC may be marking activities done to show progress on paper | Cross-check against daily reports and field observations |
| Remaining durations not updated | GC submitted the same durations as last month despite work progress | Reject and require actual remaining duration assessment |
| Critical path shifts frequently between updates | Unstable schedule — either the logic is wrong or the project is genuinely volatile | Investigate the cause; may indicate systemic GC scheduling issues |
| Negative float appears on the critical path | The project is projected to finish after the contractual completion date | Immediate escalation; require recovery schedule per contract |
| Resource loading removed from updates | GC may be hiding the fact that they've reduced crew sizes | Require resource loading on every update if specified in the contract |

---

## Schedule Analysis for the PM

The PM doesn't need to be a P6 expert, but the PM should be able to perform basic schedule analysis or direct a scheduling consultant to do so.

### Independent Schedule Checks the PM Should Perform

| Check | Method | Frequency |
|-------|--------|-----------|
| **Verify the critical path** | Open the native file; filter for total float = 0 or run longest path | Every update |
| **Check for danglers** | Filter for activities with no predecessor or no successor | Every update |
| **Count constraints** | Filter for constrained activities; compare against baseline count | Every update |
| **Float trend** | Plot critical-path total float over time (should be stable or declining gradually, not erratically) | Monthly |
| **Earned value check** | Compare cost-loaded progress against actual billings | Monthly (align with pay app review) |
| **Logic change comparison** | Compare current update logic against prior update; identify added/removed relationships | Every update |
| **Duration change comparison** | Compare original duration vs. remaining duration on in-progress activities | Every update |

### When to Engage a Scheduling Consultant

For most retail TI and restaurant projects, the PM can handle schedule review internally. For larger or more complex projects, or when disputes arise, engage a scheduling consultant for:

- Baseline schedule review and approval (ground-up commercial, institutional)
- Delay analysis (TIA, as-planned vs. as-built) when time extensions are disputed
- Claims support and preparation
- Independent schedule audit when the GC's schedule appears unreliable
- Portfolio-level schedule coordination for rollout programs with 10+ concurrent sites

**Budget guideline:** Scheduling consultant fees typically range from $150-$300/hour. A baseline review takes 4-8 hours for a mid-size project. A full delay analysis for a disputed claim can take 40-100+ hours.

---

## Program-Level Schedule Management

For rollout programs with multiple concurrent projects, the PM needs a program schedule overlay in addition to individual project schedules.

### Program Schedule Requirements

| Element | Purpose |
|---------|---------|
| **Program milestone summary** | One-page view showing key milestones (permit, NTP, dry-in, SC, CO) for all active projects | Enables client reporting and pipeline velocity tracking |
| **Resource calendar** | When each shared resource (GC, key subs, architect) is committed across projects | Identifies resource conflicts before they cause delays (see [[Trade Dependency Matrix — PM Perspective]]) |
| **Long-lead procurement tracker** | Delivery dates for long-lead items across all projects | Enables bulk procurement and identifies supply chain bottlenecks |
| **Program critical path** | The sequence of projects that determines overall program completion | Important for programs with a defined end date or annual rollout targets |

### Program Schedule Health Dashboard

| Metric | Green | Yellow | Red |
|--------|-------|--------|-----|
| **Projects on schedule** | > 80% of active projects | 60-80% | < 60% |
| **Average schedule variance** | Within 5% | 5-15% behind | > 15% behind |
| **Pipeline velocity** | Meeting or exceeding target (e.g., 2 COs per month) | Slightly below target | > 25% below target |
| **Long-lead items on track** | All items within 1 week of plan | 1-2 items at risk | Any item confirmed late with no recovery plan |
| **Resource conflicts identified** | All conflicts identified 4+ weeks ahead | Conflicts identified 2-4 weeks ahead | Conflicts discovered week-of |

---

## Quick Reference: Schedule Terminology

| Term | Definition |
|------|-----------|
| **CPM** | Critical Path Method — the scheduling methodology that calculates the longest path through the project network |
| **Critical path** | The longest sequence of dependent activities; determines the minimum project duration. Any delay on the critical path delays the project. |
| **Total float** | The amount of time an activity can be delayed without delaying the project completion date |
| **Free float** | The amount of time an activity can be delayed without delaying any successor activity |
| **Longest path** | The true critical path when calculated from finish to start through the network. More reliable than filtering for float = 0 when negative float or constraints exist. |
| **Data date** | The point in time through which actual progress has been recorded. Everything before the data date is actual; everything after is projected. |
| **Baseline** | The original approved schedule. The measuring stick for all progress and delay analysis. |
| **Fragnet** | A fragment of schedule activities inserted to model a delay event or change for time impact analysis. |
| **Out-of-sequence progress** | When an activity progresses before its predecessor is complete. Can indicate fast-tracking or can indicate a logic error. |
| **FS, SS, FF, SF** | Finish-to-Start, Start-to-Start, Finish-to-Finish, Start-to-Finish — the four relationship types between activities |
| **Lag** | A delay between two related activities (e.g., FS + 3 days = successor starts 3 days after predecessor finishes). Lags should be justified and documented. |
| **Constraint** | A date restriction applied to an activity that overrides the CPM logic. Should be used sparingly. |
| **Earned value** | The budgeted cost of work actually performed — used to measure schedule and cost performance simultaneously |
| **SPI** | Schedule Performance Index (Earned Value ÷ Planned Value). 1.0 = on schedule; < 1.0 = behind; > 1.0 = ahead |

---

## Related

- [[Construction PM Knowledge Base]] — Master reference
- [[06 - Preconstruction]] — Baseline schedule development
- [[07 - Construction Execution]] — Schedule management during construction
- [[Schedule Recovery & Acceleration]] — Recovery when schedule slips
- [[Delay Documentation & Claims]] — Using the schedule record for claims
- [[Trade Dependency Matrix — PM Perspective]] — Trade sequencing that drives the schedule
- [[Contract Types & Structures]] — Schedule-related contract provisions
- [[Financial Management & Billing]] — Cost loading and earned value alignment

---

*Update with firm-specific schedule specification templates, preferred scheduling consultants, client-specific reporting requirements, and lessons learned from schedule disputes.*
