// page.tsx
import React from 'react';
import { FaMotorcycle } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import { fetchCurrentUserName, fetchDeliveredPaketCount, fetchKurirCount, fetchOnHoldPaketCount, fetchPaketCount } from '@/lib/action/data';


export default async function Page(){
  const nama = fetchCurrentUserName();
  const countpaket = fetchPaketCount();
  const countproblem = fetchOnHoldPaketCount();
  const countriwayat = fetchDeliveredPaketCount();
  const countkurir = fetchKurirCount();
  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* Navbar */}
      <div className="p-7 pl-14 bg-gray-200">
        <div className="flex justify-left space-x-1">
          <div>Welcome, </div>
          <div className = "font-bold">{nama}</div>
          </div>
        </div>

      {/* Background */}
      <div
        className="flex-grow bg-cover bg-center p-0 m-0"
      >
        <h1 className="pt-12 pl-14 text-4xl text-orange-700 font-bold flex-grow bg-center pb-10">Dashboard</h1>
        {/* Page Content */}
        <div className="flex items-center justify-center">
          <div className="p-16 bg-white rounded-md bg-opacity-70 w-11/12">

            {/* White Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 rounded-xl">
              {/* Upper White Box*/}
              <div className="bg-green-400 p-10 rounded-md flex items-center mb-0 bg-opacity-90">
                <div className="flex-shrink-0">
                </div>
                <div className="md:ml-16 sm:ml-0">
                  <p className="text-lg font-medium text-gray-600">Total Kurir</p>
                  <p className="font-bold text-3xl">{countkurir}</p>
                </div>
                <div className="overflow-hidden">
                <div className="md:ml-40 sm:ml-32 py-4 px-4 bg-green-500 bg-opacity-100 rounded-full">
                <FaMotorcycle color="white" size="40"/>
                </div>
                </div>
              </div>

              {/* Upper White Box*/}
              <div className="bg-green-400 p-10 rounded-md flex items-center mb-0 bg-opacity-90">
                <div className="flex-shrink-0">
                </div>
                <div className="md:ml-16 sm:ml-0">
                  <p className="text-lg font-medium text-gray-600">Total Pengiriman</p>
                  <p className="font-bold text-3xl">{countpaket}</p>
                </div>
                <div className="overflow-hidden">
                <div className="md:ml-28 sm:ml-20 py-4 px-4 bg-green-500 bg-opacity-100 rounded-full">
                <FaTruck color="white" size="40"/>
                </div>
                </div>
              </div>

              {/* Lower White Box*/}
              <div className="bg-green-400 py-10 rounded-md flex items-center bg-opacity-90">
                <div className="flex-shrink-0">
                </div>
                <div className="md:ml-24 sm:ml-10">
                  <p className="text-lg font-medium text-gray-600">Total Riwayat</p>
                  <p className="font-bold text-3xl">{countriwayat}</p>
                </div>
                <div className="overflow-hidden">
                <div className="md:ml-36 sm:ml-24 py-4 px-4 bg-green-500 bg-opacity-100 rounded-full">
                <FaHistory color="white" size="40"/>
                </div>
                </div>
              </div>

              {/* Lower White Box*/}
              <div className="bg-pink-400 p-10 rounded-md flex items-center bg-opacity-90">
                <div className="flex-shrink-0">
                </div>
                <div className="md:ml-16 sm:ml-0">
                  <p className="text-lg font-medium text-gray-600">Total Laporan</p>
                  <p className="font-bold text-3xl">{countproblem}</p>
                </div>
                <div className="overflow-hidden">
                <div className="md:ml-36 sm:ml-24 py-4 px-4 bg-pink-500 bg-opacity-100 rounded-full">
                <IoWarningOutline color="white" size="40"/>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};