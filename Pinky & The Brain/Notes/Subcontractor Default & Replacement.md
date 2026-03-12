---
type: resource
area: work
status: active
tags:
  - work
  - resource
  - knowledge-base
  - construction
  - subcontractors
  - risk
  - construction-kb
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Work Hub|Work Hub]] · [[Construction PM Knowledge Base|Construction KB]]

---

# Subcontractor Default & Replacement

> Cross-cutting reference for [[Construction PM Knowledge Base]]
> Related: [[07 - Construction Execution]], [[Risk Management Framework]], [[Trade Dependency Matrix — PM Perspective]], [[Schedule Recovery & Acceleration]], [[Contract Types & Structures]]

---

## Purpose

Subcontractor default — when a sub stops performing, abandons the project, or goes out of business mid-construction — is one of the most disruptive events on a construction project. On a rollout program where the same sub is on multiple sites, a default becomes a portfolio-level crisis. This note gives Atlas the frameworks to identify early warning signs, guide the contractual response, manage the replacement process, and protect the client's schedule and budget.

---

## Early Warning Signs

A sub doesn't default overnight. There are leading indicators, usually visible weeks before the actual failure. The PM should be monitoring for these and escalating when patterns emerge.

### Tier 1: Yellow Flags (Monitor Closely)

These are common friction points that can be innocent — or can be the first sign of trouble. One yellow flag is noise. Two or three together are a pattern.

| Signal | What It Might Mean | PM Action |
|--------|-------------------|-----------|
| Crew size shrinks without explanation | Sub may be pulling labor to another job, or struggling to retain workers | Ask GC to confirm crew commitment; note in weekly report |
| Work pace slows measurably | Could be a difficulty with the work, or the sub is de-prioritizing your project | Compare actual progress vs. 3-week look-ahead; raise at OAC |
| Foreman changes mid-project | Internal staffing issues; new foreman may not know the project | Request introduction to new foreman; confirm continuity of scope understanding |
| Sub stops attending coordination meetings | Disengagement from the project | GC should require attendance; PM flags if it continues |
| Material deliveries are late or incomplete | Cash flow issue (can't pay suppliers) or poor planning | Ask GC to verify material procurement status |
| Quality drops noticeably | Sub may be cutting corners to save money or rushing to get off the job | Document quality issues; require GC inspection before covering work |

### Tier 2: Orange Flags (Escalate to GC and Client)

These indicate a real problem is developing. The PM should be actively working with the GC on a contingency plan.

| Signal | What It Means | PM Action |
|--------|-------------|-----------|
| Sub's workers complain about not being paid | Sub has cash flow problems — this is a leading indicator of failure | Verify with GC; check lien waiver status; consider joint check agreements |
| Sub requests early or accelerated payment | Cash flow distress | GC should evaluate; PM monitors for impact on other subs |
| Sub files a mechanic's lien or pre-lien notice | Sub isn't getting paid by GC, or has a legitimate dispute | Legal involvement needed; protect owner's interests immediately |
| Other subs on the same project report the sub isn't showing up | Active abandonment of scope | GC must issue formal notice; PM documents for the record |
| Sub is unresponsive to GC communications for 48+ hours | May have left the project or be in crisis | GC issues written notice per contract; PM begins contingency planning |
| Sub's other projects in your program are also struggling | Portfolio-level sub failure in progress | Activate backup sub pre-qualification immediately |

### Tier 3: Red Flags (Default Is Imminent or Occurring)

| Signal | What It Means | PM Action |
|--------|-------------|-----------|
| Sub stops showing up entirely | Abandonment | GC issues formal default notice per contract |
| Sub's bonding company contacts the GC or PM | Bond claim may already be filed on another project | Prepare to exercise bond on your project if needed |
| Sub files for bankruptcy | Legal default — all projects affected | Engage legal counsel immediately |
| GC reports sub hasn't paid their suppliers | Lien exposure on the owner's property | Verify lien waiver chain; consider direct payment or joint checks |
| Significant safety violation that results in stop-work | May be a symptom of broader management failure | Document thoroughly; assess whether this is a one-off or systemic |

---

## Contractual Framework for Sub Default

The PM doesn't directly manage the sub contract (that's between the GC and the sub), but the PM must understand the contractual machinery and ensure the GC is executing it properly. If the owner has a direct contract with the sub (in a CM multi-prime delivery), the PM is directly responsible.

