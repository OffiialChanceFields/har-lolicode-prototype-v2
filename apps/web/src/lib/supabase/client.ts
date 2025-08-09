import { createClient } from '@supabase/supabase-js';

// This is a placeholder. In a real application, these would be in environment variables.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost:54321';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'examplekey';

export const supabase = createClient(supabaseUrl, supabaseKey);
