---
type: process
area: system
status: active
tags:
  - system
  - ziggy
  - agents
  - knowledge-base
  - process
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Ziggy Hub|Ziggy Hub]]

---

# 📚 Agent Knowledge Base — Creation Process

> **Purpose:** Standardized playbook for building a structured knowledge base for any Ziggy agent. Ensures every KB follows the same architecture pattern, integrates cleanly with the vault, and connects properly to the agent's system prompt and dispatch logic.

---

## Why Every Agent Needs a KB

An agent without a knowledge base is a persona running on general model knowledge. It can hold a conversation, but it can't give you expert, context-aware, stage-appropriate advice grounded in decision frameworks and your personal situation.

A knowledge base turns a chatbot into a specialist.

### Agent Maturity Levels

| Level | Name | What It Has | Quality |
|-------|------|-------------|---------|
| 1 | **Registered** | Agent profile, system prompt, session state, dispatch wired | Can talk about the domain generally |
| 2 | **Foundational** | Structured KB with domain frameworks, decision trees, personal context | Gives expert, stage-appropriate advice |
| 3 | **Operational** | KB + active vault data (tracked accounts, logs, reviews, goals) | Advises from your real data, spots trends, flags issues |

**Target: Every agent should reach Level 2 before being relied on for important decisions.**

### Current Agent Status

| Agent | Level | KB Status | Notes |
|-------|-------|-----------|-------|
| Ziggy | ✅ Active | System context | N/A — orchestrator |
| Atlas | 3 | Construction PM KB — 28 notes, full lifecycle | ✅ Complete |
| Tally | 2 | Estimator KB — full reasoning protocol, output formats, CSI index | ✅ Complete |
| Ledger | 2 | Personal Finance KB — 12 notes, full lifecycle | ✅ Complete |
| Hammer | 2 | Carpenter & GC KB — 14 notes, full craft/execution domain | ✅ Complete |
| Sage | 2 | Nutrition & Culinary KB — 17 notes, PhD-level nutrition + Michelin-star culinary | ✅ Complete |
| Cart | 2 | Shopping Assistant KB — 11 modules, 161 KB, purchase research | ✅ Complete |
| Iron | 1.5 | Nathan 170@12 program docs + 6 Iron KB notes exist, no structured domain KB | Pending |
| Forge | 1.5 | Foundational KB exists (595 lines), coding patterns + system design | Review needed |
| Spin | 1.5 | Music Agent KB exists (SPIN — Music Agent KB.md) | Review needed |
| Compass | 1 | Travel Agent KB exists (COMPASS — Travel Agent KB.md) — depth unknown | Review needed |

*Update this table as KBs are built.*

---

## The KB Architecture Pattern

Every knowledge base follows the same structure, proven by the Construction PM KB and Finance KB:

```
┌─────────────────────────────────────────────────┐
│           MASTER REFERENCE NOTE                 │
│  (type: database or resource, tagged [domain]-kb)│
│                                                 │
│  • Purpose & scope statement                    │
│  • "How to Use This KB" — agent instructions    │
│  • Domain model / lifecycle / framework table   │
│  • Links to all domain notes                    │
│  • Cross-cutting knowledge table                │
│  • Decision framework / priority waterfall      │
│  • Agent operational guidelines                 │
│  • Quick reference lookup table                 │
│                                                 │
└──────────┬──────────────────────────────────────┘
           │
    ┌──────┴──────┐
    │             │
    ▼             ▼
┌────────┐  ┌────────────────┐
│ Domain │  │  Cross-Cutting  │
│ Notes  │  │     Notes       │
│ (5-12) │  │    (2-4)        │
│        │  │                 │
│ Atomic │  │ Spans multiple  │
│ topics │  │ domains within  │
│ one per│  │ the KB          │
│ domain │  │                 │
└────────┘  └────────────────┘
           │
           ▼
    ┌──────────────┐
    │ System Note  │
    │ (1)          │
    │              │
    │ Agent prompt │
    │ config for   │
    │ this KB      │
    └──────────────┘
```

### Note Types in a KB

| Note Type | Count | Purpose | Frontmatter |
|-----------|-------|---------|-------------|
| Master Reference | 1 | Anchor document — lifecycle model, navigation, agent instructions | `type: database` or `type: resource`, `area: [domain]`, tag: `[domain]-kb` |
| Domain Notes | 5-12 | Deep-dive on one topic — self-contained, atomic, expert-level | `type: resource`, `area: [domain]`, tag: `[domain]-kb` |
| Cross-Cutting Notes | 2-4 | Topics that span multiple domains within the KB | `type: resource`, `area: [domain]`, tag: `[domain]-kb` |
| System Note | 1 | Agent advisory prompt — how to think, communicate, and reference the KB | `type: system`, `area: [domain]`, tags: `system`, `[domain]-kb`, `[agent-codename]` |

