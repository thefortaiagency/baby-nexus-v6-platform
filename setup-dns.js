#!/usr/bin/env node

const https = require('https');

// Get these from /Users/thefortob/Development/ACTIVE-PROJECTS/nexus-platform-automation/.env
const GODADDY_API_KEY = process.env.GODADDY_API_KEY || 'your-api-key';
const GODADDY_API_SECRET = process.env.GODADDY_API_SECRET || 'your-api-secret';

async function makeRequest(path, method = 'GET', data = null) {
  const options = {
    hostname: 'api.godaddy.com',
    path: `/v1${path}`,
    method,
    headers: {
      'Authorization': `sso-key ${GODADDY_API_KEY}:${GODADDY_API_SECRET}`,
      'Content-Type': 'application/json'
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode === 204) {
          resolve({ success: true });
        } else if (body) {
          try {
            resolve(JSON.parse(body));
          } catch (e) {
            resolve(body);
          }
        } else {
          resolve({ success: true, statusCode: res.statusCode });
        }
      });
    });

    req.on('error', reject);
    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
}

async function setupDNS() {
  const domain = 'thefortaiagency.ai';
  const subdomain = 'baby-nexus-v6';
  
  console.log(`🔧 Setting up DNS for ${subdomain}.${domain}...\n`);
  
  // Create A record pointing to Vercel
  const aRecord = [{
    type: 'A',
    name: subdomain,
    data: '76.76.21.21',
    ttl: 600
  }];
  
  console.log(`📝 Creating A record: ${subdomain} → 76.76.21.21`);
  
  try {
    // First, try to update existing record
    const updateResult = await makeRequest(
      `/domains/${domain}/records/A/${subdomain}`,
      'PUT',
      aRecord
    );
    
    if (updateResult.success || updateResult.statusCode === 200) {
      console.log('✅ Successfully updated A record!\n');
    } else {
      // If update fails, try to create new record
      console.log('Creating new record...');
      const patchResult = await makeRequest(
        `/domains/${domain}/records`,
        'PATCH',
        aRecord
      );
      
      if (patchResult.success || patchResult.statusCode === 200) {
        console.log('✅ Successfully created A record!\n');
      } else {
        console.log('❌ Failed to create record:', patchResult);
      }
    }
    
    console.log('🌐 DNS Configuration Complete!');
    console.log('\n📌 Your domain will be available at:');
    console.log(`   https://${subdomain}.${domain}`);
    console.log('\n⏱️  DNS propagation can take 5-30 minutes.');
    
  } catch (error) {
    console.error('❌ Error setting up DNS:', error.message);
  }
}

setupDNS();