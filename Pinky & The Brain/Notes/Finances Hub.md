---
type: area-hub
area: finances
status: active
tags:
  - area
  - finances
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily)

---

# 💰 Finances Hub

---

## 📊 Net Worth Snapshot
> *Updated monthly during financial review. Current balances across all accounts.*

```dataview
TABLE WITHOUT ID
	file.link AS "Account",
	account_type AS "Type",
	institution AS "Institution",
	"$" + string(balance) AS "Balance",
	dateformat(date(balance_date), "MM/dd/yy") AS "As Of"
FROM "Notes"
WHERE type = "account" AND status = "active"
SORT account_type ASC, balance DESC
```

### Summary
| Category | Total |
|----------|-------|
| 🏦 Cash & Checking | *update monthly* |
| 💵 Savings & Emergency | *update monthly* |
| 📈 Investments & Retirement | *update monthly* |
| 🏠 Property / Assets | *update monthly* |
| **Total Assets** | **$ —** |
| 💳 Credit Cards | *update monthly* |
| 🚗 Auto Loans | *update monthly* |
| 🏠 Mortgage | *update monthly* |
| 🎓 Student Loans | *update monthly* |
| **Total Liabilities** | **$ —** |
| **Net Worth** | **$ —** |

*Last updated: —*

---

## 📅 Bills & Recurring Payments
> *Everything that hits your accounts on a schedule.*

### Due This Month
```dataview
TABLE WITHOUT ID
	file.link AS "Bill",
	"$" + string(amount) AS "Amount",
	due_day AS "Due Day",
	frequency AS "Frequency",
	payment_method AS "Pays From",
	auto_pay AS "Auto?"
FROM "Notes"
WHERE type = "bill" AND status = "active"
SORT due_day ASC
```

### Monthly Recurring Total
```dataview
TABLE WITHOUT ID
	"$" + string(sum(rows.amount)) AS "Total Monthly Bills"
FROM "Notes"
WHERE type = "bill" AND status = "active" AND frequency = "monthly"
FLATTEN amount
```

---

## 📈 Monthly Budget vs Actual
> *Link to the current month's financial review.*

### Recent Monthly Reviews
```dataview
TABLE WITHOUT ID
	file.link AS "Month",
	total_income AS "Income",
	total_expenses AS "Expenses",
	total_savings AS "Saved",
	savings_rate AS "Rate"
FROM "Notes"
WHERE type = "monthly-finance"
SORT file.name DESC
LIMIT 12
```

**Current Month:** *(create from Monthly Finance Review template)*

---

## 🔄 Subscriptions
> *Pulled from Inventory Database — all active subscriptions.*

```dataview
TABLE WITHOUT ID
	file.link AS "Service",
	category AS "Category",
	"$" + string(monthly_cost) AS "$/mo",
	"$" + string(annual_cost) AS "$/yr",
	renewal_date AS "Renews"
FROM "Notes"
WHERE type = "item" AND (item_type = "subscription" OR item_type = "software") AND status = "active"
SORT monthly_cost DESC
```

---

## 🎯 Financial Goals
```dataview
TABLE WITHOUT ID
	file.link AS "Goal",
	metric AS "Metric",
	current_value AS "Current",
	target_value AS "Target",
	health AS "Health"
FROM "Notes"
WHERE type = "goal" AND area = "finances" AND status = "active"
SORT file.name ASC
```

---

## 📚 Financial Knowledge Base
> *Personal finance advisory intelligence. Ziggy references these for financial guidance.*

### Master Reference
- [[Personal Finance Knowledge Base]] — Start here. Lifecycle model, priority waterfall, advisory principles.

### Core Domains
```dataview
TABLE WITHOUT ID
	file.link AS "Topic",
	resource_type AS "Type"
FROM "Notes"
WHERE type = "resource" AND area = "finances" AND contains(tags, "finance-kb")
SORT file.name ASC
```

### Quick Access
| Priority | Domain | Note |
|----------|--------|------|
| 🔴 | Budgeting & Cash Flow | [[Budgeting & Cash Flow Management]] |
| 🔴 | Debt & Credit | [[Debt Strategy & Credit Management]] |
| 🟡 | Emergency Fund & Savings | [[Emergency Fund & Savings Architecture]] |
| 🟡 | Investment Strategy | [[Investment Strategy & Portfolio Theory]] |
| 🟢 | Retirement Planning | [[Retirement Planning & Optimization]] |
| 🟢 | Tax Optimization | [[Tax Planning & Optimization]] |
| 🟢 | Insurance & Risk | [[Insurance & Risk Management - Personal]] |
| — | Behavioral Finance | [[Behavioral Finance & Decision Frameworks]] |
| — | Finding an Advisor | [[Financial Advisor Selection & Fiduciary Standards]] |
| — | Milestones & Benchmarks | [[Financial Planning Milestones & Benchmarks]] |

### System
- [[Financial Advisor Prompt]] — Ledger's financial advisory configuration
- [[Ledger Session State]] — Ledger agent's working memory
- [[Agent Registry]] — Full agent architecture (Ledger = financial advisor)

---

## 🏷️ Budget Categories Reference

### Income Categories
| Category | Includes |
|----------|---------|
| `salary` | W2 or regular consulting income |
| `consulting` | Project-based or hourly client billing |
| `side-income` | Freelance, one-off gigs |
| `investment-income` | Dividends, interest, capital gains |
| `other-income` | Refunds, gifts, misc |

### Expense Categories
| Category | Includes |
|----------|---------|
| `housing` | Rent/mortgage, property tax, insurance, HOA |
| `utilities` | Electric, gas, water, internet, phone |
| `groceries` | Food for home |
| `dining` | Restaurants, coffee shops, takeout |
| `transportation` | Gas, car payment, insurance, maintenance, parking |
| `health` | Gym, supplements, medical, dental, prescriptions |
| `subscriptions` | Streaming, SaaS, memberships |
| `insurance` | Health, life, renters/home, umbrella |
| `personal` | Clothing, haircuts, personal care |
| `household` | Home maintenance, furniture, garden supplies |
| `education` | Books, courses, certifications |
| `entertainment` | Events, hobbies, games |
| `gifts` | Gifts for others, donations, charity |
| `savings` | Transfer to savings, emergency fund, investments |
| `debt-payment` | Extra debt payments above minimums |
| `taxes` | Estimated tax payments, tax prep |
| `business` | Business expenses (non-client-reimbursable) |
| `misc` | Anything that doesn't fit above |

---

## 🔗 Quick Links
- [[Monthly Finance Review]] template — *(in Templates)*
- [[Inventory Database]] — Subscription tracking
- [[Archives Hub]] — Past financial reviews
- [[Personal Finance Knowledge Base]] — Financial advisory knowledge base
