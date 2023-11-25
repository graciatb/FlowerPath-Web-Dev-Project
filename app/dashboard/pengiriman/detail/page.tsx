import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { FaHistory } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import Image from 'next/image';

/*untuk data*/
interface ShipmentDetail {
    no: number;
    courierName: string;
    recipientName: string;
    destinationAddress: string;
    flowerType: string;
    recipientPhoneNumber: string;
    shipmentStatus: string;

    tautanGambar: string;
    deskripsiKeterangan: string;
}

interface ShipmentTableProps {
    data: ShipmentDetail[];
}

const DetailPengiriman: React.FC = () => {
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
          shipmentStatus: 'on hold',

          tautanGambar: 'https://drive.com',
          deskripsiKeterangan: 'alamat penerima tidak ditemukan',
        },
    ]

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
                <a href= '..\pengiriman'
                className="text-orange-700 md:px-10 py-5 flex items-center" style={{fontSize: '24px', fontWeight: 'bold' }}>
                    {/* Judulnya */}
                    <ArrowLeftIcon className="w-4 md:w-6 mr-2" /> <span>Detail Pengiriman</span>
                </a>

                <div className="flex items-center justify-center md:p-10">
                <div className="flex items-center p-5 bg-white rounded-md bg-opacity-70 w-full">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="bg-orange-700 text-yellow-500">
                        <tr>
                        <th scope="col" className="py-4 px-6 border-b">No</th>
                        <th scope="col" className="py-4 px-6 border-b">Nama Kurir</th>
                        <th scope="col" className="py-4 px-6 border-b">Nama Penerima</th>
                        <th scope="col" className="py-4 px-6 border-b">Alamat Tujuan</th>
                        <th scope="col" className="py-4 px-6 border-b">Jenis Bunga</th>
                        <th scope="col" className="py-4 px-6 border-b">No Telp Penerima</th>
                        <th scope="col" className="py-4 px-6 border-b">Status Pengiriman</th>
                        </tr>
                    </thead>

                    <tbody style={{ overflowY: 'auto', maxHeight: '200px', 
                     }}>
                        {ShipmentDetail.map((row) => (
                        <tr key={row.no} className="bg-white dark:bg-gray-800">
                            <td className="py-4 px-6 border-b">{row.no}</td>
                            <td className="py-4 px-6 border-b">{row.courierName}</td>
                            <td className="py-4 px-6 border-b">{row.recipientName}</td>
                            <td className="py-4 px-6 border-b">{row.destinationAddress}</td>
                            <td className="py-4 px-6 border-b">{row.flowerType}</td>
                            <td className="py-4 px-6 border-b">{row.recipientPhoneNumber}</td>
                            <td className="py-4 px-6 border-b">{row.shipmentStatus}</td>
                         
                        </tr>
                        ))}    
                    </tbody>
                </table>
                </div>
            </div>

            <div className="flex items-center justify-center md:px-10">
                <div className="flex items-center p-5 bg-white rounded-md bg-opacity-70 w-full">
                    <div className="text-orange-700 md:px-10 py-5" style={{fontSize: '24px', fontWeight: 'bold' }}>
                        {/* Judulnya */}
                        <h1 >Keterangan Paket</h1>
                    </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="bg-orange-700 text-yellow-500">
                        <tr>
                        <th scope="col" className="py-4 px-6 border-b">Tautan Gambar</th>
                        <th scope="col" className="py-4 px-6 border-b">Deskripsi Keterangan</th>
                        </tr>
                    </thead>

                    <tbody style={{ overflowY: 'auto', maxHeight: '200px', 
                     }}>
                        {ShipmentDetail.map((row) => (
                        <tr className="bg-white dark:bg-gray-800">
                            <td className="py-4 px-6 border-b">{row.tautanGambar}</td>
                            <td className="py-4 px-6 border-b">{row.deskripsiKeterangan}</td>
                        </tr>
                        ))}    
                    </tbody>
                </table>
                </div>
            </div>
                
        </div>

            

        </div>
    );
};

export default DetailPengiriman;