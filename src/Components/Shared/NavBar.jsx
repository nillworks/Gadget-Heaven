import MyNavLink from './MyNavLink';
import { LucideShoppingCart, Heart } from 'lucide-react';
import { LucideHeart } from 'lucide-react';

const navItems = [
  {
    path: '/',
    text: 'Home',
  },
  {
    path: '/statistics',
    text: 'Statistics',
  },
  {
    path: '/dashboard',
    text: 'Dashboard',
  },
];

const NavBar = () => {
  const li = navItems.map((item, i) => (
    <MyNavLink key={i} hrefPath={item.path}>
      {item.text}
    </MyNavLink>
  ));
  return (
    <div className="pt-4">
      <div className="containers mx-auto bg-primaryColor text-white rounded-t-lg">
        <nav className="flex items-center justify-between py-4 px-3 ">
          {/* logo */}
          <div>
            <h2 className="text-2xl font-bold">Gadget Heaven</h2>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex">
            <ul className="flex items-center gap-5">{li}</ul>
          </div>

          {/* Right Side Icons Shop */}
          <div className="flex items-center gap-4">
            <div className="p-1 rounded-full bg-white">
              {/* <ShoppingCart color="black" /> */}
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
