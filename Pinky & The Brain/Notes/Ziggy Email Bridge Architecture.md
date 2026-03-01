---
type: system
area: work
status: active
tags:
  - system
  - ziggy
  - architecture
  - draft
---

> [[🏠base|🏠]] · [[Ziggy Hub|🤖 Ziggy]]

---

# 🤖 Ziggy Email Bridge — Architecture Document
## Smartsheet → Proton Mail → Ziggy → Obsidian Vault

---

## 1. OVERVIEW

### What This Does
Smartsheet sends automated email reports (PDF/Excel attachments) to `ziggy@mouthygeese.com` on Proton Mail. A service running on the Mac Mini M4 picks up those emails, parses the attachments, interprets the data, and updates the appropriate Obsidian vault notes — project statuses, financial figures, permit tracking, and more.

### The Pipeline

```
┌─────────────┐     email + attachment     ┌──────────────┐
│  Smartsheet  │ ────────────────────────►  │  Proton Mail │
│  Automations │   (scheduled or trigger)   │  ziggy@...   │
└─────────────┘                             └──────┬───────┘
                                                   │
                                          IMAP via Bridge
                                                   │
                                            ┌──────▼───────┐
                                            │  Mac Mini M4  │
                                            │               │
                                            │  ┌──────────┐ │
                                            │  │  Proton   │ │
                                            │  │  Bridge   │ │
                                            │  └────┬─────┘ │
                                            │       │       │
                                            │  ┌────▼─────┐ │
                                            │  │  Ziggy    │ │
                                            │  │  Watcher  │ │
                                            │  │  Service  │ │
                                            │  └────┬─────┘ │
                                            │       │       │
                                            │  ┌────▼─────┐ │
                                            │  │ Parser /  │ │
                                            │  │ AI Layer  │ │
                                            │  └────┬─────┘ │
                                            │       │       │
                                            │  ┌────▼─────┐ │
                                            │  │ Obsidian  │ │
                                            │  │ Vault     │ │
                                            │  │ (files)   │ │
                                            │  └──────────┘ │
                                            └───────────────┘
                                                   │
                                              Syncthing
                                                   │
                                         ┌─────────▼─────────┐
                                         │  MacBook / iPhone  │
                                         │  (vault mirrors)   │
                                         └───────────────────┘
```

---

## 2. INFRASTRUCTURE COMPONENTS

### 2.1 Proton Mail Bridge (Email Access Layer)

**What it does:** Proton Mail uses end-to-end encryption, so you can't connect to it with standard IMAP. Proton Bridge runs locally, decrypts mail, and exposes a local IMAP/SMTP server that your scripts can connect to.

**Requirement:** Paid Proton Mail plan (Bridge is not available on free tier).

**Two options for running it:**

**Option A: Native install on Mac Mini (Simpler)**
- Download Proton Mail Bridge for macOS from proton.me/mail/bridge
- Log in with ziggy@mouthygeese.com credentials
- Bridge runs in the background, exposes:
  - IMAP: `127.0.0.1:1143` (STARTTLS)
  - SMTP: `127.0.0.1:1025` (STARTTLS)
- Bridge generates a unique bridge password (NOT your Proton account password) — use this in your scripts
- Set Bridge to launch at login (System Settings → Login Items)

**Option B: Docker container (More isolated, fits self-hosted ethos)**
- Use `ghcr.io/videocurio/protonmailbridgedocker` image
- Docker Compose config:

```yaml
services:
  proton-bridge:
    image: ghcr.io/videocurio/protonmailbridgedocker:latest
    container_name: proton-bridge
    restart: unless-stopped
    ports:
      - "1143:143"    # IMAP
      - "1025:25"     # SMTP
    volumes:
      - ./proton-bridge-data:/root/.config/protonmail/bridge-v3
      - ./proton-bridge-cache:/root/.cache/protonmail/bridge-v3
    environment:
      - CONTAINER_IMAP_PORT=143
      - CONTAINER_SMTP_PORT=25
```

