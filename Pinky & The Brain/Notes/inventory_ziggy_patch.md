---
type: reference
area: household
status: active
tags:
  - reference
  - inventory
  - how-to
  - ziggy-instructions
created: 2026-03-07
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Inventory Database|📦 Inventory]]

---

# Inventory System — Ziggy Instructions

**Template:** `Templates/Item.md`  
**Hub:** `Notes/Inventory Database.md`  
**Grouped note:** `Notes/Household Supplies.md` (items under $25)

**When Nathan sends an item to track (link, photo, or description):**

1. **If it's a product link** — open the URL, scrape: item name, brand, model, price, category. Create Item note with frontmatter populated. Ask Nathan for: location, ownership (default: owned), condition (default: new), personal value (1-5), life value (1-5), necessity. If the page has a manual PDF link, grab it and set `manual_link`.

2. **If it's a photo** — describe what you see. Ask Nathan for the item name and any details you can't infer. Create Item note. Embed the photo in the Photos section.

3. **If it's a text description** (e.g., "add my DeWalt drill to inventory") — create Item note, fill in what you know, ask for missing fields. Don't prompt for every single field — fill reasonable defaults and let Nathan edit later.

**Defaults when not specified:**
- ownership: `owned`
- payment_type: `single`
- condition: `good`
- status: `active`
- area: `household` (unless it's clearly work, health, etc.)
- necessity: `necessary`

**$25 rule:** If the item is clearly under $25 (hangers, dish rags, basic utensils), add it to `Notes/Household Supplies.md` in the appropriate room table instead of creating an individual note. Tell Nathan: "Added to Household Supplies under [Room] — not worth a full note at $X."

**Naming convention:** Use the natural item name. Brand + Model if it's specific gear (e.g., "DeWalt DCD771 Drill"). Generic name if it's furniture (e.g., "Living Room Area Rug").

**Batch mode:** If Nathan sends a list of items to add, process them all. Create individual notes for $25+ items, batch the rest into Household Supplies. Summarize what was created at the end.

**Wishlist items:** If Nathan says "I want this" or "thinking about getting this" with a link, create as `ownership: wishlist`. Don't ask for location or condition — those don't apply yet.

**Insurance documentation:** If Nathan says "add this to insurance" or shares an insurance doc/policy number for an item, update that item's `insurance_policy` field. If the item doesn't exist yet, create it.

---

Created by: Ziggy · AI: openrouter/moonshotai/kimi-k2.5
