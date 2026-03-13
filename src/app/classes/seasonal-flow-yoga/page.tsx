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
  title: 'Seasonal Flow Yoga Classes Highlands | Near Inverness',
  description:
    'Seasonal Flow Yoga classes in the Scottish Highlands combining breath and movement to build strength, flexibility and body awareness. All levels welcome. Book your class today.',
  alternates: { canonical: 'https://presentheartliving.co.uk/classes/seasonal-flow-yoga' },
};

const faqs = [
  { question: 'Is Seasonal Flow Yoga suitable for beginners?', answer: 'Yes. Movements can be modified to suit individual needs, so both beginners and experienced practitioners can enjoy the class at their own pace.' },
  { question: 'What should I bring to a Seasonal Flow Yoga class?', answer: 'Comfortable clothing that allows you to move easily and a yoga mat if you have one. Props and mats may also be available at the studio.' },
  { question: 'How does the practice change with the seasons?', answer: 'Movements feel more energising and expansive during lighter months, while practices during autumn and winter emphasise grounding and stability, reflecting natural cycles.' },
  { question: 'How long is a Seasonal Flow Yoga class?', answer: 'Classes typically last 75 minutes, including a gentle warm-up, flowing sequences and a closing relaxation period.' },
];

export default function SeasonalFlowPage() {
  return (
    <>
      <JsonLd data={courseSchema('Seasonal Flow Yoga', 'A dynamic practice combining breath and movement through flowing postures inspired by Hatha and Vinyasa traditions in the Scottish Highlands.', 'seasonal-flow-yoga') as unknown as Record<string, unknown>} />

      <Hero
        variant="narrow"
        title="Seasonal Flow Yoga"
        subtitle="A dynamic, breath-led practice that moves with the rhythm of the Scottish Highlands seasons"
        bgGradient="from-forest/85 to-sage/60"
      />
      <Breadcrumbs items={[{ name: 'Classes', url: '/classes' }, { name: 'Seasonal Flow Yoga', url: '/classes/seasonal-flow-yoga' }]} />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <p className="text-lg text-peat/70 leading-relaxed mb-6">
              Seasonal Flow Yoga is a dynamic practice that combines breath and movement through a sequence of flowing postures. Inspired by both Hatha and Vinyasa traditions, the class encourages students to move with rhythm and awareness while developing strength and flexibility in the beautiful setting of the Scottish Highlands.
            </p>
            <p className="text-peat/70 leading-relaxed mb-6">
              The practice often reflects the natural rhythm of the seasons — something deeply felt here in the Highlands near Inverness. Movements may feel more energising and expansive during lighter months, while practices during quieter seasons may emphasise grounding and stability. This approach encourages students to practise in harmony with natural cycles, helping them remain attentive to how their bodies and energy change throughout the year.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">What to Expect in a Class</h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Classes typically begin with gentle movements that prepare the body for deeper practice. Flowing sequences then develop mobility, balance and coordination while linking movement with breath. The practice gradually builds warmth in the body while encouraging concentration and awareness.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              Each session closes with a relaxation period, allowing the body and mind to integrate the effects of the practice. This balance of effort and rest is central to the Seasonal Flow approach.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              Seasonal Flow Yoga is suitable for both <Link href="/locations/beginner-yoga-classes" className="text-sage hover:text-forest underline">beginners</Link> and experienced practitioners who enjoy a more dynamic style of yoga. Movements can be modified to suit individual needs, allowing students to explore the practice at their own pace.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">Benefits of Seasonal Flow Yoga</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Improved flexibility and range of motion',
                'Greater muscular strength and endurance',
                'Enhanced balance and coordination',
                'Deeper body awareness and mindfulness',
                'Improved focus and concentration',
                'Connection with seasonal rhythms',
                'Stress reduction through breath-led movement',
                'Cardiovascular and respiratory benefits',
              ].map((b) => (
                <div key={b} className="flex items-start gap-2 text-peat/70 text-sm">
                  <span className="text-sage mt-0.5">✓</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">Who Is This Class For?</h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Regular practice can support improved flexibility, greater strength and enhanced focus while helping students cultivate a steady and mindful approach to movement. Whether you live in Inverness, on the Black Isle or anywhere across the Scottish Highlands, you are warmly invited to join a Seasonal Flow class.
            </p>
            <p className="text-peat/70 leading-relaxed">
              This class complements other practices at Present Heart Living — many students pair Seasonal Flow with slower practices like <Link href="/classes/yin-yoga" className="text-sage hover:text-forest underline">Yin Yoga</Link> or <Link href="/classes/restorative-yoga" className="text-sage hover:text-forest underline">Restorative Yoga</Link> for a balanced weekly practice.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 bg-sand/10">
        <div className="max-w-2xl mx-auto px-4">
          <TestimonialCard
            quote="The Seasonal Flow class is the highlight of my week. Audrey has a wonderful ability to guide you through a flowing practice that feels both challenging and deeply calming."
            author="Claire R."
            context="Seasonal Flow student, Inverness"
          />
        </div>
      </section>

      <FAQAccordion faqs={faqs} />

      <RelatedClasses
        classes={[
          { title: 'Yin Yoga', href: '/classes/yin-yoga', description: 'A slower practice that complements the dynamic flow.', icon: '🌙' },
          { title: 'Breathwork', href: '/classes/breathwork', description: 'Deepen your breathing practice for greater calm.', icon: '🌬️' },
          { title: 'Pilates', href: '/classes/pilates', description: 'Build core strength to support your flow practice.', icon: '💪' },
        ]}
      />

      <CTABanner
        heading="Join a Seasonal Flow Yoga Class"
        description="Experience the rhythm of mindful movement in the Scottish Highlands."
        primaryCTA={{ label: 'Book a Class', href: '/contact' }}
        secondaryCTA={{ label: 'View All Classes', href: '/classes' }}
      />
    </>
  );
}
