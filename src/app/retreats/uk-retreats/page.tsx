import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import CTABanner from '@/components/CTABanner';
import FAQAccordion from '@/components/FAQAccordion';
import TestimonialCard from '@/components/TestimonialCard';
import RelatedClasses from '@/components/RelatedClasses';
import JsonLd from '@/components/JsonLd';
import { eventSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'UK Yoga Retreats | Yoga Retreat Scotland Highlands',
  description:
    'Yoga retreats across Scotland and the UK with Present Heart Living. Weekend yoga retreat Scotland experiences in the Highlands designed to support rest, reflection and mindful movement. Book your place today.',
  alternates: { canonical: 'https://presentheartliving.co.uk/retreats/uk-retreats' },
  openGraph: {
    title: 'UK Yoga Retreats | Yoga Retreat Scotland Highlands',
    description:
      'Yoga retreats across Scotland and the UK with Present Heart Living. Weekend yoga retreat Scotland experiences in the Highlands designed to support rest, reflection and mindful movement.',
    url: 'https://presentheartliving.co.uk/retreats/uk-retreats',
    siteName: 'Present Heart Living',
    locale: 'en_GB',
    type: 'website',
  },
};

const upcomingRetreats = [
  {
    name: 'Highland Spring Renewal Retreat',
    description:
      'A weekend yoga retreat in Scotland exploring seasonal renewal through yoga, breathwork and nature walks in the Scottish Highlands.',
    startDate: '2025-04-25',
    endDate: '2025-04-27',
    location: 'Scottish Highlands',
    url: 'https://presentheartliving.co.uk/retreats/uk-retreats',
  },
  {
    name: 'Summer Solstice Yoga Retreat',
    description:
      'Celebrate the longest day with outdoor yoga practices, sound baths and mindful exploration amid the stunning Highland landscape.',
    startDate: '2025-06-20',
    endDate: '2025-06-22',
    location: 'Scottish Highlands',
    url: 'https://presentheartliving.co.uk/retreats/uk-retreats',
  },
  {
    name: 'Autumn Grounding Retreat',
    description:
      'A restorative yoga retreat Scotland experience focusing on grounding practices, yin yoga and warm candlelit sound baths as the seasons change.',
    startDate: '2025-10-10',
    endDate: '2025-10-12',
    location: 'Scottish Highlands',
    url: 'https://presentheartliving.co.uk/retreats/uk-retreats',
  },
];

const faqs = [
  {
    question: 'Where are the UK yoga retreats held?',
    answer:
      'Retreats are held in carefully chosen locations across the Scottish Highlands, selected for their natural beauty and peaceful surroundings that support rest and reflection.',
  },
  {
    question: 'What level of yoga experience do I need for a yoga retreat Scotland?',
    answer:
      'All levels are welcome. Retreats are designed so that beginners feel comfortable while experienced practitioners can deepen their practice. Modifications are always offered.',
  },
  {
    question: 'What should I bring to a yoga retreat?',
    answer:
      'Comfortable clothing for yoga practice, warm layers for outdoor activities, a water bottle, a journal if you wish, and an open mind. Yoga mats and props are provided.',
  },
  {
    question: 'Is accommodation included?',
    answer:
      'Yes, accommodation and nourishing meals are typically included in the retreat price. Specific details are provided for each retreat listing.',
  },
];

