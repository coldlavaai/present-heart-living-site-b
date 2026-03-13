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
import { localBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'International Yoga Retreats | Wellness Travel with Present Heart Living',
  description:
    'International yoga retreats with Present Heart Living. Combine travel with rest, reflection and wellbeing in inspiring destinations. Yoga, breathwork and mindfulness experiences designed to restore and inspire. Enquire today.',
  alternates: { canonical: 'https://presentheartliving.co.uk/retreats/international-retreats' },
  openGraph: {
    title: 'International Yoga Retreats | Wellness Travel with Present Heart Living',
    description:
      'International yoga retreats with Present Heart Living. Combine travel with rest, reflection and wellbeing in inspiring destinations beyond Scotland.',
    url: 'https://presentheartliving.co.uk/retreats/international-retreats',
    siteName: 'Present Heart Living',
    locale: 'en_GB',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Where do international retreats take place?',
    answer:
      'International retreats are held in carefully selected destinations chosen for their natural beauty and suitability for yoga and wellbeing practices. Locations have previously included Mediterranean and European destinations.',
  },
  {
    question: 'Are international retreats suitable for beginners?',
    answer:
      'Yes. All practices are adapted to suit individual experience levels. Whether you are new to yoga or have been practising for years, you will be supported throughout the retreat.',
  },
  {
    question: 'What is typically included in an international retreat?',
    answer:
      'International retreats typically include accommodation, meals, daily yoga and breathwork sessions, guided relaxation and excursions. Flights are usually arranged independently by participants.',
  },
  {
    question: 'How do international retreats differ from UK retreats?',
    answer:
      'International retreats offer the additional experience of a new environment and culture. They tend to be longer (five to seven days) and include more free time for personal exploration alongside the structured yoga and mindfulness programme.',
  },
];

export default function InternationalRetreatsPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema as unknown as Record<string, unknown>} />

      <Hero
        variant="narrow"
        title="International Yoga Retreats"
        subtitle="Combine mindful travel with rest, reflection and wellbeing in inspiring destinations"
        bgGradient="from-forest/80 to-clay/50"
      />
      <Breadcrumbs
        items={[
          { name: 'Retreats', url: '/retreats' },
          { name: 'International Retreats', url: '/retreats/international-retreats' },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <p className="text-lg text-peat/70 leading-relaxed mb-6">
              International retreats offer the opportunity to combine travel with meaningful time for rest, reflection and wellbeing. These retreats are designed to take place in inspiring locations where natural surroundings encourage a deeper sense of calm and presence.
            </p>
            <p className="text-peat/70 leading-relaxed mb-6">
              Participants are invited to step away from familiar routines and experience yoga and mindful practices within new environments. The change of scenery often supports deeper relaxation and fresh perspective — a complement to the <Link href="/retreats/uk-retreats" className="text-sage hover:text-forest underline">yoga retreat Scotland experiences</Link> offered closer to home.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">
              What International Retreats Include
            </h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              The structure of international retreats is similar to our UK retreats, combining yoga sessions, breathwork practices and time for relaxation. However, these retreats also allow participants to explore new landscapes, cultures and experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {[
                'Daily yoga practices for all levels',
                'Breathwork and meditation sessions',
                'Guided relaxation and yoga nidra',
                'Cultural excursions and exploration',
                'Nourishing local cuisine',
                'Accommodation in inspiring settings',
                'Free time for personal reflection',
                'Small supportive group atmosphere',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-peat/70 text-sm">
                  <span className="text-sage mt-0.5">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-peat/70 leading-relaxed">
              The intention is to create a balanced rhythm between guided practices and personal time. Students may choose to explore the surroundings, rest quietly or participate in group activities depending on what feels supportive for them.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">
              A Nourishing Way to Travel
            </h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              International retreats offer an opportunity to deepen yoga practice while enjoying travel in a way that feels nourishing and restorative. Unlike conventional holidays, these experiences are designed to support genuine rest and reflection.
            </p>
            <p className="text-peat/70 leading-relaxed">
              Many participants find that returning from an international retreat feels quite different to returning from a typical holiday — with a renewed sense of clarity, calm and connection to their practice. Between international retreats, our <Link href="/classes" className="text-sage hover:text-forest underline">regular classes in the Highlands</Link> help maintain that sense of balance.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 bg-sand/10">
        <div className="max-w-2xl mx-auto px-4">
          <TestimonialCard
            quote="The international retreat was the most restorative holiday I have ever experienced. Yoga at sunrise, beautiful surroundings and Audrey's calm, thoughtful guidance made it truly unforgettable."
            author="Caroline W."
            context="International retreat attendee"
          />
        </div>
      </section>

      <FAQAccordion faqs={faqs} />

      <RelatedClasses
        title="More from Present Heart Living"
        classes={[
          { title: 'UK Retreats', href: '/retreats/uk-retreats', description: 'Yoga retreat Scotland experiences in the stunning Highlands.', icon: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
          { title: 'The Retreat Experience', href: '/retreats/retreat-experience', description: 'Discover what to expect on a Present Heart Living retreat.', icon: '✨' },
          { title: 'Breathwork', href: '/classes/breathwork', description: 'Deepen your breathing practice between retreats.', icon: '🌬️' },
        ]}
      />

      <CTABanner
        heading="Interested in an International Retreat?"
        description="Contact us to express interest in upcoming international retreat experiences or to be added to our mailing list."
        primaryCTA={{ label: 'Get in Touch', href: '/contact' }}
        secondaryCTA={{ label: 'UK Retreats', href: '/retreats/uk-retreats' }}
      />
    </>
  );
}
