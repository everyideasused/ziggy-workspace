---
type: system
area: system
status: active
tags:
  - system
  - reference
  - rules
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# Vault Rules — Quick Reference
**Fast lookup for critical vault standards**

---

## 📋 Every Note Must Have

### 1. Complete YAML Frontmatter
```yaml
---
type: [note type]
area: [work/health/finances/household/interests/relationships/education/system]
status: [inbox/active/complete/archived/retired]
tags:
  - [at least one tag]
---
```

**All four fields required:** `type`, `area`, `status`, `tags`  
**No empty values** — especially `area:` must have a value

---

### 2. Navigation Header (First Line After Frontmatter)

**Daily notes (Journal/):**
```
> [[🏠base|🏠]] · [[YYYY-MM-DD|← Yesterday]] · [📅 Today](obsidian://daily) · [[YYYY-MM-DD|Tomorrow →]]
```

**System notes & Area Hubs:**
```
> [[🏠base|🏠]] · [📅 Today](obsidian://daily)
```

**Area-specific notes (most notes):**
```
> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Area Hub|Area Hub]]
```
Examples:
- Work notes: `[[Work Hub|Work Hub]]`
- Health notes: `[[Health Hub|Health Hub]]`
- Household notes: `[[Household Hub|Household Hub]]`

**Special context (workout logs):**
```
> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[V-Shape Calisthenics KB Program|🏋️ Program]]
```

**Critical:**
- ✅ **ONLY ONE** navigation header per note
- ✅ **Always** use `[📅 Today](obsidian://daily)` for Today link (dynamic)
- ✅ **Area notes link to their area hub** (one click back to context)
- ✅ Yesterday/Tomorrow in daily notes use static date wikilinks
- ❌ Never use static dates for Today link

---

### 3. Note Structure
```
---
frontmatter
---
[blank line]
> navigation header
[blank line]
---
[blank line]
# Note Title

Content starts here...
```

---

## 📁 Folder Rules

| Folder | Purpose | Rules |
|--------|---------|-------|
| `Journal/` | Daily notes only | Format: `YYYY-MM-DD.md` |
| `Notes/` | Everything else | Flat folder — no subfolders except `Fitness/Logs/` |
| `Templates/` | Templater templates | Never edit directly |
| `Attachments/` | Media files | Auto-organized by Obsidian |

**Exception:** `Notes/Fitness/Logs/` subfolder allowed for workout tracking.

---

## 🏷️ Type Values

| Type | Use For |
|------|---------|
| `daily` | Daily notes (Journal/) |
| `project` | Any project |
| `work-project` | Construction site/client project |
| `area-hub` | Area hub notes (Work Hub, Health Hub, etc.) |
| `meeting` | Meeting notes |
| `person` | People |
| `organization` | Companies/agencies |
| `item` | Physical items/subscriptions |
| `account` | Financial accounts |
| `bill` | Recurring bills |
| `habit` | Habit tracking |
| `goal` | Goals |
| `resource` | Reference material |
| `recipe` | Recipes |
| `workout` | Workout logs |
| `note` | General notes |
| `system` | System documentation |
| `database` | Database hubs |

---

## 🎯 Status Values

| Status | Meaning |
|--------|---------|
| `inbox` | Needs processing |
| `active` | Currently relevant |
| `complete` | Done, still reference-worthy |
| `archived` | No longer relevant |
| `retired` | (Items only) No longer owned |

---

## 🔍 Verification

**Check vault compliance:**
```bash
/Volumes/ziggy/openclaw-workspace/vault-audit-v2.sh
```

**Auto-fix issues:**
```bash
python3 /Volumes/ziggy/openclaw-workspace/fix-nav-headers.py
```

**When to check:**
- After creating multiple notes manually
- After imports
- Weekly during vault maintenance
- When Dataview queries show unexpected results

---

## 🚨 Common Mistakes to Avoid

1. ❌ Creating notes without frontmatter
2. ❌ Leaving `area:` empty or blank
3. ❌ Multiple navigation headers in one note
4. ❌ Using static dates for Today link: `[[2026-03-02|Today]]`
5. ❌ Creating subfolders in `Notes/` (except Fitness/Logs)
6. ❌ Forgetting tags in frontmatter
7. ❌ Navigation header not first line after frontmatter

---

## ✅ When Creating New Notes

**Quick checklist:**
- [ ] Created from template (or apply template)
- [ ] All frontmatter fields filled (type, area, status, tags)
- [ ] Navigation header present and correct format
- [ ] Proper structure (frontmatter → nav → separator → content)
- [ ] Linked to related notes with `[[wikilinks]]`

---

**See [[System Guide]] for detailed documentation.**
