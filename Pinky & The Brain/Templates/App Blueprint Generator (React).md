---
type: resource
area: system
created: 2026-03-02
updated: 2026-03-02
tags:
  - app-development
  - specification
  - template
  - coding-agent
---

> [[🏠base|🏠]] · [[05-System/System Hub|System Hub]] · [[App Specification Template|📋 App Spec Template]]

# ⚡ App Blueprint Generator (React Component)

A comprehensive, interactive specification tool for transforming app ideas into complete, AI-agent-ready technical blueprints.

## What This Is

This is a **self-contained React component** that guides you through 7 phases of app specification:

| Phase | Focus |
|-------|-------|
| 01 — Vision & Core Concept | Elevator pitch, problem statement, target users, success metrics |
| 02 — Feature Specification | MVP features (P0), post-MVP (P1), future (P2), anti-features |
| 03 — User Experience & Flows | User flows, screen inventory, design system, accessibility |
| 04 — Technical Architecture | Tech stack, data model, API design, system architecture |
| 05 — Security & Compliance | Auth, data security, regulatory compliance |
| 06 — Quality & Testing | Testing strategy, error handling, CI/CD pipeline |
| 07 — Operations & Launch | Environment config, monitoring, pre-launch checklist |

## How to Use This

### Option 1: Run Locally (Recommended)

1. **Create a new React project:**
   ```bash
   npx create-next-app@latest app-blueprint --typescript --tailwind
   cd app-blueprint
   ```

2. **Replace `app/page.tsx` with the component below**

3. **Run it:**
   ```bash
   npm run dev
   # Open http://localhost:3000
   ```

4. **Fill out each phase** → Click "Copy Blueprint as Markdown" → Paste into a new note for your coding agent

### Option 2: Use a Simple HTML File (No Build Step)

If you want something lighter, I can convert this to a single HTML file with React via CDN — just ask.

### Option 3: Obsidian Integration (Future)

We could adapt this into an Obsidian plugin or Templater script that generates specs directly in your vault.

---

## The Component

