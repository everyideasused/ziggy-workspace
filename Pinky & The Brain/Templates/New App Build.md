---
type: project
area: app-development
status: draft
created: <% tp.date.now("YYYY-MM-DD") %>
updated: <% tp.date.now("YYYY-MM-DD") %>
tags:
  - app-spec
  - project
  - draft
  - <% tp.system.prompt("App short code (e.g., splitly)") %>
app_name: <%* const appName = tp.system.prompt("App Name (e.g., Splitly)"); tR += appName; %>
elevator_pitch: 
target_users: 
tech_stack: 
---

> [[🏠base|🏠]] · [[01-Projects|📁 Projects]]

# 🏗️ <% tp.frontmatter.app_name %> — Application Specification

**Date:** <% tp.date.now("YYYY-MM-DD") %>  
**Status:** 🟡 Draft  
**Last Updated:** <% tp.date.now("YYYY-MM-DD") %>

---

## 01 — Vision & Core Concept

### Elevator Pitch ⚠️ REQUIRED
> In one sentence: <% tp.frontmatter.app_name %> helps [target users] to [solve problem] by [unique approach].

*[Write your elevator pitch here. Be specific about the user, problem, and mechanism.]*

---

### Problem Statement ⚠️ REQUIRED
Describe the pain point:
- **Who** experiences this?
- **How** do they solve it now? (workarounds)
- **Why** are current solutions inadequate?
- **Cost** of NOT solving it?

---

### Target User Personas ⚠️ REQUIRED

#### Persona 1: [Name/Role]
- **Demographics:** 
- **Primary Goal:** 
- **Key Frustration:** 
- **Device:** Mobile / Desktop / Both
- **Tech Comfort:** Beginner / Intermediate / Advanced

---

### Success Metrics (KPIs)
| Metric | Target | Tool |
|--------|--------|------|
| **Primary** | | |
| Engagement | | |
| Retention | | |
| Business | | |

---

### Competitive Landscape
| Competitor | Their Strength | Their Weakness | Our Edge |
|------------|---------------|----------------|----------|
| | | | |
| | | | |

---

## 02 — Feature Specification

### MVP Features (P0) ⚠️ REQUIRED

#### Feature 1: [Name]
- **User Story:** As a [persona], I want to [action] so that [benefit]
- **Acceptance Criteria:**
  - ✅ Given [context], when [action], then [expected result]
  - ✅ Given [context], when [action], then [expected result]
- **Edge Cases:**
  - ⚠️ What happens if [edge case]?
- **UI Requirements:**
  - Screen: [description]
  - Interactions: [click, swipe, etc.]
  - Loading: [skeleton/spinner/optimistic]
  - Errors: [empty state/error message]

---

#### Feature 2: [Name]
- **User Story:**
- **Acceptance Criteria:**
- **Edge Cases:**
- **UI Requirements:**

---

### Post-MVP Features (P1)
- [Feature] — [dependency, complexity estimate]

### Future Features (P2 / Roadmap)
- [Feature] — [rationale]

### Anti-Features (Explicitly Out of Scope)
- Will NOT [feature] because [reason]
- Will NOT integrate with [service] in V1

---

## 03 — User Experience & Flows

### Critical User Flows ⚠️ REQUIRED

#### Flow 1: [Name, e.g., "New User Onboarding"]
1. User lands on [page] → sees [what]
2. User taps [element] → [what happens]
3. System [validates/processes] → [result]
4. Redirect to [where]

**Happy Path Duration:** ~[X] min  
**Error Paths:** If [condition] → [recovery action]

---

#### Flow 2: [Core Action Flow]
1. 
2. 
3. 

---

### Screen Inventory ⚠️ REQUIRED

| Screen | Route | Purpose | Auth Required | Data Source |
|--------|-------|---------|---------------|-------------|
| [Home] | `/` | Landing + CTA | No | - |
| [Dashboard] | `/dashboard` | Main interface | Yes | API |
| | | | | |

---

