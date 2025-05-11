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
            <Link href="#download" className="btn-primary">
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
      <section className="pt-24 bg-gradient-to-br from-deep-blue via-deep-purple to-deep-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 mt-12 md:mt-0">
            <h1 className="heading-xl mb-6 leading-tight fade-in">
              Take Control of Your <span className="gradient-text">Financial Journey</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-glow to-primary my-8 fade-in-delay-1"></div>
            <p className="text-xl text-gray-300 mb-8 fade-in-delay-1">
              Attract By Pursuit is your personal companion to track finances, build better habits, and achieve your goals with powerful tools.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 fade-in-delay-2">
              <Link href="#download" className="download-button-hero">
                Download Now
              </Link>
              <Link href="#features" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end fade-in-delay-3">
            <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] border-[8px] border-gray-800 shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-700">
              <Image 
                src="/images/screenshots/login-screen.png" 
                alt="Attract By Pursuit Login Screen" 
                width={300} 
                height={600}
                className="w-full h-full object-cover rounded-[32px]"
              />
              <div className="absolute inset-0 rounded-[32px] shadow-inner bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="bg-deep-blue py-24 relative">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-2 text-shadow">Powerful Features</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-glow to-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to take control of your financial life and build better habits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card group">
              <div className="text-5xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                💰
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">Net Worth</h3>
              <p className="text-gray-300">
                Track your assets and liabilities in one place. Get a comprehensive view of your financial health at a glance.
              </p>
            </div>
            
            <div className="feature-card group">
              <div className="text-5xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                💵
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">Bills & Expenses</h3>
              <p className="text-gray-300">
                Never miss a bill payment again. Keep track of recurring expenses and maintain better financial discipline.
              </p>
            </div>
            
            <div className="feature-card group">
              <div className="text-5xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                ✅
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">Task Tracker</h3>
              <p className="text-gray-300">
                Stay organized with our intuitive task management system. View tasks in list or calendar format to plan your days effectively.
              </p>
            </div>
            
            <div className="feature-card group">
              <div className="text-5xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">Habits & Goals</h3>
              <p className="text-gray-300">
                Build lasting habits and set achievable goals. Track your progress and stay motivated on your journey to success.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* App Screenshots Section */}
      <section id="screenshots" className="bg-deep-blue/90 py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/0 via-deep-purple/5 to-deep-blue/0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-2 text-shadow">App Screenshots</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-glow to-primary mx-auto mb-8"></div>
            <p className="text-gray-300 mb-8">See how Attract By Pursuit helps you track your finances and build better habits.</p>
          </div>
          
          <div className="flex flex-nowrap overflow-x-auto pb-8 gap-6 px-4 -mx-4 scrollbar-hide">
            <div className="flex-shrink-0 w-[250px] transform hover:scale-[1.02] transition-all duration-500">
              <div className="screenshot-glow bg-[#14141f] rounded-3xl shadow-xl h-[540px] flex items-center justify-center p-2 overflow-visible">
                <div className="relative h-[520px] w-full overflow-visible">
                  <Image 
                    src="/images/screenshots/login-screen.png" 
                    alt="Account Overview" 
                    fill
                    sizes="250px"
                    style={{ 
                      objectFit: 'contain', 
                      objectPosition: 'center',
                      maxHeight: '100%',
                      maxWidth: '100%'
                    }}
                    priority
                  />
                </div>
              </div>
              <p className="text-center text-gray-400 mt-4 text-sm">Account Overview</p>
            </div>
            
            <div className="flex-shrink-0 w-[250px] transform hover:scale-[1.02] transition-all duration-500">
              <div className="screenshot-glow bg-[#14141f] rounded-3xl shadow-xl h-[540px] flex items-center justify-center p-2 overflow-visible">
                <div className="relative h-[520px] w-full overflow-visible">
                  <Image 
                    src="/images/screenshots/net-worth-summary.png" 
                    alt="Net Worth Tracking" 
                    fill
                    sizes="250px"
                    style={{ 
                      objectFit: 'contain', 
                      objectPosition: 'center',
                      maxHeight: '100%',
                      maxWidth: '100%'
                    }}
                    priority
                  />
                </div>
              </div>
              <p className="text-center text-gray-400 mt-4 text-sm">Net Worth Tracking</p>
            </div>
            
            <div className="flex-shrink-0 w-[250px] transform hover:scale-[1.02] transition-all duration-500">
              <div className="screenshot-glow bg-[#14141f] rounded-3xl shadow-xl h-[540px] flex items-center justify-center p-2 overflow-visible">
                <div className="relative h-[520px] w-full overflow-visible">
                  <Image 
                    src="/images/screenshots/IMG_8652.PNG" 
                    alt="Bills & Expenses"
                    fill
                    sizes="250px"
                    style={{ 
                      objectFit: 'contain', 
                      objectPosition: 'center',
                      maxHeight: '100%',
                      maxWidth: '100%'
                    }}
                    priority
                  />
                </div>
              </div>
              <p className="text-center text-gray-400 mt-4 text-sm">Bills & Expenses</p>
            </div>
            
            <div className="flex-shrink-0 w-[250px] transform hover:scale-[1.02] transition-all duration-500">
              <div className="screenshot-glow bg-[#14141f] rounded-3xl shadow-xl h-[540px] flex items-center justify-center p-2 overflow-visible">
                <div className="relative h-[520px] w-full overflow-visible">
                  <Image 
                    src="/images/screenshots/IMG_8655.PNG" 
                    alt="Habits & Goals"
                    fill
                    sizes="250px"
                    style={{ 
                      objectFit: 'contain', 
                      objectPosition: 'center',
                      maxHeight: '100%',
                      maxWidth: '100%'
                    }}
                    priority
                  />
                </div>
              </div>
              <p className="text-center text-gray-400 mt-4 text-sm">Habits & Goal Tracking</p>
            </div>
            
            <div className="flex-shrink-0 w-[250px] transform hover:scale-[1.02] transition-all duration-500">
              <div className="screenshot-glow bg-[#14141f] rounded-3xl shadow-xl h-[540px] flex items-center justify-center p-2 overflow-visible">
                <div className="relative h-[520px] w-full overflow-visible">
                  <Image 
                    src="/images/screenshots/IMG_8654.PNG" 
                    alt="Task Management"
                    fill
                    sizes="250px"
                    style={{ 
                      objectFit: 'contain', 
                      objectPosition: 'center',
                      maxHeight: '100%',
                      maxWidth: '100%'
                    }}
                    priority
                  />
                </div>
              </div>
              <p className="text-center text-gray-400 mt-4 text-sm">Task Management</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="bg-deep-blue py-24 relative">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-2 text-shadow">What Our Users Say</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-glow to-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
              Thousands of people are already improving their finances with Attract By Pursuit
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-card group">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-glow to-primary flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-500">
                  MT
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-primary transition-colors duration-300">Michael T.</h4>
                  <p className="text-gray-400">App User - 6 Months</p>
                </div>
              </div>
              <p className="text-gray-300 relative">
                <span className="absolute -top-4 -left-2 text-4xl text-primary opacity-20">"</span>
                Attract By Pursuit has completely transformed my finances. After years of struggling to budget, I'm finally able to track everything in one place!
                <span className="absolute -bottom-4 -right-2 text-4xl text-primary opacity-20">"</span>
              </p>
            </div>
            
            <div className="testimonial-card group">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-glow to-primary flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-500">
                  SK
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-primary transition-colors duration-300">Sarah K.</h4>
                  <p className="text-gray-400">App User - 3 Months</p>
                </div>
              </div>
              <p className="text-gray-300 relative">
                <span className="absolute -top-4 -left-2 text-4xl text-primary opacity-20">"</span>
                The habit tracking and goal setting features have made all the difference. I've tried many apps but nothing worked like Attract By Pursuit.
                <span className="absolute -bottom-4 -right-2 text-4xl text-primary opacity-20">"</span>
              </p>
            </div>
            
            <div className="testimonial-card group">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-glow to-primary flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-500">
                  JW
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-primary transition-colors duration-300">James Wilson</h4>
                  <p className="text-gray-400">Financial Advisor</p>
                </div>
              </div>
              <p className="text-gray-300 relative">
                <span className="absolute -top-4 -left-2 text-4xl text-primary opacity-20">"</span>
                As a financial advisor, I recommend Attract By Pursuit to my clients. The comprehensive tracking aligns perfectly with sound financial planning principles.
                <span className="absolute -bottom-4 -right-2 text-4xl text-primary opacity-20">"</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Download Section */}
      <section id="download" className="bg-gradient-to-br from-deep-purple/40 via-deep-blue to-deep-blue py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold text-white mb-2 text-shadow">Ready to Take Control?</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-glow to-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Download Attract By Pursuit today on your iPhone and start your journey to financial freedom.
          </p>
          
          <div className="flex justify-center mb-16">
            <a href="#" className="download-button flex items-center justify-center gap-3 relative">
              <div className="mr-1 bg-white rounded-full p-1 transform group-hover:scale-110 transition-transform">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" color="black">
                  <path d="M16.3,1.4C15.9,1.3 15.5,1.2 15.1,1.1C14.5,1 13.9,0.9 13.3,0.9C12.7,0.9 12.1,1 11.5,1.1C10.9,1.2 10.3,1.4 9.8,1.6C8.2,2.3 6.9,3.5 6.1,5C5.4,6.5 5.2,8.2 5.5,9.9C5.8,11.6 6.7,13.1 8,14.2C9.3,15.3 11,15.9 12.7,15.9C14.4,15.9 16.1,15.3 17.4,14.3C18.7,13.2 19.6,11.7 19.9,10C20.2,8.3 19.9,6.6 19.2,5.1C18.4,3.6 17.6,2.1 16.3,1.4Z" />
                  <path d="M22,9.9C22,13.9 20.6,17.8 18.1,20.8C15.7,23.8 12.4,25.5 8.9,25.8C5.4,26.1 2,24.9 -0.5,22.6C-3,20.3 -4.4,17 -4.4,13.5C-4.4,10 -3,6.7 -0.5,4.4C2,2.1 5.4,0.9 8.9,1.2C12.4,1.5 15.7,3.2 18.1,6.2C20.6,9.2 22,13.1 22,17.1V9.9Z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs font-light opacity-80">Download on the</div>
                <div className="text-xl font-semibold">App Store</div>
              </div>
            </a>
          </div>

          <div className="glass-card max-w-lg mx-auto p-2 bg-white/5 mt-12 rounded-xl">
            <p className="text-gray-400 text-sm italic">
              "You can't manage what you can't measure"
            </p>
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