import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Contact() {
  return (
    <main>
      <Header />
      
      <section className="bg-dark">
        <div className="container-custom py-12">
          <h1 className="heading-lg mb-8 text-primary">Contact Us</h1>
          
          <div className="bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-800 text-gray-300">
            <p className="mb-6">
              Have questions or feedback about Attract By Pursuit? We'd love to hear from you!
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group">
                <div className="p-6 rounded-xl bg-gray-800 border border-gray-700 transition duration-300 hover:border-primary">
                  <h3 className="text-xl font-bold mb-3 text-primary">Phone</h3>
                  <p className="text-lg mb-2">Call or text us at:</p>
                  <a href="tel:7863071619" className="text-xl font-semibold text-white hover:text-primary transition">
                    786-307-1619
                  </a>
                </div>
              </div>
              
              <div className="group">
                <div className="p-6 rounded-xl bg-gray-800 border border-gray-700 transition duration-300 hover:border-primary">
                  <h3 className="text-xl font-bold mb-3 text-primary">Email</h3>
                  <p className="text-lg mb-2">Send us an email at:</p>
                  <a href="mailto:Jah@maktubtechnologies.com" className="text-xl font-semibold text-white hover:text-primary transition">
                    Jah@maktubtechnologies.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 rounded-xl bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-primary">Get in Touch</h3>
              <p className="mb-6">
                We're here to help with any questions about our financial tracking application. 
                Whether you need assistance with the app or have suggestions for improvement, 
                don't hesitate to reach out.
              </p>
              <p className="mb-4">
                Our team is available during regular business hours and will respond to your 
                inquiry as soon as possible.
              </p>
              <div className="mt-6">
                <Link href="/"
                  className="btn-primary"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 