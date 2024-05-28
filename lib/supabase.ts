import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  String(process.env.NEXT_PUBLIC_SUPABASE_URL),
  String(process.env.NEXT_PUBLIC_SUPABASE_KEY),
)

export default supabase
