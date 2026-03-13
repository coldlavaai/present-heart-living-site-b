import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Present Heart Living. Learn how we collect, use and protect your personal data when you use our website and services.',
  alternates: { canonical: 'https://presentheartliving.co.uk/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | Present Heart Living',
    description:
      'Privacy Policy for Present Heart Living. How we collect, use and protect your personal information.',
    url: 'https://presentheartliving.co.uk/privacy-policy',
    siteName: 'Present Heart Living',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-forest/80 to-sage/50 pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="font-heading text-3xl md:text-4xl text-white mb-2 drop-shadow-sm">
              Privacy Policy
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-white/70">Last updated: January 2025</p>
          </FadeIn>
        </div>
      </section>
      <Breadcrumbs items={[{ name: 'Privacy Policy', url: '/privacy-policy' }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-peat">
          <FadeIn>
            <div className="space-y-8 text-peat/70 leading-relaxed">
              <div>
                <h2 className="font-heading text-xl text-forest mb-3">1. Introduction</h2>
                <p>
                  Present Heart Living (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is
                  committed to protecting and respecting your privacy. This Privacy Policy explains how we
                  collect, use, store and protect your personal information when you use our website
                  (presentheartliving.co.uk) and our services.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">2. Information We Collect</h2>
                <p>We may collect the following personal information:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Name and contact details (email address, phone number)</li>
                  <li>Information provided through our contact form</li>
                  <li>Class booking and attendance information</li>
                  <li>Payment information (processed securely via third-party providers)</li>
                  <li>Website usage data through cookies and analytics tools</li>
                  <li>Health-related information relevant to your yoga practice (provided voluntarily)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">3. How We Use Your Information</h2>
                <p>We use your personal information to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Respond to your enquiries and provide the services you have requested</li>
                  <li>Manage class bookings and attendance</li>
                  <li>Send information about classes, retreats and events (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">4. Legal Basis for Processing</h2>
                <p>
                  We process your personal data on the following legal bases: your consent, the performance
                  of a contract with you, our legitimate business interests, and compliance with legal
                  obligations.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">5. Data Sharing</h2>
                <p>
                  We do not sell, rent or trade your personal information to third parties. We may share
                  your data with trusted service providers who assist us in operating our website, processing
                  payments or delivering our services. All third-party providers are required to maintain the
                  confidentiality and security of your data.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">6. Data Security</h2>
                <p>
                  We implement appropriate technical and organisational measures to protect your personal
                  information against unauthorised access, alteration, disclosure or destruction.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">7. Data Retention</h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfil the purposes
                  for which it was collected, or as required by law. Booking records may be retained for up
                  to six years for legal and accounting purposes.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">8. Your Rights</h2>
                <p>Under data protection legislation, you have the right to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to or restrict our processing of your data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="mt-2">
                  To exercise these rights, please contact us using the details below.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">9. Cookies</h2>
                <p>
                  Our website uses cookies to improve your browsing experience and to help us understand
                  how visitors use our site. For more information, please see our{' '}
                  <a href="/cookie-policy" className="text-sage hover:text-forest underline">
                    Cookie Policy
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">10. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or wish to exercise your data rights,
                  please contact us:
                </p>
                <address className="not-italic mt-2">
                  Present Heart Living<br />
                  9 Breac An Ord, Maryburgh, Ross-shire, IV7 8DH<br />
                  Email:{' '}
                  <a
                    href="mailto:presentheartyoga@gmail.com"
                    className="text-sage hover:text-forest underline"
                  >
                    presentheartyoga@gmail.com
                  </a>
                  <br />
                  Phone:{' '}
                  <a href="tel:07805899207" className="text-sage hover:text-forest underline">
                    07805 899207
                  </a>
                </address>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">11. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this
                  page with an updated revision date. We encourage you to review this policy periodically.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
