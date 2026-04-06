"use server";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function subscribeEmail(_prev: unknown, formData: FormData) {
  const email = formData.get("email")?.toString().trim();

  if (!email || !email.includes("@")) return { error: "Email inválido", success: false };

  const { error } = await supabase
    .from("subscribers")
    .insert({ email });

  if (error) {
    if (error.code === "23505") return { error: "Ya estás suscripto", success: false };
    return { error: "Error al suscribirse", success: false };
  }

  return { success: true, error: "" };
}
