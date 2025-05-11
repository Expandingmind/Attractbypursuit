"use client";

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-12">
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
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">App Features</h4>
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
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contact</h4>
            <p className="text-gray-300 mb-2">
              Have questions about Attract By Pursuit?
            </p>
            <Link 
              href="#contact" 
              className="inline-block bg-primary text-white font-medium py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Contact Us
            </Link>
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