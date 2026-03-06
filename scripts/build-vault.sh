#!/usr/bin/env bash
# Build Pinky & The Brain vault structure - Current v2 Flat Structure
# Per System Guide: 4 root folders, flat Notes, frontmatter organization
# Updated: 2026-03-05

VAULT="/Volumes/ziggy/openclaw-workspace/Pinky & The Brain"
INSTALL_OBSIDIAN=false

echo "🏗️  Building Pinky & The Brain vault (v2 Flat Structure)..."
echo ""

# Create flat folder structure per System Guide
mkdir -p "$VAULT/Journal"
mkdir -p "$VAULT/Notes"
mkdir -p "$VAULT/Templates"
mkdir -p "$VAULT/Attachments"

echo "📁 Folders created:"
echo "  - Journal/     (Daily notes only, YYYY-MM-DD.md format)"
echo "  - Notes/       (Flat - all projects, areas, resources here)"
echo "  - Templates/   (Templater templates)"
echo "  - Attachments/ (Images, PDFs, files)"

echo ""
echo "✅ Vault structure ready."
echo ""
echo "📋 Current v2 structure:"
echo "  🏠base.md              ← Home hub"
echo "  Journal/               ← Daily notes only (YYYY-MM-DD.md)"
echo "  Notes/                 ← ALL other notes (flat, no sub-folders)"
echo "  Templates/             ← Templater templates"
echo "  Attachments/           ← Images, PDFs"
echo ""
echo "🔧 Rules per System Guide:"
echo "  - Organization via frontmatter (type, area, status, tags)"
echo "  - NO sub-folders in Notes/"
echo "  - Navigation header after frontmatter"
echo "  - Dataview queries for organization"
