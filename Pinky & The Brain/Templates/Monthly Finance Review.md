---
type: monthly-finance
area: finances
month: <% tp.date.now("YYYY-MM") %>
status: active
total_income: 0
total_expenses: 0
total_savings: 0
savings_rate: "0%"
tags:
  - finances
  - monthly-review
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Finances Hub|Finances Hub]]

---

# 💰 <% tp.date.now("MMMM YYYY") %> — Financial Review

---

## 📥 Income

| Source | Category | Amount |
|--------|----------|--------|
| | salary | $ |
| | consulting | $ |
| | | $ |
| **Total Income** | | **$ 0** |

---

## 📤 Expenses by Category

### 🏠 Fixed / Essential
| Category | Budgeted | Actual | Variance |
|----------|----------|--------|----------|
| Housing | $ | $ | $ |
| Utilities | $ | $ | $ |
| Insurance | $ | $ | $ |
| Transportation | $ | $ | $ |
| Health | $ | $ | $ |
| Subscriptions | $ | $ | $ |
| Debt Payments | $ | $ | $ |
| **Subtotal Fixed** | **$** | **$** | **$** |

### 🛒 Variable / Discretionary
| Category | Budgeted | Actual | Variance |
|----------|----------|--------|----------|
| Groceries | $ | $ | $ |
| Dining | $ | $ | $ |
| Personal | $ | $ | $ |
| Household | $ | $ | $ |
| Entertainment | $ | $ | $ |
| Education | $ | $ | $ |
| Gifts | $ | $ | $ |
| Business | $ | $ | $ |
| Misc | $ | $ | $ |
| **Subtotal Variable** | **$** | **$** | **$** |

### 📊 Totals
| | Amount |
|---|--------|
| **Total Income** | $ |
| **Total Expenses** | $ |
| **Net (Income - Expenses)** | $ |
| **Savings / Investments** | $ |
| **Savings Rate** | % |

> *Update the frontmatter `total_income`, `total_expenses`, `total_savings`, and `savings_rate` fields after completing this review so they show on the Finances Hub.*

---

## 💳 Credit Card Activity
> *Statement balances for the month. Pay in full = green, carrying balance = red.*

| Card | Statement Balance | Paid in Full? | Notes |
|------|------------------|---------------|-------|
| | $ | ✅ / ❌ | |

---

## 🏦 Account Balances (End of Month)
> *Update your Account notes with new balances after reviewing.*

| Account | Last Month | This Month | Change |
|---------|-----------|------------|--------|
| Checking | $ | $ | $ |
| Savings | $ | $ | $ |
| Emergency Fund | $ | $ | $ |
| Investment / 401k | $ | $ | $ |
| | $ | $ | $ |
| **Net Worth** | **$** | **$** | **$** |

---

## 📌 Big Purchases This Month
> *Individual items over $100 worth noting.*

| Date | Item | Category | Amount | Notes |
|------|------|----------|--------|-------|
| | | | $ | |

---

## 🔄 Subscription Changes
> *Any new, cancelled, or price-changed subscriptions this month.*

- 

---

## 🎯 Financial Goal Progress
```dataview
TABLE WITHOUT ID
	file.link AS "Goal",
	current_value AS "Current",
	target_value AS "Target"
FROM "Notes"
WHERE type = "goal" AND area = "finances" AND status = "active"
```

---

## 💭 Reflection
> *How did this month go? Any adjustments needed for next month?*

**What went well:**
- 

**What needs attention:**
- 

**Adjustments for next month:**
- 

---

*Previous: [[<% tp.date.now("YYYY-MM", -30) %> Finances]] · Next: [[<% tp.date.now("YYYY-MM", 30) %> Finances]]*

---

<%* tR += "Created by: " + (tp.user?.agentName || "Ziggy") + " · AI: " + (tp.user?.modelName || "anthropic/claude-sonnet-4-5-20250929"); %>
