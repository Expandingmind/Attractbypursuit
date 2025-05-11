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
            <div className="mb-6 flex items-center">
              <Image 
                src="/images/logo.svg" 
                alt="Attract By Pursuit" 
                width={60} 
                height={60} 
                className="mr-4"
              />
              <h1 className="heading-xl">
                Attract By Pursuit
              </h1>
            </div>
            <p className="text-2xl mb-2 italic text-gray-400">Create Your Luck</p>
            <p className="text-lg mb-8 text-gray-300">
              Track your finances, habits, tasks, and goals all in one place. Take control of your financial journey and build better habits.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#features" className="btn-primary">
                See Features
              </Link>
              <Link href="#contact" className="bg-dark text-primary font-medium py-2 px-4 rounded-md border border-primary hover:bg-gray-900 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-black rounded-lg shadow-xl overflow-hidden border border-gray-800">
              <Image 
                src="/images/app-mockup.png" 
                alt="App Screenshot" 
                width={400} 
                height={800}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="bg-dark">
        <div className="container-custom section">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4 text-primary">"You can't manage what you can't measure"</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to take control of your financial life and build better habits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg shadow-md border border-gray-800 hover:border-primary transition-colors">
              <div className="text-primary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-md mb-2 text-primary">Net Worth</h3>
              <p className="text-gray-300">
                Track your assets and liabilities in one place. Get a comprehensive view of your financial health at a glance.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg shadow-md border border-gray-800 hover:border-primary transition-colors">
              <div className="text-primary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2" />
                </svg>
              </div>
              <h3 className="heading-md mb-2 text-primary">Bills & Expenses</h3>
              <p className="text-gray-300">
                Never miss a bill payment again. Keep track of recurring expenses and maintain better financial discipline.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg shadow-md border border-gray-800 hover:border-primary transition-colors">
              <div className="text-primary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="heading-md mb-2 text-primary">Task Tracker</h3>
              <p className="text-gray-300">
                Stay organized with our intuitive task management system. View tasks in list or calendar format to plan your days effectively.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg shadow-md border border-gray-800 hover:border-primary transition-colors">
              <div className="text-primary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <section id="app-preview" className="bg-dark bg-opacity-90">
        <div className="container-custom section">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4 text-primary">App Screenshots</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how Attract By Pursuit helps you track every aspect of your financial journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-black rounded-lg shadow-md overflow-hidden border border-gray-800 hover:border-primary transition-colors">
              <h3 className="text-lg font-bold p-4 text-primary">Net Worth Tracking</h3>
              <Image 
                src="/images/net-worth.png" 
                alt="Net Worth Tracking" 
                width={300} 
                height={600}
                className="w-full" 
              />
            </div>
            
            <div className="bg-black rounded-lg shadow-md overflow-hidden border border-gray-800 hover:border-primary transition-colors">
              <h3 className="text-lg font-bold p-4 text-primary">Bills & Expenses</h3>
              <Image 
                src="/images/bills.png" 
                alt="Bills & Expenses" 
                width={300} 
                height={600}
                className="w-full" 
              />
            </div>
            
            <div className="bg-black rounded-lg shadow-md overflow-hidden border border-gray-800 hover:border-primary transition-colors">
              <h3 className="text-lg font-bold p-4 text-primary">Habits & Goals</h3>
              <Image 
                src="/images/habits.png" 
                alt="Habits & Goals" 
                width={300} 
                height={600}
                className="w-full" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="bg-dark">
        <div className="container-custom section">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4 text-primary">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that's right for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold mb-2 text-primary">Basic</h3>
              <p className="text-gray-300 mb-6">Perfect for getting started</p>
              <div className="text-4xl font-bold mb-6 text-white">$0<span className="text-lg text-gray-400 font-normal">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Basic asset tracking</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Up to 5 bills/expenses</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Basic habit tracking</span>
                </li>
              </ul>
              <Link href="#contact" className="block text-center py-2 px-4 bg-gray-800 text-primary font-medium rounded-md hover:bg-gray-700 transition-colors w-full">
                Get Started
              </Link>
            </div>
            
            <div className="border-2 border-primary rounded-lg p-8 shadow-lg bg-gray-900 relative">
              <div className="absolute top-0 right-0 bg-primary text-white text-sm font-bold py-1 px-3 rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Pro</h3>
              <p className="text-gray-300 mb-6">For serious financial tracking</p>
              <div className="text-4xl font-bold mb-6 text-white">$9.99<span className="text-lg text-gray-400 font-normal">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Advanced net worth tracking</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Unlimited bills & expenses</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Advanced habits & goals</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Task management system</span>
                </li>
              </ul>
              <Link href="#contact" className="block text-center py-2 px-4 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition-colors w-full">
                Start 14-Day Trial
              </Link>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold mb-2 text-primary">Premium</h3>
              <p className="text-gray-300 mb-6">For financial optimization</p>
              <div className="text-4xl font-bold mb-6 text-white">$19.99<span className="text-lg text-gray-400 font-normal">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Everything in Pro</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Financial insights & analytics</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Data export capabilities</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Priority support</span>
                </li>
              </ul>
              <Link href="#contact" className="block text-center py-2 px-4 bg-secondary text-white font-medium rounded-md hover:bg-opacity-90 transition-colors w-full">
                Get Premium
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="bg-dark">
        <div className="container-custom section">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4 text-primary">What Our Users Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Thousands of people are already improving their finances with Attract By Pursuit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg shadow-md border border-gray-800 hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center text-primary mr-4">
                  JD
                </div>
                <div>
                  <h4 className="font-bold text-primary">John Doe</h4>
                  <p className="text-gray-400">Small Business Owner</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Attract By Pursuit has completely transformed how I manage both my personal and business finances. The insights it provides are invaluable."
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg shadow-md border border-gray-800 hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center text-primary mr-4">
                  JS
                </div>
                <div>
                  <h4 className="font-bold text-primary">Jane Smith</h4>
                  <p className="text-gray-400">Freelancer</p>
                </div>
              </div>
              <p className="text-gray-300">
                "As a freelancer, tracking income and expenses was always a challenge. This app makes it simple and even helps me build better work habits."
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg shadow-md border border-gray-800 hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center text-primary mr-4">
                  RJ
                </div>
                <div>
                  <h4 className="font-bold text-primary">Robert Johnson</h4>
                  <p className="text-gray-400">Student</p>
                </div>
              </div>
              <p className="text-gray-300">
                "I've tried many apps, but this one stands out with its habit tracking features. It's helped me save money and build a consistent study routine."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="bg-dark">
        <div className="container-custom section">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="heading-lg mb-4 text-primary">Download the App</h2>
              <p className="text-xl text-gray-300">
                Available on iOS and Android - Start tracking today!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a href="#" className="bg-black text-white px-8 py-3 rounded-lg border border-gray-700 flex items-center justify-center hover:bg-gray-900 transition">
                <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.3,1.4C15.9,1.3 15.5,1.2 15.1,1.1C14.5,1 13.9,0.9 13.3,0.9C12.7,0.9 12.1,1 11.5,1.1C10.9,1.2 10.3,1.4 9.8,1.6C8.2,2.3 6.9,3.5 6.1,5C5.4,6.5 5.2,8.2 5.5,9.9C5.8,11.6 6.7,13.1 8,14.2C9.3,15.3 11,15.9 12.7,15.9C14.4,15.9 16.1,15.3 17.4,14.3C18.7,13.2 19.6,11.7 19.9,10C20.2,8.3 19.9,6.6 19.2,5.1C18.4,3.6 17.6,2.1 16.3,1.4Z" />
                  <path d="M22,9.9C22,13.9 20.6,17.8 18.1,20.8C15.7,23.8 12.4,25.5 8.9,25.8C5.4,26.1 2,24.9 -0.5,22.6C-3,20.3 -4.4,17 -4.4,13.5C-4.4,10 -3,6.7 -0.5,4.4C2,2.1 5.4,0.9 8.9,1.2C12.4,1.5 15.7,3.2 18.1,6.2C20.6,9.2 22,13.1 22,17.1V9.9Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-xl font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="bg-black text-white px-8 py-3 rounded-lg border border-gray-700 flex items-center justify-center hover:bg-gray-900 transition">
                <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.9 3.25,2.3 3.7,1.8C4.15,1.3 4.8,1 5.5,1H18.5C19.2,1 19.85,1.3 20.3,1.8C20.75,2.3 21,2.9 21,3.5V20.5C21,21.1 20.75,21.7 20.3,22.2C19.85,22.7 19.2,23 18.5,23H5.5C4.8,23 4.15,22.7 3.7,22.2C3.25,21.7 3,21.1 3,20.5Z" />
                  <path d="M15,5.5L12,2L9,5.5M9,18.5L12,22L15,18.5" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-xl font-semibold">Google Play</div>
                </div>
              </a>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-primary text-center">Get in Touch</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-700 bg-gray-800 rounded-md focus:ring-primary focus:border-primary text-white"
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
                    className="w-full p-3 border border-gray-700 bg-gray-800 rounded-md focus:ring-primary focus:border-primary text-white"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 border border-gray-700 bg-gray-800 rounded-md focus:ring-primary focus:border-primary text-white"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors font-medium"
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