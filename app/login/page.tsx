// login/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from './layout';

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between p-20">
        <div className="flex-1">
          {/* Gambar pada sisi kiri */}
          <Image
            src="/login.png"
            alt="Login Image"
            width={300}
            height={600}  // Sesuaikan tinggi gambar dengan kebutuhan desain Anda
          />
        </div>
        <div className="flex-1 p-20 bg-white border-2 border-solid border-B6503C rounded-15">
          {/* Logo, judul masuk, dan form login */}
          <div className="flex items-center mb-20">
            <Image
              src="/flowerpath-logo.png"
              alt="Logo"
              width={50}  // Sesuaikan lebar logo dengan kebutuhan desain Anda
              height={50} // Sesuaikan tinggi logo dengan kebutuhan desain Anda
            />
            <h2 className="ml-2">Masuk</h2>
          </div>
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" className="w-full border border-solid border-gray-300 p-2 mb-2" />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" className="w-full border border-solid border-gray-300 p-2 mb-4" />

            {/* Tombol untuk login */}
            <Link href="/dashboard" passHref>
              <button type="submit" className="bg-B6503C text-white rounded-full py-2 px-6 cursor-pointer">
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
