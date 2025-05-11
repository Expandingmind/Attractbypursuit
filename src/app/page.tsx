import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-dark text-white">
        <div className="container-custom section flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="heading-xl mb-6 leading-tight">
              Take Control of Your Financial Journey
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Attract By Pursuit is your personal companion to track finances, build better habits, and achieve your goals with powerful tools.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#download" className="btn-primary">
                Download Now
              </Link>
              <Link href="#features" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative flex justify-center">
            <div className="relative w-[280px] h-[580px] bg-black rounded-[40px] border-4 border-gray-800 shadow-2xl overflow-hidden">
              <Image 
                src="/images/app-mockup.png" 
                alt="App Screenshot" 
                width={280} 
                height={580}
                className="w-full rounded-[32px]"
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-[32px] shadow-inner"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="bg-dark">
        <div className="container-custom section">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4 text-primary">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to take control of your financial life and build better habits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-md mb-2 text-primary">Net Worth</h3>
              <p className="text-gray-300">
                Track your assets and liabilities in one place. Get a comprehensive view of your financial health at a glance.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2" />
                </svg>
              </div>
              <h3 className="heading-md mb-2 text-primary">Bills & Expenses</h3>
              <p className="text-gray-300">
                Never miss a bill payment again. Keep track of recurring expenses and maintain better financial discipline.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="heading-md mb-2 text-primary">Task Tracker</h3>
              <p className="text-gray-300">
                Stay organized with our intuitive task management system. View tasks in list or calendar format to plan your days effectively.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="heading-md mb-2 text-primary">Habits & Goals</h3>
              <p className="text-gray-300">
                Build lasting habits and set achievable goals. Track your progress and stay motivated on your journey to success.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* App Screenshots Section */}
      <section id="screenshots" className="bg-dark">
        <div className="container-custom section">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4 text-primary">App Screenshots</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how Attract By Pursuit helps you track every aspect of your financial journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="screenshot-card">
              <Image 
                src="/images/net-worth.png" 
                alt="Net Worth Tracking" 
                width={300} 
                height={600}
                className="w-full" 
              />
            </div>
            
            <div className="screenshot-card">
              <Image 
                src="/images/bills.png" 
                alt="Bills & Expenses" 
                width={300} 
                height={600}
                className="w-full" 
              />
            </div>
            
            <div className="screenshot-card">
              <Image 
                src="/images/habits.png" 
                alt="Habits & Goals" 
                width={300} 
                height={600}
                className="w-full" 
              />
            </div>
            
            <div className="screenshot-card">
              <Image 
                src="/images/tasks.png" 
                alt="Task Tracker" 
                width={300} 
                height={600}
                className="w-full" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="bg-dark">
        <div className="container-custom section">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4 text-primary">What Our Users Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Thousands of people are already improving their finances with Attract By Pursuit
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center text-primary mr-4">
                  MT
                </div>
                <div>
                  <h4 className="font-bold text-primary">Michael T.</h4>
                  <p className="text-gray-400">App User - 6 Months</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Attract By Pursuit has completely transformed my finances. After years of struggling to budget, I'm finally able to track everything in one place!"
              </p>
            </div>
            
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center text-primary mr-4">
                  SK
                </div>
                <div>
                  <h4 className="font-bold text-primary">Sarah K.</h4>
                  <p className="text-gray-400">App User - 3 Months</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The habit tracking and goal setting features have made all the difference. I've tried many apps but nothing worked like Attract By Pursuit."
              </p>
            </div>
            
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center text-primary mr-4">
                  JW
                </div>
                <div>
                  <h4 className="font-bold text-primary">James Wilson</h4>
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
      <section id="download" className="bg-dark">
        <div className="container-custom section">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-4 text-primary">Ready to Take Control?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Download Attract By Pursuit today on your iPhone or Android device and start your journey to financial freedom.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
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
              <a href="#" className="bg-black text-white px-8 py-4 rounded-xl border border-gray-700 flex items-center justify-center hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg">
                <svg className="h-8 w-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.9 3.25,2.3 3.7,1.8C4.15,1.3 4.8,1 5.5,1H18.5C19.2,1 19.85,1.3 20.3,1.8C20.75,2.3 21,2.9 21,3.5V20.5C21,21.1 20.75,21.7 20.3,22.2C19.85,22.7 19.2,23 18.5,23H5.5C4.8,23 4.15,22.7 3.7,22.2C3.25,21.7 3,21.1 3,20.5Z" />
                  <path d="M15,5.5L12,2L9,5.5M9,18.5L12,22L15,18.5" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-xl font-semibold">Google Play</div>
                </div>
              </a>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-6 text-primary">Get in Touch</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-gray-700 bg-gray-800 rounded-lg focus:ring-primary focus:border-primary text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-700 bg-gray-800 rounded-lg focus:ring-primary focus:border-primary text-white"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 border border-gray-700 bg-gray-800 rounded-lg focus:ring-primary focus:border-primary text-white"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-300 font-medium shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 