### What Makes a Good Domain Note

Each domain note should be:

- **Self-contained** — A reader (human or agent) can understand the topic without reading other notes
- **Expert-level** — Written at the depth of a professional reference, not a Wikipedia summary
- **Calibrated** — Tuned to Nathan's current stage, context, and goals in that domain
- **Actionable** — Includes decision frameworks, checklists, benchmarks, and "when to do X" guidance
- **Connected** — Wikilinks to other KB notes, the master reference, and relevant hub notes
- **Quantified** — Real numbers, ratios, thresholds, and benchmarks wherever possible

### Standard Note Structure

Every domain note follows this structure:

```markdown
---
type: resource
area: [domain area]
status: active
tags:
  - [area tag]
  - [domain]-kb
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Area Hub|Area Hub]]

---

# [Topic Title]

> **Purpose:** [One sentence — what this note covers and why it matters]

---

## [Core Framework / Model / Concept]
[The foundational knowledge — the "what"]

## [Decision Framework / When to Use What]
[The "how to decide" — frameworks, flowcharts, comparison tables]

## [Key Metrics / Benchmarks / Thresholds]
[Quantified targets, ratios, red flags, green flags]

## [Common Mistakes / Pitfalls]
[What to watch out for — biases, errors, misconceptions]

## [Nathan's Context / Current Stage]
[Calibrated to where Nathan is right now in this domain]

## [Action Items / Next Steps / When to Revisit]
[Concrete next actions, review cadence, triggers for updating]

## Related
- [[Master Reference Note]]
- [[Related Domain Note]]
- [[Area Hub]]
```

---

## The KB Build Process — Step by Step

### Phase 1: Scoping (30 min)

**Goal:** Define what the KB covers, who it serves, and how deep it goes.

1. **Identify the agent** — Which agent will use this KB?
2. **Define the domain boundary** — What's in scope? What's explicitly out?
3. **Determine calibration context** — What's Nathan's current stage/level in this domain?
4. **Map the domain model** — What are the 5-12 core topics? What are the 2-4 cross-cutting themes?
5. **Set priority indicators** — Which topics are immediate (🔴), near-term (🟡), ongoing (🟢)?
6. **Review existing vault notes** — What already exists that can be incorporated or referenced?

**Output:** A scoping document with domain model, topic list, calibration notes, and priority rankings.

**Nathan's role:** Provide context on goals, current stage, and what he wants to learn/accomplish. Rank priorities.

### Phase 2: Research & Content Development (2-4 hours)

**Goal:** Build the knowledge content — expert-level, calibrated, actionable.

1. **Write the Master Reference first** — This forces you to define the full scope and structure before going deep
2. **Write domain notes in priority order** — 🔴 first, then 🟡, then 🟢
3. **Write cross-cutting notes** — These emerge naturally as you build domain notes and notice themes spanning topics
4. **Write the system/advisor note last** — It references everything else, so it comes last
5. **Cross-link everything** — Every domain note links to the master reference, related domain notes, and the area hub
6. **Calibrate language and depth** — Match Nathan's current level in the domain (beginner → explain jargon; intermediate → focus on frameworks; advanced → focus on edge cases and optimization)

**Quality checklist for each note:**
- [ ] Self-contained — Makes sense without reading other notes
- [ ] Has decision frameworks — Not just facts, but "how to decide"
- [ ] Quantified — Numbers, ratios, thresholds wherever applicable
- [ ] Nathan's context included — Current stage, goals, specific situation
- [ ] Wikilinks present — Connected to master reference, related notes, hub
- [ ] Priority indicator set — 🔴/🟡/🟢
- [ ] Frontmatter complete — type, area, status, tags (including `[domain]-kb`)

### Phase 3: Installation (15 min)

**Goal:** Install the KB into the vault with proper naming, frontmatter, and integration.

1. **Generate all files** with correct vault naming (spaces, ampersands — no underscores)
2. **Write an install script** (Python) that:
   - Copies files to `Notes/` with correct names
   - Verifies frontmatter completeness
   - Runs a post-install health check
3. **Run in dry-run mode first** — Always preview before applying
4. **Run live** — Install the files
5. **Verify with `vault-health-check`** — Confirm no new issues introduced

### Phase 4: Agent Integration (15 min)

**Goal:** Connect the KB to the agent so it's actually used.

1. **Update the Agent Registry:**
   - Add each KB note to the agent's "Vault Reference Notes" table
   - Add "Inject When" triggers for each note
