---
type: system
area: system
status: active
tags:
  - system
  - ziggy
  - agents
  - openclaw
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Ziggy Hub|Ziggy Hub]]

---

# 🤖 Agent Registry

## Specialized Agents, Their Roles, and How They Connect to the Vault

*Last updated: 2026-03-06*

---

## Why Agents

Ziggy is a generalist — chief of staff, construction advisor, fitness coach, meal planner, personal systems admin. That breadth costs tokens. Every message to Ziggy carries the **full system prompt** (~4,000 tokens), and if the question only needs construction knowledge, the fitness/meal/finance context is wasted payload.

Specialized agents solve this by:

- **Carrying only the context they need** (smaller system prompts = fewer tokens per call)
- **Going deeper** in their domain (domain-specific instructions, vocabulary, decision frameworks)
- **Maintaining their own memory** (domain-specific session states that don't pollute other agents)
- **Scaling independently** (route simple questions to a local model, complex ones to cloud)

---

## Architecture: How Agents Use the Vault

```
┌──────────────────────────────────────────────────────┐
│                  OBSIDIAN VAULT                      │
│       (Single source of truth — all agents)          │
│                                                      │
│  System Guide    ← Ziggy (Chief of Staff)    │
│  Construction PM KB      ← Atlas (Construction PMO)  │
│  V-Shape + Health Hub    ← Iron (Fitness Coach)      │
│  Recipes + Meal Plan     ← Sage (Chef & Nutritionist)│
│  Interests Hub           ← Spin (Music DJ)           │
│  Travel notes            ← Compass (Travel Agent)    │
│  App specs + Email       ← Forge (Sr. Engineer)      │
│  Personal Finance KB     ← Ledger (Financial Advisor)│
│  Carpenter & GC KB       ← Hammer (Carpenter & GC)   │
│                                                      │
│  Agent Registry          ← YOU (this document)       │
└──────────────────────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────┐
│                 CONTEXT INJECTION                    │
│                                                      │
│  Each agent gets:                                    │
│   1. Its own system prompt (lean, domain-focused)    │
│   2. Relevant vault notes (referenced, not pasted)   │
│   3. Its own session state (domain-scoped)           │
│   4. Shared Bridge IDs (CLT-XXX, PJ-XXX) if work    │
│                                                      │
│  Ziggy dispatches. Agents execute. Vault remembers.  │
└──────────────────────────────────────────────────────┘
```

### Vault Sharing Rules

1. **Agents READ the vault, they don't own it.** The vault is Nathan's. Agents reference notes by name and suggest changes — Nathan or Ziggy applies them.
2. **Each agent has a "Reference Notes" list** — the specific vault notes it should be aware of. These get injected as context only when needed (staged injection, same as Ziggy).
3. **Agents share Bridge IDs.** If Atlas creates a meeting note for CLT-001, Ziggy and any other agent can find it via the ID system.
4. **Session states are agent-scoped.** Each agent writes its own session state note so domain context doesn't bleed across agents.
5. **The golden rule still applies.** Operational data lives in Smartsheet. Thinking and context lives in Obsidian. Agents don't duplicate Smartsheet data.
6. **Sub-agent policy:** Only Ziggy can spawn agents (`sessions_spawn`). No agent can spawn other agents (`allowAgents: []`).

---


**Estimated monthly savings with agents:** If 60% of queries route to specialized agents (smaller prompts) and 40% of those route to local models, you're looking at **$1-2/month** vs. the undisciplined $30-50+.

---

## Active Agents

| Agent | Codename | Domain | Model Route | Status |
|-------|----------|--------|-------------|--------|
| Chief of Staff | ziggy | Orchestrator / Dispatcher / Life Ops | Cloud (Sonnet) | ✅ Active |
| Construction PMO | atlas | Construction program management | Cloud (Sonnet) or Local | ✅ Active |
| Music DJ | spin | Music discovery, playlists, DJ sets | Local or Cloud | ✅ Active |
| Travel Agent | compass | Trip planning, accommodations, itineraries | Cloud (Sonnet) | ✅ Active |
| Chef & Nutritionist | sage | Meal planning, recipes, grocery, nutrition | Local or Cloud | ✅ Active |
| Training & Fitness Coach | iron | V-Shape program, workout logging, compliance | Local or Cloud | ✅ Active |
| Sr. Engineer / Developer | forge | App development, coding, architecture, self-hosted infra | Cloud (Sonnet) | ✅ Active |
| Financial Advisor | ledger | Personal finance — budgeting, investing, retirement, tax, insurance | Local or Cloud | ✅ Active |
| Carpenter & GC Advisor | hammer | Carpentry, building science, materials, trades, estimating, quality, safety | Local or Cloud | ✅ Active |
| Construction Estimator | tally | ROM through GMP estimates, bid analysis, TIA validation, scope gaps, value engineering | Cloud (Sonnet) | ✅ Active |
| Shopping Assistant | cart | Purchase research, price comparison, deal hunting, subscription audits | Local or Cloud | ✅ Active |
| Automotive Mechanic | wrench | Vehicle diagnostics, maintenance, repair — passenger vehicles, light commercial, EV/hybrid | Local or Cloud | ✅ Active |
| Physics Educator | prism | Physics explanations — ELI5 through PhD-level, Feynman method, thought experiments | Local or Cloud | ✅ Active |

---

## Ziggy as Chief of Staff & Agent Dispatcher

Ziggy is NOT just another agent — Ziggy is the **executive layer**.

### How Ziggy Dispatches

```
Nathan says something
│
├── Cross-domain or ambiguous?                          → Ziggy handles directly
├── "What workout is today?"                            → Iron
├── "Plan meals for the week"                           → Sage
├── "Help me think about the CFA permit delay"          → Atlas
├── "Find me flights to NOLA"                           → Compass
├── "How should I budget?" / "Pay off debt or invest?"  → Ledger
├── "How do I frame this wall?"                         → Hammer
├── "What material should I use for..."                 → Hammer
├── "Evaluate this GC's work"                           → Hammer
├── "Build me an app for..."                            → Forge
├── "Make me a playlist for..."                         → Spin
├── Weekly review                                       → Ziggy runs it, pulling from agent session states
└── "Save the session state"                            → Ziggy saves, notes which agents were active
```

### What Stays with Ziggy (Never Delegated)

- Weekly and monthly reviews (cross-domain by nature)
- Vault structure changes (templates, frontmatter schema, new note types)
- Cross-agent coordination (e.g., "my meal plan needs to hit my protein targets from my fitness plan")
- Session state management (Ziggy writes the master session state)
- Agent creation and modification (Ziggy maintains this registry)
- Inbox triage and general life management
- Anything that touches 2+ domains simultaneously

---

## Agent Profiles

---

### 🏗️ Atlas — Construction Program Manager

| Field | Value |
|-------|-------|
| **Codename** | atlas |
| **Role** | Construction PMO advisor — full lifecycle management from real estate through closeout |
| **Reports To** | Ziggy |
| **Created** | 2026-03-03 |

**Scope — OWNS:**
- Construction lifecycle advisory (Phases 1-10)
- AHJ research and permit strategy
- Contractor/vendor evaluation and procurement guidance
- Change order analysis and risk assessment
- TIA billing logic and financial management
- OAC meeting prep and stakeholder coordination
- Sector-specific guidance (retail, restaurant, grocery, petroleum, medical)
- Construction document review and RFI strategy

**Does NOT Handle:**
- Personal fitness, nutrition, household → Redirect to Ziggy
- Non-construction financials → Redirect to Ledger
- App/code development → Redirect to Forge
- Travel planning → Redirect to Compass

**Escalation Triggers (→ Ziggy):**
- Questions spanning construction AND personal life
- Requests to create new vault note types or modify templates
- Anything requiring Smartsheet operational data (remind Nathan to check Smartsheet directly)

**Vault Reference Notes:**

| Note | Inject When |
|------|-------------|
| `[[Construction PM Knowledge Base]]` | Any construction question — scan for phase, then inject specific phase note |
| `[[01 - Real Estate Pipeline & Site Selection]]` through `[[10 - Asset Stabilization & Operations]]` | When question touches that specific phase |
| `[[AHJ Research Methodology]]` | Permit, jurisdiction, or compliance questions |
| `[[Contract Types & Structures]]` | Contract, procurement, or delivery method questions |
| `[[Risk Management Framework]]` | Risk assessment, RAID log, or mitigation questions |
| `[[Financial Management & Billing]]` | SOV, billing, TIA, or construction finance questions |
| `[[Stakeholder Directory]]` | Role/responsibility/handoff questions |
| `[[Tenant Improvement Allowances]]` | TIA questions |
| `[[Project Delivery Methods]]` | DBB, DB, CMAR, IPD discussions |
| `[[Document Types & Management]]` | Submittal, RFI, ASI, or document workflow questions |
| `[[Sector Profiles — Retail, Commercial, Residential, Civil]]` | When establishing project context |
| Sector Appendices (Petroleum, Grocery, Restaurant, Retail, Medical) | When project type matches that sector |
| `[[Roles, Responsibilities & Timelines — Pre-Construction (Phases 1-5)]]` | Pre-construction phase questions |
| `[[Roles, Responsibilities & Timelines — Construction & Closeout (Phases 6-10)]]` | Construction/closeout phase questions |
| `[[Schedule Recovery & Acceleration]]` | Schedule delay, recovery plan, acceleration, crash, LD, weather delay, time extension questions |
| `[[Trade Dependency Matrix — PM Perspective]]` | Trade stacking, sub coordination, long-lead, MEP rough-in conflict, program sub resource conflict questions |
| `[[Subcontractor Default & Replacement]]` | Sub performance issues, sub default, sub replacement, bond claim, sub not showing up, sub cash flow, lien, backup sub questions |
| `[[Delay Documentation & Claims]]` | Delay claim, time extension, weather delay documentation, daily report standards, concurrent delay, dispute, claim preparation, record retention questions |
| `[[Schedule Specification & Analysis Methods]]` | Schedule spec, baseline review, CPM, schedule manipulation, earned value, SPI, P6, schedule consultant, program schedule questions |
| `[[Commissioning & Systems Turnover]]` | Commissioning, TAB, fire alarm test, systems start-up, owner training, CO bottleneck, equipment commissioning questions |
| `[[Multi-Project Resource Conflicts]]` | Resource conflict, sub on multiple sites, shared GC, architect overloaded, portfolio scheduling, program calendar, crew pulled, prioritization questions |
| `[[Lessons Learned Capture Workflow]]` | Lessons learned, capture lesson, what did we learn, post-project review, AHJ intelligence update, vendor performance update questions |
| `[[Value Engineering Framework]]` | Value engineering, VE, cost savings, budget reduction, scope reduction, over budget, bid over budget, VE exercise, VE log questions |
| `[[Insurance & Bonding During Construction]]` | Insurance, bonding, builder's risk, CGL, workers comp, performance bond, payment bond, mechanic's lien, COI, certificate of insurance, OCIP, surety, E&O questions |

**Sector triggers → appendix:**

| Keyword | Appendix |
|---------|----------|
| gas station, fuel, UST, dispenser | Petroleum & Fuel Station |
| grocery, supermarket, refrigeration | Grocery & Supermarket |
| restaurant, kitchen, QSR, drive-through | Restaurant |
| medical, dental, vet, imaging, X-ray | Medical, Dental & Veterinary |
| rollout, prototype, multi-site, national | General Retail & National Rollout |

**System Prompt:** See [[Atlas Agent Profile]]

**Routing:**

| Trigger | Model |
|---------|-------|
| "project note", "meeting notes for [client]", "help me think about [project]", "AHJ", "permit strategy", "change order", "TIA", "OAC prep", "RFI", "submittal", "schedule recovery", "we're behind", "delay", "acceleration", "crash schedule", "liquidated damages", "LD", "time extension", "weather days", "trade conflict", "sub stacking", "long-lead", "MEP coordination", "rough-in schedule", "sub default", "sub not showing up", "replace the sub", "bond claim", "performance bond", "mechanic's lien", "lien waiver", "delay claim", "daily report", "concurrent delay", "dispute", "arbitration", "mediation", "schedule spec", "baseline review", "CPM", "float", "earned value", "schedule manipulation", "P6", "schedule consultant", "recovery schedule", "commissioning", "TAB", "test and balance", "fire alarm test", "systems start-up", "owner training", "equipment start-up", "resource conflict", "sub on multiple projects", "crew pulled", "shared superintendent", "architect overloaded", "portfolio scheduling", "program calendar", "prioritize projects", "lessons learned", "capture this lesson", "what did we learn", "update AHJ", "vendor performance", "post-project review", "value engineering", "VE", "over budget", "cost reduction", "scope reduction", "bid over budget", "budget gap", "VE exercise", "VE log", "insurance", "bonding", "builder's risk", "CGL", "workers comp", "payment bond", "COI", "certificate of insurance", "OCIP", "CCIP", "surety", "E&O", "professional liability", "wrap-up" | Cloud (Sonnet) |
| "explain [construction term]", "what phase is [activity]", "what does [acronym] mean", "what's the difference between DBB and CMAR" | Local |

**Session State Note:** `[[Atlas Session State]]`

**Learning Log:**

| Date | Lesson Learned | Source |
|------|---------------|--------|
| — | — | — |

---

### 🎧 Spin — Music DJ

| Field | Value |
|-------|-------|
| **Codename** | spin |
| **Role** | Music DJ — discovery, playlists, set curation, genre exploration, music knowledge |
| **Reports To** | Ziggy |
| **Created** | 2026-03-03 |

**Scope — OWNS:**
- Music discovery and recommendations (new artists, albums, tracks)
- Playlist curation by mood, activity, genre, energy level, or occasion
- DJ set planning (transitions, BPM matching, energy arcs)
- Genre exploration and music history
- Festival and concert research (lineups, artist discovery)
- Music theory and production concepts (conversational level)
- Soundtrack recommendations for workouts, focus, cooking, travel

**Does NOT Handle:**
- Concert/festival travel logistics → Redirect to Compass
- Ticket purchasing or venue research → Redirect to Ziggy
- Audio equipment inventory → Redirect to Ziggy
- Coding music apps → Redirect to Forge

**Vault Reference Notes:**

| Note | Inject When |
|------|-------------|
| `[[SPIN — Music Agent KB]]` | Any music query |
| `[[Interests Hub]]` | General context on Nathan's interests |
| `[[New Orleans Jazz Fest 2025 - Accommodations]]` | Jazz Fest artist/music questions |
| Any future `type: resource` notes tagged `music` | As they're created |

**System Prompt:** See [[SPIN — Music Agent KB]]

**Routing:**

| Trigger | Model |
|---------|-------|
| "playlist for", "music for", "recommend songs", "DJ set", "what should I listen to", "who sounds like", "genre" | Local |
| "build me a full set list", "deep dive on [genre history]", "compare [artist] discographies" | Cloud (Sonnet) |

**Session State Note:** `[[Spin Session State]]`

**Learning Log:**

| Date | Lesson Learned | Source |
|------|---------------|--------|
| 2026-03-06 | Sub agents require two things for exec permission: (1) agent policy in exec-approvals.json and (2) command on security allowlist via openclaw approvals | Spotify control permission debugging |
| — | — | — |

---

### 🧭 Compass — Travel Agent

| Field | Value |
|-------|-------|
| **Codename** | compass |
| **Role** | Travel agent — trip planning, accommodations, itineraries, logistics |
| **Reports To** | Ziggy |
| **Created** | 2026-03-03 |

**Scope — OWNS:**
- Trip research and planning (destinations, timing, budget)
- Accommodation comparison (Airbnb, VRBO, hotels — pros/cons, value analysis)
- Itinerary building (day-by-day schedules with logistics)
- Flight and transportation research
- Restaurant and activity recommendations at destination
- Packing lists and travel prep
- Travel budget estimation and tracking
- Visa, passport, and travel document reminders

**Does NOT Handle:**
- Music/entertainment at destination → Coordinate with Spin via Ziggy
- Fitness while traveling → Redirect to Iron
- Work travel reimbursement → Redirect to Ziggy
- Booking/purchasing (no API access) → Provide links and recommendations, Nathan books

**Vault Reference Notes:**

| Note | Inject When |
|------|-------------|
| `[[COMPASS — Travel Agent KB]]` | Any travel question |
| `[[New Orleans Jazz Fest 2025 - Accommodations]]` | Jazz Fest travel questions |
| `[[NO Jazz Fest 2025 - Accommodations Comparison]]` | Comparing Jazz Fest options |
| `[[NO Jazz Fest 2025 - VRBO vs Airbnb Comparison]]` | Platform comparison for Jazz Fest |
| Any future notes tagged `travel` | As they're created |

**System Prompt:** See [[COMPASS — Travel Agent KB]]

**Routing:**

| Trigger | Model |
|---------|-------|
| "plan a trip", "find flights", "hotel", "airbnb", "vrbo", "itinerary", "where should I stay", "travel to", "vacation", "road trip", "Jazz Fest" | Cloud (Sonnet) — needs web search |
| "what to pack for", "weather in [city]", "how far is [A] from [B]" | Local |

**Session State Note:** `[[Compass Session State]]`

**Learning Log:**

| Date | Lesson Learned | Source |
|------|---------------|--------|
| — | — | — |

---

### 🌿 Sage — Chef & Nutritionist

| Field | Value |
|-------|-------|
| **Codename** | sage |
| **Role** | Chef & nutritionist — meal planning, recipe development, grocery management, macro tracking, dietary optimization |
| **Reports To** | Ziggy |
| **Created** | 2026-03-03 |

**Scope — OWNS:**
- Weekly meal planning (recipe selection, variety, cuisine rotation)
- Recipe research, creation, and adaptation
- Grocery list generation from meal plans (consolidated, organized by aisle)
- Nutritional analysis (calories, protein, macros per recipe and per day)
- Dietary optimization for fitness goals (protein targets, caloric surplus for lean bulk)
- Pantry inventory awareness and waste reduction
- Cooking technique guidance and substitution advice
- Meal prep strategy (batch cooking, storage, reheating)

**Does NOT Handle:**
- Fitness programming or workout logging → Redirect to Iron
- Grocery budget tracking (dollar amounts) → Redirect to Ledger
- Household inventory beyond food → Redirect to Ziggy
- Garden planning → Redirect to Ziggy (but can advise on using garden produce in recipes)

**Escalation Triggers (→ Ziggy):**
- Cross-domain: "My protein is low this week AND I missed workouts" → Ziggy coordinates Sage + Iron
- Creating non-food vault notes
- Financial analysis of grocery spending

**Vault Reference Notes:**

| Note | Inject When |
|------|-------------|
| `[[Sage Nutrition & Culinary Knowledge Base]]` | Master index — loads sub-notes on demand |
| `[[Meal Planning System - Overview]]` | Any meal planning workflow question |
| `[[Meal Plan - Current Week]]` | "What's for dinner", weekly planning |
| `[[Recipe Index]]` | Recipe browsing, searching, or selecting |
| `[[Grocery Lists]]` | Grocery list management |
| `[[Recipe to Grocery List - Process]]` | How the grocery generation workflow works |
| `[[Protein Target]]` | Protein compliance context |
| `[[Vegan Macronutrient Science]]` | Protein math, carb timing, fat quality |
| `[[Vegan Micronutrient Mastery]]` | B12, iron, zinc, omega-3, D3, iodine, calcium |
| `[[Vegan Sports Nutrition & Muscle Building]]` | Lean bulk, leucine, meal timing, muscle synthesis |
| `[[Vegan Supplementation Protocol]]` | B12, D3, algae EPA/DHA, zinc, iodine (non-negotiable stack) |
| `[[Micronutrient-Maximizing Garden]]` | When incorporating garden produce |
| Individual recipe notes | When referencing specific recipes |

**KB Priority:**
- 🔴 Always in scope: Vegan Macronutrient Science, Vegan Micronutrient Mastery, Vegan Sports Nutrition & Muscle Building, Vegan Supplementation Protocol
- 🟡 Regular use: Vegan Protein Mastery, Vegan Flavor Architecture, Classic Dish Swaps, Meal Prep Systems, Gut Health & Vegan Microbiome
- 🟢 Reference: Global Vegan Cuisine Guide, Sauces & Condiments Bible, Grocery Strategy, Athlete Meal Planning Framework, Food Label Literacy

**System Prompt:** See [[Sage Agent Profile]]

**Routing:**

| Trigger | Model |
|---------|-------|
| "what's for dinner", "add to grocery list", "save this recipe", "what should I eat", "smoothie" | Local |
| "plan meals for the week", "build grocery list from meal plan", "high-protein vegan recipe for [cuisine]", "nutritional analysis", "meal prep strategy" | Cloud (Sonnet) |

**Session State Note:** `[[Sage Session State]]`

**Learning Log:**

| Date | Lesson Learned | Source |
|------|---------------|--------|
| 2026-03-02 | Meal plan note naming must match daily note wikilink exactly — `Meal Plan - Current Week` not `Meal Plan - Week of YYYY-MM-DD` | Meal planning workflow debugging |
| 2026-03-06 | Daily notes need day-by-day meal assignments to support zero-friction "Dinner Tonight" workflow | Meal planning v2 implementation |
| — | — | — |

---

### 🏋️ Iron — Training & Fitness Coach

| Field | Value |
|-------|-------|
| **Codename** | iron |
| **Role** | Fitness coach — Nathan 170@12 program execution, workout logging, progressive overload, compliance tracking, assessment cycles |
| **Reports To** | Ziggy |
| **Created** | 2026-03-03 |

**Scope — OWNS:**
- Workout scheduling (M/W/F strength, T/Th conditioning, Sat/Sun rest)
- Exercise form guidance and cueing
- Workout logging (creating Workout notes with correct frontmatter)
- RPE trend analysis and progressive overload decisions
- Protein/water/sleep habit compliance tracking
- Weight trend monitoring (lean bulk targets: 147.7 lbs @ 18.7% BF → 170 lbs @ 12% BF)
- 4-week assessments (body composition, strength benchmarks)
- Deload recommendations
- Exercise substitutions and program modifications
- Recovery and mobility guidance

**Does NOT Handle:**
- Meal planning or recipes → Redirect to Sage
- Grocery lists → Redirect to Sage
- Workout playlist creation → Redirect to Spin
- Medical advice → Redirect to a real doctor

**Escalation Triggers (→ Ziggy):**
- Nutrition compliance falling short AND workout performance declining → Ziggy coordinates Iron + Sage
- Requests to fundamentally redesign the program
- Injury concerns that might need medical attention

**Vault Reference Notes:**

| Note | Inject When |
|------|-------------|
| `[[Nathan 170@12 — Kettlebell Calisthenics Program]]` | Any fitness question — program structure, phases, progression |
| `[[Nathan 170@12 — Monday Lower]]` | Monday workout questions |
| `[[Nathan 170@12 — Tuesday Conditioning]]` | Tuesday workout questions |
| `[[Nathan 170@12 — Wednesday Upper]]` | Wednesday workout questions |
| `[[Nathan 170@12 — Thursday Conditioning]]` | Thursday workout questions |
| `[[Nathan 170@12 — Friday Full Body]]` | Friday workout questions |
| `[[Water Intake]]` | Water compliance questions |
| `[[Protein Target]]` | Protein compliance questions |
| `[[Sleep Quality]]` | Sleep compliance questions |
| `[[Health Hub]]` | General health context |
| Workout log files in `Iron_Sessions/` | When analyzing trends or past performance |

**System Prompt:** See [[Iron — Fitness Knowledge Base]]

**Routing:**

| Trigger | Model |
|---------|-------|
| "what workout is today", "did I hit protein", "how much water", "log my workout" (simple entry) | Local |
| "log my workout" (full session with RPE/notes), "4-week assessment", "how's my fitness going", "should I deload", "modify the program", "analyze my trends" | Cloud (Sonnet) |

**Session State Note:** `[[Iron Session State]]`

**Learning Log:**

| Date | Lesson Learned | Source |
|------|---------------|--------|
| 2026-03-06 | Daily note workout sections must include progressive overload values per week — static templates don't work for a 12-week program | Iron workout integration session |
| — | — | — |

---

### ⚒️ Forge — Sr. Coding Engineer / Developer

| Field | Value |
|-------|-------|
| **Codename** | forge |
| **Role** | Senior full-stack engineer — app development, architecture, self-hosted infrastructure, automation, coding |
| **Reports To** | Ziggy |
| **Created** | 2026-03-03 |

**Scope — OWNS:**
- Web application development (React, Next.js, vanilla JS, HTML/CSS)
- Backend development (Node.js, Python, serverless)
- Database design and implementation (PostgreSQL, SQLite, Firebase, Supabase)
- API design and integration
- Self-hosted infrastructure (Mac Mini M4, Ollama, Syncthing, Proton Bridge)
- Automation scripts and pipelines (Ziggy Email Bridge, vault automation)
- OpenClaw configuration and model routing
- App specification and architecture review
- Code review, debugging, and optimization
- DevOps (deployment, CI/CD, monitoring)

**Does NOT Handle:**
- Non-technical project management → Redirect to Atlas or Ziggy
- Content creation (blog posts, emails) → Redirect to Ziggy
- UI/UX design philosophy → Collaborate with Ziggy on design decisions

**Escalation Triggers (→ Ziggy):**
- Architecture decisions that affect vault structure
- Security concerns or infrastructure risks
- Budget decisions on hosting/services
- New system integrations affecting multiple domains

**Vault Reference Notes:**

| Note | Inject When |
|------|-------------|
| `[[Forge — Sr. Engineer Developer Knowledge Base]]` | Any engineering question |
| `[[Ziggy Email Bridge Architecture]]` | Email bridge development, Smartsheet integration |
| `[[Ziggy Email Bridge]]` | Email bridge project status |
| `[[Web App Build Questionnaire]]` | New app specification process |
| `[[App Specification Template]]` | Structuring new app requirements |
| `SOUL.md` | System identity, model routing, rules (workspace root) |
| `SOUL.md` | System identity, model routing, rules (workspace root) |
| `[[System Guide]]` | Vault architecture (when building vault-touching features) |

**System Prompt:** See [[Forge — Sr. Engineer Developer Knowledge Base]]

**Routing:**

| Trigger | Model |
|---------|-------|
| "build me an app", "write a script", "architecture for", "debug this", "deploy", "API", "database schema", "Email Bridge", "OpenClaw config", "model routing" | Cloud (Sonnet) |
| "what does [tech term] mean", "how do I run [command]", "explain [concept]" | Local |

**Session State Note:** `[[Forge Session State]]`

**Learning Log:**

| Date | Lesson Learned | Source |
|------|---------------|--------|
| — | — | — |

---

### 💰 Ledger — Financial Advisor

| Field | Value |
|-------|-------|
| **Codename** | ledger |
| **Role** | Personal financial advisor — budgeting, debt strategy, investing, retirement, tax planning, insurance, behavioral finance |
| **Reports To** | Ziggy |
| **Created** | 2026-03-03 |

**Scope — OWNS:**
- Budgeting and cash flow management
- Debt payoff strategy (avalanche vs. snowball, consolidation, credit score)
- Emergency fund sizing and savings architecture
- Investment strategy and portfolio theory (asset allocation, index funds, rebalancing)
- Retirement planning (401k/IRA/HSA optimization, contribution priority, Social Security basics)
- Tax planning and optimization (bracket management, Roth vs. Traditional, Tennessee-specific)
- Insurance and risk management
- Behavioral finance coaching
- Financial milestone tracking and benchmarking

**Does NOT Handle:**
- Construction project financials (TIA, SOV, pay apps) → Redirect to Atlas
- Meal/grocery budgets → Redirect to Sage
- App/infrastructure costs → Redirect to Forge
- Travel budgets → Redirect to Compass
- Tax return preparation → Recommend a CPA
- Estate planning → Recommend an attorney
- Insurance product selection → Recommend an independent agent

**Vault Reference Notes:**

| Note | Inject When |
|------|-------------|
| `[[Personal Finance Knowledge Base]]` | Any financial question — scan priority waterfall first |
| `[[Budgeting & Cash Flow Management]]` | Budget, spending, cash flow, savings rate |
| `[[Debt Strategy & Credit Management]]` | Debt payoff, credit score, DTI |
| `[[Emergency Fund & Savings Architecture]]` | Emergency fund, HYSA, sinking funds |
| `[[Investment Strategy & Portfolio Theory]]` | Investing, ETFs, index funds, portfolio |
| `[[Retirement Planning & Optimization]]` | 401k, IRA, Roth, HSA, retirement projections |
| `[[Tax Planning & Optimization]]` | Tax brackets, deductions, Roth conversions, TN-specific |
| `[[Insurance & Risk Management - Personal]]` | Coverage, deductibles, umbrella, disability |
| `[[Behavioral Finance & Decision Frameworks]]` | Emotional money decisions, cognitive biases |
| `[[Cart KB 13 — Purchase Decision Framework]]` | Purchase evaluation, cost-per-use, opportunity cost, need vs want (coordinated with Cart) |
| `[[Financial Advisor Selection & Fiduciary Standards]]` | Hiring a human advisor |
| `[[Financial Planning Milestones & Benchmarks]]` | Am I on track? Age benchmarks, annual review |
| `[[Finances Hub]]` | Live account data, bills, monthly reviews, financial goals |

**System Prompt:** See [[Ledger Agent Profile]]

**Routing:**

| Trigger | Model |
|---------|-------|
| "budget", "spending", "cash flow", "savings rate", "debt", "credit score", "emergency fund", "HYSA", "insurance", "where should my money go" | Local |
| "invest", "index fund", "ETF", "Roth", "401k", "IRA", "HSA", "retire", "tax", "capital gains", "net worth", "am I on track" | Cloud (Sonnet) |

**Session State Note:** `[[Ledger Session State]]`

**Learning Log:**

| Date | Lesson Learned | Source |
|------|---------------|--------|
| 2026-03-03 | Initial KB build: 12 notes covering full financial lifecycle, calibrated for accumulation phase | Finance KB build session |
| — | — | — |

---

### 🔨 Hammer — Carpenter & General Contractor Advisor

| Field | Value |
|-------|-------|
| **Codename** | hammer |
| **Role** | Carpenter & GC advisor — building science, framing, finish carpentry, materials, codes, trades, estimating, tools, quality control, safety |
| **Reports To** | Ziggy |
| **Created** | 2026-03-04 |

**Scope — OWNS:**
- Building science (structural systems, moisture management, thermal performance, air barriers)
- Residential construction sequencing (site prep through punch list, trade ordering, critical path)
- Framing and structural carpentry (wall/floor/roof systems, layout, connections)
- Finish carpentry and trim (doors, windows, baseboard, crown, cabinets, stairs)
- Materials and fasteners (lumber grades, sheet goods, concrete, insulation, fastener systems)
- Building codes and inspection readiness (IRC/IBC basics, inspection process, common violations)
- Trade coordination and subcontractor management
- Estimating and takeoffs (material quantification, labor productivity, bid evaluation)
- Tools and equipment (selection, use, maintenance, buy vs. rent)
- Quality control and defect identification
- Construction safety (OSHA Focus Four, PPE, scaffolding, ladder safety)
- PM-to-builder translation (site walk guidance, red flags, questions to ask)

**Does NOT Handle:**
- Construction program management (phases, stakeholders, contracts, TIA) → Redirect to Atlas
- Personal finances → Redirect to Ledger
- Fitness or nutrition → Redirect to Iron or Sage
- App development → Redirect to Forge
- Tool purchasing decisions (brand selection, timing, pricing) → Coordinate with Cart ([[Cart KB 12 — Tools and Workshop Equipment]])
- Structural engineering calculations (non-prescriptive) → Recommend a licensed engineer
- Electrical panel work, gas piping → Recommend a licensed professional

**Vault Reference Notes:**

| Note | Inject When |
|------|-------------|
| `[[Carpenter and General Contractor - Master Reference]]` | Any builder/GC question |
| `[[Building Science Fundamentals]]` | How buildings work, moisture, thermal, structural physics |
| `[[Residential Construction Sequencing]]` | Build order, trade sequencing, critical path |
| `[[Framing & Structural Carpentry]]` | Framing methods, wall/floor/roof systems, layout |
| `[[Finish Carpentry & Trim Work]]` | Trim, doors, windows, cabinets, stairs |
| `[[Materials & Fasteners Reference]]` | Material selection, lumber grades, fastener types |
| `[[Building Codes & Inspection Readiness]]` | Code requirements, inspection process, permit triggers |
| `[[Trade Coordination & Subcontractor Management]]` | Scheduling subs, scope management, quality control |
| `[[Estimating & Takeoffs]]` | Material takeoffs, labor estimating, bid evaluation |
| `[[Tools & Equipment Reference]]` | Tool selection, buy vs. rent, maintenance |
| `[[Common Defects & Quality Control]]` | Defect identification, severity, inspection checklists |
| `[[Construction Safety & OSHA Residential]]` | Safety requirements, PPE, fall protection |
| `[[PM-to-Builder Translation Guide]]` | When question bridges PM and builder perspectives |
| `[[Hammer Agent Profile]]` | Agent communication configuration |

**System Prompt:** See [[Hammer Agent Profile]]

**Routing:**

| Trigger | Model |
|---------|-------|
| "how do I frame", "what material", "what tool", "how to install", "baseboard", "trim", "drywall", "what nail", "what screw", "building science", "what's the code for", "is this safe" | Local |
| "estimate this project", "full build plan", "evaluate this bid", "complex framing layout", "structural assessment", "walk me through the full sequence for [project type]" | Cloud (Sonnet) |

**Session State Note:** `[[Hammer Session State]]`

**Learning Log:**

| Date | Lesson Learned | Source |
|------|---------------|--------|
| 2026-03-04 | Initial KB build: 14 notes covering full craft/execution domain, calibrated for PM + personal builder hybrid | Carpenter/GC KB build session |
| — | — | — |

---

### 🛒 Cart — Shopping Assistant

| Field | Value |
|-------|-------|
| **Codename** | cart |
| **Role** | Shopping assistant — purchase research, price comparison, deal hunting, subscription audits, buying recommendations |
| **Reports To** | Ziggy |
| **Created** | 2026-03-06 |

**Scope — OWNS:**
- Purchase research and comparison (electronics, appliances, household goods, tools)
- Price tracking and deal timing advice
- Coupon and promo code strategy
- Subscription audit and optimization
- Unit price comparison and value analysis
- Seasonal buying calendar guidance
- Store tier recommendations (grocery and general merchandise)
- Major purchase timing (vehicles, insurance, travel)
- Secondhand market guidance (when to buy used vs. new)
- "Should I buy this?" analysis

**Does NOT Handle:**
- Construction materials estimating → Redirect to Tally
- Home services contractor selection → Redirect to Hammer
- Grocery meal planning → Redirect to Sage
- Travel booking execution → Redirect to Compass
- Financial planning/budgeting → Redirect to Ledger
- Actual purchasing/transactions → Provide research only, Nathan buys

**Escalation Triggers (→ Ziggy):**
- Purchase decision spans multiple domains (e.g., fitness equipment + workout program)
- High-stakes purchase requiring cross-domain context
- Dispute resolution with retailers

**Vault Reference Notes:**

| Note | Inject When |
|------|-------------|
| `[[Cart — Shopping Assistant Knowledge Base]]` | Any shopping question — master index |
| `[[Cart KB 01 — Groceries and Food]]` | Grocery optimization questions |
| `[[Cart KB 02 — Travel and Experiences]]` | Flight/hotel timing and deals |
| `[[Cart KB 03 — Promo Codes and Coupons]]` | Deal hunting, stacking strategies |
| `[[Cart KB 04 — Subscriptions and Digital]]` | Subscription audits |
| `[[Cart KB 05 — Vehicles]]` | Car purchase or maintenance |
| `[[Cart KB 06 — Home Services and Contractors]]` | Service provider vetting |
| `[[Cart KB 07 — Insurance and Financial]]` | Insurance shopping |
| `[[Cart KB 08 — Education and Development]]` | Courses, certifications |
| `[[Cart KB 09 — Health and Medical]]` | Healthcare cost optimization |
| `[[Cart KB 10 — Real Estate Wedding Kids Secondhand]]` | Major life purchases |
| `[[Cart KB 11 — Seasonal and Luxury]]` | Timing, outlet myths, luxury alternatives |
| `[[Cart KB 12 — Tools and Workshop Equipment]]` | Tool purchase, power tool, hand tool, workshop, battery platform, drill, saw questions |
| `[[Cart KB 13 — Purchase Decision Framework]]` | "Should I buy this?", cost per use, impulse purchase, need vs want, repair vs replace questions |
| `[[Cart KB 14 — Nashville-Specific Shopping Intelligence]]` | Nashville store, Tennessee tax, tax-free weekend, local deal, where to buy in Nashville questions |
| `[[CART_MEMORY]]` | Purchase patterns, brand performance, deal quality |
| `[[Cart Session State]]` | Active price watches, pending recommendations |

**System Prompt:** See [[Cart — Shopping Assistant Knowledge Base]]

**Routing:**

| Trigger | Model |
|---------|-------|
| "best price for", "where to buy", "is this a good deal", "coupon for", "promo code", "best drill", "what battery platform", "Ryobi vs DeWalt", "where to buy tools", "Nashville tax", "tax-free weekend", "ALDI vs Kroger Nashville" | Local |
| "should I buy", "compare these options", "subscription audit", "timing for [major purchase]", "should I buy this tool", "workshop setup plan", "tool collection strategy", "is this purchase worth it", "cost per use", "repair or replace", "subscription audit", "Nashville internet provider comparison" | Cloud (Sonnet) |

**Session State Note:** `[[Cart Session State]]`

**Learning Log:**

| Date | Lesson Learned | Source |
|------|---------------|--------|
| — | — | — |

---

### 🔧 Wrench — Automotive Mechanic

| Field | Value |
|-------|-------|
| **Codename** | wrench |
| **Role** | Master mechanic — diagnostic specialist, teaching mentor, hands-on repair guide for automotive/mechanical systems |
| **Reports To** | Ziggy |
| **Created** | 2026-03-08 |

**Scope — OWNS:**
- Vehicle diagnostics (no-start, misfire, overheating, electrical gremlins, parasitic draw)
- Maintenance scheduling and service interval guidance
- Repair procedures and step-by-step instructions
- Parts selection and quality tier recommendations
- Tool and equipment guidance
- Safety protocols (vehicle lifting, high-voltage EV/hybrid, airbag systems)
- Service manual interpretation (wiring diagrams, torque specs, diagnostic flowcharts, TSBs)
- ELI5 explanations with physical analogies
- Repair prioritization and cost-benefit analysis

**Coverage:**
- Passenger vehicles (cars, trucks, SUVs, vans)
- Light commercial vehicles
- Motorcycles and powersport
- Small engines (lawn equipment, generators)
- EV and hybrid systems (with safety protocols)
- Classic/vintage vehicles
- Heavy equipment fundamentals (with referral to specialists)

**Does NOT Handle:**
- Lemon law or insurance claims → Recommend attorney/adjuster
- Financial budgeting for repairs → Redirect to Ledger
- Travel logistics for parts acquisition → Redirect to Compass
- Construction equipment beyond fundamentals → Redirect to Hammer

**Escalation Triggers (→ Ziggy):**
- Questions spanning vehicle repair AND personal projects
- Requests for major financial decisions on vehicle purchases
- Repair recommendations requiring cross-domain context

**Vault Reference Notes:**

| Note | Inject When |
|------|-------------|
| `[[Wrench — Automotive Mechanic Knowledge Base]]` | Any automotive question — master index |
| KB modules loaded on demand by topic | See KB README for selective loading priority |

**KB Architecture (29 modules, ~315KB):**

**Always load (behavior layer):**
- 00 — Agent Identity
- 01 — Teaching Framework (ELI5 methodology)

**Engineering foundation:**
- 02 — Engineering Fundamentals (thermodynamics, fluids, electricity, materials, fasteners, forces)

**Vehicle systems (load per query):**
- 03 — Engine Systems (ICE, diesel, forced induction, hybrid, EV)
- 04 — Drivetrain & Transmission (manual, automatic, CVT, DCT, transfer case, differentials)
- 05 — Electrical & Electronics (12V system, wiring, CAN bus, OBD-II, sensors)
- 06 — Chassis, Suspension, Steering (suspension types, ball joints, alignment, bearings)
- 07 — Brake Systems (disc, drum, ABS, parking brake)
- 08 — HVAC & Comfort (A/C, heating, blower, climate control)
- 09 — Fuel, Exhaust, Emissions (fuel delivery, injectors, cat, O2 sensors, EVAP)
- 15 — ADAS (forward camera, radar, lidar, calibration)
- 16 — Body, Interior, Lighting (power windows, mirrors, sunroof, headlights)
- 24 — Classic & Vintage (points ignition, carburetors, 6V systems)

**Operational knowledge (load per query):**
- 10 — Diagnostic Methodology (6-step process, decision trees)
- 11 — Tools & Equipment (hand tools, diagnostic tools, power tools, lifting)
- 12 — Safety Protocols (PPE, vehicle lifting, fire safety, HV safety, airbag safety)
- 13 — Service Manual Interpreter (OEM, Haynes, AllData, wiring diagrams, TSBs)
- 14 — Maintenance Schedules (universal schedule, fluids, wear items)
- 18 — Towing & Payload (weight ratings, hitch systems, trailer brakes)
- 19 — Welding & Fabrication (MIG/TIG, exhaust fab, safety)
- 20 — Corrosion & Rust (inspection, treatment, prevention)
- 22 — Tire Repair (patch/plug, repairability zones, TPMS)
- 23 — A/C Service Procedures (recovery, evacuation, charge, R-1234yf)
- 26 — Advanced Scan Data (Mode $06, bi-directional controls, PIDs)

**Specialty knowledge (load per query):**
- 25 — Small Engine & Powersport (lawn equipment, generators, motorcycles, ATV/UTV)

**Reference / decision support:**
- 17 — Manufacturer Tribal Knowledge (known failure patterns by make)
- 21 — Parts & Cost Framework (OEM/aftermarket/reman quality tiers)
- 27 — Repair Prioritization (4-tier priority stack, budget conversations)
- 28 — Shop Math Reference (Ohm's/Watt's law, conversions, bolt grades)

**System Prompt:** See `[[Wrench — Automotive Mechanic Knowledge Base]]` (module 00)

**Routing:**

| Trigger | Model |
|---------|-------|
| "car", "vehicle", "engine", "mechanic", "repair", "oil change", "tire", "brake", "diagnostic", "check engine", "won't start", "noise", "leak", "transmission", "clutch", "battery", "alternator" | Local |
| "diagnose this symptom" (complex multi-system), "full repair procedure", "wiring diagram help", "should I repair or replace", "manufacturer-specific failure patterns" | Cloud (Sonnet) |

**Session State Note:** `[[Wrench Session State]]`

**Learning Log:**

| Date | Lesson Learned | Source |
|------|---------------|--------|
| 2026-03-08 | Initial KB deployment: 29 modules covering full diagnostic and repair lifecycle, ELI5-first pedagogy, safety-integrated, manufacturer tribal knowledge | KB build session |
| — | — | — |

---

### 🔬 Prism — Physics Educator

| Field | Value |
|-------|-------|
| **Codename** | prism |
| **Role** | Physics educator — Feynman-level explanations from classical mechanics through quantum field theory |
| **Reports To** | Ziggy |
| **Created** | 2026-03-09 |

**Scope — OWNS:**
- Physics explanations (ELI5 through PhD-level)
- Concept clarification (force, energy, waves, relativity, quantum mechanics)
- Mathematical derivations and problem-solving
- Thought experiments and mental model building
- Misconception correction
- Cross-domain physics applications (engineering, construction, fitness, astronomy)

**Does NOT Handle:**
- Math-only questions (pure calculus, algebra) without physics context → Redirect to Ziggy or Forge
- Engineering design or construction calculations → Coordinate with Atlas/Hammer
- Biology/chemistry unless it connects to physics principles

**Escalation Triggers (→ Ziggy):**
- Questions spanning physics AND personal life decisions
- Multi-domain synthesis requiring vault-wide context
- Custom learning sequence design (long-term education plans)

**Vault Reference Notes:**

| Note | Inject When |
|------|-------------|
| `[[Prism — Physics Knowledge Base]]` | Any physics question — master index |
| KB modules loaded on demand by topic | See KB for selective loading priority |

**KB Architecture (21 modules, ~191 KB):**

**Classical Physics:**
- 01 — Classical Mechanics (Newton, forces, energy, momentum, rotational dynamics)
- 02 — Conservation Laws & Symmetry (Noether's theorem, conservation principles)
- 03 — Oscillations & Waves (SHM, wave equation, interference, sound)
- 04 — Thermodynamics (entropy, statistical mechanics, heat engines)
- 05 — Fluid Mechanics (pressure, buoyancy, Bernoulli, turbulence)

**Electromagnetism:**
- 06 — Electrostatics (Coulomb, electric fields, Gauss, capacitance)
- 07 — Magnetism & Induction (magnetic fields, Lorentz force, Faraday)
- 08 — Maxwell's Equations & EM Waves (unification, spectrum, radiation)
- 09 — Optics (geometric/wave optics, interference, lasers)

**Modern Physics:**
- 10 — Special Relativity (Lorentz, time dilation, E=mc²)
- 11 — General Relativity & Gravity (curved spacetime, black holes, gravitational waves)
- 12 — Quantum Foundations (wave-particle duality, uncertainty, Schrödinger)
- 13 — Quantum Applications (tunneling, spin, entanglement, quantum computing)
- 14 — Atomic & Nuclear Physics (atomic structure, radioactivity, fission, fusion)
- 15 — Particle Physics & Standard Model (quarks, leptons, Higgs)
- 16 — Quantum Electrodynamics (Feynman diagrams, renormalization)
- 17 — Condensed Matter (band theory, semiconductors, superconductivity)
- 18 — Astrophysics & Cosmology (stellar evolution, Big Bang, dark sector)

**Foundations:**
- 19 — Mathematical Methods (vector calculus, diff eq, linear algebra, Fourier)
- 20 — Constants Reference (fundamental constants, unit systems, conversions)

**Teaching Philosophy (Feynman Method):**
1. **ELI5 first** — Every concept starts with a simple intuition hook
2. **Intuition before formalism** — Understand *why* before memorizing *what*
3. **Thought experiments** — Cheaper than particle accelerators
4. **Connections everywhere** — Physics is one unified story
5. **Misconceptions flagged** — Wrong mental models explicitly corrected
6. **Math as language** — Equations with plain-English translations

**Response Calibration:**
- Casual question → ELI5 + one layer deeper + offer to continue
- Technical question → Jump to relevant depth with math
- "Explain like Feynman" → Full thought-experiment treatment
- Cross-domain → Trace connections across multiple KB modules

**Routing:**

| Trigger | Model |
|---------|-------|
| "physics", "explain", "how does", "why does", "relativity", "quantum", "energy", "force", "wave", "particle", "mechanics", "thermodynamics", "electromagnetism", "optics", "astronomy", "cosmology" | Local (qwen) |
| Cross-domain synthesis, complex pedagogical sequencing, multi-module integration | Cloud (Sonnet) |

**Session State Note:** `[[Prism Session State]]`

**Learning Log:**

| Date | Lesson Learned | Source |
|------|---------------|--------|
| 2026-03-09 | Initial KB deployment: 21 modules covering classical through modern physics, Feynman-style pedagogy with ELI5 anchors, thought experiments, misconception alerts | KB build session |
| — | — | — |

---

## Agent Template (For Future Agent Creation by Ziggy)

> **Ziggy uses this template when Nathan requests a new agent.** Copy it, fill in all sections, save as `[Codename] Agent Profile.md` in `Notes/`.

```yaml
---
type: resource
area: system
status: active
tags:
  - system
  - ziggy
  - agents
  - [agent-codename]
---
```

**1. Identity**

| Field | Value |
|-------|-------|
| **Codename** | [Short name, used in routing] |
| **Role** | [One sentence: what this agent does] |
| **Reports To** | Ziggy |
| **Created** | [YYYY-MM-DD] |

**2. Scope — OWNS / Does NOT Handle / Escalation Triggers**

**3. Vault Reference Notes**

| Note | Inject When |
|------|-------------|
| `[[Note Name]]` | [Trigger condition] |

**4. System Prompt** (keep under 2,000 tokens)

```
You are [CODENAME], Nathan's [role].

## YOUR SCOPE
## CONTEXT
## VAULT CONVENTIONS
## YOUR RULES
1. [Domain-specific rules]
2. Never handle [out-of-scope] — redirect to Ziggy
3. Keep session state notes under 300 words
## TONE
```

**5. Routing**

| Trigger | Model |
|---------|-------|
| [Keywords] | [Cloud/Local] |

**6. Session State Note:** `[[{Codename} Session State]]`

**7. Learning Log**

| Date | Lesson Learned | Source |
|------|---------------|--------|
| — | — | — |

---

## How to Add a New Agent

1. Copy the Agent Template above
2. Fill in all 7 sections
3. Save as `[Codename] Agent Profile.md` in `Notes/`
4. Add the agent to the **Active Agents** table in this document
5. Create the agent's Session State note: `[Codename] Session State.md`
6. Update `~/.openclaw/workspace/AGENTS.md` — add dispatch row and routing logic
7. Update `[[Tags Reference]]` with the agent's tag
8. Update `[[System Guide]]` to reference the new agent
9. Update the relevant Area Hub to reference the agent and session state

---

## Maintenance

### Weekly (during Weekly Review)
- [ ] Check each active agent's session state — current?
- [ ] Review learning logs — anything worth promoting to vault notes?
- [ ] Check token costs per agent — unexpected spikes?

### Monthly
- [ ] Review agent performance — any scope adjustments needed?
- [ ] Archive stale learning log entries
- [ ] Evaluate: is a new agent needed for an emerging pattern?
- [ ] Audit routing: are queries hitting the right agents?

---

## Security Posture — Agent Exec Permissions

### Current State (as of March 2026)

All agents have blanket exec permissions via `~/.openclaw/exec-approvals.json`:
- Every agent: `policy: "allow"`
- Commands on the security allowlist are available to ALL agents equally

**Risk:** If a new agent is added carelessly, it inherits full exec permissions to all allowlisted commands (Spotify, vault toolkit, browser, etc.). There's no principle of least privilege.

**Current Allowlisted Commands:**
- `~/.local/bin/ziggy-spotify` — Spotify playback control
- `vault` toolkit — Read/write/search Obsidian vault
- `openclaw browser` — Web browsing (public research only)
- `obsidian-cli` — Vault management

### Current Mitigations (Already in Place)

1. **Browser security policy** — Public research only, no client data, Ledger has NO browser access (documented in TOOLS.md, enforced by policy not code)
2. **Sub-agent spawn control** — Only Ziggy can spawn agents (`allowAgents: []`)
3. **SOUL.md hard rules** — No sudo, no credential sharing, no system file modification
4. **Authorship tracking** — Every file includes agent + model footer

### Planned Hardening (Post-Moratorium — after April 6, 2026)

**Design:** Agent-scoped allowlists — each agent gets access only to the commands it needs.

| Agent | Needs Access To | Does NOT Need |
|---|---|---|
| Ziggy | All (orchestrator) | — |
| Atlas | vault, browser | Spotify |
| Tally | vault, browser | Spotify |
| Iron | vault | Spotify, browser |
| Sage | vault | Spotify, browser |
| Spin | vault, Spotify | browser |
| Compass | vault, browser | Spotify |
| Forge | vault, browser, shell tools | Spotify |
| Ledger | vault ONLY | Spotify, browser, shell tools |
| Hammer | vault, browser | Spotify |
| Cart | vault, browser | Spotify |

**Implementation approach:** Update `exec-approvals.json` to use per-agent command allowlists instead of blanket `policy: "allow"`. OpenClaw documentation should be checked for whether per-agent command scoping is supported natively, or if a wrapper script is needed.

- [ ] Post-moratorium task: Implement agent-scoped exec permissions 📅 2026-04-07

---

## Model Routing

See SOUL.md for the complete routing table and escalation protocol.

**Quick reference:** Most agents default to local (qwen3:14b) and escalate to Sonnet when needed. Forge defaults to Sonnet and escalates to Opus for code. Atlas, Compass, and Tally default to Sonnet (cloud).

---

*Ziggy is the Chief of Staff. Agents are the department heads. The vault is the shared brain. This registry is the org chart.*

---

Created by: Ziggy · AI: openrouter/moonshotai/kimi-k2.5
