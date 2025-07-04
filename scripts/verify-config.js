#!/usr/bin/env node

/**
 * Configuration Verification Script for The Nile's Table
 * This script verifies that all necessary environment variables are set
 * and that the Supabase connection is working properly.
 */

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

console.log('🔍 Verifying The Nile\'s Table Configuration...\n');

// Check environment variables
const requiredEnvVars = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY'
];

let missingVars = [];

console.log('📋 Checking Environment Variables:');
requiredEnvVars.forEach(varName => {
  const value = process.env[varName];
  if (!value || value.includes('your_') || value.includes('here')) {
    console.log(`❌ ${varName}: Missing or not configured`);
    missingVars.push(varName);
  } else {
    console.log(`✅ ${varName}: Configured`);
  }
});

if (missingVars.length > 0) {
  console.log('\n🚨 Configuration Issues Found:');
  console.log('Please update your .env.local file with the correct values from your Supabase dashboard.');
  console.log('Visit: https://supabase.com/dashboard to get your project URL and anon key.\n');
  process.exit(1);
}

// Test Supabase connection
console.log('\n🔗 Testing Supabase Connection...');

async function testSupabaseConnection() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    // Test basic connection
    const { data, error } = await supabase
      .from('bookings')
      .select('count', { count: 'exact', head: true });

    if (error) {
      console.log('❌ Supabase Connection: Failed');
      console.log('Error:', error.message);
      console.log('\nPossible issues:');
      console.log('- Check your Supabase URL and anon key');
      console.log('- Ensure the "bookings" table exists in your database');
      console.log('- Verify your Supabase project is active');
      return false;
    }

    console.log('✅ Supabase Connection: Success');
    console.log(`📊 Current bookings count: ${data || 0}`);
    return true;
  } catch (err) {
    console.log('❌ Supabase Connection: Failed');
    console.log('Error:', err.message);
    return false;
  }
}

// Test database schema
async function testDatabaseSchema() {
  console.log('\n🗄️  Checking Database Schema...');
  
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    // Check if required tables exist
    const tables = ['bookings', 'tables', 'admin_users'];
    const results = {};

    for (const table of tables) {
      try {
        const { error } = await supabase
          .from(table)
          .select('*', { count: 'exact', head: true });
        
        if (error && error.code === 'PGRST116') {
          results[table] = 'missing';
        } else if (error) {
          results[table] = 'error';
        } else {
          results[table] = 'exists';
        }
      } catch (err) {
        results[table] = 'error';
      }
    }

    // Report results
    Object.entries(results).forEach(([table, status]) => {
      switch (status) {
        case 'exists':
          console.log(`✅ Table "${table}": Exists`);
          break;
        case 'missing':
          console.log(`⚠️  Table "${table}": Missing (will need to be created)`);
          break;
        case 'error':
          console.log(`❌ Table "${table}": Error checking`);
          break;
      }
    });

    return results;
  } catch (err) {
    console.log('❌ Schema Check Failed:', err.message);
    return null;
  }
}

// Main verification function
async function main() {
  const connectionSuccess = await testSupabaseConnection();
  
  if (connectionSuccess) {
    await testDatabaseSchema();
    
    console.log('\n🎉 Configuration Verification Complete!');
    console.log('\n📝 Next Steps:');
    console.log('1. If any tables are missing, create them in your Supabase dashboard');
    console.log('2. Run "npm run dev" to start the development server');
    console.log('3. Test the booking system at http://localhost:3000/book');
    console.log('4. Test the admin dashboard at http://localhost:3000/admin/login');
    console.log('   (Use: admin@example.com / password123)');
  } else {
    console.log('\n❌ Configuration verification failed. Please fix the issues above.');
    process.exit(1);
  }
}

main().catch(console.error);
