---
created: 2026-02-22
updated: 2026-02-22
type: log
tags:
  - system
  - models
  - cost-tracking
---

# Model Cost Exception Tracking — PM Agent

## Exception Rule (Active Feb 22 - Mar 2, 2026)

**Approved by:** Nathan  
**Date:** 2026-02-22  
**Expiration:** March 2, 2026 (review scheduled)

### The Rule
During the cost-optimization period (avoiding Claude models to save money), the **PM Agent (@PM)** is explicitly approved for Claude model usage.

### Why
- Construction PM work is high-stakes and client-facing
- Requires deep knowledge base consultation
- Accuracy and depth justify premium model costs
- Risk of errors in PM work exceeds model cost

### What's Allowed
| Agent | Models | Usage |
|-------|--------|-------|
| **PM Agent** (`@PM`, `/agent pm`) | Claude Sonnet 4.5, Claude Opus 4.6 | Construction PM queries only |
| **Main Session (Ziggy)** | Groq 70B, Mistral Large, Kimi K2.5 | Everything else |
| **Sub-agents (non-PM)** | Groq 70B, Mistral Large, Together DeepSeek-V3.2 | Research, coding, analysis |

### What's NOT Allowed
- Using Claude for general chat
- Using Claude for coding tasks (use Kimi/Together)
- Using Claude for research (use Groq/Mistral/Kimi)
- Using Claude for file operations (use local models)

---

## Usage Log

| Date | Agent | Model Used | Task | Est. Cost |
|------|-------|------------|------|-----------|
| | | | | |

---

## Post-Exception Review (Due March 2)

**Questions to Answer:**
1. How much did PM agent cost vs. value delivered?
2. Did we stay within acceptable spend for PM work?
3. Should PM agent continue on Claude or move to cheaper alternative (Kimi/Together)?
4. Are there other high-value agents that justify premium models?
5. What's the new model architecture going forward?

**Decision Options:**
- A) Keep PM on Claude, everything else on free/cheap
- B) Move PM to Kimi/Together (test quality)
- C) Create tiered PM agent (Groq first, escalate to Claude)
- D) Other: ___________

---

*Exception expires: March 2, 2026 at 23:59*  
*Next action: Full model structure review with Nathan*
