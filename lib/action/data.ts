import { unstable_noStore as noStore } from "next/cache";
import { createSupabaseServerClient } from "../supabase/server";

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredKurir(query: string, currentPage: number) {
  noStore();
  const supabase = await createSupabaseServerClient();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const result = await supabase
    .from("users")
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
      .from("users")
      .select("*", { count: "exact", head: true })
      .eq("role", "kurir")
      .ilike("nama", `%${query}%`);
    if (error) {
      throw new Error("Error fetching kurir pages");
    }
    if (count !== null) {
      return Math.ceil(count / ITEMS_PER_PAGE);
    } else {
      return 0;
    }
  } catch (error) {
    throw new Error("Error fetching kurir pages");
  }
}

export async function fetchPengirimanPages(query: string) {
  noStore();
  const supabase = await createSupabaseServerClient();
  const { count } = await supabase
    .from("pengiriman")
    .select("*, paket!inner(*)", { count: "exact" })
    .neq("statuspengiriman", "Delivered")
    .or(
      `or(penerima.ilike.%${query}%),or(alamat.ilike.%${query}%),or(jenisbunga.ilike.%${query}%),or(notelp.ilike.%${query}%)`,
      { referencedTable: "paket" }
    );
  if (count !== null) {
    return Math.ceil(count / ITEMS_PER_PAGE);
  } else {
    return 0;
  }
}

export async function fetchKurirById(id: string) {
  noStore();
  const supabase = await createSupabaseServerClient();
  const result = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .limit(1)
    .single();
  return result;
}

export async function fetchAllKurir() {
  noStore();
  const supabase = await createSupabaseServerClient();
  const result = await supabase.from("users").select("id").eq("role", "kurir");
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
    .select(
      "*,users!inner(nama),paket!inner(penerima,jenisbunga,alamat,notelp)"
    )
    .or(`or(nama.ilike.%${query}%)`, { referencedTable: "users" })
    .range(offset, offset + ITEMS_PER_PAGE - 1);
  return supaQuery;
}

export async function fetchFilteredPaket(query: string, currentPage: number) {
  noStore();
  const supabase = await createSupabaseServerClient();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const supaQuery = await supabase
    .from("pengiriman")
    .select("*,paket!inner(*)")
    .neq("statuspengiriman", "Delivered")
    .or(
      `or(penerima.ilike.%${query}%),or(jenisbunga.ilike.%${query}%),or(alamat.ilike.%${query}%),or(notelp.ilike.%${query}%)`,
      { referencedTable: "paket" }
    )
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
    .select(
      "*,users!inner(nama),paket!inner(penerima,jenisbunga,alamat,notelp)"
    )
    .eq("statuspengiriman", "Delivered")
    .or(`or(nama.ilike.%${query}%)`, { referencedTable: "users" })
    .range(offset, offset + ITEMS_PER_PAGE - 1);
  return supaQuery;
}

export async function fetchPengirimanById(id: string) {
  noStore();
  const supabase = await createSupabaseServerClient();
  const result = await supabase
    .from("pengiriman")
    .select("*,users!inner(nama),paket!inner(*)")
    .eq("id", id)
    .limit(1)
    .single();
  return result;
}

export async function fetchPaketById(id: string) {
  noStore();
  const supabase = await createSupabaseServerClient();
  const result = await supabase
    .from("pengiriman")
    .select("*,paket!inner(alamat,penerima,jenisbunga,notelp,catatan)")
    .eq("idpaket", id)
    .limit(1)
    .single();
  return result;
}

export async function fetchPaketCount() {
  noStore();
  const supabase = await createSupabaseServerClient();
  const { count } = await supabase
    .from("pengiriman")
    .select("idpaket", { count: "exact" })
    .neq("statuspengiriman", "Delivered");
  return count;
}

export async function fetchDeliveredPaketCount() {
  noStore();
  const supabase = await createSupabaseServerClient();
  const { count } = await supabase
    .from("pengiriman")
    .select("idpaket", { count: "exact" })
    .eq("statuspengiriman", "Delivered");
  return count;
}

export async function fetchOnHoldPaketCount() {
  noStore();
  const supabase = await createSupabaseServerClient();
  const { count } = await supabase
    .from("pengiriman")
    .select("idpaket", { count: "exact" })
    .eq("statuspengiriman", "On Hold");
  return count;
}