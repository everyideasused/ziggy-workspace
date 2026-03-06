---
type: bill
area: finances
payee: "<% await tp.system.prompt("Who do you pay? (e.g., Nashville Electric, State Farm)") %>"
category: "<% await tp.system.suggester(["Housing", "Utilities", "Insurance", "Transportation", "Health", "Subscriptions", "Debt Payment", "Taxes", "Other"], ["housing", "utilities", "insurance", "transportation", "health", "subscriptions", "debt-payment", "taxes", "other"]) %>"
amount: <% await tp.system.prompt("Monthly amount (numbers only)") %>
due_day: <% await tp.system.prompt("Day of month due (1-31)") %>
frequency: "<% await tp.system.suggester(["Monthly", "Quarterly", "Semi-Annual", "Annual"], ["monthly", "quarterly", "semi-annual", "annual"]) %>"
payment_method: "<% await tp.system.prompt("Payment method (e.g., Chase Checking, Auto-draft, Credit Card)") %>"
auto_pay: <% await tp.system.suggester(["Yes", "No"], ["true", "false"]) %>
account_number_last4: ""
website: ""
status: active
tags:
  - finances
  - bill
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Finances Hub|Finances Hub]]

---

# <% tp.file.title %>

**Payee:** `= this.payee` | **Category:** `= this.category`
**Amount:** $`= this.amount` | **Due:** Day `= this.due_day` | **Frequency:** `= this.frequency`
**Payment Method:** `= this.payment_method` | **Auto Pay:** `= this.auto_pay`

---

## 📝 Notes
> *Account details, how to pay if manual, customer service number, etc.*

- 

---

## 📈 Payment History
> *Track payments, especially if amount varies or for annual review.*

| Date | Amount | Confirmation | Notes |
|------|--------|-------------|-------|
| | $ | | |

---

## 🔗 Related
- [[Finances Hub]]
- Website: `= this.website`

---

<%* tR += "Created by: " + (tp.user?.agentName || "Ziggy") + " · AI: " + (tp.user?.modelName || "anthropic/claude-sonnet-4-6"); %>
