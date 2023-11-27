import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";
import { fetchPengirimanById } from "@/lib/action/data";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const { data: detail } = await fetchPengirimanById(id);

  if (!detail) {
    notFound();
  }

  const containerStyle: React.CSSProperties = {
    overflow: "hidden", // Menyembunyikan overflow
    height: "100vh", // Menetapkan tinggi 100% dari viewport
  };

  /*main kodenya*/
  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* Navbar */}
      <div className="p-7 pl-14 bg-gray-200">
        <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <div>Welcome, Michael Sihotang</div>
        </div>
      </div>
      </div>
        <a
          href="\dashboard\pengiriman"
          className="flex pt-7 pl-14 text-2xl text-orange-700 font-bold bg-center"
        >
          {/* Judulnya */}
          <div className="pt-1"> 
          <FaArrowLeft color="pink-500" hover="bg-pink-200" />
          </div>
          <div className="pl-2"> 
          <span>Detail Pengiriman</span>
          </div>
        </a>
        <div className="pl-14 pr-14 pt-8">
        <div className="relative overflow-x-auto bg-white w-full rounded-md">
        <div className="flex items-center pt-6 px-8 pb-0">
            <div className="rounded-md h-8 w-full bg-green-400 bg-opacity-90">
              <div className="py-1 justify-center w-full flex text-md font-semibold text-green-600">
                Pengiriman Paket
              </div>
            </div>
          </div>

        <div className="flex items-center justify-center md:p-5">
          <div className="flex items-center px-5 sm:pt-5 md:py-0 bg-white rounded-md bg-opacity-70 w-full overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="bg-orange-800 text-white">
                <tr>
                  <th scope="col" className="py-4 px-6 border-b">
                    Nama Kurir
                  </th>
                  <th scope="col" className="py-4 px-6 border-b">
                    Nama Penerima
                  </th>
                  <th scope="col" className="py-4 px-6 border-b">
                    Alamat Tujuan
                  </th>
                  <th scope="col" className="py-4 px-6 border-b">
                    Jenis Bunga
                  </th>
                  <th scope="col" className="py-4 px-6 border-b">
                    No Telp Penerima
                  </th>
                  <th scope="col" className="py-4 px-6 border-b">
                    Status Pengiriman
                  </th>
                </tr>
              </thead>

              <tbody style={{ overflowY: "auto", maxHeight: "200px" }}>
                <tr className="bg-white">
                  <td className="py-4 px-6 border-b">{detail.users.nama}</td>
                  <td className="py-4 px-6 border-b">
                    {detail.paket.penerima}
                  </td>
                  <td className="py-4 px-6 border-b">{detail.paket.alamat}</td>
                  <td className="py-4 px-6 border-b">
                    {detail.paket.jenisbunga}
                  </td>
                  <td className="py-4 px-6 border-b">{detail.paket.notelp}</td>
                  <td className="py-4 px-6 border-b">
                    {detail.statuspengiriman}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
          
          <div className="sm:pt-5 px-8 pb-5">
          <div className="rounded-md h-8 w-full bg-green-400 bg-opacity-90">
              <div className="py-1 justify-center w-full flex text-md font-semibold text-green-600">
                Keterangan Paket
              </div>
          </div>
          </div>

          <div className="pb-10 px-10">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="bg-orange-800 text-white">
                <tr>
                  <th scope="col" className="py-4 px-6 border-b">
                    Tautan Gambar
                  </th>
                  <th scope="col" className="py-4 px-6 border-b">
                    Deskripsi Keterangan
                  </th>
                </tr>
              </thead>

              <tbody style={{ overflowY: "auto", maxHeight: "200px" }}>
                
                        <tr className="bg-white">
                            <td className="py-4 px-6 border-b">{detail.fotopengiriman ? detail.fotopengiriman : "Tidak ada foto"}</td>
                            <td className="py-4 px-6 border-b">{detail.catatanpengiriman ? detail.catatanpengiriman : "Tidak ada catatan"}</td>
                        </tr>          
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
  );
}
