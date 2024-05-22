import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_API_URL
console.log(import.meta.env)
console.log(SUPABASE_URL)
const SUPABASE_ANON_KEY = import.meta.env.VITE_ANON_KEY
// const SUPABASE_URL = 'https://volkelpvzrjzwrsstxjh.supabase.co'
// const SUPABASE_ANON_KEY =
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvbGtlbHB2enJqendyc3N0eGpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg5MTU1NzEsImV4cCI6MjAwNDQ5MTU3MX0.nV9IYVjXM0rlh_rYXIcJN8R3UE5_Lopw5hczNlZmMwQ'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export default supabase
