---
type: template
area: system
created: 2026-03-02
updated: 2026-03-02
tags:
  - app-development
  - specification
  - template
  - mvp
  - coding-agent
---

> [[🏠base|🏠]] · [[05-System/System Hub|System Hub]] · [[App Blueprint Generator (React)|⚡ Interactive Version]]

# 📋 App Specification Template (Markdown)

A plain-text, Obsidian-friendly template for specifying apps to be built by AI coding agents. No build tools required — just fill in the sections and hand it off.

---

## 🎯 Quick Start

1. **Copy this template** into a new note
2. **Fill out each section** — be specific, be granular
3. **Delete instructions** (the bullet points and hints)
4. **Hand to your AI agent** — this is the complete specification

---

# 🏗️ [APP NAME] — Application Specification

**Date:** YYYY-MM-DD  
**Author:** [Your Name]  
**Status:** Draft / Ready for Development

---

## 01 — Vision & Core Concept

### Elevator Pitch *(Required)*
> In one sentence: [App Name] helps [target users] to [solve problem] by [unique approach].
> 
> *Example: "Splitly helps roommates split shared expenses fairly by automatically tracking purchases and suggesting optimized settlements."*

[Write your elevator pitch here. This single sentence guides every architectural decision. Be specific about the user, problem, and mechanism.]

---

### Problem Statement *(Required)*
Describe the pain point in detail:
- **Who** experiences this problem? (be specific about persona)
- **How** are they currently solving it? (workarounds, manual processes)
- **Why** are current solutions inadequate? (gaps, frustrations)
- **Cost** of NOT solving it? (time lost, money, opportunity cost)

[The more visceral and specific the problem, the better the AI agent can prioritize features.]

---

### Target User Personas *(Required)*

#### Persona 1: [Name/Role]
- **Demographics:** Age range, tech savviness, professional context
- **Primary Goal:** What they want to accomplish
- **Key Frustration:** What blocks them today
- **Device Preference:** Mobile-first? Desktop? Both?
- **Technical Comfort:** Beginner / Intermediate / Advanced

#### Persona 2: [Name/Role]
- **Demographics:** 
- **Primary Goal:**
- **Key Frustration:**
- **Device Preference:**
- **Technical Comfort:**

[Personas drive UI/UX decisions, accessibility requirements, and onboarding flows.]

---

### Success Metrics (KPIs)
How will you measure if this app succeeds?

| Metric Type | Target | Measurement Method |
|-------------|--------|-------------------|
| **Primary** | [e.g., "1,000 MAU within 3 months"] | [Analytics tool] |
| Engagement | [e.g., "Avg session > 3 min"] | [Event tracking] |
| Retention | [e.g., "Day-30 retention > 25%"] | [Cohort analysis] |
| Business | [e.g., "5% conversion to paid"] | [Stripe/CRM data] |

[KPIs inform what analytics/telemetry to build in from day one.]

---

### Competitive Landscape

#### Competitor 1: [Name]
- **What they do well:**
- **Where they fall short:**
- **Your differentiation:**

#### Competitor 2: [Name]
- **What they do well:**
- **Where they fall short:**
- **Your differentiation:**

[Understanding competitors helps the agent avoid building commodity features and focus on differentiators.]

---

## 02 — Feature Specification

### MVP Features (P0 — Must-Have for Launch) *(Required)*

#### Feature 1: [Feature Name]
- **Priority:** P0 (launch blocker)
- **User Story:** As a [persona], I want to [action] so that [benefit]

**Acceptance Criteria:**
- ✅ Given [context], when [action], then [expected result]
- ✅ Given [context], when [action], then [expected result]

**Edge Cases:**
- ⚠️ What happens if [edge case]?
- ⚠️ What happens if [edge case]?

**UI Requirements:**
- Screen/page needed: [description]
- Key interactions: [click, swipe, drag, etc.]
- Loading states: [skeleton / spinner / optimistic UI]
- Error states: [empty state / error message / retry option]

---

#### Feature 2: [Feature Name]
- **Priority:** P0
- **User Story:** 

**Acceptance Criteria:**
- ✅ 
- ✅ 

**Edge Cases:**
- ⚠️ 

**UI Requirements:**

---

### Post-MVP Features (P1 — Next Sprint)

#### Feature: [Name]
- **User Story:** 
- **Dependencies:** Requires [MVP feature] to be complete
- **Complexity:** Low / Medium / High
- **Notes:** [Any architectural considerations to plan for NOW]

