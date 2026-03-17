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
  title: 'Restorative Yoga Classes Scottish Highlands | Inverness',
  description:
    'Restorative yoga classes in the Scottish Highlands with Present Heart Living. Deeply calming sessions to release tension, calm the nervous system and support rest. Book today.',
  alternates: { canonical: 'https://presentheartliving.co.uk/classes/restorative-yoga' },
};

const faqs = [
  { question: 'What happens in a restorative yoga class?', answer: 'You will be guided into a series of supported postures using bolsters, blankets and cushions. Poses are held for longer periods, allowing the body to release tension and the nervous system to settle into deep rest.' },
  { question: 'Is restorative yoga suitable for beginners?', answer: 'Absolutely. Restorative yoga is one of the most accessible forms of yoga. No previous experience is needed — the practice is about rest and release, not flexibility or strength.' },
  { question: 'How is restorative yoga different from Yin Yoga?', answer: 'While both are slow practices, restorative yoga focuses on complete passive relaxation using full prop support, whereas Yin Yoga applies gentle stress to connective tissues. Many students enjoy both as complementary practices.' },
  { question: 'What should I wear to a restorative yoga class?', answer: 'Comfortable, warm clothing is recommended. The body tends to cool down during restorative practice, so layers are helpful. Socks and a blanket can add extra warmth.' },
];

export default function RestorativeYogaPage() {
  return (
    <>
      <JsonLd data={courseSchema('Restorative Yoga', 'A deeply calming yoga practice designed to support relaxation and nervous system recovery in the Scottish Highlands.', 'restorative-yoga') as unknown as Record<string, unknown>} />

      <Hero
        variant="narrow"
        title="Restorative Yoga"
        subtitle="Deeply calming practice designed to release tension, calm the nervous system and support profound rest"
        imageSrc="https://images.unsplash.com/photo-1562088287-bde35a1ea917?w=1600&h=900&fit=crop"
        imageAlt="Restorative yoga practice in natural light"
      />
      <Breadcrumbs items={[{ name: 'Classes', url: '/classes' }, { name: 'Restorative Yoga', url: '/classes/restorative-yoga' }]} />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <p className="text-lg text-peat/70 leading-relaxed mb-6">
              Restorative Yoga is a gentle and deeply calming practice designed to support relaxation and nervous system recovery. In contrast to more active styles of yoga, restorative sessions encourage stillness, allowing the body and mind to slow down and release accumulated tension. Here in the Scottish Highlands, surrounded by the natural calm of the landscape, restorative practice feels particularly nourishing.
            </p>
            <p className="text-peat/70 leading-relaxed mb-6">
              During a class at Present Heart Living near Inverness, supportive props such as bolsters, blankets and cushions are used to help the body rest comfortably in a series of relaxed postures. These positions are held for longer periods, allowing the muscles to soften and the breath to become slow and steady.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">What to Expect in a Restorative Yoga Class</h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              The intention of restorative yoga is to create a space where the body can rest fully without effort. This encourages the nervous system to shift away from the constant stimulation of daily life and enter a state of deep relaxation. Sessions may also incorporate elements such as breath awareness, gentle <Link href="/classes/sound-baths" className="text-sage hover:text-forest underline">sound</Link> or guided relaxation to further enhance calm.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              For many people, restorative yoga provides an important opportunity to pause and reset. The practice can be particularly supportive for individuals experiencing stress, fatigue, burnout or difficulty switching off from the demands of work and daily life.
            </p>
            <p className="text-peat/70 leading-relaxed">
              A typical class includes four to six supported postures, each held for five to fifteen minutes. Between postures, you are guided through gentle transitions. The overall experience is one of deep, nurturing rest — a rare gift in our busy modern lives.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">Benefits of Restorative Yoga</h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Regular practice often helps students experience:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {[
                'Improved sleep quality and depth',
                'Reduced physical tension and muscle pain',
                'Calmed nervous system response',
                'Greater emotional balance and resilience',
                'Reduced anxiety and stress levels',
                'Enhanced immune system function',
                'Improved digestion and bodily ease',
                'A deeper sense of inner peace',
              ].map((b) => (
                <div key={b} className="flex items-start gap-2 text-peat/70 text-sm">
                  <span className="text-sage mt-0.5">✓</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <p className="text-peat/70 leading-relaxed">
              Many students from Inverness, the Black Isle and across the Scottish Highlands find that restorative yoga provides the counterbalance they need to busy, demanding lifestyles. It pairs beautifully with more active practices like <Link href="/classes/seasonal-flow-yoga" className="text-sage hover:text-forest underline">Seasonal Flow Yoga</Link> or <Link href="/classes/pilates" className="text-sage hover:text-forest underline">Pilates</Link>.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 bg-sand/10">
        <div className="max-w-2xl mx-auto px-4">
          <TestimonialCard
            quote="After a stressful week, Audrey's restorative class is exactly what I need. I leave feeling like I've had a full night's sleep. It's the most peaceful hour of my week."
            author="Margaret D."
            context="Restorative yoga student, Black Isle"
          />
        </div>
      </section>

      <FAQAccordion faqs={faqs} />

      <RelatedClasses
        classes={[
          { title: 'Yin Yoga', href: '/classes/yin-yoga', description: 'Another slow practice focusing on connective tissues.', icon: '🌙' },
          { title: 'Sound Baths', href: '/classes/sound-baths', description: 'Deep relaxation through immersive sound.', icon: '🔔' },
          { title: 'Breathwork', href: '/classes/breathwork', description: 'Breathing techniques for stress relief.', icon: '🌬️' },
        ]}
      />

      <CTABanner
        heading="Experience Deep Restorative Rest"
        description="Restorative yoga classes in the Scottish Highlands. All levels welcome."
        primaryCTA={{ label: 'Book a Class', href: '/contact' }}
        secondaryCTA={{ label: 'View All Classes', href: '/classes' }}
      />
    </>
  );
}
