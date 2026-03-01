#!/usr/bin/env node
/**
 * Create SS-PMO docs in AFFiNE using proper WebSocket auth
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Use the affine-mcp-server modules directly (global install)
import { loginWithPassword } from '/opt/homebrew/lib/node_modules/affine-mcp-server/dist/auth.js';
import { 
  wsUrlFromGraphQLEndpoint, 
  connectWorkspaceSocket, 
  joinWorkspace,
  createDoc,
  appendParagraph
} from '/opt/homebrew/lib/node_modules/affine-mcp-server/dist/ws.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const WORKSPACE_ID = '70aed209-ef2c-4e7c-a163-d6ac79d9a96f';
const BASE_URL = 'https://pkm.mouthygeese.com';
const EMAIL = 'ziggy@mouthygeese.com';

// Get password from env or prompt
const PASSWORD = process.env.AFFINE_PASSWORD;

if (!PASSWORD) {
  console.error('❌ AFFINE_PASSWORD environment variable required');
  console.log('\nUsage:');
  console.log('  AFFINE_PASSWORD=yourpassword node create-sspmo-ws.mjs');
  process.exit(1);
}

console.log('🚀 Creating SS-PMO docs in Pink and the Brain...\n');

async function main() {
  // Step 1: Login
  console.log('🔐 Authenticating...');
  const authResult = await loginWithPassword(BASE_URL, EMAIL, PASSWORD);
  
  if (!authResult.success) {
    console.error('❌ Authentication failed');
    process.exit(1);
  }
  console.log('✅ Authenticated\n');
  
  // Step 2: Connect WebSocket
  console.log('🔌 Connecting to workspace...');
  const wsUrl = wsUrlFromGraphQLEndpoint(`${BASE_URL}/api/graphql`);
  const socket = await connectWorkspaceSocket(wsUrl, WORKSPACE_ID, authResult.cookies);
  await joinWorkspace(socket, WORKSPACE_ID);
  console.log('✅ Connected\n');
  
  // Step 3: Create docs
  const docs = [
    {
      title: 'SS-PMO: Project Overview',
      content: [
        '# SS-PMO: Smartsheet PMO Build Project',
        '',
        '## Vision',
        'Build a best-in-class, enterprise-level construction PMO in Smartsheet that rivals solutions like Primavera P6, Procore, and Planview while maintaining Smartsheet\'s flexibility and ease of use.',
        '',
        '## Goals',
        '• Portfolio-level visibility across all programs and sites',
        '• Resource capacity planning and workload management',
        '• Financial tracking at portfolio, program, and project levels',
        '• RFP/pre-construction pipeline management',
        '• Real-time dashboards with actionable KPIs',
        '• Full integration between all components',
        '• Scalability from pilot to enterprise-wide deployment',
        '',
        '## Key Deliverables',
        '1. Research document (enterprise PMO capabilities)',
        '2. Intake questionnaire (capture requirements)',
        '3. Solution architecture (sheet structure, relationships, automation)',
        '4. Implementation roadmap (phased approach)',
        '5. Smartsheet workspace build-out',
        '',
        '## Timeline',
        '• Phase 1: Research & Requirements (In Progress)',
        '• Phase 2: Architecture Design',
        '• Phase 3: Pilot Build',
        '• Phase 4: Testing & Refinement',
        '• Phase 5: Full Deployment',
        '',
        '## Notes',
        '• Started: Feb 18, 2026 @ 5:30 PM CST',
        '• Nathan wakes at 4:30 AM CST to provide Smartsheet account access',
        '• Everything must link and integrate seamlessly',
        '',
        '## Next Actions',
        '✅ Complete research on enterprise PMO capabilities',
        '✅ Build intake questionnaire',
        '☐ Nathan completes questionnaire',
        '☐ Design solution architecture'
      ].join('\n')
    },
    {
      title: 'SS-PMO: Enterprise PMO Research',
      content: 'Comprehensive research document - will populate via append after creation'
    },
    {
      title: 'SS-PMO: Intake Questionnaire',
      content: '94-question intake form - will populate via append after creation'
    }
  ];
  
  console.log('📝 Creating documents...\n');
  
  for (const doc of docs) {
    try {
      console.log(`Creating: ${doc.title}`);
      const docId = await createDoc(socket, WORKSPACE_ID, doc.title);
      console.log(`   ✅ Created with ID: ${docId}`);
      
      // Add content
      if (doc.content.length < 500) {
        // Short content - single paragraph
        await appendParagraph(socket, WORKSPACE_ID, docId, doc.content);
      } else {
        // Long content - split into paragraphs
        const paragraphs = doc.content.split('\n\n');
        for (const para of paragraphs.slice(0, 10)) {  // First 10 paragraphs
          if (para.trim()) {
            await appendParagraph(socket, WORKSPACE_ID, docId, para);
          }
        }
      }
      console.log(`   ✅ Content added\n`);
    } catch (err) {
      console.error(`   ❌ Error: ${err.message}\n`);
    }
  }
  
  socket.close();
  console.log('✅ All done! Check https://pkm.mouthygeese.com');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
