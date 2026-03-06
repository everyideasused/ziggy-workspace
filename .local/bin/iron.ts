#!/usr/bin/env -S npx ts-node
/**
 * iron.ts
 * Orchestrator for Iron agent (Fitness Coach)
 * Workout scheduling, KB access, compliance tracking, mesocycle management
 */

import {
  initIronDirectories,
  readMemory,
  logPR,
  logBreakthrough,
  logMesocycleAssessment,
  logCompliance,
  logRedFlag,
  logExerciseSubstitution,
  logDeload,
  writeSessionLog,
  getRecentSessions,
  getIronContext
} from './iron-memory';

import * as fs from 'fs';
import * as path from 'path';

const VAULT_PATH = process.env.VAULT_PATH || '/Volumes/ziggy/openclaw-workspace/Pinky & The Brain';
const NOTES_DIR = path.join(VAULT_PATH, 'Notes');

/**
 * Get V-Shape program start date (hardcoded for now)
 */
const PROGRAM_START_DATE = new Date('2026-03-02'); // Sunday, Week 1 Day 1 = Monday Mar 3

/**
 * Calculate what workout day it is today
 */
export function calculateTodaysWorkout(): {
  day: 'A' | 'B1' | 'B2' | 'C' | 'Rest';
  week: 1 | 2;
  dayNumber: number;
} {
  const today = new Date();
  const daysSinceStart = Math.floor((today.getTime() - PROGRAM_START_DATE.getTime()) / (1000 * 60 * 60 * 24));
  const weeksComplete = Math.floor(daysSinceStart / 7);
  const weekNumber = (weeksComplete % 2) + 1; // Alternates between 1 and 2
  const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
  
  // Week 1: Mon=A Tue=B1 Wed=C Thu=B2 Fri=A Sat=B1 Sun=Rest
  // Week 2: Mon=C Tue=B2 Wed=A Thu=B1 Fri=C Sat=B2 Sun=Rest
  
  const week1Schedule: Record<number, 'A' | 'B1' | 'B2' | 'C' | 'Rest'> = {
    0: 'Rest', // Sunday
    1: 'A',    // Monday
    2: 'B1',   // Tuesday
    3: 'C',    // Wednesday
    4: 'B2',   // Thursday
    5: 'A',    // Friday
    6: 'B1'    // Saturday
  };
  
  const week2Schedule: Record<number, 'A' | 'B1' | 'B2' | 'C' | 'Rest'> = {
    0: 'Rest', // Sunday
    1: 'C',    // Monday
    2: 'B2',   // Tuesday
    3: 'A',    // Wednesday
    4: 'B1',   // Thursday
    5: 'C',    // Friday
    6: 'B2'    // Saturday
  };
  
  const schedule = weekNumber === 1 ? week1Schedule : week2Schedule;
  
  return {
    day: schedule[dayOfWeek],
    week: weekNumber as 1 | 2,
    dayNumber: dayOfWeek
  };
}

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
 * Get V-Shape program KB
 */
export async function getVShapeProgram(): Promise<string | null> {
  return getKBNote('V-Shape Program');
}

/**
 * Get V-Shape exercise guide
 */
export async function getExerciseGuide(): Promise<string | null> {
  return getKBNote('V-Shape Exercise Guide');
}

/**
 * Get workout program status
 */
export async function getWorkoutProgramStatus(): Promise<string | null> {
  return getKBNote('Workout Program');
}

/**
 * Calculate nutrition targets based on bodyweight
 */
export function calculateNutritionTargets(bodyweight: number): {
  calories: { min: number; max: number };
  protein: { min: number; max: number };
  water: number;
} {
  // Targets scale with bodyweight
  const caloriesPerLb = 17.5; // Midpoint between 17-18 cal/lb for lean bulk
  const proteinPerLb = 1.1; // Midpoint between 1-1.2g/lb
  const waterPerLb = 0.5; // oz per lb
  
  return {
    calories: {
      min: Math.round(bodyweight * 17),
      max: Math.round(bodyweight * 18)
    },
    protein: {
      min: Math.round(bodyweight),
      max: Math.round(bodyweight * 1.2)
    },
    water: Math.round(bodyweight * waterPerLb)
  };
}

/**
 * Analyze red flags from recent workouts
 */
export function analyzeRedFlags(params: {
  proteinComplianceLast2Weeks: number; // days hit out of 14
  weightTrend: 'flat' | 'up' | 'down';
  weeksFlat?: number;
  sleepAverage: number;
  rpeTrend: 'climbing' | 'stable' | 'dropping';
}): string[] {
  const flags: string[] = [];
  
  if (params.proteinComplianceLast2Weeks < 10) {
    flags.push('🚨 Protein compliance <5/7 days for 2+ weeks');
  }
  
  if (params.weightTrend === 'flat' && params.weeksFlat && params.weeksFlat >= 3) {
    flags.push('🚨 Weight flat 3+ weeks → recommend adding 200 cal');
  }
  
  if (params.weightTrend === 'up' && params.weeksFlat && params.weeksFlat >= 3) {
    flags.push('🚨 Weight gain >1 lb/week for 3+ weeks → recommend cutting 200 cal');
  }
  
  if (params.sleepAverage < 6.5) {
    flags.push('🚨 Sleep averaging <6.5 hrs for 1+ week');
  }
  
  if (params.rpeTrend === 'climbing') {
    flags.push('⚠️ RPE climbing without corresponding performance gains');
  }
  
  return flags;
}

/**
 * Log workout completion
 */
export async function logWorkoutCompletion(params: {
  date: string;
  day: 'A' | 'B1' | 'B2' | 'C';
  exercises: string[];
  sessionRPE: number;
  energyLevel: string;
  sleepHours: number;
  proteinHit: boolean;
  waterHit: boolean;
  notes?: string;
}): Promise<void> {
  const content = `
## Workout: Day ${params.day}
**Date:** ${params.date}

### Exercises Completed
${params.exercises.map(e => `- ${e}`).join('\n')}

### Session Data
- **Session RPE:** ${params.sessionRPE}/10
- **Energy Level:** ${params.energyLevel}
- **Sleep:** ${params.sleepHours} hours
- **Protein Hit:** ${params.proteinHit ? 'Yes' : 'No'}
- **Water Hit:** ${params.waterHit ? 'Yes' : 'No'}

${params.notes ? `### Notes\n${params.notes}` : ''}
`;
  
  writeSessionLog(params.date, content);
}

/**
 * Get full Iron context (for agent system prompt injection)
 */
export async function getFullContext(): Promise<{
  memory: string;
  recentSessions: string[];
  vShapeProgram: string | null;
  exerciseGuide: string | null;
  workoutStatus: string | null;
}> {
  const context = getIronContext();
  const vShapeProgram = await getVShapeProgram();
  const exerciseGuide = await getExerciseGuide();
  const workoutStatus = await getWorkoutProgramStatus();
  
  return {
    ...context,
    vShapeProgram,
    exerciseGuide,
    workoutStatus
  };
}
