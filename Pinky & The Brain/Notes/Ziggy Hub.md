---
type: system
area: system
status: active
tags:
  - system
  - ziggy
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# 🤖 Ziggy Hub
## AI Conversation Saves, Research & Drafts

---

## 🧠 System Context
> *This is Ziggy's brain. Paste this into any new AI conversation for full vault awareness.*

- [[Ziggy System Context]] — **Complete vault schema, rules, frontmatter specs, and behavioral instructions**
- [[Ziggy Email Bridge Architecture]] — **Smartsheet → Proton Mail → Obsidian pipeline**

---

## 📝 Active Drafts
> *Notes being worked on with Claude. Move to their proper home when complete.*

```dataview
TABLE WITHOUT ID
	file.link AS "Draft",
	dateformat(file.mday, "MM/dd") AS "Updated",
	tags AS "Tags"
FROM "Notes"
WHERE contains(tags, "ziggy") AND contains(tags, "draft")
SORT file.mday DESC
```

---

## 💾 Save States
> *Conversation snapshots and outputs worth keeping for reference.*

```dataview
TABLE WITHOUT ID
	file.link AS "Save",
	dateformat(file.cday, "MM/dd") AS "Saved",
	tags AS "Topic"
FROM "Notes"
WHERE contains(tags, "ziggy") AND contains(tags, "save-state")
SORT file.cday DESC
```

---

## 🔬 Research
> *Research outputs from sessions.*

```dataview
TABLE WITHOUT ID
	file.link AS "Research",
	dateformat(file.cday, "MM/dd") AS "Date",
	area AS "Area"
FROM "Notes"
WHERE contains(tags, "ziggy") AND contains(tags, "research")
SORT file.cday DESC
```

---

```markdown
## 🧠 Memory Architecture
> *How Ziggy remembers across sessions. Git save states + staged context injection.*

- [[Ziggy Memory Architecture]] — Full memory system documentation (git, session states, OpenClaw symlink)
- [[Ziggy Session State]] — Auto-updated session state (written by `/new` hook)
- [[Ziggy Session Log]] — Running log of all sessions (auto-appended by `/new` hook)
```

---
## 📌 How to Use Ziggy

**Saving a conversation output:**
1. Create a new note in `Notes/` folder
2. Use the Quick Capture template
3. Add tags: `ziggy`, `save-state` (or `draft` or `research`)
4. Paste the content
5. It will appear here automatically

**When a draft is finished:**
1. Remove the `ziggy` and `draft` tags
2. Assign the proper `type`, `area`, and `status` in frontmatter
3. It moves out of Ziggy and into its proper home in the vault
