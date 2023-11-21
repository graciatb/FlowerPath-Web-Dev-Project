import React from 'react';

interface Courier {
  id: number;
  name: string;
  username: string;
  password: string;
}

interface CourierTableProps {
  couriers: Courier[];
}

const CourierTable: React.FC<CourierTableProps> = ({ couriers }) => {
  return (
    <div className="container mx-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">No</th>
            <th className="py-2 px-4 border-b">Nama Kurir</th>
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Password</th>
            <th className="py-2 px-4 border-b">Lihat Selengkapnya</th>
            <th className="py-2 px-4 border-b">Edit</th>
            <th className="py-2 px-4 border-b">Hapus</th>
          </tr>
        </thead>
        <tbody>
          {couriers.map((courier, index) => (
            <tr key={courier.id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{courier.name}</td>
              <td className="py-2 px-4 border-b">{courier.username}</td>
              <td className="py-2 px-4 border-b">{courier.password}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white py-1 px-2 rounded">Lihat</button>
              </td>
              <td className="py-2 px-4 border-b">
                <button className="bg-yellow-500 text-white py-1 px-2 rounded">Edit</button>
              </td>
              <td className="py-2 px-4 border-b">
                <button className="bg-red-500 text-white py-1 px-2 rounded">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourierTable;
