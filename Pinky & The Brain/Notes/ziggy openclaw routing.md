---
type: system
area: system
status: active
tags:
  - system
  - ziggy
  - openclaw
  - routing
  - optimization
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Ziggy Hub|🤖 Ziggy]]

---

# OpenClaw Model Routing & Escalation Guide

*Last updated: 2026-03-04*

---

## Architecture Overview

Ziggy runs on **Haiku 4.5** as the default model (cheap, fast, handles 85-90% of queries). When a task exceeds Haiku's capabilities, Ziggy escalates by spawning a **sub-agent** on a more powerful model. The sub-agent runs in isolation, completes the task, and announces the result back to the conversation.

This is native OpenClaw functionality — no custom middleware needed.

```
Nathan sends message via Telegram
        ↓
  Haiku-Ziggy receives it (~$0.007/msg)
        ↓
  ┌─────────────────────────────────────────────┐
  │ Can I handle this directly?                 │
  │                                             │
  │ YES (85-90% of messages)                    │
  │   → Respond directly on Haiku              │
  │                                             │
  │ NO — needs more power                       │
  │   → Classify: Sonnet or Opus?              │
  │   → Spawn sub-agent with model override    │
  │   → Sub-agent completes task               │
  │   → Result announces back to conversation  │
  └─────────────────────────────────────────────┘
```

---

## The Three-Tier Model

### Tier 1: Haiku 4.5 (Default — handles directly)

**Cost:** $1/$5 per MTok → ~$0.007/message
**Use for:** Everything that doesn't explicitly need escalation.

Examples:
- "What workout is today?" → rotation math, done
- "Add eggs to the grocery list" → simple vault edit
- "What's my protein target?" → KB lookup
- "How's the weather?" → quick answer
- Casual conversation, brainstorming, simple questions
- "Explain [construction concept]" → general knowledge
- Quick math, unit conversions, schedules
- Habit check-ins, water/sleep logging
- Reading simple vault notes back to Nathan
- Simple note creation with standard frontmatter

### Tier 2: Sonnet 4.5 (Sub-agent escalation)

**Cost:** $3/$15 per MTok → ~$0.021/message
**Use for:** Tasks that need reliable reasoning, synthesis, or structured output quality beyond Haiku.

Escalation triggers — spawn sub-agent with Sonnet when Nathan asks for:
- **Vault note creation with complex frontmatter** — new work projects, financial reviews, meeting notes with cross-references
- **Weekly/monthly reviews** — multi-section analysis across fitness, finances, work, habits
- **Construction advisory** — strategic thinking about clients, AHJs, risk, project phasing
- **Financial analysis** — budget reviews, spending pattern analysis, account reconciliation
- **Fitness analysis** — mesocycle assessments, progression recommendations, trend analysis
- **Multi-step reasoning** — "Help me think about...", planning, strategy, decision frameworks
- **Web research synthesis** — travel planning, product comparisons, vendor research
- **Vault system extensions** — new templates, new Dataview queries, schema modifications
- **Long-form writing** — drafts, proposals, reports (non-code)
- **Email bridge architecture** — Smartsheet integration logic, parser design

### Tier 3: Opus 4.6 (Sub-agent escalation — premium)

**Cost:** $5/$25 per MTok → ~$0.031/message
**Use for:** Tasks where getting it right the first time saves more than the premium costs, or where output quality has real consequences.

Escalation triggers — spawn sub-agent with Opus when Nathan asks for:
- **Code generation** — writing hooks, scripts, automations, app builds, TypeScript handlers
- **Complex multi-system analysis** — cross-project portfolio analysis, multi-client risk assessment
- **Professional deliverables** — client-facing documents, proposals, presentations content
- **Architectural decisions** — vault redesigns, system integration planning, data model changes
- **Debugging** — troubleshooting OpenClaw config, hook failures, integration issues
- **Compound tasks** — "analyze my spending across all accounts, identify patterns, and propose a revised budget"
- **Long-context reasoning** — tasks requiring sustained coherence across large amounts of information

**Why Opus earns its premium:** Opus produces better output in fewer iterations. If Sonnet takes 3 back-and-forths to get code right, Opus typically nails it in 1. Three Sonnet messages ($0.063) costs more than one Opus message ($0.031). Opus also uses fewer tokens per task — up to 65% fewer on complex coding tasks — which further closes the price gap.

---

## Decision Heuristic

```
Message received → Haiku processes

Step 1: Is this a simple lookup, casual chat, or single-fact answer?
  YES → Handle directly on Haiku. Done.
  NO  → Continue.

Step 2: Does it involve code, debugging, architecture, or professional deliverables?
  YES → Spawn sub-agent on OPUS.
  NO  → Continue.

Step 3: Does it need multi-step reasoning, analysis, complex vault work, or synthesis?
  YES → Spawn sub-agent on SONNET.
  NO  → Handle directly on Haiku. Done.
```

