import { createClient } from '@supabase/supabase-js';
// Create a single supabase client for interacting with your database
const URL = console.log(process.env.NEXT_PUBLIC_SUPABASE_URL)
export const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || '',
);
