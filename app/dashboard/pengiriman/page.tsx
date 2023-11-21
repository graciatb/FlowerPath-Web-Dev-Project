import React from 'react';
import { FaHistory } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import Image from 'next/image';

const DaftarPengiriman: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        overflow: 'hidden', // Menyembunyikan overflow
        height: '100vh', // Menetapkan tinggi 100% dari viewport
    };

    return (
        /* Background */
        <div style={containerStyle}>
            <div className="bg-cover"
            style={{
            backgroundImage: 'url("/bg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            width: '100%',
            }}>
    
                <div className="text-orange-700 md:p-10" style={{fontSize: '24px', fontWeight: 'bold' }}>
                    {/* Judulnya */}
                    <h1 >Pengiriman</h1>
                </div>
            
                <div className="flex justify-center">
                    {/* Untuk tombolnya */}
                    <div className="col-span-1 md:pl-5">
                    <button type="button" 
                    className="py-2.5 px-5 me-2 mb-2 
                    text-md font-medium text-gray-900 
                    focus:outline-none bg-green-400 rounded-full border border-gray-200 
                    hover:bg-green-600 hover:text-white 
                    focus:z-10 focus:ring-4 focus:ring-gray-200 
                    dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 
                    dark:hover:text-white dark:hover:bg-gray-700"
                    style={{ width: '540px' }} // Ganti dengan lebar yang diinginkan
                    >
                        Tambah Pengiriman
                    </button>
                    </div>

                    <div className="col-span-1 md:pl-5">
                    <button type="button" 
                    className="py-2.5 px-5 me-2 mb-2 
                    text-md font-medium text-gray-900 
                    focus:outline-none bg-green-400 rounded-full border border-gray-200 
                    hover:bg-green-600 hover:text-white 
                    focus:z-10 focus:ring-4 focus:ring-gray-200 
                    dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 
                    dark:hover:text-white dark:hover:bg-gray-700"
                    style={{ width: '540px' }} // Ganti dengan lebar yang diinginkan
                    >
                        Daftar Pengiriman
                    </button>
                    </div>
                </div>
                
                <div className="flex items-center justify-center md:p-10">
                    <div className="p-5 bg-white rounded-md bg-opacity-70 w-full">
                    {/* Set width to full width */}
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex-1"
                        style={{ width: '540px' }}
                    />
                
                    <button
                        type="button"
                        className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
                    >
                    Kirim
                    </button>

                    <button className="flex items-center ml-auto p-3 bg-white text-green-800 rounded-lg">
                        <FaHistory className="w-5 h-5 mr-2" />
                        <p>Lihat Riwayat</p>
                    </button>
                    </div>
                </div>

                <div className="flex items-center justify-center md:px-10">
                    <div className="p-20 bg-white rounded-md bg-opacity-70 w-full">
                    </div>
                </div>

             


            </div>
        </div>
        
    );
};

export default DaftarPengiriman;