import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from './layout';

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2 h-screen">
        <div className="col-span-1 flex items-center justify-center">
          {/* Gambar pada sisi kiri */}
          <Image
            src="/login.png"
            alt="Login Image"
            width={800}
            height={1600} // Sesuaikan tinggi gambar dengan kebutuhan desain Anda
            style={{ margin: '-20px 0 0 0', padding: '0' }} // Namaikan logo dan sesuaikan margin
          />
        </div>
        <div className="col-span-1 p-20 bg-white border-2 border-solid border-orange-500 rounded-15">
          {/* Logo, judul masuk, dan form login */}
          <div className="flex flex-col items-center justify-center mb-6">
            <Image
              src="/flowerpath-logo.png"
              alt="Logo"
              width={150} // Sesuaikan lebar logo dengan kebutuhan desain Anda
              height={150} // Sesuaikan tinggi logo dengan kebutuhan desain Anda
              className="self-center"
            />
            <h2 className="text-center mt-2 font-bold text-orange-700 text-xl">Masuk</h2>
          </div>
          <form className="w-full">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-solid border-orange-700 rounded p-2 mb-2"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-solid border-orange-700 rounded p-2 mb-4"
            />

            {/* Tombol untuk login */}
            <Link href="/dashboard" passHref>
              <button
                type="submit"
                className="bg-orange-700 text-white rounded-full py-2 px-6 cursor-pointer w-full"
              >
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
