---
type: resource
area: work
status: active
tags:
  - work
  - resource
  - knowledge-base
  - construction
  - lessons-learned
  - workflow
  - construction-kb
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Work Hub|Work Hub]] · [[Construction PM Knowledge Base|Construction KB]]

---

# Lessons Learned Capture Workflow

> Operational workflow for [[Construction PM Knowledge Base]]
> Writes to: [[ATLAS_MEMORY]]
> Related: [[09 - Post-Construction & Warranty]], [[07 - Construction Execution]], [[Risk Management Framework]]

---

## Purpose

The [[ATLAS_MEMORY]] file has the structure for storing lessons learned, AHJ intelligence, vendor performance notes, and decision patterns — but without a defined capture workflow, it stays empty. This note defines when Atlas should trigger a lesson capture, what format to use, where to write it, and how to surface past lessons when they're relevant to a current situation. The goal: every significant project event produces a durable learning that Atlas can use to improve advisory on future projects.

---

## Capture Triggers

Atlas should prompt Nathan to capture a lesson whenever one of these events occurs. The trigger is the event; the capture happens in the same session or within 24 hours while the context is fresh.

### Mandatory Triggers (Always Capture)

| Trigger Event | What to Capture | Write To (ATLAS_MEMORY Section) |
|--------------|----------------|-------------------------------|
| **Permit approved or rejected** | Jurisdiction, timeline, requirements, reviewer quirks, what worked/didn't | AHJ Intelligence Database |
| **Inspection failed** | What failed, why, what the inspector required, how it was corrected, time impact | Lessons Learned Log → relevant phase |
| **Subcontractor replaced or terminated** | Warning signs, timeline from flag to replacement, cost impact, replacement sub performance | Vendor & GC Performance Notes + Lessons Learned Log |
| **Change order exceeding $25K approved** | Root cause (design error, field condition, owner change), pricing negotiation outcome, schedule impact | Lessons Learned Log → Phase 7 + Common Issues & Solutions |
| **Schedule recovery plan executed** | What caused the delay, what recovery technique was used, did it work, cost and time outcome | Lessons Learned Log → Phase 7 |
| **Project reaches substantial completion** | Overall schedule performance, budget performance, key issues encountered, GC/sub performance summary | Lessons Learned Log → Phase 8-10 + Vendor & GC Performance Notes |
| **11-month warranty walkthrough completed** | Deficiency patterns, GC responsiveness, items requiring escalation | Lessons Learned Log → Phase 8-10 |
| **Client provides positive or negative feedback** | What they appreciated, what they were dissatisfied with, what to do differently | Inferred PM Patterns |

### Recommended Triggers (Capture When Significant)

| Trigger Event | What to Capture | Write To |
|--------------|----------------|----------|
| **RFI resolved with schedule or cost impact** | The question, the answer, the impact, whether the issue was preventable with better CDs | Lessons Learned Log → Phase 7 |
| **Design coordination error discovered in field** | What the conflict was, which disciplines were involved, how it was resolved | Common Issues & Solutions → Design Coordination Gaps |
| **New GC, architect, or sub engaged for the first time** | Initial impressions, communication style, capability assessment | Vendor & GC Performance Notes (initial entry) |
| **AHJ process differs from expectation** | What you expected, what actually happened, what to do differently next time in this jurisdiction | AHJ Intelligence Database |
| **TIA billing dispute or reconciliation issue** | What the dispute was, how it was resolved, how to prevent on future projects | Common Issues & Solutions → TIA Budget Reconciliation + Decision Patterns → TIA Billing Strategy |
| **Value engineering decision made** | What was changed, cost savings achieved, any quality or performance trade-offs | Decision Patterns → Risk Mitigation Approaches |
| **Delivery method selection for a new project** | Why the delivery method was chosen, what factors drove the decision | Decision Patterns → Delivery Method Selection |
| **Safety incident or near-miss** | What happened, root cause, corrective action, whether it indicates a GC management issue | Lessons Learned Log → Phase 7 |

### Automatic Triggers (Atlas Self-Initiates)

These are situations where Atlas should proactively prompt Nathan without being asked, based on recognizing a pattern:

