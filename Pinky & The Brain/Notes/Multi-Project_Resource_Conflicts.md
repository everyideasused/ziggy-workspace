---
type: resource
area: work
status: active
tags:
  - work
  - resource
  - knowledge-base
  - construction
  - program-management
  - resources
  - construction-kb
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Work Hub|Work Hub]] · [[Construction PM Knowledge Base|Construction KB]]

---

# Multi-Project Resource Conflicts

> Cross-cutting reference for [[Construction PM Knowledge Base]]
> Related: [[Trade Dependency Matrix — PM Perspective]], [[Schedule Recovery & Acceleration]], [[Subcontractor Default & Replacement]], [[07 - Construction Execution]]

---

## Purpose

When managing 10-25 projects across 4-6 clients — Nathan's typical portfolio — the same resources appear on multiple projects simultaneously: GCs, subcontractors, architects, engineers, and even AHJ plan reviewers. A resource that's adequate for one project at a time becomes a bottleneck when three projects need them in the same week. This note gives Atlas the frameworks to identify, prevent, and resolve resource conflicts at the program and portfolio level.

---

## Resource Conflict Types

### Type 1: Shared Subcontractor Conflicts

**The most common and most impactful.** The same MEP sub, drywall crew, or specialty contractor is on multiple program sites and can't staff them all simultaneously.

**How It Manifests:**
- Sub pulls crew from Site A to Site B because Site B is "more ready"
- Sub sends the B-team to your project and the A-team to a higher-paying job
- Sub's foreman is splitting time between two of your sites, effective on neither
- Lead times slip because the sub's shop is fabricating for multiple projects and yours isn't prioritized

**Leading Indicators:**
- Sub's crew size on your project drops without a scope-based reason
- Sub misses confirmed start dates on the 3-week look-ahead
- Quality declines (different, less experienced workers)
- Sub stops attending coordination meetings at one site but not the other
- Sub requests schedule changes that benefit their other projects at your project's expense

### Type 2: Shared GC Conflicts

When the same GC is on multiple projects in your program and their management bandwidth is stretched.

**How It Manifests:**
- Superintendent is covering two sites (spending mornings at one, afternoons at the other)
- GC's project manager is behind on submittals and pay apps because they're juggling too many projects
- Material procurement falls behind because the GC's office staff is overloaded
- Safety compliance drops as supervision is spread thin
- Quality control gaps increase — GC isn't catching sub deficiencies because nobody is walking the site daily

**Leading Indicators:**
- Daily reports become less detailed or stop arriving on time
- Superintendent isn't on site when the PM visits
- RFI quality drops (vague questions, incomplete information)
- Schedule updates become perfunctory (no narrative, no logic changes, just shifted dates)
- The GC starts requesting time extensions on multiple sites simultaneously

### Type 3: Shared Design Team Conflicts

The same architect or engineering firm is on multiple projects and review times are stretching.

