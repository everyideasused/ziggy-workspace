---
type: log
area: interests
status: active
tags:
  - log
  - bass
  - practice
  - music
week: 
date: <% tp.date.now("YYYY-MM-DD") %>
session_type: "<% await tp.system.suggester(["Lesson (Sunday)", "Practice (Tue/Thu)"], ["lesson", "practice"]) %>"
duration_minutes: 
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Learn Bass — Beginner to Badass|🎸 Bass Project]]

---

# Bass Practice — <% tp.date.now("YYYY-MM-DD") %>

**Week:** Week # (Module #)  
**Session Type:** `= this.session_type`  
**Duration:** `= this.duration_minutes` minutes

---

## 🎯 Today's Focus

<%* if (tp.frontmatter.session_type === "lesson") { %>
**Lesson(s) Covered:**
- Module #, Lesson #: 

**Key Concepts:**
- 

**New Techniques Learned:**
- 

<%* } else { %>
**Drills & Exercises:**
- 

**Playalongs Practiced:**
- 

**Songs/Riffs Worked On:**
- 

<%* } %>

---

## ✅ What Went Well

- 

---

## 🚧 Challenges & Struggles

- 

---

## 💡 Insights & Notes

- 

---

## 📹 Recording Notes
> If you recorded yourself today

- 

---

## 🎯 Next Session Goals

- 

---

<%* tR += "Created by: " + (tp.user?.agentName || "Ziggy") + " · AI: " + (tp.user?.modelName || "openrouter/moonshotai/kimi-k2.5"); %>
