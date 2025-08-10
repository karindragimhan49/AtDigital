"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-[#4f46e5] relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo-white.png"
                alt="at digital logo"
                width={150}
                height={40}
              />
            </Link>
          </div>

         
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/services" className="text-white uppercase font-semibold text-sm tracking-wider hover:text-gray-200 px-3 py-2">Services</Link>
              <Link href="/about" className="text-white uppercase font-semibold text-sm tracking-wider hover:text-gray-200 px-3 py-2">About Us</Link>
              <Link href="/contact" className="text-white uppercase font-semibold text-sm tracking-wider hover:text-gray-200 px-3 py-2">Contact Us</Link>
              <Link href="/careers" className="text-white uppercase font-semibold text-sm tracking-wider hover:text-gray-200 px-3 py-2">Careers</Link>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)} 
              type="button"
              className="bg-indigo-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-600 focus:outline-none"
            >
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      
      <div 
        className={`fixed inset-0 bg-white z-50 p-6 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close (X) Button */}
        <div className="flex justify-end">
          <button onClick={closeMenu}>
            <svg className="h-8 w-8 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Sidebar Links */}
        <div className="flex flex-col items-center justify-center space-y-8 mt-16">
          <Link href="/services" onClick={closeMenu} className="text-slate-800 text-2xl font-semibold uppercase">Services</Link>
          <Link href="/about" onClick={closeMenu} className="text-slate-800 text-2xl font-semibold uppercase">About Us</Link>
          <Link href="/contact" onClick={closeMenu} className="text-slate-800 text-2xl font-semibold uppercase">Contact Us</Link>
          <Link href="/careers" onClick={closeMenu} className="text-slate-800 text-2xl font-semibold uppercase">Careers</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;