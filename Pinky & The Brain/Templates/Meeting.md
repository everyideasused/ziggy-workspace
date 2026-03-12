---
type: meeting
area: "<% await tp.system.suggester(["work", "relationships", "household", "health", "interests", "education", "finances"], ["work", "relationships", "household", "health", "interests", "education", "finances"]) %>"
client: "<% await tp.system.prompt("Client name (or leave blank for personal)") %>"
client_id: "<% await tp.system.prompt("Client ID (or PERSONAL)") %>"
project_id: "<% await tp.system.prompt("Project ID (or leave blank)") %>"
meeting_type: "<% await tp.system.suggester(["OAC Meeting", "Program Review", "Client Call", "Internal Sync", "Vendor Meeting", "AHJ Meeting", "Personal"], ["OAC Meeting", "Program Review", "Client Call", "Internal Sync", "Vendor Meeting", "AHJ Meeting", "Personal"]) %>"
date: <% tp.date.now("YYYY-MM-DD") %>
attendees: []
status: complete
sensitivity: internal
tags:
  - meeting
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# <% tp.file.title %>

**Date:** `= this.date` | **Type:** `= this.meeting_type`
**Client:** `= this.client` | **Project:** `= this.project_id`

## 👥 Attendees
- 

## 📋 Agenda
1. 
2. 
3. 

## 📝 Discussion Notes
- 

## ✅ Decisions Made
- 

## 🎯 Action Items

| Action | Owner | Due |
|--------|-------|-----|
| | | |

## 🔗 Related
- 

---

<%* tR += "Created by: " + (tp.user?.agentName || "Ziggy") + " · AI: " + (tp.user?.modelName || "anthropic/claude-sonnet-4-5-20250929"); %>
