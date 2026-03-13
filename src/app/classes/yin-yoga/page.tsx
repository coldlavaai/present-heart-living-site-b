import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import CTABanner from '@/components/CTABanner';
import FAQAccordion from '@/components/FAQAccordion';
import RelatedClasses from '@/components/RelatedClasses';
import TestimonialCard from '@/components/TestimonialCard';
import JsonLd from '@/components/JsonLd';
import { courseSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Yin Yoga Classes in the Scottish Highlands | Inverness',
  description:
    'Yin yoga classes in the Scottish Highlands with Present Heart Living. Slow, mindful practice supporting flexibility, joint mobility and deep awareness. Book your class today.',
  alternates: { canonical: 'https://presentheartliving.co.uk/classes/yin-yoga' },
};

const faqs = [
  { question: 'How long are postures held in Yin Yoga?', answer: 'Postures are typically held for three to five minutes, sometimes longer. This allows gentle stress to be applied to connective tissues, supporting joint mobility and flexibility over time.' },
  { question: 'Is Yin Yoga suitable for beginners?', answer: 'Yes. The slower pace makes Yin Yoga very accessible for beginners. Props are used to support comfortable positioning, and all postures can be modified to suit your body.' },
  { question: 'What is the difference between Yin Yoga and Restorative Yoga?', answer: 'Yin Yoga applies gentle stress to connective tissues for mobility and flexibility, while Restorative Yoga focuses on complete passive relaxation using full prop support. Both are slow practices but serve different purposes.' },
  { question: 'Can Yin Yoga help with stiffness?', answer: 'Regular practice can significantly improve flexibility and reduce stiffness by gently working with the fascia, ligaments and joints. Many students notice improvements within a few weeks of regular practice.' },
];

export default function YinYogaPage() {
  return (
    <>
      <JsonLd data={courseSchema('Yin Yoga', 'A slower, reflective yoga practice supporting joint mobility, connective tissue health and mindful awareness in the Scottish Highlands.', 'yin-yoga') as unknown as Record<string, unknown>} />

      <Hero
        variant="narrow"
        title="Yin Yoga"
        subtitle="A slower, reflective practice supporting flexibility, joint mobility and deep mindful awareness"
        bgGradient="from-forest/80 to-sage/50"
      />
      <Breadcrumbs items={[{ name: 'Classes', url: '/classes' }, { name: 'Yin Yoga', url: '/classes/yin-yoga' }]} />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <p className="text-lg text-peat/70 leading-relaxed mb-6">
              Yin Yoga offers a slower and more reflective approach to yoga practice. Instead of flowing between movements, postures are held for several minutes, allowing gentle stress to be applied to connective tissues such as fascia, ligaments and joints. Here in the Scottish Highlands, the natural stillness of the landscape mirrors the quiet introspection of Yin practice.
            </p>
            <p className="text-peat/70 leading-relaxed mb-6">
              This slower pace allows the body to gradually release tension while encouraging stillness and awareness. Students are invited to remain present with sensations that arise within the body while observing their breath and mental responses — a practice of mindfulness through the body.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">What to Expect in a Yin Yoga Class</h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              A typical class at Present Heart Living near Inverness includes a series of seated or reclining postures held for extended periods, typically three to five minutes each. Between postures, students are encouraged to rest and observe how their bodies feel, noticing the subtle release and opening that occurs.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              The practice complements more active forms of yoga by creating space for quiet observation and relaxation. While dynamic styles like <Link href="/classes/seasonal-flow-yoga" className="text-sage hover:text-forest underline">Seasonal Flow Yoga</Link> work with muscle strength and movement, Yin Yoga focuses on deeper structural tissues that support mobility and joint health.
            </p>
            <p className="text-peat/70 leading-relaxed">
              Props such as bolsters, blocks and blankets are used throughout to ensure comfort, making the practice accessible to all bodies and experience levels. <Link href="/about/audrey-buchanan" className="text-sage hover:text-forest underline">Audrey</Link> guides each session with gentle verbal cues, creating a meditative atmosphere of calm and presence.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">Benefits of Regular Yin Yoga Practice</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {[
                'Improved flexibility and range of motion',
                'Greater joint mobility and health',
                'Reduced stiffness and tension',
                'Enhanced connective tissue hydration',
                'Deeper sense of calm and stillness',
                'Improved mindfulness and body awareness',
                'Better circulation to joints',
                'Complementary to active exercise routines',
              ].map((b) => (
                <div key={b} className="flex items-start gap-2 text-peat/70 text-sm">
                  <span className="text-sage mt-0.5">✓</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <p className="text-peat/70 leading-relaxed">
              Yin Yoga is suitable for beginners as well as experienced practitioners. Students from Inverness, the Black Isle and across the Highlands find it a valuable complement to both active yoga practice and other forms of exercise. Many pair it with <Link href="/classes/pilates" className="text-sage hover:text-forest underline">Pilates</Link> for a complete balance of strength and flexibility.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 bg-sand/10">
        <div className="max-w-2xl mx-auto px-4">
          <TestimonialCard
            quote="As someone who sits at a desk all day in Inverness, Yin Yoga has been a revelation. The deep stretching and quiet stillness help me release tension I didn't even know I was holding."
            author="David S."
            context="Yin Yoga student, Inverness"
          />
        </div>
      </section>

      <FAQAccordion faqs={faqs} />

      <RelatedClasses
        classes={[
          { title: 'Restorative Yoga', href: '/classes/restorative-yoga', description: 'Complete passive relaxation for deep rest.', icon: '🕊️' },
          { title: 'Seasonal Flow Yoga', href: '/classes/seasonal-flow-yoga', description: 'Active practice to balance your Yin work.', icon: '🌿' },
          { title: 'Sound Baths', href: '/classes/sound-baths', description: 'Immersive sound healing for deep calm.', icon: '🔔' },
        ]}
      />

      <CTABanner
        heading="Explore Stillness Through Yin Yoga"
        description="Yin yoga classes in the Scottish Highlands. Suitable for all levels near Inverness."
        primaryCTA={{ label: 'Book a Class', href: '/contact' }}
        secondaryCTA={{ label: 'View All Classes', href: '/classes' }}
      />
    </>
  );
}
