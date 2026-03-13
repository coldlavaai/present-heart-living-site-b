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
  title: 'Yoga Classes Inverness | Near Inverness Yoga Studio',
  description:
    'Looking for yoga classes near Inverness? Present Heart Living offers welcoming yoga, Pilates and restorative practices in the Scottish Highlands. All levels welcome. Book your class today.',
  alternates: { canonical: 'https://presentheartliving.co.uk/yoga-classes-inverness' },
  openGraph: {
    title: 'Yoga Classes Inverness | Present Heart Living',
    description:
      'Welcoming yoga classes near Inverness in the Scottish Highlands. Seasonal Flow, Restorative Yoga, Yin Yoga, Pilates and more. Suitable for beginners and experienced practitioners. Book today.',
    url: 'https://presentheartliving.co.uk/yoga-classes-inverness',
    siteName: 'Present Heart Living',
    locale: 'en_GB',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Where are yoga classes held near Inverness?',
    answer:
      'Present Heart Living classes are held in Maryburgh, Ross-shire, which is a short drive from Inverness. The studio is easily accessible from central Inverness, Dingwall, Muir of Ord and surrounding areas.',
  },
  {
    question: 'Do I need experience to attend a yoga class near Inverness?',
    answer:
      'Not at all. Classes are designed to welcome complete beginners alongside more experienced practitioners. Movements are modified to suit individual needs, so everyone can practise at their own pace.',
  },
  {
    question: 'What types of yoga classes are available near Inverness?',
    answer:
      'Present Heart Living offers Seasonal Flow Yoga, Restorative Yoga, Yin Yoga, Pilates, Breathwork and Sound Bath sessions. Each class supports a different aspect of wellbeing, from dynamic movement to deep relaxation.',
  },
  {
    question: 'How much do yoga classes near Inverness cost?',
    answer:
      'Please contact Present Heart Living directly for current pricing and class packages. Drop-in sessions and multi-class passes are available to suit different needs.',
  },
  {
    question: 'Can I try a single yoga class before committing?',
    answer:
      'Yes. You are welcome to attend a single drop-in class to experience the practice and the environment before deciding to continue. There is no obligation to commit to a course.',
  },
];

