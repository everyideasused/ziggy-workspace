---
type: project
area: interests
client: "Nathan"
client_id: "PERSONAL"
status: active
health: green
priority: high
start_date: 2026-04-01
target_date: 2026-05-17
tags:
  - project
  - interests
  - tech
  - ziggy
  - self-hosted
next_action: "Verify Proton Mail plan supports Bridge"
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Interests Hub|Interests Hub]]

---

# Ziggy Email Bridge

## 📋 Overview
> *Build an automated pipeline that receives Smartsheet email reports at ziggy@mouthygeese.com, parses the attachments, and updates Obsidian vault notes — creating a live sync between the team's operational PMO and my personal command center.*

**Objective:** Smartsheet data automatically flows into Obsidian without manual effort. Project phases, health indicators, budget figures, and permit statuses update in the vault within 5 minutes of a Smartsheet report being sent.

**Success Criteria:**
- Proton Mail Bridge running as persistent service on Mac Mini
- Ziggy watcher polling inbox every 5 minutes
- 6 Smartsheet automations sending scheduled reports
- Parsers handling Project Master, Financial, Permit, Issues, Dashboard, and Change Order exports
- Vault notes auto-updating frontmatter (phase, health, budget) from parsed data
- Daily note receives a "Ziggy Auto-Updates" section summarizing what changed
- Full end-to-end test: Smartsheet change → email → parse → vault update in under 10 minutes
- System runs unattended for 7 consecutive days without failure

**Deadline:** May 17, 2026 (7 weeks from start)

**Architecture Reference:** [[Ziggy Email Bridge Architecture]]

---

## 🎯 Milestones

| # | Milestone | Target Date | Status | Depends On |
|---|-----------|------------|--------|------------|
| M1 | Infrastructure ready (Bridge + service scaffold) | 2026-04-06 | ⬜ Not Started | — |
| M2 | Email fetch + attachment download working | 2026-04-13 | ⬜ Not Started | M1 |
| M3 | All parsers tested with real Smartsheet exports | 2026-04-20 | ⬜ Not Started | M2 |
| M4 | Vault updater writing to notes correctly | 2026-04-27 | ⬜ Not Started | M3 |
| M5 | Smartsheet automations live and sending | 2026-05-03 | ⬜ Not Started | M4 |
| M6 | AI interpretation layer operational | 2026-05-10 | ⬜ Not Started | M4 |
| M7 | Hardened, monitored, 7-day unattended run complete | 2026-05-17 | ⬜ Not Started | M5, M6 |

---

## 📅 Phase Plan

### Phase 1: Foundation — Apr 1–6
> *Get the plumbing working. Bridge installed, watcher service running, emails being received.*

- [ ] Verify Proton Mail plan supports Bridge (paid plan required)
- [ ] Download and install Proton Mail Bridge on Mac Mini
- [ ] Log in with ziggy@mouthygeese.com
- [ ] Note the bridge password (store in ~/ziggy/.env)
- [ ] Test IMAP connection manually (Python REPL or telnet to 127.0.0.1:1143)
- [ ] Create ~/ziggy/ directory structure:
  ```
  ~/ziggy/
  ├── .env
  ├── ziggy_watcher.py
  ├── ziggy_parsers.py
  ├── ziggy_vault_updater.py
  ├── attachments/
  ├── processed/
  ├── logs/
  └── queue/
  ```
- [ ] Write ziggy_watcher.py (email polling loop only — no parsing yet)
- [ ] Send test email from personal address to ziggy@mouthygeese.com
- [ ] Confirm watcher detects and logs the email
- [ ] Create launchd plist at ~/Library/LaunchAgents/com.ziggy.watcher.plist
- [ ] Load service, verify it starts on login
- [ ] Verify it survives Mac Mini restart

**Phase 1 deliverable:** Watcher service running persistently, successfully detecting new emails and downloading attachments to ~/ziggy/attachments/.

**Estimated time:** 4 hours

---

### Phase 2: Parsing — Apr 7–20
> *Build the brains. Each Smartsheet export type gets its own parser.*

