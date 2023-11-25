import EditKurirForm from "@/components/EditKurirForm";
import { fetchKurirById } from "@/lib/action/data";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const { data: kurir } = await fetchKurirById(id);

  if(!kurir) {
    notFound();
  }
  return (
    <main>
      <EditKurirForm kurir={kurir} />
    </main>
  );
}
