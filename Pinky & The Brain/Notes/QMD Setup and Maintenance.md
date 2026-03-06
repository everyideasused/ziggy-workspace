---
type: documentation
area: system
status: active
tags:
  - system
  - openclaw
  - qmd
  - memory
  - maintenance
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Ziggy Hub|Ziggy Hub]]

---

# QMD — Setup & Maintenance Guide

*How the QMD memory backend works, how it was installed, and how to maintain it going forward.*

*Installed: 2026-03-06 | Node: v25.6.1 | QMD: v1.0.7*

---

## What QMD Is

QMD replaces OpenClaw's built-in SQLite memory indexer with a local-first search sidecar that combines BM25 keyword search + vector semantic search + LLM re-ranking. All models run locally via `node-llama-cpp` on Metal GPU — no external API calls for search.

**Why it matters for this vault:** QMD indexes the full Obsidian vault (300+ notes) plus all OpenClaw memory files, making every note semantically searchable by all 9 agents via `memory_search`.

---

## Architecture

```
OpenClaw gateway
      ↓
memory.backend = "qmd"
      ↓
/opt/homebrew/bin/qmd  (Node v25, npm-installed)
      ↓
~/.openclaw/agents/<agentId>/qmd/  (per-agent XDG dirs)
      ↓
Collections:
  memory-root-<id>  →  MEMORY.md
  memory-alt-<id>   →  memory.md
  memory-dir-<id>   →  openclaw-workspace/memory/**/*.md
  vault-<id>        →  Pinky & The Brain/**/*.md
```

**Models (auto-downloaded to `~/.cache/qmd/models/`):**

| Model | Purpose | Size |
|-------|---------|------|
| embeddinggemma-300M-Q8_0 | Vector embeddings | ~328 MB |
| qwen3-reranker-0.6b-q8_0 | Re-ranking results | ~640 MB |
| qmd-query-expansion-1.7B-q4_k_m | Query expansion | ~1.1 GB |

---

## Installation Record

### Why npm, not bun

QMD was installed via `npm install -g @tobilu/qmd` under Node v25.6.1, **not** `bun install -g`. The reason: OpenClaw runs Node v25.6.1, but Bun has its own internal Node runtime that compiled `better-sqlite3` against a different module version (NODE_MODULE_VERSION 127 vs 141 required). The Bun-installed QMD would crash on every OpenClaw boot.

**Always use npm to install or update QMD.**

### Key paths

| Item | Path |
|------|------|
| QMD binary | `/opt/homebrew/bin/qmd` |
| npm global packages | `/opt/homebrew/lib/node_modules/@tobilu/qmd` |
| Node v25 binary | `/opt/homebrew/Cellar/node/25.6.1/bin/node` |
| QMD model cache | `~/.cache/qmd/models/` |
| QMD index (agent: main) | `~/.openclaw/agents/main/qmd/xdg-cache/qmd/index.sqlite` |
| LaunchAgent plist | `~/Library/LaunchAgents/ai.openclaw.gateway.plist` |

---

## openclaw.json Config Block

The `memory` block lives at the top level of `~/.openclaw/openclaw.json`:

```json
"memory": {
  "backend": "qmd",
  "citations": "auto",
  "qmd": {
    "command": "/opt/homebrew/bin/qmd",
    "includeDefaultMemory": true,
    "update": {
      "interval": "5m",
      "debounceMs": 15000,
      "onBoot": true,
      "waitForBootSync": false
    },
    "limits": {
      "maxResults": 8,
      "timeoutMs": 5000
    },
    "paths": [
      {
        "name": "vault",
        "path": "/Volumes/ziggy/openclaw-workspace/Pinky & The Brain",
        "pattern": "**/*.md"
      }
    ],
    "scope": {
      "default": "allow"
    }
  }
}
```

---

## How to Update QMD

When a new QMD version is released:

```bash
# Step 1 — install new version under Node v25
export PATH="/opt/homebrew/Cellar/node/25.6.1/bin:$PATH"
npm install -g @tobilu/qmd

# Step 2 — verify the binary
/opt/homebrew/bin/qmd --version

# Step 3 — re-index (new versions may change chunking or schema)
export XDG_CONFIG_HOME="/Volumes/ziggy/Users/ziggy/.openclaw/agents/main/qmd/xdg-config"
export XDG_CACHE_HOME="/Volumes/ziggy/Users/ziggy/.openclaw/agents/main/qmd/xdg-cache"
qmd update
qmd embed

# Step 4 — restart gateway
kill $(ps aux | grep openclaw-gateway | grep -v grep | awk '{print $2}') && sleep 3 && openclaw gateway & disown

# Step 5 — verify clean boot
sleep 10 && openclaw logs | grep -i qmd | tail -20
# Should show: "qmd memory startup initialization armed" for all 9 agents, no errors
```

