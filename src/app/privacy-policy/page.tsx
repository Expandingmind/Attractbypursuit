import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main>
      <Header />
      
      <section className="bg-light">
        <div className="container-custom py-12">
          <h1 className="heading-lg mb-8">Privacy Policy</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-md prose max-w-none">
            <p className="mb-4">
              <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
            </p>
            
            <h2 className="text-2xl font-bold mt-6 mb-4">Introduction</h2>
            <p className="mb-4">
              At Attract By Pursuit, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
            </p>
            
            <h2 className="text-2xl font-bold mt-6 mb-4">Information We Collect</h2>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us when you register with the service, express interest in obtaining information about us or our products and services, or otherwise contact us.
            </p>
            <p className="mb-4">
              The personal information that we collect depends on the context of your interactions with us and the service, the choices you make, and the products and features you use. The personal information we collect may include:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Financial and billing information</li>
              <li>Personal preferences</li>
              <li>Usage data</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-6 mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use personal information collected via our service for a variety of business purposes described below:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To allow you to participate in interactive features of our service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To fulfill any other purpose for which you provide it</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-6 mb-4">Disclosure of Your Information</h2>
            <p className="mb-4">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
              <li><strong>Marketing Communications:</strong> With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes.</li>
              <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-6 mb-4">Security of Your Information</h2>
            <p className="mb-4">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
            
            <h2 className="text-2xl font-bold mt-6 mb-4">Your Privacy Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>The right to access personal information we hold about you</li>
              <li>The right to request that we correct any personal information we hold about you</li>
              <li>The right to request that we delete any personal information we hold about you</li>
              <li>The right to opt-out of marketing communications</li>
              <li>The right to data portability</li>
            </ul>
            <p className="mb-4">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
            
            <h2 className="text-2xl font-bold mt-6 mb-4">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
            </p>
            <p className="mb-4">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            
            <h2 className="text-2xl font-bold mt-6 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>By email: privacy@attractbypursuit.com</li>
              <li>By visiting this page on our website: www.attractbypursuit.com/contact</li>
            </ul>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 