2. **Update the agent's system prompt:**
   - Add a "Knowledge Base" section referencing the master note
   - Add domain-specific instructions for consulting the KB
3. **Update the Area Hub:**
   - Add a "Knowledge Base" section with Dataview query for `[domain]-kb` tagged notes
   - Add quick-access priority table
   - Link to the system/advisor note
4. **Update `~/.openclaw/workspace/AGENTS.md`:**
   - Verify the agent's dispatch entry is current
5. **Update vault documentation** (if new types or tags were introduced):
   - `[[Tags Reference]]`
   - `[[System Guide]]` type taxonomy
   - `[[System Guide]]` type table
   - `[[System Guide]]` type taxonomy
   - `vault-health-check` valid types list

### Phase 5: Verification (10 min)

**Goal:** Confirm everything works end to end.

1. **Run `vault-health-check`** — No new issues from the KB
2. **Check Dataview queries** — Open the Area Hub in Obsidian, verify the KB notes appear
3. **Test the agent** — Ask a domain question via Telegram. Does Ziggy route to the right agent? Does the agent reference the KB?
4. **Update Agent Maturity table** (in this document) — Move the agent to Level 2

---

## KB Ingestion Variant — When the Knowledge Already Exists

Sometimes the knowledge base content arrives pre-built: a PDF dump from a course, a research session output, notes from a consultant, or content generated in a Claude.ai project. This variant adapts the standard build process for existing material.

### When to Use This Variant

- Nathan provides a document, PDF, or set of notes and says "turn this into a KB"
- A Claude.ai project session produces structured domain knowledge
- Research output from web search needs to be formalized into the vault
- A course or certification produces reference material worth preserving

### Ingestion Process

**Step 1: Triage (10 min)**
1. Read the source material completely
2. Identify the domain — does it map to an existing agent's scope?
3. Assess quality — is it expert-level, or does it need enrichment?
4. Assess structure — is it already in atomic topics, or one monolithic document?

**Decision point:** 
→ If it maps to an existing agent, go to Step 2A (Expand). 
→ If it's a new domain, go to Step 2B (New Agent). 
→ See "Expand vs. New Agent" decision framework below.

