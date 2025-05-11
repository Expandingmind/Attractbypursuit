"use client";

import Image from 'next/image';

const LegalFooter = () => {
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
};

export default LegalFooter; 