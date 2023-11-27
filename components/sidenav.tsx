import Link from 'next/link';
import NavLinks from '@/components/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { logout } from '@/app/login/action/actions';
import { logout } from '@/app/login/action/actions';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-1 py-4 md:px-2">
      <Link href="/" passHref>
        <div className="mb-4 flex h-20 items-center justify-center rounded-md p-4 md:h-40">
          <div className="flex items-center"> {/* Menggunakan flex untuk centering */}
            <Image src="/flowerpath-logo.png" alt="logo" width={100} height={25} className="mr-4" /> {/* Menambahkan margin kanan sebesar 4 */}
          <div className="flex items-center"> {/* Menggunakan flex untuk centering */}
            <Image src="/flowerpath-logo.png" alt="logo" width={100} height={25} className="mr-4" /> {/* Menambahkan margin kanan sebesar 4 */}
          </div>
        </div>
      </Link>
      <div className="flex-grow flex flex-col justify-center sm:justify-between space-y-4 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            'use server'
            await logout();
          }}
        >
          <button className="flex h-[48px] grow gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-pink-600 md:flex-none md:justify-start md:p-2 md:px-3 w-full items-center justify-center">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}