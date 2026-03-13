import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';
import FAQAccordion from '@/components/FAQAccordion';
import RelatedClasses from '@/components/RelatedClasses';
import TestimonialCard from '@/components/TestimonialCard';
import JsonLd from '@/components/JsonLd';
import { localBusinessSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Yoga Classes Black Isle | Near Fortrose & Cromarty',
  description:
    'Yoga classes near the Black Isle with Present Heart Living. Welcoming yoga, Pilates and restorative practices in the Scottish Highlands. Serving Fortrose, Rosemarkie, Cromarty and beyond. Book today.',
  alternates: { canonical: 'https://presentheartliving.co.uk/yoga-classes-black-isle' },
  openGraph: {
    title: 'Yoga Classes Black Isle | Present Heart Living',
    description:
      'Yoga classes for Black Isle communities including Fortrose, Rosemarkie, Avoch, Cromarty and Munlochy. Mindful yoga, Pilates and breathwork in the Scottish Highlands.',
    url: 'https://presentheartliving.co.uk/yoga-classes-black-isle',
    siteName: 'Present Heart Living',
    locale: 'en_GB',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Where are yoga classes held near the Black Isle?',
    answer:
      'Present Heart Living classes take place in Maryburgh, Ross-shire, which is easily accessible from communities across the Black Isle including Fortrose, Rosemarkie, Avoch, Cromarty and Munlochy.',
  },
  {
    question: 'Are yoga classes suitable for beginners living on the Black Isle?',
    answer:
      'Absolutely. All classes are designed to be accessible and welcoming for people with no previous experience. Movements can be modified to suit individual needs, so you can practise comfortably at your own pace.',
  },
  {
    question: 'What styles of yoga are available near the Black Isle?',
    answer:
      'Present Heart Living offers Seasonal Flow Yoga, Restorative Yoga, Yin Yoga, Pilates, Breathwork and Sound Bath sessions. Each style offers a different approach to supporting wellbeing through movement and breath.',
  },
  {
    question: 'How far is the studio from the Black Isle?',
    answer:
      'The studio in Maryburgh is approximately 15-25 minutes from most Black Isle communities. Many students find the journey a peaceful transition from daily life into their yoga practice.',
  },
];

