import React from "react";
import { FaHistory } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Search from "@/components/search";
import PengirimanTable from "@/components/PengirimanTable";
import Pagination from "@/components/pagination";
import { fetchCurrentUserName, fetchPengirimanPages } from "@/lib/action/data";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const containerStyle: React.CSSProperties = {
    overflow: "hidden", // Menyembunyikan overflow
    height: "100vh", // Menetapkan tinggi 100% dari viewport
  };

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchPengirimanPages(query);
  const nama = await fetchCurrentUserName();
  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* Navbar */}
      <div className="p-7 pl-14 bg-gray-200">
        <div className="flex justify-left space-x-1">
          <div>Welcome, </div>
          <div className="font-bold">{nama}</div>
        </div>
      </div>
      <div className="pt-7 pl-14 text-2xl text-orange-700 font-bold bg-center">
        {/* Judulnya */}
        <h1>Pengiriman</h1>
      </div>

      <div className="pl-14 pr-14 pt-8">
        <div className="relative overflow-x-auto bg-white w-full rounded-md">
          <div className="pl-12 pt-8 px-8 grid grid-cols-2 gap-3">
            {/* Untuk tombolnya */}
            <Link
              href="/dashboard/pengiriman/tambahpengiriman"
              className="flex justify-center w-full py-2 h-9 bg-green-400 bg-opacity-90 rounded-full hover:bg-green-500 text-sm text-green-600 font-semibold hover:text-white"
            >
              Tambah Pengiriman
            </Link>

            <Link
              href="/dashboard/pengiriman"
              className="flex justify-center py-2 h-10 w-full bg-green-400 bg-opacity-90 rounded-full hover:bg-green-500 text-sm text-green-600 font-semibold hover:text-white "
            >
              Daftar Pengiriman
            </Link>
          </div>
          <div className="ml-12 w-11/12 flex items-center justify-between gap-2 sm:mt-2 md:mt-3">
            {/* Set width to full width */}
            <Search placeholder="Search" />

            <Link
              href="pengiriman\riwayat"
              className="flex items-center p-3 pl-4 md:mr-5 sm:mr-8 bg-pink-600 text-white rounded-lg"
            >
              <FaHistory className="md:w-5 md:h-5 sm:w-4 mr-4" />
              <p>Lihat Riwayat</p>
            </Link>
          </div>

          <div className="flex pt-3 pb-2 items-center justify-center md:px-0 w-full">
            <PengirimanTable
              query={query}
              currentPage={currentPage}
              riwayat={false}
            />
          </div>
          <div className="sm:pt-1 sm:pb-2 justify-center xl:pt-4 2xl:px-8 xl:pb-4 w-full flex">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </div>
    </div>
  );
}