- First run: exec into container, run `bridge --cli`, login with Proton credentials
- Note the bridge password from `info` command

**Recommendation:** Option A for simplicity. The Mac Mini is always on, Bridge is lightweight, and macOS handles it natively. Docker is overkill for a single mailbox.

---

### 2.2 Ziggy Watcher Service (Email Polling & Orchestration)

**What it does:** A Python script that runs as a persistent service on the Mac Mini. It polls the IMAP inbox on a schedule, identifies new emails from Smartsheet, downloads attachments, and triggers the parsing pipeline.

**Core script: `ziggy_watcher.py`**

```python
"""
Ziggy Email Watcher
Polls Proton Mail Bridge IMAP for new Smartsheet emails,
downloads attachments, and triggers parsing pipeline.
"""

import imaplib
import email
import os
import time
import json
import logging
from datetime import datetime
from pathlib import Path

# Configuration
IMAP_HOST = "127.0.0.1"
IMAP_PORT = 1143
EMAIL_USER = "ziggy@mouthygeese.com"
EMAIL_PASS = "your-bridge-password-here"  # From Proton Bridge, NOT your account pw
POLL_INTERVAL = 300  # seconds (5 minutes)
ATTACHMENT_DIR = Path.home() / "ziggy" / "attachments"
PROCESSED_DIR = Path.home() / "ziggy" / "processed"
LOG_DIR = Path.home() / "ziggy" / "logs"
VAULT_PATH = Path.home() / "ObsidianVault"  # Adjust to your vault location

# Trusted senders — only process emails from these addresses
TRUSTED_SENDERS = [
    "notifications@smartsheet.com",
    "noreply@smartsheet.com",
    # Add your personal email if you'll forward reports manually
]

def connect_imap():
    """Connect to Proton Bridge IMAP."""
    mail = imaplib.IMAP4(IMAP_HOST, IMAP_PORT)
    mail.starttls()
    mail.login(EMAIL_USER, EMAIL_PASS)
    return mail

def fetch_new_emails(mail):
    """Fetch unread emails from inbox."""
    mail.select("INBOX")
    status, messages = mail.search(None, "UNSEEN")
    if status != "OK":
        return []
    
    email_ids = messages[0].split()
    new_emails = []
    
    for eid in email_ids:
        status, msg_data = mail.fetch(eid, "(RFC822)")
        if status != "OK":
            continue
        
        msg = email.message_from_bytes(msg_data[0][1])
        sender = email.utils.parseaddr(msg["From"])[1].lower()
        
        # Security: only process from trusted senders
        if sender not in TRUSTED_SENDERS:
            logging.warning(f"Ignoring email from untrusted sender: {sender}")
            continue
        
        new_emails.append({
            "id": eid,
            "subject": msg["Subject"],
            "sender": sender,
            "date": msg["Date"],
            "message": msg
        })
    
    return new_emails

def save_attachments(msg_data):
    """Extract and save attachments from email."""
    msg = msg_data["message"]
    saved_files = []
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    
    for part in msg.walk():
        if part.get_content_maintype() == "multipart":
            continue
        
        filename = part.get_filename()
        if filename:
            # Prefix with timestamp to avoid collisions
            safe_name = f"{timestamp}_{filename}"
            filepath = ATTACHMENT_DIR / safe_name
            
            with open(filepath, "wb") as f:
                f.write(part.get_payload(decode=True))
            
            saved_files.append({
                "filename": safe_name,
                "original_name": filename,
                "path": str(filepath),
                "content_type": part.get_content_type(),
                "subject": msg_data["subject"],
                "sender": msg_data["sender"],
                "date": msg_data["date"]
            })
            logging.info(f"Saved attachment: {safe_name}")
    
    return saved_files

def route_attachment(file_info):
    """
    Determine what type of Smartsheet report this is 
    based on filename and email subject.
    Returns a processing instruction dict.
    """
    filename = file_info["original_name"].lower()
    subject = file_info["subject"].lower() if file_info["subject"] else ""
    
    # Route based on filename patterns from Smartsheet exports
    if "project_master" in filename or "project master" in subject:
        return {"type": "project_status", "parser": "parse_project_master"}
    elif "financial" in filename or "financial" in subject:
        return {"type": "financial_update", "parser": "parse_financial"}
    elif "permit" in filename or "permit" in subject:
        return {"type": "permit_update", "parser": "parse_permits"}
    elif "issue" in filename or "issues" in subject:
        return {"type": "issues_update", "parser": "parse_issues"}
    elif "risk" in filename or "risk" in subject:
        return {"type": "risk_update", "parser": "parse_risks"}
    elif "billing" in filename or "invoice" in subject:
        return {"type": "billing_update", "parser": "parse_billing"}
    elif "dashboard" in filename or "metrics" in subject:
        return {"type": "dashboard_update", "parser": "parse_dashboard"}
    elif "change_order" in filename or "change order" in subject:
        return {"type": "co_update", "parser": "parse_change_orders"}
    else:
        return {"type": "unknown", "parser": "queue_for_review"}

def main_loop():
    """Main polling loop."""
    logging.info("Ziggy Watcher started. Polling every "
                 f"{POLL_INTERVAL} seconds.")
    
    while True:
        try:
            mail = connect_imap()
            new_emails = fetch_new_emails(mail)
            
            for msg_data in new_emails:
                logging.info(f"Processing: {msg_data['subject']} "
                           f"from {msg_data['sender']}")
                
                attachments = save_attachments(msg_data)
                
                for file_info in attachments:
                    routing = route_attachment(file_info)
                    file_info["routing"] = routing
                    
                    # Save processing manifest
                    manifest_path = PROCESSED_DIR / (
                        file_info["filename"] + ".json"
                    )
                    with open(manifest_path, "w") as f:
                        json.dump(file_info, f, indent=2)
                    
                    # Trigger the appropriate parser
                    # (imported from ziggy_parsers module)
                    process_attachment(file_info, routing)
                
                # Mark email as read
                mail.store(msg_data["id"], "+FLAGS", "\\Seen")
            
            mail.logout()
        
        except Exception as e:
            logging.error(f"Error in polling loop: {e}")
        
        time.sleep(POLL_INTERVAL)

if __name__ == "__main__":
    # Setup
    ATTACHMENT_DIR.mkdir(parents=True, exist_ok=True)
    PROCESSED_DIR.mkdir(parents=True, exist_ok=True)
    LOG_DIR.mkdir(parents=True, exist_ok=True)
    
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s [%(levelname)s] %(message)s",
        handlers=[
            logging.FileHandler(LOG_DIR / "ziggy_watcher.log"),
            logging.StreamHandler()
        ]
    )
    
    main_loop()
```

