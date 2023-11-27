import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { inter } from '@/app/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6" style={{ backgroundImage: 'url(/bg2.png)', backgroundSize: 'cover' }}>
      <div className="flex justify-center items-center h-40 p-4 rounded-20">
      </div>
      <div className="flex items-center bg-gray-400 p-10 m-1 mt-[-20px] flex-col bg-opacity-70 rounded-20">
  <Image
    src="/flowerpath-logo.png"
    width={200}
    height={50}
    alt="logo"
  />
  <div className=" p-8 rounded-lg bg-opacity-80 rounded-20">
    <p className="text-center text-orange-800 text-5xl font-bold font-inter"style={{ fontFamily: 'cursive' }}>Welcome to FlowerPath</p>
  </div>
  <div className="flex items-center justify-center mt-4">
        <Link
          href="/login"
          className="mx-auto flex items-center justify-center gap-5 self-start rounded-lg bg-green-600 px-6 py-5 text-sm font-medium text-white transition-colors hover:bg-green-500 md:text-base"
        >
          <span>Menuju Halaman Login</span>
        </Link>
      </div>
</div>

      <div className="mt-5 flex flex-col gap-4 md:flex-row justify-center items-center p-5">
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Konten untuk bagian ini */}
        </div>
      </div>
    </main>
  );
}