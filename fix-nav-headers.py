#!/usr/bin/env python3
"""
Fix navigation headers vault-wide:
1. Remove ALL existing nav headers (even multiples)
2. Add ONE correct header as first line after frontmatter
3. Daily notes: use [📅 Today](obsidian://daily) with date wikilinks for yesterday/tomorrow
4. Regular notes: use [📅 Today](obsidian://daily)
"""

import re
from pathlib import Path
from datetime import datetime, timedelta

VAULT = Path("/Volumes/ziggy/openclaw-workspace/Pinky & The Brain")

def parse_date(filename):
    """Extract date from daily note filename like '2026-03-02.md'"""
    match = re.match(r'(\d{4}-\d{2}-\d{2})', filename)
    if match:
        return datetime.strptime(match.group(1), '%Y-%m-%d')
    return None

def is_nav_header(line):
    """Check if line is a navigation header"""
    stripped = line.strip()
    return stripped.startswith('>') and ('🏠' in line or '📅' in line or 'Yesterday' in line or 'Tomorrow' in line)

def fix_file(filepath):
    """Fix navigation header in a single file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    
    # Find frontmatter end
    if not lines[0] == '---':
        print(f"⚠️  {filepath.name} - No frontmatter, skipping")
        return False
    
    fm_end = None
    for i, line in enumerate(lines[1:], 1):
        if line == '---':
            fm_end = i
            break
    
    if fm_end is None:
        print(f"⚠️  {filepath.name} - Invalid frontmatter, skipping")
        return False
    
    # Extract parts
    frontmatter = lines[:fm_end+1]
    body = lines[fm_end+1:]
    
    # REMOVE ALL existing nav headers from body
    cleaned_body = []
    for line in body:
        if not is_nav_header(line):
            cleaned_body.append(line)
    
    # Remove leading blank lines
    while cleaned_body and not cleaned_body[0].strip():
        cleaned_body.pop(0)
    
    # Generate correct nav header
    is_daily = 'Journal' in str(filepath)
    is_workout_log = 'Fitness/Logs' in str(filepath)
    
    if is_daily:
        # Daily note: [[🏠base|🏠]] · [[YYYY-MM-DD|← Yesterday]] · [📅 Today](obsidian://daily) · [[YYYY-MM-DD|Tomorrow →]]
        # Yesterday/Tomorrow are static wikilinks (Option B)
        date = parse_date(filepath.name)
        if date:
            yesterday = date - timedelta(days=1)
            tomorrow = date + timedelta(days=1)
            nav = f"> [[🏠base|🏠]] · [[{yesterday.strftime('%Y-%m-%d')}|← Yesterday]] · [📅 Today](obsidian://daily) · [[{tomorrow.strftime('%Y-%m-%d')}|Tomorrow →]]"
        else:
            nav = "> [[🏠base|🏠]] · [📅 Today](obsidian://daily)"
    elif is_workout_log:
        # Workout logs: extended format (hub-style) with dynamic Today link
        date = parse_date(filepath.name)
        if date:
            nav = f"> [[🏠base|🏠]] · [[V-Shape Calisthenics KB Program|🏋️ Program]] · [📅 Today](obsidian://daily) · [[{date.strftime('%Y-%m-%d')}|Daily Note]]"
        else:
            nav = "> [[🏠base|🏠]] · [📅 Today](obsidian://daily)"
    else:
        # Standard note: simple format
        nav = "> [[🏠base|🏠]] · [📅 Today](obsidian://daily)"
    
    # Build new body with nav header first
    new_body = [
        "",  # blank line after frontmatter
        nav,
        "",  # blank line after nav
        "---",  # separator
        ""   # blank line after separator
    ] + cleaned_body
    
    # Rebuild file
    new_content = '\n'.join(frontmatter + new_body)
    
    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return True

def main():
    print("=== NAVIGATION HEADER FIX ===")
    print("Removing duplicates and standardizing format...\n")
    
    fixed_count = 0
    
    # Fix all markdown files
    all_files = list((VAULT / "Notes").rglob("*.md")) + list((VAULT / "Journal").glob("*.md"))
    
    for filepath in sorted(all_files):
        rel_path = filepath.relative_to(VAULT)
        print(f"📝 {rel_path}")
        if fix_file(filepath):
            fixed_count += 1
    
    print("\n" + "="*50)
    print(f"Files processed: {len(all_files)}")
    print(f"Files fixed: {fixed_count}")

if __name__ == "__main__":
    main()
