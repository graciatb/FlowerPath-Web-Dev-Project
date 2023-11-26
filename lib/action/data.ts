import { unstable_noStore as noStore } from "next/cache";
import { createSupabaseServerClient } from "../supabase/server";

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredKurir(query: string, currentPage: number) {
  noStore();
  const supabase = await createSupabaseServerClient();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const result = await supabase
    .from("user")
    .select("*")
    .eq("role", "kurir")
    .ilike("nama", `%${query}%`)
    .range(offset, offset + ITEMS_PER_PAGE - 1);
  return result;
}

export async function fetchKurirPages(query: string) {
  noStore();
  const supabase = await createSupabaseServerClient();
  try {
    const { count, error } = await supabase
      .from("user")
      .select("*", { count: "exact", head: true })
      .eq("role", "kurir")
      .ilike("nama", `%${query}%`);
    if (error) {
      throw error;
    }
    if (count !== null) {
      return Math.ceil(count / ITEMS_PER_PAGE);
    }
  } catch (error) {
    return JSON.stringify(error);
  }
}

export async function fetchKurirById(id: string) {
  noStore();
  const supabase = await createSupabaseServerClient();
  const result = await supabase
    .from("user")
    .select("*")
    .eq("id", id)
    .limit(1)
    .single();
  return result;
}

export async function fetchAllKurir() {
  noStore();
  const supabase = await createSupabaseServerClient();
  const result = await supabase.from("user").select("id").eq("role", "kurir");
  // console.log(result);
  return result;
}

export async function fetchAllPaket() {
  noStore();
  const supabase = await createSupabaseServerClient();
  const { data: result, error: error } = await supabase
    .from("pengiriman")
    .select("*");
  const resultString = `("${result?.map((item) => item.idpaket).join('","')}")`;
  const availablePaket = await supabase
    .from("paket")
    .select("*")
    .not("id", "in", resultString);
  // console.log(availablePaket);
  return availablePaket;
}

export async function fetchFilteredPengiriman(
  query: string,
  currentPage: number
) {
  noStore();
  const supabase = await createSupabaseServerClient();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const supaQuery = await supabase
    .from("pengiriman")
    .select("*,user!inner(nama),paket!inner(penerima,jenisbunga,alamat,notelp)")
    .or(`or(nama.ilike.%${query}%)`, {referencedTable:'user'})
    .range(offset, offset + ITEMS_PER_PAGE - 1);
  return supaQuery;
}

export async function fetchRiwayatPengiriman(
  query: string,
  currentPage: number
) {
  noStore();
  const supabase = await createSupabaseServerClient();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const supaQuery = await supabase
    .from("pengiriman")
    .select("*,user!inner(nama),paket!inner(penerima,jenisbunga,alamat,notelp)")
    .eq("statuspengiriman", "Delivered")
    .or(`or(nama.ilike.%${query}%)`, {referencedTable:'user'})
    .range(offset, offset + ITEMS_PER_PAGE - 1);
  return supaQuery;
}

export async function fetchPengirimanById(id: string) {
  noStore();
  const supabase = await createSupabaseServerClient();
  const result = await supabase
    .from("pengiriman")
    .select("*,user!inner(nama),paket!inner(*)")
    .eq("id", id)
    .limit(1)
    .single();
  return result;
}
