import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import type { Database } from "@/lib/supabase/types";

let browserClient: SupabaseClient<Database> | null = null;

function getSupabaseEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !publishableKey) {
    return null;
  }

  return { url, publishableKey };
}

export function hasSupabaseConfig() {
  return Boolean(getSupabaseEnv());
}

export function getSupabaseBrowserClient() {
  const env = getSupabaseEnv();

  if (!env) {
    throw new Error(
      "Supabase env vars are missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.",
    );
  }

  if (!browserClient) {
    browserClient = createClient<Database>(env.url, env.publishableKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
      realtime: {
        params: {
          eventsPerSecond: 8,
        },
      },
    });
  }

  return browserClient;
}
