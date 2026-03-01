#!/usr/bin/env node
/**
 * Migrate SS-PMO project from Obsidian to AFFiNE "Pink and the Brain" workspace
 */

import { readFileSync } from 'fs';
import { loginWithPassword } from 'affine-mcp-server/dist/auth.js';
import { 
  wsUrlFromGraphQLEndpoint, 
  connectWorkspaceSocket, 
  joinWorkspace, 
  loadDoc, 
  pushDocUpdate 
} from 'affine-mcp-server/dist/ws.js';
import * as Y from 'yjs';

const WORKSPACE_ID = '70aed209-ef2c-4e7c-a163-d6ac79d9a96f'; // Pink and the Brain
const PROFESSIONAL_AREA_ID = '9OJknZpxmn5PtAKYko6vj';
const BASE_URL = 'https://pkm.mouthygeese.com';

// Read the content files
const overview = readFileSync('/Volumes/ziggy/openclaw-workspace/Pinky/Projects/SS-PMO/00 - PROJECT OVERVIEW.md', 'utf-8');
const research = readFileSync('/Volumes/ziggy/openclaw-workspace/Pinky/Projects/SS-PMO/01 - RESEARCH - Enterprise PMO Capabilities.md', 'utf-8');
const questionnaire = readFileSync('/Volumes/ziggy/openclaw-workspace/Pinky/Projects/SS-PMO/02 - INTAKE QUESTIONNAIRE.md', 'utf-8');

console.log('📋 Loaded content files from Obsidian vault');
console.log(`- Overview: ${(overview.length / 1024).toFixed(1)} KB`);
console.log(`- Research: ${(research.length / 1024).toFixed(1)} KB`);
console.log(`- Questionnaire: ${(questionnaire.length / 1024).toFixed(1)} KB`);

async function main() {
  // Step 1: Login to get session cookies
  console.log('\n🔐 Authenticating with AFFiNE...');
  const authResult = await loginWithPassword(
    BASE_URL,
    'ziggy@mouthygeese.com',
    process.env.AFFINE_PASSWORD || '' // Will prompt if not set
  );
  
  if (!authResult.success) {
    console.error('❌ Authentication failed');
    process.exit(1);
  }
  
  console.log('✅ Authenticated successfully');
  
  // Step 2: Connect WebSocket
  console.log('\n🔌 Connecting to workspace...');
  const wsUrl = wsUrlFromGraphQLEndpoint(`${BASE_URL}/api/graphql`);
  const socket = await connectWorkspaceSocket(wsUrl, WORKSPACE_ID, authResult.cookies);
  
  await joinWorkspace(socket, WORKSPACE_ID);
  console.log('✅ Connected to Pink and the Brain workspace');
  
  // Step 3: Create docs
  console.log('\n📝 Creating documents in AFFiNE...');
  
  // Create main project doc
  const projectDoc = new Y.Doc();
  const projectDocId = 'sspmo-main-' + Date.now();
  
  // TODO: Populate Y.Doc with content
  // This requires understanding AFFiNE's Y.js block structure
  // which is complex (blocks, flavors, props, etc.)
  
  console.log('⚠️  Y.js block creation requires AFFiNE schema knowledge');
  console.log('📌 Alternative approach needed');
  
  socket.close();
}

// For now, just document what needs to happen
console.log('\n' + '='.repeat(60));
console.log('MIGRATION PLAN');
console.log('='.repeat(60));
console.log(`
The content has been researched and written in Obsidian, but needs
to be in AFFiNE "Pink and the Brain" workspace instead.

OPTIONS:

1. Manual Migration (Quickest)
   - Nathan creates 3 docs in AFFiNE Professional area
   - Copy/paste content from Obsidian files
   - Pros: Fast, reliable
   - Cons: Manual work

2. API Migration (Complex)
   - Write Node script using affine-mcp-server WebSocket auth
   - Requires learning AFFiNE's Y.js block structure
   - Pros: Automated
   - Cons: Time-consuming to build, may be brittle

3. Hybrid Approach
   - Keep content in markdown files (workspace root)
   - Reference from AFFiNE with links
   - Pros: Simple, version-controlled
   - Cons: Split between systems

RECOMMENDATION: Option 1 for now (manual copy/paste)
Then later we can build proper AFFiNE automation.

FILES READY FOR MIGRATION:
- /Volumes/ziggy/openclaw-workspace/Pinky/Projects/SS-PMO/00 - PROJECT OVERVIEW.md
- /Volumes/ziggy/openclaw-workspace/Pinky/Projects/SS-PMO/01 - RESEARCH - Enterprise PMO Capabilities.md
- /Volumes/ziggy/openclaw-workspace/Pinky/Projects/SS-PMO/02 - INTAKE QUESTIONNAIRE.md
`);

// Don't run main() yet - need to handle Y.js properly
// await main();
