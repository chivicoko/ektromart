import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { NavbarProps } from '@/utils/types';

const Navbar: React.FC<NavbarProps> = ({ firstDivClasses, secondDivClasses }) => {

  return (    
    <nav className={`z-30 ${firstDivClasses}`}>
      <div className={secondDivClasses}>

        <Link href="/" className="flex items-center space-x-2">
          <span className="relative w-8 h-8">
            <Image
              src="/images/logo.png"
              alt="EktroMart Store's Logo"
              fill
              style={{ objectFit: 'cover' }}
              sizes="100%"
            />
          </span>
          <span className="text-white text-xl md:text-2xl font-bold md:flex items-center">
            EktroMart Store
          </span>
        </Link>

        <Link href='/extras' className="block bg-btn hover:bg-btn-hover rounded-md text-white text-sm md:text-base py-2 md:py-[11px] px-3 md:px-[27px] hover:cursor-pointer shadow-md">
          Extras
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
