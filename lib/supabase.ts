import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://umhdcbsjassutrciywln.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtaGRjYnNqYXNzdXRyY2l5d2xuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NjA0MjYsImV4cCI6MjAyODUzNjQyNn0.7G-zgIOX8pD0mVhw0fn4iuEY8oy5Z93JJjXRgCqnbPA',
)

export default supabase
