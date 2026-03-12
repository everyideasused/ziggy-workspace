---
type: hub
area: system
status: active
tags:
  - hub
  - system
  - vault
  - meta
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# System Hub

> **Vault documentation, system guides, and Ziggy infrastructure.**

---

## 📖 Vault Documentation

| Note | Purpose |
|------|---------|
| [[System Guide]] | Complete vault rules and structure |
| [[System Guide]] | Complete vault rules and standards |
| [[Tags Reference]] | Tag taxonomy and usage |
| [[Vault Enhancements - March 2026]] | Recent improvements |

---

## 👤 User Onboarding

| Note | Purpose |
|------|---------|
| [[Getting Started]] | First-time user guide |
| [[Human Guide]] | How to work with Ziggy |
| [[Dashboard]] | Quick stats and overview |

---

## 🤖 Ziggy Infrastructure

| Note | Purpose |
|------|---------|
| [[Ziggy Hub]] | Main Ziggy hub |
| [[System Guide]] | System context and capabilities |
| SOUL.md | Identity, routing, rules (workspace root) |
| [[Ziggy Session Log]] | Session history |
| [[Ziggy Drafts]] | Work in progress |
| SOUL.md | Identity, routing, rules (workspace root) |

---

## 🏗️ Agent System

| Agent | Session State | Memory |
|-------|---------------|--------|
| Atlas | [[Atlas Session State]] | [[ATLAS_MEMORY]] |
| Compass | [[Compass Session State]] | [[COMPASS_MEMORY]] |
| Forge | [[Forge Session State]] | [[FORGE_MEMORY]] |
| Hammer | [[Hammer Session State]] | [[HAMMER_MEMORY]] |
| Iron | [[Iron Session State]] | [[IRON_MEMORY]] |
| Ledger | [[Ledger Session State]] | [[LEDGER_MEMORY]] |
| Sage | [[Sage Session State]] | [[SAGE_MEMORY]] |
| Spin | [[Spin Session State]] | [[SPIN_MEMORY]] |
| Tally | [[Tally Session State]] | [[TALLY_MEMORY]] |

---

## 🔧 System Maintenance

### Security Tasks

- [ ] 🔐 Quarterly Credential Rotation 📅 2026-06-08 🔁 every 3 months
- [ ] 🔐 Implement agent-scoped exec permissions (see [[Agent Registry]] security section) 📅 2026-04-07

**Rotation Checklist:**

| Credential | Location | How to Rotate |
|---|---|---|
| GitHub Personal Access Token | macOS Keychain | GitHub → Settings → Developer Settings → Tokens → Regenerate |
| NoteDiscovery password | `~/.openclaw/secrets/notediscovery.txt` | Change in NoteDiscovery container config + update secrets file |
| Spotify OAuth token | `~/.openclaw/spotify_cache.json` | Delete cache file → re-run `ziggy-spotify` to trigger re-auth |
| OpenRouter API key | OpenClaw config | Regenerate at openrouter.ai → update `~/.openclaw/openclaw.json` |

---

## 📋 Related Hubs

- [[Ziggy Hub]] — AI conversation archive
- [[Archives Hub]] — Completed work

---

*Created: 2026-03-06*  
*Updated: 2026-03-08 (Security tasks added)*  
*Created by: Ziggy · AI: anthropic/claude-sonnet-4-5-20250929*
