#!/bin/bash

VAULT="/Volumes/ziggy/openclaw-workspace/Pinky & The Brain"

echo "=== FINAL VAULT COMPLIANCE CHECK ==="
echo ""

issues=0

# Check all markdown files
while IFS= read -r -d '' file; do
    # Check for frontmatter
    if ! head -n 1 "$file" | grep -q "^---$"; then
        echo "❌ $(basename "$file") - No frontmatter"
        ((issues++))
        continue
    fi
    
    # Check for required frontmatter fields
    if ! grep -q "^type:" "$file"; then
        echo "❌ $(basename "$file") - Missing type field"
        ((issues++))
        continue
    fi
    
    if ! grep -q "^area:" "$file"; then
        echo "❌ $(basename "$file") - Missing area field"
        ((issues++))
        continue
    fi
    
    if grep -q "^area: *$" "$file"; then
        echo "❌ $(basename "$file") - Empty area field"
        ((issues++))
        continue
    fi
    
    if ! grep -q "^status:" "$file"; then
        echo "❌ $(basename "$file") - Missing status field"
        ((issues++))
        continue
    fi
    
    if ! grep -q "^tags:" "$file"; then
        echo "❌ $(basename "$file") - Missing tags field"
        ((issues++))
        continue
    fi
    
    # Check for navigation header (emojis)
    if ! grep -q "🏠.*📅" "$file"; then
        echo "❌ $(basename "$file") - Missing navigation header"
        ((issues++))
        continue
    fi
    
done < <(find "$VAULT/Notes" "$VAULT/Journal" -name "*.md" -type f -print0)

echo ""
if [ $issues -eq 0 ]; then
    echo "✅ All files are compliant!"
else
    echo "❌ $issues files have issues"
fi