| Condition | Atlas Action |
|-----------|-------------|
| A project completes Phase 7 (construction) | Prompt: "This project just hit substantial completion. Let's capture the key lessons — schedule, budget, GC performance, and anything that went differently than expected." |
| Same issue appears on two different projects | Prompt: "This is the second time we've seen [issue]. Let me log a pattern note so we can watch for it proactively on future projects." |
| An AHJ interaction produces new information | Prompt: "The [jurisdiction] inspector just gave us new information about [topic]. Let me update the AHJ Intelligence Database." |
| A sub or GC finishes a project | Prompt: "Now that [GC/sub] has completed their scope on [project], let's update their performance notes while it's fresh." |
| Nathan asks a question that a past lesson would have answered | Prompt: "We ran into something similar on [past project]. Here's what we learned: [lesson]. Let me make sure this is captured in ATLAS_MEMORY if it isn't already." |

---

## Capture Format

All lessons should be captured in a consistent format so they're scannable and searchable. The format varies slightly by destination section.

### Lessons Learned Log Entry

```
**[Client/Project] — Phase [X] — [Brief Issue Title]** ([YYYY-MM-DD])
- **What happened:** [1-2 sentences describing the event]
- **Root cause:** [Why it happened]
- **Impact:** [Schedule: +X days | Cost: +$X | Quality: [description] | None]
- **Resolution:** [What was done to resolve it]
- **Lesson:** [What to do differently on future projects — the actionable takeaway]
- **Applies to:** [Sector / Phase / Trade / All projects]
```

**Example:**
```
**CFA-Nashville — Phase 7 — Kitchen Hood MUA Imbalance** (2026-04-15)
- **What happened:** Building negative pressure after hood exhaust start-up; front doors wouldn't close properly
- **Root cause:** Make-up air unit was balanced before the hood was running at full exhaust; TAB didn't re-balance after hood commissioning
- **Impact:** Schedule: +3 days | Cost: $0 (TAB contractor corrected under original scope)
- **Resolution:** TAB contractor returned, re-balanced MUA with hood at full exhaust, verified building pressure
- **Lesson:** Always require TAB to perform final balance AFTER hood exhaust commissioning, not before. Add this to the commissioning sequence checklist for all restaurant projects.
- **Applies to:** Restaurant sector — all projects with kitchen hoods
```

### AHJ Intelligence Entry

```
### [City/County, State]
**Jurisdiction Type:** [City / County / State]
**Typical Permit Timeline:** [X weeks for plan review; Y days for inspections]
**Key Requirements:**
- [Specific requirements unique to this jurisdiction]

**Quirks / Notes:**
- [Inspector preferences, common rejection reasons, scheduling tips]

**Contact:** [Name, phone, email — if appropriate to store]
**Last Updated:** [YYYY-MM-DD]
**Source Projects:** [Which projects produced this intelligence]
```

### Vendor & GC Performance Entry

```
**[Company Name]** — [Trade/Role]
- **Projects worked:** [List of projects with dates]
- **Performance:** [Rating: Strong / Adequate / Below Expectations / Do Not Reuse]
- **Strengths:** [What they do well]
- **Watch items:** [What to monitor on future projects]
- **Pricing:** [Competitive / Fair / Premium — relative to market]
- **Reliability:** [On-time? Crew commitments honored? Communication responsive?]
- **Last Updated:** [YYYY-MM-DD]
```

### Decision Pattern Entry

```
**[Decision Type] — [Specific Decision]** ([YYYY-MM-DD])
- **Context:** [What project, what circumstances]
- **Options considered:** [What alternatives were evaluated]
- **Decision made:** [What was chosen and why]
- **Outcome:** [How it turned out]
- **Would repeat:** [Yes / No / With modifications]
```

---

## Surfacing Past Lessons

Capturing lessons is only half the value. The other half is surfacing them when they're relevant to a current situation. Atlas should proactively surface past lessons in these contexts:

### During Project Advisory

| Current Situation | Atlas Searches ATLAS_MEMORY For |
|------------------|---------------------------------|
| Starting a new project in a jurisdiction | AHJ Intelligence Database for that jurisdiction |
| Evaluating a GC or sub bid | Vendor & GC Performance Notes for that company |
| Entering a new construction phase | Lessons Learned Log entries for that phase |
| Encountering an issue (design conflict, sub performance, etc.) | Common Issues & Solutions for that issue type |
| Making a delivery method or strategy decision | Decision Patterns for similar past decisions |
| Working on a specific sector (restaurant, grocery, etc.) | Sector-Specific Intelligence for that sector |

### During Session Start

