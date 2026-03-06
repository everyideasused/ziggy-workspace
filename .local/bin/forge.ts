#!/usr/bin/env -S npx ts-node
/**
 * forge.ts
 * Orchestrator for Forge agent (Sr. Engineer)
 * High-level engineering operations, KB access, decision logging
 */

import {
  initForgeDirectories,
  readMemory,
  logArchitectureDecision,
  logTechnologyChoice,
  logTechnicalDebt,
  logDebuggingWin,
  logPerformanceOptimization,
  logDeploymentOutcome,
  writeSessionLog,
  getRecentSessions,
  searchDecisions,
  getTechnicalDebtBySeverity,
  getForgeContext
} from './forge-memory';

import * as fs from 'fs';
import * as path from 'path';

const VAULT_PATH = process.env.VAULT_PATH || '/Volumes/ziggy/openclaw-workspace/Pinky & The Brain';
const NOTES_DIR = path.join(VAULT_PATH, 'Notes');

/**
 * Get KB note content by name
 */
export async function getKBNote(noteName: string): Promise<string | null> {
  const filePath = path.join(NOTES_DIR, `${noteName}.md`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  return fs.readFileSync(filePath, 'utf-8');
}

/**
 * Get main Forge KB
 */
export async function getMainKB(): Promise<string | null> {
  return getKBNote('Forge — Sr. Engineer Developer Knowledge Base');
}

/**
 * Get architecture reference notes
 */
export async function getArchitectureRefs(): Promise<{
  emailBridge: string | null;
  appSpec: string | null;
  ziggySystem: string | null;
}> {
  return {
    emailBridge: await getKBNote('Ziggy Email Bridge Architecture'),
    appSpec: await getKBNote('App Specification Template'),
    ziggySystem: await getKBNote('Ziggy System Context')
  };
}

/**
 * Log architecture review session
 */
export async function logArchitectureReview(
  date: string,
  project: string,
  decisions: string[],
  openQuestions: string[],
  nextSteps: string[]
): Promise<void> {
  const content = `
## Project: ${project}
## Architecture Review

### Decisions Made
${decisions.map(d => `- ${d}`).join('\n')}

### Open Questions
${openQuestions.map(q => `- ${q}`).join('\n')}

### Next Steps
${nextSteps.map(s => `- ${s}`).join('\n')}
`;
  
  writeSessionLog(date, content);
}

/**
 * Get design patterns reference
 */
export function getDesignPatterns(): string {
  return `
## Common Design Patterns

**Creational:** Factory, Abstract Factory, Builder, Singleton, Prototype
**Structural:** Adapter, Decorator, Facade, Proxy, Composite
**Behavioral:** Observer, Strategy, Command, Iterator, Template Method, State
**Distributed:** Sidecar, Ambassador, Anti-Corruption Layer, Bulkhead, Outbox, Saga
  `.trim();
}

/**
 * Get anti-patterns reference
 */
export function getAntiPatterns(): string {
  return `
## Anti-Patterns to Avoid

- God Object (one class does everything)
- Shotgun Surgery (one change requires edits in many places)
- Primitive Obsession (using primitives where domain objects belong)
- Anemic Domain Model (domain objects with no behavior)
- Leaky Abstraction (implementation bleeds through interface)
- Magic Numbers/Strings (unnamed constants)
- Premature Optimization (optimizing before profiling)
- Speculative Generality (building for hypothetical needs)
- Distributed Monolith (microservices with tight coupling)
- N+1 Query (fetching collection then each item individually)
  `.trim();
}

/**
 * Get deployment checklist
 */
export function getDeploymentChecklist(): string {
  return `
## Pre-Deployment Checklist

- [ ] All tests pass (unit, integration, critical E2E)
- [ ] No new security vulnerabilities in dependencies
- [ ] Secrets not committed to source control
- [ ] Database migrations backward-compatible
- [ ] Feature flags configured for staged rollout
- [ ] Monitoring and alerting updated
- [ ] Runbook updated if new operational procedures
- [ ] Rollback plan documented and tested
- [ ] Load tested for expected traffic
- [ ] Documentation updated (API docs, ADRs, README)
  `.trim();
}

/**
 * Get architecture review checklist
 */
export function getArchitectureChecklist(): string {
  return `
## Architecture Review Checklist

- [ ] Failure modes identified for each component
- [ ] No single points of failure on critical path
- [ ] Data persistence and backup strategy defined
- [ ] Security model reviewed (auth, authz, validation, secrets)
- [ ] Scalability path articulated (10x load plan)
- [ ] Operational model defined (monitoring, runbooks)
- [ ] Cost model estimated
- [ ] Migration/rollout plan for existing users
- [ ] Trade-offs documented in ADR
  `.trim();
}

/**
 * Analyze technical debt prioritization
 */
export async function analyzeDebtPriority(): Promise<{
  critical: string[];
  high: string[];
  totalCount: number;
}> {
  const critical = getTechnicalDebtBySeverity('Critical');
  const high = getTechnicalDebtBySeverity('High');
  
  return {
    critical,
    high,
    totalCount: critical.length + high.length
  };
}

/**
 * Get full Forge context (for agent system prompt injection)
 */
export async function getFullContext(): Promise<{
  memory: string;
  recentSessions: string[];
  mainKB: string | null;
}> {
  const context = getForgeContext();
  const mainKB = await getMainKB();
  
  return {
    ...context,
    mainKB
  };
}
