"use client";

import Image from 'next/image';

const SimpleFooter = () => {
  return (
    <footer className="bg-dark text-white border-t border-gray-800">
      <div className="container-custom py-6">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center mb-3">
            <Image 
              src="/images/logo-abp.png" 
              alt="Attract By Pursuit" 
              width={32} 
              height={32} 
              className="mr-2"
            />
            <h3 className="text-lg font-bold text-primary">Attract By Pursuit</h3>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Attract By Pursuit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter; 