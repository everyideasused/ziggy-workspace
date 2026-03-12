---
type: project
area: interests
client: "Nathan"
client_id: "PERSONAL"
status: active
health: green
priority: high
start_date: 2026-03-11
target_date: 2026-04-26
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

**Deadline:** April 26, 2026 (7 weeks from start)

**Architecture Reference:** [[Ziggy Email Bridge Architecture]]

---

## 🎯 Milestones

- [ ] **M1: Infrastructure ready** (Bridge + service scaffold) 📅 2026-03-16
- [ ] **M2: Email fetch + attachment download working** 📅 2026-03-23
- [ ] **M3: All parsers tested with real Smartsheet exports** 📅 2026-03-30
- [ ] **M4: Vault updater writing to notes correctly** 📅 2026-04-06
- [ ] **M5: Smartsheet automations live and sending** 📅 2026-04-12
- [ ] **M6: AI interpretation layer operational** 📅 2026-04-19
- [ ] **M7: Hardened, monitored, 7-day unattended run complete** 📅 2026-04-26

---

## 📅 Phase Plan

### Phase 1: Foundation — Mar 11–16
> *Get the plumbing working. Bridge installed, watcher service running, emails being received.*

- [ ] Verify Proton Mail plan supports Bridge (paid plan required) 📅 2026-03-11
- [ ] Download and install Proton Mail Bridge on Mac Mini 📅 2026-03-11
- [ ] Log in with ziggy@mouthygeese.com 📅 2026-03-11
- [ ] Note the bridge password (store in ~/ziggy/.env) 📅 2026-03-11
- [ ] Test IMAP connection manually (Python REPL or telnet to 127.0.0.1:1143) 📅 2026-03-12
- [ ] Create ~/ziggy/ directory structure 📅 2026-03-12
- [ ] Write ziggy_watcher.py (email polling loop only — no parsing yet) 📅 2026-03-13
- [ ] Send test email from personal address to ziggy@mouthygeese.com 📅 2026-03-13
- [ ] Confirm watcher detects and logs the email 📅 2026-03-13
- [ ] Create launchd plist at ~/Library/LaunchAgents/com.ziggy.watcher.plist 📅 2026-03-14
- [ ] Load service, verify it starts on login 📅 2026-03-14
- [ ] Verify it survives Mac Mini restart 📅 2026-03-15

**Phase 1 deliverable:** Watcher service running persistently, successfully detecting new emails and downloading attachments to ~/ziggy/attachments/.

**Estimated time:** 4 hours

---

### Phase 2: Parsing — Mar 17–30
> *Build the brains. Each Smartsheet export type gets its own parser.*

**Week 1 (Mar 17–23): Core parsers**
- [ ] Export a real Project Master Tracker from Smartsheet as Excel 📅 2026-03-17
- [ ] Export a real Financial Tracker from Smartsheet as Excel 📅 2026-03-17
- [ ] Export a real Permit Tracker from Smartsheet as Excel 📅 2026-03-17
- [ ] Write parse_project_master() — test with real export 📅 2026-03-18
- [ ] Write parse_financial() — test with real export 📅 2026-03-19
- [ ] Write parse_permits() — test with real export 📅 2026-03-20
- [ ] Write route_attachment() — verify routing by filename and subject 📅 2026-03-21
- [ ] Write unit tests for each parser (at least 3 test cases each) 📅 2026-03-22

**Week 2 (Mar 24–30): Remaining parsers + edge cases**
- [ ] Export Issues Log, Change Order Log, Dashboard Metrics from Smartsheet 📅 2026-03-24
- [ ] Write parse_issues() 📅 2026-03-25
- [ ] Write parse_change_orders() 📅 2026-03-26
- [ ] Write parse_dashboard() 📅 2026-03-27
- [ ] Handle edge cases: empty sheets, formula error values, missing columns 📅 2026-03-28
- [ ] Handle both .xlsx and .csv attachment types 📅 2026-03-28
- [ ] Test with intentionally malformed files (missing headers, extra columns) 📅 2026-03-29
- [ ] Wire parsers into watcher — end-to-end: email → download → parse → structured JSON output 📅 2026-03-30

**Phase 2 deliverable:** All 6 parsers working and tested. Emails arrive, attachments download, data extracts cleanly into structured Python dicts.

**Estimated time:** 8 hours (two 4-hour sessions)

---

### Phase 3: Vault Integration — Mar 31–Apr 12
> *Connect the parsers to the actual Obsidian files. This is where it gets real.*

