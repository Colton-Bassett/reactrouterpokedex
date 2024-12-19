import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ioyufxxbkmdjmesonctf.supabase.co";
const supabasePublicKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlveXVmeHhia21kam1lc29uY3RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2MzU5MzgsImV4cCI6MjA1MDIxMTkzOH0.T_hvPNJt1nINt5mkC_3YMe2gBsszpYheN40zMBKOTFU";
// const supabasePrivateKey = import.meta.env.VITE_PRIVATE_SUPABASE_SERVICE_ROLE_KEY;

export const supabase = createClient(supabaseUrl, supabasePublicKey);
