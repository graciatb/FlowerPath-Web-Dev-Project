"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { readUserSession } from "@/lib/action/actions";
import { revalidatePath, unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";

export async function updatePaket(
  id: string,
  data: {
    status: "Pick Up" | "On the Way" | "Delivered" | "On Hold";
    catatanpengiriman: string;
    fotopengiriman: string;
  }
) {
  const { data: userSession } = await readUserSession();
  if (userSession.session?.user.user_metadata.role !== "admin") {
    console.log("not allowed");
    return JSON.stringify({
      error: { message: "You are not allowed to do this!" },
    });
  }
  try {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.from("pengiriman").update({
      statuspengiriman: data.status,
      catatanpengiriman: data.catatanpengiriman,
      fotopengiriman: data.fotopengiriman,
    }).eq("idpaket",id);
  } catch (error) {
    return JSON.stringify(error);
  }
  revalidatePath("/kurir/paket");
  redirect("/kurir/paket");
}
