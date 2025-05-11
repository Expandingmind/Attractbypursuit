"use client";

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-dark text-white border-t border-gray-800">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image 
                src="/images/logo.svg" 
                alt="Attract By Pursuit" 
                width={40} 
                height={40} 
                className="mr-3"
              />
              <h3 className="text-xl font-bold text-primary">Attract By Pursuit</h3>
            </div>
            <p className="text-gray-300 mb-2 italic">Create Your Luck</p>
            <p className="text-gray-300 mb-4">
              Track your finances, habits, tasks, and goals all in one place.
            </p>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-gray-300 hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#screenshots" className="text-gray-300 hover:text-primary transition-colors">
                    Screenshots
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-300 hover:text-primary transition-colors">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Features</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-gray-300 hover:text-primary transition-colors">
                    Net Worth
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-gray-300 hover:text-primary transition-colors">
                    Bills & Expenses
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-gray-300 hover:text-primary transition-colors">
                    Task Tracker
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-gray-300 hover:text-primary transition-colors">
                    Habits & Goals
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-gray-300 hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-gray-300 hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Download</h4>
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.3,1.4C15.9,1.3 15.5,1.2 15.1,1.1C14.5,1 13.9,0.9 13.3,0.9C12.7,0.9 12.1,1 11.5,1.1C10.9,1.2 10.3,1.4 9.8,1.6C8.2,2.3 6.9,3.5 6.1,5C5.4,6.5 5.2,8.2 5.5,9.9C5.8,11.6 6.7,13.1 8,14.2C9.3,15.3 11,15.9 12.7,15.9C14.4,15.9 16.1,15.3 17.4,14.3C18.7,13.2 19.6,11.7 19.9,10C20.2,8.3 19.9,6.6 19.2,5.1C18.4,3.6 17.6,2.1 16.3,1.4Z" />
                  <path d="M22,9.9C22,13.9 20.6,17.8 18.1,20.8C15.7,23.8 12.4,25.5 8.9,25.8C5.4,26.1 2,24.9 -0.5,22.6C-3,20.3 -4.4,17 -4.4,13.5C-4.4,10 -3,6.7 -0.5,4.4C2,2.1 5.4,0.9 8.9,1.2C12.4,1.5 15.7,3.2 18.1,6.2C20.6,9.2 22,13.1 22,17.1V9.9Z" />
                </svg>
                App Store
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.9 3.25,2.3 3.7,1.8C4.15,1.3 4.8,1 5.5,1H18.5C19.2,1 19.85,1.3 20.3,1.8C20.75,2.3 21,2.9 21,3.5V20.5C21,21.1 20.75,21.7 20.3,22.2C19.85,22.7 19.2,23 18.5,23H5.5C4.8,23 4.15,22.7 3.7,22.2C3.25,21.7 3,21.1 3,20.5Z" />
                  <path d="M15,5.5L12,2L9,5.5M9,18.5L12,22L15,18.5" />
                </svg>
                Google Play
              </a>
              <Link 
                href="#download" 
                className="bg-primary text-white font-medium py-2 px-4 rounded-lg mt-2 hover:bg-opacity-90 transition-colors inline-block text-center"
              >
                Download Now
              </Link>
            </div>
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