**Week 1 (Mar 31–Apr 6): Vault updater core**
- [ ] Write read_note() and write_note() (frontmatter + body split/merge) 📅 2026-03-31
- [ ] Write find_note_by_project_id() — search vault for matching notes 📅 2026-04-01
- [ ] Write find_note_by_client_id() 📅 2026-04-01
- [ ] Write update_project_phase() — modify frontmatter `phase` field 📅 2026-04-02
- [ ] Write update_project_health() — modify frontmatter `health` field 📅 2026-04-02
- [ ] Write update_project_budget() — modify frontmatter `budget` field 📅 2026-04-03
- [ ] Write append_to_note_section() — add content under a markdown header 📅 2026-04-03
- [ ] Write create_update_log_entry() — append to daily note 📅 2026-04-04
- [ ] Test each function individually against real vault notes 📅 2026-04-05
- [ ] Test the full chain: email → parse → vault update → verify file changed 📅 2026-04-05
- [ ] Verify Syncthing propagates the changes to MacBook and iPhone 📅 2026-04-06

**Week 2 (Apr 7–12): Smartsheet automations**
- [ ] Set up Smartsheet automation: Project Master → weekly Friday email 📅 2026-04-07
- [ ] Set up Smartsheet automation: Financial Tracker → monthly 1st email 📅 2026-04-07
- [ ] Set up Smartsheet automation: Permit Tracker → weekly Monday email 📅 2026-04-08
- [ ] Set up Smartsheet automation: Dashboard Metrics → weekly Friday email 📅 2026-04-08
- [ ] Set up Smartsheet automation: Issues Log → daily 6pm email 📅 2026-04-09
- [ ] Set up Smartsheet automation: Change Order Log → on status change email 📅 2026-04-09
- [ ] Verify all 6 automations send correctly to ziggy@mouthygeese.com 📅 2026-04-10
- [ ] Run full integration test: wait for a real scheduled email, verify vault updates 📅 2026-04-11
- [ ] Fix any subject line routing issues 📅 2026-04-11
- [ ] Fix any attachment format issues 📅 2026-04-12

**Phase 3 deliverable:** Real Smartsheet data flowing into the vault on schedule. Project notes auto-updating. Daily note showing what changed.

**Estimated time:** 8 hours (two 4-hour sessions)

---

### Phase 4: AI Layer — Apr 13–19
> *Optional but valuable. Add intelligence to the data flow.*

- [ ] Install/verify Ollama is running on Mac Mini with a suitable model (llama3.2 or mistral) 📅 2026-04-13
- [ ] Write ziggy_ai.py with call_ollama() helper function 📅 2026-04-14
- [ ] Implement health assessment prompt: given project data, should health change? 📅 2026-04-15
- [ ] Implement anomaly detection: flag budget variances >10% 📅 2026-04-15
- [ ] Implement permit delay alerting: flag permits with >30 days in review 📅 2026-04-16
- [ ] Create the review queue system 📅 2026-04-16
- [ ] Test AI assessments against known project scenarios 📅 2026-04-17
- [ ] Optional: Add weekly summary generation via Claude API (Sonnet) 📅 2026-04-18
- [ ] Summarize all changes across the portfolio for the week 📅 2026-04-18
- [ ] Write summary to a "Weekly Ziggy Briefing" note in the vault 📅 2026-04-19

**Phase 4 deliverable:** AI layer providing health change suggestions and anomaly alerts. Review queue operational for human-in-the-loop decisions.

**Estimated time:** 3 hours

---

### Phase 5: Hardening — Apr 20–26
> *Make it bulletproof. This is what separates a hack from a system.*

- [ ] Add retry logic: if IMAP connection fails, retry 3x with backoff 📅 2026-04-20
- [ ] Add error handling: malformed attachments don't crash the service 📅 2026-04-20
- [ ] Add log rotation (keep 30 days of logs, auto-delete older) 📅 2026-04-21
- [ ] Add monitoring: if watcher hasn't processed an email in 48 hours, alert via email 📅 2026-04-21
- [ ] Add self-healing: if launchd restarts the service, it picks up where it left off 📅 2026-04-22
- [ ] Add a "heartbeat" log entry every hour so you can verify it's alive 📅 2026-04-22
- [ ] Test failure scenario: Proton Bridge not running → watcher retries gracefully 📅 2026-04-23
- [ ] Test failure scenario: Malformed Excel file → parser logs error, skips file, continues 📅 2026-04-23
- [ ] Test failure scenario: Vault note doesn't exist for a project ID → logs warning, doesn't crash 📅 2026-04-23
- [ ] Test failure scenario: Disk full → graceful error before corruption 📅 2026-04-24
- [ ] Test failure scenario: Mac Mini reboots → service auto-starts, Bridge auto-starts, resumes 📅 2026-04-24
- [ ] Run unattended for 7 consecutive days 📅 2026-04-25
- [ ] Review logs daily during the 7-day test 📅 2026-04-25
- [ ] Fix any issues found during the 7-day run 📅 2026-04-25
- [ ] Document any operational procedures (how to restart, how to debug, how to add a new parser) 📅 2026-04-26
- [ ] Update Architecture doc with any changes made during build 📅 2026-04-26

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

### 2026-03-08
- Project timeline updated: Start date moved to March 11, 2026
- All tasks now have due dates and will surface on daily notes
- Completion target: April 26, 2026 (7 weeks)

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
