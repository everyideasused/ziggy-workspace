---
type: database
area: health
status: active
tags:
  - health
  - iron
  - fitness-kb
  - training
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Health Hub|Health Hub]] · [[Iron — Fitness Knowledge Base|Iron KB]]

---

# MODULE 02 — TRAINING PRINCIPLES
### PhD-Level Reference for AI Fitness Agent

---

## THE HIERARCHY OF TRAINING VARIABLES

When programming for any athlete, the agent must prioritize variables in this order. Lower-order variables only matter if higher-order ones are handled correctly.

1. **Specificity** — Are we training the right muscles and movements for the goal?
2. **Progressive Overload** — Is the stimulus increasing over time?
3. **Volume** — Are we doing enough total work to drive adaptation?
4. **Intensity** — Are we training close enough to failure?
5. **Frequency** — How often are we hitting each muscle group?
6. **Exercise Selection** — Are we choosing the best movements?
7. **Rep Range** — Are reps matched to the training goal?
8. **Rest Periods** — Are rest intervals supporting the intended adaptation?

All other details (exercise order, tempo, time of day) are tertiary.

---

## PROGRESSIVE OVERLOAD

### Definition
Progressive overload is the systematic increase in training demand over time. Without it, adaptation plateaus. The body adapts to a stimulus and stops growing — this is called the **repeated bout effect.**

### Methods of Progressive Overload (in order of applicability for Nathan's setup)

| Method | Example | When to Use |
|---|---|---|
| **Load increase** | From 35lb to 53lb KB | When reps are consistently hitting top of target range |
| **Rep increase** | 3×8 → 3×10 → 3×12 | Most common — build reps then increase load |
| **Set increase** | 3×10 → 4×10 | When reps and load are maxed for current phase |
| **Density increase** | Same work in less time | Reduce rest 30s at a time |
| **Variation difficulty** | Push-up → Archer push-up → Pike push-up | When load cannot be added (bodyweight) |
| **Range of motion** | Partial → full ROM | Especially in squat patterns |
| **Tempo manipulation** | 3010 → 4010 | Increases time under tension without adding load |
| **Volume load** | Total sets × reps × weight | Overarching metric to track over weeks/months |

### The Double Progression Model (Agent's Primary Tool)
This is the most practical overload model for Nathan's setup:
1. Set a rep range (e.g., 8–12)
2. When the athlete hits the top of the range for all sets, increase the load
3. Drop back to the bottom of the range with the new load
4. Repeat

**Example**: KB Row with 35lb
- Week 1: 3×8 ✓
- Week 2: 3×10 ✓
- Week 3: 3×12 ✓
- Week 4: Move to 44lb → 3×8 (reset)

---

## INTENSITY METRICS

### Percentage of 1RM (One-Rep Maximum)
The traditional intensity metric. Prescribes load as a percentage of the maximum weight an athlete can lift once.

| % 1RM | Rep Range | Training Goal |
|---|---|---|
| 95–100% | 1–2 reps | Maximal strength |
| 85–95% | 2–5 reps | Strength |
| 75–85% | 5–8 reps | Strength-hypertrophy |
| 65–75% | 8–12 reps | Hypertrophy |
| 55–65% | 12–20 reps | Hypertrophy-endurance |
| <55% | 20+ reps | Muscular endurance |

**Agent note**: For kettlebell and bodyweight training, exact 1RM is rarely practical. Use RPE instead (see below).

### RPE — Rate of Perceived Exertion (Borg 6–20 or 0–10 Scale)
The agent should use the **0–10 RPE scale** as the primary intensity metric:

| RPE | Description | Reps Left in Tank (RIR) |
|---|---|---|
| 10 | Maximum effort — could not do another rep | 0 |
| 9 | Near maximum — maybe 1 rep left | 1 |
| 8 | Hard — definitely 2 reps left | 2 |
| 7 | Challenging but controlled | 3 |
| 6 | Moderate — somewhat hard | 4+ |
| 5 | Easy | 5+ |
| <5 | Very easy / warm-up territory | — |

**Target training zone**: RPE 7–9 for hypertrophy sets (leaving 1–3 reps in reserve)
**Warm-up sets**: RPE 4–6
**Deload sets**: RPE 5–6

### RIR — Reps in Reserve
RIR is the inverse of RPE — how many reps you could still do at the end of a set.
- **Hypertrophy**: 0–3 RIR (RPE 7–10)
- **Strength**: 0–2 RIR (RPE 8–10)
- **Endurance**: 3–5 RIR (RPE 5–7)

**Research key point**: Sets taken to 0–2 RIR are significantly more effective for hypertrophy than sets stopped at 5+ RIR. The agent should consistently push Nathan toward this range.

---

