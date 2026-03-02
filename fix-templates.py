#!/usr/bin/env python3
"""
Fix all templates to use correct area-aware navigation headers.

Rules:
1. Daily Note: area should be "health" (tracks workouts/habits)
2. All templates: Use [📅 Today](obsidian://daily) not static dates
3. Area-specific templates: Link to area hub (e.g., [[Health Hub|Health Hub]])
4. Habit template: Add area hub link dynamically based on selected area
5. Workout templates: Keep program link, use dynamic today
"""

from pathlib import Path
import re

TEMPLATES_DIR = Path("/Volumes/ziggy/openclaw-workspace/Pinky & The Brain/Templates")

def fix_daily_note():
    """Fix Daily Note template"""
    filepath = TEMPLATES_DIR / "Daily Note.md"
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix empty area field
    content = content.replace('area: \n', 'area: health\n')
    
    # Fix Today link to be dynamic
    content = re.sub(
        r'\[\[<% tp\.date\.now\("YYYY-MM-DD"\) %>\|📅 Today\]\]',
        '[📅 Today](obsidian://daily)',
        content
    )
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("✓ Fixed Daily Note.md")

def fix_habit():
    """Fix Habit template to add dynamic area hub link"""
    filepath = TEMPLATES_DIR / "Habit.md"
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # The habit template needs a dynamic area hub link based on the selected area
    # This requires Templater logic
    old_nav = '> [[🏠base|🏠]] · [📅 Today](obsidian://daily)'
    
    new_nav = '''> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[<%* 
const areaHubs = {
  "health": "Health Hub",
  "work": "Work Hub",
  "relationships": "Relationships Hub",
  "household": "Household Hub",
  "interests": "Interests Hub",
  "education": "Education Hub",
  "finances": "Finances Hub"
};
const area = tp.file.frontmatter.area;
const hub = areaHubs[area] || "Health Hub";
tR += hub + "|" + hub;
%>]]'''
    
    content = content.replace(old_nav, new_nav)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("✓ Fixed Habit.md")

def fix_recipe():
    """Fix Recipe template to link to Household Hub"""
    filepath = TEMPLATES_DIR / "Recipe.md"
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace Recipe Index link with Household Hub
    content = content.replace(
        '> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Recipe Index|🍳 Recipes]]',
        '> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Household Hub|Household Hub]]'
    )
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("✓ Fixed Recipe.md")

def fix_workout_templates():
    """Fix all workout day templates to use dynamic today"""
    for template in ['Workout Day A.md', 'Workout Day B1.md', 'Workout Day B2.md', 'Workout Day C.md']:
        filepath = TEMPLATES_DIR / template
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix Today link to be dynamic
        content = re.sub(
            r'\[\[<% tp\.date\.now\("YYYY-MM-DD"\) %>\|📅 Today\]\]',
            '[📅 Today](obsidian://daily)',
            content
        )
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ Fixed {template}")

def fix_work_templates():
    """Fix work templates to use dynamic today"""
    for template in ['Work Client Project.md', 'Work Site Project.md']:
        filepath = TEMPLATES_DIR / template
        if not filepath.exists():
            continue
            
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix Today link to be dynamic
        content = re.sub(
            r'\[\[<% tp\.date\.now\("YYYY-MM-DD"\) %>\|📅 Today\]\]',
            '[📅 Today](obsidian://daily)',
            content
        )
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ Fixed {template}")

def fix_generic_templates():
    """Fix remaining templates that might have static today links"""
    for template_file in TEMPLATES_DIR.glob('*.md'):
        if template_file.name in ['Daily Note.md', 'Habit.md', 'Recipe.md', 
                                    'Workout Day A.md', 'Workout Day B1.md', 
                                    'Workout Day B2.md', 'Workout Day C.md',
                                    'Work Client Project.md', 'Work Site Project.md']:
            continue  # Already fixed
        
        with open(template_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        
        # Fix any static Today links
        content = re.sub(
            r'\[\[<% tp\.date\.now\("YYYY-MM-DD"\) %>\|📅 Today\]\]',
            '[📅 Today](obsidian://daily)',
            content
        )
        
        # Add area hub links if they have an area but no hub link
        lines = content.split('\n')
        has_area = any('area:' in line and line.strip().startswith('area:') for line in lines[:30])
        has_nav = any(line.strip().startswith('>') and '🏠' in line for line in lines[:30])
        
        if has_area and has_nav:
            # Check if nav has only home and today (needs area hub)
            for i, line in enumerate(lines[:30]):
                if line.strip().startswith('>') and '🏠' in line and '[📅 Today](obsidian://daily)' in line:
                    # Extract area from frontmatter
                    area = None
                    for fm_line in lines[:i]:
                        if fm_line.strip().startswith('area:'):
                            area_match = re.search(r'area:\s*["\']?(\w+)["\']?', fm_line)
                            if area_match:
                                area = area_match.group(1)
                                break
                    
                    # Check if it already has a third link
                    link_count = line.count('[[')
                    if link_count == 1 and area:  # Only [[🏠base|🏠]]
                        # Add area hub
                        area_hubs = {
                            'work': 'Work Hub',
                            'health': 'Health Hub',
                            'finances': 'Finances Hub',
                            'household': 'Household Hub',
                            'relationships': 'Relationships Hub',
                            'interests': 'Interests Hub',
                            'education': 'Education Hub',
                            'system': None  # System notes don't get hub links
                        }
                        hub = area_hubs.get(area)
                        if hub:
                            lines[i] = line.replace(
                                '[📅 Today](obsidian://daily)',
                                f'[📅 Today](obsidian://daily) · [[{hub}|{hub}]]'
                            )
                    break
        
        content = '\n'.join(lines)
        
        if content != original:
            with open(template_file, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ Fixed {template_file.name}")

def main():
    print("=== FIXING TEMPLATES ===\n")
    
    fix_daily_note()
    fix_habit()
    fix_recipe()
    fix_workout_templates()
    fix_work_templates()
    fix_generic_templates()
    
    print("\n" + "="*50)
    print("All templates updated!")

if __name__ == "__main__":
    main()
