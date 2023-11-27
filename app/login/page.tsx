import React from 'react';
import Image from 'next/image';
import LoginForm from '@/components/loginform';
import { readUserSession } from '@/lib/action/actions';
import { redirect } from 'next/navigation';

export default async function Page() {
  const { data: userSession } = await readUserSession();
  if(!userSession) redirect('/login');

  if (userSession.session?.user.user_metadata.role === "admin") {
    redirect('/dashboard');
  } else if (userSession.session?.user.user_metadata.role === "kurir") {
    redirect('/kurir');
  }
  return (
    <div className="bg-cream-50">
    <div className="justify-center w-full flex">
  <div className="flex flex-col pt-24 p-20 rounded-15 w-full lg:w-1/2 h-screen">
    {/* Logo, judul masuk, dan form login */}
    <div className="border-1 border-black p-12 bg-gray-50 rounded-xl">
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/flowerpath-logo.png"
        alt="Logo"
        width={150} // Sesuaikan lebar logo dengan kebutuhan desain Anda
        height={150} // Sesuaikan tinggi logo dengan kebutuhan desain Anda
        className="self-center"
      />
      <h2 className="text-center font-bold text-orange-700 text-xl hover:bg-pink-400">Masuk</h2>
    </div>
    <LoginForm />
    </div>
  </div>
  </div>
  </div>
  );
};
