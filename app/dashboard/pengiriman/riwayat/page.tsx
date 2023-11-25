import Search from "@/components/search";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import PengirimanTable from "@/components/PengirimanTable";

/*untuk data*/
interface ShipmentDetail {
  no: number;
  courierName: string;
  recipientName: string;
  destinationAddress: string;
  flowerType: string;
  recipientPhoneNumber: string;
}

interface ShipmentTableProps {
  data: ShipmentDetail[];
}

export default function Page({
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

  // const [searchTerm, setSearchTerm] = useState<string>('');
  // const [searchResults, setSearchResults] = useState<ShipmentDetail[]>(data);

  // Fungsi untuk melakukan pencarian
  // const handleSearch = () => {
  //   const results = data.filter((row) =>
  //     Object.values(row)
  //       .join(' ')
  //       .toLowerCase()
  //       .includes(searchTerm.toLowerCase())
  //   );
  //   setSearchResults(results);
  // };

  /*main kodenya*/
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <div className="p-8 bg-gray-300 ">
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
        className="flex-grow bg-cover bg-center p-0 m-0 "
        style={{
          backgroundImage: 'url("/bg.png")',
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0,
        }}
      >
        <a
          href="..\pengiriman"
          className="text-orange-700 md:px-10 py-5 flex items-center"
          style={{ fontSize: "24px", fontWeight: "bold" }}
        >
          {/* Judulnya */}
          <ArrowLeftIcon className="w-4 md:w-6 mr-2" />{" "}
          <span>Riwayat Pengiriman</span>
        </a>

        <div className="px-8 grid grid-cols-2 gap-3">
          {/* Untuk tombolnya */}

          <button className="h-10 w-full bg-green-400 bg-opacity-90 rounded-full hover:bg-green-500 text-sm text-green-600 font-semibold hover:text-white ">
            Tambah Pengiriman
          </button>

          <button className="h-10 w-full bg-green-400 bg-opacity-90 rounded-full hover:bg-green-500 text-sm text-green-600 font-semibold hover:text-white ">
            Daftar Pengiriman
          </button>
        </div>

        <div className="flex items-center justify-center md:p-10">
          <div className="flex items-center p-5 bg-white rounded-md bg-opacity-70 w-full">
            <Search placeholder="" />
          </div>
        </div>

        <div className="flex items-center justify-center md:px-10">
          <div className="p-10 bg-white rounded-md bg-opacity-70 w-full overflow-hidden">
            <PengirimanTable query={query} currentPage={currentPage} riwayat = {true}/>
          </div>
        </div>
      </div>
    </div>
  );
}