## VOLUME — SETS PER MUSCLE GROUP PER WEEK

### Research-Based Volume Landmarks (Dr. Mike Israetel / Renaissance Periodization Model)

| Volume Category | Sets/Week/Muscle Group | Effect |
|---|---|---|
| **MEV** (Minimum Effective Volume) | 8–10 sets | Enough to maintain muscle |
| **MAV** (Maximum Adaptive Volume) | 12–20 sets | Optimal growth zone |
| **MRV** (Maximum Recoverable Volume) | 20–30+ sets | Beyond this = overtraining |

### Nathan's Volume Targets by Priority

| Muscle Group | Priority | Weekly Sets Target | Notes |
|---|---|---|---|
| Lats | High | 14–18 | Pull-ups, rows, combined |
| Glute Max | High | 12–16 | Swings, hip hinges, thrusts |
| Lateral Deltoid | High | 14–18 | Lateral raises, presses |
| Rear Deltoid | High | 12–15 | Rows (high elbow), face pulls |
| Glute Med | Medium-High | 10–14 | Single-leg, abduction work |
| Hamstrings | Medium | 10–14 | RDLs, swings (secondary) |
| Quads | Medium | 10–14 | Squats, lunges, step-ups |
| Chest | Medium | 10–12 | Push-ups, dips, floor press |
| Biceps | Lower | 8–10 | Chin-ups (primary), curls |
| Triceps | Lower | 8–10 | Dips, push-ups (primary) |
| Core | Ongoing | 8–12 | Every session |

**Agent note on volume scaling by training days**:
- **3 days**: Distribute evenly; each session is higher volume full-body
- **4 days**: Upper/lower split; upper muscles hit 2x, lower 2x
- **5–6 days**: Each session is lower volume but frequency increases to 2–3x/week per muscle

---

## PERIODIZATION

Periodization is the systematic variation of training variables over time to maximize long-term adaptation and prevent accommodation.

### Linear Periodization
- Same reps/sets each session, gradually increasing load
- Best for beginners and early intermediate
- Example: Week 1–4 at 3×12, Week 5–8 at 3×10 heavier, etc.

### Undulating Periodization (Nathan's Recommended Model)

**Daily Undulating Periodization (DUP)**: Vary rep ranges within the same week
- Monday (Heavy): 4×5–6 @ RPE 8–9
- Wednesday (Moderate): 3×8–12 @ RPE 7–8
- Friday (High Rep): 3×15–20 @ RPE 7

This model works exceptionally well for kettlebell and calisthenics training because the weights are fixed — changing rep ranges effectively changes relative intensity.

**Weekly Undulating Periodization**: Vary focus by week within a mesocycle
- Week 1: Strength focus (low reps, heavy)
- Week 2–3: Hypertrophy focus (moderate reps)
- Week 4: Deload

### Block Periodization
Organize training into dedicated blocks of 4–8 weeks, each with a primary goal:
- **Accumulation Block** (4–6 weeks): High volume, moderate intensity. Build work capacity.
- **Intensification Block** (3–4 weeks): Lower volume, higher intensity. Push strength.
- **Realization Block** (1–2 weeks): Deload or peak. Express fitness gains.

**Agent recommendation for Nathan**: Use DUP within mesocycle blocks. Cycle through accumulation → intensification → deload every 6–8 weeks.

---

## HYPERTROPHY SCIENCE — MECHANISMS

The agent should understand the three primary mechanisms of muscle hypertrophy:

### 1. Mechanical Tension
- **The most important driver** of muscle growth
- Created by lifting heavy relative to capacity (high % of 1RM, low RIR)
- Occurs when the force-generating capacity of the muscle is challenged at or near failure
- Key: Full range of motion, stretch under load (e.g., lat at the bottom of a pull-up)

### 2. Metabolic Stress
- The "pump" — accumulation of metabolites (lactate, hydrogen ions) within the muscle
- Created by higher rep ranges, shorter rest periods, constant tension
- Less important than mechanical tension but contributes meaningfully
- Relevant for isolation work (lateral raises, curls, calf raises)

### 3. Muscle Damage
- Microtrauma to muscle fibers, especially from eccentric loading (lowering phase)
- Triggers satellite cell activation and inflammatory repair
- **Agent caution**: Excessive muscle damage causes prolonged DOMS and impairs recovery. Especially relevant at age 44 — control eccentric loading, especially when introducing new movements.

### Agent Application
- For compound movements (swings, pull-ups, rows, squats): Prioritize mechanical tension
- For isolation/accessory (lateral raises, curls): Use metabolic stress (higher reps, controlled tempo)
- Introduce new exercises gradually to manage muscle damage

---

## REP TEMPO

Tempo is expressed as a 4-digit code: **Eccentric – Pause – Concentric – Pause** (e.g., 3010)

