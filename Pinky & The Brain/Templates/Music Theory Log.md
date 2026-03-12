---
type: log
area: interests
status: active
tags:
  - log
  - music-theory
  - learning
week: 
date: <% tp.date.now("YYYY-MM-DD") %>
session_type: "<% await tp.system.suggester(["Theory Lecture", "Practice & Exercises", "Ear Training", "Analysis Work"], ["lecture", "practice", "ear-training", "analysis"]) %>"
duration_minutes: 
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Learn Music Theory — Comprehensive|🎼 Music Theory Project]]

---

# Music Theory — <% tp.date.now("YYYY-MM-DD") %>

**Week:** Week # (Phase #)  
**Session Type:** `= this.session_type`  
**Duration:** `= this.duration_minutes` minutes

---

## 🎯 Today's Focus

<%* if (tp.frontmatter.session_type === "lecture") { %>
**Allen Course:**
- Part #: 

**Key Concepts Covered:**
- 

**Examples/Demonstrations:**
- 

<%* } else if (tp.frontmatter.session_type === "practice") { %>
**Exercises Completed:**
- musictheory.net: 
- teoria.com: 
- MuseScore work: 

**Drills:**
- 

<%* } else if (tp.frontmatter.session_type === "ear-training") { %>
**Intervals Practiced:**
- 

**Chords Practiced:**
- 

**Accuracy:**
- 

<%* } else { %>
**Song/Piece Analyzed:**
- 

**Analysis Focus:**
- Key: 
- Chord progression: 
- Notable techniques: 

<%* } %>

---

## ✅ What Clicked

- 

---

## 🤔 Questions & Struggles

- 

---

## 💡 Insights & Connections

> How does this connect to bass playing, music you like, or other concepts?

- 

---

## 🎵 Music Examples

> Songs/pieces that illustrate today's concepts

- 

---

## 🎯 Next Session Goals

- 

---

<%* tR += "Created by: " + (tp.user?.agentName || "Ziggy") + " · AI: " + (tp.user?.modelName || "openrouter/moonshotai/kimi-k2.5"); %>
