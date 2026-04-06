import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xzssjdrddismqfywlugg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6c3NqZHJkZGlzbXFmeXdsdWdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0MjQ4MjgsImV4cCI6MjA5MTAwMDgyOH0.qkuIlnuuF09B2ChZfZ29giLU1sq6ivJV-BOY4GgN5DU'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)