**Never use `bun install -g @tobilu/qmd` — it will break OpenClaw's Node compatibility.**

---

## How to Re-index After Vault Changes

QMD auto-updates every 5 minutes via the `update.interval` setting. For a forced manual refresh:

```bash
export XDG_CONFIG_HOME="/Volumes/ziggy/Users/ziggy/.openclaw/agents/main/qmd/xdg-config"
export XDG_CACHE_HOME="/Volumes/ziggy/Users/ziggy/.openclaw/agents/main/qmd/xdg-cache"

# Re-index file list
qmd update

# Re-embed any new/changed files
qmd embed

# Check status
qmd status
```

You'll see per-collection stats: new files indexed, vectors embedded, timestamps updated.

---

## Health Check

```bash
# Quick status
/opt/homebrew/bin/qmd status

# Test a search (uses the agent:main XDG dirs)
export XDG_CONFIG_HOME="/Volumes/ziggy/Users/ziggy/.openclaw/agents/main/qmd/xdg-config"
export XDG_CACHE_HOME="/Volumes/ziggy/Users/ziggy/.openclaw/agents/main/qmd/xdg-cache"
qmd query "test query" --json | head -20

# Check gateway is using qmd (no errors = good)
openclaw logs | grep -i qmd | tail -20
```

**Healthy output looks like:**
- `qmd memory startup initialization armed for agent "main"` (repeated for all 9 agents)
- No `qmd boot update failed` or `ERR_DLOPEN_FAILED` lines after the last boot timestamp

---

## Troubleshooting

### `ERR_DLOPEN_FAILED` / NODE_MODULE_VERSION mismatch

QMD was installed with the wrong Node version. Fix:

```bash
export PATH="/opt/homebrew/Cellar/node/25.6.1/bin:$PATH"
npm install -g @tobilu/qmd
```

Then restart the gateway.

### `qmd boot update failed: unable to open database file`

XDG directories don't exist yet. Fix:

```bash
mkdir -p "/Volumes/ziggy/Users/ziggy/.openclaw/agents/main/qmd/xdg-config"
mkdir -p "/Volumes/ziggy/Users/ziggy/.openclaw/agents/main/qmd/xdg-cache"
```

Then restart the gateway.

### Gateway not starting / `connect ECONNREFUSED`

```bash
openclaw gateway & disown
sleep 5 && openclaw status
```

### QMD binary not found on PATH at boot

The LaunchAgent plist at `~/Library/LaunchAgents/ai.openclaw.gateway.plist` already includes `/opt/homebrew/bin` in its PATH. If QMD is ever re-installed to a different location, update the `command` key in `openclaw.json` to the full absolute path.

### Index is stale / missing new vault files

```bash
export XDG_CONFIG_HOME="/Volumes/ziggy/Users/ziggy/.openclaw/agents/main/qmd/xdg-config"
export XDG_CACHE_HOME="/Volumes/ziggy/Users/ziggy/.openclaw/agents/main/qmd/xdg-cache"
qmd update && qmd embed
```

---

## Collections Reference

| Collection | Source | Files |
|------------|--------|-------|
| `memory-root-main` | `openclaw-workspace/MEMORY.md` | 1 |
| `memory-alt-main` | `openclaw-workspace/memory.md` | 1 |
| `memory-dir-main` | `openclaw-workspace/memory/**/*.md` | ~53 daily logs |
| `vault-main` | `Pinky & The Brain/**/*.md` | ~300 vault notes |

Each agent gets its own set of collections (suffix changes from `-main` to `-<agentId>`). They all point to the same source files but maintain separate indexes under `~/.openclaw/agents/<agentId>/qmd/`.

---

## Maintenance Schedule

**Weekly (during Weekly Review):**
- Run `qmd status` — check file count and last-updated timestamp
- Verify log is clean: `openclaw logs | grep -i "qmd.*failed" | tail -5`

**When updating OpenClaw:**
- After any `openclaw update`, restart the gateway and check logs for QMD errors
- If Node version changes in a future OpenClaw release, may need to reinstall QMD

**When adding large vault sections:**
- Force a manual re-index: `qmd update && qmd embed`
- New files auto-index within 5 minutes otherwise

---

## Related

- [[Ziggy Hub|Ziggy Hub]]
- [[System Guide|System Guide]]

---

Created by: Ziggy · AI: anthropic/claude-sonnet-4-5-20250929
