import Image from "next/image";
import React from "react";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";
import Search from "@/components/search";
import { fetchKurirPages } from "@/lib/action/data";
import TabelKurir from "@/components/KurirTable";
import Pagination from "@/components/pagination";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchKurirPages(query);

  return (
    <div className="w-full flex flex-col h-screen bg-slate-50">
      {/* Navbar */}
      <div className="p-7 pl-14 bg-gray-200">
        <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <div>Welcome, Michael Sihotang</div>
        </div>
      </div>
      </div>

      {/* Background */}
      <div
        className="flex-grow bg-cover bg-center p-0 m-0">
        <div className="flex w-full items-center justify-between">
          <h1 className="pt-7 pl-14 text-2xl text-orange-700 font-bold flex-grow bg-center">
            Kelola Akun Kurir
          </h1>
        </div>
        <div className="pl-14 pr-14 pt-8">
        <div className="relative overflow-x-auto bg-white w-full rounded-md">
        <div className="mt-4 ml-12 w-11/12 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Search" />
          <Link
            href="/dashboard/kelolaakunkurir/tambahkurir"
            className="flex h-10 items-center bg-orange-800 text-white px-4 py-2 rounded-md text-sm transition-colors hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700"
          >
            <span className="hidden md:block">Tambah Akun Kurir</span>{" "}
            <PlusIcon className="h-5 md:ml-4" />
          </Link>
          <div className = "pr-3"></div>
        </div>
        <div className= "mt-10">
        <div className="pb-8 justify-center w-full flex">
        <TabelKurir query={query} currentPage={currentPage} />
        </div>
        {/* Set pagination */}
          <div className="sm:pt-1 sm:pb-3 justify-center xl:pt-4 2xl:px-8 xl:pb-4 w-full flex">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}
