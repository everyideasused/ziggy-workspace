---
type: resource
area: system
created: 2026-03-02
updated: 2026-03-02
tags:
  - templater
  - app-development
  - setup-guide
---

> [[🏠base|🏠]] · [[Templates]]

# ⚡ Templater Setup Guide — New App Build

This guide walks you through setting up Templater to generate app specification projects with one click.

---

## What You Get

After setup, you can:
1. Press a hotkey or click a button
2. Enter your app name (e.g., "Splitly")
3. Get a complete project folder with pre-filled spec ready to edit

---

## Prerequisites

1. **Templater plugin installed** (Community Plugins)
2. **QuickAdd plugin installed** (Optional but recommended)

---

## Installation

### Step 1: Install Templater

1. Open Obsidian → Settings → Community Plugins
2. Turn off Safe Mode (if on)
3. Click **Browse**
4. Search **"Templater"** → Install → Enable

### Step 2: Configure Templater

1. Settings → Templater
2. Set **Template folder location**: `Templates`
3. Enable **Trigger Templater on new file creation** (optional)
4. Close settings

### Step 3: Test the Template

1. Create a new note anywhere
2. Open Command Palette (`Cmd+P`)
3. Type **"Templater: Open Insert Template Modal"**
4. Select **"New App Build"**
5. Enter app name when prompted
6. ✨ Project created!

---

## Optional: Add QuickAdd Macro (One-Click Creation)

This adds a lightning bolt button to your toolbar for instant access.

### Install QuickAdd

1. Settings → Community Plugins → Browse
2. Search **"QuickAdd"** → Install → Enable

### Create the Macro

1. Settings → QuickAdd
2. Click **Manage Macros** → **Add Macro**
3. Name it: `New App Build`
4. Click **Add Step** → Choose **Template**
5. Configure:
   - **Template path**: `Templates/New App Build.md`
   - **Create in folder**: `01-Projects` (or wherever you keep projects)
   - **File name format**: `{{VALUE:appName}}/{{VALUE:appName}} — App Spec`
6. Click **Add Choice** → Save

### Add to Toolbar

1. In QuickAdd settings, find your macro
2. Click the **⚡** icon next to it
3. Choose an icon (suggestion: `zap` or `rocket`)
4. Now it appears in your left sidebar!

---

## Usage

### Method 1: Command Palette (Always works)
1. `Cmd+P` → "Templater: Insert Template"
2. Select "New App Build"
3. Enter app name
4. Enter short code (for tags)
5. Project folder + spec created automatically

### Method 2: QuickAdd Button (if set up)
1. Click ⚡ icon in sidebar
2. Enter app name
3. Done!

---

## What Gets Created

For app name "Splitly":

```
01-Projects/
└── Splitly/
    └── Splitly — App Spec.md   ← Your editable spec
```

The spec includes:
- ✅ Frontmatter with dates, status, tags
- ✅ All 7 phases (Vision → Launch)
- ✅ Tables for structured data (tech stack, KPIs, etc.)
- ✅ Required field markers (⚠️)
- ✅ Links to related resources

---

## Alternative: Plain Markdown Template

Don't want to set up Templater? Use the backup:
- **[[App Specification Template]]** — Copy, paste, fill manually

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Template not showing | Check Templater folder path in settings |
| Prompts not appearing | Ensure `tp.system.prompt()` syntax is correct |
| Files not creating | Check vault folder permissions |
| App name not saving | Make sure to fill both prompts (name + short code) |

---

## Related Files

| File | Purpose |
|------|---------|
| [[New App Build]] | The Templater script itself |
| [[App Specification Template]] | Plain markdown backup |
| [[App Blueprint Generator (React)]] | Interactive React version |
| [[App Blueprint Generator (Standalone HTML)]] | Offline HTML tool |

---

*Need help? Ask me (Ziggy) in chat.*