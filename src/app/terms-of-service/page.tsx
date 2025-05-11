import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <main>
      <Header />
      
      <section className="bg-dark">
        <div className="container-custom py-12">
          <h1 className="heading-lg mb-8 text-primary">Terms of Use & End User License Agreement (EULA)</h1>
          
          <div className="bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-800 text-gray-300">
            <p className="mb-4">
              <strong>Effective Date: March 4, 2025</strong>
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-4 text-primary">1. License Grant</h2>
            <p className="mb-6">
              Attract By Pursuit is licensed, not sold, to you by Attract By Pursuit Inc. for use strictly under the terms of this agreement.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-4 text-primary">2. User-Generated Content Policy</h2>
            <p className="mb-6">
              By using Attract By Pursuit, you agree not to submit content that violates laws, contains explicit material, encourages harm, or violates intellectual property.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-4 text-primary">3. Termination of Access</h2>
            <p className="mb-6">
              Attract By Pursuit Inc. reserves the right to immediately suspend or terminate your access if you violate these terms.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-4 text-primary">4. Subscription & Payment Terms</h2>
            <p className="mb-6">
              Subscription fees auto-renew unless canceled at least 24 hours before the next billing cycle. All purchases are final.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-4 text-primary">5. Privacy & Data Usage</h2>
            <p className="mb-6">
              Attract By Pursuit collects personal data and anonymized analytics. Data is encrypted but use at your own risk.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-4 text-primary">6. Acceptable Use Policy</h2>
            <p className="mb-6">
              Users must not misuse the app, attempt security breaches, or engage in harmful behavior.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-4 text-primary">7. Limitation of Liability</h2>
            <p className="mb-6">
              Attract By Pursuit Inc. is not responsible for any damages arising from the use of the app.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-4 text-primary">8. Changes to This Agreement</h2>
            <p className="mb-6">
              These terms may be updated at any time. Continued use constitutes acceptance.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-4 text-primary">9. Governing Law & Dispute Resolution</h2>
            <p className="mb-6">
              Disputes are subject to binding arbitration in Los Angeles, CA. No class action lawsuits allowed.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-4 text-primary">10. Indemnification</h2>
            <p className="mb-6">
              Users agree to indemnify Attract By Pursuit Inc. against any claims arising from misuse.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-4 text-primary">11. Contact Information</h2>
            <p className="mb-6">
              For questions, contact us at:
              <br />
              📧 jah@maktubtechnologies.com
            </p>
            
            <p className="mt-8 italic">
              By using Attract By Pursuit, you agree to these Terms of Use & EULA.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 