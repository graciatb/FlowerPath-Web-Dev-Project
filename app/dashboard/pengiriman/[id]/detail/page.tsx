import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";
import { fetchPengirimanById } from "@/lib/action/data";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const { data: detail } = await fetchPengirimanById(id);

  if (!detail) {
    notFound();
  }
  console.log(detail);

  const containerStyle: React.CSSProperties = {
    overflow: "hidden", // Menyembunyikan overflow
    height: "100vh", // Menetapkan tinggi 100% dari viewport
  };

  /*main kodenya*/
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
              width={40}
              height={40}
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
          href="\dashboard\pengiriman"
          className="text-orange-700 md:px-10 py-5 flex items-center"
          style={{ fontSize: "24px", fontWeight: "bold" }}
        >
          {/* Judulnya */}
          <ArrowLeftIcon className="w-4 md:w-6 mr-2" />{" "}
          <span>Detail Pengiriman</span>
        </a>

        <div className="flex items-center justify-center md:p-10">
          <div className="flex items-center p-5 bg-white rounded-md bg-opacity-70 w-full">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="bg-orange-700 text-yellow-500">
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
                  <td className="py-4 px-6 border-b">{detail.user.nama}</td>
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

        <div className="flex items-center justify-center md:px-10">
          <div className="flex items-center p-5 bg-white rounded-md bg-opacity-70 w-full">
            <div
              className="text-orange-700 md:px-10 py-5"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              {/* Judulnya */}
              <h1>Keterangan Paket</h1>
            </div>
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="bg-orange-700 text-yellow-500">
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