| Digit | Phase | Example |
|---|---|---|
| First | Eccentric (lowering) | 3 seconds down |
| Second | Bottom pause | 1 second hold |
| Third | Concentric (lifting) | 0 = explosive |
| Fourth | Top pause | 1 second hold |

### Recommended Tempos by Goal

| Goal | Tempo | Notes |
|---|---|---|
| Strength | 21X0 | Controlled down, explosive up |
| Hypertrophy | 3010 or 4010 | Slow eccentric increases TUT |
| Power (swings) | X0X0 | Explosive in both directions |
| Rehab/Stability | 5050 | Full control throughout |

**Agent note**: Slow eccentrics (3–4 second lowering) significantly increase time under tension and can substitute for heavier loads when equipment is limited — highly applicable to Nathan's setup.

---

## REST PERIODS

| Goal | Rest Between Sets | Rationale |
|---|---|---|
| Maximal strength (1–5 reps) | 3–5 minutes | Full phosphocreatine recovery |
| Hypertrophy (6–15 reps) | 90–120 seconds | Partial recovery; maintain volume |
| Muscular endurance (15+ reps) | 30–60 seconds | Metabolic stress emphasis |
| Power/explosive (swings, cleans) | 60–90 seconds | Technique quality preservation |
| Circuit/conditioning | 15–45 seconds | Cardiovascular challenge |

**Agent note for Nathan at 44**: Research shows rest periods of 2+ minutes between hypertrophy sets lead to greater muscle growth than 60-second rest periods. Do not rush rest in pursuit of "intensity" — this compromises volume quality. Longer rest = more weight lifted per set = more mechanical tension.

---

## SETS STRUCTURES

### Straight Sets
- Most common; perform all sets of one exercise before moving on
- Best for: Compound movements, strength work, technique practice

### Supersets
- Two exercises back-to-back with minimal rest between
- **Antagonist supersets** (e.g., row + press): No performance loss; saves time
- **Agonist supersets**: Very fatiguing; use sparingly
- Best for: Time-efficient sessions, metabolic conditioning

### Giant Sets / Circuits
- 3–5 exercises in sequence
- Best for: Conditioning, fat loss emphasis, time-crunched sessions

### Drop Sets
- Perform a set to near-failure, immediately reduce weight and continue
- Creates high metabolic stress and volume
- Agent caution: Use max 1–2 drop sets per session; significantly increases recovery demand

### Rest-Pause
- Perform reps to near-failure, rest 10–20 seconds (without putting the weight down), continue
- Very effective for hypertrophy; keeps mechanical tension high
- Best for: Bodyweight movements (push-ups, pull-up holds) where you can't increase load

---

## WARM-UP PROTOCOL

### Purpose
- Elevate core temperature (improves muscle contractility)
- Increase synovial fluid in joints (reduces injury risk)
- Prime the nervous system for the upcoming movement patterns
- Address mobility deficits before they become problems under load

### Agent's Standard Warm-Up Template (10–15 minutes)

**Layer 1 — General (3–5 min)**
- Light jogging or jumping jacks
- Arm circles, leg swings, hip circles
- Goal: Raise heart rate and body temperature

**Layer 2 — Mobility (4–6 min)**
- Hip flexor stretch (kneeling, 60 seconds per side)
- Thoracic rotation (cat-cow, thread the needle)
- Glute activation — clamshells or hip circles (2×15)
- Shoulder circles and band pull-aparts (2×15)

**Layer 3 — Movement-Specific (3–4 min)**
- 2–3 warm-up sets of the first exercise at 40–60% working weight (RPE 3–5)
- Progressively increase load to working weight

### Age-44 Warm-Up Rule
At 44, joints need more time. Nathan should budget 12–15 minutes for warm-up on heavy days, never skipping Layer 2. Cold tendons and ligaments are injury risk. This is non-negotiable.

---

## COOL-DOWN AND FLEXIBILITY

### Post-Session Cool-Down (5–10 min)
- Light walking or slow cycling to reduce heart rate
- Static stretching of the muscles worked (hold 30–60 seconds per stretch)
- Foam rolling / self-myofascial release on tight areas

### Flexibility Types

**Static Stretching**: Hold a stretch at end range of motion for 30–60+ seconds
- Best done post-workout (muscles are warm)
- Reduces injury risk, improves range of motion over time
- Key stretches for Nathan: Hip flexors, hamstrings, pigeon pose (piriformis/glutes), lat doorframe stretch, chest opener

**Dynamic Stretching**: Controlled movement through range of motion
- Best done pre-workout as part of warm-up
- Examples: Leg swings, arm circles, inchworms, walking lunges with rotation

