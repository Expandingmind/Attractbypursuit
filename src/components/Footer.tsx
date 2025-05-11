"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const isLegalPage = pathname === '/privacy-policy' || pathname === '/terms-of-service';

  // Simple footer for legal pages
  if (isLegalPage) {
    return (
      <footer className="bg-dark text-white border-t border-gray-800">
        <div className="container-custom py-5">
          <div className="flex items-center justify-center">
            <Image 
              src="/images/logo-abp.png" 
              alt="Attract By Pursuit" 
              width={28} 
              height={28} 
              className="mr-2"
            />
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Attract By Pursuit. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  // Simplified footer for main site pages (following SnapOut layout)
  return (
    <footer className="bg-dark text-white border-t border-gray-800">
      <div className="container-custom py-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Left column - Logo and tagline */}
          <div className="md:max-w-xs">
            <div className="flex items-center mb-5">
              <Image 
                src="/images/logo-abp.png" 
                alt="Attract By Pursuit" 
                width={44} 
                height={44} 
                className="mr-3"
              />
              <h3 className="text-xl font-bold text-primary">Attract By Pursuit</h3>
            </div>
            <p className="text-gray-300 mb-2">
              Create Your Luck
            </p>
            <p className="text-gray-300">
              Track your finances, habits, tasks, and goals all in one place.
            </p>
          </div>
          
          {/* Right column - Legal links */}
          <div className="md:mt-8">
            <h4 className="text-lg font-semibold mb-4 text-primary">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="nav-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="nav-link">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Attract By Pursuit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 