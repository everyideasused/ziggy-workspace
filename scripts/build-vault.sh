#!/usr/bin/env bash
# Build Pinky & The Brain vault structure in NoteDiscovery
# Uses the REST API to create folders and notes

BASE="http://localhost:8000"
PASSWORD="suxvIm-nipnod-sygro0"

# Get session cookie
SESSION=$(curl -s -c - -X POST "$BASE/login" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "password=$PASSWORD" | grep session | awk '{print "session="$NF}')

echo "🔐 Authenticated"

create_folder() {
  curl -s -b "$SESSION" -X POST "$BASE/api/folders" \
    -H "Content-Type: application/json" \
    -d "{\"path\":\"$1\"}" > /dev/null
  echo "  📁 $1"
}

create_note() {
  local path="$1"
  local content="$2"
  # URL encode the path
  local encoded=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$path', safe=''))")
  curl -s -b "$SESSION" -X POST "$BASE/api/notes/$encoded" \
    -H "Content-Type: application/json" \
    --data-binary @- > /dev/null <<EOF
{"content": $(python3 -c "import json,sys; print(json.dumps(sys.stdin.read()))" <<< "$content")}
EOF
  echo "  📝 $path"
}

echo ""
echo "🏗️  Building Pinky & The Brain vault..."
echo ""

# Create folder structure
echo "📁 Creating folders..."
create_folder "0-Inbox"
create_folder "1-Command"
create_folder "2-Areas"
create_folder "2-Areas/Knowledge"
create_folder "2-Areas/Relationships"
create_folder "2-Areas/Household"
create_folder "2-Areas/Health"
create_folder "2-Areas/Finances"
create_folder "2-Areas/Professional"
create_folder "3-Projects"
create_folder "4-Resources"
create_folder "4-Resources/Templates"
create_folder "4-Resources/Mental-Models"
create_folder "5-Archives"
create_folder "6-Journal"
create_folder "7-Reviews"

echo ""
echo "✅ Folders created. Notes will be created via the Node.js script."