**Run as a persistent service (launchd on macOS):**

Create `~/Library/LaunchAgents/com.ziggy.watcher.plist`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.ziggy.watcher</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/python3</string>
        <string>/Users/nathan/ziggy/ziggy_watcher.py</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>/Users/nathan/ziggy/logs/stdout.log</string>
    <key>StandardErrorPath</key>
    <string>/Users/nathan/ziggy/logs/stderr.log</string>
</dict>
</plist>
```

Load with: `launchctl load ~/Library/LaunchAgents/com.ziggy.watcher.plist`

---

### 2.3 Parsers (Data Extraction Layer)

**What it does:** Takes the downloaded Smartsheet attachments (Excel or PDF) and extracts structured data.

**Core script: `ziggy_parsers.py`**

```python
"""
Ziggy Parsers
Extract structured data from Smartsheet email attachments.
"""

import openpyxl
import csv
import json
from pathlib import Path
from datetime import datetime

def parse_excel(filepath):
    """Generic Excel parser — returns list of dicts."""
    wb = openpyxl.load_workbook(filepath, read_only=True)
    ws = wb.active
    
    rows = list(ws.iter_rows(values_only=True))
    if not rows:
        return []
    
    headers = [str(h).strip() if h else f"col_{i}" 
               for i, h in enumerate(rows[0])]
    data = []
    
    for row in rows[1:]:
        if all(cell is None for cell in row):
            continue
        record = {}
        for i, val in enumerate(row):
            if i < len(headers):
                record[headers[i]] = val
        data.append(record)
    
    wb.close()
    return data