```tsx
import { useState, useCallback } from "react";

const PHASES = [
  {
    id: "vision",
    title: "01 — Vision & Core Concept",
    icon: "💡",
    description: "Define WHAT you're building and WHY it matters",
    sections: [
      {
        id: "elevator_pitch",
        label: "Elevator Pitch",
        type: "textarea",
        placeholder: "In one sentence: [App Name] helps [target users] to [solve problem] by [unique approach]. Example: 'Splitly helps roommates split shared expenses fairly by automatically tracking purchases and suggesting optimized settlements.'",
        hint: "This single sentence guides every architectural decision. Be specific about the user, problem, and mechanism.",
        required: true,
      },
      {
        id: "problem_statement",
        label: "Problem Statement",
        type: "textarea",
        placeholder: "Describe the pain point in detail:\n• Who experiences this problem?\n• How are they currently solving it (workarounds)?\n• What makes current solutions inadequate?\n• What's the cost of NOT solving it (time, money, frustration)?",
        hint: "The more visceral and specific the problem, the better the AI agent can prioritize features.",
        required: true,
      },
      {
        id: "target_users",
        label: "Target User Personas",
        type: "textarea",
        placeholder: "Define 1-3 primary personas:\n\nPersona 1: [Name/Role]\n  • Demographics: Age range, tech savviness, context\n  • Goal: What they want to accomplish\n  • Frustration: What blocks them today\n  • Device/Platform preference: Mobile-first? Desktop? Both?\n\nPersona 2: ...",
        hint: "Personas drive UI/UX decisions, accessibility requirements, and onboarding flows.",
        required: true,
      },
      {
        id: "success_metrics",
        label: "Success Metrics (KPIs)",
        type: "textarea",
        placeholder: "How will you measure if this app succeeds?\n• Primary metric: (e.g., 'Monthly active users > 1,000 within 3 months')\n• Engagement: (e.g., 'Average session duration > 3 min')\n• Retention: (e.g., 'Day-30 retention > 25%')\n• Business: (e.g., 'Conversion to paid > 5%')",
        hint: "KPIs inform what analytics/telemetry to build in from day one.",
      },
      {
        id: "competitive_landscape",
        label: "Competitive Landscape",
        type: "textarea",
        placeholder: "List 2-4 competitors or alternatives:\n\nCompetitor 1: [Name]\n  • What they do well:\n  • Where they fall short:\n  • Your differentiation:\n\nCompetitor 2: ...",
        hint: "Understanding competitors helps the agent avoid building commodity features and focus on differentiators.",
      },
    ],
  },
  {
    id: "features",
    title: "02 — Feature Specification",
    icon: "🧩",
    description: "Define EVERY feature with granular acceptance criteria",
    sections: [
      {
        id: "mvp_features",
        label: "MVP Features (Must-Have for Launch)",
        type: "textarea",
        placeholder: "List each feature with this structure:\n\nFeature 1: [Feature Name]\n  Priority: P0 (launch blocker)\n  User Story: As a [persona], I want to [action] so that [benefit]\n  Acceptance Criteria:\n    ✅ Given [context], when [action], then [expected result]\n    ✅ Given [context], when [action], then [expected result]\n  Edge Cases:\n    ⚠️ What happens if [edge case]?\n    ⚠️ What happens if [edge case]?\n  UI Requirements:\n    • Screen/page needed: [description]\n    • Key interactions: [click, swipe, drag, etc.]\n    • Loading states: [skeleton, spinner, optimistic UI]\n    • Error states: [empty state, error message, retry]\n\nFeature 2: ...",
        hint: "Each acceptance criterion becomes a testable unit. The more precise, the fewer iterations needed.",
        required: true,
      },
      {
        id: "p1_features",
        label: "Post-MVP Features (P1 — Next Sprint)",
        type: "textarea",
        placeholder: "Features planned for the next iteration:\n\nFeature: [Name]\n  User Story: As a [persona], I want to [action] so that [benefit]\n  Dependencies: Requires [MVP feature] to be complete\n  Complexity Estimate: Low / Medium / High\n  Notes: [Any architectural considerations to plan for NOW]",
        hint: "Defining P1 features now ensures the MVP architecture doesn't paint you into a corner.",
      },
      {
        id: "p2_features",
        label: "Future Features (P2 — Roadmap)",
        type: "textarea",
        placeholder: "Features for future consideration:\n• [Feature idea] — [brief rationale]\n• [Feature idea] — [brief rationale]\n\nNote any that require architectural planning now (e.g., multi-tenancy, i18n, offline support)",
        hint: "Even if not built now, these influence database schema and API design decisions.",
      },
      {
        id: "anti_features",
        label: "Anti-Features (Explicitly Out of Scope)",
        type: "textarea",
        placeholder: "What this app will NOT do (prevents scope creep):\n• Will NOT support [feature] because [reason]\n• Will NOT integrate with [service] in V1\n• Will NOT handle [edge case] — instead [fallback behavior]",
        hint: "Defining boundaries is as important as defining features. This prevents the AI from over-engineering.",
      },
    ],
  },
  {
    id: "ux",
    title: "03 — User Experience & Flows",
    icon: "🎨",
    description: "Map every screen and user journey in detail",
    sections: [
      {
        id: "user_flows",
        label: "Critical User Flows",
        type: "textarea",
        placeholder: "Map the primary journeys step by step:\n\nFlow 1: [Flow Name, e.g., 'New User Onboarding']\n  Step 1: User lands on [page] → sees [what]\n  Step 2: User taps [element] → [what happens]\n  Step 3: System [validates/processes] → [result]\n  Step 4: User is redirected to [where]\n  Happy Path Duration: ~[X] seconds/minutes\n  Error Paths:\n    • If [condition]: show [error], offer [recovery]\n    • If [condition]: redirect to [fallback]\n\nFlow 2: [Core Action Flow]\n  ...\n\nFlow 3: [Payment/Conversion Flow]\n  ...",
        hint: "Every step becomes a route, component, and API call. Missing steps = missing functionality.",
        required: true,
      },
      {
        id: "screen_inventory",
        label: "Screen/Page Inventory",
        type: "textarea",
        placeholder: "List every distinct screen:\n\nScreen: [Screen Name]\n  Route: /path/to/screen\n  Purpose: [What user accomplishes here]\n  Components:\n    • [Component]: [description & behavior]\n    • [Component]: [description & behavior]\n  Data Displayed: [What data is shown, from where]\n  Actions Available: [What user can do]\n  Navigation: Accessible from [where], leads to [where]\n  Auth Required: Yes/No\n  Responsive Behavior: [How it adapts mobile ↔ desktop]\n\n(Repeat for every screen)",
        hint: "This becomes the routing table, component tree, and navigation architecture.",
        required: true,
      },
      {
        id: "design_system",
        label: "Design Language & Branding",
        type: "textarea",
        placeholder: "Visual identity specifications:\n\n• Color Palette:\n  Primary: [hex] — used for [CTAs, headers, etc.]\n  Secondary: [hex] — used for [accents, links]\n  Background: [hex]\n  Surface: [hex] — cards, modals\n  Error: [hex] | Warning: [hex] | Success: [hex]\n\n• Typography:\n  Headings: [font family], weights [400, 600, 700]\n  Body: [font family], size [14-16px base]\n  Mono/Code: [font family]\n\n• Spacing System: 4px base grid / 8px base grid\n• Border Radius: [sharp 0px | subtle 4px | rounded 8px | pill]\n• Shadow Style: [flat | subtle | elevated]\n• Overall Vibe: [e.g., 'Clean & minimal like Linear' or 'Warm & friendly like Notion']\n• Dark Mode: Required / Nice-to-have / Not needed\n\n• Iconography: [Lucide / Heroicons / Phosphor / Custom]\n• Illustration Style: [if applicable]",
        hint: "Concrete design tokens eliminate ambiguity and produce consistent UI from the AI agent.",
      },
      {
        id: "accessibility",
        label: "Accessibility Requirements",
        type: "textarea",
        placeholder: "Accessibility standards:\n• WCAG Level: AA (recommended minimum) / AAA\n• Keyboard Navigation: Full keyboard support required? [Yes/No]\n• Screen Reader: ARIA labels on all interactive elements? [Yes/No]\n• Color Contrast: Minimum 4.5:1 for text, 3:1 for large text\n• Motion: Respect prefers-reduced-motion? [Yes/No]\n• Font Scaling: Support up to 200% zoom? [Yes/No]\n• Focus Indicators: Visible focus rings on all interactive elements\n• Language: Primary language [en] / RTL support needed? [Yes/No]",
        hint: "Accessibility is legally required in many jurisdictions and expands your user base by ~15-20%.",
      },
    ],
  },
  {
    id: "architecture",
    title: "04 — Technical Architecture",
    icon: "🏗️",
    description: "Define the technical stack and system design",
    sections: [
      {
        id: "tech_stack",
        label: "Technology Stack",
        type: "textarea",
        placeholder: "Specify preferred technologies (or write 'Agent's choice' for any):\n\n• Frontend Framework: [React / Next.js / Vue / Svelte / React Native / Flutter]\n• Styling: [Tailwind CSS / CSS Modules / Styled Components / Shadcn/UI]\n• State Management: [React Context / Zustand / Redux Toolkit / Jotai]\n• Backend Framework: [Next.js API Routes / Express / FastAPI / Django / Go]\n• Database: [PostgreSQL / MySQL / MongoDB / Supabase / PlanetScale]\n• ORM: [Prisma / Drizzle / SQLAlchemy / TypeORM]\n• Authentication: [NextAuth / Clerk / Supabase Auth / Auth0 / Firebase Auth]\n• File Storage: [S3 / Cloudflare R2 / Supabase Storage / Uploadthing]\n• Hosting: [Vercel / AWS / Railway / Fly.io / Cloudflare Pages]\n• CI/CD: [GitHub Actions / GitLab CI / Vercel Auto-deploy]\n• Monitoring: [Sentry / LogRocket / Datadog / Axiom]\n• Analytics: [PostHog / Mixpanel / Plausible / Google Analytics]\n• Email: [Resend / SendGrid / AWS SES / Postmark]\n• Payments: [Stripe / Lemon Squeezy / Paddle]",
        hint: "Be opinionated here — vague choices lead to inconsistent architecture. If unsure, specify constraints instead (e.g., 'must be serverless').",
        required: true,
      },
      {
        id: "data_model",
        label: "Data Model & Schema",
        type: "textarea",
        placeholder: "Define every entity and relationship:\n\nEntity: User\n  Fields:\n    - id: UUID (PK, auto-generated)\n    - email: string (unique, indexed, required)\n    - name: string (required, max 100 chars)\n    - avatar_url: string (nullable)\n    - role: enum ['user', 'admin'] (default: 'user')\n    - created_at: timestamp (auto)\n    - updated_at: timestamp (auto)\n  Relationships:\n    - has_many: Posts\n    - has_many: Comments\n  Indexes:\n    - email (unique)\n    - created_at (for sorting)\n\nEntity: Post\n  Fields:\n    - id: UUID (PK)\n    - author_id: UUID (FK → User.id, required)\n    - title: string (required, max 200 chars)\n    - content: text (required)\n    - status: enum ['draft', 'published', 'archived']\n    - published_at: timestamp (nullable)\n  Relationships:\n    - belongs_to: User (as author)\n    - has_many: Comments\n  Indexes:\n    - author_id\n    - status + published_at (composite)\n\n(Continue for ALL entities...)\n\nSoft Deletes: [Yes/No — which entities?]\nAudit Log: [Yes/No — which actions to log?]",
        hint: "This becomes the database migration files. Missing fields = missing features. Include EVERY field, even obvious ones.",
        required: true,
      },
      {
        id: "api_design",
        label: "API Endpoints & Contracts",
        type: "textarea",
        placeholder: "Define every API endpoint:\n\nEndpoint Group: Authentication\n\n  POST /api/auth/register\n    Request Body: { email: string, password: string, name: string }\n    Validation: email format, password min 8 chars with complexity\n    Response 201: { user: UserObject, token: string }\n    Response 400: { error: 'validation_error', details: [...] }\n    Response 409: { error: 'email_exists' }\n    Rate Limit: 5 requests/minute per IP\n\n  POST /api/auth/login\n    Request Body: { email: string, password: string }\n    Response 200: { user: UserObject, token: string }\n    Response 401: { error: 'invalid_credentials' }\n    Rate Limit: 10 requests/minute per IP\n\nEndpoint Group: [Resource]\n\n  GET /api/[resource]\n    Query Params: page, limit, sort, filter\n    Auth: Required / Public\n    Response 200: { data: [...], pagination: { total, page, limit } }\n\n  POST /api/[resource]\n    Request Body: { ... }\n    Auth: Required\n    Response 201: { data: ResourceObject }\n\n(Continue for ALL endpoints...)\n\nAPI Style: REST / GraphQL / tRPC\nVersioning: URL (/v1/) / Header / None for V1\nPagination: Cursor-based / Offset-based",
        hint: "Every endpoint becomes a route handler. Every request/response shape becomes a TypeScript type. Every error becomes a handler.",
        required: true,
      },
      {
        id: "system_architecture",
        label: "System Architecture & Infrastructure",
        type: "textarea",
        placeholder: "Architectural patterns and infrastructure:\n\n• Architecture Pattern: [Monolith / Microservices / Serverless / Modular Monolith]\n• Rendering Strategy: [SSR / SSG / CSR / ISR / Hybrid — specify per page]\n• Caching Strategy:\n  - Browser: [Cache-Control headers, service worker]\n  - CDN: [Static assets, API responses]\n  - Application: [Redis / in-memory — what to cache]\n  - Database: [Query caching, connection pooling]\n\n• Background Jobs: [Queue system for emails, image processing, etc.]\n• File Upload Flow: [Client → Presigned URL → S3 → CDN]\n• Search: [PostgreSQL full-text / Elasticsearch / Algolia / Meilisearch]\n• Real-time: [WebSockets / SSE / Polling — for what features?]\n• CDN: [Static assets, images, fonts]\n\n• Environment Configuration:\n  - Development: [local / Docker compose]\n  - Staging: [mirror of production]\n  - Production: [specify provider & region]\n\n• Scalability Considerations:\n  - Expected initial load: [X users, Y requests/min]\n  - Growth plan: [horizontal scaling triggers]\n  - Database scaling: [read replicas, sharding plan]",
        hint: "This prevents the AI from making monolithic choices that break at scale, or over-engineering for 10 users.",
      },
    ],
  },
  {
    id: "security",
    title: "05 — Security & Compliance",
    icon: "🔒",
    description: "Non-negotiable security requirements for production readiness",
    sections: [
      {
        id: "auth_security",
        label: "Authentication & Authorization",
        type: "textarea",
        placeholder: "Authentication requirements:\n\n• Auth Method: [Email/Password / OAuth (which providers?) / Magic Link / Passkeys]\n• MFA: [Required / Optional / Not needed] — Method: [TOTP / SMS / Email]\n• Session Management:\n  - Token type: [JWT / Session cookie / Both]\n  - Access token expiry: [15 min recommended]\n  - Refresh token expiry: [7-30 days]\n  - Concurrent sessions: [Allow multiple / Single session]\n  - Session revocation: [On password change / Manual / Both]\n\n• Password Policy:\n  - Minimum length: [12+ recommended]\n  - Complexity: [uppercase, lowercase, number, symbol requirements]\n  - Breach checking: [HaveIBeenPwned API integration?]\n  - Reset flow: [email link, expiry time]\n\n• Authorization Model:\n  - RBAC Roles: [List roles and permissions]\n  - Resource-level permissions: [Owner can edit, viewers can read, etc.]\n  - API key scoping: [If applicable]\n\n• Account Security:\n  - Login attempt limiting: [X attempts before lockout]\n  - Account lockout duration: [30 min / progressive]\n  - Suspicious login detection: [new device/location alerts]",
        hint: "Auth is the #1 attack vector. Every detail here prevents a security incident.",
        required: true,
      },
      {
        id: "data_security",
        label: "Data Security & Privacy",
        type: "textarea",
        placeholder: "Data protection requirements:\n\n• Encryption:\n  - At rest: [AES-256 for database / S3 SSE]\n  - In transit: [TLS 1.3 minimum, HSTS]\n  - Application-level: [Which fields need encryption? PII, payments]\n\n• Data Classification:\n  - Public: [What data is publicly accessible]\n  - Internal: [Logged-in users only]\n  - Confidential: [PII, payment data — special handling]\n  - Restricted: [Passwords, tokens — never logged, never exposed]\n\n• PII Handling:\n  - What PII is collected: [email, name, address, phone, etc.]\n  - Storage: [Where, how long, encryption method]\n  - Access: [Who can access, audit trail]\n  - Deletion: [Right to erasure flow, cascade behavior]\n  - Export: [Data portability — format, delivery method]\n\n• Input Validation:\n  - All user inputs sanitized server-side\n  - SQL injection prevention: [parameterized queries]\n  - XSS prevention: [output encoding, CSP headers]\n  - CSRF protection: [token-based / SameSite cookies]\n  - File upload validation: [type checking, size limits, virus scanning]\n\n• API Security:\n  - Rate limiting: [per endpoint / global]\n  - Request size limits: [max body size]\n  - CORS policy: [allowed origins]\n  - API key rotation: [if applicable]",
        hint: "Security is not a feature — it's a requirement. Every item here should be implemented, not optional.",
        required: true,
      },
      {
        id: "compliance",
        label: "Regulatory Compliance",
        type: "textarea",
        placeholder: "Applicable regulations:\n\n• GDPR (if serving EU users):\n  - Cookie consent banner: [Yes/No]\n  - Privacy policy: [URL or 'needs creation']\n  - Data Processing Agreement: [If using sub-processors]\n  - Right to access / rectification / erasure: [Implementation plan]\n  - Data breach notification: [72-hour process]\n\n• CCPA (if serving California users):\n  - 'Do Not Sell' option: [Yes/No]\n  - Data disclosure request handling\n\n• SOC 2: [Required? Type I or II?]\n• HIPAA: [If handling health data — BAA required]\n• PCI DSS: [If handling payment cards directly — use Stripe to avoid]\n• COPPA: [If users under 13 — age verification needed]\n• ADA / Section 508: [Accessibility compliance]\n\n• Terms of Service: [URL or 'needs creation']\n• Cookie Policy: [URL or 'needs creation']\n• Acceptable Use Policy: [URL or 'needs creation']",
        hint: "Compliance violations carry massive fines. Identify requirements early to architect correctly.",
      },
    ],
  },
  {
    id: "quality",
    title: "06 — Quality & Testing",
    icon: "✅",
    description: "Testing strategy and quality gates for release readiness",
    sections: [
      {
        id: "testing_strategy",
        label: "Testing Strategy",
        type: "textarea",
        placeholder: "Define the testing pyramid:\n\n• Unit Tests:\n  - Coverage target: [80%+ recommended]\n  - Framework: [Jest / Vitest / pytest]\n  - What to test: [Business logic, utilities, data transformations]\n  - What NOT to test: [Framework internals, third-party libraries]\n\n• Integration Tests:\n  - Framework: [Supertest / pytest / Playwright API testing]\n  - What to test: [API endpoints, database operations, auth flows]\n  - Test database: [In-memory SQLite / Docker PostgreSQL / test schema]\n\n• End-to-End Tests:\n  - Framework: [Playwright / Cypress]\n  - Critical paths to cover:\n    ✅ User registration → login → core action → logout\n    ✅ Payment flow (if applicable)\n    ✅ Error recovery flows\n  - Visual regression: [Percy / Chromatic / None]\n\n• Performance Tests:\n  - Load testing: [k6 / Artillery — target: X requests/sec]\n  - Core Web Vitals targets:\n    LCP: < 2.5s | FID: < 100ms | CLS: < 0.1\n  - Bundle size budget: [< 200KB initial JS]\n  - API response time: [< 200ms p95]\n\n• Security Tests:\n  - Dependency scanning: [Snyk / npm audit / Dependabot]\n  - SAST: [CodeQL / SonarQube]\n  - OWASP Top 10 checklist review",
        hint: "Tests are the safety net that lets the AI iterate confidently. Specify what matters most to test.",
        required: true,
      },
      {
        id: "error_handling",
        label: "Error Handling & Resilience",
        type: "textarea",
        placeholder: "Error handling strategy:\n\n• Global Error Boundary: [Catch React errors, show friendly UI]\n• API Error Format:\n  {\n    error: string (machine-readable code),\n    message: string (human-readable),\n    details?: array (field-level errors),\n    request_id: string (for debugging)\n  }\n\n• Error Categories & Handling:\n  - Validation errors (400): Show inline field errors\n  - Auth errors (401/403): Redirect to login / show access denied\n  - Not found (404): Show custom 404 page\n  - Rate limited (429): Show retry-after countdown\n  - Server errors (500): Show generic error + report to Sentry\n  - Network errors: Show offline banner + retry mechanism\n\n• Retry Strategy:\n  - Idempotent requests: Auto-retry with exponential backoff\n  - Non-idempotent: Show retry button, confirm before retry\n  - Max retries: 3\n\n• Logging:\n  - Structured logging format: [JSON]\n  - Log levels: [error, warn, info, debug]\n  - PII masking in logs: [Required]\n  - Request/response logging: [Headers only, no bodies in prod]\n\n• Health Checks:\n  - /api/health: [App + DB + external services]\n  - Uptime monitoring: [Ping frequency, alert channels]",
        hint: "Users judge apps by how they handle failure. Good error handling = professional product.",
      },
      {
        id: "ci_cd",
        label: "CI/CD & Deployment Pipeline",
        type: "textarea",
        placeholder: "Deployment pipeline:\n\n• Branch Strategy:\n  - main: Production-ready code\n  - develop: Integration branch\n  - feature/*: Feature branches\n  - hotfix/*: Emergency fixes\n\n• CI Pipeline (on every PR):\n  1. Lint (ESLint + Prettier)\n  2. Type check (TypeScript strict)\n  3. Unit tests\n  4. Integration tests\n  5. Build verification\n  6. Bundle size check\n  7. Security scan\n\n• CD Pipeline (on merge to main):\n  1. Run full test suite\n  2. Build production artifacts\n  3. Deploy to staging\n  4. Run E2E tests against staging\n  5. Manual approval gate (optional)\n  6. Deploy to production\n  7. Smoke tests\n  8. Notify team\n\n• Rollback Plan:\n  - Auto-rollback on: [Health check failure / Error rate spike]\n  - Manual rollback: [One-click via dashboard / CLI command]\n\n• Feature Flags: [LaunchDarkly / Unleash / Custom / None]\n• Database Migrations: [Auto-run on deploy / Manual approval]",
        hint: "A solid pipeline catches bugs before users do and enables confident, frequent deployments.",
      },
    ],
  },
  {
    id: "operations",
    title: "07 — Operations & Launch",
    icon: "🚀",
    description: "Everything needed for production operations and go-live",
    sections: [
      {
        id: "environment_config",
        label: "Environment Variables & Secrets",
        type: "textarea",
        placeholder: "List ALL environment variables needed:\n\n# Database\nDATABASE_URL=         # PostgreSQL connection string\n\n# Authentication\nJWT_SECRET=           # 256-bit random string\nOAUTH_GOOGLE_ID=      # Google OAuth client ID\nOAUTH_GOOGLE_SECRET=  # Google OAuth client secret\n\n# External Services\nSTRIPE_SECRET_KEY=    # Stripe API secret key\nSTRIPE_WEBHOOK_SECRET= # Stripe webhook signing secret\nRESEND_API_KEY=       # Email service API key\nS3_BUCKET=            # File storage bucket name\nS3_ACCESS_KEY=        # S3 access key\nS3_SECRET_KEY=        # S3 secret key\n\n# Monitoring\nSENTRY_DSN=           # Error tracking DSN\nANALYTICS_ID=         # Analytics tracking ID\n\n# App Config\nNEXT_PUBLIC_APP_URL=  # Public-facing URL\nNEXT_PUBLIC_API_URL=  # API base URL\n\nSecrets Management: [Vercel env / AWS Secrets Manager / Doppler / Vault]\nRotation Policy: [Which secrets, how often]",
        hint: "Missing a single env var = broken deployment. List everything, including ones for third-party services.",
        required: true,
      },
      {
        id: "monitoring",
        label: "Monitoring & Alerting",
        type: "textarea",
        placeholder: "Production monitoring setup:\n\n• Error Tracking:\n  - Tool: [Sentry]\n  - Alert on: Error rate > [X]/min, new error types\n  - Notification: [Slack / Email / PagerDuty]\n\n• Application Metrics:\n  - Response times (p50, p95, p99)\n  - Request throughput\n  - Error rates by endpoint\n  - Active users (real-time)\n  - Queue depth (if applicable)\n\n• Infrastructure Metrics:\n  - CPU / Memory utilization\n  - Database connections\n  - Disk usage\n  - Network I/O\n\n• Business Metrics:\n  - Signups per day\n  - Feature usage\n  - Conversion funnel\n  - Revenue (if applicable)\n\n• Alerting Rules:\n  🔴 Critical: Site down, DB unreachable, payment failures\n  🟡 Warning: High error rate, slow responses, disk > 80%\n  🔵 Info: Deploy completed, new user milestones\n\n• On-Call: [Rotation schedule / Single owner / Not needed for V1]\n• Incident Response: [Runbook location / escalation path]",
        hint: "You can't fix what you can't see. Monitoring is your production safety net.",
      },
      {
        id: "launch_checklist",
        label: "Pre-Launch Checklist",
        type: "textarea",
        placeholder: "Final checks before going live:\n\n🔒 Security:\n  □ SSL certificate installed and auto-renewing\n  □ Security headers configured (CSP, HSTS, X-Frame-Options)\n  □ All secrets rotated from development values\n  □ Rate limiting active on all public endpoints\n  □ CORS configured for production domains only\n  □ SQL injection tests passed\n  □ XSS protection verified\n  □ Dependency vulnerabilities addressed\n\n📧 Transactional:\n  □ Email templates tested (welcome, reset, notifications)\n  □ Email deliverability verified (SPF, DKIM, DMARC)\n  □ Unsubscribe links working\n\n💳 Payments (if applicable):\n  □ Stripe/payment webhooks configured for production\n  □ Test transactions completed end-to-end\n  □ Refund flow tested\n  □ Invoice generation working\n\n📊 Analytics:\n  □ Event tracking implemented for key actions\n  □ Conversion funnels configured\n  □ Error tracking active (Sentry DSN set)\n\n🌐 SEO & Performance:\n  □ Meta tags on all pages\n  □ Open Graph tags for social sharing\n  □ Sitemap generated\n  □ robots.txt configured\n  □ Core Web Vitals within budget\n  □ Images optimized (WebP, lazy loading)\n\n📱 Cross-Platform:\n  □ Tested on Chrome, Firefox, Safari, Edge\n  □ Tested on iOS Safari, Android Chrome\n  □ Responsive design verified at all breakpoints\n  □ Touch interactions working on mobile\n\n📝 Legal:\n  □ Privacy Policy published\n  □ Terms of Service published\n  □ Cookie consent banner (if required)\n  □ GDPR data handling documented\n\n🚀 Infrastructure:\n  □ Production environment provisioned\n  □ Database backups configured (schedule + retention)\n  □ CDN configured for static assets\n  □ Domain DNS configured\n  □ Monitoring and alerting active\n  □ Rollback procedure tested",
        hint: "This checklist is your launch confidence. Every unchecked item is a risk.",
      },
    ],
  },
];

// ... Component implementation continues (see full file for ProgressBar, PhaseNav, SectionField, etc.)

export default function AppBlueprintGenerator() {
  // Component logic here
}
```

