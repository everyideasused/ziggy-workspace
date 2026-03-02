#!/usr/bin/env python3
"""
Fix vault notes to meet System Guide standards:
1. Add navigation header if missing (after frontmatter, before content)
2. Fill empty area fields
"""

import os
import re
from pathlib import Path

VAULT = Path("/Volumes/ziggy/openclaw-workspace/Pinky & The Brain")
NOTES_DIR = VAULT / "Notes"
JOURNAL_DIR = VAULT / "Journal"

def has_nav_header(lines_after_fm):
    """Check if nav header exists in first few lines after frontmatter"""
    for line in lines_after_fm[:5]:
        if '🏠' in line and '📅' in line and line.strip().startswith('>'):
            return True
    return False

def determine_area(filename, content):
    """Determine appropriate area based on filename and content"""
    filename_lower = filename.lower()
    
    # System files
    if any(x in filename_lower for x in ['system', 'guide', 'vault', 'template', 'getting started', 'ziggy', 'tags reference', 'dashboard', 'archives', 'drafts']):
        return 'system'
    
    # Work/Construction related
    if any(x in filename_lower for x in ['construction', 'pm', 'project delivery', 'ahj', 'appendix', 'contract', 'financial', 'procurement', 'entitlement', 'permit', 'tenant', 'stakeholder', 'sector', 'real estate', 'feasibility', 'design', 'closeout', 'warranty', 'risk', 'work hub']):
        return 'work'
    
    # Health/Fitness
    if any(x in filename_lower for x in ['v-shape', 'workout', 'protein', 'sleep', 'water', 'fitness', 'health']):
        return 'health'
    
    # Household
    if any(x in filename_lower for x in ['recipe', 'meal', 'grocery', 'garden', 'micronutrient', 'inventory', 'household']):
        return 'household'
    
    # Finances
    if 'financ' in filename_lower:
        return 'finances'
    
    # Education
    if any(x in filename_lower for x in ['read', 'reading', 'education']):
        return 'education'
    
    # Relationships
    if 'relationship' in filename_lower:
        return 'relationships'
    
    # Interests
    if 'interest' in filename_lower:
        return 'interests'
    
    # Default to system if unclear
    return 'system'

def fix_file(filepath):
    """Fix a single markdown file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    modified = False
    
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
    body_lines = lines[fm_end + 1:]
    
    # Fix empty area field
    for i, line in enumerate(frontmatter_lines):
        if line.strip() == 'area:' or re.match(r'^area:\s*$', line):
            area = determine_area(filepath.name, content)
            frontmatter_lines[i] = f'area: {area}'
            modified = True
            print(f"  ✓ Set area: {area}")
    
    # Check if nav header exists
    if not has_nav_header(body_lines):
        # Add navigation header at the start
        nav_header = [
            "",
            "> [[🏠base|🏠]] · [📅 Today](obsidian://daily)",
            "",
            "---",
            ""
        ]
        
        # Remove any leading blank lines
        while body_lines and not body_lines[0].strip():
            body_lines.pop(0)
        
        # Insert nav header
        body_lines = nav_header + body_lines
        modified = True
        print(f"  ✓ Added navigation header")
    
    if not modified:
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
    print("=== VAULT FIX SCRIPT V2 ===")
    print("Applying System Guide standards...\n")
    
    fixed_count = 0
    total_count = 0
    
    # Fix Notes directory
    print("Fixing Notes/...")
    for filepath in sorted(NOTES_DIR.glob('*.md')):
        total_count += 1
        print(f"📝 {filepath.name}")
        if fix_file(filepath):
            fixed_count += 1
    
    # Fix Journal directory  
    print("\nFixing Journal/...")
    for filepath in sorted(JOURNAL_DIR.glob('*.md')):
        total_count += 1
        print(f"📝 {filepath.name}")
        if fix_file(filepath):
            fixed_count += 1
    
    print("\n" + "="*40)
    print(f"Total files processed: {total_count}")
    print(f"Files fixed: {fixed_count}")
    print(f"Already compliant: {total_count - fixed_count}")

if __name__ == "__main__":
    main()