export default function UkRetreatsPage() {
  return (
    <>
      <JsonLd
        data={upcomingRetreats.map((r) => eventSchema(r) as unknown as Record<string, unknown>)}
      />

      <Hero
        variant="narrow"
        title="UK Yoga Retreats"
        subtitle="Weekend yoga retreat Scotland experiences amid the stunning landscapes of the Scottish Highlands"
        bgGradient="from-forest/85 to-sage/60"
      />
      <Breadcrumbs
        items={[
          { name: 'Retreats', url: '/retreats' },
          { name: 'UK Retreats', url: '/retreats/uk-retreats' },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <p className="text-lg text-peat/70 leading-relaxed mb-6">
              Present Heart Living yoga retreats in Scotland offer the opportunity to step away from daily routines and immerse yourself in a slower, more reflective pace of living. Set within calm natural environments across the Scottish Highlands, each retreat is designed to support rest, reflection and mindful movement.
            </p>
            <p className="text-peat/70 leading-relaxed mb-6">
              Locations are chosen carefully to provide peaceful surroundings that complement the practices of yoga, breathwork and meditation. The stunning Highland landscape — with its mountains, lochs and ancient forests — creates a natural setting for reconnection and renewal.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">
              What a Yoga Retreat Scotland Includes
            </h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Retreats typically include a combination of:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {[
                'Morning and evening yoga practices',
                'Breathwork and pranayama sessions',
                'Guided relaxation and yoga nidra',
                'Sound bath experiences',
                'Nature walks in the Highlands',
                'Journaling and reflection time',
                'Nourishing shared vegetarian meals',
                'Accommodation in peaceful settings',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-peat/70 text-sm">
                  <span className="text-sage mt-0.5">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-peat/70 leading-relaxed">
              The intention is not to create an intensive schedule but rather to offer space for restoration and self-discovery. Participants are encouraged to move at their own pace. Learn more about <Link href="/retreats/retreat-experience" className="text-sage hover:text-forest underline">what a retreat day looks like</Link>.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">
              Upcoming Yoga Retreats in Scotland
            </h2>
            <div className="space-y-6">
              {upcomingRetreats.map((retreat) => (
                <div
                  key={retreat.name}
                  className="bg-white rounded-xl p-6 border border-mist/50 shadow-sm"
                >
                  <h3 className="font-heading text-xl text-forest mb-2">{retreat.name}</h3>
                  <p className="text-sm text-sage font-medium mb-3">
                    {new Date(retreat.startDate).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}{' '}
                    –{' '}
                    {new Date(retreat.endDate).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}{' '}
                    · {retreat.location}
                  </p>
                  <p className="text-peat/70 text-sm leading-relaxed">{retreat.description}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-peat/50 mt-4">
              Retreat dates and details may be updated. Please <Link href="/contact" className="text-sage hover:text-forest underline">contact us</Link> to confirm availability and book your place.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">
              Who UK Retreats Are For
            </h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              UK retreats are suitable for both <Link href="/locations/beginner-yoga-classes" className="text-sage hover:text-forest underline">beginners</Link> and experienced practitioners. Many participants join retreats to step away from busy routines, reconnect with themselves and deepen their understanding of mindful movement.
            </p>
            <p className="text-peat/70 leading-relaxed">
              Whether you currently attend <Link href="/classes" className="text-sage hover:text-forest underline">regular yoga classes</Link> or are coming to yoga for the first time, a retreat provides a rare opportunity to pause, reflect and return home feeling restored and inspired.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 bg-sand/10">
        <div className="max-w-2xl mx-auto px-4">
          <TestimonialCard
            quote="My first yoga retreat in Scotland exceeded all expectations. The Highland setting was breathtaking, and Audrey created such a warm, supportive atmosphere. I've already booked my next one."
            author="Helen D."
            context="Retreat participant, Glasgow"
          />
        </div>
      </section>

      <FAQAccordion faqs={faqs} />

      <RelatedClasses
        title="Continue Your Practice"
        classes={[
          { title: 'International Retreats', href: '/retreats/international-retreats', description: 'Explore retreat experiences in inspiring destinations beyond the UK.', icon: '🌍' },
          { title: 'Restorative Yoga', href: '/classes/restorative-yoga', description: 'Bring the restorative retreat feeling into your weekly practice.', icon: '🕊️' },
          { title: 'Sound Baths', href: '/classes/sound-baths', description: 'Immersive sound experiences for deep relaxation and calm.', icon: '🔔' },
        ]}
      />

      <CTABanner
        heading="Book a Yoga Retreat in Scotland"
        description="Take the first step toward rest and renewal in the Scottish Highlands."
        primaryCTA={{ label: 'Contact Us to Book', href: '/contact' }}
        secondaryCTA={{ label: 'The Retreat Experience', href: '/retreats/retreat-experience' }}
      />
    </>
  );
}
