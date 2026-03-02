#!/bin/bash

VAULT="/Volumes/ziggy/openclaw-workspace/Pinky & The Brain"
NOTES_DIR="$VAULT/Notes"
JOURNAL_DIR="$VAULT/Journal"

echo "=== VAULT AUDIT REPORT V2 ==="
echo "Checking: Navigation Header + Frontmatter Standards"
echo ""

# Function to check a single file
check_file() {
    local file="$1"
    local issues=()
    
    # Skip if not .md file
    [[ ! "$file" =~ \.md$ ]] && return
    
    # Read file content
    local content=$(cat "$file")
    
    # Check for frontmatter block
    if ! echo "$content" | head -n 1 | grep -q "^---$"; then
        issues+=("NO_FRONTMATTER")
    else
        # Check for required fields
        echo "$content" | grep -q "^type:" || issues+=("MISSING_type")
        echo "$content" | grep -q "^area:" || issues+=("MISSING_area")
        echo "$content" | grep -q "^status:" || issues+=("MISSING_status")
        echo "$content" | grep -q "^tags:" || issues+=("MISSING_tags")
        
        # Check if area is empty
        if echo "$content" | grep -q "^area: *$"; then
            issues+=("EMPTY_area")
        fi
    fi
    
    # Check for navigation header (look for emojis in first 20 lines)
    if ! echo "$content" | head -n 20 | grep -q "🏠.*📅"; then
        issues+=("MISSING_NAV_HEADER")
    fi
    
    # Report issues
    if [ ${#issues[@]} -gt 0 ]; then
        local basename=$(basename "$file")
        echo "❌ $basename"
        for issue in "${issues[@]}"; do
            echo "   - $issue"
        done
        echo ""
        return 1
    fi
    
    return 0
}

# Check Notes directory
echo "Checking Notes/..."
issues_count=0
total_count=0

for file in "$NOTES_DIR"/*.md; do
    [ -f "$file" ] || continue
    ((total_count++))
    check_file "$file" || ((issues_count++))
done

# Check Journal directory  
echo "Checking Journal/..."
for file in "$JOURNAL_DIR"/*.md; do
    [ -f "$file" ] || continue
    ((total_count++))
    check_file "$file" || ((issues_count++))
done

echo "==================================="
echo "Total files checked: $total_count"
echo "Files with issues: $issues_count"
echo "Files compliant: $((total_count - issues_count))"
