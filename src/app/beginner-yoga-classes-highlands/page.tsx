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
  title: 'Beginner Yoga Classes Highlands | Start Yoga with Confidence',
  description:
    'New to yoga? Beginner yoga classes in the Scottish Highlands with Present Heart Living. Gentle, welcoming sessions designed to help you build confidence, flexibility and wellbeing. Book your first class.',
  alternates: { canonical: 'https://presentheartliving.co.uk/beginner-yoga-classes-highlands' },
  openGraph: {
    title: 'Beginner Yoga Classes Highlands | Present Heart Living',
    description:
      'Start your yoga journey in the Scottish Highlands. Gentle, welcoming beginner yoga classes near Inverness. No experience needed. Build flexibility, reduce stress and feel more balanced.',
    url: 'https://presentheartliving.co.uk/beginner-yoga-classes-highlands',
    siteName: 'Present Heart Living',
    locale: 'en_GB',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Is yoga suitable for complete beginners?',
    answer:
      'Yes. Classes at Present Heart Living are designed to be accessible and welcoming for people with no previous yoga experience. You will be guided through every movement with clear instruction and support.',
  },
  {
    question: 'Do I need to be flexible to start yoga?',
    answer:
      'Not at all. Flexibility develops naturally over time as the body becomes stronger and more familiar with movement. Many students begin yoga precisely because they feel stiff or disconnected from their bodies.',
  },
  {
    question: 'What should I bring to my first yoga class?',
    answer:
      'Comfortable clothing that allows you to move easily and a yoga mat if you have one. Mats may also be provided at the studio. Arrive a few minutes early so you can settle into the space.',
  },
  {
    question: 'How often should beginners practise yoga?',
    answer:
      'Many beginners start with one class per week and gradually increase as they feel comfortable. Even practising once a week can bring noticeable benefits to flexibility, sleep and stress levels.',
  },
  {
    question: 'Which type of yoga is best for beginners?',
    answer:
      'All classes at Present Heart Living welcome beginners. Restorative Yoga and Yin Yoga are particularly gentle, while Seasonal Flow Yoga offers a more dynamic introduction. Audrey will help you find the right class for your needs.',
  },
];