---

### Future Features (P2 — Roadmap)
- [Feature idea] — [brief rationale]
- [Feature idea] — [brief rationale]

[Note any that require architectural planning now (e.g., multi-tenancy, i18n, offline support)]

---

### Anti-Features (Explicitly Out of Scope)
What this app will NOT do (prevents scope creep):
- Will NOT support [feature] because [reason]
- Will NOT integrate with [service] in V1
- Will NOT handle [edge case] — instead [fallback behavior]

[Defining boundaries is as important as defining features.]

---

## 03 — User Experience & Flows

### Critical User Flows *(Required)*

#### Flow 1: [Flow Name, e.g., "New User Onboarding"]
1. User lands on [page] → sees [what]
2. User taps [element] → [what happens]
3. System [validates/processes] → [result]
4. User is redirected to [where]

**Happy Path Duration:** ~[X] seconds/minutes

**Error Paths:**
- If [condition]: show [error], offer [recovery]
- If [condition]: redirect to [fallback]

---

#### Flow 2: [Core Action Flow]
1. 
2. 
3. 

**Happy Path Duration:** 

**Error Paths:**

---

### Screen/Page Inventory *(Required)*

#### Screen: [Screen Name]
- **Route:** `/path/to/screen`
- **Purpose:** [What user accomplishes here]
- **Components:**
  - [Component]: [description & behavior]
  - [Component]: [description & behavior]
- **Data Displayed:** [What data is shown, from where]
- **Actions Available:** [What user can do]
- **Navigation:** Accessible from [where], leads to [where]
- **Auth Required:** Yes / No
- **Responsive Behavior:** [How it adapts mobile ↔ desktop]

---

#### Screen: [Screen Name]
- **Route:** 
- **Purpose:** 
- **Components:**
- **Data Displayed:** 
- **Actions Available:** 
- **Navigation:** 
- **Auth Required:** 
- **Responsive Behavior:** 

---

### Design Language & Branding

#### Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Primary | `#------` | CTAs, headers, key actions |
| Secondary | `#------` | Accents, links, secondary actions |
| Background | `#------` | Page background |
| Surface | `#------` | Cards, modals, elevated surfaces |
| Error | `#------` | Error states |
| Warning | `#------` | Warning states |
| Success | `#------` | Success states |

#### Typography
- **Headings:** [Font family], weights [400, 600, 700]
- **Body:** [Font family], size [14-16px base]
- **Mono/Code:** [Font family]

#### Design Tokens
- **Spacing System:** 4px grid / 8px grid
- **Border Radius:** [sharp 0px / subtle 4px / rounded 8px / pill]
- **Shadow Style:** [flat / subtle / elevated]
- **Overall Vibe:** [e.g., "Clean & minimal like Linear" or "Warm & friendly like Notion"]
- **Dark Mode:** Required / Nice-to-have / Not needed

#### Assets
- **Iconography:** [Lucide / Heroicons / Phosphor / Custom]
- **Illustration Style:** [if applicable]

[Concrete design tokens eliminate ambiguity and produce consistent UI.]

---

### Accessibility Requirements
- **WCAG Level:** AA (recommended minimum) / AAA
- **Keyboard Navigation:** Full keyboard support required? [Yes/No]
- **Screen Reader:** ARIA labels on all interactive elements? [Yes/No]
- **Color Contrast:** Minimum 4.5:1 for text, 3:1 for large text
- **Motion:** Respect prefers-reduced-motion? [Yes/No]
- **Font Scaling:** Support up to 200% zoom? [Yes/No]
- **Focus Indicators:** Visible focus rings on all interactive elements
- **Language:** Primary language [en] / RTL support needed? [Yes/No]

[Accessibility is legally required in many jurisdictions and expands your user base by ~15-20%.]

---

## 04 — Technical Architecture

### Technology Stack *(Required)*

