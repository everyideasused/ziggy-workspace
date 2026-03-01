---
type: database
area: interests
status: active
tags:
  - database
  - reading
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Interests Hub|🧠 Interests]]

---

# 📚 Reading List

---

## 📖 Currently Reading
```dataview
TABLE WITHOUT ID
	file.link AS "Book",
	author AS "Author",
	genre AS "Genre",
	progress AS "Progress",
	format AS "Format"
FROM "Notes"
WHERE type = "book" AND status = "active"
SORT started DESC
```

---

## ✅ Finished
```dataview
TABLE WITHOUT ID
	file.link AS "Book",
	author AS "Author",
	rating AS "⭐",
	finished AS "Finished"
FROM "Notes"
WHERE type = "book" AND status = "complete"
SORT finished DESC
```

---

## 📋 Want to Read
```dataview
TABLE WITHOUT ID
	file.link AS "Book",
	author AS "Author",
	genre AS "Genre"
FROM "Notes"
WHERE type = "book" AND status = "inbox"
SORT file.name ASC
```

---

## 📊 Stats

### By Genre
```dataview
TABLE WITHOUT ID
	genre AS "Genre",
	length(rows) AS "Books"
FROM "Notes"
WHERE type = "book" AND (status = "complete" OR status = "active")
GROUP BY genre
SORT length(rows) DESC
```

### By Rating
```dataview
TABLE WITHOUT ID
	rating AS "Rating",
	length(rows) AS "Books"
FROM "Notes"
WHERE type = "book" AND status = "complete" AND rating
GROUP BY rating
SORT rating DESC
```

---

> *To add a book: create a new note → apply **Book** template.*
> *To add to "Want to Read" list: create a Book note with `status: inbox`.*
