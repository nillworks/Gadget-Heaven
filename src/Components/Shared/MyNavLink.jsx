'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MyNavLink = ({ hrefPath, children }) => {
  const pathName = usePathname();

  return (
    <nav>
      <Link
        href={hrefPath}
        className={`pb-1 font-semibold ${pathName === hrefPath ? 'border-b border-white' : ''}`}
      >
        {children}
      </Link>
    </nav>
  );
};

export default MyNavLink;
