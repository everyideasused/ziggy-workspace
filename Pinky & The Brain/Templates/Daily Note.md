---
type: daily
area: health
date: <% tp.date.now("YYYY-MM-DD") %>
status: active
tags:
  - daily
---

> [[🏠base|🏠]] · [[<% tp.date.now("YYYY-MM-DD", -1) %>|← Yesterday]] · [📅 Today](obsidian://daily) · [[<% tp.date.now("YYYY-MM-DD", 1) %>|Tomorrow →]]

---

# <% tp.date.now("dddd, MMMM D, YYYY") %>

---

<%*
// ── Workout Schedule Calculator ──
// Program starts Mon Mar 2, 2026. Alternating 2-week rotation.
// Week 1: Mon=A Tue=B1 Wed=C Thu=B2 Fri=A Sat=B1 Sun=Rest
// Week 2: Mon=C Tue=B2 Wed=A Thu=B1 Fri=C Sat=B2 Sun=Rest

const programStart = new Date(2026, 2, 2); // Mar 2, 2026
const today = new Date(tp.date.now("YYYY"), tp.date.now("MM") - 1, tp.date.now("DD"));
const dayOfWeek = today.getDay(); // 0=Sun, 1=Mon...6=Sat

let workoutText = "";

if (today < programStart) {
    workoutText = "## 🏋️ Workout\n> **Program starts March 2nd.** Rest and prep today.";
} else if (dayOfWeek === 0) {
    workoutText = "## 🏋️ Workout\n> **🟢 Rest Day** — Walk, stretch, mobility. No training today.";
} else {
    const diffDays = Math.floor((today - programStart) / (1000 * 60 * 60 * 24));
    const weekInCycle = Math.floor(diffDays / 7) % 2; // 0 = Week 1, 1 = Week 2

    const schedule = {
        0: { // Week 1 (even weeks)
            1: { day: "A", name: "Upper Push", template: "Workout Day A", focus: "Pecs · Shoulders · Triceps" },
            2: { day: "B1", name: "Lower (Glute/Quad)", template: "Workout Day B1", focus: "Glutes · Quads" },
            3: { day: "C", name: "Upper Pull + Arms", template: "Workout Day C", focus: "Back Width · Biceps" },
            4: { day: "B2", name: "Lower (Posterior Chain)", template: "Workout Day B2", focus: "Glutes · Hamstrings" },
            5: { day: "A", name: "Upper Push", template: "Workout Day A", focus: "Pecs · Shoulders · Triceps" },
            6: { day: "B1", name: "Lower (Glute/Quad)", template: "Workout Day B1", focus: "Glutes · Quads" },
        },
        1: { // Week 2 (odd weeks)
            1: { day: "C", name: "Upper Pull + Arms", template: "Workout Day C", focus: "Back Width · Biceps" },
            2: { day: "B2", name: "Lower (Posterior Chain)", template: "Workout Day B2", focus: "Glutes · Hamstrings" },
            3: { day: "A", name: "Upper Push", template: "Workout Day A", focus: "Pecs · Shoulders · Triceps" },
            4: { day: "B1", name: "Lower (Glute/Quad)", template: "Workout Day B1", focus: "Glutes · Quads" },
            5: { day: "C", name: "Upper Pull + Arms", template: "Workout Day C", focus: "Back Width · Biceps" },
            6: { day: "B2", name: "Lower (Posterior Chain)", template: "Workout Day B2", focus: "Glutes · Hamstrings" },
        }
    };

    const w = schedule[weekInCycle][dayOfWeek];
    workoutText = `## 🏋️ Workout — Day ${w.day}: ${w.name}\n> *${w.focus}*\n> Create session note from template: **${w.template}**\n\n- **Session note:** [[${tp.date.now("YYYY-MM-DD")} Workout]]\n- **Bodyweight:** lbs\n- **Protein hit?** ✅ / ❌`;
}

tR += workoutText;

// ── Sunday Smoothie Prep Reminder ──
if (dayOfWeek === 0) {
    tR += `\n\n---\n\n## 🥤 Sunday Smoothie Prep\n> **Weekly meal prep for [[Ultimate Vegan Micronutrient Smoothie]]** — Batch prep for 5-7 smoothies (~30 min)\n\n**Tasks:**\n- [ ] Make dry mix jar (hemp, sunflower, flax, nooch, spirulina, lecithin, dulse)\n- [ ] Prep 7 frozen fruit bags (banana + kiwi + blueberries per bag)\n- [ ] Cut tofu blocks (600g → 4 portions, store in water)\n- [ ] Restock pantry items (pumpkin, kale, tahini, brazil nuts, soy milk)\n\n**See full prep guide:** [[Ultimate Vegan Micronutrient Smoothie#🗓️ Batch Prep System (Sunday Meal Prep)|Batch Prep System]]`;
}
%>

---

## 🍽️ Dinner Tonight

```dataviewjs
// Auto-pull today's meal from active meal plan
const today = dv.current().date;
const mealPlan = dv.page("Meal Plan - Current Week");

if (!mealPlan) {
    dv.paragraph("**No active meal plan found.**");
} else {
    // Find today's meal from the meal plan's date-tagged list
    const meals = mealPlan.file.lists.filter(l => {
        if (!l.date) return false;
        const mealDate = l.date instanceof Date ? luxon.DateTime.fromJSDate(l.date) : l.date;
        return mealDate.hasSame(today, 'day');
    });
    
    if (meals.length > 0) {
        const meal = meals[0];
        const text = meal.text;
        
        // Parse the meal entry (format: **[[Recipe]]** | Cuisine | Time | Protein | Notes)
        const parts = text.split('|').map(p => p.trim());
        
        if (text.includes('_Skipped') || text.includes('skipped')) {
            dv.paragraph("**Planned:** _No meal scheduled for today_");
        } else if (parts.length >= 4) {
            const recipeName = text.match(/\[\[(.*?)\]\]/)?.[1] || "Unknown";
            const cuisine = parts[1] || "";
            const time = parts[2] || "";
            const protein = parts[3] || "";
            const notes = parts[4] || "";
            
            dv.paragraph(`**Planned:**\n- Recipe: [[${recipeName}]]\n- Cuisine: ${cuisine} | Prep time: ${time} | Protein: ${protein}\n- Notes: ${notes}`);
        } else {
            dv.paragraph(`**Planned:** ${text}`);
        }
    } else {
        dv.paragraph("**Planned:** _No meal scheduled for today_");
    }
}
```

**Made:** ✅ / ❌  
**Rating (1-5):** ⭐⭐⭐⭐⭐

**Cooking notes:**
- 

---

## ✅ Tasks

### Today
- [ ] 

### Scheduled (Due Today)
```dataview
TASK
WHERE !completed 
  AND due 
  AND due = this.file.day
SORT priority DESC
```

### Overdue
```dataview
TASK
WHERE !completed 
  AND due 
  AND due < this.file.day
SORT due ASC
```

### Upcoming (Next 7 Days)
```dataview
TASK
WHERE !completed 
  AND due 
  AND due > this.file.day 
  AND due <= this.file.day + dur(7 days)
SORT due ASC
```

<%*
// Show weekly preview on Mondays
const dayCheck = new Date(tp.date.now("YYYY"), tp.date.now("MM") - 1, tp.date.now("DD")).getDay();
if (dayCheck === 1) {
    tR += `### 📋 This Week at a Glance
\`\`\`dataview
TASK
FROM "Notes" OR "Journal"
WHERE !completed AND due AND due >= date("${tp.date.now('YYYY-MM-DD')}") AND due <= date("${tp.date.now('YYYY-MM-DD', 7)}")
SORT due ASC
\`\`\`
`;
}
%>

---

## 🔁 Habits

```dataview
TABLE WITHOUT ID
	file.link AS "Habit",
	streak AS "Current Streak",
	frequency AS "Freq"
FROM "Notes"
WHERE type = "habit" AND status = "active"
SORT file.name ASC
```

**Today's check-in:**
- [ ] 💧 Water (75+ oz)
- [ ] 🌯 Protein (150g+)
- [ ] 😴 Sleep (7+ hrs last night)

---

## 💼 Work Log
> *Quick summary of client/project work today. Link to project notes.*

| Client | Project | What I Did | Hours |
|--------|---------|-----------|-------|
| | | | |

---

## 📝 Notes
> *Anything else on your mind. Capture it, tag it, process it later.*



---

## 🌙 End of Day
- **Energy today (1-5):** 
- **One win:** 
- **One thing to improve:**

---

<%* tR += "Created by: " + (tp.user?.agentName || "Ziggy") + " · AI: " + (tp.user?.modelName || "anthropic/claude-sonnet-4-6"); %> 