**How It Manifests:**
- Submittal review turnaround exceeds contractual targets
- RFI responses slow down (7-day target becomes 14-21 days)
- CA site visits are rushed or skipped
- Drawing revisions take longer than expected
- Design coordination errors increase (consultants aren't communicating across their own team)

**Leading Indicators:**
- RFI and submittal log shows a trend of increasing turnaround times
- Architect sends junior staff to OAC meetings instead of the project architect
- ASIs have errors or incomplete information
- Architect requests OAC meeting time changes to accommodate their other projects

### Type 4: AHJ / Inspection Capacity Conflicts

Multiple projects in the same jurisdiction hit inspection-heavy phases simultaneously, overwhelming the local building department.

**How It Manifests:**
- Inspection scheduling lead times increase from 24-48 hours to 1-2 weeks
- Inspectors rush through inspections and miss items (that they'll catch on re-inspection)
- Permit review times extend beyond published timelines
- Specific inspectors become bottlenecks for specialized reviews (fire marshal, health department)

**Leading Indicators:**
- Other PMs in the same market report similar delays
- AHJ publishes notices of extended review times or hiring freezes
- Your own inspection scheduling is taking longer than it did on the last project in the same jurisdiction

### Type 5: Internal PM / Owner's Rep Capacity

Nathan's own bandwidth becomes the constraint when too many projects hit decision-intensive phases simultaneously.

**How It Manifests:**
- Pay app reviews fall behind
- OAC meeting prep is insufficient
- Change order responses are delayed (which delays the GC, which delays the project)
- Schedule reviews become cursory rather than thorough
- Client reporting is late or lacks depth

**Leading Indicators:**
- Multiple projects hitting Phase 7 (construction execution) simultaneously
- Three or more projects needing change order decisions in the same week
- Two or more projects in commissioning/closeout at the same time
- Client communication becoming reactive instead of proactive

---

## The Program Resource Calendar

The single most valuable tool for preventing resource conflicts is a program-level resource calendar. This is a visual overlay showing when each shared resource is needed across all active projects.

### Structure

```
              | Jan  | Feb  | Mar  | Apr  | May  | Jun  | Jul  | Aug  |
---------------------------------------------------------------------------
GC: Smith     | SiteA████ | SiteA████████████ | SiteA██ |      |
              |      | SiteB████████████████████████████ |      |
              |      |      |      | SiteC████████████████████ |
---------------------------------------------------------------------------
Plumb: Jones  |      | A-rough | B-rough |      | A-trim | B-trim | C-rough|
---------------------------------------------------------------------------
Elec: Watts   |      |  A-rough| B-rough |      | A-trim | B-trim | C-rough|
---------------------------------------------------------------------------
Architect: XY |  A-CD|  A-CA   B-CD | B-CA  |  C-CD   | C-CA  |      |
---------------------------------------------------------------------------
Fire Marshal  |      |      |      | A-final| B-final|      | C-final|
```

### What to Look For

| Pattern | Risk | Action |
|---------|------|--------|
| Two projects with the same sub in rough-in the same month | High — sub will under-staff one | Stagger schedules if possible; confirm crew commitment in writing |
| Same GC superintendent covering two active sites | High — quality and schedule will suffer on both | Require a dedicated superintendent per site in the contract |
| Same architect doing CA on two sites during construction | Medium — review times will slow | Set contractual turnaround requirements; escalate at first sign of delay |
| Multiple projects hitting final inspections in the same AHJ the same week | Medium — inspection delays | Stagger by 1-2 weeks; schedule inspections early |
| Three or more projects in active construction simultaneously | PM capacity risk | Prioritize by client urgency; delegate routine items; flag to client if quality of service is at risk |

---

## Prevention Strategies

### During Procurement (Phase 5)

**Contractual Protections:**

| Provision | Purpose | Suggested Language |
|-----------|---------|-------------------|
| **Dedicated superintendent** | Prevent the GC from splitting supervision across projects | "The Contractor shall provide a full-time, dedicated superintendent who shall not be assigned to any other project during active construction." |
| **Key personnel identification** | Lock in the team you pre-qualified | "The Contractor's Project Manager and Superintendent identified in the bid shall not be replaced without Owner's written consent." |
| **Sub staffing commitments** | Prevent crew-pulling on critical trades | Difficult to contractually enforce at the GC-sub level, but the PM can include in the program requirements: "The GC shall confirm subcontractor crew commitments for critical path trades at each monthly schedule update." |
| **Architect turnaround requirements** | Enforce review timelines | "The Architect shall respond to RFIs within [7] business days and return submittal reviews within [14] business days. Failure to meet these timelines shall constitute an excusable delay for the Contractor." |

**Program-Level Sub Strategy:**

- **Don't put all eggs in one basket.** For critical trades on a rollout program, pre-qualify 2-3 subs per trade and distribute work across them. If one sub struggles, the others can absorb scope.
- **Stagger project starts** to avoid same-trade peaks. If you know the plumbing sub will be the bottleneck, schedule project starts 3-4 weeks apart so rough-in phases don't overlap.
- **Negotiate program pricing with capacity commitments.** Some subs will accept a slightly lower rate in exchange for a guaranteed volume of work — and the commitment should include crew availability guarantees.

### During Preconstruction (Phase 6)

- **Build the program resource calendar** during preconstruction, not during construction. Identify conflicts before NTP.
- **Hold a program-level kick-off** (in addition to individual project kick-offs) when the same GC or subs are on multiple sites. Walk through the resource calendar together and agree on staffing commitments.
- **Confirm long-lead procurement is staggered.** If three sites need HVAC equipment from the same manufacturer, the orders should be placed weeks apart, not simultaneously — manufacturing queues are real.

### During Construction (Phase 7)

- **Review the resource calendar weekly** during the program status meeting (or however Nathan tracks the portfolio).
- **Cross-reference 3-week look-aheads across projects.** When two projects show the same sub in the same week, verify the sub has separate crews confirmed.
- **Track crew sizes on daily reports.** A declining headcount on your project when the same sub just mobilized on another project is the clearest signal.
- **Address conflicts early and directly.** Calling the GC's project manager when you first notice a crew reduction is 10x more effective than raising it at the next OAC meeting.

---

## Resolution Playbook

When a resource conflict is identified and prevention has failed, the PM needs to resolve it quickly. The approach depends on the conflict type and severity.

### Resolution Decision Matrix

| Conflict | Severity | Resolution Options |
|----------|----------|--------------------|
| Sub split across two sites, both on schedule | Low | Monitor; confirm crew commitment; no action unless schedule impact appears |
| Sub split across two sites, one falling behind | Medium | **Prioritize:** Work with GC to determine which site gets priority based on schedule criticality, LD exposure, and client urgency. Notify the deprioritized project's client of the risk. |
| Sub pulled off your site entirely for another job | High | **Escalate to GC:** Formal notice that the sub is not meeting contractual staffing. GC must either restore the crew or engage a replacement. See [[Subcontractor Default & Replacement]]. |
| GC superintendent splitting two sites | High | **Contractual enforcement:** If the contract requires a dedicated superintendent, put the GC on notice. If not contractual, negotiate — a shared superintendent is a leading indicator of broader GC capacity issues. |
| Architect review times exceeding contract | Medium | **Escalate at OAC;** copy architect's principal. If systemic, notify the owner that the architect may need to add staff or the owner may need to engage supplemental CA support. |
| AHJ inspection backlog | Medium | **Work around it:** Schedule inspections further in advance; batch inspections when possible; explore third-party inspection options if the jurisdiction allows them. |
| PM capacity at limit | Medium-High | **Triage and delegate:** Prioritize projects by LD risk and client relationship. Identify tasks that can be delegated (pay app review, RFI tracking) and engage support. Notify clients proactively if response times may be affected. |

### The Prioritization Conversation

When two projects compete for the same resource and only one can have it, the PM must make a prioritization recommendation. The framework:

| Factor | Weight | Assess |
|--------|--------|--------|
| **Liquidated damages exposure** | Highest | Which project has active LD exposure? What's the daily rate? |
| **Client relationship / revenue** | High | Which client is more strategically important? Is one a new relationship vs. established? |
| **Schedule criticality** | High | Which project is closer to a hard deadline (lease commencement, grand opening, franchise deadline)? |
| **Recovery feasibility** | Medium | Which project has more options for schedule recovery if it loses the resource? (See [[Schedule Recovery & Acceleration]]) |
| **Cost of delay** | Medium | Which project's delay costs more in total (LDs + lost revenue + carry costs)? |
| **Ripple effect** | Medium | Does delaying one project affect the program pipeline for that client? |

**PM Rule:** This is a business decision, not a construction decision. Present the trade-offs to the client (or to Nathan's leadership if it spans clients) and get an explicit decision. Don't let the GC or sub make the prioritization by default.

---

## Portfolio Dashboard — Resource Conflict View

In addition to individual project health tracking, the PM should maintain a portfolio-level view that highlights resource conflicts.

### Recommended Tracking Format

```
Program Resource Conflict Monitor — [Month]
============================================

ACTIVE CONFLICTS:
| # | Resource | Projects | Conflict Type | Severity | Status | Resolution |
|---|----------|----------|---------------|----------|--------|------------|
| 1 | Jones Plumbing | Site A + Site C | Same-week rough-in | Medium | Active | Staggered by 1 week; monitoring |
| 2 | Smith GC - Sup. Davis | Site B + Site D | Split superintendent | High | Escalated | GC adding second superintendent |

UPCOMING RISKS (next 4-6 weeks):
| # | Resource | Projects | Potential Conflict | Week | Mitigation Planned |
|---|----------|----------|--------------------|------|-------------------|
| 1 | Watts Electric | Site A + Site C | Trim overlap | Week of 4/15 | Confirmed separate crews |
| 2 | ABC Architect | Site B + Site D | Dual CA visits | Weeks 4/7-4/21 | Discussed with principal; adding staff |

PM CAPACITY:
| Week | Active Construction Projects | Closeout Projects | CO Targets | Risk Level |
|------|-------|---------|-----------|------------|
| This week | 4 | 1 | 0 | Normal |
| Next week | 4 | 1 | 0 | Normal |
| +2 weeks | 5 | 1 | 1 | Elevated |
| +4 weeks | 5 | 2 | 1 | High |
```

---

## Smartsheet Integration Notes

Nathan's operational data lives in Smartsheet. The resource conflict monitor can be maintained as:

- A dedicated sheet in the PMO workspace with the conflict tracking format above
- Conditional formatting to flag weeks where the same resource appears on multiple project timelines
- Dashboard rollup showing resource utilization across the portfolio

**Important:** Atlas should remind Nathan to check Smartsheet for live project data. The resource conflict monitor supplements Smartsheet — it doesn't replace it. Atlas provides the analytical framework; Smartsheet has the data.

---

## Related

- [[Construction PM Knowledge Base]] — Master reference
- [[Trade Dependency Matrix — PM Perspective]] — Trade-level resource dependencies
- [[Schedule Recovery & Acceleration]] — Recovery when resource conflicts cause delays
- [[Subcontractor Default & Replacement]] — When resource conflict escalates to sub replacement
- [[07 - Construction Execution]] — Phase 7 management activities
- [[Stakeholder Directory]] — Resource roles and responsibilities
- [[Schedule Specification & Analysis Methods]] — Program-level schedule management
- [[ATLAS_MEMORY]] — GC and sub performance tracking for resource allocation decisions

---

*Update with actual resource conflict experiences, preferred backup subs by trade and geography, GC capacity benchmarks, and client prioritization preferences as the portfolio matures.*