| Layer | Technology | Notes |
|-------|------------|-------|
| **Frontend Framework** | [React / Next.js / Vue / Svelte / React Native / Flutter] | |
| **Styling** | [Tailwind CSS / CSS Modules / Styled Components / Shadcn/UI] | |
| **State Management** | [React Context / Zustand / Redux Toolkit / Jotai] | |
| **Backend Framework** | [Next.js API Routes / Express / FastAPI / Django / Go] | |
| **Database** | [PostgreSQL / MySQL / MongoDB / Supabase / PlanetScale] | |
| **ORM** | [Prisma / Drizzle / SQLAlchemy / TypeORM] | |
| **Authentication** | [NextAuth / Clerk / Supabase Auth / Auth0 / Firebase Auth] | |
| **File Storage** | [S3 / Cloudflare R2 / Supabase Storage / Uploadthing] | |
| **Hosting** | [Vercel / AWS / Railway / Fly.io / Cloudflare Pages] | |
| **CI/CD** | [GitHub Actions / GitLab CI / Vercel Auto-deploy] | |
| **Monitoring** | [Sentry / LogRocket / Datadog / Axiom] | |
| **Analytics** | [PostHog / Mixpanel / Plausible / Google Analytics] | |
| **Email** | [Resend / SendGrid / AWS SES / Postmark] | |
| **Payments** | [Stripe / Lemon Squeezy / Paddle] | |

[Be opinionated — vague choices lead to inconsistent architecture. Write "Agent's choice" only if truly open.]

---

### Data Model & Schema *(Required)*

#### Entity: [Name, e.g., User]
**Fields:**
| Field | Type | Constraints | Notes |
|-------|------|-------------|-------|
| id | UUID | PK, auto-generated | |
| email | string | unique, indexed, required | |
| name | string | required, max 100 chars | |
| avatar_url | string | nullable | |
| role | enum | ['user', 'admin'], default: 'user' | |
| created_at | timestamp | auto | |
| updated_at | timestamp | auto | |

**Relationships:**
- has_many: [Related entities]
- belongs_to: [Parent entity]

**Indexes:**
- email (unique)
- created_at (for sorting)

---

#### Entity: [Name, e.g., Post]
**Fields:**
| Field | Type | Constraints | Notes |
|-------|------|-------------|-------|
| | | | |

**Relationships:**

**Indexes:**

---

**Soft Deletes:** [Yes/No — which entities?]  
**Audit Log:** [Yes/No — which actions to log?]

[This becomes the database migration files. Missing fields = missing features.]

---

### API Endpoints & Contracts *(Required)*

#### Endpoint Group: Authentication

**POST /api/auth/register**
- **Request Body:** `{ email: string, password: string, name: string }`
- **Validation:** email format, password min 8 chars with complexity
- **Response 201:** `{ user: UserObject, token: string }`
- **Response 400:** `{ error: 'validation_error', details: [...] }`
- **Response 409:** `{ error: 'email_exists' }`
- **Rate Limit:** 5 requests/minute per IP

**POST /api/auth/login**
- **Request Body:** `{ email: string, password: string }`
- **Response 200:** `{ user: UserObject, token: string }`
- **Response 401:** `{ error: 'invalid_credentials' }`
- **Rate Limit:** 10 requests/minute per IP

---

#### Endpoint Group: [Resource, e.g., Posts]

**GET /api/[resource]**
- **Query Params:** page, limit, sort, filter
- **Auth:** Required / Public
- **Response 200:** `{ data: [...], pagination: { total, page, limit } }`

**POST /api/[resource]**
- **Request Body:** `{ ... }`
- **Auth:** Required
- **Response 201:** `{ data: ResourceObject }`

---

**API Style:** REST / GraphQL / tRPC  
**Versioning:** URL (/v1/) / Header / None for V1  
**Pagination:** Cursor-based / Offset-based

[Every endpoint becomes a route handler. Every request/response shape becomes a TypeScript type.]

---

### System Architecture & Infrastructure

**Architecture Pattern:** [Monolith / Microservices / Serverless / Modular Monolith]

**Rendering Strategy:** [SSR / SSG / CSR / ISR / Hybrid — specify per page]

**Caching Strategy:**
- **Browser:** [Cache-Control headers, service worker]
- **CDN:** [Static assets, API responses]
- **Application:** [Redis / in-memory — what to cache]
- **Database:** [Query caching, connection pooling]

**Background Jobs:** [Queue system for emails, image processing, etc.]

**File Upload Flow:** [Client → Presigned URL → S3 → CDN]

**Search:** [PostgreSQL full-text / Elasticsearch / Algolia / Meilisearch]

**Real-time:** [WebSockets / SSE / Polling — for what features?]

**Environment Configuration:**
- **Development:** [local / Docker compose]
- **Staging:** [mirror of production]
- **Production:** [specify provider & region]

