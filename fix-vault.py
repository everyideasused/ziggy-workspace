#!/usr/bin/env python3
"""
Fix vault notes to meet System Guide standards:
1. Add navigation header if missing
2. Fill empty area fields with appropriate values
"""

import os
import re
from pathlib import Path

VAULT = Path("/Volumes/ziggy/openclaw-workspace/Pinky & The Brain")
NOTES_DIR = VAULT / "Notes"
JOURNAL_DIR = VAULT / "Journal"

NAV_HEADER = "> [[🏠base|🏠]] · [📅 Today](obsidian://daily)\n\n---\n\n"

def determine_area(filename, content):
    """Determine appropriate area based on filename and content"""
    filename_lower = filename.lower()
    content_lower = content[:500].lower()
    
    # System files
    if any(x in filename_lower for x in ['system', 'guide', 'vault', 'template', 'getting started', 'ziggy', 'tags reference', 'dashboard', 'archives', 'drafts']):
        return 'system'
    
    # Work/Construction related
    if any(x in filename_lower for x in ['construction', 'pm', 'project delivery', 'ahj', 'appendix', 'contract', 'financial', 'procurement', 'entitlement', 'permit', 'tenant', 'stakeholder', 'sector', 'real estate', 'feasibility', 'design', 'closeout', 'warranty', 'risk']):
        return 'work'
    
    # Health/Fitness
    if any(x in filename_lower for x in ['v-shape', 'workout', 'protein', 'sleep', 'water', 'fitness', 'health']):
        return 'health'
    
    # Household
    if any(x in filename_lower for x in ['recipe', 'meal', 'grocery', 'garden', 'micronutrient', 'inventory']):
        return 'household'
    
    # Finances
    if 'financ' in filename_lower:
        return 'finances'
    
    # Education
    if any(x in filename_lower for x in ['read', 'reading', 'education']):
        return 'education'
    
    # Work Hub
    if 'work hub' in filename_lower:
        return 'work'
    
    # Other Hubs
    if 'hub' in filename_lower:
        if 'health' in filename_lower:
            return 'health'
        elif 'household' in filename_lower:
            return 'household'
        elif 'relationship' in filename_lower:
            return 'relationships'
        elif 'interest' in filename_lower:
            return 'interests'
        elif 'education' in filename_lower:
            return 'education'
        elif 'finance' in filename_lower:
            return 'finances'
    
    # Default to system if unclear
    return 'system'

def fix_file(filepath):
    """Fix a single markdown file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    lines = content.split('\n')
    
    # Check if has frontmatter
    if not content.startswith('---'):
        print(f"⚠️  {filepath.name} - No frontmatter, skipping")
        return False
    
    # Find end of frontmatter
    fm_end = None
    for i, line in enumerate(lines[1:], 1):
        if line == '---':
            fm_end = i
            break
    
    if fm_end is None:
        print(f"⚠️  {filepath.name} - Invalid frontmatter, skipping")
        return False
    
    # Extract frontmatter and body
    frontmatter_lines = lines[1:fm_end]
    body_start = fm_end + 1
    body_lines = lines[body_start:]
    
    # Fix empty area field
    modified_fm = False
    for i, line in enumerate(frontmatter_lines):
        if line.strip() == 'area:' or re.match(r'^area:\s*$', line):
            area = determine_area(filepath.name, content)
            frontmatter_lines[i] = f'area: {area}'
            modified_fm = True
            print(f"  ✓ Set area: {area}")
    
    # Check if nav header exists
    has_nav_header = False
    first_content_line_idx = 0
    
    for i, line in enumerate(body_lines):
        if line.strip():  # First non-empty line
            if '🏠' in line and '📅' in line and line.startswith('>'):
                has_nav_header = True
            first_content_line_idx = i
            break
    
    # Add nav header if missing
    if not has_nav_header:
        # Insert nav header at the start of body
        body_lines.insert(0, NAV_HEADER)
        print(f"  ✓ Added navigation header")
        modified = True
    else:
        modified = modified_fm
    
    if not modified and not modified_fm:
        return False
    
    # Rebuild file
    new_content = '---\n'
    new_content += '\n'.join(frontmatter_lines) + '\n'
    new_content += '---\n'
    new_content += '\n'.join(body_lines)
    
    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return True

def main():
    print("=== VAULT FIX SCRIPT ===")
    print("Applying System Guide standards...\n")
    
    fixed_count = 0
    total_count = 0
    
    # Fix Notes directory
    print("Fixing Notes/...")
    for filepath in NOTES_DIR.glob('*.md'):
        total_count += 1
        print(f"\n📝 {filepath.name}")
        if fix_file(filepath):
            fixed_count += 1
    
    # Fix Journal directory
    print("\nFixing Journal/...")
    for filepath in JOURNAL_DIR.glob('*.md'):
        total_count += 1
        print(f"\n📝 {filepath.name}")
        if fix_file(filepath):
            fixed_count += 1
    
    print("\n" + "="*40)
    print(f"Total files processed: {total_count}")
    print(f"Files fixed: {fixed_count}")
    print(f"Files already compliant: {total_count - fixed_count}")

if __name__ == "__main__":
    main()
