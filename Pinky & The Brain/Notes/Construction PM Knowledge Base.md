---
type: database
area: work
status: active
tags:
  - work
  - resource
  - knowledge-base
  - construction
  - construction-kb
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Work Hub|Work Hub]]

---

# Construction Program Management — Master Reference

> **Purpose:** Foundational knowledge base for a Construction Program Management AI agent. Covers the complete project lifecycle from real estate pipeline through closeout and completion, across all construction sectors (retail, commercial, residential, civil/infrastructure). Designed for both deep advisory knowledge and active operational workflow guidance.

---

## How to Use This Knowledge Base

This master document provides the **end-to-end lifecycle overview** with links to detailed atomic notes on each topic. The agent should:
1. Use this document to understand **where in the lifecycle** a question falls
2. Follow wiki-links `[[Note Name]]` to dive into detailed knowledge
3. Cross-reference the **Dependency Matrix** and **Stakeholder Maps** to understand predecessors and handoffs
4. Apply the **Decision Frameworks** when advising on approach

---

## The Construction Lifecycle — 10-Phase Model

The following model synthesizes industry frameworks (CMAA, AIA, PMI-Construction) into a comprehensive lifecycle that covers the full spectrum from real estate pipeline through asset stabilization:

| # | Phase | Key Milestone | Primary Owner | Duration Range |
|---|-------|--------------|---------------|----------------|
| 1 | [[01 - Real Estate Pipeline & Site Selection]] | Site Under Contract | Developer/Owner | 2–12 months |
| 2 | [[02 - Feasibility & Due Diligence]] | Go/No-Go Decision | Developer/Owner | 1–3 months |
| 3 | [[03 - Design — SD, DD, CD]] | Construction Documents Complete | Architect/Engineer | 2–12 months |
| 4 | [[04 - Entitlements & Permitting]] | Building Permit Issued | Owner/Expediter | 1–12+ months |
| 5 | [[05 - Procurement & Bidding]] | Contracts Executed | Owner/CM/GC | 1–3 months |
| 6 | [[06 - Preconstruction]] | Notice to Proceed | GC/CM | 2–8 weeks |
| 7 | [[07 - Construction Execution]] | Substantial Completion | GC/CM | 3–24+ months |
| 8 | [[08 - Closeout & Turnover]] | Certificate of Occupancy | GC/Owner | 2–8 weeks |
| 9 | [[09 - Post-Construction & Warranty]] | Warranty Expiration | Owner/GC | 1–2 years |
| 10 | [[10 - Asset Stabilization & Operations]] | Stabilized Occupancy | Owner/Property Mgmt | 6–18 months |

---

## Cross-Cutting Knowledge Domains

These topics span the entire lifecycle and are referenced throughout:

| Domain | Note |
|--------|------|
| Roles, Responsibilities & Timelines (Phases 1-5) | [[Roles, Responsibilities & Timelines — Pre-Construction (Phases 1-5)]] |
| Roles, Responsibilities & Timelines (Phases 6-10) | [[Roles, Responsibilities & Timelines — Construction & Closeout (Phases 6-10)]] |
| Stakeholder Roles & Responsibilities | [[Stakeholder Directory]] |
| Project Delivery Methods | [[Project Delivery Methods]] |
| Contract Types & Structures | [[Contract Types & Structures]] |
| Financial Management & Billing | [[Financial Management & Billing]] |
| AHJ Research & Compliance | [[AHJ Research Methodology]] |
| Risk Management (RAID) | [[Risk Management Framework]] |
| Construction Sector Profiles | [[Sector Profiles — Retail, Commercial, Residential, Civil]] |
| Tenant Improvement Allowances | [[Tenant Improvement Allowances]] |
| Document Management | [[Document Types & Management]] |
| Trade Dependencies (PM Perspective) | [[Trade Dependency Matrix — PM Perspective]] |
| Schedule Recovery & Acceleration | [[Schedule Recovery & Acceleration]] |
| Subcontractor Default & Replacement | [[Subcontractor Default & Replacement]] |
| Delay Documentation & Claims | [[Delay Documentation & Claims]] |
| Schedule Specification & Analysis | [[Schedule Specification & Analysis Methods]] |
| Commissioning & Systems Turnover | [[Commissioning & Systems Turnover]] |
| Multi-Project Resource Conflicts | [[Multi-Project Resource Conflicts]] |
| Lessons Learned Capture Workflow | [[Lessons Learned Capture Workflow]] |
| Value Engineering Framework | [[Value Engineering Framework]] |
| Insurance & Bonding During Construction | [[Insurance & Bonding During Construction]] |

---

## Global Dependency Matrix

This matrix shows the critical path dependencies between phases. A phase cannot fully complete until its predecessors are satisfied.

```
Phase 1: Real Estate Pipeline
  └─► Phase 2: Feasibility (requires site identified)
       └─► Phase 3: Design (requires feasibility approval + site control)
            ├─► Phase 4: Permitting (requires CD set; can overlap with late DD)
            └─► Phase 5: Procurement (requires CD set or near-complete DD for GMP)
                 └─► Phase 6: Preconstruction (requires contracts executed)
                      └─► Phase 7: Construction (requires NTP + permits)
                           └─► Phase 8: Closeout (requires substantial completion)
                                └─► Phase 9: Warranty (requires CO + turnover)
                                     └─► Phase 10: Stabilization (requires occupancy)
```

**Key Parallel Tracks:**
- Design and entitlements often run concurrently (zoning during SD/DD, building permit during CD)
- Procurement can begin during late design (early packages, long-lead items)
- Closeout documentation begins during construction execution
- TIA billing can span from permit issuance through post-construction

---

## Phase-Gate Decision Points

