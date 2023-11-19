'use client';

import {
  UserCircleIcon,
  Squares2X2Icon,
  TruckIcon,
  BellIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Dashboard', href: '/dashboard', icon: Squares2X2Icon },
  {
    name: 'Kelola Akun Kurir',
    href: '/dashboard/manage-courier-accounts',
    icon: UserCircleIcon,
  },
  { name: 'Pengiriman', href: '/dashboard/shipment', icon: TruckIcon },
  { name: 'Notifikasi', href: '/dashboard/notification', icon: BellIcon }
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium text-pink-600 hover:bg-green-400 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'text-pink-600 hover:bg-green-400 bg-green-400': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