**Week 1 (Apr 7–13): Core parsers**
- [ ] Export a real Project Master Tracker from Smartsheet as Excel
- [ ] Export a real Financial Tracker from Smartsheet as Excel
- [ ] Export a real Permit Tracker from Smartsheet as Excel
- [ ] Write parse_project_master() — test with real export
- [ ] Write parse_financial() — test with real export
- [ ] Write parse_permits() — test with real export
- [ ] Write route_attachment() — verify routing by filename and subject
- [ ] Write unit tests for each parser (at least 3 test cases each)

**Week 2 (Apr 14–20): Remaining parsers + edge cases**
- [ ] Export Issues Log, Change Order Log, Dashboard Metrics from Smartsheet
- [ ] Write parse_issues()
- [ ] Write parse_change_orders()
- [ ] Write parse_dashboard()
- [ ] Handle edge cases: empty sheets, formula error values (#N/A, #REF), missing columns
- [ ] Handle both .xlsx and .csv attachment types
- [ ] Test with intentionally malformed files (missing headers, extra columns)
- [ ] Wire parsers into watcher — end-to-end: email → download → parse → structured JSON output

**Phase 2 deliverable:** All 6 parsers working and tested. Emails arrive, attachments download, data extracts cleanly into structured Python dicts.

**Estimated time:** 8 hours (two 4-hour sessions)

---

### Phase 3: Vault Integration — Apr 21–May 3
> *Connect the parsers to the actual Obsidian files. This is where it gets real.*

**Week 1 (Apr 21–27): Vault updater core**
- [ ] Write read_note() and write_note() (frontmatter + body split/merge)
- [ ] Write find_note_by_project_id() — search vault for matching notes
- [ ] Write find_note_by_client_id()
- [ ] Write update_project_phase() — modify frontmatter `phase` field
- [ ] Write update_project_health() — modify frontmatter `health` field
- [ ] Write update_project_budget() — modify frontmatter `budget` field
- [ ] Write append_to_note_section() — add content under a markdown header
- [ ] Write create_update_log_entry() — append to daily note
- [ ] Test each function individually against real vault notes
- [ ] Test the full chain: email → parse → vault update → verify file changed
- [ ] Verify Syncthing propagates the changes to MacBook and iPhone

**Week 2 (Apr 28–May 3): Smartsheet automations**
- [ ] Set up Smartsheet automation: Project Master → weekly Friday email
- [ ] Set up Smartsheet automation: Financial Tracker → monthly 1st email
- [ ] Set up Smartsheet automation: Permit Tracker → weekly Monday email
- [ ] Set up Smartsheet automation: Dashboard Metrics → weekly Friday email
- [ ] Set up Smartsheet automation: Issues Log → daily 6pm email
- [ ] Set up Smartsheet automation: Change Order Log → on status change email
- [ ] Verify all 6 automations send correctly to ziggy@mouthygeese.com
- [ ] Run full integration test: wait for a real scheduled email, verify vault updates
- [ ] Fix any subject line routing issues
- [ ] Fix any attachment format issues

**Phase 3 deliverable:** Real Smartsheet data flowing into the vault on schedule. Project notes auto-updating. Daily note showing what changed.

**Estimated time:** 8 hours (two 4-hour sessions)

---

### Phase 4: AI Layer — May 4–10
> *Optional but valuable. Add intelligence to the data flow.*

- [ ] Install/verify Ollama is running on Mac Mini with a suitable model (llama3.2 or mistral)
- [ ] Write ziggy_ai.py with call_ollama() helper function
- [ ] Implement health assessment prompt: given project data, should health change?
- [ ] Implement anomaly detection: flag budget variances >10%
- [ ] Implement permit delay alerting: flag permits with >30 days in review
- [ ] Create the review queue system:
  - AI suggestions write to ~/ziggy/queue/ as JSON files
  - Each file contains: what Ziggy recommends, the data behind it, and a "confirm/reject" field
  - Build a simple script to review and apply queued changes
- [ ] Test AI assessments against known project scenarios
- [ ] Optional: Add weekly summary generation via Claude API (Sonnet)
  - Summarize all changes across the portfolio for the week
  - Write summary to a "Weekly Ziggy Briefing" note in the vault

**Phase 4 deliverable:** AI layer providing health change suggestions and anomaly alerts. Review queue operational for human-in-the-loop decisions.

**Estimated time:** 3 hours

---

### Phase 5: Hardening — May 11–17
> *Make it bulletproof. This is what separates a hack from a system.*

- [ ] Add retry logic: if IMAP connection fails, retry 3x with backoff
- [ ] Add error handling: malformed attachments don't crash the service
- [ ] Add log rotation (keep 30 days of logs, auto-delete older)
- [ ] Add monitoring: if watcher hasn't processed an email in 48 hours, alert via email
- [ ] Add self-healing: if launchd restarts the service, it picks up where it left off
- [ ] Add a "heartbeat" log entry every hour so you can verify it's alive
- [ ] Test failure scenarios:
  - [ ] Proton Bridge not running → watcher retries gracefully
  - [ ] Malformed Excel file → parser logs error, skips file, continues
  - [ ] Vault note doesn't exist for a project ID → logs warning, doesn't crash
  - [ ] Disk full → graceful error before corruption
  - [ ] Mac Mini reboots → service auto-starts, Bridge auto-starts, resumes
- [ ] Run unattended for 7 consecutive days
- [ ] Review logs daily during the 7-day test
- [ ] Fix any issues found during the 7-day run
- [ ] Document any operational procedures (how to restart, how to debug, how to add a new parser)
- [ ] Update [[Ziggy Email Bridge Architecture]] with any changes made during build

**Phase 5 deliverable:** System runs unattended for 7 days with zero failures. Operational runbook documented.

**Estimated time:** 4 hours + 7-day monitoring

---

## ⚠️ Risks

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Proton Bridge drops connection periodically | Medium | Medium | Retry logic with exponential backoff; Bridge auto-restart via launchd |
| Smartsheet changes export format | Low | High | Pin parser tests to known formats; alert on parse failures |
| Vault note frontmatter corruption from bad YAML write | Medium | High | Always read → modify → write (never write from scratch); backup vault daily |
| Syncthing conflict from simultaneous vault edits | Low | Medium | Ziggy only writes during off-hours (configure watcher schedule); Syncthing conflict resolution |
| Mac Mini goes offline (power, network) | Low | Low | Emails queue in Proton Mail; Ziggy processes backlog when back online |

---

## 💰 Budget

| Item | Cost | Notes |
|------|------|-------|
| Proton Mail (paid plan) | ~$4/mo | Already have? Verify Bridge access |
| Python libraries | $0 | All open source |
| Ollama models | $0 | Local, free |
| Claude API (weekly summaries) | ~$1-2/mo | Sonnet calls, minimal tokens |
| **Total** | **~$5-6/mo** | Fits under $20/mo AI budget |

---

## 📝 Notes & Decisions

### 2026-02-28
- Designed full architecture with Claude. Architecture doc created: [[Ziggy Email Bridge Architecture]]
- Decision: Use Proton Bridge native macOS install (Option A) over Docker — simpler for single mailbox
- Decision: Monthly summary tracking for finances, not per-transaction — Dataview handles this well
- Decision: Auto-apply low-risk updates (phase, budget), queue high-risk changes (health) for manual review
- Decision: Start with 6 Smartsheet automations covering the most impactful data flows

---

## 🔗 Related
- **Architecture:** [[Ziggy Email Bridge Architecture]]
- **Ziggy System:** [[System Guide]]
- **Work PMO:** [[Work Hub]]
- **Mac Mini Setup:** *(create a note for this when ready)*
- **Area:** [[Interests Hub]] (self-hosted tech)

---

## 📔 Log
```dataview
LIST
FROM "Journal" OR "Notes"
WHERE contains(file.outlinks, this.file.link)
SORT file.cday DESC
LIMIT 15
```