export default function YogaClassesInvernessPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema as unknown as Record<string, unknown>,
          serviceSchema(
            'Yoga Classes Inverness',
            'Welcoming yoga classes near Inverness including Seasonal Flow, Restorative Yoga, Yin Yoga, Pilates, Breathwork and Sound Baths in the Scottish Highlands.',
            '/yoga-classes-inverness'
          ) as unknown as Record<string, unknown>,
        ]}
      />

      <Hero
        variant="narrow"
        title="Yoga Classes Near Inverness"
        subtitle="Welcoming yoga, Pilates and mindful movement practices in the Scottish Highlands — just a short drive from Inverness"
        bgGradient="from-forest/85 to-sage/60"
      />
      <Breadcrumbs
        items={[
          { name: 'Local Classes', url: '/locations' },
          { name: 'Yoga Classes Inverness', url: '/yoga-classes-inverness' },
        ]}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <p className="text-lg text-peat/70 leading-relaxed mb-6">
              For many people living in or around Inverness, yoga offers an opportunity to pause, move with
              awareness and reconnect with the body. Present Heart Living offers yoga classes designed to
              support both physical wellbeing and mental balance in the beautiful setting of the Scottish
              Highlands.
            </p>
            <p className="text-peat/70 leading-relaxed mb-6">
              Through mindful movement, breathwork and relaxation practices, students develop strength,
              flexibility and a greater sense of calm. Classes are welcoming and suitable for{' '}
              <Link href="/beginner-yoga-classes-highlands" className="text-sage hover:text-forest underline">
                beginners
              </Link>{' '}
              as well as experienced practitioners looking to deepen their practice.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">
              A Welcoming Yoga Practice for Inverness Students
            </h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Present Heart Living welcomes students from Inverness and surrounding areas who are looking
              for a supportive and inclusive yoga environment. Classes focus on developing awareness through
              movement and breath rather than achieving complex poses.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              This approach allows students to build strength and flexibility while cultivating a deeper
              connection with their bodies. Whether you are completely new to yoga or returning after time
              away, classes are designed to support your individual journey.
            </p>
            <p className="text-peat/70 leading-relaxed">
              The studio is conveniently located in Maryburgh, making it easily accessible from Inverness,
              Dingwall, Muir of Ord, Beauly and{' '}
              <Link href="/yoga-classes-black-isle" className="text-sage hover:text-forest underline">
                the Black Isle
              </Link>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Types of Classes */}
      <section className="py-16 md:py-20 bg-sand/10">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading
            title="Types of Yoga Classes Available"
            subtitle="A range of practices to support every aspect of your wellbeing"
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
                  A flowing practice combining breath and movement to build strength, flexibility and balance.
                  The practice reflects the natural rhythms of the Scottish Highlands seasons.
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
                  A deeply calming practice designed to release tension and support nervous system recovery.
                  Ideal for those experiencing stress or difficulty switching off.
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
                  A slower practice that works with connective tissues and encourages mindfulness through
                  stillness. Postures are held for several minutes, supporting joint mobility and deep awareness.
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
                  Pilates complements yoga by strengthening the muscles that support posture, stability and
                  healthy movement patterns. A mindful approach to core strength and body awareness.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">
              Benefits of Yoga Practice
            </h2>
            <p className="text-peat/70 leading-relaxed mb-6">
              Students attending classes from Inverness often report wide-ranging benefits for both body and
              mind. Yoga provides a sustainable way to support wellbeing while developing a stronger and more
              balanced relationship with the body.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Improved flexibility and range of motion',
                'Reduced stress and anxiety',
                'Increased body awareness and mindfulness',
                'Better sleep quality',
                'Greater mental clarity and focus',
                'Improved posture and alignment',
                'Stronger core and muscular endurance',
                'Connection with a supportive community',
              ].map((b) => (
                <div key={b} className="flex items-start gap-2 text-peat/70 text-sm">
                  <span className="text-sage mt-0.5">✓</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-mist/30">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            title="What Inverness Students Say"
            subtitle="Experiences from our yoga community"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <TestimonialCard
              quote="Audrey's classes have been transformative for me. After years of high-stress work, finding Present Heart Living was exactly what I needed. The calm, supportive environment makes every session feel like a sanctuary."
              author="Sarah M."
              context="Yoga student, Inverness"
            />
            <TestimonialCard
              quote="I drive from Inverness each week and the journey has become part of the experience — a chance to leave the busy city behind and arrive at a quieter, more mindful space. Truly worthwhile."
              author="David H."
              context="Seasonal Flow student, Inverness"
              delay={0.1}
            />
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">
              Join a Yoga Class Near Inverness
            </h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Present Heart Living is located within easy reach of Inverness, making it accessible for those
              seeking a calm and welcoming place to practise yoga in the Scottish Highlands. The drive from
              central Inverness takes approximately 20 minutes, offering a chance to leave the city behind and
              settle into a more peaceful pace.
            </p>
            <p className="text-peat/70 leading-relaxed">
              Whether you are beginning your yoga journey or looking to deepen an existing practice, you are
              warmly invited to{' '}
              <Link href="/contact" className="text-sage hover:text-forest underline">
                join a class
              </Link>
              . You may also be interested in our{' '}
              <Link href="/corporate-wellbeing" className="text-sage hover:text-forest underline">
                corporate wellbeing programmes
              </Link>{' '}
              for workplace sessions near Inverness.
            </p>
          </FadeIn>
        </div>
      </section>

      <FAQAccordion faqs={faqs} />

      <RelatedClasses
        classes={[
          {
            title: 'Yoga Classes Black Isle',
            href: '/yoga-classes-black-isle',
            description: 'Yoga and mindful movement for Black Isle communities.',
            icon: '🌊',
          },
          {
            title: 'Beginner Yoga',
            href: '/beginner-yoga-classes-highlands',
            description: 'A welcoming introduction to yoga for first-time students.',
            icon: '🌱',
          },
          {
            title: 'Pilates Classes',
            href: '/pilates-classes-highlands',
            description: 'Build core strength and improve posture.',
            icon: '💪',
          },
        ]}
      />

      <CTABanner
        heading="Start Your Yoga Practice Near Inverness"
        description="Experience mindful movement and breath awareness in the Scottish Highlands. All levels welcome."
        primaryCTA={{ label: 'Book a Class', href: '/contact' }}
        secondaryCTA={{ label: 'View All Classes', href: '/classes' }}
      />
    </>
  );
}
