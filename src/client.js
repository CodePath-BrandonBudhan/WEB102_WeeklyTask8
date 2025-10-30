import {createClient} from "@supabase/supabase-js"

const URL = "https://tiswabhyaxzyuemzuwas.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpc3dhYmh5YXh6eXVlbXp1d2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4MzMxODQsImV4cCI6MjA3NzQwOTE4NH0.cEs-T6iwcmrICHQkxaZG_2AszGzigWJcty-76Mk2SQQ"
export const supabase = createClient(URL, API_KEY)
