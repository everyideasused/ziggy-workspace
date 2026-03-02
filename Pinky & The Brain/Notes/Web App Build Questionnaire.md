---
type: resource
area: interests
status: active
tags:
  - tech
  - app-spec
  - template
  - software
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Interests Hub|Interests Hub]]

---

# Web App Build Questionnaire
## App Specification Template

*Fill this out as completely as you can. The more detail here, the fewer revision cycles we'll need. If something doesn't apply, write "N/A." If you're unsure, say so — that's useful information too.*

---

## 1. THE PROBLEM

- **What problem does this app solve?** Who has this problem, and how are they solving it today (if at all)?
- **What's the single most important thing a user should be able to do?**
- **What does success look like?** (e.g., "Users can do X in under 30 seconds," "Replaces our current spreadsheet," "Generates revenue through Y")
- **Is this a tool for you personally, your team, your clients, or the public?**

---

## 2. USERS & ACCESS

- **Who are the user types/roles?** (e.g., admin, end-user, viewer, client)
- **What can each role do that others can't?**
- **How do users get access?** (open registration, invite-only, single-user, SSO)
- **Does it need authentication/login?** If yes, what method? (email/password, Google OAuth, magic link, etc.)
- **Multi-tenant?** (Does each client/org see only their own data?)

---

## 3. CORE FEATURES

List every feature you want, then **rank them** into three tiers:

| Tier | Description |
|------|-------------|
| **Must Have (MVP)** | App is useless without these |
| **Should Have** | Important but can be added in v1.1 |
| **Nice to Have** | Wish-list / future state |

For each feature, describe:
- What the user does (the action)
- What the system does in response
- Any business rules or constraints (e.g., "max 5 per user," "requires approval," "triggers a notification")

---

## 4. DATA & CONTENT

- **What are the main "things" (entities) in the app?** (e.g., projects, users, invoices, tasks, locations)
- **For each entity, what fields/attributes does it have?** Be specific — name, status, date, category, dollar amount, etc.
- **How do entities relate to each other?** (e.g., "A project has many tasks," "A user belongs to one organization")
- **Is there existing data to import?** What format? (CSV, spreadsheet, database, API)
- **What data needs to persist vs. what's ephemeral?**

---

## 5. USER INTERFACE & EXPERIENCE

- **Do you have wireframes, mockups, or sketches?** (Upload them if so — even napkin drawings help)
- **Are there apps you want this to look/feel like?** (Provide URLs or names, and say what specifically you like about them)
- **What's the vibe?** (e.g., clean/minimal, dense/data-heavy, playful, corporate/professional, dark mode)
- **Key pages/screens — list every distinct view you envision** (e.g., dashboard, detail page, settings, form, report)
- **Does it need to work well on mobile, desktop, or both?**
- **Any branding to follow?** (Colors, fonts, logos — upload assets if available)
- **Are there accessibility requirements?** (WCAG level, specific needs)

---

## 6. INTEGRATIONS & EXTERNAL SERVICES

- **Does this app need to talk to other systems?** List them all:
  - APIs (Google Maps, Stripe, Twilio, etc.)
  - Databases or data sources
  - Third-party SaaS tools (Smartsheet, Slack, email services, etc.)
  - File storage (S3, Google Drive, etc.)
- **For each integration, what data flows in which direction?** (read, write, or both)
- **Does the app need to send emails, SMS, or push notifications?** What triggers them?

---

## 7. TECHNICAL REQUIREMENTS & CONSTRAINTS

- **Do you have a preference on tech stack?** (React, Vue, Svelte, vanilla JS, etc.)
- **Backend preference?** (Node.js, Python/Django/Flask, serverless, Firebase, Supabase, etc.)
- **Database preference?** (PostgreSQL, SQLite, MongoDB, Firestore, etc.)
- **Where will this be hosted?** (Vercel, Netlify, AWS, self-hosted, don't know yet)
- **Custom domain?** Do you already own one?
- **Are there performance requirements?** (e.g., must handle X concurrent users, page loads under Y seconds)
- **Any hard constraints?** (Budget, timeline, specific technology you must or must not use, compliance requirements like HIPAA/SOC2)

---

## 8. WORKFLOW & BUSINESS LOGIC

- **Walk me through the primary user journey step-by-step.** From the moment they open the app to the moment they've accomplished their goal.
- **Are there approval workflows or state machines?** (e.g., Draft → Submitted → Approved → Completed)
- **Are there automated actions?** (e.g., "When status changes to X, send email to Y," "Auto-archive after 30 days")
- **Are there calculations, formulas, or derived fields?** Describe the logic.
- **What happens on edge cases?** (e.g., What if two users edit the same thing? What if a required field is missing? What if a payment fails?)

---

## 9. REPORTING & OUTPUTS

- **What reports or dashboards do users need to see?**
- **Does the app need to export data?** In what format? (CSV, PDF, Excel, print-friendly view)
- **Are there charts/visualizations?** What data do they display?
- **Does anyone need a "read-only" or "executive summary" view?**

---

## 10. SECURITY & COMPLIANCE

- **How sensitive is the data?** (Public, internal-only, PII, financial, health-related)
- **Are there regulatory requirements?** (GDPR, HIPAA, SOC2, etc.)
- **Do you need audit logs?** (Who changed what, when)
- **Data backup/recovery expectations?**

---

## 11. SCOPE & TIMELINE

- **What's the deadline, if any?**
- **Is this a prototype/proof-of-concept, an MVP, or a production app?**
- **Who else is involved?** (designers, other developers, stakeholders who need to approve)
- **How will we communicate during the build?** (Iterations here in Claude, GitHub, etc.)

---

## 12. WHAT I'M MISSING

- **Is there anything about this app that's unusual, complex, or that you think I might not anticipate?**
- **What have you already tried that didn't work?**
- **Anything else?**

---

> **Pro Tip:** For the features section (#3), the more specific you are about business rules and edge cases, the less back-and-forth we'll need. "Users can create projects" is a start — "Users can create up to 10 active projects, each with a name (required, 100 char max), status (Active/On Hold/Closed), and target completion date" is what lets me build it right the first time.

---

## How to Use This Template

1. Copy this template into a new note when you have an app idea
2. Fill out as many sections as you can (it's okay to leave some blank or with "not sure")
3. Save the note with `type: resource`, `area: interests`, and tags including `app-spec`
4. Share with Ziggy when you're ready to start building
5. Ziggy will use this to create technical specs, architecture decisions, and a build plan
