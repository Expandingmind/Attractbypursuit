import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-deep-blue text-white">
      {/* Header Navigation */}
      <header className="fixed w-full z-50 bg-deep-blue/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <Image 
              src="/images/logo-abp.png" 
              alt="Attract By Pursuit" 
              width={44} 
              height={44}
              className="group-hover:scale-110 transition-transform duration-300" 
            />
            <span className="text-2xl font-bold text-white">Attract By Pursuit</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium text-white hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#features" className="font-medium text-white hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#screenshots" className="font-medium text-white hover:text-primary transition-colors">
              Screenshots
            </Link>
            <Link href="#testimonials" className="font-medium text-white hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#download" className="bg-gradient-to-r from-purple-500 to-primary text-white font-medium py-2 px-6 rounded-lg hover:from-purple-600 hover:to-primary/90 transition-all duration-300">
              Download Now
            </Link>
          </nav>

          {/* Mobile menu button - Not implementing the full mobile menu for brevity */}
          <div className="md:hidden">
            <button
              className="text-white hover:text-primary focus:outline-none"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      {/* Hero Section with Gradient Background */}
      <section className="pt-24 bg-gradient-to-br from-deep-blue via-purple-900/40 to-deep-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 mt-12 md:mt-0">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Take Control of Your Financial Journey
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-primary my-8"></div>
            <p className="text-xl text-gray-300 mb-8">
              Attract By Pursuit is your personal companion to track finances, build better habits, and achieve your goals with powerful tools.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#download" className="bg-gradient-to-r from-purple-500 to-primary text-white font-medium py-3 px-8 rounded-lg hover:from-purple-600 hover:to-primary/90 transition-all duration-300 text-center">
                Download Now
              </Link>
              <Link href="#features" className="bg-transparent text-white font-medium py-3 px-8 rounded-lg border border-white hover:bg-white/10 transition-all duration-300 text-center">
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] border-[8px] border-gray-800 shadow-2xl overflow-hidden">
              <Image 
                src="/images/screenshots/login-screen.png" 
                alt="Attract By Pursuit Login Screen" 
                width={300} 
                height={600}
                className="w-full h-full object-cover rounded-[32px]"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="bg-deep-blue py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-2">Powerful Features</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to take control of your financial life and build better habits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-deep-blue/50 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <div className="text-primary text-4xl mb-6 bg-primary/10 p-4 rounded-2xl w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Net Worth</h3>
              <p className="text-gray-300">
                Track your assets and liabilities in one place. Get a comprehensive view of your financial health at a glance.
              </p>
            </div>
            
            <div className="bg-deep-blue/50 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <div className="text-primary text-4xl mb-6 bg-primary/10 p-4 rounded-2xl w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Bills & Expenses</h3>
              <p className="text-gray-300">
                Never miss a bill payment again. Keep track of recurring expenses and maintain better financial discipline.
              </p>
            </div>
            
            <div className="bg-deep-blue/50 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <div className="text-primary text-4xl mb-6 bg-primary/10 p-4 rounded-2xl w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Task Tracker</h3>
              <p className="text-gray-300">
                Stay organized with our intuitive task management system. View tasks in list or calendar format to plan your days effectively.
              </p>
            </div>
            
            <div className="bg-deep-blue/50 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <div className="text-primary text-4xl mb-6 bg-primary/10 p-4 rounded-2xl w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Habits & Goals</h3>
              <p className="text-gray-300">
                Build lasting habits and set achievable goals. Track your progress and stay motivated on your journey to success.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* App Screenshots Section */}
      <section id="screenshots" className="bg-deep-blue/80 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-2">App Screenshots</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-primary mx-auto mb-8"></div>
            <p className="text-gray-300 mb-8">See how Attract By Pursuit helps you track your finances and build better habits.</p>
          </div>
          
          <div className="flex flex-nowrap overflow-x-auto pb-8 gap-6 px-4 -mx-4 scrollbar-hide">
            <div className="flex-shrink-0 w-[280px]">
              <div className="bg-[#14141f] rounded-3xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/screenshots/login-screen.png" 
                  alt="Login Screen" 
                  width={280} 
                  height={560}
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="flex-shrink-0 w-[280px]">
              <div className="bg-[#14141f] rounded-3xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/screenshots/net-worth-summary.png" 
                  alt="Net Worth" 
                  width={280} 
                  height={560}
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="flex-shrink-0 w-[280px]">
              <div className="bg-[#14141f] rounded-3xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/screenshots/IMG_8652.PNG" 
                  alt="Bills & Expenses" 
                  width={280} 
                  height={560}
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="flex-shrink-0 w-[280px]">
              <div className="bg-[#14141f] rounded-3xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/screenshots/IMG_8655.PNG" 
                  alt="Habits & Goals" 
                  width={280} 
                  height={560}
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="flex-shrink-0 w-[280px]">
              <div className="bg-[#14141f] rounded-3xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/screenshots/IMG_8654.PNG" 
                  alt="Task Tracker" 
                  width={280} 
                  height={560}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="bg-deep-blue py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-2">What Our Users Say</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-deep-blue/50 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-primary flex items-center justify-center text-white mr-4">
                  MT
                </div>
                <div>
                  <h4 className="font-bold text-white">Michael T.</h4>
                  <p className="text-gray-400">App User - 6 Months</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Attract By Pursuit has completely transformed my finances. After years of struggling to budget, I'm finally able to track everything in one place!"
              </p>
            </div>
            
            <div className="bg-deep-blue/50 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-primary flex items-center justify-center text-white mr-4">
                  SK
                </div>
                <div>
                  <h4 className="font-bold text-white">Sarah K.</h4>
                  <p className="text-gray-400">App User - 3 Months</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The habit tracking and goal setting features have made all the difference. I've tried many apps but nothing worked like Attract By Pursuit."
              </p>
            </div>
            
            <div className="bg-deep-blue/50 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-primary flex items-center justify-center text-white mr-4">
                  JW
                </div>
                <div>
                  <h4 className="font-bold text-white">James Wilson</h4>
                  <p className="text-gray-400">Financial Advisor</p>
                </div>
              </div>
              <p className="text-gray-300">
                "As a financial advisor, I recommend Attract By Pursuit to my clients. The comprehensive tracking aligns perfectly with sound financial planning principles."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Download Section */}
      <section id="download" className="bg-gradient-to-br from-purple-900/40 via-deep-blue to-deep-blue py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-2">Ready to Take Control?</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Download Attract By Pursuit today on your iPhone and start your journey to financial freedom.
          </p>
          
          <div className="flex justify-center mb-16">
            <a href="#" className="bg-black text-white px-8 py-4 rounded-xl border border-gray-700 flex items-center justify-center hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg">
              <svg className="h-8 w-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.3,1.4C15.9,1.3 15.5,1.2 15.1,1.1C14.5,1 13.9,0.9 13.3,0.9C12.7,0.9 12.1,1 11.5,1.1C10.9,1.2 10.3,1.4 9.8,1.6C8.2,2.3 6.9,3.5 6.1,5C5.4,6.5 5.2,8.2 5.5,9.9C5.8,11.6 6.7,13.1 8,14.2C9.3,15.3 11,15.9 12.7,15.9C14.4,15.9 16.1,15.3 17.4,14.3C18.7,13.2 19.6,11.7 19.9,10C20.2,8.3 19.9,6.6 19.2,5.1C18.4,3.6 17.6,2.1 16.3,1.4Z" />
                <path d="M22,9.9C22,13.9 20.6,17.8 18.1,20.8C15.7,23.8 12.4,25.5 8.9,25.8C5.4,26.1 2,24.9 -0.5,22.6C-3,20.3 -4.4,17 -4.4,13.5C-4.4,10 -3,6.7 -0.5,4.4C2,2.1 5.4,0.9 8.9,1.2C12.4,1.5 15.7,3.2 18.1,6.2C20.6,9.2 22,13.1 22,17.1V9.9Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-xl font-semibold">App Store</div>
              </div>
            </a>
          </div>
        </div>
      </section>
      
      {/* Simple Footer */}
      <footer className="bg-deep-blue border-t border-gray-800 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-8 md:mb-0">
              <Image 
                src="/images/logo-abp.png" 
                alt="Attract By Pursuit" 
                width={44} 
                height={44} 
                className="mr-3"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Attract By Pursuit</h3>
                <p className="text-gray-400 text-sm">Create Your Luck</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-12">
              <h4 className="text-xl font-bold text-white text-center md:text-left">Legal</h4>
              <div className="flex space-x-6">
                <Link href="/privacy-policy" className="text-gray-300 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-8 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Attract By Pursuit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 