"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-dark shadow-sm text-white">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/images/logo.svg" 
              alt="Attract By Pursuit" 
              width={36} 
              height={36} 
            />
            <span className="text-2xl font-bold text-primary">Attract By Pursuit</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium text-gray-300 hover:text-primary">
              Home
            </Link>
            <Link href="#features" className="font-medium text-gray-300 hover:text-primary">
              Features
            </Link>
            <Link href="/privacy-policy" className="font-medium text-gray-300 hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="font-medium text-gray-300 hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#contact" className="btn-primary">
              Download
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <Link href="/" className="block font-medium text-gray-300 hover:text-primary">
              Home
            </Link>
            <Link href="#features" className="block font-medium text-gray-300 hover:text-primary">
              Features
            </Link>
            <Link href="/privacy-policy" className="block font-medium text-gray-300 hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="block font-medium text-gray-300 hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#contact" className="block btn-primary text-center">
              Download
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 