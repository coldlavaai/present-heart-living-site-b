import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'Cookie Policy for Present Heart Living. Learn about the cookies we use on our website and how to manage your preferences.',
  alternates: { canonical: 'https://presentheartliving.co.uk/cookie-policy' },
  openGraph: {
    title: 'Cookie Policy | Present Heart Living',
    description:
      'Cookie Policy for Present Heart Living. Information about cookies used on our website.',
    url: 'https://presentheartliving.co.uk/cookie-policy',
    siteName: 'Present Heart Living',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-forest/80 to-sage/50 pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="font-heading text-3xl md:text-4xl text-white mb-2 drop-shadow-sm">
              Cookie Policy
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-white/70">Last updated: January 2025</p>
          </FadeIn>
        </div>
      </section>
      <Breadcrumbs items={[{ name: 'Cookie Policy', url: '/cookie-policy' }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <div className="space-y-8 text-peat/70 leading-relaxed">
              <div>
                <h2 className="font-heading text-xl text-forest mb-3">1. What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are stored on your device when you visit a website. They
                  help websites function properly, remember your preferences and provide information to the
                  website owner about how the site is being used.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">2. How We Use Cookies</h2>
                <p>
                  Present Heart Living (presentheartliving.co.uk) uses cookies for the following purposes:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    <strong className="text-peat">Essential cookies:</strong> These are necessary for the
                    website to function correctly and cannot be disabled.
                  </li>
                  <li>
                    <strong className="text-peat">Analytics cookies:</strong> These help us understand how
                    visitors use our website so we can improve the user experience. We may use Google
                    Analytics or similar tools.
                  </li>
                  <li>
                    <strong className="text-peat">Preference cookies:</strong> These remember your choices
                    and settings to provide a more personalised experience.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">3. Cookies We Use</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-mist/50 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-forest text-white">
                        <th className="p-3 text-left">Cookie</th>
                        <th className="p-3 text-left">Purpose</th>
                        <th className="p-3 text-left">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b border-mist/30">
                        <td className="p-3 font-mono text-xs">_ga</td>
                        <td className="p-3">Google Analytics — distinguishes unique users</td>
                        <td className="p-3">2 years</td>
                      </tr>
                      <tr className="bg-linen/50 border-b border-mist/30">
                        <td className="p-3 font-mono text-xs">_ga_*</td>
                        <td className="p-3">Google Analytics 4 — maintains session state</td>
                        <td className="p-3">2 years</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3 font-mono text-xs">cookie_consent</td>
                        <td className="p-3">Stores your cookie consent preference</td>
                        <td className="p-3">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">4. Third-Party Cookies</h2>
                <p>
                  Some cookies may be set by third-party services that appear on our pages, such as
                  analytics providers or embedded content (e.g., Google Maps). We do not control these
                  cookies. Please refer to the relevant third party&apos;s privacy and cookie policies for
                  more information.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">5. Managing Cookies</h2>
                <p>
                  You can control and manage cookies through your browser settings. Most browsers allow you
                  to:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>View the cookies stored on your device</li>
                  <li>Delete some or all cookies</li>
                  <li>Block cookies from specific or all websites</li>
                  <li>Set preferences for certain types of cookies</li>
                </ul>
                <p className="mt-2">
                  Please note that disabling cookies may affect the functionality of this website.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">6. Changes to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time. Any changes will be posted on this
                  page with an updated revision date.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">7. Contact Us</h2>
                <p>
                  If you have questions about our use of cookies, please contact us:
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
                </address>
              </div>

              <div>
                <p className="text-sm text-peat/50">
                  For more information about how we handle your personal data, please see our{' '}
                  <a href="/privacy-policy" className="text-sage hover:text-forest underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