**Step 2A: Expand Existing Agent KB**
1. Map source topics to existing KB notes — what's new vs. what overlaps?
2. For overlapping topics: merge new content into existing domain notes (don't duplicate)
3. For new topics: create new domain notes following the Standard Note Structure
4. Update the Master Reference to include new notes
5. Update the agent's "Vault Reference Notes" table in the Agent Registry
6. Skip to Step 4

**Step 2B: Create New Agent from Source Material**
1. Follow the standard KB Build Process from Phase 1 (Scoping)
2. Use the source material as research input — don't just copy-paste
3. Restructure into atomic domain notes (one topic per note)
4. Calibrate to Nathan's current stage and goals
5. Create the agent profile, session state, dispatch entry — full Phase 4

**Step 3: Quality Enrichment**
For each domain note created from external sources:
- [ ] Add decision frameworks (the source probably has facts but not "how to decide")
- [ ] Add Nathan's context section (calibrate to his situation)
- [ ] Add quantified benchmarks/thresholds where possible
- [ ] Add wikilinks to related vault notes
- [ ] Ensure frontmatter is complete with proper `[domain]-kb` tag
- [ ] Verify self-contained readability

**Step 4: Standard Installation**
Follow Phase 3 (Installation) through Phase 5 (Verification) from the standard process.

### Quality Heuristic

Source material quality determines enrichment effort:

| Source Quality | Enrichment Needed | Example |
|---|---|---|
| Expert reference (textbook, professional guide) | Low — restructure and calibrate | Construction code reference, financial planning guide |
| Good overview (course notes, blog series) | Medium — add depth, frameworks, numbers | Online course notes, podcast summaries |
| Raw notes (conversation logs, brainstorm) | High — needs full rewrite into structured KB | Claude.ai session output, meeting notes |

---

## Expand vs. New Agent — Decision Framework

When new knowledge arrives, decide whether to expand an existing agent or create a new one.

### Decision Tree

```
New domain knowledge arrives
│
├── Does it overlap >50% with an existing agent's scope?
│   YES → Expand that agent's KB
│   NO  → Continue
│
├── Would Ziggy's dispatch table route these questions to an existing agent?
│   YES → Expand that agent (even if overlap is <50% — routing coherence matters)
│   NO  → Continue
│
├── Would it need its own unique dispatch keywords?
│   YES → New agent
│   NO  → Continue
│
├── Is the domain large enough to justify 5+ KB notes?
│   YES → New agent
│   NO  → Add as 1-2 resource notes under the closest agent or Ziggy
│
└── Default: Ask Nathan. Present the trade-offs:
    - New agent = cleaner routing + dedicated session state + domain-specific memory
    - Expanding = less maintenance overhead + simpler dispatch table + fewer agents to track
```

### Examples

| Knowledge | Decision | Reasoning |
|---|---|---|
| Advanced vegan baking techniques | Expand Sage | Clearly within Sage's culinary scope |
| Home networking & server setup | Expand Forge | Technical infrastructure falls under engineering |
| Dog training methodology | New agent or Ziggy resource | New domain, no existing agent fits, probably <5 notes |
| Real estate investing strategy | Expand Ledger | Financial domain, Ledger already covers investment strategy |
| Photography & visual arts | New agent | Distinct creative domain, unique dispatch keywords, 5+ topics |

### Maintenance Cost Check

Before creating a new agent, verify willingness to maintain:
- [ ] Session state note (checked weekly)
- [ ] Learning log (updated on Fridays via heartbeat)
- [ ] KB review cadence (at least annually)
- [ ] Dispatch table entry (routing tested)

If the answer to any is "probably not" — make it resource notes under Ziggy instead.

---

## KB Maintenance

### When to Update a KB

- Nathan's stage changes (e.g., moves from debt payoff to investing → Ledger KB priorities shift)
- New domain knowledge acquired (new certifications, new tools, new processes)
- Agent learning log identifies knowledge gaps
- Annual review during comprehensive vault audit

### How to Update

- **Minor updates:** Edit the existing note directly (add a section, update a number)
- **Major updates:** Create new domain notes, update the master reference links, re-run the install verification
- **Stage transitions:** Update the system/advisor note's "Nathan's Context" section and recalibrate priority indicators

### Review Cadence

| KB | Review Trigger |
|----|---------------|
| Construction PM | When taking on new sector or delivery method |
| Personal Finance | Quarterly, or on major life event (job change, new account, debt paid off) |
| Future KBs | Annually, or when agent learning log flags recurring gaps |

---

## Quick Reference — KB Tag Convention

Every KB uses a consistent tag pattern:

| KB | Tag | Area | Master Note Type |
|----|-----|------|-----------------|
| Construction PM | `construction-kb` | work | `database` |
| Personal Finance | `finance-kb` | finances | `resource` |
| Carpenter/GC | `carpenter-kb` | work + household | `resource` |
| Estimating | `estimating-kb` | work | `resource` |
| Shopping | `shopping-kb` | household | `resource` |
| Music | `music-kb` | interests | `resource` |
| Travel | `travel-kb` | interests | `resource` |
| Engineering | `engineering-kb` | system | `resource` |
| Fitness Science | `fitness-kb` | health | `resource` |
| Nutrition Science | `nutrition-kb` | health | `resource` |

*Add rows as new KBs are created.*

---

## Checklist — Complete KB Build

Copy this checklist when starting a new KB build:

```markdown
## [KB Name] — Build Checklist

### Phase 1: Scoping
- [ ] Agent identified
- [ ] Domain boundary defined (in scope / out of scope)
- [ ] Nathan's current stage/calibration documented
- [ ] Domain model mapped (5-12 topics + 2-4 cross-cutting)
- [ ] Priority indicators assigned (🔴/🟡/🟢)
- [ ] Existing vault notes reviewed

### Phase 2: Content
- [ ] Master Reference written
- [ ] Domain notes written (🔴 first)
- [ ] Cross-cutting notes written
- [ ] System/advisor note written
- [ ] All notes cross-linked
- [ ] Quality checklist passed for each note

### Phase 3: Installation
- [ ] Install script created
- [ ] Dry run successful
- [ ] Live install successful
- [ ] vault-health-check clean (no new issues)

### Phase 4: Agent Integration
- [ ] Agent Registry updated (reference notes + triggers)
- [ ] Agent system prompt updated
- [ ] Area Hub updated (KB section + Dataview query)
- [ ] AGENTS.md dispatch verified
- [ ] Vault docs updated (if new types/tags)

### Phase 5: Verification
- [ ] vault-health-check passes
- [ ] Dataview queries show KB notes in hub
- [ ] Agent test via Telegram successful
- [ ] Agent Maturity table updated in this document
```

---

## Related

- [[Agent Registry]] — Full agent profiles and dispatch logic
- [[Construction PM Knowledge Base]] — Example KB (Level 3)
- [[Personal Finance Knowledge Base]] — Example KB (Level 2)
- [[System Guide]] — Vault architecture reference
- [[System Guide]] — Vault conventions and type taxonomy

---

*This process note should be updated as lessons are learned from building future KBs.*

---

Created by: Ziggy · AI: anthropic/claude-sonnet-4-5-20250929
