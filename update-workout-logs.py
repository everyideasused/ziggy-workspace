#!/usr/bin/env python3
"""
Update existing workout log files and templates to show target sets x reps from the program.
"""

from pathlib import Path
import re

VAULT = Path("/Volumes/ziggy/openclaw-workspace/Pinky & The Brain")
LOGS_DIR = VAULT / "Notes/Fitness/Logs"
TEMPLATES_DIR = VAULT / "Templates"

# Day A exercise details from the program
DAY_A_CONTENT = '''### Exercises
> **Target:** Complete all sets at top of rep range before progressing

#### A1: Pike Push-ups (elevated feet)
**Target:** 3 sets x 8-12 reps | Rest: 60s between sets
| Set | Target | Actual | Tempo | Notes |
|-----|--------|--------|-------|-------|
| 1   | 8-12   |        |       |       |
| 2   | 8-12   |        |       |       |
| 3   | 8-12   |        |       |       |

**Variation used:** (floor pike / feet elevated / wall HSPU negative / wall HSPU)

#### A2: Wide Grip Push-ups
**Target:** 3 sets x 10-15 reps | Rest: 60s | Tempo: 3s eccentric
| Set | Target | Actual | Tempo | Notes |
|-----|--------|--------|-------|-------|
| 1   | 10-15  |        | 3s down |     |
| 2   | 10-15  |        | 3s down |     |
| 3   | 10-15  |        | 3s down |     |

**Variation used:** (standard wide / decline wide / archer)

#### B1: KB Floor Press
**Target:** 3 sets x 10-12 reps/side | Rest: 45s | 2s pause at top
| Set | Target | Actual (L) | Actual (R) | KB Weight | Notes |
|-----|--------|------------|------------|-----------|-------|
| 1   | 10-12  |            |            |           | 2s pause top |
| 2   | 10-12  |            |            |           | 2s pause top |
| 3   | 10-12  |            |            |           | 2s pause top |

#### B2: Diamond Push-ups
**Target:** 3 sets x 8-12 reps | Rest: 60s
| Set | Target | Actual | Tempo | Notes |
|-----|--------|--------|-------|-------|
| 1   | 8-12   |        |       |       |
| 2   | 8-12   |        |       |       |
| 3   | 8-12   |        |       |       |

**Variation used:** (standard diamond / deficit / pseudo planche)

#### C1: KB Halo
**Target:** 2 sets x 10 reps/direction | Rest: 30s
| Set | Target | Actual (each direction) | KB Weight | Notes |
|-----|--------|------------------------|-----------|-------|
| 1   | 10/dir |                        |           |       |
| 2   | 10/dir |                        |           |       |

#### C2: KB Overhead Press
**Target:** 3 sets x 8-10 reps/side | Rest: 60s | Strict form, full lockout
| Set | Target | Actual (L) | Actual (R) | KB Weight | Notes |
|-----|--------|------------|------------|-----------|-------|
| 1   | 8-10   |            |            |           | Full lockout |
| 2   | 8-10   |            |            |           | Full lockout |
| 3   | 8-10   |            |            |           | Full lockout |

#### D: Push-up AMRAP Finisher
**Target:** 1 set AMRAP (any variation) | Log total reps
| Total Reps | Variation Used | Time (optional) |
|------------|----------------|-----------------|
|            |                |                 |'''

DAY_B1_CONTENT = '''### Exercises
> **Target:** Complete all sets at top of rep range before progressing

#### A: KB Goblet Squat
**Target:** 4 sets x 12-15 reps | Rest: 60s | Deep as possible, glute squeeze at top
| Set | Target | Actual | KB Weight | Notes |
|-----|--------|--------|-----------|-------|
| 1   | 12-15  |        |           | Full depth, squeeze glutes |
| 2   | 12-15  |        |           | Full depth, squeeze glutes |
| 3   | 12-15  |        |           | Full depth, squeeze glutes |
| 4   | 12-15  |        |           | Full depth, squeeze glutes |

#### B: KB Bulgarian Split Squat
**Target:** 3 sets x 10-12 reps/side | Rest: 60s | Rear foot elevated
| Set | Target | Actual (L) | Actual (R) | KB Weight | Notes |
|-----|--------|------------|------------|-----------|-------|
| 1   | 10-12  |            |            |           | Rear foot on chair/bench |
| 2   | 10-12  |            |            |           | Rear foot on chair/bench |
| 3   | 10-12  |            |            |           | Rear foot on chair/bench |

#### C: KB Sumo Deadlift
**Target:** 3 sets x 12-15 reps | Rest: 60s | Wide stance, squeeze glutes at top
| Set | Target | Actual | KB Weight | Notes |
|-----|--------|--------|-----------|-------|
| 1   | 12-15  |        |           | Squeeze hard at top |
| 2   | 12-15  |        |           | Squeeze hard at top |
| 3   | 12-15  |        |           | Squeeze hard at top |

#### D1: Bodyweight Hip Thrust (feet elevated)
**Target:** 3 sets x 15-20 reps | Rest: 45s | Hold top 2s
| Set | Target | Actual | Weight (if adding KB) | Notes |
|-----|--------|--------|-----------------------|-------|
| 1   | 15-20  |        |                       | 2s hold at top |
| 2   | 15-20  |        |                       | 2s hold at top |
| 3   | 15-20  |        |                       | 2s hold at top |

#### D2: KB Swing
**Target:** 3 sets x 15-20 reps | Rest: 60s | Hip hinge power, glute dominant
| Set | Target | Actual | KB Weight | Notes |
|-----|--------|--------|-----------|-------|
| 1   | 15-20  |        |           | Power from hips |
| 2   | 15-20  |        |           | Power from hips |
| 3   | 15-20  |        |           | Power from hips |

#### E: Wall Sit Hold Finisher
**Target:** 2 sets x 30-45s | Rest: 30s | Thighs parallel
| Set | Target | Actual Time | Notes |
|-----|--------|-------------|-------|
| 1   | 30-45s |             | Thighs parallel to floor |
| 2   | 30-45s |             | Thighs parallel to floor |'''

