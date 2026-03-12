---
type: meal-plan
area: household
week_of: "<% tp.date.now('YYYY-MM-DD') %>"
status: active
recipes: []
tags:
  - household
  - meal-plan
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Household Hub|Household Hub]] · [[Recipe Index|🍳 Recipes]]

---

# 📅 Meal Plan — Week of <% tp.date.now("MMMM D, YYYY") %>

**Week:** <% tp.date.now("YYYY-MM-DD") %>

---

## 🍽️ This Week's Dinners

<%*
// Generate date-tagged list items that the daily note dinner query can read
// Format: [date:: YYYY-MM-DD] **[[Recipe]]** | Cuisine | Time | Protein | Notes
const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let output = "";

// Calculate Monday of this week
const today = new Date(tp.date.now("YYYY"), tp.date.now("MM") - 1, tp.date.now("DD"));
const dayOfWeek = today.getDay(); // 0=Sun
const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

for (let i = 0; i < 7; i++) {
    const dateStr = tp.date.now("YYYY-MM-DD", mondayOffset + i);
    const dayName = dayNames[i];
    output += `- [date:: ${dateStr}] **[[]]** | cuisine | prep time | protein | ${dayName} notes\n`;
}

tR += output;
%>

> [!info] How to fill this in
> Replace each `**[[]]**` with a recipe link like `**[[Tofu Stir Fry]]**` and fill in the details after each `|` separator. The daily note's "Dinner Tonight" section reads this format automatically. Use `_Skipped_` for nights with no planned meal.

---

## 📝 Notes

- 

---

## 🔗 Quick Actions

- [[Recipe Index|Browse Recipe Index]]
- Generate grocery list: Ask Ziggy "Build grocery list for this week's meal plan"
- [[Grocery Lists|View All Grocery Lists]]

---

## 🔗 Related

- [[Recipe Index|🍳 Recipes]]
- [[Household Hub|Household Hub]]
- Grocery List: [[Grocery List - Week of <% tp.date.now("YYYY-MM-DD") %>]]

---

<%* tR += "Created by: " + (tp.user?.agentName || "Ziggy") + " · AI: " + (tp.user?.modelName || "anthropic/claude-sonnet-4-5-20250929"); %>
