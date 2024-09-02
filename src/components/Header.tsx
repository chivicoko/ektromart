"use client";

import Image from 'next/image';
import Navbar from './navbar/Navbar';
import useScrollVisibility from '@/hooks/useScrollVisibility';

const Header = () => {
  const isVisible = useScrollVisibility(85);

  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('productsContent');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar firstDivClasses={`transition-all duration-300 ease-in-out ${isVisible ? "sticky top-0 left-0 right-0 z-50" : "p-2 pt-3 md:p-6 text-white bg-[#f4c18ec7]"} pb-6`} secondDivClasses={`transition-all duration-300 ease-in-out flex items-center justify-between ${isVisible ? "p-4 sticky top-0 left-0 right-0 z-50 bg-theme md:py-4 md:px-16 shadow-md" : "md:p-4 rounded-md md:rounded-lg px-4 py-3 bg-theme"}`}/>
      <header className="text-white bg-gradient-to-t from-white via-[#f4ca8cd6] to-[#f4c18ec7] xl:h-70vh mb-14 p-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="text flex-1 self-start pl-4 md:pl-20 text-gray-950">
          <h2 className='text-4xl md:text-5xl font-semibold xl:font-bold mt-4 md:mt-16 mb-2 md:mb-4'>Welcome to EktroMart</h2>
          <p className='text-lg md:text-3xl'>Easily get your best varieties here. <br /> <em>Made just for you!</em></p>
          <button onClick={handleScroll} className='bg-btn hover:bg-btn-hover mt-4 md:mt-8 mb-4 rounded-md text-white py-[11px] px-[27px] hover:cursor-pointer shadow-md'>
            Shop Now
          </button>
        </div>
        <div className="images flex-1 flex">
          <div className="md:hidden lg:block relative w-[200px] h-[400px] mb-4 img1">
            <Image
              src='/images/Apple iPhone 14.png'
              alt="Apple iPhone 14 preview image"
              fill
              className="object-cover rotate-12"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="hidden md:block relative w-[200px] h-[400px] md:w-[500px] md:h-[600px] lg:w-[200px] lg:h-[400px] mb-4 img2">
            <Image
              src='/images/headset.png'
              alt="headset preview image"
              fill
              className="object-cover rotate-12"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="hidden xl:block relative w-[200px] h-[400px] mb-4 img3">
            <Image
              src='/images/mic.png'
              alt="headset preview image"
              fill
              className="object-cover rotate-12"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
