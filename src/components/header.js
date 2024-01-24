'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Button from './button';

const links = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'about',
    href: '/about',
  },
  {
    name: 'use cases',
    href: '/usecases',
  },
  {
    name: 'docs',
    href: '/docs',
  },
  // Ajoutez d'autres liens au besoin
];

export default function Header() {
  const pathname = usePathname();
  console.log(pathname)

  return (
    <header className="flex items-center justify-between px-8 py-8 ">
      <div>
        <Link href="/" >
          <div className="flex items-center justify-between">
            <div className="mr-3 text-primary">
              Synapse
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 sm:space-x-6">
        {links.filter((link) => link.href !== '/').map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'hidden sm:block font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'text-blue-600': pathname === link.href,
              },
            )}
          >
            {link.name}
          </Link>
        ))}
          <Button buttonText="Get Started"/>
      </div>


    </header>

  );
}


