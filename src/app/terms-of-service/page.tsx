import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <main>
      <Header />
      
      <section className="bg-light">
        <div className="container-custom py-12">
          <h1 className="heading-lg mb-8">Terms of Service</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-md prose max-w-none">
            <p className="mb-4">
              <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
            </p>
            
            <h2 className="text-2xl font-bold mt-6 mb-4">Introduction</h2>
            <p className="mb-4">
              Welcome to Attract By Pursuit! These Terms of Service ("Terms") govern your use of the Attract By Pursuit website, mobile applications, and services (collectively, the "Service").
            </p>
            <p className="mb-4">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
            </p>
            
            <h2 className="text-2xl font-bold mt-6 mb-4">User Accounts</h2>
            <p className="mb-4">
              When you create an account with us, you must provide accurate, complete, and current information at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            <p className="mb-4">
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
            </p>
            <p className="mb-4">
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
            
            <h2 className="text-2xl font-bold mt-6 mb-4">Subscription and Payments</h2>
            <p className="mb-4">
              Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis, depending on the type of subscription plan you select.
            </p>
            <p className="mb-4">
              At the end of each period, your subscription will automatically renew under the same conditions unless you cancel it or Attract By Pursuit cancels it.
            </p>
            <p className="mb-4">
              You may cancel your subscription either through your online account management page or by contacting our customer support team. You will not receive a refund for the fees you already paid for your current subscription period, and you will continue to have access to the Service through the end of your current subscription period.
            </p>
            
            <h2 className="text-2xl font-bold mt-6 mb-4">Intellectual Property</h2>
            <p className="mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of Attract By Pursuit and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>
            <p className="mb-4">
              Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Attract By Pursuit.
            </p>
            
            <h2 className="text-2xl font-bold mt-6 mb-4">User Content</h2>
            <p className="mb-4">
              Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("User Content"). You are responsible for the User Content that you post on or through the Service, including its legality, reliability, and appropriateness.
            </p>
            <p className="mb-4">
              By posting User Content on or through the Service, you represent and warrant that: (i) the User Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your User Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
            </p>
            
            <h2 className="text-2xl font-bold mt-6 mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall Attract By Pursuit, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>
            
            <h2 className="text-2xl font-bold mt-6 mb-4">Disclaimer</h2>
            <p className="mb-4">
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
            </p>
            <p className="mb-4">
              Attract By Pursuit, its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
            </p>
            
            <h2 className="text-2xl font-bold mt-6 mb-4">Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
            <p className="mb-4">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
            
            <h2 className="text-2xl font-bold mt-6 mb-4">Changes to These Terms</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="mb-4">
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>
            
            <h2 className="text-2xl font-bold mt-6 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>By email: legal@attractbypursuit.com</li>
              <li>By visiting this page on our website: www.attractbypursuit.com/contact</li>
            </ul>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 