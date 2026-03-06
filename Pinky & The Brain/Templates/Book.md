---
type: book
area: "<% await tp.system.suggester(["Interests", "Education", "Work", "Health", "Finances"], ["interests", "education", "work", "health", "finances"]) %>"
title: "<% await tp.system.prompt("Book title") %>"
author: "<% await tp.system.prompt("Author") %>"
genre: "<% await tp.system.prompt("Genre (philosophy, business, fiction, self-help, technical, etc.)") %>"
format: "<% await tp.system.suggester(["Physical", "Kindle", "Audiobook", "PDF"], ["physical", "kindle", "audiobook", "pdf"]) %>"
progress: "0%"
rating: 
started: <% tp.date.now("YYYY-MM-DD") %>
finished: 
status: active
tags:
  - book
  - reading
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Reading List|📚 Reading]]

---

# 📖 <% tp.file.title %>
**By:** `= this.author` | **Genre:** `= this.genre` | **Format:** `= this.format`
**Progress:** `= this.progress` | **Started:** `= this.started`

---

## 🔑 Key Takeaways
> *The ideas that stick. Update as you read.*

1. 
2. 
3. 

---

## 📝 Chapter Notes
> *Brief notes as you read. Not a summary — capture what resonates.*

### 


---

## 💬 Quotes Worth Keeping
> *Passages that hit different.*

> 

---

## 🧠 How This Connects
> *Links to your life, other books, projects, or ideas.*

- 

---

## ⭐ Final Thoughts
> *Fill in when finished. Update `rating` (1-5), `progress` to "100%", `finished` date, and `status` to "complete" in frontmatter.*

---

<%* tR += "Created by: " + (tp.user?.agentName || "Ziggy") + " · AI: " + (tp.user?.modelName || "anthropic/claude-sonnet-4-6"); %>
