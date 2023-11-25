import React from 'react';
import Image from 'next/image';
import LoginForm from '@/components/loginform';
import { readUserSession } from '@/lib/action/actions';
import { redirect } from 'next/navigation';

export default async function Page() {
  const { data } = await readUserSession();
  if(data.session) {
    return redirect('/dashboard');
  }
  return (
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
        <LoginForm />
      </div>
    </div>
  );
};
