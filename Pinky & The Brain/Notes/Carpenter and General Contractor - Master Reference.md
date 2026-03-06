---
type: resource
area: work
status: active
tags:
  - work
  - household
  - resource
  - knowledge-base
  - carpenter-kb
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Work Hub|Work Hub]]

---

# Carpenter & General Contractor — Master Reference

> **Purpose:** Foundational knowledge base for understanding construction from the builder's perspective — the craft, materials, methods, sequencing, quality, and business of actually building things. Designed for a construction PM who wants to evaluate GC work with authority, and a personal builder tackling residential projects with confidence.

---

## How to Use This Knowledge Base

This master document provides the **domain overview** with links to detailed notes on each topic. The agent should:
1. Use this document to identify **which domain** a question falls into
2. Follow wiki-links to dive into detailed knowledge on that topic
3. Cross-reference the **[[Construction PM Knowledge Base]]** for the management layer (phases, stakeholders, financials)
4. Use the **[[PM-to-Builder Translation Guide]]** when the question bridges management and craft
5. Apply the **[[Builder Advisor Prompt]]** communication principles when responding

---

## Domain Model — The Builder's Knowledge Map

### Core Building Knowledge

| # | Domain | Note | Priority | Focus |
|---|--------|------|----------|-------|
| 1 | Building Science | [[Building Science Fundamentals]] | 🔴 | Why buildings work — loads, moisture, thermal, air |
| 2 | Construction Sequencing | [[Residential Construction Sequencing]] | 🔴 | Site prep through punch list — the builder's critical path |
| 3 | Structural Carpentry | [[Framing & Structural Carpentry]] | 🔴 | Wall, floor, roof framing — the skeleton of a building |
| 4 | Finish Carpentry | [[Finish Carpentry & Trim Work]] | 🟡 | Doors, windows, trim, built-ins — the craft layer |
| 5 | Materials & Fasteners | [[Materials & Fasteners Reference]] | 🟡 | Lumber, sheet goods, concrete, fastener selection |
| 6 | Code Compliance | [[Building Codes & Inspection Readiness]] | 🟡 | IRC/IBC basics, inspection types, common violations |
| 7 | Trade Coordination | [[Trade Coordination & Subcontractor Management]] | 🟡 | Scheduling subs, scope management, quality control |
| 8 | Estimating | [[Estimating & Takeoffs]] | 🟢 | Material takeoffs, labor rates, markup, bid evaluation |
| 9 | Tools & Equipment | [[Tools & Equipment Reference]] | 🟢 | Hand tools, power tools, when to use what |
| 10 | Quality Control | [[Common Defects & Quality Control]] | 🟢 | What to look for, inspection checklists, defect patterns |

### Cross-Cutting Knowledge

| Domain | Note | Spans |
|--------|------|-------|
| Safety | [[Construction Safety & OSHA Residential]] | Every trade, every phase |
| PM↔Builder Bridge | [[PM-to-Builder Translation Guide]] | Links this KB to the Construction PM KB |

### System

| Note | Purpose |
|------|---------|
| [[Builder Advisor Prompt]] | Agent communication config — how to think and respond on builder topics |

---

## The Two Lenses

This KB serves two distinct perspectives. The agent should identify which lens applies:

### Lens 1: PM Evaluating Work
*"I'm managing a GC and need to understand what I'm looking at."*

- Focus on: quality indicators, inspection readiness, defect recognition, trade sequencing logic, scope gap identification
- Key notes: [[Common Defects & Quality Control]], [[PM-to-Builder Translation Guide]], [[Residential Construction Sequencing]], [[Building Codes & Inspection Readiness]]
- Tone: Analytical, risk-aware, "what should I be checking?"

### Lens 2: Personal Builder
*"I'm doing a project myself and need to understand how to do it right."*

- Focus on: methods, materials, tool selection, code requirements, step-by-step sequencing
- Key notes: [[Building Science Fundamentals]], [[Framing & Structural Carpentry]], [[Finish Carpentry & Trim Work]], [[Materials & Fasteners Reference]], [[Tools & Equipment Reference]]
- Tone: Practical, hands-on, "show me how"

Many questions blend both lenses — a PM who also builds has better instincts on both sides.

---

## Quick Decision Framework

```
What's the question about?

How a building works (physics, systems)
  → Building Science Fundamentals

What order things get built
  → Residential Construction Sequencing

How to frame walls, floors, roofs
  → Framing & Structural Carpentry

Trim, doors, windows, finish details
  → Finish Carpentry & Trim Work

What material or fastener to use
  → Materials & Fasteners Reference

Will it pass inspection / what code says
  → Building Codes & Inspection Readiness

Managing subs and trades
  → Trade Coordination & Subcontractor Management

How much will it cost / how to estimate
  → Estimating & Takeoffs

What tool do I need
  → Tools & Equipment Reference

Is this work good or bad / what to look for
  → Common Defects & Quality Control

How to stay safe on site
  → Construction Safety & OSHA Residential

Bridging PM knowledge and builder knowledge
  → PM-to-Builder Translation Guide
```

---

## Relationship to the Construction PM Knowledge Base

The **[[Construction PM Knowledge Base]]** covers the management lifecycle — phases, stakeholders, financials, risk, documents, delivery methods. It answers "who does what, when, and how do we track it."

This KB covers the **craft and execution** layer — means and methods, materials, building science, quality, tools. It answers "what's actually being built, how does it work, and is it being done right."

Together they give complete coverage:

```
┌─────────────────────────────────────┐
│     Construction PM Knowledge Base   │
│     (Management Layer — Atlas)       │
│                                      │
│  Phases · Stakeholders · Financials  │
│  Risk · Documents · Delivery Methods │
│  AHJ · Contracts · TIA              │
└──────────────┬───────────────────────┘
               │
    [[PM-to-Builder Translation Guide]]
               │
┌──────────────┴───────────────────────┐
│  Carpenter & GC Knowledge Base       │
│  (Craft & Execution Layer — [Agent]) │
│                                      │
│  Building Science · Sequencing       │
│  Framing · Finish · Materials        │
│  Codes · Trades · Estimating         │
│  Tools · Quality · Safety            │
└──────────────────────────────────────┘
```

---

## Related

- [[Construction PM Knowledge Base]] — Management layer
- [[Builder Advisor Prompt]] — Agent advisory configuration
- [[Agent Registry]] — Agent profiles and dispatch
- [[Agent Knowledge Base - Creation Process]] — How this KB was built
- [[Work Hub]] — Work area hub

---

*This KB should be updated as Nathan gains hands-on building experience and as projects surface new knowledge needs.*
