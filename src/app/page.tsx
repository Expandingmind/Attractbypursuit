import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container-custom section flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="heading-xl mb-6">
              Track Your Way to Financial Freedom
            </h1>
            <p className="text-lg mb-8 text-blue-100">
              Attract By Pursuit helps you take control of your finances, build better habits, and achieve your goals with powerful tracking tools.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#pricing" className="btn-secondary">
                Start Free Trial
              </Link>
              <Link href="#features" className="bg-dark text-primary font-medium py-2 px-4 rounded-md hover:bg-gray-900 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white rounded-lg shadow-xl p-4">
              {/* Placeholder for app screenshot */}
              <div className="aspect-video bg-gray-200 rounded relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  App Dashboard Preview
                </div>
              </div>
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
              Everything you need to take control of your financial life and build better habits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg shadow-md border border-gray-800 hover:border-primary transition-colors">
              <div className="text-primary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-md mb-2 text-primary">Expense Tracking</h3>
              <p className="text-gray-300">
                Effortlessly track your expenses and income. Categorize transactions and gain insights into your spending habits.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg shadow-md border border-gray-800 hover:border-primary transition-colors">
              <div className="text-secondary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="heading-md mb-2 text-primary">Habit Building</h3>
              <p className="text-gray-300">
                Create and track daily habits. Stay accountable and develop routines that support your financial and personal goals.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg shadow-md border border-gray-800 hover:border-primary transition-colors">
              <div className="text-primary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="heading-md mb-2 text-primary">Insightful Analytics</h3>
              <p className="text-gray-300">
                Visualize your progress with powerful charts and insights. Identify trends and opportunities to improve your finances.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="bg-dark bg-opacity-90">
        <div className="container-custom section">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4 text-primary">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that's right for you.
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
                  <span className="text-gray-300">Basic expense tracking</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Up to 3 habits</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Basic reports</span>
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
              <p className="text-gray-300 mb-6">For serious improvement</p>
              <div className="text-4xl font-bold mb-6 text-white">$9.99<span className="text-lg text-gray-400 font-normal">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Advanced expense tracking</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Unlimited habits</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Export data</span>
                </li>
              </ul>
              <Link href="#contact" className="block text-center py-2 px-4 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition-colors w-full">
                Start 14-Day Trial
              </Link>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold mb-2 text-primary">Enterprise</h3>
              <p className="text-gray-300 mb-6">For teams and organizations</p>
              <div className="text-4xl font-bold mb-6 text-white">$24.99<span className="text-lg text-gray-400 font-normal">/month</span></div>
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
                  <span className="text-gray-300">Team collaboration</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Priority support</span>
                </li>
              </ul>
              <Link href="#contact" className="block text-center py-2 px-4 bg-secondary text-white font-medium rounded-md hover:bg-opacity-90 transition-colors w-full">
                Contact Sales
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
      <section id="contact" className="bg-dark bg-opacity-90">
        <div className="container-custom section">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="heading-lg mb-4 text-primary">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300">
                Sign up for a free trial or contact us for more information.
              </p>
            </div>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-700 bg-gray-800 rounded-md focus:ring-primary focus:border-primary text-white"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-700 bg-gray-800 rounded-md focus:ring-primary focus:border-primary text-white"
                  placeholder="Enter your email"
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
                  placeholder="How can we help you?"
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
      </section>
      
      <Footer />
    </main>
  );
} 