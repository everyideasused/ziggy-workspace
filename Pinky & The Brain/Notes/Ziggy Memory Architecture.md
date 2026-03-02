---
type: system
area: system
status: active
tags:
  - system
  - ziggy
  - openclaw
  - memory
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# 🧠 Ziggy Memory Architecture
## How Ziggy Remembers Across Sessions

*Last updated: 2026-03-01*

---

## The Problem

OpenClaw's built-in memory is unreliable. Conversations fade, context gets lost, and Ziggy forgets things it should know. Meanwhile, every message sends the entire conversation history to the model — a simple question can burn 200K+ tokens if the session has accumulated context.

## The Solution: Three-Layer Memory

```
Layer 1: Git (Time Travel)
  └── Automatic save states every 10 min
  └── Full vault history, diff-able, rollback-able

Layer 2: Obsidian Vault (Persistent Knowledge)
  └── Structured notes with frontmatter
  └── Ziggy System Context = the "brain"
  └── Session State notes = short-term memory
  └── Save States = long-term memory

Layer 3: OpenClaw Memory (Agent Runtime)
  └── ~/.openclaw/memory/ symlinked into vault
  └── Daily logs + MEMORY.md visible in Obsidian
  └── Git-tracked alongside vault notes
```

---

## Layer 1: Git Save States

### What It Does
The Obsidian Git plugin automatically commits all vault changes every 10 minutes. This gives you a complete, browsable history of every change Ziggy or you make to any note. If something goes wrong, you roll back.

### Plugin: Obsidian Git (by Vinzent03)
- Install from Community Plugins
- Pushes to a private GitHub repo for offsite backup
- Auto-commit interval: 10 minutes
- Commit message format: `vault auto-backup: {{date}}`

### Configuration
```
Settings → Obsidian Git:
  ├── Automatic commit-and-sync: ON
  ├── Auto commit interval: 10 (minutes)
  ├── Commit message: vault auto-backup: {{date}}
  ├── Pull on startup: ON
  ├── Push on commit: ON
  └── Show status bar: ON
```

### First-Time Setup

**1. Create a private repo on GitHub:**
- Go to github.com → New Repository
- Name: `obsidian-command-center` (or whatever you prefer)
- Visibility: **Private**
- Do NOT initialize with README, .gitignore, or license
- Click Create Repository

**2. Initialize and push from your vault:**
```bash
# Navigate to your vault root
cd /path/to/your/vault

# Initialize git repo
git init

# Create .gitignore
echo ".obsidian/workspace.json
.obsidian/workspace-mobile.json
.trash/" > .gitignore

# Initial commit
git add -A
git commit -m "Initial vault commit"

# Connect to GitHub and push
git remote add origin https://github.com/YOUR-USERNAME/obsidian-command-center.git
git branch -M main
git push -u origin main
```

**3. Authentication:**
GitHub requires a Personal Access Token (not your password) for HTTPS push. If prompted:
- GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic)
- Generate new token with `repo` scope
- Use this token as your password when git asks
- macOS Keychain will save it so you only enter it once

### What to Ignore
The `.gitignore` excludes workspace layout files (they change constantly and aren't meaningful) and Obsidian's trash. Everything else — notes, templates, attachments, settings — gets versioned and pushed to GitHub.

### Security
Your GitHub repo is **private** — only you can see it. However, be mindful of what's in your vault. Don't store passwords, API keys, or sensitive credentials in vault notes. If you need to reference secrets, use a note that says where to find them (e.g., "API key stored in 1Password") rather than the actual values.

### Using Git History
- **View history:** Obsidian Git → Open History View (shows all commits)
- **View file diff:** Obsidian Git → Open Diff View (shows changes to current file)
- **Roll back a file:** In terminal: `git checkout <commit-hash> -- "Notes/filename.md"`
- **Roll back everything:** In terminal: `git reset --hard <commit-hash>` (nuclear option)
- **See what changed recently:** In terminal: `git log --oneline -20`

### Safety Net
If Ziggy or you accidentally corrupt a note, delete something, or frontmatter gets mangled — git has it. Every 10 minutes, a snapshot goes to GitHub. You're never more than 10 minutes from a known-good state, and you have a full offsite backup even if your Mac Mini dies.

---

## Layer 2: Staged Context Injection

### The Token Cost Problem
OpenClaw sends the entire system prompt + conversation history with every API call. The full Ziggy System Context is ~4,000 tokens. A long conversation can accumulate 100K-200K tokens. You pay for all of it on every message.

### The Solution: Session State Notes
Instead of relying on OpenClaw's built-in memory, Ziggy writes a **Session State** note at the end of each working session. This note captures what was discussed, what changed, and what's pending. The next session injects just this note as context — not the entire history.

### How It Works

**End of session:**
1. Ziggy creates (or updates) a Session State note
2. Note contains: what was worked on, decisions made, files changed, open items
3. Git auto-commits it within 10 minutes

**Start of next session:**
1. Nathan pastes the Ziggy OpenClaw Full Prompt (always — this is the brain)
2. Nathan pastes the latest Session State note (short-term memory)
3. If deeper context is needed, Nathan references specific vault notes

**This is staged memory retrieval.** Ziggy gets what matters NOW, backed by a structured archive it can request when needed. No context window bloat.

### Session State vs Save State

| Note Type | Template | Purpose | Lifespan |
|-----------|----------|---------|----------|
| Session State | Session State.md | End-of-session summary for next session continuity | Updated each session, overwritten |
| Save State | Quick Capture + `ziggy` + `save-state` tags | Durable record of a meaningful conversation | Permanent |

**Session State** = Ziggy's working memory (what's current).
**Save State** = Ziggy's long-term memory (what's worth keeping forever).

