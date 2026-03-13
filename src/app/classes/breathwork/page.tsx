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
  title: 'Breathwork Classes Scottish Highlands | Near Inverness',
  description:
    'Breathwork classes in the Scottish Highlands with Present Heart Living. Learn conscious breathing techniques for relaxation, stress relief and emotional balance. Book your session today.',
  alternates: { canonical: 'https://presentheartliving.co.uk/classes/breathwork' },
};

const faqs = [
  { question: 'What happens in a breathwork session?', answer: 'You will be guided through a variety of breathing techniques, periods of stillness and time for reflection. Techniques may include calming breath patterns, energising practices and awareness exercises.' },
  { question: 'Do I need any experience for breathwork?', answer: 'No previous experience is needed. Breathwork is accessible to everyone. Audrey guides you gently through each technique, allowing your practice to develop naturally.' },
  { question: 'Can breathwork help with anxiety?', answer: 'Conscious breathing techniques can help regulate the nervous system and support emotional balance. Many students find that breathwork provides practical tools for managing anxiety and stress in everyday life.' },
  { question: 'How is breathwork different from meditation?', answer: 'Breathwork uses active breathing techniques as the focus of practice, whereas meditation often involves observing thoughts and cultivating stillness. Both can be deeply calming, and they complement each other well.' },
];

export default function BreathworkPage() {
  return (
    <>
      <JsonLd data={courseSchema('Breathwork', 'Conscious breathing classes exploring the relationship between breath and wellbeing in the Scottish Highlands.', 'breathwork') as unknown as Record<string, unknown>} />

      <Hero
        variant="narrow"
        title="Breathwork Classes"
        subtitle="Conscious breathing techniques for relaxation, emotional balance and everyday wellbeing in the Scottish Highlands"
        bgGradient="from-forest/80 to-sage/50"
      />
      <Breadcrumbs items={[{ name: 'Classes', url: '/classes' }, { name: 'Breathwork', url: '/classes/breathwork' }]} />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <p className="text-lg text-peat/70 leading-relaxed mb-6">
              Breathwork practices explore the relationship between breathing and overall wellbeing. Although breathing is something we do automatically, learning to work with the breath consciously can have a powerful effect on both the body and mind. In the clean Highland air near Inverness, breathwork takes on a special quality — the natural environment supporting deeper connection with each breath.
            </p>
            <p className="text-peat/70 leading-relaxed mb-6">
              During breathwork sessions at Present Heart Living, students are guided through a variety of breathing techniques designed to support relaxation, focus and emotional balance. <Link href="/about/audrey-buchanan" className="text-sage hover:text-forest underline">Audrey</Link> is a certified breathwork facilitator, bringing depth and sensitivity to each session.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">What to Expect in a Breathwork Session</h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Sessions may include gentle breathing exercises, periods of stillness and time for reflection. Techniques range from calming patterns that settle the nervous system to more energising practices that build vitality and focus.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              Breathwork is often integrated into yoga and meditation traditions as a way to support awareness and concentration. By paying attention to the rhythm of the breath, students learn how breathing influences energy levels, emotional responses and physical tension.
            </p>
            <p className="text-peat/70 leading-relaxed">
              Students are encouraged to approach the practice with curiosity and patience, allowing breathing patterns to develop naturally. Each session creates space for both guided practice and personal exploration.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">Benefits of Breathwork Practice</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {[
                'Reduced stress and anxiety',
                'Improved emotional regulation',
                'Better sleep quality',
                'Enhanced focus and mental clarity',
                'Calmed nervous system response',
                'Greater energy and vitality',
                'Improved respiratory function',
                'Practical tools for everyday wellbeing',
              ].map((b) => (
                <div key={b} className="flex items-start gap-2 text-peat/70 text-sm">
                  <span className="text-sage mt-0.5">✓</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <p className="text-peat/70 leading-relaxed">
              Over time, breathwork provides practical tools that support everyday wellbeing. Many students from Inverness and the Scottish Highlands find that breathing techniques help them manage stress, improve focus and reconnect with a calmer rhythm of living. Breathwork also deepens the experience of <Link href="/classes/seasonal-flow-yoga" className="text-sage hover:text-forest underline">yoga</Link> and <Link href="/classes/restorative-yoga" className="text-sage hover:text-forest underline">restorative practices</Link>.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 bg-sand/10">
        <div className="max-w-2xl mx-auto px-4">
          <TestimonialCard
            quote="Learning conscious breathing techniques has genuinely changed how I handle stressful situations. I use the tools Audrey taught me every single day."
            author="Emma L."
            context="Breathwork student, Beauly"
          />
        </div>
      </section>

      <FAQAccordion faqs={faqs} />

      <RelatedClasses
        classes={[
          { title: 'Restorative Yoga', href: '/classes/restorative-yoga', description: 'Deep relaxation with breath awareness.', icon: '🕊️' },
          { title: 'Sound Baths', href: '/classes/sound-baths', description: 'Sound-based deep relaxation experience.', icon: '🔔' },
          { title: 'Seasonal Flow Yoga', href: '/classes/seasonal-flow-yoga', description: 'Breath-led flowing yoga practice.', icon: '🌿' },
        ]}
      />

      <CTABanner
        heading="Discover the Power of Conscious Breathing"
        description="Breathwork sessions in the Scottish Highlands. All welcome, no experience needed."
        primaryCTA={{ label: 'Book a Session', href: '/contact' }}
        secondaryCTA={{ label: 'View All Classes', href: '/classes' }}
      />
    </>
  );
}
