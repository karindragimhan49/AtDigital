"use client"; // State පාවිච්චි කරන නිසා මේක අනිවාර්යයි!

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  // Mobile menu එක open ද close ද කියලා බලාගන්න state එකක්
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#4f46e5] relative"> {/* 'relative' class එක අලුතින් එකතු කළා */}
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

          {/* Desktop Menu (ලොකු screen වලට විතරයි) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/services" className="text-white uppercase font-semibold text-sm tracking-wider hover:text-gray-200 px-3 py-2">
                Services
              </Link>
              <Link href="/about" className="text-white uppercase font-semibold text-sm tracking-wider hover:text-gray-200 px-3 py-2">
                About Us
              </Link>
              <Link href="/contact" className="text-white uppercase font-semibold text-sm tracking-wider hover:text-gray-200 px-3 py-2">
                Contact Us
              </Link>
              <Link href="/careers" className="text-white uppercase font-semibold text-sm tracking-wider hover:text-gray-200 px-3 py-2">
                Careers
              </Link>
            </div>
          </div>

          {/* Hamburger Menu Button (පොඩි screen වලට විතරයි) */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Button එක click කරාම state එක toggle වෙනවා
              type="button"
              className="bg-indigo-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-600 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon එක */}
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (isMenuOpen true නම් විතරයි පේන්නේ) */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <Link href="/services" className="text-white hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium uppercase">
              Services
            </Link>
            <Link href="/about" className="text-white hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium uppercase">
              About Us
            </Link>
            <Link href="/contact" className="text-white hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium uppercase">
              Contact Us
            </Link>
            <Link href="/careers" className="text-white hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium uppercase">
              Careers
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;