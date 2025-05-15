 'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <div className="w-10 h-8 relative">
                <div className="absolute w-3 h-8 bg-blue-600 rounded-sm left-0"></div>
                <div className="absolute w-3 h-8 bg-blue-500 rounded-sm left-3"></div>
                <div className="absolute w-3 h-8 bg-blue-400 rounded-sm left-6"></div>
              </div>
              <span className="text-black font-bold text-xl ml-2"> *Business </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/project" className="text-[18px] font-medium text-black hover:text-blue-600">
              Business
          </Link>
          <Link href="/about" className="text-[18px] font-medium text-gray-500 hover:text-blue-600">
            About
          </Link>
          <Link href="/service" className="text-[18px] font-medium text-gray-500 hover:text-blue-600">
            Service
          </Link>
          <Link href="/career" className="text-[18px] font-medium text-gray-500 hover:text-blue-600">
            Career
          </Link>
        </div>

        {/* Auth Buttons on Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/signin" className="font-medium text-gray-800 hover:text-blue-600">
            Sign in
          </Link>
          <Link href="/signup" className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
            Sign Up
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4 px-2 pb-3">
            <Link href="/project" className="block px-3 py-2 text-base font-medium text-black hover:text-blue-600 hover:bg-gray-50 rounded-md">
              Business
            </Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-blue-600 hover:bg-gray-50 rounded-md">
              About
            </Link>
            <Link href="/service" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-blue-600 hover:bg-gray-50 rounded-md">
              Service
            </Link>
            <Link href="/career" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-blue-600 hover:bg-gray-50 rounded-md">
              Career
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Link href="/signin" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                Sign in
              </Link>
              <Link href="/signup" className="block bg-blue-600 text-white px-3 py-2 text-base font-medium rounded-full text-center hover:bg-blue-700 transition-colors">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
 
