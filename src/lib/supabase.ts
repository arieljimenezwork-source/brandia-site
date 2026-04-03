import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Video {
  id: string;
  title: string;
  description: string;
  loom_id: string;
  date: string;
  tags: string[];
  order_index: number;
  created_at: string;
}

export async function getVideos(): Promise<Video[]> {
  const { data, error } = await supabase
    .from("videos")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) {
    console.error("Error fetching videos:", error);
    return [];
  }

  return data ?? [];
}
