import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';
import FAQAccordion from '@/components/FAQAccordion';
import TestimonialCard from '@/components/TestimonialCard';
import ClassCard from '@/components/ClassCard';
import JsonLd from '@/components/JsonLd';
import { localBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Yoga Retreats Scotland & UK | Highlands Wellbeing Retreats',
  description:
    'Discover yoga retreats in Scotland and the UK with Present Heart Living. Yoga retreat Scotland experiences combining yoga, breathwork, mindfulness and time in nature in the Scottish Highlands. Explore retreats today.',
  alternates: { canonical: 'https://presentheartliving.co.uk/retreats' },
  openGraph: {
    title: 'Yoga Retreats Scotland & UK | Highlands Wellbeing Retreats',
    description:
      'Discover yoga retreats in Scotland and the UK with Present Heart Living. Yoga retreat Scotland experiences combining yoga, breathwork, mindfulness and time in nature in the Scottish Highlands.',
    url: 'https://presentheartliving.co.uk/retreats',
    siteName: 'Present Heart Living',
    locale: 'en_GB',
    type: 'website',
  },
};

const retreatTypes = [
  {
    title: 'UK Yoga Retreats',
    description:
      'Step away from daily routines and immerse yourself in mindful movement and nature across stunning UK locations, with a focus on yoga retreat Scotland experiences.',
    href: '/retreats/uk-retreats',
    icon: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  },
  {
    title: 'International Retreats',
    description:
      'Combine travel with meaningful time for rest, reflection and wellbeing in inspiring international destinations.',
    href: '/retreats/international-retreats',
    icon: '🌍',
  },
  {
    title: 'The Retreat Experience',
    description:
      'Discover what to expect on a Present Heart Living retreat — from daily practices to meals, nature and rest.',
    href: '/retreats/retreat-experience',
    icon: '✨',
  },
];

const faqs = [
  {
    question: 'Do I need to be experienced in yoga to attend a retreat?',
    answer:
      'Not at all. Retreats are designed to be welcoming for both beginners and experienced practitioners. All practices can be adapted to suit individual needs and experience levels.',
  },
  {
    question: 'What is included in a yoga retreat Scotland experience?',
    answer:
      'Retreats typically include yoga sessions, breathwork practices, guided relaxation, meals, accommodation and time in nature. Specific inclusions vary by retreat and are detailed on each retreat listing.',
  },
  {
    question: 'How long are the retreats?',
    answer:
      'UK retreats are often weekend experiences (Friday to Sunday), while international retreats may run for five to seven days. Each retreat listing provides specific dates and duration.',
  },
  {
    question: 'Can I attend a retreat on my own?',
    answer:
      'Absolutely. Many participants attend retreats solo and find it a wonderful opportunity for personal reflection. The supportive group environment also makes it easy to connect with like-minded individuals.',
  },
];

export default function RetreatsPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema as unknown as Record<string, unknown>} />

      <Hero
        variant="narrow"
        title="Yoga and Wellbeing Retreats"
        subtitle="Step away from everyday life and reconnect with yourself through yoga retreat Scotland experiences in stunning natural settings"
        bgGradient="from-forest/85 to-sage/60"
      />
      <Breadcrumbs items={[{ name: 'Retreats', url: '/retreats' }]} />

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">
              Step Away from Everyday Life
            </h2>
            <p className="text-lg text-peat/70 leading-relaxed mb-6">
              Retreats offer the opportunity to slow down and reconnect with yourself in supportive natural environments. Present Heart Living retreats combine yoga, breathwork and mindfulness practices with time in nature, creating space for reflection, rest and renewed energy.
            </p>
            <p className="text-peat/70 leading-relaxed mb-6">
              Whether you choose a <Link href="/retreats/uk-retreats" className="text-sage hover:text-forest underline">yoga retreat in Scotland</Link> amid the stunning Highland landscapes or an <Link href="/retreats/international-retreats" className="text-sage hover:text-forest underline">international retreat</Link> in an inspiring destination, each experience is designed to support deep rest, personal reflection and meaningful connection.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">
              What to Expect on a Yoga Retreat Scotland
            </h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Retreats may include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {[
                'Yoga practices suited to all levels',
                'Breathwork and pranayama sessions',
                'Guided relaxation and yoga nidra',
                'Sound bath experiences',
                'Time in nature and Highland walks',
                'Nourishing shared meals',
                'Journaling and reflection time',
                'Small group connection',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-peat/70 text-sm">
                  <span className="text-sage mt-0.5">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-peat/70 leading-relaxed">
              These experiences create space for rest, reflection and personal renewal. Learn more about <Link href="/retreats/retreat-experience" className="text-sage hover:text-forest underline">what a retreat day looks like</Link>.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">
              Who Retreats Are For
            </h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Yoga retreats in Scotland and beyond are suitable for people seeking:
            </p>
            <ul className="space-y-2 text-peat/70 mb-6">
              <li className="flex items-start gap-2"><span className="text-sage">•</span>Rest from busy routines and everyday demands</li>
              <li className="flex items-start gap-2"><span className="text-sage">•</span>A deeper yoga and mindfulness practice</li>
              <li className="flex items-start gap-2"><span className="text-sage">•</span>Time for quiet reflection and personal growth</li>
              <li className="flex items-start gap-2"><span className="text-sage">•</span>Connection with nature in the Scottish Highlands</li>
              <li className="flex items-start gap-2"><span className="text-sage">•</span>A supportive group environment</li>
            </ul>
            <p className="text-peat/70 leading-relaxed">
              Whether you are new to yoga or have an established practice, retreats provide a nourishing space to pause and restore. Many retreat participants also attend our regular <Link href="/classes" className="text-sage hover:text-forest underline">yoga and Pilates classes</Link> in the Scottish Highlands.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Retreat Types */}
      <section className="py-16 md:py-24 bg-sand/10">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            title="Explore Our Retreats"
            subtitle="Discover yoga retreat experiences in Scotland and beyond"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {retreatTypes.map((r, i) => (
              <ClassCard key={r.href} {...r} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 bg-mist/30">
        <div className="max-w-2xl mx-auto px-4">
          <TestimonialCard
            quote="The retreat in Scotland was a truly transformative experience. The combination of yoga, nature and Audrey's gentle guidance created something really special. I returned home feeling completely renewed."
            author="Margaret L."
            context="Retreat attendee, Edinburgh"
          />
        </div>
      </section>

      <FAQAccordion faqs={faqs} />

      <CTABanner
        heading="Ready for a Yoga Retreat in Scotland?"
        description="Explore upcoming retreat dates and discover an opportunity to pause, restore and reconnect with yourself in the Scottish Highlands."
        primaryCTA={{ label: 'View UK Retreats', href: '/retreats/uk-retreats' }}
        secondaryCTA={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