### Standard Default Process (GC → Sub)

```
Step 1: GC identifies performance deficiency
    ↓
Step 2: GC issues written notice to sub specifying:
        - The deficiency (specific, documented, with dates)
        - The contract provision being violated
        - The cure period (typically 5-10 business days per contract)
        - The consequence if not cured (termination)
    ↓
Step 3: Cure period runs
    ↓
Step 4a: Sub cures → Document, monitor closely, continue
Step 4b: Sub fails to cure → GC issues termination notice
    ↓
Step 5: GC engages replacement sub (see Replacement Process below)
    ↓
Step 6: GC tracks all costs above original sub contract amount
    ↓
Step 7: GC back-charges terminated sub for excess costs
    ↓
Step 8: If sub was bonded → GC files claim against performance bond
```

### PM's Role in This Process

| Step | PM Responsibility |
|------|------------------|
| Notice | Verify the GC has actually issued written notice (not just a verbal warning). Request a copy for the project file. |
| Cure Period | Track the cure deadline. If the sub does cure, note it but maintain heightened monitoring. |
| Termination | Verify termination letter is issued. Confirm the GC has legal basis per the subcontract terms. |
| Replacement | Review the GC's replacement sub qualifications. Approve schedule impact assessment. Evaluate cost impact for potential change order. |
| Back-Charge | Verify the GC is tracking excess costs. These flow through to the sub's bond if applicable. |
| Bond Claim | If a performance bond exists, ensure the GC files a timely claim. Understand the surety's options (see Bond Claims below). |

### Key Contract Provisions to Know

The PM should confirm these exist in the GC-sub agreement (or the prime contract if multi-prime):

| Provision | Why It Matters |
|-----------|---------------|
| **Right to cure period** | Defines how much time the sub gets to fix the problem. Too long = schedule damage. Too short = potential legal challenge. 5-7 business days is standard. |
| **Termination for cause vs. convenience** | Cause = sub breached the contract. Convenience = owner/GC decides to terminate without fault. Cost implications are very different. |
| **Back-charge rights** | GC's right to deduct excess costs from remaining payments or pursue the sub for the difference. Must be in the contract to be enforceable. |
| **Performance bond requirement** | If the sub was required to provide a performance bond, the surety becomes a recovery source. |
| **Payment bond requirement** | Protects against mechanic's liens from the sub's suppliers and workers. |
| **Assignment of subcontracts** | In some delivery methods, the owner can require the GC to assign sub contracts to the owner (relevant if the GC defaults, not just a sub). |
| **Notice requirements** | Specific method, timing, and recipient for default notices. Failure to follow notice requirements can invalidate a termination. |

---

## Bond Claims

### Performance Bonds

If the defaulting sub provided a performance bond, the GC (as obligee) can file a claim. The surety has three typical options:

| Surety Option | What Happens | Timeline | PM Impact |
|--------------|-------------|----------|-----------|
| **Finance the original sub** | Surety provides funds to keep the original sub working | 1-2 weeks to evaluate | Fastest resolution if the sub's problem is purely financial |
| **Tender a replacement sub** | Surety selects and pays a replacement sub to complete the work | 2-4 weeks | Surety controls the selection; PM should have input on qualifications |
| **Pay the penal sum** | Surety pays the bond amount to the GC to cover excess costs | 4-8 weeks (or longer if disputed) | GC manages the replacement; bond funds offset cost overrun |

