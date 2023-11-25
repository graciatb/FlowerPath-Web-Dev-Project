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
    <div className="flex h-screen">
  <div className="hidden sm:flex items-center justify-center w-1/2 h-screen">
    {/* Gambar pada sisi kiri */}
    <Image
      src="/login.png"
      alt="Login Image"
      style={{ margin: '-20px 0 0 0', padding: '0' }} // Namaikan logo dan sesuaikan margin
      width={150}
      height={150}
      className="w-full h-auto" // Add this line to make the image take up half of the width
    />
  </div>
  <div className="flex flex-col p-20 bg-white rounded-15 w-full sm:w-1/2 h-screen">
    {/* Logo, judul masuk, dan form login */}
    <div className="border-1 border-black p-4 bg-[#F0F0F0] rounded-xl">
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/flowerpath-logo.png"
        alt="Logo"
        width={150} // Sesuaikan lebar logo dengan kebutuhan desain Anda
        height={150} // Sesuaikan tinggi logo dengan kebutuhan desain Anda
        className="self-center"
      />
      <h2 className="text-center font-bold text-orange-700 text-xl">Masuk</h2>
    </div>
    <LoginForm />
    </div>
  </div>
</div>
  );
};
