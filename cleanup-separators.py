#!/usr/bin/env python3
"""
Clean up multiple --- separators after navigation headers.
Should have exactly ONE --- after the nav header.
"""

from pathlib import Path

VAULT = Path("/Volumes/ziggy/openclaw-workspace/Pinky & The Brain")

def cleanup_file(filepath):
    """Remove duplicate --- separators"""
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Find frontmatter end
    fm_end = None
    for i, line in enumerate(lines[1:], 1):
        if line.strip() == '---':
            fm_end = i
            break
    
    if fm_end is None:
        return False
    
    # Find nav header (should be right after frontmatter)
    nav_idx = None
    for i in range(fm_end + 1, min(fm_end + 5, len(lines))):
        if lines[i].strip().startswith('>') and '🏠' in lines[i]:
            nav_idx = i
            break
    
    if nav_idx is None:
        return False
    
    # Scan lines after nav header and remove consecutive --- and blank lines
    # Keep only: 1 blank line, 1 ---, 1 blank line
    after_nav_idx = nav_idx + 1
    
    # Remove everything between nav and first real content
    cleaned_lines = lines[:after_nav_idx]
    
    # Add standard spacing
    cleaned_lines.append('\n')  # blank line
    cleaned_lines.append('---\n')  # separator
    cleaned_lines.append('\n')  # blank line
    
    # Skip all blank lines and --- until we hit real content
    skip_until = after_nav_idx
    for i in range(after_nav_idx, len(lines)):
        line = lines[i].strip()
        if line and line != '---':
            skip_until = i
            break
    
    # Add the rest of the content
    cleaned_lines.extend(lines[skip_until:])
    
    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(cleaned_lines)
    
    return True

def main():
    print("=== CLEANUP SEPARATORS ===\n")
    
    fixed = 0
    all_files = list((VAULT / "Notes").rglob("*.md")) + list((VAULT / "Journal").glob("*.md"))
    
    for filepath in sorted(all_files):
        if cleanup_file(filepath):
            fixed += 1
    
    print(f"\n{'='*50}")
    print(f"Files processed: {len(all_files)}")
    print(f"Files cleaned: {fixed}")

if __name__ == "__main__":
    main()