DAY_B2_CONTENT = '''### Exercises
> **Target:** Complete all sets at top of rep range before progressing

#### A: KB Single-Leg Deadlift
**Target:** 3 sets x 10-12 reps/side | Rest: 60s | Balance + glute/ham, slow eccentric
| Set | Target | Actual (L) | Actual (R) | KB Weight | Notes |
|-----|--------|------------|------------|-----------|-------|
| 1   | 10-12  |            |            |           | Slow eccentric |
| 2   | 10-12  |            |            |           | Slow eccentric |
| 3   | 10-12  |            |            |           | Slow eccentric |

#### B: KB Swing
**Target:** 4 sets x 15-20 reps | Rest: 60s | Explosive, power from hips
| Set | Target | Actual | KB Weight | Notes |
|-----|--------|--------|-----------|-------|
| 1   | 15-20  |        |           | Explosive hip drive |
| 2   | 15-20  |        |           | Explosive hip drive |
| 3   | 15-20  |        |           | Explosive hip drive |
| 4   | 15-20  |        |           | Explosive hip drive |

#### C: Reverse Lunge (KB in goblet)
**Target:** 3 sets x 10-12 reps/side | Rest: 60s | Step back, lean slight forward for glute
| Set | Target | Actual (L) | Actual (R) | KB Weight | Notes |
|-----|--------|------------|------------|-----------|-------|
| 1   | 10-12  |            |            |           | Lean forward slightly |
| 2   | 10-12  |            |            |           | Lean forward slightly |
| 3   | 10-12  |            |            |           | Lean forward slightly |

#### D1: Nordic Curl Negative (or hamstring slide)
**Target:** 3 sets x 5-8 reps | Rest: 60s | Slow 5s eccentric, anchor feet
| Set | Target | Actual | Notes |
|-----|--------|--------|-------|
| 1   | 5-8    |        | 5s eccentric, feet anchored |
| 2   | 5-8    |        | 5s eccentric, feet anchored |
| 3   | 5-8    |        | 5s eccentric, feet anchored |

#### D2: Single Leg Glute Bridge
**Target:** 3 sets x 12-15 reps/side | Rest: 45s | KB on hip to progress, 2s hold at top
| Set | Target | Actual (L) | Actual (R) | Weight (if adding KB) | Notes |
|-----|--------|------------|------------|-----------------------|-------|
| 1   | 12-15  |            |            |                       | 2s hold at top |
| 2   | 12-15  |            |            |                       | 2s hold at top |
| 3   | 12-15  |            |            |                       | 2s hold at top |

#### E: KB Goblet Squat Pulse Finisher
**Target:** 2 sets x 20 reps | Quarter-rep pulses at bottom
| Set | Target | Actual | KB Weight | Notes |
|-----|--------|--------|-----------|-------|
| 1   | 20     |        |           | Quarter pulses at bottom |
| 2   | 20     |        |           | Quarter pulses at bottom |'''

