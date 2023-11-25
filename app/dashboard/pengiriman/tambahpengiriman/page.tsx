import TambahPengirimanForm from "@/components/TambahPengirimanForm";
import { fetchAllKurir, fetchAllPaket } from "@/lib/action/data";

export default async function Page() {
  const { data: paket } = await fetchAllPaket();
  const { data: kurir } = await fetchAllKurir();

  return (
    <main>
      <TambahPengirimanForm paket={paket} kurir={kurir} />
    </main>
  );
}
