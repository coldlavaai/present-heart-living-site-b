import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description:
    'Accessibility Statement for Present Heart Living. Our commitment to making our website and services accessible to everyone.',
  alternates: { canonical: 'https://presentheartliving.co.uk/accessibility' },
  openGraph: {
    title: 'Accessibility Statement | Present Heart Living',
    description:
      'Our commitment to making the Present Heart Living website and services accessible to all users.',
    url: 'https://presentheartliving.co.uk/accessibility',
    siteName: 'Present Heart Living',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-forest/80 to-sage/50 pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="font-heading text-3xl md:text-4xl text-white mb-2 drop-shadow-sm">
              Accessibility Statement
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-white/70">Last updated: January 2025</p>
          </FadeIn>
        </div>
      </section>
      <Breadcrumbs items={[{ name: 'Accessibility', url: '/accessibility' }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <div className="space-y-8 text-peat/70 leading-relaxed">
              <div>
                <h2 className="font-heading text-xl text-forest mb-3">Our Commitment</h2>
                <p>
                  Present Heart Living is committed to ensuring that our website and services are accessible
                  to as many people as possible, regardless of ability, technology or circumstances. We
                  believe that yoga and wellbeing practices should be available to everyone, and this
                  commitment extends to our digital presence.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">Accessibility Features</h2>
                <p>We have implemented the following features to improve accessibility:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Clear, logical heading structure throughout all pages</li>
                  <li>Descriptive alternative text for images</li>
                  <li>Sufficient colour contrast between text and backgrounds</li>
                  <li>Responsive design that works across devices and screen sizes</li>
                  <li>Keyboard navigation support</li>
                  <li>Skip-to-content link for screen reader users</li>
                  <li>ARIA labels and landmarks where appropriate</li>
                  <li>Readable font sizes that can be adjusted in browser settings</li>
                  <li>Clear, descriptive link text</li>
                  <li>Form labels associated with input fields</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">Standards</h2>
                <p>
                  We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA.
                  These guidelines are established by the World Wide Web Consortium (W3C) and represent the
                  internationally recognised standard for accessible web content.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">Class Accessibility</h2>
                <p>
                  We are committed to making our physical classes as accessible as possible. If you have
                  specific accessibility needs, please contact us before attending a class so we can ensure
                  appropriate support is available.
                </p>
                <p className="mt-2">
                  Our approach to yoga and Pilates emphasises individual adaptation — movements can be
                  modified to suit a wide range of abilities and physical conditions. Audrey is happy to
                  discuss how classes can be adapted to meet your needs.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">Known Limitations</h2>
                <p>
                  While we strive for full accessibility, some areas of our website may not yet meet every
                  guideline. We are continually working to identify and resolve any accessibility barriers.
                  Specific known limitations may include:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Some older content may not yet have optimised alternative text</li>
                  <li>Third-party embedded content (such as maps) may have limited accessibility</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">Feedback</h2>
                <p>
                  We welcome feedback about the accessibility of our website. If you encounter any barriers
                  or have suggestions for improvement, please let us know:
                </p>
                <address className="not-italic mt-2">
                  Present Heart Living<br />
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
                <p className="mt-2">
                  We aim to respond to accessibility feedback within five working days.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl text-forest mb-3">Continuous Improvement</h2>
                <p>
                  Accessibility is an ongoing commitment. We regularly review our website and work to improve
                  the experience for all users. This statement will be updated as improvements are made.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
