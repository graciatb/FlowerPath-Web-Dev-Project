"use server";

import {
  createSupabaseAdmin,
  createSupabaseServerClient,
} from "@/lib/supabase/server";
import { readUserSession } from "@/lib/action/actions";
import { revalidatePath, unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";

export async function createKurir(data: {
  nama: string;
  email: string;
  password: string;
  role: "kurir" | "admin";
  confirm: string;
}) {
  const { data: userSession } = await readUserSession();
  if (userSession.session?.user.user_metadata.role !== "admin") {
    return JSON.stringify({
      error: { message: "You are not allowed to do this!" },
    });
  }
  const supabase = await createSupabaseAdmin();

  const createResult = await supabase.auth.admin.createUser({
    email: data.email,
    password: data.password,
    email_confirm: true,
    user_metadata: {
      role: data.role,
    },
  });

  if (createResult.error?.message) {
    return JSON.stringify(createResult);
  } else {
    await supabase.from("users").insert({
      nama: data.nama,
      id: createResult.data.user?.id,
      role: data.role,
      email: data.email,
    });
    revalidatePath("/dashboard/kelolaakunkurir");
    redirect("/dashboard/kelolaakunkurir");
  }
}
export async function updateKurirById(
  id: string,
  data: {
    nama: string;
    email: string;
    password?: string | undefined;
  }
) {
  const { data: userSession } = await readUserSession();
  if (userSession.session?.user.user_metadata.role !== "admin") {
    console.log("not allowed");
    return JSON.stringify({
      error: { message: "You are not allowed to do this!" },
    });
  }

  let updateObject: {
    email: string;
    password?: string | undefined;
  } = { email: data.email };
  if (data.password) {
    updateObject["password"] = data.password;
  }
  const supabaseAdmin = await createSupabaseAdmin();

  try {
    const updateResult = await supabaseAdmin.auth.admin.updateUserById(id, updateObject);
    if (updateResult.error?.message) {
      return JSON.stringify(updateResult);
    } else{
      const supabase = await createSupabaseServerClient();
      await supabase
        .from("users")
        .update({ nama: data.nama, email: data.email })
        .eq("id", id);
    }
  } catch (error) {
    return { message: "Database Error: Gagal Update Kurir" };
  }

  revalidatePath("/dashboard/kelolaakunkurir");
  redirect("/dashboard/kelolaakunkurir");
}
export async function deleteMemberById(id: string) {
  const { data: userSession } = await readUserSession();
  if (userSession.session?.user.user_metadata.role !== "admin") {
    console.log("not allowed");
    return JSON.stringify({
      error: { message: "You are not allowed to do this!" },
    });
  }
  const supabaseAdmin = await createSupabaseAdmin();
  const deleteResult = await supabaseAdmin.auth.admin.deleteUser(id);
  if (deleteResult.error?.message) {
    return JSON.stringify(deleteResult);
  } else {
    const supabase = await createSupabaseServerClient();
    await supabase.from("users").delete().eq("id", id);
  }
  revalidatePath("/dashboard/kelolaakunkurir");
  redirect("/dashboard/kelolaakunkurir");
}

export async function readMembers() {
  unstable_noStore();
  const supabase = await createSupabaseServerClient();
  return supabase.from("users").select("*");
}
