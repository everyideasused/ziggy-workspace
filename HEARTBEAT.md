# HEARTBEAT.md

## Sunday Meal Planning Reminder

**On Sundays (day 0), around 10am-2pm:**
- Check if `Meal Plan - Current Week` has `week_of` field matching today (Sunday's date)
- If not updated yet: "🍽️ Time to plan this week's meals! I can create 10 suggestions from your Recipe Index — just say 'Let's plan meals' when ready."
- After Nathan picks meals and I generate grocery list: "🛒 Don't forget to shop today or tomorrow! [[Grocery List - Week of [Date]]]"

**Workflow:**
1. I update `Meal Plan - Current Week.md` with 10 diverse dinner suggestions (checkboxes)
2. Nathan checks off 4-7 recipes + assigns to days
3. Nathan says "Build grocery list" → I generate shopping list
4. Nathan shops (Sunday/Monday)
5. Nathan says "Add meals to daily notes" → I populate Sun-Sat journals

**How to check:**
- Is today Sunday? (date.getDay() === 0)
- Does `Meal Plan - Current Week` have `week_of: "YYYY-MM-DD"` matching today (Sunday)?
- If no, remind to plan

## Weekly Learning Log Prompt (Fridays)

**On Fridays, during afternoon heartbeat:**
- Review the week's sessions (scan `memory/` daily files for Mon-Fri)
- For each agent that was active this week, ask:
  - Did the agent struggle with any question? → Log it
  - Did Nathan correct or override the agent? → Log the correction
  - Did a question require KB content that didn't exist? → Log the gap
- Update each active agent's Learning Log in their Agent Registry profile section
- Format: `| YYYY-MM-DD | [Lesson] | [Source: session/correction/gap] |`

**If no learnings this week:** Skip silently. Don't create empty entries.

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
