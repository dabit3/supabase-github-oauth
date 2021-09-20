import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://app-id.supabase.co', 'anon-public-key')

export {
  supabase
}