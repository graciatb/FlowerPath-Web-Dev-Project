// page.tsx
import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <div className="p-5 bg-gray-300">
        <div className="flex justify-between items-center">
          <div>Welcome, Michael Sihotang</div>
          <div>
            <img
              src="/profil-image.png"
              alt="User Profile"
              className="w-15 h-15 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Background */}
      <div
        className="flex-grow bg-cover bg-center p-0 m-0"
      >
        <h1 className="text-2xl font-bold mb-2 p-5 text-orange-800">Dashboard</h1>
        {/* Page Content */}
        <div className="flex items-center justify-center">
          <div className="p-4 bg-white rounded-md bg-opacity-70 w-full">
            {/* Set width to full width */}

            {/* White Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F0F0F0] p-2 rounded-xl">
              {/* Upper White Box (Orange) */}
              <div className="bg-orange-200 p-4 rounded-md flex items-center mb-4 bg-opacity-70">
                <div className="flex-shrink-0">
                  {/* Circular Image for Box 1 */}
                  <img
                    src="kotak1.png"
                    alt="Image 1"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold">Total Kurir</p>
                  <p>200</p>
                </div>
              </div>

              {/* Upper White Box (Green) */}
              <div className="bg-green-500 p-4 rounded-md flex items-center mb-4 bg-opacity-70">
                <div className="flex-shrink-0">
                  {/* Circular Image for Box 2 */}
                  <img
                    src="kotak2.png"
                    alt="Image 2"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold">Total Pengiriman</p>
                  <p>200</p>
                </div>
              </div>

              {/* Lower White Box (Green) */}
              <div className="bg-green-500 p-4 rounded-md flex items-center bg-opacity-70">
                <div className="flex-shrink-0">
                  {/* Circular Image for Box 3 */}
                  <img
                    src="kotak3.png"
                    alt="Image 3"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold">Total Riwayat</p>
                  <p>200</p>
                </div>
              </div>

              {/* Lower White Box (Orange) */}
              <div className="bg-orange-200 p-4 rounded-md flex items-center bg-opacity-70">
                <div className="flex-shrink-0">
                  {/* Circular Image for Box 4 */}
                  <img
                    src="kotak4.png"
                    alt="Image 4"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold">Total Laporan</p>
                  <p>200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;