When in doubt, start with Haiku. If the response quality is clearly insufficient, Nathan can say "escalate this" or "use Opus for this" and Ziggy spawns a sub-agent to redo it.

---

## OpenClaw Configuration

### 1. Primary Model (already set)

In `~/.openclaw/openclaw.json`, the primary model is Haiku:
```json
{
  "models": {
    "primary": "anthropic/claude-haiku-4-5-20251001"
  }
}
```

### 2. Default Sub-Agent Model

Set the default sub-agent model to Groq (free tier) so even accidental spawns cost nothing:
```json
{
  "agents": {
    "defaults": {
      "subagents": {
        "model": "groq/llama-3.3-70b-versatile",
        "runTimeoutSeconds": 120
      }
    }
  }
}
```

### 3. Model Strings for Escalation

| Tier | Model String | Cost (in/out per MTok) |
|------|-------------|----------------------|
| Default | `anthropic/claude-haiku-4-5-20251001` | $1 / $5 |
| Tier 2 | `anthropic/claude-sonnet-4-5-20250929` | $3 / $15 |
| Tier 3 | `anthropic/claude-opus-4-6` | $5 / $25 |
| Sub-agent default | `groq/llama-3.3-70b-versatile` | Free |
| Local fallback | `qwen3:14b` (via Ollama/vLLM) | Free |

### 4. Fallback Chain

If the primary provider fails, OpenClaw falls back through:
```
Haiku 4.5 → Sonnet 4.6 → Groq Llama 70B → Gemini → Kimi → qwen3:14b (local)
```

This is for provider outages only — not for quality-based routing.

---

## Sub-Agent Spawn Commands

### From Ziggy's System Prompt (automatic)

Ziggy uses the `sessions_spawn` tool internally when escalating:

```
# Sonnet escalation
sessions_spawn(
  task: "Create a weekly review note covering fitness, finances, and work projects",
  model: "anthropic/claude-sonnet-4-5-20250929",
  label: "weekly-review"
)

# Opus escalation
sessions_spawn(
  task: "Write a TypeScript hook that logs message complexity scores",
  model: "anthropic/claude-opus-4-6",
  label: "code-gen"
)
```

### Manual Override (Nathan via Telegram)

Nathan can also manually spawn sub-agents:
```
/subagents spawn main "Write the vault-session-save hook in TypeScript" --model anthropic/claude-opus-4-6
```

Or tell Ziggy directly:
- "Use Opus for this"
- "Escalate to Sonnet"
- "This needs the big model"

---

## Escalation Protocol for AGENTS.md / System Prompt

Add this section to `ziggy_openclaw_full.md`:

```markdown
## MODEL ESCALATION

You run on Haiku by default. Most tasks you handle directly. For tasks that need
more capability, you spawn a sub-agent on a stronger model.

### When to escalate to Sonnet
Use sessions_spawn with model "anthropic/claude-sonnet-4-5-20250929" for:
- Complex vault note creation (work projects, financial reviews, meeting notes)
- Weekly/monthly reviews and multi-section analysis
- Construction strategy and advisory
- Financial or fitness trend analysis
- Multi-step reasoning and planning
- Web research synthesis
- Vault system extensions (templates, schemas, Dataview)
- Long-form writing (non-code)

### When to escalate to Opus
Use sessions_spawn with model "anthropic/claude-opus-4-6" for:
- Code generation (hooks, scripts, automations, apps)
- Debugging and troubleshooting
- Professional deliverables (client-facing quality)
- Architectural decisions and system design
- Compound multi-part tasks
- Anything where getting it right on the first try matters more than speed

### When to stay on Haiku
- Simple lookups (workout schedule, nutrition targets, habit status)
- Casual conversation and brainstorming
- Quick math, conversions, schedules
- Reading notes back, simple edits
- Grocery list updates, basic note creation
- General knowledge questions

### Manual override
If Nathan says "escalate this", "use Opus", "use Sonnet", or "this needs more power",
spawn a sub-agent on the requested model. If Nathan says "redo this on Opus",
re-run the previous task as a sub-agent on Opus.

### Cost awareness
Always choose the cheapest model that can do the job well. When unsure, try Haiku first.
A failed Haiku attempt + Sonnet retry still costs less than going straight to Opus for
everything.
```

---

## Agent-Specific Model Mapping

For the 8-agent dispatch system, here's which model each persona should use:

