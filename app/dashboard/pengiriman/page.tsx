import React from 'react';
import { FaHistory } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import Link from 'next/link';
import Search from '@/components/search';

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

const DaftarPengiriman: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        overflow: 'hidden', // Menyembunyikan overflow
        height: '100vh', // Menetapkan tinggi 100% dari viewport
    };

    /*untuk data*/
    const ShipmentDetail = [
        {
          no: 1,
          courierName: 'John Doe',
          recipientName: 'Alice',
          destinationAddress: '123 Main St',
          flowerType: 'Roses',
          recipientPhoneNumber: '555-1234',
        },
        {
          no: 2,
          courierName: 'Jane Smith',
          recipientName: 'Bob',
          destinationAddress: '456 Oak St',
          flowerType: 'Tulips',
          recipientPhoneNumber: '555-5678',
        },
        {
            no: 3,
            courierName: 'Jane Smith',
            recipientName: 'Bob',
            destinationAddress: '456 Oak St',
            flowerType: 'Tulips',
            recipientPhoneNumber: '555-5678',
        },
        {
            no: 4,
            courierName: 'Jane Smith',
            recipientName: 'Bob',
            destinationAddress: '456 Oak St',
            flowerType: 'Tulips',
            recipientPhoneNumber: '555-5678',
        },
        {
            no: 5,
            courierName: 'Jane Smith',
            recipientName: 'Bob',
            destinationAddress: '456 Oak St',
            flowerType: 'Tulips',
            recipientPhoneNumber: '555-5678',
        },
        // ... tambahkan data lainnya sesuai kebutuhan
    ];

    /*main kodenya*/
    return (
        <div className="flex flex-col h-screen">
            {/* Navbar */}
            <div className="p-8 bg-gray-300 ">
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
            className="flex-grow bg-cover bg-center p-0 m-0 "
            style={{
            backgroundImage: 'url("/bg.png")',
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0,
        }}
        >

    
                <div className="text-orange-700 md:px-10 py-5" style={{fontSize: '24px', fontWeight: 'bold' }}>
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
                    <div className="flex items-center p-5 bg-white rounded-md bg-opacity-70 w-full">
                    {/* Set width to full width */}
                    <Search/>

                    <Link href='pengiriman\riwayat' className="flex items-center ml-40 p-3 bg-green-50 text-green-800 rounded-lg">
                        <FaHistory className="w-5 h-5 mr-2" />
                        <p>Lihat Riwayat</p>
                    </Link>
                    </div>
                </div>

                <div className="flex items-center justify-center md:px-10">
                    <div className="p-10 bg-white rounded-md bg-opacity-70 w-full overflow-hidden">
                    <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="bg-orange-700 text-yellow-500">
                        <tr>
                        <th scope="col" className="py-3 px-6 border-b">No</th>
                        <th scope="col" className="py-3 px-6 border-b">Nama Kurir</th>
                        <th scope="col" className="py-3 px-6 border-b">Nama Penerima</th>
                        <th scope="col" className="py-3 px-6 border-b">Alamat Tujuan</th>
                        <th scope="col" className="py-3 px-6 border-b">Jenis Bunga</th>
                        <th scope="col" className="py-3 px-6 border-b">No Telp Penerima</th>
                        <th scope="col" className="py-3 px-6 border-b">Lihat Detail</th>
                        </tr>
                    </thead>

                    <tbody style={{ overflowY: 'auto', maxHeight: '200px', 
                     }}>
                        {ShipmentDetail.map((row) => (
                        <tr key={row.no} className="bg-white dark:bg-gray-800">
                            <td className="py-3 px-6 border-b">{row.no}</td>
                            <td className="py-3 px-6 border-b">{row.courierName}</td>
                            <td className="py-3 px-6 border-b">{row.recipientName}</td>
                            <td className="py-3 px-6 border-b">{row.destinationAddress}</td>
                            <td className="py-3 px-6 border-b">{row.flowerType}</td>
                            <td className="py-3 px-6 border-b">{row.recipientPhoneNumber}</td>
                            <td className="py-3 px-6 border-b">
                                <Link href="pengiriman/detail"
                                    className="py-2.5 px-5 me-2 mb-2 
                                    text-md font-medium text-gray-900 
                                    focus:outline-none bg-yellow-200 rounded-full border border-gray-200 
                                    hover:bg-yellow-700 hover:text-white 
                                    focus:z-10 focus:ring-4 focus:ring-gray-200 
                                    dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 
                                    dark:hover:text-white dark:hover:bg-gray-700"
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
                    </div>
                </div>

 
                
            </div>             


        </div>
   
        
    );
};

export default DaftarPengiriman;