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

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# OpenClaw Model Routing Guide for Ziggy

## Setup

Two system prompt files:
- **ziggy_openclaw_full.md** (~350 lines) — Full vault knowledge, construction PM expertise, all frontmatter schemas
- **ziggy_openclaw_lite.md** (~35 lines) — Basic context, workout schedule, task rules

## Recommended Routing

### Route to Cloud API (Sonnet) + Full Prompt
Use for anything that touches vault structure, creates notes, or requires deep reasoning:

- Creating or editing vault notes (any type)
- Work strategy and client advisory
- Weekly/monthly reviews
- Fitness analysis and mesocycle assessments
- Financial reviews and budget analysis
- Extending the vault (new templates, new systems)
- Complex multi-step tasks
- "Help me think about..." questions
- Anything involving frontmatter schemas
- Construction lifecycle advisory (reference the KB)

**Estimated tokens per call:** ~4,000 input (system prompt) + query + response
**Estimated cost:** ~$0.01-0.03 per call at Sonnet pricing

### Route to Local Model (Ollama) + Lite Prompt
Use for quick, self-contained queries that don't need vault conventions:

- "What workout is today?" (just needs the rotation math)
- Quick math or calculations
- General knowledge questions
- "What should I eat for dinner?" (general advice, not creating a recipe note)
- Casual conversation
- Simple reminders or brainstorming
- "Explain [construction concept]" (general, not vault-specific)
- Summarizing text you paste in

**Estimated tokens per call:** ~500 input (system prompt) + query + response
**Estimated cost:** $0 (local)

### Decision Heuristic
```
Does it create, edit, or reference a vault note?
  YES → Cloud + Full Prompt
  NO  → Does it need deep reasoning or construction expertise?
    YES → Cloud + Full Prompt
    NO  → Local + Lite Prompt
```

## Recommended Local Models (Mac Mini M4, 16GB RAM)

| Model | Size | Good For | Speed |
|-------|------|----------|-------|
| Llama 3.1 8B | 4.7 GB | General Q&A, quick math, casual | Fast |
| Mistral 7B | 4.1 GB | Structured outputs, following instructions | Fast |
| Qwen 2.5 7B | 4.4 GB | Reasoning, code, structured data | Fast |
| Phi-3 mini | 2.3 GB | Ultra-light, simple queries | Very fast |

For the lite prompt, any of these will perform well. The prompt is small enough to leave most of the context window for your query.

## Monthly Cost Estimate

Assuming 80% of queries route local, 20% to cloud:
- ~30 queries/day × 30 days = 900/month
- 720 local ($0) + 180 cloud (~$0.02 avg) = ~$3.60/month
- Well under your $20/month budget

Even at 50/50 split: 450 cloud × $0.02 = ~$9/month

## OpenClaw Configuration Notes

1. Set the full prompt as the default system prompt for your Ziggy agent
2. Create a second agent profile called "Ziggy Lite" with the lite prompt for local routing
3. Or if OpenClaw supports model routing rules, configure:
   - Keywords triggering cloud: "create note", "vault", "frontmatter", "project note", "meeting notes", "weekly review", "save this", "draft", "recipe note", "book note", "habit note", "assessment"
   - Default: local model
