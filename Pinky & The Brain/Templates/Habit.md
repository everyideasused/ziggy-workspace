---
type: habit
area: "<% await tp.system.suggester(["Health", "Work", "Relationships", "Household", "Interests", "Education", "Finances"], ["health", "work", "relationships", "household", "interests", "education", "finances"]) %>"
frequency: "<% await tp.system.suggester(["Daily", "Weekdays only", "3x per week", "2x per week", "Weekly"], ["daily", "weekdays", "3x-week", "2x-week", "weekly"]) %>"
target_per_day: <% await tp.system.prompt("How many times per day? (1 if just once)") %>
streak: 0
best_streak: 0
start_date: <% tp.date.now("YYYY-MM-DD") %>
status: active
tags:
  - habit
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[<%* 
const areaHubs = {
  "health": "Health Hub",
  "work": "Work Hub",
  "relationships": "Relationships Hub",
  "household": "Household Hub",
  "interests": "Interests Hub",
  "education": "Education Hub",
  "finances": "Finances Hub"
};
const area = tp.file.frontmatter.area;
const hub = areaHubs[area] || "Health Hub";
tR += hub + "|" + hub;
%>]]

---

# <% tp.file.title %>

**Frequency:** `= this.frequency` | **Target/day:** `= this.target_per_day` | **Started:** `= this.start_date`
**Current streak:** `= this.streak` | **Best streak:** `= this.best_streak`

---

## 📝 Why This Habit Matters
> *What's the reason behind this? What does it support?*



---

## 📊 Tracking
> *Update `streak` in frontmatter when you check in. Reset to 0 if you miss a scheduled day. Update `best_streak` when you beat it.*

### Recent History
> *Optional: log notable days, milestones, or breaks.*

| Date | Done? | Notes |
|------|-------|-------|
| | ✅ / ❌ | |

---

## 🔗 Related
- 

---

<%* tR += "Created by: " + (tp.user?.agentName || "Ziggy") + " · AI: " + (tp.user?.modelName || "anthropic/claude-sonnet-4-5-20250929"); %>
