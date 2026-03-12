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
  - recovery
  - construction-kb
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Work Hub|Work Hub]] · [[Construction PM Knowledge Base|Construction KB]]

---

# Schedule Recovery & Acceleration

> Cross-cutting reference for [[Construction PM Knowledge Base]]
> Related: [[07 - Construction Execution]], [[Risk Management Framework]], [[Trade Dependency Matrix — PM Perspective]]

---

## Purpose

When a project falls behind schedule, the PM must diagnose the cause, classify the delay, evaluate recovery options, and recommend a path forward — balancing cost, risk, quality, and contractual obligations. This note provides the frameworks, decision trees, and practical tools Atlas needs to advise on schedule recovery across all project types and phases.

---

## Delay Classification

Before recommending recovery, classify the delay. Classification drives who pays, who owns the fix, and what contractual remedies apply.

### By Responsibility

| Type | Definition | Schedule Relief | Cost Relief | Example |
|------|-----------|----------------|-------------|---------|
| **Excusable + Compensable** | Caused by owner or owner's agents; contractor is not at fault | Yes — time extension | Yes — GC recovers added costs | Owner-directed design change mid-construction; late owner-furnished equipment |
| **Excusable + Non-Compensable** | Neither party at fault; force majeure or acts of God | Yes — time extension | No — each party bears own costs | Weather beyond historical norms; pandemic; permit moratorium |
| **Non-Excusable** | Caused by contractor or contractor's agents | No — GC absorbs | No — GC absorbs | Sub no-shows; poor sequencing; material ordering errors |
| **Concurrent** | Multiple independent delays from different parties overlap | Contested — depends on contract and jurisdiction | Contested — typically no cost recovery for either party | Owner-caused design delay AND GC-caused procurement delay hitting the same milestone |

### By Impact

| Category | Critical Path Impact | Action Required |
|----------|---------------------|----------------|
| **Critical delay** | Pushes the project completion date | Immediate recovery plan required |
| **Near-critical delay** | Consumes float on a path within 5 days of critical | Monitor closely; develop contingency plan |
| **Non-critical delay** | Absorbed by available float | Document; monitor float consumption trend |

**PM Rule:** Track float consumption rate, not just current float. A path losing 2 days of float per week will become critical — the PM should flag this before it happens, not after.

---

## Delay Analysis Methods

When delays are disputed or when documenting for potential claims, the PM should understand common analysis methodologies:

### As-Planned vs. As-Built

Compare the original baseline schedule against actual completion dates. Simple and intuitive but does not account for concurrent delays or schedule logic changes. Best for straightforward single-cause delays.

**When to use:** Internal reporting, simple owner-caused delays, post-project lessons learned.

### Impacted As-Planned

Insert the delay event into the baseline schedule and calculate the theoretical impact. Shows what "should have happened" if the delay had been the only variable.

**When to use:** Prospective analysis (predicting impact of a known delay); GC time extension requests.

**Limitation:** Does not reflect actual project conditions — the baseline may already have been unrealistic.

### Time Impact Analysis (TIA)

The gold standard for delay analysis during active construction. Insert the delay event into the schedule at the point in time it occurred (the "data date"), using the schedule status current as of that date. Calculate the resulting shift to the critical path.

**When to use:** Real-time delay evaluation during construction; formal time extension requests; dispute documentation.

**PM Responsibilities:**
- Require the GC to submit TIAs with any time extension request
- Verify the data date and schedule status are accurate (not cherry-picked)
- Confirm the delay event is modeled correctly (duration, logic ties, constraints)
- Check that the analysis uses the current approved schedule update, not the original baseline

### Collapsed As-Built (But-For)

Start with the actual as-built schedule and remove the delay event. The difference between the as-built duration and the "but-for" duration is the delay impact. Retrospective analysis — used after the fact.

**When to use:** Claims, disputes, litigation support, lessons learned.

### Windows Analysis

Divide the project timeline into discrete windows (typically monthly) and analyze delays within each window independently. The most thorough but most labor-intensive method.

**When to use:** Complex disputes with multiple concurrent delays from multiple parties; litigation.