When Nathan starts an Atlas session, Atlas should:

1. Check the active project context in ATLAS_MEMORY
2. If a project is in active construction, surface any open issues/risks/actions
3. If a project is approaching a phase gate, surface relevant lessons from past projects at that gate
4. If a project involves a GC or sub with prior performance notes, mention relevant watch items

### Cross-Project Pattern Recognition

Over time, ATLAS_MEMORY should accumulate enough data for Atlas to recognize patterns:

- "The last three restaurant projects had MUA balancing issues during commissioning — this should be a standard checklist item."
- "GC Smith has been rated 'Below Expectations' on two consecutive projects — consider alternative GCs for the next bid."
- "Permit timelines in [jurisdiction] have increased by 2 weeks over the last year — budget accordingly."

Atlas should surface these patterns proactively when relevant, not wait for Nathan to ask.

---

## Review Cadence

Lessons learned capture should be reinforced by regular review rhythms:

| Review | Frequency | What to Do |
|--------|-----------|-----------|
| **Session-level** | Every Atlas session | Check for capture triggers; surface relevant past lessons |
| **Weekly** | Monday (aligned with daily note review triggers) | Scan open issues/risks/actions in ATLAS_MEMORY; update statuses |
| **Monthly** | 1st of month (aligned with monthly review trigger) | Review Vendor & GC Performance Notes for any updates needed; check AHJ Intelligence for staleness |
| **Per project — at substantial completion** | When project hits SC | Mandatory comprehensive lessons learned capture (see mandatory triggers) |
| **Quarterly** | Every 3 months | Review all Lessons Learned Log entries; identify patterns; update Inferred PM Patterns section |

---

## Integration with Daily Notes

The daily note system already has review triggers for Mondays and the 1st of the month. Atlas's lessons learned review should align with these:

**Monday review prompt (in daily note or Atlas session):**
- Any open ATLAS_MEMORY actions that need status updates?
- Any projects that hit a milestone this week that should trigger a capture?

**1st-of-month review prompt:**
- Review vendor/GC performance notes: any updates from last month's projects?
- AHJ Intelligence: any new jurisdiction data from permits processed last month?
- Pattern check: any issue appearing on 2+ projects that should become a standard checklist item?

---

## ATLAS_MEMORY Maintenance

### Keeping It Useful

| Practice | Why |
|----------|-----|
| **Date every entry** | Lessons have a shelf life. A permitting lesson from 2024 may not apply in 2027 if the AHJ has changed staff or processes. |
| **Tag sector applicability** | A restaurant lesson shouldn't clutter the view when working on a retail TI. Tag entries with sector so Atlas can filter. |
| **Archive stale entries** | If a vendor is no longer active in the market, or an AHJ contact has retired, move to an archive section rather than deleting. |
| **Keep entries concise** | The lesson format above is the target: 5-7 lines per entry. Detailed analysis belongs in the project file, not in ATLAS_MEMORY. |
| **Cross-reference KB notes** | When a lesson relates to content in the Construction PM KB (e.g., a commissioning lesson), link to the relevant note. This creates a two-way connection between the static KB and the dynamic memory. |

### What Doesn't Belong in ATLAS_MEMORY

- Operational project data (that's in Smartsheet)
- Full meeting minutes (those are project-specific documents)
- Personal opinions about people (keep vendor notes professional and factual)
- Speculative lessons ("I think this might be an issue someday" — only capture actual events and their outcomes)

---

## Related

- [[ATLAS_MEMORY]] — The memory file this workflow populates
- [[Atlas Session State]] — Current session context (triggers session-level reviews)
- [[Construction PM Knowledge Base]] — Master reference (lessons feed back into KB improvements)
- [[09 - Post-Construction & Warranty]] — Post-project lessons learned process
- [[07 - Construction Execution]] — Phase where most lessons originate
- [[Risk Management Framework]] — Lessons inform future risk identification
- [[Commissioning & Systems Turnover]] — Commissioning lessons (sector-specific)
- [[Subcontractor Default & Replacement]] — Sub performance lessons
- [[Delay Documentation & Claims]] — Delay event documentation feeds lessons learned

---

*This workflow note itself should be reviewed annually to confirm the triggers and formats are still serving Nathan's needs. If capture is happening but lessons aren't being surfaced, the surfacing logic needs attention. If capture isn't happening, the triggers need to be more prominent or the format needs to be simpler.*
