#!/usr/bin/env python3
"""
Apply area-aware navigation headers to all vault notes.

Rules:
1. Daily notes: 🏠 · Yesterday · 📅 Today · Tomorrow
2. System notes (area: system): 🏠 · 📅 Today
3. Area hub notes: 🏠 · 📅 Today
4. All other notes: 🏠 · 📅 Today · [Area Hub]
5. 🏠base: skip (it IS home)
"""

import re
from pathlib import Path
from datetime import datetime, timedelta

VAULT = Path("/Volumes/ziggy/openclaw-workspace/Pinky & The Brain")

# Area to Hub mapping
AREA_HUBS = {
    'work': 'Work Hub',
    'health': 'Health Hub',
    'finances': 'Finances Hub',
    'household': 'Household Hub',
    'relationships': 'Relationships Hub',
    'interests': 'Interests Hub',
    'education': 'Education Hub'
}

def parse_date(filename):
    """Extract date from daily note filename"""
    match = re.match(r'(\d{4}-\d{2}-\d{2})', filename)
    if match:
        return datetime.strptime(match.group(1), '%Y-%m-%d')
    return None

def is_nav_header(line):
    """Check if line is a navigation header"""
    stripped = line.strip()
    return stripped.startswith('>') and ('🏠' in line or '📅' in line)

def extract_frontmatter(lines):
    """Extract frontmatter as dict"""
    if lines[0] != '---':
        return None, None
    
    fm_end = None
    for i, line in enumerate(lines[1:], 1):
        if line == '---':
            fm_end = i
            break
    
    if fm_end is None:
        return None, None
    
    # Parse frontmatter
    fm_dict = {}
    for line in lines[1:fm_end]:
        if ':' in line:
            key = line.split(':', 1)[0].strip()
            value = line.split(':', 1)[1].strip()
            fm_dict[key] = value
    
    return fm_dict, fm_end

def generate_nav_header(filepath, frontmatter):
    """Generate correct navigation header based on note type"""
    filename = filepath.name
    rel_path = str(filepath.relative_to(VAULT))
    
    # Skip 🏠base
    if filename == '🏠base.md':
        return None
    
    # Daily notes
    if 'Journal' in str(filepath):
        date = parse_date(filename)
        if date:
            yesterday = date - timedelta(days=1)
            tomorrow = date + timedelta(days=1)
            return f"> [[🏠base|🏠]] · [[{yesterday.strftime('%Y-%m-%d')}|← Yesterday]] · [📅 Today](obsidian://daily) · [[{tomorrow.strftime('%Y-%m-%d')}|Tomorrow →]]"
        return "> [[🏠base|🏠]] · [📅 Today](obsidian://daily)"
    
    # System notes
    if frontmatter.get('area') == 'system':
        return "> [[🏠base|🏠]] · [📅 Today](obsidian://daily)"
    
    # Area hub notes (type: area-hub)
    if frontmatter.get('type') == 'area-hub':
        return "> [[🏠base|🏠]] · [📅 Today](obsidian://daily)"
    
    # Special case: Workout logs
    if 'Fitness/Logs' in rel_path:
        return "> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[V-Shape Calisthenics KB Program|🏋️ Program]]"
    
    # Regular notes with area
    area = frontmatter.get('area')
    if area and area in AREA_HUBS:
        hub_name = AREA_HUBS[area]
        return f"> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[{hub_name}|{hub_name}]]"
    
    # Fallback: simple format
    return "> [[🏠base|🏠]] · [📅 Today](obsidian://daily)"

def fix_file(filepath):
    """Apply correct navigation header to a file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    
    # Extract frontmatter
    frontmatter, fm_end = extract_frontmatter(lines)
    if frontmatter is None:
        print(f"⚠️  {filepath.name} - No frontmatter, skipping")
        return False
    
    # Generate correct nav header
    new_nav = generate_nav_header(filepath, frontmatter)
    if new_nav is None:
        print(f"⏭️  {filepath.name} - Skipped (🏠base)")
        return False
    
    # Extract body and remove all existing nav headers
    body = lines[fm_end + 1:]
    cleaned_body = []
    for line in body:
        if not is_nav_header(line):
            cleaned_body.append(line)
    
    # Remove leading blank lines
    while cleaned_body and not cleaned_body[0].strip():
        cleaned_body.pop(0)
    
    # Build new body with correct nav header
    new_body = [
        "",  # blank line after frontmatter
        new_nav,
        "",  # blank line after nav
        "---",  # separator
        ""   # blank line after separator
    ] + cleaned_body
    
    # Rebuild file
    new_content = '\n'.join(lines[:fm_end + 1] + new_body)
    
    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return True

def main():
    print("=== APPLY AREA-AWARE NAVIGATION HEADERS ===\n")
    
    fixed_count = 0
    skipped_count = 0
    
    # Process all markdown files
    all_files = list((VAULT / "Notes").rglob("*.md")) + list((VAULT / "Journal").glob("*.md"))
    
    # Add 🏠base if it exists
    base_file = VAULT / "🏠base.md"
    if base_file.exists():
        all_files.insert(0, base_file)
    
    for filepath in sorted(all_files):
        rel_path = filepath.relative_to(VAULT)
        result = fix_file(filepath)
        if result:
            print(f"✓ {rel_path}")
            fixed_count += 1
        elif result is False and "Skipped" not in str(filepath):
            skipped_count += 1
    
    print("\n" + "="*50)
    print(f"Files processed: {len(all_files)}")
    print(f"Files updated: {fixed_count}")
    print(f"Files skipped: {skipped_count}")

if __name__ == "__main__":
    main()