export default function YogaClassesBlackIslePage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema as unknown as Record<string, unknown>,
          serviceSchema(
            'Yoga Classes Black Isle',
            'Welcoming yoga and Pilates classes for Black Isle communities in the Scottish Highlands, including Seasonal Flow, Restorative Yoga, Yin Yoga and Breathwork.',
            '/yoga-classes-black-isle'
          ) as unknown as Record<string, unknown>,
        ]}
      />

      <Hero
        variant="narrow"
        title="Yoga Classes on the Black Isle"
        subtitle="Mindful yoga, Pilates and breathwork for communities across the Black Isle and Scottish Highlands"
        bgGradient="from-forest/80 to-sage/50"
      />
      <Breadcrumbs
        items={[
          { name: 'Local Classes', url: '/locations' },
          { name: 'Yoga Classes Black Isle', url: '/yoga-classes-black-isle' },
        ]}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <p className="text-lg text-peat/70 leading-relaxed mb-6">
              The Black Isle is known for its beautiful landscapes, strong sense of community and connection
              to nature. Yoga offers a natural complement to this environment, encouraging movement,
              breathing and awareness that support a balanced way of living.
            </p>
            <p className="text-peat/70 leading-relaxed mb-6">
              Present Heart Living offers yoga and Pilates classes designed to help individuals slow down,
              reconnect with their bodies and cultivate a greater sense of wellbeing. Classes are welcoming,
              inclusive and suitable for{' '}
              <Link href="/beginner-yoga-classes-highlands" className="text-sage hover:text-forest underline">
                beginners
              </Link>{' '}
              as well as those with more experience.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">
              A Calm and Supportive Yoga Environment
            </h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Present Heart Living provides a welcoming space for students from across the Black Isle
              including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
              {['Fortrose', 'Rosemarkie', 'Avoch', 'Cromarty', 'Munlochy', 'Conon Bridge'].map((town) => (
                <div key={town} className="flex items-center gap-2 text-peat/70 text-sm">
                  <span className="text-sage">•</span>
                  <span>{town}</span>
                </div>
              ))}
            </div>
            <p className="text-peat/70 leading-relaxed">
              Classes encourage mindful movement and breath awareness, helping students develop strength
              and flexibility while supporting mental clarity and emotional balance. The studio is a short
              drive from most Black Isle communities, and many students find the journey itself becomes part
              of the transition from a busy day into a calmer, more reflective space.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Yoga Practices Offered */}
      <section className="py-16 md:py-20 bg-sand/10">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading
            title="Yoga Practices Offered"
            subtitle="Classes designed to support every aspect of your wellbeing"
          />
          <div className="mt-10 space-y-8">
            <FadeIn delay={0.1}>
              <div>
                <h3 className="font-heading text-xl text-forest mb-2">
                  <Link href="/classes/seasonal-flow-yoga" className="hover:text-sage transition-colors">
                    Seasonal Flow Yoga
                  </Link>
                </h3>
                <p className="text-peat/70 leading-relaxed">
                  A flowing yoga practice combining movement and breath that reflects the natural rhythms of
                  the Scottish Highlands seasons.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <h3 className="font-heading text-xl text-forest mb-2">
                  <Link href="/classes/restorative-yoga" className="hover:text-sage transition-colors">
                    Restorative Yoga
                  </Link>
                </h3>
                <p className="text-peat/70 leading-relaxed">
                  A slow and deeply relaxing practice designed to support rest and recovery. Ideal for those
                  experiencing fatigue or stress.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <h3 className="font-heading text-xl text-forest mb-2">
                  <Link href="/classes/yin-yoga" className="hover:text-sage transition-colors">
                    Yin Yoga
                  </Link>
                </h3>
                <p className="text-peat/70 leading-relaxed">
                  A reflective practice that focuses on joint mobility and connective tissue health through
                  extended holds and mindful awareness.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div>
                <h3 className="font-heading text-xl text-forest mb-2">
                  <Link href="/pilates-classes-highlands" className="hover:text-sage transition-colors">
                    Pilates Classes
                  </Link>
                </h3>
                <p className="text-peat/70 leading-relaxed">
                  Pilates supports core strength, posture and healthy movement patterns. A mindful complement
                  to yoga practice.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Yoga and Wellbeing */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">
              Yoga and Wellbeing on the Black Isle
            </h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              For many people living on the Black Isle, yoga provides a valuable way to balance busy
              lifestyles while staying connected to wellbeing. The surrounding natural beauty of the area
              already supports a sense of calm, and yoga practice deepens that connection through conscious
              movement and breath.
            </p>
            <p className="text-peat/70 leading-relaxed">
              Regular practice can support both physical health and emotional balance, helping students
              develop a more mindful relationship with movement and breath. Many students also enjoy
              exploring our{' '}
              <Link href="/retreats" className="text-sage hover:text-forest underline">
                yoga retreats in Scotland
              </Link>{' '}
              for deeper immersion in the practice.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 bg-mist/30">
        <div className="max-w-2xl mx-auto px-4">
          <TestimonialCard
            quote="I was nervous about trying yoga as a complete beginner, but Audrey made me feel so welcome from the very first class. Six months on, I'm more flexible, sleeping better and feeling genuinely calmer."
            author="James T."
            context="Beginner student, Black Isle"
          />
        </div>
      </section>

      <FAQAccordion faqs={faqs} />

      <RelatedClasses
        classes={[
          {
            title: 'Yoga Classes Inverness',
            href: '/yoga-classes-inverness',
            description: 'Yoga classes accessible from Inverness and surrounding areas.',
            icon: '🏔️',
          },
          {
            title: 'Beginner Yoga',
            href: '/beginner-yoga-classes-highlands',
            description: 'A welcoming introduction for first-time yoga students.',
            icon: '🌱',
          },
          {
            title: 'Sound Baths',
            href: '/classes/sound-baths',
            description: 'Immersive relaxation through sound and vibration.',
            icon: '🔔',
          },
        ]}
      />

      <CTABanner
        heading="Begin Your Yoga Practice on the Black Isle"
        description="Join a welcoming yoga community in the Scottish Highlands. All levels and experience welcome."
        primaryCTA={{ label: 'Book a Class', href: '/contact' }}
        secondaryCTA={{ label: 'Explore Classes', href: '/classes' }}
      />
    </>
  );
}