| Agent | Persona | Default Tier | Escalation Tier | Rationale |
|-------|---------|-------------|----------------|-----------|
| **Ziggy** | Dispatch / Chief of Staff | Haiku | Sonnet | Classification + simple tasks |
| **Atlas** | Construction PM | Haiku | Sonnet | KB-driven advisory, vault work |
| **Ledger** | Finance | Haiku | Sonnet | KB lookups, monthly reviews need Sonnet |
| **Hammer** | Builder / GC | Haiku | Sonnet | KB-driven, trade knowledge |
| **Iron** | Fitness | Haiku | Sonnet | Simple lookups, analysis needs Sonnet |
| **Sage** | Nutrition | Haiku | — | Recipe/grocery queries, rarely complex |
| **Spin** | Music / Casual | Haiku | — | Low-stakes, conversational |
| **Compass** | Travel | Haiku | Sonnet | Needs web search + synthesis |
| **Forge** | Engineering | Haiku | **Opus** | Code generation always needs Opus |

Note: "Default Tier" is what the agent handles directly. "Escalation Tier" is what gets spawned as a sub-agent when the task exceeds the default. Forge should almost always escalate to Opus — code quality is its entire purpose.

---

## Cost Projections

### Assumptions
- 30 messages/day average
- 900 messages/month

### Conservative Estimate (current routing)

| Tier | % of Messages | Messages/mo | Cost/msg | Monthly |
|------|--------------|-------------|----------|---------|
| Haiku (direct) | 85% | 765 | $0.007 | $5.36 |
| Sonnet (sub-agent) | 10% | 90 | $0.021 | $1.89 |
| Opus (sub-agent) | 5% | 45 | $0.031 | $1.40 |
| **Total** | | **900** | | **$8.65/mo** |

### Aggressive Local Routing (future optimization)

If local models handle simple queries (Iron, Sage, Spin routed to qwen3:14b):

| Tier | % of Messages | Messages/mo | Cost/msg | Monthly |
|------|--------------|-------------|----------|---------|
| Local (qwen3:14b) | 40% | 360 | $0.00 | $0.00 |
| Haiku (direct) | 45% | 405 | $0.007 | $2.84 |
| Sonnet (sub-agent) | 10% | 90 | $0.021 | $1.89 |
| Opus (sub-agent) | 5% | 45 | $0.031 | $1.40 |
| **Total** | | **900** | | **$6.13/mo** |

### Comparison

| Configuration | Monthly Cost | vs Target ($60) |
|--------------|-------------|----------------|
| Before (100% Sonnet) | ~$120 | 2x over |
| After Haiku switch only | ~$10-15 | Under budget |
| With sub-agent routing | ~$8.65 | 86% under |
| With local routing added | ~$6.13 | 90% under |

---

## System Prompt Files

Two system prompt files remain:
- **ziggy_openclaw_full.md** (~350 lines + escalation protocol) — Full vault knowledge, construction PM expertise, all frontmatter schemas, model escalation rules
- **ziggy_openclaw_lite.md** (~35 lines) — Basic context, workout schedule, task rules (used by local model fallback)

---

## Monitoring & Tuning

### Message Hook for Analytics (Optional)

A `message:received` hook can log every inbound message for cost analysis. This doesn't route — it observes:

```
~/.openclaw/hooks/message-cost-logger/
├── HOOK.md     # events: ["message:received", "message:sent"]
└── handler.ts  # Logs message length, timestamp, channel to a CSV
```

Use this data to validate routing assumptions (is 85% really going to Haiku? Are Opus escalations producing better results?).

### Manual Tuning Signals

- If Nathan frequently says "escalate this" after a Haiku response → widen Sonnet triggers
- If Sonnet sub-agents are producing the same quality as Haiku → tighten Sonnet triggers
- If Opus is being spawned for simple code snippets → add a complexity threshold
- Check `/subagents list` periodically to see spawn frequency and costs

---

## Quick Reference Card

| Nathan Says | Model | How |
|------------|-------|-----|
| "What workout today?" | Haiku | Direct |
| "Add milk to grocery" | Haiku | Direct |
| "What's 425°F in Celsius?" | Haiku | Direct |
| "Help me think about the Starbucks timeline" | Sonnet | Sub-agent |
| "Do my weekly review" | Sonnet | Sub-agent |
| "Write a hook to auto-tag messages" | Opus | Sub-agent |
| "Create a monthly finance review" | Sonnet | Sub-agent |
| "Debug why my vault-session-save isn't firing" | Opus | Sub-agent |
| "Draft a client update email" | Sonnet | Sub-agent |
| "Build me an expense tracking app" | Opus | Sub-agent |
| "Use Opus for this" | Opus | Manual override |
| "Redo this on Sonnet" | Sonnet | Manual override |
