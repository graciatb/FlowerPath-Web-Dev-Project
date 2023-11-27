"use server";

import { createSupabaseServerClient } from "../../../lib/supabase/server";
import { redirect } from "next/navigation";

export async function signIn(data: {
	email: string;
	password: string;
}) {
    const supabase = await createSupabaseServerClient();
	const result = await supabase.auth.signInWithPassword(data);
	return JSON.stringify(result);
}

export async function logout() {
	const supabase = await createSupabaseServerClient();
	await supabase.auth.signOut();
	
	// Add a console log to see the arguments passed to redirect
	console.log('Redirecting to:', '/login');
	
	redirect("/login");
  }