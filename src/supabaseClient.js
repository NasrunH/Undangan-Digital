import { createClient } from '@supabase/supabase-js';

// Ganti nilai ini dengan URL dan API Key Anda dari dashboard Supabase!
const supabaseUrl = 'https://qxqxjlapqkkkfojrvxle.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4cXhqbGFwcWtra2ZvanJ2eGxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4MzI5MjgsImV4cCI6MjA4NzQwODkyOH0.v6JcsmDxIfWjw4Jps3AtQfZhHbX4IZsvXxSe6AzYMnc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);