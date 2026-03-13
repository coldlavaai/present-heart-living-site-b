import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description:
    'Terms and Conditions for Present Heart Living. Please read these terms carefully before using our website or booking yoga, Pilates and wellbeing services.',
  alternates: { canonical: 'https://presentheartliving.co.uk/terms-and-conditions' },
  openGraph: {
    title: 'Terms and Conditions | Present Heart Living',
    description:
      'Terms and Conditions for using the Present Heart Living website and services in the Scottish Highlands.',
    url: 'https://presentheartliving.co.uk/terms-and-conditions',
    siteName: 'Present Heart Living',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-forest/80 to-sage/50 pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="font-heading text-3xl md:text-4xl text-white mb-2 drop-shadow-sm">
              Terms and Conditions
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-white/70">Last updated: January 2025</p>
          </FadeIn>
        </div>
      </section>
      <Breadcrumbs items={[{ name: 'Terms and Conditions', url: '/terms-and-conditions' }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <div className="space-y-8 text-peat/70 leading-relaxed">
              <div>
                <h2 className="font-heading text-xl text-forest mb-3">1. Introduction</h2>
                <p>
                  These Terms and Conditions govern your use of the Present Heart Living website
                  (presentheartliving.co.uk) and the services we provide, including yoga classes, Pilates
                  sessions, breathwork, sound baths, retreats and corporate wellbeing programmes.
                </p>
                <p className="mt-2">
                  By using our website or booking our services, you agree to be bound by these terms. If you
                  do not agree, please do not use our website or services.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">2. About Us</h2>
                <p>
                  Present Heart Living is operated by Audrey Buchanan and is based in Maryburgh, Ross-shire,
                  IV7 8DH, Scottish Highlands. Contact us at{' '}
                  <a
                    href="mailto:presentheartyoga@gmail.com"
                    className="text-sage hover:text-forest underline"
                  >
                    presentheartyoga@gmail.com
                  </a>{' '}
                  or{' '}
                  <a href="tel:07805899207" className="text-sage hover:text-forest underline">
                    07805 899207
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">3. Bookings and Payments</h2>
                <p>
                  Class bookings are subject to availability. Payment is required at the time of booking
                  unless otherwise agreed. We accept the payment methods stated at the time of booking.
                </p>
                <p className="mt-2">
                  By booking a class or service, you confirm that you are at least 18 years of age or have
                  the consent of a parent or guardian.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">4. Cancellation and Refunds</h2>
                <p>
                  If you need to cancel a booking, please give at least 24 hours&apos; notice. Cancellations
                  made with less than 24 hours&apos; notice may not be eligible for a refund. Retreat
                  bookings may be subject to separate cancellation terms, which will be provided at the time
                  of booking.
                </p>
                <p className="mt-2">
                  Present Heart Living reserves the right to cancel or reschedule classes or events. In such
                  cases, you will be offered an alternative date or a full refund.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">5. Health and Safety</h2>
                <p>
                  Yoga, Pilates and breathwork involve physical activity. By attending a class, you confirm
                  that you are in suitable health to participate. Please inform the teacher of any medical
                  conditions, injuries or pregnancy before the class begins.
                </p>
                <p className="mt-2">
                  Present Heart Living does not accept liability for injury sustained during or as a result
                  of attending classes, except where caused by our negligence. If you have any health
                  concerns, we recommend consulting your healthcare provider before beginning a new exercise
                  programme.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">6. Intellectual Property</h2>
                <p>
                  All content on this website — including text, images, design and branding — is the
                  property of Present Heart Living and is protected by copyright law. You may not reproduce,
                  distribute or modify any content without our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">7. Website Use</h2>
                <p>
                  You agree to use this website for lawful purposes only. You must not use the website in
                  any way that may cause damage to the website, impair its availability, or in any way which
                  is unlawful, illegal, fraudulent or harmful.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">8. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, Present Heart Living shall not be liable for any
                  indirect, incidental or consequential damages arising from the use of our website or
                  services. Our total liability shall not exceed the amount paid by you for the relevant
                  service.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">9. Privacy</h2>
                <p>
                  Your use of our website and services is also governed by our{' '}
                  <a href="/privacy-policy" className="text-sage hover:text-forest underline">
                    Privacy Policy
                  </a>
                  , which explains how we collect, use and protect your personal data.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">10. Governing Law</h2>
                <p>
                  These Terms and Conditions are governed by and construed in accordance with the laws of
                  Scotland. Any disputes shall be subject to the exclusive jurisdiction of the Scottish
                  courts.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">11. Changes to These Terms</h2>
                <p>
                  We may update these Terms and Conditions from time to time. Changes will be posted on this
                  page with an updated revision date. Continued use of our website or services constitutes
                  acceptance of any changes.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">12. Contact</h2>
                <p>
                  If you have questions about these Terms and Conditions, please contact us:
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
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