**PM Actions on Bond Claims:**
- Confirm the bond is in force (verify with the surety, not just the sub)
- Ensure the GC files the claim promptly — delays weaken the claim
- Document all excess costs meticulously (the surety will audit every dollar)
- If the surety tenders a replacement, vet the replacement sub's qualifications before accepting
- Track the timeline — bond claim resolution is rarely fast, and the project can't wait. The GC may need to engage a replacement at risk and seek reimbursement from the surety later.

### Payment Bonds

If the defaulting sub's workers or suppliers file mechanic's liens against the property, a payment bond protects the owner. The PM should:

- Verify payment bond is in place before construction starts (part of [[06 - Preconstruction]] checklist)
- If liens are filed, notify the GC and the surety immediately
- Confirm the GC is collecting lien waivers at every pay application (per standard billing procedures in [[Financial Management & Billing]])

For comprehensive bond types, cost benchmarks, and insurance during construction, see [[Insurance & Bonding During Construction]].

---

## Replacement Sub Process

### Timeline Reality

Replacing a sub mid-project is never seamless. Here's what to expect:

| Step | Duration | Notes |
|------|----------|-------|
| Identify and contact replacement candidates | 1-3 days | Faster if backup subs are pre-qualified |
| Replacement sub site visit and scope review | 2-5 days | Must walk the site; can't bid blind on a partially complete scope |
| Replacement sub pricing | 3-7 days | Pricing a takeover is harder than pricing new work — unknown conditions |
| Contract negotiation and execution | 2-5 days | Accelerate; use the GC's standard subcontract |
| Mobilization | 3-7 days | Sub needs to source materials, assemble crew, coordinate schedule |
| **Total realistic timeline** | **2-4 weeks** | From default to replacement sub starting work |

**PM Rule:** 2-4 weeks is an optimistic timeline. On specialized trades (fire protection, elevator, medical gas), replacement can take 4-8 weeks because there are fewer qualified subs. The PM should start contingency planning at the orange-flag stage, not after the sub has defaulted.

### Pricing Reality

Replacement subs always cost more than the original sub. Why:

| Factor | Cost Impact |
|--------|------------|
| **Takeover premium** | 10-25% above normal pricing. The replacement sub is inheriting someone else's work, unknown conditions, and potential defects. |
| **Mobilization cost** | Full mob for a partial scope — inefficient. |
| **Schedule acceleration** | The replacement sub may need to work overtime to recover the time lost during the transition. |
| **Scope uncertainty** | The original sub's partially complete work may need correction or demolition before the replacement can continue. |
| **Market leverage** | The replacement sub knows you're in a bind. Limited negotiating power. |

**Typical total cost increase:** 15-40% above the original sub's remaining contract value, depending on trade, market conditions, and how much rework is needed.

### Pre-Qualification of Backup Subs

The best time to find a replacement sub is before you need one. For rollout programs and any project with critical single-source trades:

**Critical trades to have backups for:**
- MEP (mechanical, electrical, plumbing) — these are on the critical path and hard to replace
- Fire protection — limited pool of qualified contractors
- Drywall — if your drywall sub goes down, everything downstream stops
- Kitchen equipment and hood installation (restaurant programs)
- Refrigeration (grocery programs)