**Scalability Considerations:**
- Expected initial load: [X users, Y requests/min]
- Growth plan: [horizontal scaling triggers]
- Database scaling: [read replicas, sharding plan]

[This prevents over-engineering for 10 users or monolithic choices that break at scale.]

---

## 05 — Security & Compliance

### Authentication & Authorization *(Required)*

**Auth Method:** [Email/Password / OAuth (which providers?) / Magic Link / Passkeys]

**MFA:** [Required / Optional / Not needed] — Method: [TOTP / SMS / Email]

**Session Management:**
- Token type: [JWT / Session cookie / Both]
- Access token expiry: [15 min recommended]
- Refresh token expiry: [7-30 days]
- Concurrent sessions: [Allow multiple / Single session]
- Session revocation: [On password change / Manual / Both]

**Password Policy:**
- Minimum length: [12+ recommended]
- Complexity: [uppercase, lowercase, number, symbol requirements]
- Breach checking: [HaveIBeenPwned API integration?]
- Reset flow: [email link, expiry time]

**Authorization Model:**
- RBAC Roles: [List roles and permissions]
- Resource-level permissions: [Owner can edit, viewers can read, etc.]
- API key scoping: [If applicable]

**Account Security:**
- Login attempt limiting: [X attempts before lockout]
- Account lockout duration: [30 min / progressive]
- Suspicious login detection: [new device/location alerts]