---

## Layer 3: OpenClaw Memory Symlink

### What It Does
OpenClaw stores its own memory files at `~/.openclaw/memory/`. By symlinking this folder into your vault, these files become visible, searchable, and git-tracked in Obsidian.

### Setup
```bash
# Create the symlink (run once)
ln -s ~/.openclaw/memory /path/to/your/vault/Notes/OpenClaw-Memory
```

After this, you'll see OpenClaw's memory files in Obsidian under `Notes/OpenClaw-Memory/`. They include:
- **Daily logs** (`YYYY-MM-DD.md`) — raw conversation logs
- **MEMORY.md** — OpenClaw's curated compressed context

### Important
- These files are managed by OpenClaw, not by you or Ziggy
- Don't edit them through Obsidian (edit through OpenClaw if needed)
- Git tracks them automatically — you can see what OpenClaw "remembers" over time
- They won't have vault frontmatter — that's fine, they're external files passing through

---

## Session Discipline Rules

### For Nathan

1. **Start each session clean.** Paste the Full Prompt + latest Session State. Don't let sessions accumulate context across unrelated tasks.
2. **Use `/new` instead of `/compact` to end sessions.** `/new` triggers the auto-save hook (writes Session State + Session Log, zero tokens). `/compact` only compresses context without saving to vault.
3. **End meaningful sessions:** Use `/new` to auto-save, or explicitly say "save the session state" for manual updates.
4. **For important conversations, also say "save this as a save state."** Ziggy creates a permanent save-state note.

### For Ziggy

1. **When Nathan says "save the session state":**
   - Create or update the Session State note using the Session State template
   - Include: date, what was worked on, decisions made, files changed/created, open items, next actions
   - Keep it concise — this gets injected as context, so every token counts

2. **When Nathan says "save this as a save state":**
   - Create a Quick Capture note with `ziggy` + `save-state` tags
   - Include a comprehensive summary of the conversation
   - This is permanent — be thorough

3. **At the start of a session with a Session State:**
   - Read it for continuity
   - Don't re-explain things that are captured there
   - Pick up where you left off

4. **Token awareness:**
   - Keep Session State notes under 500 words (~750 tokens)
   - Don't inject vault notes into context unless Nathan requests it
   - If Nathan asks about something in the vault, reference the note name so Nathan can look it up — don't quote entire notes

---

## Cost Impact

### Before (no session discipline)
- System prompt: ~4,000 tokens
- Accumulated session context: 50,000-200,000 tokens
- Every message: 54,000-204,000 input tokens
- Cost per message: $0.01-$0.06 (Sonnet)
- Monthly (30 queries/day): $9-$54

### After (staged context injection)
- System prompt: ~4,000 tokens
- Session State injection: ~750 tokens
- Fresh session context: 1,000-5,000 tokens
- Every message: ~5,750-9,750 input tokens
- Cost per message: ~$0.002
- Monthly (30 queries/day): ~$1.80

**Estimated savings: 70-95%**

---

## Maintenance

### Weekly (during Weekly Review)
- [ ] Check git log for any unusual changes (`git log --oneline -20`)
- [ ] Review Session State note — is it current and accurate?
- [ ] Scan OpenClaw-Memory/ for any drift or stale context

### Monthly
- [ ] Archive old save-state notes if no longer relevant
- [ ] Review git repo size — if growing large, consider `git gc`
- [ ] Check OpenClaw memory files for accuracy — edit via OpenClaw if needed

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Git plugin not committing | Check Settings → Obsidian Git → Auto commit interval is set |
| Git repo not initialized | Run `git init` in vault root via terminal |
| Push failing (auth) | Regenerate GitHub Personal Access Token with `repo` scope |
| Push failing (conflict) | Run `git pull --rebase origin main` then push again |
| OpenClaw-Memory folder empty | Check symlink: `ls -la /path/to/vault/Notes/OpenClaw-Memory` |
| Session State note stale | Update it manually or ask Ziggy to refresh it |
| Context window still bloating | Use `/compact` or start a new session in OpenClaw |
| Git history too large | Run `git gc --aggressive` in vault root |
| .gitignore not working | Make sure the file is at vault root, same level as 🏠base.md |

---

*This architecture ensures Ziggy never truly forgets, Nathan never loses work, and token costs stay minimal. The vault is the single source of truth. Git is the safety net. Session States are the bridge between conversations.*
