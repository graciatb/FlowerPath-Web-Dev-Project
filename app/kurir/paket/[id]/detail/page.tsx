import { FaArrowLeft } from "react-icons/fa";
import PackageTable from "@/components/detailpackagetable";
import { fetchPaketById } from "@/lib/action/data";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const { data: detail } = await fetchPaketById(id);
  if (!detail) {
    notFound();
  }

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* Set header */}
      <div className="p-7 pl-14 bg-gray-200">
        <div className="flex justify-left space-x-1">
          <div> Welcome,</div>
          <div className="font-bold">
            <div> Michael Sihotang </div>
          </div>
        </div>
      </div>

      {/* Set text */}
      <Link href="/kurir/paket" className="flex pt-7 pl-14">
        {/* Set arrow back */}
        <button>
          <FaArrowLeft color="pink-500" hover="bg-pink-200" />
        </button>
        <div className="pl-4 flex text-2xl text-orange-700 font-bold flex-grow bg-center p-0 m-0">
          <div>Detail Paket</div>
        </div>
      </Link>

      {/* Set white box */}
      <div className="flex items-center justify-center h-full">
        <div className="box-content h-96 w-11/12 pb-32 bg-white bg-opacity-90 rounded-xl">
          {/* Set header box 1 */}
          <div className="flex items-center pt-5 px-8 pb-0">
            <div className="rounded-md h-8 w-full bg-green-400 bg-opacity-90">
              <div className="py-1 justify-center w-full flex text-md font-semibold text-green-600">
                Keterangan Paket
              </div>
            </div>
          </div>

          {/* Set table */}
          <div className="items-center pt-0 px-8 pb-0 w-full overflow-y-auto">
            <PackageTable detail={detail} />
          </div>
        </div>
      </div>
    </div>
  );
}
