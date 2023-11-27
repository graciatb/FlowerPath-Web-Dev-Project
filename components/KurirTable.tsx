import { fetchFilteredKurir } from "@/lib/action/data";
import Link from "next/link";
import React from "react";
import DeleteKurirButton from "./DeleteKurirButton";

export default async function TabelKurir({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {

  const {data: kurir} = await fetchFilteredKurir(query, currentPage);

  return (
      <table className="w-11/12 text-sm text-left rtl:text-right text-gray-200 dark:text-gray-200">
        <thead className="text-sm text-white bg-orange-800 dark:bg-orange-800 dark:text-gray-200">
          <tr>
            <th scope="col" className="p-4">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Nama Kurir
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Hapus
            </th>
          </tr>
        </thead>
        <tbody>
          {kurir?.map((kurir, index) => (
            <tr
              key={kurir.id}
              className="bg-white border-b dark:bg-gray-200 dark:border-gray-700"
            >
              <td className="w-4 p-4 text-black">{index + 1}</td>
              <td className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                {kurir.nama}
              </td>
              <td className="px-6 py-4 text-black">{kurir.email}</td>
              <td className="px-6 py-4 text-black">{kurir.role}</td>
              <td className="px-6 py-4">
                <Link 
                href={`/dashboard/kelolaakunkurir/${kurir.id}/edit`}
                className="bg-green-500 text-white px-4 py-2.5 rounded-md text-sm">
                  Edit
                </Link>
              </td>
              <td className="px-6 py-2">
                <DeleteKurirButton id={kurir.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}
