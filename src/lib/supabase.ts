
import { createClient } from '@supabase/supabase-js';

// Supabase client setup with your provided credentials
const supabaseUrl = 'https://bgyjejetbtzunfbymuen.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJneWplamV0YnR6dW5mYnltdWVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzOTM0NjYsImV4cCI6MjA1Njk2OTQ2Nn0.4XFdPv5Z8OH-DulzR8JSliMG1GDCa3qIi4Pb0Fqt6YA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
