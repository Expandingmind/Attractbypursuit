import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main>
      <Header />
      
      <section className="bg-dark">
        <div className="container-custom py-12">
          <h1 className="heading-lg mb-8 text-primary">Privacy Policy</h1>
          
          <div className="bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-800 text-gray-300">
            <p className="mb-4">
              <strong>Effective Date: March 4, 2025</strong>
            </p>
            
            <p className="mb-6">
              Attract By Pursuit respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and share your information when you use our app.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-4 text-primary">1. Information We Collect</h2>
            <p className="mb-6">
              We may collect personal and non-personal information, including but not limited to your name, email address, device information, and usage data.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-4 text-primary">2. How We Use Your Information</h2>
            <p className="mb-6">
              Your data is used to improve the app experience, provide customer support, and enhance security. We do not sell your personal information.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-4 text-primary">3. Data Protection</h2>
            <p className="mb-6">
              We take security measures to protect your information but cannot guarantee complete security. Always protect your login credentials.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-4 text-primary">4. Third-Party Services</h2>
            <p className="mb-6">
              We may use third-party analytics and advertising services that collect data to improve the app.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-4 text-primary">5. Your Rights</h2>
            <p className="mb-6">
              You may request access, modification, or deletion of your personal data by contacting us.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-4 text-primary">6. Contact Us</h2>
            <p className="mb-6">
              If you have any questions or concerns, please contact us at:
              <br />
              📧 jah@maktubtechnologies.com
            </p>
            
            <p className="mt-8 italic">
              By using Attract By Pursuit, you agree to this Privacy Policy.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 