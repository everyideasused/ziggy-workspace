#!/bin/bash
# Simple approach: Create docs via GraphQL after getting session cookie

BASE_URL="https://pkm.mouthygeese.com"
EMAIL="ziggy@mouthygeese.com"
PASSWORD="suxvIm-nipnod-sygro0"
WORKSPACE_ID="70aed209-ef2c-4e7c-a163-d6ac79d9a96f"

echo "🔐 Logging in to get session cookie..."

# Login and save cookies
curl -s -c cookies.txt \
  -X POST "${BASE_URL}/api/auth/sign-in" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"${EMAIL}\",\"password\":\"${PASSWORD}\"}" \
  > login.json

cat login.json
echo ""

# Create docs using GraphQL with cookies
echo "📝 Creating SS-PMO docs..."

# Doc 1: Overview
curl -s -b cookies.txt \
  -X POST "${BASE_URL}/api/graphql" \
  -H "Content-Type: application/json" \
  -d '{
  "query": "mutation { createDoc(workspaceId: \"'${WORKSPACE_ID}'\", title: \"SS-PMO: Project Overview\") { id } }"
}' | jq .

# Doc 2: Research  
curl -s -b cookies.txt \
  -X POST "${BASE_URL}/api/graphql" \
  -H "Content-Type: application/json" \
  -d '{
  "query": "mutation { createDoc(workspaceId: \"'${WORKSPACE_ID}'\", title: \"SS-PMO: Enterprise PMO Research\") { id } }"
}' | jq .

# Doc 3: Questionnaire
curl -s -b cookies.txt \
  -X POST "${BASE_URL}/api/graphql" \
  -H "Content-Type: application/json" \
  -d '{
  "query": "mutation { createDoc(workspaceId: \"'${WORKSPACE_ID}'\", title: \"SS-PMO: Intake Questionnaire\") { id } }"
}' | jq .

rm cookies.txt login.json
echo "✅ Done!"