**PNF Stretching (Proprioceptive Neuromuscular Facilitation)**:
- Most effective method for rapid flexibility gains
- Contract-relax method: Stretch to end range → 6-second isometric contraction → relax → push deeper
- Best applied with a partner but can be done solo against a wall or with a band

**Mobility vs. Flexibility**:
- **Flexibility**: Passive range of motion (muscle length)
- **Mobility**: Active range of motion under control (flexibility + strength through that range)
- Nathan needs both — prioritize hip mobility and thoracic spine mobility for performance and aesthetics

---

## NEUROMUSCULAR ADAPTATIONS

### Early Phase Gains (Weeks 1–8)
Most strength gains in the first 1–2 months are **neural**, not structural. The brain is learning to:
- Recruit more motor units simultaneously
- Improve synchronization of firing patterns
- Reduce antagonist co-contraction (allow muscles to work without fighting themselves)

**Agent note**: This means early progress is fast and exciting. Set expectations that hypertrophy (visible muscle gain) becomes the primary driver after the initial neural phase. Nathan should not expect to "see" dramatic muscle changes in the first month — but strength and performance will improve rapidly.

### Mind-Muscle Connection
Research shows that consciously focusing on the target muscle during a set increases its EMG activation. The agent should always include cueing that directs Nathan's attention to the intended muscle. Example: "As you row the KB, think about squeezing your lat — not pulling with your bicep."

---

## TRAINING FOR BODY RECOMPOSITION (Nathan's Primary Phase)

### What is Recomp?
Simultaneous fat loss and muscle gain. Widely considered difficult for trained athletes, but highly achievable for:
- Beginners (Nathan is intermediate but has significant untapped genetic potential)
- Athletes with body fat above 15%
- Athletes returning after a break
- Athletes with high protein intake

### Recomp Requirements
1. **Caloric intake near maintenance** (slight deficit of 100–300 kcal/day OR maintenance with high protein)
2. **High protein** (1.0–1.2g per lb of bodyweight minimum)
3. **Progressive resistance training** (the anabolic signal)
4. **Adequate sleep** (7–9 hours — growth hormone peaks during slow-wave sleep)
5. **Patience** — progress is slower than a dedicated bulk or cut, but composition changes are real

### Tracking Recomp Progress
- Scale weight is not the primary metric during recomp — it may stay stable or even increase while fat is lost and muscle is gained
- **Primary metrics**: Body fat % measurement, tape measurements (waist, chest, hips, shoulders), how clothes fit, performance markers (more pull-ups, heavier KB, faster runs)
- **Agent rule**: Never alarm Nathan if the scale doesn't drop. Teach body composition thinking, not weight thinking.

---

## DELOAD WEEKS

### What is a Deload?
A planned reduction in training volume and/or intensity, typically lasting 1 week every 4–8 weeks.

### Why Deload?
- Accumulated fatigue masks fitness gains — performance during a mesocycle may plateau even as adaptation is occurring
- Allows joints, tendons, and ligaments to recover (these have slower blood supply than muscles)
- Resets the nervous system
- Often results in personal records in the week following a deload

### Deload Options

| Type | Description | When to Use |
|---|---|---|
| **Volume deload** | Reduce sets by 40–50%, keep intensity | Most common; maintains strength feel |
| **Intensity deload** | Reduce load by 20–30%, keep volume | When joints are stressed |
| **Full rest** | Complete rest or light movement only | When burned out or recovering from illness |
| **Active recovery** | Walking, yoga, light swimming | Preferred for maintaining habit |

### Agent Deload Trigger Signals
Recommend or prescribe a deload when Nathan reports:
- Persistent joint pain or tendon soreness (not muscle soreness)
- Declining performance for 2+ consecutive sessions
- Sleep disturbances or elevated resting heart rate
- Loss of motivation or general fatigue
- Completing 4–6 weeks of progressive training

---

## THE SRA CURVE — STIMULUS, RECOVERY, ADAPTATION

Understanding the SRA (Stimulus-Recovery-Adaptation) curve is essential for intelligent programming:

1. **Stimulus**: Training session creates fatigue and micro-damage
2. **Recovery**: Body repairs damage using protein and sleep
3. **Adaptation**: Body "supercompensates" — becomes stronger/larger than before the stimulus
4. **New baseline**: Fitness level is now higher

**Key principle**: The next training stimulus should arrive at the peak of the adaptation curve — not during recovery (too soon = overtraining) and not after the adaptation fades (too late = detraining).

For hypertrophy, each muscle group should be trained every **48–72 hours** (2–3x per week) to repeatedly hit the adaptation peak.

---

*Module 02 of 05 | Fitness Knowledge Base v1.0*

---

Created by: Nathan & Ziggy · AI: anthropic/claude-sonnet-4-5-20250929
