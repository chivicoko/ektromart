"use client";

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import useScrollVisibility from '@/hooks/useScrollVisibility';
import React from 'react';
import type { ReactNode } from 'react';

interface ExtrasLayoutProps {
  children: ReactNode;
}

const ExtrasLayout: React.FC<ExtrasLayoutProps> = ({ children }) => {
  const isVisible = useScrollVisibility(85);

  return (
    <>
      <Navbar firstDivClasses={`transition-all duration-300 ease-in-out transition-bg duration-0  ${isVisible ? "sticky top-0 left-0 right-0 z-50" : "p-2 pt-3 md:p-6 text-white bg-[#e3c8acc7]"} pb-6`} secondDivClasses={`transition-all duration-300 ease-in-out flex items-center justify-between ${isVisible ? "p-4 sticky top-0 left-0 right-0 z-50 bg-theme md:py-4 md:px-16 shadow-md" : "md:p-4 rounded-md md:rounded-lg px-4 py-3 bg-theme"}`}/>
      <main className="bg-white">
        {children}
        <Footer/>
      </main>
    </>
  );
};

export default ExtrasLayout;
