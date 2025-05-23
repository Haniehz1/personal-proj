import { createClient } from '@supabase/supabase-js';
import { Database, Tables } from './types/database';

// This is a demo app that uses our database types
const supabaseUrl = 'https://your-project.supabase.co';
const supabaseKey = 'your-anon-key';

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

async function main() {
  console.log('Testing database types...');
  
  // This should work with existing types
  const { data: users } = await supabase
    .from('users')
    .select('*');
    
  console.log('Users:', users);
  
  // After migration, we should be able to use new types here
  // Example: profiles, posts, etc.
}

if (require.main === module) {
  main().catch(console.error);
}