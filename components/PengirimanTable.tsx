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
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="bg-orange-700 text-yellow-500">
          <tr>
            <th scope="col" className="py-3 px-6 border-b">
              No
            </th>
            <th scope="col" className="py-3 px-6 border-b">
              Nama Kurir
            </th>
            <th scope="col" className="py-3 px-6 border-b">
              Nama Penerima
            </th>
            <th scope="col" className="py-3 px-6 border-b">
              Alamat Tujuan
            </th>
            <th scope="col" className="py-3 px-6 border-b">
              Jenis Bunga
            </th>
            <th scope="col" className="py-3 px-6 border-b">
              No Telp Penerima
            </th>
            <th scope="col" className="py-3 px-6 border-b">
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
              <td className="py-3 px-6 border-b">{row.user.nama}</td>
              <td className="py-3 px-6 border-b">{row.paket.penerima}</td>
              <td className="py-3 px-6 border-b">{row.paket.alamat}</td>
              <td className="py-3 px-6 border-b">{row.paket.jenisbunga}</td>
              <td className="py-3 px-6 border-b">{row.paket.notelp}</td>
              <td className="py-3 px-6 border-b">
                <Link
                  href="pengiriman/detail"
                  className="py-2.5 px-5 me-2 mb-2 
                                    text-sm font-small text-gray-900 
                                    focus:outline-none bg-yellow-200 rounded-full border border-gray-200 
                                    hover:bg-yellow-700 hover:text-white "
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