def parse_csv_attachment(filepath):
    """Generic CSV parser — returns list of dicts."""
    with open(filepath, "r", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        return list(reader)

def parse_project_master(filepath):
    """
    Parse Project Master Tracker export.
    Returns project status updates for vault.
    """
    data = parse_excel(filepath)
    
    projects = []
    for row in data:
        projects.append({
            "project_id": row.get("Project ID", ""),
            "client_id": row.get("Client ID", ""),
            "client_name": row.get("Client Name", ""),
            "project_name": row.get("Project Name", ""),
            "phase": row.get("Phase", ""),
            "status": row.get("Status", ""),
            "health": row.get("Health", ""),
            "current_budget": row.get("Current Budget", 0),
            "actual_cost": row.get("Actual Cost", 0),
            "budget_variance": row.get("Budget Variance", 0),
            "last_updated": row.get("Last Updated", ""),
        })
    
    return {"type": "project_status", "projects": projects}

def parse_financial(filepath):
    """Parse Financial Tracker export."""
    data = parse_excel(filepath)
    
    financials = []
    for row in data:
        financials.append({
            "project_id": row.get("Project ID", ""),
            "budget_category": row.get("Budget Category", ""),
            "line_item": row.get("Budget Line Item", ""),
            "original_budget": row.get("Original Budget", 0),
            "current_budget": row.get("Current Budget", 0),
            "committed": row.get("Committed (PO/Contract)", 0),
            "invoiced": row.get("Invoiced to Date", 0),
            "paid": row.get("Paid to Date", 0),
            "variance": row.get("Budget Variance", 0),
        })
    
    return {"type": "financial_update", "financials": financials}

def parse_permits(filepath):
    """Parse Permit Tracker export."""
    data = parse_excel(filepath)
    
    permits = []
    for row in data:
        permits.append({
            "permit_id": row.get("Permit ID", ""),
            "project_id": row.get("Project ID", ""),
            "ahj": row.get("AHJ Name", ""),
            "permit_type": row.get("Permit Type", ""),
            "status": row.get("Status", ""),
            "days_in_review": row.get("Days in Review", ""),
            "submission_date": row.get("Submission Date", ""),
            "approval_date": row.get("Approval Date", ""),
        })
    
    return {"type": "permit_update", "permits": permits}

def parse_dashboard(filepath):
    """Parse Dashboard Metrics export."""
    data = parse_excel(filepath)
    
    metrics = {}
    for row in data:
        name = row.get("Metric Name", "")
        value = row.get("Value", "")
        if name:
            metrics[name] = value
    
    return {"type": "dashboard_update", "metrics": metrics}

# Add more parsers as needed for:
# parse_issues, parse_risks, parse_billing, 
# parse_change_orders, etc.
# They all follow the same pattern.
```

---

### 2.4 AI Interpretation Layer (Optional but Recommended)

**What it does:** Takes parsed data and makes judgment calls — should a project health change? Is a permit delay worth noting? What should Nathan pay attention to?

**This is where your tiered model routing fits perfectly:**

| Task | Model | Why |
|------|-------|-----|
| Simple data extraction (parse Excel) | No AI needed | Deterministic parsing |
| Formatting updates for vault notes | Local Ollama (llama3/mistral) | Low complexity, runs free |
| Health assessment / anomaly detection | Local Ollama | Pattern matching, low stakes |
| Strategic observations / weekly summary | Claude API (Sonnet) | Needs reasoning, worth the cost |
| Complex cross-project analysis | Claude API (Opus) | Only for monthly reviews |

**Example AI prompt for project health assessment:**

```python
def assess_project_health(project_data):
    """Use local model to assess if health indicators changed."""
    
    prompt = f"""Given this project data from Smartsheet:
    
Project: {project_data['project_name']}
Phase: {project_data['phase']}
Budget: ${project_data['current_budget']:,}
Actual Cost: ${project_data['actual_cost']:,}
Variance: ${project_data['budget_variance']:,}
Schedule Status: {project_data.get('schedule_status', 'unknown')}

Current health in Obsidian: {project_data.get('current_vault_health', 'unknown')}

Should the health indicator change? Respond with ONLY one of:
- NO_CHANGE
- UPGRADE_TO_GREEN: [one sentence reason]
- DOWNGRADE_TO_YELLOW: [one sentence reason]  
- DOWNGRADE_TO_RED: [one sentence reason]
"""
    
    # Route to local Ollama for this low-stakes assessment
    response = call_ollama(prompt, model="llama3.2")
    return response
```

---

### 2.5 Vault Updater (File Modification Layer)

**What it does:** Takes the parsed (and optionally AI-interpreted) data and writes updates to the actual Obsidian markdown files.

**Core script: `ziggy_vault_updater.py`**

```python
"""
Ziggy Vault Updater
Writes parsed Smartsheet data to Obsidian vault notes.
"""

import re
import yaml
from pathlib import Path
from datetime import datetime

VAULT_PATH = Path.home() / "ObsidianVault"  # Adjust
NOTES_PATH = VAULT_PATH / "Notes"

def read_note(filepath):
    """Read a note and split into frontmatter and body."""
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Split frontmatter from body
    if content.startswith("---"):
        parts = content.split("---", 2)
        if len(parts) >= 3:
            frontmatter = yaml.safe_load(parts[1])
            body = parts[2]
            return frontmatter, body
    
    return {}, content

def write_note(filepath, frontmatter, body):
    """Write frontmatter + body back to note."""
    fm_str = yaml.dump(frontmatter, default_flow_style=False,
                       allow_unicode=True)
    content = f"---\n{fm_str}---{body}"
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

def find_note_by_project_id(project_id):
    """Find the vault note matching a Smartsheet project ID."""
    for note_path in NOTES_PATH.glob("*.md"):
        fm, _ = read_note(note_path)
        if fm.get("project_id") == project_id:
            return note_path
    return None

def find_note_by_client_id(client_id):
    """Find the vault note matching a Smartsheet client ID."""
    for note_path in NOTES_PATH.glob("*.md"):
        fm, _ = read_note(note_path)
        if fm.get("client_id") == client_id and fm.get("type") == "project":
            return note_path
    return None

def update_project_health(project_id, new_health, reason=""):
    """Update a project note's health indicator."""
    note_path = find_note_by_project_id(project_id)
    if not note_path:
        return False, f"No vault note found for {project_id}"
    
    fm, body = read_note(note_path)
    old_health = fm.get("health", "unknown")
    
    if old_health == new_health:
        return True, "No change needed"
    
    fm["health"] = new_health
    write_note(note_path, fm, body)
    
    return True, f"Updated {project_id} health: {old_health} → {new_health}"

def update_project_phase(project_id, new_phase):
    """Update a project note's phase."""
    note_path = find_note_by_project_id(project_id)
    if not note_path:
        return False, f"No vault note found for {project_id}"
    
    fm, body = read_note(note_path)
    old_phase = fm.get("phase", "unknown")
    
    fm["phase"] = new_phase
    write_note(note_path, fm, body)
    
    return True, f"Updated {project_id} phase: {old_phase} → {new_phase}"

def update_project_budget(project_id, budget_data):
    """Update budget figures in a project note's frontmatter."""
    note_path = find_note_by_project_id(project_id)
    if not note_path:
        return False, f"No vault note found for {project_id}"
    
    fm, body = read_note(note_path)
    fm["budget"] = budget_data.get("current_budget", fm.get("budget"))
    write_note(note_path, fm, body)
    
    return True, f"Updated {project_id} budget"

def append_to_note_section(note_path, section_header, content):
    """
    Append content under a specific markdown section header.
    Useful for adding observations, risk notes, etc.
    """
    fm, body = read_note(note_path)
    
    # Find the section and append after it
    pattern = rf"(## {re.escape(section_header)}.*?)(\n## |\Z)"
    match = re.search(pattern, body, re.DOTALL)
    
    if match:
        section_end = match.end(1)
        timestamp = datetime.now().strftime("%Y-%m-%d")
        new_content = f"\n\n### {timestamp} (auto-updated)\n{content}"
        body = body[:section_end] + new_content + body[section_end:]
        write_note(note_path, fm, body)
        return True
    
    return False

def create_update_log_entry(updates):
    """
    Create a log entry in the daily note summarizing
    what Ziggy auto-updated.
    """
    today = datetime.now().strftime("%Y-%m-%d")
    daily_note = VAULT_PATH / "Journal" / f"{today}.md"
    
    if not daily_note.exists():
        return  # Don't create daily notes automatically
    
    fm, body = read_note(daily_note)
    
    log_lines = ["\n\n### 🤖 Ziggy Auto-Updates"]
    for update in updates:
        log_lines.append(f"- {update}")
    
    body += "\n".join(log_lines)
    write_note(daily_note, fm, body)

def process_attachment(file_info, routing):
    """
    Main entry point — called by ziggy_watcher.
    Routes to appropriate parser, then updates vault.
    """
    from ziggy_parsers import (
        parse_project_master, parse_financial, 
        parse_permits, parse_dashboard
    )
    
    filepath = file_info["path"]
    parser_name = routing["parser"]
    updates_log = []
    
    if parser_name == "parse_project_master":
        result = parse_project_master(filepath)
        for proj in result["projects"]:
            pid = proj["project_id"]
            
            # Update phase if changed
            note_path = find_note_by_project_id(pid)
            if note_path:
                fm, _ = read_note(note_path)
                if fm.get("phase") != proj["phase"] and proj["phase"]:
                    update_project_phase(pid, proj["phase"])
                    updates_log.append(
                        f"{pid} phase → {proj['phase']}"
                    )
                if proj.get("current_budget"):
                    update_project_budget(pid, proj)
                    updates_log.append(
                        f"{pid} budget → ${proj['current_budget']:,}"
                    )
    
    elif parser_name == "parse_permits":
        result = parse_permits(filepath)
        for permit in result["permits"]:
            # Permits don't have individual vault notes —
            # but we can flag notable changes on project notes
            if permit.get("status") == "Approved":
                pid = permit["project_id"]
                note_path = find_note_by_project_id(pid)
                if note_path:
                    append_to_note_section(
                        note_path,
                        "📌 Current Focus",
                        f"- ✅ {permit['permit_type']} APPROVED "
                        f"at {permit['ahj']}"
                    )
                    updates_log.append(
                        f"{pid}: {permit['permit_type']} approved"
                    )
    
    elif parser_name == "parse_financial":
        result = parse_financial(filepath)
        # Aggregate by project and update budget figures
        project_totals = {}
        for line in result["financials"]:
            pid = line["project_id"]
            if pid not in project_totals:
                project_totals[pid] = {
                    "current_budget": 0, "actual_cost": 0
                }
            project_totals[pid]["current_budget"] += (
                line.get("current_budget") or 0
            )
            project_totals[pid]["actual_cost"] += (
                line.get("invoiced") or 0
            )
        
        for pid, totals in project_totals.items():
            update_project_budget(pid, totals)
            updates_log.append(
                f"{pid} financials updated"
            )
    
    elif parser_name == "parse_dashboard":
        result = parse_dashboard(filepath)
        # Dashboard metrics go to work hub or a 
        # dedicated metrics note
        updates_log.append(
            f"Dashboard metrics received: "
            f"{len(result['metrics'])} KPIs"
        )
    
    elif parser_name == "queue_for_review":
        updates_log.append(
            f"⚠️ Unknown attachment queued: "
            f"{file_info['original_name']}"
        )
    
    # Log what was updated to today's daily note
    if updates_log:
        create_update_log_entry(updates_log)
    
    return updates_log
```

---

## 3. SMARTSHEET AUTOMATIONS (Sending Side)

Set up these automations in Smartsheet to email reports to Ziggy:

### 3.1 Scheduled Reports

| Report | Schedule | Attachment Type | Email Subject Convention |
|--------|----------|----------------|--------------------------|
| Project Master Tracker | Weekly (Friday 5pm) | Excel | `[Smartsheet] Project Master - Weekly` |
| Financial Tracker | Monthly (1st of month) | Excel | `[Smartsheet] Financial Tracker - Monthly` |
| Permit Tracker | Weekly (Monday 8am) | Excel | `[Smartsheet] Permit Tracker - Weekly` |
| Dashboard Metrics | Weekly (Friday 5pm) | Excel | `[Smartsheet] Dashboard Metrics - Weekly` |
| Issues Log | Daily (6pm) | Excel | `[Smartsheet] Issues Log - Daily` |
| Change Order Log | On change (when CO status changes) | Excel | `[Smartsheet] Change Order Update` |

### 3.2 How to Set Up in Smartsheet

1. Open the sheet you want to auto-send
2. Click **Automation** → **New Workflow**
3. **Trigger:** "When a date is reached" → set your schedule
   - OR for event-based: "When rows are changed" → filter to status column changes
4. **Action:** "Send an email"
5. **To:** `ziggy@mouthygeese.com`
6. **Subject:** Use the conventions from the table above (the parser uses these to route)
7. **Body:** Optional — can include summary text
8. **Attachments:** Check "Attach sheet as Excel" or "Attach report as Excel"
9. Save the automation

**IMPORTANT:** Use consistent subject line naming. The Ziggy watcher uses subject keywords to route attachments to the correct parser. If you change the subject format, update the `route_attachment()` function accordingly.

---

## 4. SECURITY CONSIDERATIONS

### 4.1 Attack Surface
- The `TRUSTED_SENDERS` whitelist ensures only Smartsheet notification emails are processed
- Proton Bridge runs locally — no ports exposed to the internet
- File parsing uses standard libraries (openpyxl) — no execution of attachment content
- Vault updates only modify files in the known vault path

### 4.2 Credential Management
- **Never** store the Proton Bridge password in the script directly
- Use a `.env` file with restricted permissions:

```bash
# ~/ziggy/.env
PROTON_BRIDGE_PASSWORD=your-bridge-password-here
```

```bash
chmod 600 ~/ziggy/.env
```

- Load in Python:

```python
from dotenv import load_dotenv
load_dotenv(Path.home() / "ziggy" / ".env")
EMAIL_PASS = os.getenv("PROTON_BRIDGE_PASSWORD")
```

### 4.3 What Gets Auto-Updated vs Queued for Review

| Update Type | Auto-Apply | Queue for Review |
|------------|------------|-----------------|
| Project phase change | ✅ | |
| Budget figures (from Smartsheet) | ✅ | |
| Permit approved notification | ✅ (appends to note) | |
| Health indicator change | | ✅ (AI suggests, Nathan confirms) |
| New risk or issue flagged | | ✅ |
| Financial anomaly (>10% variance) | | ✅ |
| Unknown attachment type | | ✅ |

---

## 5. FILE STRUCTURE ON MAC MINI

```
~/ziggy/
├── .env                          # Credentials (chmod 600)
├── ziggy_watcher.py              # Main polling service
├── ziggy_parsers.py              # Attachment parsers
├── ziggy_vault_updater.py        # Vault file modifications
├── ziggy_ai.py                   # AI interpretation layer
├── config.json                   # Runtime configuration
├── attachments/                  # Downloaded email attachments
│   └── 20250715_143022_Project_Master_Tracker.xlsx
├── processed/                    # Processing manifests
│   └── 20250715_143022_Project_Master_Tracker.xlsx.json
├── logs/                         # Service logs
│   ├── ziggy_watcher.log
│   ├── stdout.log
│   └── stderr.log
└── queue/                        # Items needing manual review
    └── 20250715_health_change_PJ-003.json
```

---

## 6. DEPENDENCIES

```bash
# Python packages
pip install openpyxl          # Excel parsing
pip install python-dotenv     # Environment variables
pip install pyyaml            # YAML frontmatter parsing
pip install requests          # For Ollama/Claude API calls
pip install pdfplumber        # PDF parsing (if Smartsheet sends PDFs)

# Optional
pip install tabulate          # Pretty-print tables in logs
pip install schedule          # Alternative to time.sleep polling
```

---

## 7. IMPLEMENTATION PHASES

### Phase 1: Foundation (Weekend project, ~4 hours)
- [ ] Install Proton Mail Bridge on Mac Mini
- [ ] Log in with ziggy@mouthygeese.com
- [ ] Create ~/ziggy/ directory structure
- [ ] Write and test ziggy_watcher.py (just email fetching, no parsing)
- [ ] Manually send a test email with an Excel attachment
- [ ] Verify it downloads the attachment correctly
- [ ] Set up launchd service

### Phase 2: Parsing (Another ~4 hours)
- [ ] Implement parse_project_master
- [ ] Implement parse_financial
- [ ] Implement parse_permits
- [ ] Test each parser with a real Smartsheet export
- [ ] Implement vault_updater for frontmatter changes
- [ ] Test end-to-end: send email → parse → update vault note

### Phase 3: Smartsheet Automations (~2 hours)
- [ ] Set up the 6 scheduled email automations in Smartsheet
- [ ] Verify emails arrive at ziggy@mouthygeese.com
- [ ] Verify attachments parse correctly
- [ ] Verify vault notes update correctly
- [ ] Monitor for a week, fix edge cases

### Phase 4: AI Layer (Optional, ~3 hours)
- [ ] Add Ollama integration for health assessments
- [ ] Add anomaly detection (budget variance >10%)
- [ ] Add weekly summary generation (Claude API call)
- [ ] Implement the review queue for human-in-the-loop items

### Phase 5: Hardening (~2 hours)
- [ ] Error handling for malformed attachments
- [ ] Retry logic for failed IMAP connections
- [ ] Log rotation
- [ ] Monitoring alerts (email yourself if watcher crashes)
- [ ] Backup strategy for ~/ziggy/ directory

**Total estimated build time: 15-17 hours across 2-3 weekends**

---

## 8. FUTURE ENHANCEMENTS

- **Two-way sync:** Ziggy could also SEND emails — for example, emailing you a daily briefing of what changed in the vault
- **SMS/iMessage integration:** For the "text Ziggy" workflow, integrate with a local SMS gateway or use Shortcuts on iPhone to hit an API endpoint on the Mac Mini
- **Slack/Discord bot:** Alternative input channel for quick updates
- **Calendar integration:** Parse meeting invites and auto-create meeting notes in the vault
- **Smartsheet API direct:** Skip email entirely and have Ziggy poll the Smartsheet API directly (requires Smartsheet API token, more setup, but eliminates email dependency and gives real-time data)

---

*This architecture document is the reference for building and maintaining the Ziggy Email Bridge. Update it as the system evolves.*
