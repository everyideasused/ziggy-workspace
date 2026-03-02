# HEARTBEAT.md

## Sunday Meal Planning Reminder

**On Sundays (day 0), around 10am-2pm:**
- Check if next week's meal plan exists
- If not, remind Nathan: "Time to plan next week's meals! Want to browse Recipe Index or research new recipes?"
- After meal plan is created, remind: "Don't forget to shop today or tomorrow! Grocery list: [[Grocery List - Week of [Date]]]"

**How to check:**
- Is today Sunday? (date.getDay() === 0)
- Does `Meal Plan - Week of [next Monday's date]` exist?
- If no, remind to plan

## Daily Checks (Rotate Through)

**2-4 times per day, rotate through:**
- Important emails?
- Calendar events in next 24-48h?
- Any urgent notifications?

**Track in:** `memory/heartbeat-state.json`

**When to stay quiet (HEARTBEAT_OK):**
- Late night (23:00-08:00) unless urgent
- Just checked <30 min ago
- Nothing new to report
