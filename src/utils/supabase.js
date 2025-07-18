import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

// Import environment variables
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || "https://ajafcwrzwibyibkewzgj.supabase.co";
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqYWZjd3J6d2lieWlia2V3emdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNzUxNTcsImV4cCI6MjA1Mzg1MTE1N30.SI9DU4HLxPQ6yxyCoz7TtZSuWQDyacgrZoiYn6MlGSs";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});