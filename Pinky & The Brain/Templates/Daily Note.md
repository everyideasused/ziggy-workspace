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
%>

---

## 🍽️ Dinner Tonight

**Planned:** 
- Recipe: 
- Prep time: 
- Protein: 

**Made:** ✅ / ❌
**Rating (1-5):** ⭐⭐⭐⭐⭐

**Notes:**
- 

---

## ✅ Tasks

### Today
- [ ] 

### Scheduled (Due Today)
```dataview
TASK
FROM "Notes" OR "Journal"
WHERE !completed AND due AND due = date("<% tp.date.now('YYYY-MM-DD') %>")
```

### Overdue
```dataview
TASK
FROM "Notes" OR "Journal"
WHERE !completed AND due AND due < date("<% tp.date.now('YYYY-MM-DD') %>")
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
- [ ] 🥩 Protein (150g+)
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