---

## Schedule Recovery Techniques

When a critical delay is identified, the PM evaluates recovery options in order of preference (least cost/risk first):

### 1. Re-Sequencing (Preferred — Often Zero Cost)

Reorder remaining activities to work around the delay without adding resources.

**Examples:**
- Start interior rough-in in an unaffected wing while waiting for structural steel delivery on the delayed wing
- Pull landscape/sitework forward during an interior finish delay (weather permitting)
- Begin MEP trim in completed areas while drywall continues in others
- Start closeout documentation collection early while punch list work is underway

**PM Actions:**
- Review the 3-week look-ahead with the GC for re-sequencing opportunities
- Identify activities with float that can be moved earlier to create breathing room
- Confirm that out-of-sequence work won't create quality or inspection problems
- Update the schedule to reflect the new logic

**Limitations:** Only works when there are parallel paths with available float. On heavily linear projects (single-story retail TI), options are limited.

### 2. Fast-Tracking (Moderate Cost, Moderate Risk)

Overlap activities that were originally planned in sequence. Introduces risk because successor work begins before predecessor is fully complete.

**Examples:**
- Begin framing in one section while foundation work continues in another (on phased pours)
- Start HVAC ductwork in completed framing areas while electrical rough-in continues nearby
- Begin drywall in finished rooms while MEP rough-in continues in others (requires careful inspection coordination)
- Submit for permit on a partially complete CD set (early foundation/shell package) while design continues

**PM Actions:**
- Identify which activity overlaps are feasible without creating rework risk
- Coordinate with the architect on any phased inspection requirements
- Confirm the AHJ will accept phased inspections (not all jurisdictions will)
- Quantify the risk: if the predecessor work changes, how much rework results?
- Get GC buy-in — the superintendent must be comfortable managing the overlap

**Limitations:** Increases coordination complexity; may require additional supervision; risk of rework if predecessor activities change.

### 3. Additional Resources / Overtime (Higher Cost, Low-Moderate Risk)

Add manpower, extend work hours, or add work days (Saturday/Sunday) to compress activity durations.

**Options:**

| Technique | Typical Cost Premium | Productivity Impact | Best For |
|-----------|---------------------|-------------------|----------|
| **Additional crew (same trade)** | Proportional to headcount | 85-95% efficiency (stacking losses) | Large-area work: drywall, painting, flooring |
| **Second shift** | 10-15% shift differential | 80-90% of day shift productivity | MEP rough-in, drywall finishing, painting |
| **Extended hours (10-12 hr days)** | OT premium (1.5x after 8 or 40) | Diminishing returns after 10 hrs; fatigue-related quality drops after week 2 | Short-duration push (1-2 weeks max) |
| **Weekend work (Saturday)** | OT premium (1.5x-2x) | 85-95% of weekday productivity | Concrete pours, critical-path activities |
| **Weekend work (Sunday)** | Double-time in many jurisdictions | Lower productivity; supervision gaps | Emergency recovery only |