[Auth is the #1 attack vector. Every detail here prevents a security incident.]

---

### Data Security & Privacy *(Required)*

**Encryption:**
- At rest: [AES-256 for database / S3 SSE]
- In transit: [TLS 1.3 minimum, HSTS]
- Application-level: [Which fields need encryption? PII, payments]

**Data Classification:**
- **Public:** [What data is publicly accessible]
- **Internal:** [Logged-in users only]
- **Confidential:** [PII, payment data — special handling]
- **Restricted:** [Passwords, tokens — never logged, never exposed]

**PII Handling:**
- What PII is collected: [email, name, address, phone, etc.]
- Storage: [Where, how long, encryption method]
- Access: [Who can access, audit trail]
- Deletion: [Right to erasure flow, cascade behavior]
- Export: [Data portability — format, delivery method]

**Input Validation:**
- All user inputs sanitized server-side
- SQL injection prevention: [parameterized queries]
- XSS prevention: [output encoding, CSP headers]
- CSRF protection: [token-based / SameSite cookies]
- File upload validation: [type checking, size limits, virus scanning]

**API Security:**
- Rate limiting: [per endpoint / global]
- Request size limits: [max body size]
- CORS policy: [allowed origins]
- API key rotation: [if applicable]

[Security is not a feature — it's a requirement.]

---

### Regulatory Compliance

**GDPR** (if serving EU users):
- Cookie consent banner: [Yes/No]
- Privacy policy: [URL or 'needs creation']
- Data Processing Agreement: [If using sub-processors]
- Right to access / rectification / erasure: [Implementation plan]
- Data breach notification: [72-hour process]

**CCPA** (if serving California users):
- 'Do Not Sell' option: [Yes/No]
- Data disclosure request handling

**Other:**
- SOC 2: [Required? Type I or II?]
- HIPAA: [If handling health data — BAA required]
- PCI DSS: [If handling payment cards directly — use Stripe to avoid]
- COPPA: [If users under 13 — age verification needed]
- ADA / Section 508: [Accessibility compliance]

**Legal Documents:**
- Terms of Service: [URL or 'needs creation']
- Cookie Policy: [URL or 'needs creation']
- Acceptable Use Policy: [URL or 'needs creation']

[Compliance violations carry massive fines. Identify requirements early to architect correctly.]

---

## 06 — Quality & Testing

### Testing Strategy *(Required)*

**Unit Tests:**
- Coverage target: [80%+ recommended]
- Framework: [Jest / Vitest / pytest]
- What to test: [Business logic, utilities, data transformations]
- What NOT to test: [Framework internals, third-party libraries]

**Integration Tests:**
- Framework: [Supertest / pytest / Playwright API testing]
- What to test: [API endpoints, database operations, auth flows]
- Test database: [In-memory SQLite / Docker PostgreSQL / test schema]

**End-to-End Tests:**
- Framework: [Playwright / Cypress]
- Critical paths to cover:
  - ✅ User registration → login → core action → logout
  - ✅ Payment flow (if applicable)
  - ✅ Error recovery flows
- Visual regression: [Percy / Chromatic / None]

**Performance Tests:**
- Load testing: [k6 / Artillery — target: X requests/sec]
- Core Web Vitals targets:
  - LCP: < 2.5s
  - FID: < 100ms
  - CLS: < 0.1
- Bundle size budget: [< 200KB initial JS]
- API response time: [< 200ms p95]

**Security Tests:**
- Dependency scanning: [Snyk / npm audit / Dependabot]
- SAST: [CodeQL / SonarQube]
- OWASP Top 10 checklist review

[Tests are the safety net that lets the AI iterate confidently.]

---

### Error Handling & Resilience

**Global Error Boundary:** [Catch React errors, show friendly UI]

**API Error Format:**
```json
{
  "error": "machine_readable_code",
  "message": "Human readable description",
  "details": [...],
  "request_id": "uuid_for_debugging"
}
```

**Error Categories & Handling:**
| Error Type | HTTP Code | User Experience |
|------------|-----------|-----------------|
| Validation | 400 | Show inline field errors |
| Auth | 401/403 | Redirect to login / show access denied |
| Not Found | 404 | Show custom 404 page |
| Rate Limited | 429 | Show retry-after countdown |
| Server | 500 | Show generic error + report to Sentry |
| Network | — | Show offline banner + retry mechanism |

**Retry Strategy:**
- Idempotent requests: Auto-retry with exponential backoff
- Non-idempotent: Show retry button, confirm before retry
- Max retries: 3

**Logging:**
- Structured logging format: [JSON]
- Log levels: [error, warn, info, debug]
- PII masking in logs: [Required]
- Request/response logging: [Headers only, no bodies in prod]

**Health Checks:**
- /api/health: [App + DB + external services]
- Uptime monitoring: [Ping frequency, alert channels]

[Users judge apps by how they handle failure.]

---

### CI/CD & Deployment Pipeline

**Branch Strategy:**
- `main`: Production-ready code
- `develop`: Integration branch
- `feature/*`: Feature branches
- `hotfix/*`: Emergency fixes

**CI Pipeline** (on every PR):
1. Lint (ESLint + Prettier)
2. Type check (TypeScript strict)
3. Unit tests
4. Integration tests
5. Build verification
6. Bundle size check
7. Security scan

**CD Pipeline** (on merge to main):
1. Run full test suite
2. Build production artifacts
3. Deploy to staging
4. Run E2E tests against staging
5. Manual approval gate (optional)
6. Deploy to production
7. Smoke tests
8. Notify team

**Rollback Plan:**
- Auto-rollback on: [Health check failure / Error rate spike]
- Manual rollback: [One-click via dashboard / CLI command]

**Feature Flags:** [LaunchDarkly / Unleash / Custom / None]
**Database Migrations:** [Auto-run on deploy / Manual approval]

[A solid pipeline catches bugs before users do.]

---

## 07 — Operations & Launch

### Environment Variables & Secrets *(Required)*

| Variable | Purpose | Notes |
|----------|---------|-------|
| `DATABASE_URL` | PostgreSQL connection string | |
| `JWT_SECRET` | 256-bit random string | Rotate quarterly |
| `OAUTH_GOOGLE_ID` | Google OAuth client ID | |
| `OAUTH_GOOGLE_SECRET` | Google OAuth client secret | |
| `STRIPE_SECRET_KEY` | Stripe API secret key | Test vs Live keys |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret | |
| `RESEND_API_KEY` | Email service API key | |
| `S3_BUCKET` | File storage bucket name | |
| `S3_ACCESS_KEY` | S3 access key | IAM-restricted |
| `S3_SECRET_KEY` | S3 secret key | |
| `SENTRY_DSN` | Error tracking DSN | |
| `ANALYTICS_ID` | Analytics tracking ID | |
| `NEXT_PUBLIC_APP_URL` | Public-facing URL | |
| `NEXT_PUBLIC_API_URL` | API base URL | |

**Secrets Management:** [Vercel env / AWS Secrets Manager / Doppler / Vault]
**Rotation Policy:** [Which secrets, how often]

[Missing a single env var = broken deployment.]

---

### Monitoring & Alerting

**Error Tracking:**
- Tool: [Sentry]
- Alert on: Error rate > [X]/min, new error types
- Notification: [Slack / Email / PagerDuty]

**Application Metrics:**
- Response times (p50, p95, p99)
- Request throughput
- Error rates by endpoint
- Active users (real-time)
- Queue depth (if applicable)

**Infrastructure Metrics:**
- CPU / Memory utilization
- Database connections
- Disk usage
- Network I/O

**Business Metrics:**
- Signups per day
- Feature usage
- Conversion funnel
- Revenue (if applicable)

**Alerting Rules:**
| Severity | Trigger | Response |
|----------|---------|----------|
| 🔴 Critical | Site down, DB unreachable, payment failures | Immediate page |
| 🟡 Warning | High error rate, slow responses, disk > 80% | Slack alert |
| 🔵 Info | Deploy completed, new user milestones | Log only |

**On-Call:** [Rotation schedule / Single owner / Not needed for V1]
**Incident Response:** [Runbook location / escalation path]

[You can't fix what you can't see. Monitoring is your production safety net.]

---

### Pre-Launch Checklist

#### 🔒 Security
- [ ] SSL certificate installed and auto-renewing
- [ ] Security headers configured (CSP, HSTS, X-Frame-Options)
- [ ] All secrets rotated from development values
- [ ] Rate limiting active on all public endpoints
- [ ] CORS configured for production domains only
- [ ] SQL injection tests passed
- [ ] XSS protection verified
- [ ] Dependency vulnerabilities addressed

#### 📧 Transactional
- [ ] Email templates tested (welcome, reset, notifications)
- [ ] Email deliverability verified (SPF, DKIM, DMARC)
- [ ] Unsubscribe links working

#### 💳 Payments (if applicable)
- [ ] Stripe/payment webhooks configured for production
- [ ] Test transactions completed end-to-end
- [ ] Refund flow tested
- [ ] Invoice generation working

#### 📊 Analytics
- [ ] Event tracking implemented for key actions
- [ ] Conversion funnels configured
- [ ] Error tracking active (Sentry DSN set)

#### 🌐 SEO & Performance
- [ ] Meta tags on all pages
- [ ] Open Graph tags for social sharing
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Core Web Vitals within budget
- [ ] Images optimized (WebP, lazy loading)

#### 📱 Cross-Platform
- [ ] Tested on Chrome, Firefox, Safari, Edge
- [ ] Tested on iOS Safari, Android Chrome
- [ ] Responsive design verified at all breakpoints
- [ ] Touch interactions working on mobile

#### 📝 Legal
- [ ] Privacy Policy published
- [ ] Terms of Service published
- [ ] Cookie consent banner (if required)
- [ ] GDPR data handling documented

#### 🚀 Infrastructure
- [ ] Production environment provisioned
- [ ] Database backups configured (schedule + retention)
- [ ] CDN configured for static assets
- [ ] Domain DNS configured
- [ ] Monitoring and alerting active
- [ ] Rollback procedure tested

[This checklist is your launch confidence. Every unchecked item is a risk.]

---

## 📋 Implementation Order

Follow this sequence for optimal development:

```
Phase 1: Project Setup
  → Initialize repo with chosen tech stack
  → Configure linting, formatting, TypeScript strict mode
  → Set up CI pipeline (lint + type-check + test)
  → Configure environment variables

Phase 2: Data Layer
  → Define database schema from Data Model section
  → Create migration files
  → Implement ORM models with validation
  → Seed database with test data

Phase 3: Authentication
  → Implement auth system per Security section
  → Set up session management
  → Create auth middleware
  → Write auth integration tests

Phase 4: Core API
  → Build API endpoints from API Design section
  → Implement input validation on every endpoint
  → Add error handling per Error Handling section
  → Write API integration tests (aim for 90%+ coverage)

Phase 5: Frontend Foundation
  → Set up routing from Screen Inventory
  → Implement design system (colors, typography, components)
  → Build layout components (nav, sidebar, footer)
  → Create reusable UI components

Phase 6: Feature Implementation
  → Build MVP features in priority order (P0 first)
  → Implement each user flow end-to-end
  → Add loading, error, and empty states for EVERY screen
  → Write E2E tests for critical user flows

Phase 7: Security Hardening
  → Implement rate limiting
  → Configure security headers (CSP, HSTS, etc.)
  → Run OWASP Top 10 checklist
  → Perform dependency audit

Phase 8: Production Readiness
  → Set up monitoring and alerting
  → Configure production infrastructure
  → Run pre-launch checklist
  → Performance testing and optimization
  → Deploy to staging → E2E tests → Production
```

---

*End of Application Specification*