export default function BeginnerYogaHighlandsPage() {
  return (
    <>
      <JsonLd
        data={
          serviceSchema(
            'Beginner Yoga Classes Highlands',
            'Welcoming beginner yoga classes in the Scottish Highlands designed to help newcomers build confidence, flexibility and wellbeing through mindful movement and breath awareness.',
            '/beginner-yoga-classes-highlands'
          ) as unknown as Record<string, unknown>
        }
      />

      <Hero
        variant="narrow"
        title="Beginner Yoga Classes in the Scottish Highlands"
        subtitle="A welcoming, supportive space to begin your yoga journey — no experience needed"
        bgGradient="from-sage/80 to-forest/60"
      />
      <Breadcrumbs
        items={[
          { name: 'Local Classes', url: '/locations' },
          { name: 'Beginner Yoga Classes', url: '/beginner-yoga-classes-highlands' },
        ]}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <p className="text-lg text-peat/70 leading-relaxed mb-6">
              Starting yoga for the first time can feel both exciting and slightly intimidating. Many people
              worry that they may not be flexible enough or experienced enough to attend a class.
            </p>
            <p className="text-peat/70 leading-relaxed mb-6">
              At Present Heart Living, beginner yoga classes are designed to be welcoming, supportive and
              accessible for everyone. You do not need any previous experience to begin. The focus is simply
              on learning to move with awareness, breathe more deeply and develop a comfortable
              relationship with your body.
            </p>
            <p className="text-peat/70 leading-relaxed">
              Classes introduce yoga in a calm and structured way, allowing you to build confidence while
              discovering the benefits of mindful movement in the beautiful setting of the Scottish Highlands
              near{' '}
              <Link href="/yoga-classes-inverness" className="text-sage hover:text-forest underline">
                Inverness
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-20 bg-sand/10">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading
            title="What to Expect in a Beginner Yoga Class"
            subtitle="Calm, structured sessions designed for newcomers"
          />
          <FadeIn delay={0.1}>
            <div className="mt-8">
              <p className="text-peat/70 leading-relaxed mb-6">
                Beginner classes are designed to help students feel comfortable while gradually introducing
                the foundations of yoga practice. A typical class may include:
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'Gentle warm-up movements to prepare the body',
                  'Simple breathing techniques for relaxation and focus',
                  'Foundational yoga postures with clear guidance',
                  'Modifications to suit individual needs and abilities',
                  'A closing guided relaxation period',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-peat/70">
                    <span className="text-sage mt-0.5">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-peat/70 leading-relaxed">
                Students are encouraged to move at their own pace and modify movements when needed. The
                aim is not to achieve perfect poses but to develop awareness of how the body moves and feels.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Flexibility */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">
              Do You Need to Be Flexible to Start Yoga?
            </h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              One of the most common questions people ask before attending their first yoga class is whether
              they need to be flexible. The answer is simply: no.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              Yoga is not something that requires flexibility before you begin. Flexibility develops naturally
              over time as the body becomes stronger and more familiar with movement. Many students begin
              yoga precisely because they feel stiff or disconnected from their bodies.
            </p>
            <p className="text-peat/70 leading-relaxed">
              Beginner classes at Present Heart Living focus on creating a safe environment where everyone
              can explore movement comfortably, regardless of age or physical condition.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-sand/10">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading
            title="Benefits of Beginner Yoga Practice"
            subtitle="Even gentle practice can have significant effects on body and mind"
          />
          <FadeIn delay={0.1}>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Greater flexibility and range of motion',
                'Reduced stress and tension',
                'Improved sleep quality',
                'Better posture and alignment',
                'Increased energy and vitality',
                'Deeper breathing awareness',
                'Greater body confidence',
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

      {/* Who Classes Are For */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">
              A Welcoming Environment for New Students
            </h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Present Heart Living was created to offer a calm and supportive environment where individuals
              can explore yoga without pressure or expectation. Classes are suitable for people who may be:
            </p>
            <div className="space-y-2 mb-6">
              {[
                'Completely new to yoga',
                'Returning to movement after a break',
                'Seeking a slower and more mindful practice',
                'Looking for ways to reduce stress and improve sleep',
                'Curious about yoga but unsure where to start',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-peat/70">
                  <span className="text-sage mt-0.5">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-peat/70 leading-relaxed">
              Everyone is encouraged to approach yoga with curiosity and self-compassion. Whether you live
              in{' '}
              <Link href="/yoga-classes-inverness" className="text-sage hover:text-forest underline">
                Inverness
              </Link>
              , on the{' '}
              <Link href="/yoga-classes-black-isle" className="text-sage hover:text-forest underline">
                Black Isle
              </Link>{' '}
              or anywhere across the Scottish Highlands, you are warmly welcomed.
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

      {/* Your First Class */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">
              Your First Yoga Class
            </h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              If you are considering attending your first yoga class, there are only a few simple things to
              know:
            </p>
            <div className="space-y-3 mb-6">
              {[
                'Wear comfortable clothing that allows you to move easily',
                'Bring a yoga mat if you have one (mats may also be provided)',
                'Arrive a few minutes early so you can settle into the space',
                'Come with an open mind and a willingness to explore',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-peat/70">
                  <span className="text-sage mt-0.5">→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-peat/70 leading-relaxed">
              Most importantly, there is no need to feel nervous. Every experienced practitioner was once a
              complete beginner. Learn more about{' '}
              <Link href="/about/audrey-buchanan" className="text-sage hover:text-forest underline">
                Audrey Buchanan
              </Link>{' '}
              and her supportive approach to teaching.
            </p>
          </FadeIn>
        </div>
      </section>

      <FAQAccordion faqs={faqs} />

      <RelatedClasses
        classes={[
          {
            title: 'Restorative Yoga',
            href: '/classes/restorative-yoga',
            description: 'A gentle practice ideal for those new to yoga.',
            icon: '🕊️',
          },
          {
            title: 'Yin Yoga',
            href: '/classes/yin-yoga',
            description: 'A slower practice supporting flexibility and calm.',
            icon: '🌙',
          },
          {
            title: 'Seasonal Flow Yoga',
            href: '/classes/seasonal-flow-yoga',
            description: 'A dynamic practice for when you are ready to flow.',
            icon: '🌿',
          },
        ]}
      />

      <CTABanner
        heading="Begin Your Yoga Journey in the Highlands"
        description="Whether your goal is flexibility, stress relief or simply time for yourself — yoga offers a supportive path forward."
        primaryCTA={{ label: 'Book Your First Class', href: '/contact' }}
        secondaryCTA={{ label: 'View All Classes', href: '/classes' }}
      />
    </>
  );
}
