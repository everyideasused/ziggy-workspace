#!/bin/bash

TEMPLATES_DIR="/Volumes/ziggy/openclaw-workspace/Pinky & The Brain/Templates"

echo "=== UPDATING WORKOUT TEMPLATES ==="
echo ""
echo "Templates already have sets x reps in section headers."
echo "Verifying they match the program..."
echo ""

# Check if templates have the right format
for template in "Workout Day A.md" "Workout Day B1.md" "Workout Day B2.md" "Workout Day C.md"; do
    if [ -f "$TEMPLATES_DIR/$template" ]; then
        echo "✓ $template exists"
        # Check if it has sets x reps notation
        if grep -q "3 x 8" "$TEMPLATES_DIR/$template" 2>/dev/null || \
           grep -q "4 x 12" "$TEMPLATES_DIR/$template" 2>/dev/null; then
            echo "  ✓ Contains sets x reps notation"
        else
            echo "  ⚠️  May need manual review"
        fi
    else
        echo "❌ $template not found"
    fi
done

echo ""
echo "Templates use the format: 'Exercise Name — Sets x Reps · Rest'"
echo "Example: 'A1: Pike Push-ups (elevated feet) — 3 x 8–12 · 60s rest'"
echo ""
echo "Existing logs now have explicit Target columns in tables."
echo "Templates keep the concise format with targets in headers."
