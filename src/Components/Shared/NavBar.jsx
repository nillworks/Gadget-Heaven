'use client';

import MyNavLink from './MyNavLink';
import { LucideShoppingCart, LucideHeart } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navItems = [
  { path: '/', text: 'Home' },
  { path: '/statistics', text: 'Statistics' },
  { path: '/dashboard', text: 'Dashboard' },
];

const NavBar = () => {
  const pathname = usePathname();

  const isHome = pathname === '/';

  const li = navItems.map((item, i) => (
    <MyNavLink key={i} hrefPath={item.path}>
      {item.text}
    </MyNavLink>
  ));

  return (
    <div className="pt-4">
      <div
        className={`containers mx-auto 
        ${isHome ? 'bg-primaryColor text-white rounded-t-lg' : ' text-black'}`}
      >
        <nav className="flex items-center justify-between py-4 px-3">
          {/* logo */}
          <h2 className="text-2xl font-bold">Gadget Heaven</h2>

          {/* Navigation */}
          <div className="hidden md:flex">
            <ul className="flex items-center gap-5">{li}</ul>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <div className="p-1 rounded-full bg-white">
              <LucideShoppingCart color="black" />
            </div>
            <div className="p-1 rounded-full bg-white">
              <LucideHeart color="black" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