---

## Quick Start Guide

### Step 1: Run the Generator
```bash
# Create a new Next.js app
npx create-next-app@latest app-blueprint --typescript --tailwind

# Enter the directory
cd app-blueprint

# Install dependencies
npm install

# Start dev server
npm run dev
```

### Step 2: Paste the Component
Open `app/page.tsx` and replace its contents with the component code above (or the full file).

### Step 3: Fill & Export
1. Navigate through all 7 phases
2. Fill out required fields (marked with red badges)
3. Click **"Copy Blueprint as Markdown"**
4. Paste into a new note for your AI coding agent

---

## Output Format

The generator produces a complete markdown specification with:
- All your inputs formatted as code blocks
- Implementation order (8-phase dev sequence)
- Instructions for the AI agent
- Checklists and requirements

**Ready to hand to any coding agent** (me, Claude, GPT-4, etc.)

---

## Related Resources
- [[App Specification Template]] — Markdown-only version (simpler, no build step)
- [[How to Specify Apps - Best Practices]] — Educational guide
- [[App Spec - Worked Example]] — Sample completed specification

---

## Future Enhancements
- [ ] Obsidian Templater integration (generate specs directly in vault)
- [ ] Export to Notion / Linear / GitHub Issues
- [ ] AI-assisted filling (suggest completions based on partial input)

---

*Template Version: 1.0 | Created: 2026-03-02*