DAY_C_CONTENT = '''### Exercises
> **Target:** Complete all sets at top of rep range before progressing

#### A: Pull-ups (overhand, shoulder width+)
**Target:** 4 sets x AMRAP (target 5-12) | Rest: 90s | THE V-taper builder
| Set | Target | Actual | Notes |
|-----|--------|--------|-------|
| 1   | 5-12   |        | Dead hang start, chin over bar |
| 2   | 5-12   |        | Dead hang start, chin over bar |
| 3   | 5-12   |        | Dead hang start, chin over bar |
| 4   | 5-12   |        | Dead hang start, chin over bar |

**Variation used:** (negatives / band-assisted / full pull-ups / weighted)

#### B: Chin-ups (underhand grip)
**Target:** 3 sets x AMRAP (target 5-10) | Rest: 75s | Lat + bicep combo, slow 3s eccentric
| Set | Target | Actual | Notes |
|-----|--------|--------|-------|
| 1   | 5-10   |        | 3s eccentric |
| 2   | 5-10   |        | 3s eccentric |
| 3   | 5-10   |        | 3s eccentric |

**Variation used:** (negatives / band-assisted / full chin-ups / weighted)

#### C: KB Gorilla Row
**Target:** 3 sets x 10-12 reps/side | Rest: 60s | Wide base, squeeze lats at top
| Set | Target | Actual (L) | Actual (R) | KB Weight | Notes |
|-----|--------|------------|------------|-----------|-------|
| 1   | 10-12  |            |            |           | Squeeze lats |
| 2   | 10-12  |            |            |           | Squeeze lats |
| 3   | 10-12  |            |            |           | Squeeze lats |

#### D1: KB Renegade Row
**Target:** 3 sets x 8-10 reps/side | Rest: 45s | Core + lats, keep hips square
| Set | Target | Actual (L) | Actual (R) | KB Weight | Notes |
|-----|--------|------------|------------|-----------|-------|
| 1   | 8-10   |            |            |           | Hips square |
| 2   | 8-10   |            |            |           | Hips square |
| 3   | 8-10   |            |            |           | Hips square |

#### D2: KB Bicep Curl
**Target:** 3 sets x 10-12 reps/side | Rest: 45s | Slow 3s eccentric
| Set | Target | Actual (L) | Actual (R) | KB Weight | Notes |
|-----|--------|------------|------------|-----------|-------|
| 1   | 10-12  |            |            |           | 3s down |
| 2   | 10-12  |            |            |           | 3s down |
| 3   | 10-12  |            |            |           | 3s down |

#### E: Pull-up Bar Hang AMRAP Finisher
**Target:** 1 set max time | Dead hang, log seconds
| Total Time (seconds) | Notes |
|---------------------|-------|
|                     | Dead hang |'''

def update_workout_log(filepath, day_type, is_template=False):
    """Update a workout log file or template with the correct exercise details"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Determine content to insert
    if day_type == 'A':
        new_exercises_block = DAY_A_CONTENT
    elif day_type == 'B1':
        new_exercises_block = DAY_B1_CONTENT
    elif day_type == 'B2':
        new_exercises_block = DAY_B2_CONTENT
    elif day_type == 'C':
        new_exercises_block = DAY_C_CONTENT
    else:
        return False
    
    if is_template:
        # For templates, find ## Exercises and replace everything until the next ## header or end of file
        start_marker_pattern = r'(## Exercises\s*\n)'
        end_marker_pattern = r'(\n## [^\n]+|\Z)'
        
        start_match = re.search(start_marker_pattern, content)
        if not start_match:
            print(f"  ⚠️  {filepath.name} - '## Exercises' header not found in template.")
            return False
        
        # The content to be replaced starts after '## Exercises\n' and goes until the next '##' header
        # The new_exercises_block itself starts with '### Exercises'.
        # So we need to insert new_exercises_block right after '## Exercises\n' and remove the old exercise content.
        
        # Find the end of the existing exercise section in the template
        next_header_match = re.search(end_marker_pattern, content[start_match.end():])
        if next_header_match:
            end_pos_of_old_exercises = start_match.end() + next_header_match.start()
        else:
            end_pos_of_old_exercises = len(content) # Go to end of file
        
        # Reconstruct content: part before ## Exercises + new_exercises_block + part after old exercises
        new_content = content[:start_match.end()] + new_exercises_block + content[end_pos_of_old_exercises:]

    else: # For existing logs
        # Replace from ### Exercises to ### Session Summary
        pattern = r'(### Exercises.*?)(?=### Session Summary)'
        replacement = new_exercises_block + '\n\n---\n\n'
        new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def main():
    print("=== UPDATING WORKOUT LOGS WITH TARGET SETS/REPS ===\n")
    
    # Update existing logs
    print("Updating existing logs...")
    if LOGS_DIR.exists():
        for log_file in sorted(LOGS_DIR.glob('*.md')):
            if 'Day A' in log_file.name:
                if update_workout_log(log_file, 'A', is_template=False):
                    print(f"  ✓ {log_file.name}")
            elif 'Day B1' in log_file.name:
                if update_workout_log(log_file, 'B1', is_template=False):
                    print(f"  ✓ {log_file.name}")
            elif 'Day B2' in log_file.name:
                if update_workout_log(log_file, 'B2', is_template=False):
                    print(f"  ✓ {log_file.name}")
            elif 'Day C' in log_file.name:
                if update_workout_log(log_file, 'C', is_template=False):
                    print(f"  ✓ {log_file.name}")
    
    # Update templates
    print("\nUpdating templates...")
    templates = [
        ('Workout Day A.md', 'A'),
        ('Workout Day B1.md', 'B1'),
        ('Workout Day B2.md', 'B2'),
        ('Workout Day C.md', 'C')
    ]
    
    for template_name, day_type in templates:
        template_path = TEMPLATES_DIR / template_name
        if template_path.exists():
            if update_workout_log(template_path, day_type, is_template=True):
                print(f"  ✓ {template_name}")
            else:
                print(f"  ⚠️  Failed to update {template_name}")
    
    print("\n" + "="*50)
    print("All workout logs and templates updated!")
    print("Each exercise now shows: Target sets x reps | Rest time | Form cues")

if __name__ == "__main__":
    main()
