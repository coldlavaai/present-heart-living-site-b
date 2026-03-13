import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import SectionHeading from '@/components/SectionHeading';
import JsonLd from '@/components/JsonLd';
import { localBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact Present Heart Living | Book Yoga Classes Highlands',
  description:
    'Contact Present Heart Living to book yoga, Pilates and breathwork classes in the Scottish Highlands near Inverness. Call, email or use our contact form to get in touch today.',
  alternates: { canonical: 'https://presentheartliving.co.uk/contact' },
  openGraph: {
    title: 'Contact Present Heart Living | Book Yoga Classes Highlands',
    description:
      'Get in touch with Present Heart Living to book yoga, Pilates and breathwork classes in the Scottish Highlands. Located in Maryburgh, Ross-shire, near Inverness.',
    url: 'https://presentheartliving.co.uk/contact',
    siteName: 'Present Heart Living',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema as unknown as Record<string, unknown>} />

      <section className="bg-gradient-to-br from-forest/85 to-sage/60 pt-32 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4 drop-shadow-sm">
              Contact Present Heart Living
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Get in touch to book a class, ask a question or learn more about yoga and Pilates in the
              Scottish Highlands
            </p>
          </FadeIn>
        </div>
      </section>
      <Breadcrumbs items={[{ name: 'Contact', url: '/contact' }]} />

      {/* Contact Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn direction="left">
              <div>
                <SectionHeading title="Send a Message" centered={false} />
                <form className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-peat mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-mist/50 bg-white text-peat focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-peat mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-mist/50 bg-white text-peat focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-peat mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-mist/50 bg-white text-peat focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors"
                      placeholder="07XXX XXXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-peat mb-1">
                      I&apos;m Interested In
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="w-full px-4 py-3 rounded-lg border border-mist/50 bg-white text-peat focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors"
                    >
                      <option value="">Please select...</option>
                      <option value="yoga-classes">Yoga Classes</option>
                      <option value="pilates">Pilates Classes</option>
                      <option value="breathwork">Breathwork Sessions</option>
                      <option value="sound-baths">Sound Baths</option>
                      <option value="retreats">Retreats</option>
                      <option value="corporate">Corporate Wellbeing</option>
                      <option value="other">Other Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-peat mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-mist/50 bg-white text-peat focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors resize-y"
                      placeholder="Tell us about yourself and what you're looking for..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-sage text-white px-8 py-3.5 rounded-lg font-medium hover:bg-forest transition-colors text-base"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-peat/40">
                    By submitting this form, you agree to our{' '}
                    <Link href="/privacy-policy" className="underline hover:text-sage">
                      Privacy Policy
                    </Link>
                    . We will respond to your enquiry as soon as possible.
                  </p>
                </form>
              </div>
            </FadeIn>

            {/* Contact Details + Map */}
            <FadeIn direction="right">
              <div className="space-y-8">
                {/* NAP Details */}
                <div>
                  <SectionHeading title="Get in Touch" centered={false} />
                  <div className="mt-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-sage text-lg">📍</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-lg text-forest mb-1">Studio Address</h3>
                        <address className="not-italic text-peat/70 leading-relaxed">
                          Present Heart Living<br />
                          9 Breac An Ord<br />
                          Maryburgh<br />
                          Ross-shire<br />
                          IV7 8DH<br />
                          Scottish Highlands
                        </address>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-sage text-lg">📞</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-lg text-forest mb-1">Phone</h3>
                        <a
                          href="tel:07805899207"
                          className="text-peat/70 hover:text-sage transition-colors"
                        >
                          07805 899207
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-sage text-lg">✉️</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-lg text-forest mb-1">Email</h3>
                        <a
                          href="mailto:presentheartyoga@gmail.com"
                          className="text-peat/70 hover:text-sage transition-colors"
                        >
                          presentheartyoga@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Find Us</h3>
                  <div className="aspect-[4/3] bg-gradient-to-br from-mist/40 to-sand/40 rounded-xl border border-mist/50 flex items-center justify-center">
                    {/* Replace with Google Maps embed */}
                    <div className="text-center px-4">
                      <span className="text-4xl block mb-3">🗺️</span>
                      <p className="text-sm text-peat/50">
                        Google Maps embed placeholder<br />
                        <span className="text-xs">9 Breac An Ord, Maryburgh, IV7 8DH</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-sand/10 rounded-xl p-6">
                  <h3 className="font-heading text-lg text-forest mb-3">Quick Links</h3>
                  <div className="space-y-2">
                    <Link
                      href="/classes"
                      className="block text-sm text-peat/70 hover:text-sage transition-colors"
                    >
                      → View all yoga and Pilates classes
                    </Link>
                    <Link
                      href="/beginner-yoga-classes-highlands"
                      className="block text-sm text-peat/70 hover:text-sage transition-colors"
                    >
                      → Beginner yoga information
                    </Link>
                    <Link
                      href="/yoga-classes-inverness"
                      className="block text-sm text-peat/70 hover:text-sage transition-colors"
                    >
                      → Yoga classes near Inverness
                    </Link>
                    <Link
                      href="/retreats"
                      className="block text-sm text-peat/70 hover:text-sage transition-colors"
                    >
                      → Explore yoga retreats in Scotland
                    </Link>
                    <Link
                      href="/corporate-wellbeing"
                      className="block text-sm text-peat/70 hover:text-sage transition-colors"
                    >
                      → Corporate wellbeing programmes
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-12 bg-sand/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-heading text-2xl text-forest mb-4">Getting Here</h2>
            <p className="text-peat/70 leading-relaxed">
              Present Heart Living is located in Maryburgh, Ross-shire, conveniently positioned between
              Inverness and Dingwall. The studio is approximately 20 minutes from central Inverness, 15
              minutes from Dingwall and easily accessible from the Black Isle, Muir of Ord and Beauly. Free
              parking is available nearby.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
