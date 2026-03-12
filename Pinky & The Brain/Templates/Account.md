---
type: account
area: finances
account_type: "<% await tp.system.suggester(["Checking", "Savings", "Emergency Fund", "Credit Card", "Investment", "Retirement (401k/IRA)", "HSA", "Auto Loan", "Mortgage", "Student Loan", "Other Debt", "Property", "Other Asset"], ["checking", "savings", "emergency", "credit-card", "investment", "retirement", "hsa", "auto-loan", "mortgage", "student-loan", "other-debt", "property", "other-asset"]) %>"
institution: "<% await tp.system.prompt("Institution name (e.g., Chase, Fidelity, USAA)") %>"
account_last4: "<% await tp.system.prompt("Last 4 digits of account (for identification)") %>"
balance: 0
balance_date: <% tp.date.now("YYYY-MM-DD") %>
interest_rate: 
credit_limit: 
minimum_payment: 
auto_pay: false
status: active
tags:
  - finances
  - account
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Finances Hub|Finances Hub]]

---

# <% tp.file.title %>

**Type:** `= this.account_type` | **Institution:** `= this.institution`
**Account:** ···`= this.account_last4` | **Status:** `= this.status`

---

## 💰 Current Balance
| Field | Value |
|-------|-------|
| Balance | $`= this.balance` |
| As Of | `= this.balance_date` |
| Interest Rate | `= this.interest_rate`% |
| Credit Limit | $`= this.credit_limit` |
| Min Payment | $`= this.minimum_payment` |
| Auto Pay | `= this.auto_pay` |

> *To update: change `balance` and `balance_date` in frontmatter.*

---

## 📈 Balance History
> *Log monthly balances here during your monthly finance review.*

| Date | Balance | Notes |
|------|---------|-------|
| <% tp.date.now("YYYY-MM-DD") %> | $ | Opening balance |
| | $ | |
| | $ | |

---

## 📝 Notes
> *Account details, perks, fee schedule, contact info, anything useful.*

- 

---

## 🔗 Related
- [[Finances Hub]]

---

<%* tR += "Created by: " + (tp.user?.agentName || "Ziggy") + " · AI: " + (tp.user?.modelName || "anthropic/claude-sonnet-4-5-20250929"); %>