**PM Actions:**
- Determine which specific activities need compression (critical path only — don't pay OT on non-critical work)
- Request the GC's cost proposal for acceleration BEFORE authorizing
- Establish a not-to-exceed budget for the acceleration effort
- Define the target milestone and stop acceleration once it's achieved
- Monitor quality closely — overtime and stacking degrade workmanship
- Check local noise ordinances and permit conditions for extended hour restrictions
- Verify landlord/property rules on weekend and after-hours work (especially in occupied retail centers)

**Diminishing Returns Warning:** Productivity drops significantly after 2 consecutive weeks of 50+ hour weeks. After 4 weeks of sustained overtime, effective productivity per hour can drop 25-35%. Short, targeted pushes are far more effective than sustained overtime.

### 4. Scope Reduction / Phased Occupancy (Cost Savings, But Scope Impact)

Reduce or defer scope to meet a critical date, or occupy the project in phases.

**Examples:**
- Defer exterior landscaping and complete post-occupancy (common in retail — landlord may allow temporary CO)
- Reduce finish scope (standard tile instead of custom; paint-grade millwork instead of stain-grade)
- Phased occupancy — open the sales floor while back-of-house is completed (requires TCO coordination with AHJ)
- Defer punch list items that don't affect operations

**PM Actions:**
- Identify scope items that are not on the critical path to occupancy
- Confirm with the AHJ whether a Temporary Certificate of Occupancy (TCO) is available
- Get owner/client approval for any scope deferral in writing
- Establish a firm completion date for deferred items
- Verify landlord lease requirements — some leases define "substantial completion" narrowly

### 5. Crash Schedule (Highest Cost, Highest Risk)

Throw maximum resources at the critical path. Combines multiple techniques: overtime + additional crews + fast-tracking + re-sequencing. The "nuclear option."

**When to use:** Liquidated damages are imminent; lease commencement date is contractually fixed; client grand opening is publicly committed.

**PM Actions:**
- Develop a formal crash plan with the GC: identify every critical-path activity, the crash duration, the crash cost, and the cost per day saved
- Calculate the cost-benefit: is the daily crash cost less than the daily liquidated damages or daily lost revenue?
- Get owner authorization in writing with a defined budget
- Assign dedicated PM/superintendent oversight to the crash effort
- Daily schedule updates during crash period (not weekly)
- Accept that quality risk increases — add inspection frequency proportionally

---

## Cost-Benefit Framework for Acceleration

The PM should present acceleration decisions to the owner using this framework:

### Calculate the Daily Cost of Delay

| Cost Component | How to Calculate |
|---------------|-----------------|
| **Liquidated damages** | Per contract (typically $500-$5,000/day for retail; higher for larger projects) |
| **Lost revenue** | Owner's daily revenue or rent if the delay prevents occupancy |
| **Extended general conditions** | GC's daily cost for superintendent, trailer, insurance, equipment (~$500-$2,000/day typical for retail) |
| **Carry costs** | Construction loan interest on outstanding balance (daily) |
| **Lease penalties** | If rent commencement is tied to a delivery date |
| **Reputational cost** | Hard to quantify but real — especially in rollout programs where delays cascade to future site selections |

### Compare Against Recovery Cost

| Recovery Technique | Cost to Implement | Days Recovered | Cost Per Day Saved |
|-------------------|------------------|---------------|-------------------|
| Re-sequencing | $0 (GM time only) | X days | $0 |
| Fast-tracking | $Y (added coordination + rework risk) | X days | $Y/X |
| Saturday work (4 weekends) | $Z (OT premium) | X days | $Z/X |
| Second shift (2 weeks) | $W | X days | $W/X |
| Additional crew | $V | X days | $V/X |

**Decision Rule:** If cost per day saved < daily cost of delay → accelerate. If cost per day saved > daily cost of delay → accept the delay and negotiate a time extension.

**Present this as a table to the client.** It turns an emotional conversation ("we're late!") into a business decision.

---

## Liquidated Damages — PM Strategy

### Prevention

- Track the critical path weekly — not monthly
- Flag critical-path slippage at the first OAC meeting where it appears
- Require the GC to present a recovery plan within one week of any critical-path slippage
- Document all delay causes contemporaneously (not retrospectively)
- Maintain a clear record of owner-caused delays (design changes, late decisions, owner-furnished item delays) — these offset LD exposure

### When LDs Are Imminent

- Confirm the LD provision in the contract: daily amount, cap, triggering event (substantial completion date), notice requirements
- Verify whether the substantial completion date has been formally adjusted by approved change orders or time extensions
- Calculate total LD exposure: daily rate × projected days late
- Evaluate whether the GC has legitimate grounds for a time extension (excusable delays)
- Present the owner with options: enforce LDs, negotiate a reduced amount, waive in exchange for other concessions (warranty extension, quality improvements, future pricing)
- **Never threaten LDs as a motivational tool** — it poisons the relationship and rarely accelerates the work. Use them as a contractual remedy when warranted.

### Documentation Requirements

If the owner may pursue LDs, the PM must ensure the record supports the claim:

- Baseline schedule showing the original substantial completion date
- All approved change orders and time extensions (showing the adjusted date)
- Weekly schedule updates showing actual progress vs. planned
- Daily reports documenting GC staffing, weather, and work progress
- Written notices of schedule concern (sent per contract requirements)
- Evidence that the delay is non-excusable (i.e., not owner-caused or force majeure)

---

## Weather Delay Management

### Documentation Standard

- Record weather conditions daily in the daily report (even on good-weather days — establishes the baseline)
- Use a consistent threshold: "Weather day" = conditions that prevent work for more than 50% of the scheduled workday for the critical-path activity in progress
- Compare actual weather days against historical averages for the project location and season
- Most contracts allow time extensions only for weather exceeding historical norms — "expected" weather is priced into the schedule

### Nashville / Middle Tennessee Benchmarks

| Month | Avg Rain Days (>0.1") | Typical Weather-Day Allowance |
|-------|----------------------|------------------------------|
| Jan-Feb | 9-10/month | 3-4 days/month |
| Mar-Apr | 10-11/month | 3-4 days/month |
| May-Jun | 9-10/month | 2-3 days/month |
| Jul-Aug | 8-9/month | 2-3 days/month |
| Sep-Oct | 7-8/month | 2-3 days/month |
| Nov-Dec | 9-10/month | 3-4 days/month |

**Note:** These are general benchmarks. Contract-specific allowances should be established during preconstruction and documented in the baseline schedule.

### Seasonal Planning

- Schedule foundation and sitework for dry seasons when possible
- If a winter pour is necessary, include cold-weather concrete provisions in the budget
- Plan building dry-in before the rainy season to protect interior work
- In the Southeast, summer afternoon thunderstorms are predictable — schedule outdoor critical-path work for mornings

---

## The PM's Schedule Recovery Playbook

When a project falls behind, Atlas should guide Nathan through this sequence:

### Step 1: Diagnose (Day 1-2)

- How many days behind is the critical path?
- What caused the delay? (Classify using the delay types above)
- Is it ongoing or resolved?
- What is the current contractual completion date (including approved time extensions)?
- What is the current LD exposure (if any)?

### Step 2: Assess Options (Day 2-3)

- Can re-sequencing recover the time at zero cost?
- Can fast-tracking recover time with acceptable risk?
- What does overtime/additional resources cost vs. the daily delay cost?
- Is scope reduction or phased occupancy viable?
- Does the GC have a contractual obligation to recover, or is this an owner-directed acceleration?

### Step 3: Decide (Day 3-5)

- Present the cost-benefit analysis to the owner
- Get authorization for the recovery approach (in writing)
- If the GC bears responsibility, issue a formal schedule recovery demand per the contract
- If the owner bears responsibility, process the appropriate time extension and/or acceleration directive

### Step 4: Execute (Ongoing)

- GC submits a revised recovery schedule within 5 business days
- PM reviews and approves the recovery schedule
- Increase schedule reporting frequency: weekly → twice weekly or daily during active recovery
- Monitor recovery progress against the plan
- Adjust if the recovery isn't working — don't wait for the next OAC meeting

### Step 5: Document (Continuous)

- Maintain a recovery log: what was tried, what worked, what didn't
- Document all cost impacts of the recovery effort
- If acceleration is owner-directed, track costs separately for potential change order
- Update ATLAS_MEMORY with lessons learned after recovery is complete

---

## Schedule Recovery by Project Type

### Retail TI (6-12 week schedule)

- **Tightest margin for error** — one week of delay is 8-17% of the total schedule
- **Most common delays:** Permit delays, long-lead millwork/fixtures, landlord base-building issues
- **Best recovery options:** Overtime on weekends (small space = small crew = manageable OT cost); fast-track drywall/MEP trim overlap; defer signage and landscaping
- **LD risk:** Moderate — lease commencement dates are the real driver

### Restaurant Build-Out (8-16 week schedule)

- **Kitchen equipment** is almost always the critical path constraint (6-12 week lead times)
- **Most common delays:** Equipment delivery, hood/fire suppression coordination, health department inspection scheduling
- **Best recovery options:** Pre-stage equipment early; overlap finish work with equipment installation; schedule health department pre-inspection during construction (some AHJs allow it)
- **LD risk:** High — grand opening dates often have marketing commitments

### Ground-Up Commercial (6-12 month schedule)

- **More float available** — re-sequencing is often viable
- **Most common delays:** Steel delivery, weather on sitework/foundations, design coordination errors discovered in field
- **Best recovery options:** Re-sequence interior/exterior work; fast-track envelope with interior rough-in; add second shift for concrete and steel; phase sitework
- **LD risk:** Varies — development timeline and financing milestones drive urgency

### National Rollout Programs

- **Portfolio effect** — a delay on one site impacts the program pipeline velocity
- **Resource conflicts** — the same GC/subs may be on multiple program sites
- **Best recovery approach:** Build recovery float into the program schedule (not just the project schedule); identify backup subs and GCs for critical trades; standardize prototype designs to reduce RFI volume and long-lead variability
- **LD risk:** Often contractual at the program level, not just per-site

---

## Contract Provisions the PM Should Know

### Schedule Specification Requirements

Ensure these are in the contract before construction starts:

- **Schedule software:** Specify acceptable platforms (P6, MS Project, etc.)
- **Update frequency:** Monthly minimum; weekly during critical periods
- **Critical path identification:** GC must identify and maintain the critical path in every update
- **Float ownership:** Specify who owns float (project float, not contractor float — per best practice)
- **Resource loading:** Required for schedule validation (can't claim delay recovery without showing resource changes)
- **Cost loading:** Ties schedule to SOV for earned value tracking
- **Recovery schedule requirement:** If the project falls X days behind, GC must submit a recovery schedule within Y business days at no additional cost

### Time Extension Process

The contract should specify:

- Written notice requirement (typically 7-14 days from when the delay event is identified)
- Documentation required (TIA, supporting records)
- Approval authority (PM vs. owner)
- Effect on liquidated damages calculation

### Acceleration Directive

If the owner directs acceleration (not caused by GC delay), this is typically a compensable change. The contract should address:

- Owner's right to direct acceleration
- GC's obligation to provide a cost proposal
- How acceleration costs are tracked and billed
- Mutual agreement on the recovery target

---

## Metrics for Schedule Health

Atlas should track and report these metrics weekly:

| Metric | Green | Yellow | Red |
|--------|-------|--------|-----|
| **Critical path float** | ≥ 10 days | 5-9 days | < 5 days |
| **Float consumption rate** | Stable or improving | Losing 1-2 days/week | Losing > 2 days/week |
| **Schedule variance (earned vs. planned)** | Within 5% | 5-10% behind | > 10% behind |
| **RFI turnaround (avg days open)** | < 7 days | 7-14 days | > 14 days |
| **Submittal turnaround (avg days)** | < 14 days | 14-21 days | > 21 days |
| **Open change orders (pending days)** | < 14 days | 14-30 days | > 30 days |
| **Long-lead items on track** | All items within 1 week of plan | 1-2 items at risk | Any item confirmed late |

---

## Related

- [[Construction PM Knowledge Base]] — Master reference
- [[07 - Construction Execution]] — Phase 7 detail
- [[Risk Management Framework]] — Risk categories and response strategies
- [[Trade Dependency Matrix — PM Perspective]] — Trade sequencing from PM lens
- [[Contract Types & Structures]] — Contract provisions
- [[Financial Management & Billing]] — Cost tracking
- [[PM-to-Builder Translation Guide]] — Translating recovery directives to field language
- [[Delay Documentation & Claims]] — Documentation standards for delay events
- [[Schedule Specification & Analysis Methods]] — Schedule spec and analysis foundations
- [[Subcontractor Default & Replacement]] — Sub-caused delay response
- [[Commissioning & Systems Turnover]] — When commissioning delays threaten CO
- [[Multi-Project Resource Conflicts]] — When resource conflicts cause schedule delays across the portfolio

---

*Update with project-specific recovery experiences, local sub acceleration pricing benchmarks, and AHJ-specific inspection scheduling constraints as lessons are learned.*
