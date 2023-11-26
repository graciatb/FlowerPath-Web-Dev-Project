"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { readUserSession } from "@/lib/action/actions";
import { revalidatePath, unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";

export async function createPengiriman(data: {
  status: "Pick Up" | "On the Way" | "Delivered" | "On Hold";
  idpaket: string;
  idkurir: string;
}) {
  const { data: userSession } = await readUserSession();
  if (userSession.session?.user.user_metadata.role !== "admin") {
    console.log("not allowed");
    return JSON.stringify({
      error: { message: "You are not allowed to do this!" },
    });
  }
  try {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.from("pengiriman").insert(
      {
        statuspengiriman: data.status,
        idpaket: data.idpaket,
        idkurir: data.idkurir,
      },
    );
  } catch (error) {
    return JSON.stringify(error);
  }
  revalidatePath("/dashboard/pengiriman");
  redirect("/dashboard/pengiriman");
}
