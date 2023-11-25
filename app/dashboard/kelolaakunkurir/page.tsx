import Image from "next/image";
import React from "react";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";
import Search from "@/components/search";
import { fetchKurirPages } from "@/lib/action/data";
import TabelKurir from "@/components/KurirTable";

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
    <div className="w-full">
      {/* Navbar */}
      <div className="p-5 bg-gray-300">
        <div className="flex justify-between items-center">
          <div>Welcome, Michael Sihotang</div>
          <div>
            <Image
              src="/profil-image.png"
              alt="User Profile"
              className="w-15 h-15 rounded-full"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>

      {/* Background */}
      <div
        className="flex-grow bg-cover bg-center p-0 m-0"
        // style={{
        //   backgroundImage: 'url("/bg.png")',
        // }}
      >

        <div className="flex w-full items-center justify-between p-5">
          <h1 className="text-2xl font-bold text-orange-800">
            Kelola Akun Kurir
          </h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Search" />
          <Link
            href="/dashboard/kelolaakunkurir/tambahkurir"
            className="flex h-10 items-center bg-orange-800 text-white px-4 py-2 rounded-md text-sm transition-colors hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700"
          >
            <span className="hidden md:block">Tambah Akun Kurir</span>{" "}
            <PlusIcon className="h-5 md:ml-4" />
          </Link>
        </div>
        <div className= "mt-10">
        <TabelKurir query={query} currentPage={currentPage} />
        </div>
        
      </div>
    </div>
  );
}
