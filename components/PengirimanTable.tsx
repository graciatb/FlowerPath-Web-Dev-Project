import React from "react";
import Link from "next/link";
import {
  fetchFilteredPengiriman,
  fetchRiwayatPengiriman,
} from "@/lib/action/data";

export default async function PengirimanTable({
  query,
  currentPage,
  riwayat,
}: {
  query: string;
  currentPage: number;
  riwayat: boolean;
}) {
  

  const { data: table } = riwayat
    ? await fetchRiwayatPengiriman(query, currentPage)
    : await fetchFilteredPengiriman(query, currentPage);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-black dark:text-gray-400">
        <thead className="bg-orange-800 text-white">
          <tr>
            <th scope="col" className="py-3 px-7 border-b">
              No
            </th>
            <th scope="col" className="py-3 px-7 border-b">
              Nama Kurir
            </th>
            <th scope="col" className="py-3 px-7 border-b">
              Nama Penerima
            </th>
            <th scope="col" className="py-3 px-7 border-b">
              Alamat Tujuan
            </th>
            <th scope="col" className="py-3 px-7 border-b">
              Jenis Bunga
            </th>
            <th scope="col" className="py-3 px-7 border-b">
              No Telp Penerima
            </th>
            <th scope="col" className="py-3 sm:px-16 2xl:px-7 border-b">
              Lihat Detail
            </th>
          </tr>
        </thead>

        <tbody
          style={{ overflowY: "auto", maxHeight: "200px", overflowX: "auto" }}
        >
          {table?.map((row, index) => (
            <tr key={row.id} className="bg-white">
              <td className="py-3 px-6 border-b">{index + 1}</td>
              <td className="py-3 px-6 border-b">{row.users.nama}</td>
              <td className="py-3 px-6 border-b">{row.paket.penerima}</td>
              <td className="py-3 px-6 border-b">{row.paket.alamat}</td>
              <td className="py-3 px-6 border-b">{row.paket.jenisbunga}</td>
              <td className="py-3 px-6 border-b">{row.paket.notelp}</td>
              <td className="py-3 px-6 border-b">
                
              
                <Link
                  href={`/dashboard/pengiriman/${row.id}/detail`}
                  className="w-full py-2 px-5 
                                    md:text-sm font-semibold text-orange-800
                                    focus:outline-none bg-pink-400 rounded-full border border-gray-200 
                                    hover:bg-pink-600 hover:text-white "
                  // Ganti dengan lebar yang diinginkan
                >
                  Lihat Detail
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
