"use client";

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Attract By Pursuit</h3>
            <p className="text-gray-300 mb-4">
              Track your personal finances, habits, and more to achieve your goals and live a better life.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22,12.07C22,6.53,17.47,2,12,2S2,6.53,2,12.07C2,17.46,5.99,21.93,11.05,22v-7.73H8.31v-2.2h2.74v-1.68c0-2.7,1.62-4.19,4.07-4.19c1.18,0,2.42,0.21,2.42,0.21v2.64h-1.36c-1.34,0-1.76,0.83-1.76,1.68v2.02h3l-0.48,2.2h-2.52V22C18.01,21.93,22,17.46,22,12.07z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23,6.62a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,5.19a4.16,4.16,0,0,0-.55,2.07,4.09,4.09,0,0,0,1.82,3.41,4.05,4.05,0,0,1-1.86-.51v.05a4.1,4.1,0,0,0,3.3,4,4.05,4.05,0,0,1-1.09.14,4.41,4.41,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.85A8.22,8.22,0,0,1,1,19.06a11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,19,8.21c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,21,5.71Z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10,0,0,0,2,12a10,10,0,0,0,7,9.5V14H8v-2h1V9.87C9,8.56,9.93,7,12.08,7H14v2H13c-.55,0-1,.45-1,1v2h2v2H12v7.5A10,10,0,0,0,22,12,10,10,0,0,0,12,2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Attract By Pursuit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 