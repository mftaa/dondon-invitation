"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-serif text-2xl font-bold text-primary">
              Dondon Invitation
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="#katalog" className="text-text-primary hover:text-primary transition-colors font-medium">
              Katalog
            </Link>
            <Link href="#calculator" className="text-text-primary hover:text-primary transition-colors font-medium">
              Kalkulator Harga
            </Link>
            <Link href="#cara-pesan" className="text-text-primary hover:text-primary transition-colors font-medium">
              Cara Pesan
            </Link>
            <Link href="#lokasi" className="text-text-primary hover:text-primary transition-colors font-medium">
              Lokasi
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a 
              href="https://wa.me/6287777479033" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-md"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-primary hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="#katalog" 
              className="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Katalog
            </Link>
            <Link 
              href="#calculator" 
              className="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Kalkulator Harga
            </Link>
            <Link 
              href="#cara-pesan" 
              className="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Cara Pesan
            </Link>
            <a 
              href="https://wa.me/6287777479033"
              className="block w-full text-center mt-4 bg-primary text-white px-5 py-3 rounded-lg font-medium"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