**Pre-qualification checklist:**
- Licensed and insured for the scope and jurisdiction
- Bonding capacity sufficient for the project size
- References from comparable projects (not just general references)
- Current workload — can they take on the work within 1-2 weeks?
- Geographic coverage (for rollout programs spanning multiple states)
- Willingness to do takeover work (not all subs will — it's higher risk for them too)

---

## Portfolio-Level Sub Default

When a sub who is on multiple program sites defaults, the PM faces a compounding crisis. The response must be coordinated across the portfolio, not handled site-by-site.

### Immediate Actions (Day 1-2)

1. **Inventory all affected projects:** Which sites have this sub? What phase is each site in? What's the sub's remaining scope at each site?
2. **Triage by impact:** Rank sites by schedule criticality. A site 2 weeks from CO with this sub's trim work outstanding is more urgent than a site that hasn't started rough-in yet.
3. **Assess the default cause:** Is it financial (cash flow, bankruptcy)? Performance (can't do the work)? Personnel (lost their crew)? The cause determines whether any sites can continue with the sub.
4. **Notify the client:** Program-level sub default is a client-level event. Report the situation, the triage plan, and the expected impact range.

### Recovery Strategy (Week 1-2)

| Scenario | Strategy |
|----------|----------|
| Sub can finish some sites but not all | Prioritize highest-criticality sites with the existing sub; replace on others |
| Sub is completely done (bankruptcy, abandonment) | Activate backup subs; may need multiple replacements across geographies |
| Surety is involved (bonded sub) | File claims on all affected projects simultaneously; coordinate with surety |
| Sub's partially complete work has quality issues | Budget for rework assessment at each site before replacement sub starts |

### Cost and Schedule Impact Reporting

For portfolio-level defaults, the PM should prepare a consolidated impact report:

```
Program Sub Default Impact Summary
-----------------------------------
Sub: [Name]
Trade: [Trade]
Default Date: [Date]
Cause: [Financial / Performance / Abandonment]

Sites Affected: X of Y total program sites

| Site | Phase | Remaining Scope | Schedule Impact | Cost Impact | Replacement Sub | Status |
|------|-------|----------------|----------------|-------------|----------------|--------|
| — | — | — | — | — | — | — |

Total Program Schedule Impact: X-Y weeks (range)
Total Program Cost Impact: $X-$Y (range)
Recovery Plan: [Summary]
```

For the broader resource conflict management framework, see [[Multi-Project Resource Conflicts]].

---

## Protecting Against Sub Default — Proactive Measures

### During Procurement (Phase 5)

- **Pre-qualify all subs** for financial stability, not just technical competence. Request financial statements or Dun & Bradstreet reports for contracts above $100K.
- **Require performance and payment bonds** on contracts above $50K (threshold varies by owner preference and project type). Bond cost is typically 1-3% of the contract value — cheap insurance.
- **Check references on current projects**, not just completed ones. A sub's performance on their most recent projects is the best predictor.
- **Avoid single-source dependencies** for critical trades. Pre-qualify at least two subs per critical trade for rollout programs.

### During Construction (Phase 7)

- **Monitor lien waiver flow.** If a sub stops providing lien waivers, they may not be paying their suppliers. This is a leading indicator.
- **Track sub payment by the GC.** Some contracts require the GC to certify that subs have been paid before the next progress payment. Enforce this.
- **Joint check agreements** for at-risk subs: the owner or GC issues payment checks made out to both the sub and their key suppliers, ensuring suppliers get paid.
- **Maintain the backup sub list.** Update quarterly or when market conditions change. A backup sub who was available six months ago may be fully committed now.

### Program-Level Safeguards

- **Diversify sub allocation across the program.** Don't put the same sub on every site. If they default, you lose everything. Spread critical trades across 2-3 subs.
- **Stagger project schedules** so that critical trades on different sites don't all peak simultaneously with the same sub. This reduces the impact if the sub has a capacity problem.
- **Master subcontract agreements** for rollout programs. Pre-negotiate terms, pricing structure, and bond requirements at the program level so replacement subs can be engaged faster with a standard contract.

---

## Related

- [[Construction PM Knowledge Base]] — Master reference
- [[07 - Construction Execution]] — Phase 7 detail
- [[Risk Management Framework]] — Risk categories and response strategies
- [[Schedule Recovery & Acceleration]] — Recovery after sub-caused delays
- [[Trade Dependency Matrix — PM Perspective]] — How sub default cascades through trade dependencies
- [[Contract Types & Structures]] — Contract provisions for default and termination
- [[Financial Management & Billing]] — Lien waiver and payment tracking
- [[05 - Procurement & Bidding]] — Sub pre-qualification during procurement
- [[ATLAS_MEMORY]] — Sub performance tracking

---

*Update with actual sub default experiences, surety contact information, local backup sub lists by trade, and program-specific pre-qualification criteria as the portfolio matures.*
