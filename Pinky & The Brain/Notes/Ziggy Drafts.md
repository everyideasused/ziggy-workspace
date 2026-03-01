---
type: system
area: 
status: active
tags:
  - system
  - ziggy
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Ziggy Hub|🤖 Ziggy]]

---

# 📝 Ziggy Drafts
## Active Drafts Being Worked On

```dataview
TABLE WITHOUT ID
	file.link AS "Draft",
	area AS "Area",
	dateformat(file.mday, "MM/dd") AS "Last Touched"
FROM "Notes"
WHERE contains(tags, "ziggy") AND contains(tags, "draft")
SORT file.mday DESC
```

---

## How to Save a Draft

1. Create a note in `Notes/`
2. Use **Quick Capture** template
3. Add tags: `ziggy`, `draft` in frontmatter
4. Paste or write the content
5. When finished, remove `ziggy` and `draft` tags, assign proper type/area/status
