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
import { serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Pilates Classes Highlands | Scottish Highlands Pilates',
  description:
    'Pilates classes in the Scottish Highlands with Present Heart Living. Improve posture, build core strength and develop body awareness in a calm, supportive environment. All levels welcome. Book today.',
  alternates: { canonical: 'https://presentheartliving.co.uk/pilates-classes-highlands' },
  openGraph: {
    title: 'Pilates Classes Highlands | Present Heart Living',
    description:
      'Mindful Pilates classes in the Scottish Highlands near Inverness. Strengthen your core, improve posture and support long-term physical wellbeing. Suitable for beginners.',
    url: 'https://presentheartliving.co.uk/pilates-classes-highlands',
    siteName: 'Present Heart Living',
    locale: 'en_GB',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Do I need Pilates experience to attend?',
    answer:
      'No. Pilates classes at Present Heart Living are designed to be accessible for complete beginners. Exercises are carefully explained and can be modified to suit individual needs and abilities.',
  },
  {
    question: 'What is the difference between Pilates and yoga?',
    answer:
      'Pilates focuses primarily on controlled movement, alignment and core strength, while yoga often emphasises flexibility, breath awareness and mindfulness. Together they create a balanced approach to movement. Many students at Present Heart Living practise both.',
  },
  {
    question: 'Can Pilates help with back pain?',
    answer:
      'Pilates strengthens the muscles that support the spine, which can help reduce back pain over time. However, if you have a specific medical condition, please consult your healthcare provider before starting a new exercise programme.',
  },
  {
    question: 'What should I wear to a Pilates class?',
    answer:
      'Comfortable clothing that allows you to move freely. Pilates is usually practised in socks or bare feet. Bring a mat if you have one, though mats may also be available at the studio.',
  },
  {
    question: 'How often should I practise Pilates?',
    answer:
      'Most students benefit from one to two sessions per week. Consistency matters more than frequency — regular practice, even once a week, can support noticeable improvements in strength and posture.',
  },
];

export default function PilatesClassesHighlandsPage() {
  return (
    <>
      <JsonLd
        data={
          serviceSchema(
            'Pilates Classes Highlands',
            'Mindful Pilates classes in the Scottish Highlands designed to improve posture, build core strength and develop body awareness. Suitable for all levels.',
            '/pilates-classes-highlands'
          ) as unknown as Record<string, unknown>
        }
      />

      <Hero
        variant="narrow"
        title="Pilates Classes in the Scottish Highlands"
        subtitle="Controlled movement, alignment and core strength in a calm and supportive environment"
        bgGradient="from-forest/80 to-sage/55"
      />
      <Breadcrumbs
        items={[
          { name: 'Local Classes', url: '/locations' },
          { name: 'Pilates Classes Highlands', url: '/pilates-classes-highlands' },
        ]}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <p className="text-lg text-peat/70 leading-relaxed mb-6">
              Pilates is a practice designed to strengthen the body, improve posture and develop greater
              awareness of movement. At Present Heart Living, Pilates classes are taught with a mindful
              approach that complements our{' '}
              <Link href="/classes" className="text-sage hover:text-forest underline">
                yoga practices
              </Link>
              .
            </p>
            <p className="text-peat/70 leading-relaxed mb-6">
              The focus is on controlled movement, alignment and building strength that supports long-term
              physical wellbeing. Classes are suitable for{' '}
              <Link href="/beginner-yoga-classes-highlands" className="text-sage hover:text-forest underline">
                beginners
              </Link>{' '}
              and those looking to develop a stronger foundation for healthy movement.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Benefits of Pilates</h2>
            <p className="text-peat/70 leading-relaxed mb-6">
              Pilates offers a wide range of benefits for people of all ages and levels of experience.
              Through consistent practice, Pilates helps build strength and resilience throughout the body.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Improved core strength and stability',
                'Better posture and spinal alignment',
                'Increased flexibility and mobility',
                'Reduced back pain and tension',
                'Improved movement awareness',
                'Greater balance and coordination',
                'Support for injury recovery',
                'Enhanced mind-body connection',
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

      {/* Pilates and Yoga */}
      <section className="py-16 md:py-20 bg-sand/10">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading
            title="Pilates and Yoga Working Together"
            subtitle="A balanced approach to movement and wellbeing"
          />
          <FadeIn delay={0.1}>
            <div className="mt-8">
              <p className="text-peat/70 leading-relaxed mb-4">
                Pilates and yoga complement one another by developing both strength and flexibility. While
                yoga often focuses on breath and mobility, Pilates strengthens the muscles that stabilise the
                body and support healthy posture.
              </p>
              <p className="text-peat/70 leading-relaxed mb-4">
                Together they create a balanced approach to movement and wellbeing. Many Present Heart
                Living students combine Pilates with practices such as{' '}
                <Link href="/classes/seasonal-flow-yoga" className="text-sage hover:text-forest underline">
                  Seasonal Flow Yoga
                </Link>{' '}
                or{' '}
                <Link href="/classes/yin-yoga" className="text-sage hover:text-forest underline">
                  Yin Yoga
                </Link>{' '}
                for a well-rounded weekly practice.
              </p>
              <p className="text-peat/70 leading-relaxed">
                Audrey Buchanan is currently undertaking the Lolita Legacy Comprehensive Pilates Training,
                working towards qualification as a third-generation Pilates teacher. This deep commitment to
                the discipline ensures that classes are taught with genuine understanding and care. Learn more
                about{' '}
                <Link href="/about/audrey-buchanan" className="text-sage hover:text-forest underline">
                  Audrey&apos;s qualifications and experience
                </Link>
                .
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who For */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">
              Who Pilates Classes Are For
            </h2>
            <p className="text-peat/70 leading-relaxed mb-6">
              Pilates classes at Present Heart Living are suitable for a wide range of students, including:
            </p>
            <div className="space-y-3 mb-6">
              {[
                'Complete beginners new to Pilates',
                'People returning to exercise after a break',
                'Those looking to improve posture and reduce back pain',
                'Individuals seeking a mindful approach to strength training',
                'Yoga practitioners wanting to build complementary core strength',
                'Anyone living in the Scottish Highlands, including Inverness, Black Isle and surrounding areas',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-peat/70">
                  <span className="text-sage mt-0.5">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 bg-mist/30">
        <div className="max-w-2xl mx-auto px-4">
          <TestimonialCard
            quote="Pilates with Audrey has made such a difference to my back pain. Her clear, patient teaching style makes every exercise feel achievable, and I've noticed real improvement in my posture and core strength."
            author="Margaret W."
            context="Pilates student, Dingwall"
          />
        </div>
      </section>

      <FAQAccordion faqs={faqs} />

      <RelatedClasses
        classes={[
          {
            title: 'Seasonal Flow Yoga',
            href: '/classes/seasonal-flow-yoga',
            description: 'A flowing practice to complement Pilates strength work.',
            icon: '🌿',
          },
          {
            title: 'Restorative Yoga',
            href: '/classes/restorative-yoga',
            description: 'Deep relaxation to balance your Pilates practice.',
            icon: '🕊️',
          },
          {
            title: 'Yoga Classes Inverness',
            href: '/yoga-classes-inverness',
            description: 'All yoga classes accessible from the Inverness area.',
            icon: '🏔️',
          },
        ]}
      />

      <CTABanner
        heading="Join a Pilates Class in the Highlands"
        description="Build strength, improve posture and move with awareness. All levels welcome."
        primaryCTA={{ label: 'Book a Pilates Class', href: '/contact' }}
        secondaryCTA={{ label: 'View All Classes', href: '/classes' }}
      />
    </>
  );
}