### Design System
- **Color Palette:**
  - Primary: [#] — CTAs, headers
  - Secondary: [#] — accents, links
  - Background: [#]
  - Surface: [#] — cards, modals
- **Typography:**
  - Headings: [font], weights [400, 600, 700]
  - Body: [font], size [14-16px]
- **Vibe:** ["Clean & minimal like Linear" / "Warm like Notion"]
- **Icons:** [Lucide / Heroicons / Phosphor / Custom]
- **Dark Mode:** [Required / Nice-to-have / Not needed]

---

### Accessibility Requirements
- **WCAG Level:** AA / AAA
- **Keyboard Navigation:** Yes / No
- **Screen Reader:** ARIA labels required? Yes / No
- **Color Contrast:** 4.5:1 minimum
- **Motion:** Respect `prefers-reduced-motion`? Yes / No

---

## 04 — Technical Architecture

### Technology Stack ⚠️ REQUIRED

| Layer | Choice | Notes |
|-------|--------|-------|
| **Frontend** | [React / Next.js / Vue / Svelte] | |
| **Styling** | [Tailwind / CSS Modules / Styled] | |
| **State Mgmt** | [Context / Zustand / Redux / Jotai] | |
| **Backend** | [Next.js API / Express / FastAPI] | |
| **Database** | [PostgreSQL / MongoDB / Supabase] | |
| **ORM** | [Prisma / Drizzle / TypeORM] | |
| **Auth** | [NextAuth / Clerk / Supabase Auth] | |
| **File Storage** | [S3 / R2 / Supabase] | |
| **Hosting** | [Vercel / AWS / Railway] | |
| **CI/CD** | [GitHub Actions / GitLab CI] | |
| **Monitoring** | [Sentry / LogRocket] | |
| **Analytics** | [PostHog / Mixpanel] | |
| **Payments** | [Stripe / Lemon Squeezy] | |

---

### Data Model & Schema ⚠️ REQUIRED

#### Entity: [User]
| Field | Type | Constraints | Notes |
|-------|------|-------------|-------|
| id | UUID | PK, auto | |
| email | string | unique, required | indexed |
| name | string | max 100 | |
| role | enum | ['user','admin'] | default: 'user' |
| created_at | timestamp | auto | |

**Relationships:**
- has_many: [Posts, Comments]

**Indexes:**
- email (unique)

**Soft Deletes:** Yes / No

---

### API Endpoints & Contracts ⚠️ REQUIRED

#### POST /api/auth/register
- **Request:** `{ email: string, password: string, name: string }`
- **Validation:** email format, password 8+ chars with complexity
- **Response 201:** `{ user: UserObject, token: string }`
- **Response 400:** `{ error: 'validation_error', details: [...] }`
- **Response 409:** `{ error: 'email_exists' }`
- **Rate Limit:** 5 req/min per IP

#### POST /api/auth/login
- **Request:** `{ email: string, password: string }`
- **Response 200:** `{ user: UserObject, token: string }`
- **Response 401:** `{ error: 'invalid_credentials' }`

---

### System Architecture & Infrastructure
- **Pattern:** [Monolith / Serverless / Microservices]
- **Rendering:** [SSR / SSG / CSR / Hybrid]
- **Caching:**
  - Browser: [Cache-Control, service worker]
  - CDN: [static assets]
  - App: [Redis / in-memory]
- **Real-time:** [WebSockets / SSE / Polling] — for what features?
- **Search:** [Postgres full-text / Elasticsearch / Algolia]
- **File Uploads:** [Presigned URL → S3 → CDN]

---

## 05 — Security & Compliance

### Authentication & Authorization ⚠️ REQUIRED
- **Method:** [Email/Password / OAuth (which?) / Magic Link / Passkeys]
- **MFA:** [Required / Optional / Not needed]
- **Session:**
  - Token type: [JWT / Cookie / Both]
  - Access expiry: [15 min]
  - Refresh expiry: [7-30 days]
- **Password Policy:**
  - Min length: [12+]
  - Complexity: [upper, lower, number, symbol]
- **Rate Limiting:** Login [X attempts], API [Y req/min]

---

### Data Security & Privacy ⚠️ REQUIRED
- **Encryption:**
  - At rest: [AES-256]
  - In transit: [TLS 1.3]
- **PII Collected:** [email, name, etc.]
- **Retention:** [X days/months]
- **Deletion:** Right to erasure? [Yes / No]

### Compliance
- **GDPR:** [Yes / No] — Cookie banner needed?
- **CCPA:** [Yes / No]
- **Privacy Policy:** [URL / Need to create]
- **Terms:** [URL / Need to create]

---

## 06 — Quality & Testing

### Testing Strategy ⚠️ REQUIRED
- **Unit:** Framework [Jest/Vitest], Target [80%+ coverage]
- **Integration:** Framework [ ], DB [SQLite/Postgres test]
- **E2E:** Framework [Playwright/Cypress]
  - Critical paths: [Onboarding, Core action, Payment]
- **Performance:**
  - LCP: [< 2.5s]
  - Bundle: [< 200KB initial JS]
  - API p95: [< 200ms]

---

### Error Handling & Resilience
- **Global Boundary:** [Yes / No]
- **Error Format:**
  ```json
  {
    "error": "machine_code",
    "message": "Human readable",
    "details": [],
    "request_id": "uuid"
  }
  ```
- **Retry Strategy:** Exponential backoff, max 3 retries

---

### CI/CD & Deployment Pipeline
- **CI on PR:** Lint → Type-check → Unit → Integration → Security scan
- **CD on merge:** Build → Staging deploy → E2E tests → Production
- **Rollback:** [Auto on health fail / Manual trigger]
- **Feature Flags:** [LaunchDarkly / Unleash / None]

---

## 07 — Operations & Launch

### Environment Variables & Secrets ⚠️ REQUIRED

| Variable | Purpose | Sensitive |
|----------|---------|-----------|
| DATABASE_URL | PostgreSQL connection | Yes |
| JWT_SECRET | 256-bit random | Yes |
| STRIPE_SECRET_KEY | Payments | Yes |
| SENTRY_DSN | Error tracking | No |
| NEXT_PUBLIC_APP_URL | Public URL | No |

**Secrets Management:** [Vercel env / AWS Secrets Manager / Doppler]

---

### Monitoring & Alerting
- **Error Tracking:** [Sentry] — Alert on [X errors/min]
- **Metrics:** Response times, throughput, active users
- **Alerts:**
  - 🔴 Critical: [Site down, DB down] → [Pager/Call]
  - 🟡 Warning: [High errors, slow responses] → [Slack]

---

### Pre-Launch Checklist
- [ ] SSL certificate + auto-renew
- [ ] Security headers (CSP, HSTS)
- [ ] Rate limiting active
- [ ] DB backups configured
- [ ] Email deliverability verified (SPF, DKIM)
- [ ] Error tracking (Sentry) active
- [ ] Monitoring dashboards ready
- [ ] Rollback procedure tested

---

## 📋 Implementation Order

```
Phase 1: Project Setup
  → Init repo, linting, TypeScript strict
  → CI pipeline (lint + type-check + test)
  → Environment variables

Phase 2: Data Layer
  → Database schema, migrations
  → ORM models, seed data

Phase 3: Authentication
  → Auth system, session mgmt
  → Auth middleware, tests

Phase 4: Core API
  → All endpoints from API Design
  → Input validation, error handling
  → Integration tests (90%+)

Phase 5: Frontend Foundation
  → Routing, design system
  → Layout components

Phase 6: Feature Implementation
  → MVP features (P0 priority)
  → Loading/error states
  → E2E tests

Phase 7: Security Hardening
  → Rate limiting, security headers
  → OWASP Top 10 check

Phase 8: Production Readiness
  → Monitoring, alerts
  → Pre-launch checklist
  → Staging → E2E → Production
```

---

## 🗣️ Handoff Notes for AI Agent

*[Add any special instructions, context, or clarifications for your coding agent here]*

---

## 🔗 Related
- [[App Specification Template|📋 Full Markdown Template]]
- [[App Blueprint Generator (React)|⚡ Interactive Version]]
- [[App Blueprint Generator (Standalone HTML)|💻 Standalone HTML Tool]]

---

*Generated: <% tp.date.now("YYYY-MM-DD HH:mm") %> | Template: New App Build*