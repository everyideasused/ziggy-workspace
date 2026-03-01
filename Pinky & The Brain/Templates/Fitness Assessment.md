---
type: assessment
area: health
date: <% tp.date.now("YYYY-MM-DD") %>
mesocycle: <% await tp.system.prompt("Mesocycle number just completed") %>
status: active
tags:
  - assessment
  - health
  - fitness
  - v-shape
---

> [[🏠base|🏠]] · [[<% tp.date.now("YYYY-MM-DD") %>|📅 Today]] · [[V-Shape Calisthenics KB Program|🏋️ Program]]

---

# Mesocycle <% await tp.system.prompt("Mesocycle number") %> Assessment — <% tp.date.now("MMMM D, YYYY") %>

## Performance Benchmarks

| Test | Previous | Current | Change | Target Next Cycle |
|------|----------|---------|--------|-------------------|
| Max push-ups (1 set) | | | | |
| Max pike push-ups (1 set) | | | | |
| Max pull-ups (1 set) | | | | |
| Max chin-ups (1 set) | | | | |
| Max BW hip thrusts (1 set) | | | | |
| KB goblet squat max reps | | | | |
| KB press max reps/side | | | | |
| KB swing max reps (1 min) | | | | |
| Dead hang hold (sec) | | | | |
| Wall sit hold (sec) | | | | |

## Body Measurements

| Measurement | Previous | Current | Change |
|-------------|----------|---------|--------|
| Chest (nipple line) | | | |
| Shoulders (widest) | | | |
| Waist (at navel) | | | |
| Hips/Glutes (widest) | | | |
| Upper arm L (flexed) | | | |
| Upper arm R (flexed) | | | |
| Thigh L (mid) | | | |
| Thigh R (mid) | | | |
| **Shoulder-to-Waist Ratio** | | | |

## Progress Photos Taken
- [ ] Front relaxed
- [ ] Front double bicep
- [ ] Side chest
- [ ] Back lat spread
- [ ] Rear glute pose

## Weight Trend This Cycle

| Week | Weight | Change |
|------|--------|--------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| **Net Change** | | |
| **Avg/Week** | | |

**On track for quarterly target?** 

## Nutrition Compliance This Cycle
- **Avg protein compliance:** /7 days per week
- **Avg water compliance:** /7 days per week
- **Avg sleep:** hrs
- **Weight trend:** (gaining / maintaining / losing)

## Workout Stats This Cycle
```dataview
TABLE WITHOUT ID
	file.link AS "Session",
	workout AS "Day",
	session_rpe AS "RPE",
	bodyweight AS "Weight"
FROM "Notes"
WHERE type = "workout" AND mesocycle = this.mesocycle AND contains(tags, "v-shape")
SORT date ASC
```

## Ziggy Analysis
> *Paste your logs and this assessment into a conversation with Ziggy and ask for mesocycle analysis and next cycle plan.*

**Ziggy's Recommendations:**


## My Notes / Adjustments


---

> *Update the [[V-Shape Calisthenics KB Program]] project note: measurements table, benchmarks table, weight tracking, and mesocycle targets for next cycle.*
