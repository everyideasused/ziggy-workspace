#!/usr/bin/env node

import { loginWithPassword } from '/opt/homebrew/lib/node_modules/affine-mcp-server/dist/auth.js';
import { wsUrlFromGraphQLEndpoint, connectWorkspaceSocket, joinWorkspace, loadDoc } from '/opt/homebrew/lib/node_modules/affine-mcp-server/dist/ws.js';

const GRAPHQL_ENDPOINT = 'https://pkm.mouthygeese.com/graphql';
const WORKSPACE_ID = '70aed209-ef2c-4e7c-a163-d6ac79d9a96f';
const EMAIL = 'ziggy@mouthygeese.com';
const PASSWORD = 'suxvIm-nipnod-sygro0';

// Doc IDs from the list - looking for PMO questionnaire
const possibleDocIds = [
  'nI24WiaIRzFG_is4nTF5b',  // Created 2026-02-19T13:03:01 - most recent
  'P2hYH-1L8H8IAOSnt7JKw',  // Created 2026-02-19T13:05:07
  'bqBemYAw7iWTRHvKjvlad', // Created 2026-02-19T13:04:52
];

async function readQuestionnaire() {
  try {
    console.log('🔐 Logging in...');
    const { cookies } = await loginWithPassword(GRAPHQL_ENDPOINT, EMAIL, PASSWORD);
    
    console.log('🌐 Connecting to workspace...');
    const wsUrl = wsUrlFromGraphQLEndpoint(GRAPHQL_ENDPOINT);
    const ws = await connectWorkspaceSocket(wsUrl, WORKSPACE_ID, cookies);
    await joinWorkspace(ws, WORKSPACE_ID);
    
    // Try each doc ID
    for (const docId of possibleDocIds) {
      try {
        console.log(`\n📄 Trying to load doc: ${docId}`);
        const doc = await loadDoc(ws, WORKSPACE_ID, docId);
        
        // Extract text content
        const blocks = doc.getMap('blocks');
        const blockEntries = Array.from(blocks.entries());
        
        console.log(`\n✅ Found doc with ${blockEntries.length} blocks`);
        
        // Try to find text content
        let hasContent = false;
        for (const [blockId, block] of blockEntries) {
          if (block['prop:text']) {
            const text = block['prop:text'].toString();
            if (text && text.length > 10) {
              hasContent = true;
              console.log(`\n--- Content from block ${blockId.substring(0, 8)} ---`);
              console.log(text.substring(0, 200));
            }
          }
          if (block['prop:title']) {
            console.log(`📌 Title: ${block['prop:title']}`);
          }
        }
        
        if (hasContent) {
          console.log('\n💾 Full doc structure:');
          console.log(JSON.stringify(blockEntries, null, 2));
          break;
        }
        
      } catch (err) {
        console.log(`❌ Could not load ${docId}: ${err.message}`);
      }
    }
    
    ws.close();
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

readQuestionnaire();