At each phase transition, a formal or informal gate review should occur. The agent should know what questions to ask at each gate:

### Gate 1: Site → Feasibility
- Is the site under contract or LOI?
- What are the deal-breaker zoning/environmental risks?
- Is preliminary budget within the program's capital parameters?

### Gate 2: Feasibility → Design
- Does the proforma pencil (IRR, cap rate, yield)?
- Are there title, environmental, or geotechnical red flags?
- Has the owner committed capital for design fees?

### Gate 3: Design → Permitting
- Are CDs at or near 100%?
- Has the owner signed off on scope, budget, and schedule?
- Are all consultant disciplines coordinated (MEP, structural, civil)?

### Gate 4: Permitting → Procurement
- Is the building permit in hand (or confidently imminent)?
- Are bid documents complete and scope clearly defined?
- Has the delivery method been selected (DBB, DB, CMAR)?

### Gate 5: Procurement → Preconstruction
- Are contracts fully executed?
- Is the GC/CM mobilization plan confirmed?
- Are bonds, insurance, and submittals on track?

### Gate 6: Preconstruction → Construction
- Has NTP been issued?
- Are site logistics, safety plans, and utility coordination confirmed?
- Are long-lead materials ordered and tracked?

### Gate 7: Construction → Closeout
- Has substantial completion been achieved?
- Is the punch list generated and assigned?
- Are all inspections scheduled or passed?

### Gate 8: Closeout → Warranty/Operations
- Is the CO issued?
- Are all closeout documents delivered (as-builts, O&M, warranties)?
- Has the final billing/retainage release been processed?

---

## Program Management Layer

When managing multiple projects simultaneously (as a program manager or PMO), additional concerns overlay the project lifecycle:

### Portfolio-Level Considerations
- **Pipeline velocity:** How many projects are in each phase at any given time?
- **Resource allocation:** Are architects, GCs, and internal PMs overloaded?
- **Client reporting:** Rollup dashboards showing health of all projects per client
- **Budget tracking:** Program-level spend vs. forecast across all projects
- **Risk aggregation:** Systemic risks that affect multiple projects (supply chain, labor market, regulatory changes)

### PMO Functions
- **Standardized workflows** per phase and project type
- **Milestone tracking** with predecessor/successor logic
- **RAID log management** (Risks, Actions, Issues, Decisions)
- **Billing & invoicing** coordination across projects
- **Lessons learned** capture and cross-project knowledge sharing

---

## Agent Operational Guidelines

When acting as an operational PM assistant, the agent should:

1. **Always establish context first:** What phase is the project in? What sector? What delivery method?
2. **Identify the critical path:** What must happen next, and what's blocking it?
3. **Flag dependencies proactively:** If a predecessor is incomplete, raise it before the user asks
4. **Recommend stakeholder actions:** Who needs to do what, by when?
5. **Track financials alongside schedule:** Budget and timeline are inseparable
6. **Escalate appropriately:** Know what requires owner/client decision vs. what the PM team can handle
7. **Document everything:** Recommend what should be memorialized and where

---

## Quick Reference: Common Acronyms

| Acronym | Meaning |
|---------|---------|
| AHJ | Authority Having Jurisdiction |
| AIA | American Institute of Architects |
| ASI | Architect's Supplemental Instruction |
| CA | Construction Administration |
| CD | Construction Documents |
| CM | Construction Manager |
| CMAR | Construction Manager at Risk |
| CO | Certificate of Occupancy |
| COR | Change Order Request |
| DB | Design-Build |
| DBB | Design-Bid-Build |
| DD | Design Development |
| FF&E | Furniture, Fixtures & Equipment |
| GC | General Contractor |
| GMP | Guaranteed Maximum Price |
| HVAC | Heating, Ventilation & Air Conditioning |
| IPD | Integrated Project Delivery |
| LOI | Letter of Intent |
| MEP | Mechanical, Electrical, Plumbing |
| NTP | Notice to Proceed |
| OAC | Owner, Architect, Contractor (meeting) |
| O&M | Operations & Maintenance |
| PCO | Potential Change Order |
| PM | Project Manager |
| PMO | Program Management Office |
| RAID | Risks, Actions, Issues, Decisions |
| RFI | Request for Information |
| RFP | Request for Proposal |
| SD | Schematic Design |
| SOV | Schedule of Values |
| TCO | Temporary Certificate of Occupancy |
| TI / TIA | Tenant Improvement / Tenant Improvement Allowance |

---

## Industry-Specific Appendices

These appendices cover the unique regulatory, MEP, equipment, and process requirements that differentiate specific industries from the general lifecycle above:

| Industry | Note | Key Differentiators |
|----------|------|-------------------|
| Petroleum & Fuel Stations | [[Appendix — Petroleum & Fuel Station Construction]] | USTs, EPA/state environmental regs, hazmat, dispensers, Weights & Measures |
| Grocery & Supermarkets | [[Appendix — Grocery & Supermarket Construction]] | Refrigeration systems, temperature zones, heavy electrical, kitchen/bakery, health dept |
| Restaurants | [[Appendix — Restaurant Construction]] | Commercial kitchens, exhaust hoods, grease traps, health dept, liquor licensing, drive-through |
| General Retail & Rollouts | [[Appendix — General Retail & National Rollout Programs]] | Prototype management, landlord coordination, fixture/merchandise, multi-location velocity |
| Medical / Dental / Veterinary | [[Appendix — Medical, Dental & Veterinary Construction]] | Medical gas, imaging/shielding, infection control, state health dept review, DEA vaults |

---

*This knowledge base is a living document. Update atomic notes as processes evolve, jurisdictional requirements change, or new lessons are learned across projects.*
