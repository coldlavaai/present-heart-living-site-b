import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import CTABanner from '@/components/CTABanner';
import JsonLd from '@/components/JsonLd';
import { personSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Audrey Buchanan | Yoga Teacher Scottish Highlands',
  description:
    'Meet Audrey Buchanan, founder of Present Heart Living. Over 30 years of yoga practice, 500hr qualified yoga teacher offering classes in the Scottish Highlands. Discover her story.',
  alternates: { canonical: 'https://presentheartliving.co.uk/about/audrey-buchanan' },
};

export default function AudreyPage() {
  return (
    <>
      <JsonLd data={personSchema as unknown as Record<string, unknown>} />

      <Hero
        variant="narrow"
        title="Meet Audrey Buchanan"
        subtitle="Founder of Present Heart Living — over 30 years of yoga practice, teaching mindful movement in the Scottish Highlands"
        bgGradient="from-forest/85 to-sage/60"
      />
      <Breadcrumbs
        items={[
          { name: 'About', url: '/about' },
          { name: 'Audrey Buchanan', url: '/about/audrey-buchanan' },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">A Lifelong Practice</h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Audrey Buchanan is the founder and teacher behind Present Heart Living. Her relationship with yoga began more than thirty years ago in the Scottish Highlands and has grown into a lifelong exploration of movement, mindfulness and wellbeing.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              For Audrey, yoga has never been simply about physical exercise. Instead, it has always been a practice of awareness — an opportunity to understand how the body moves, how the breath supports us and how moments of stillness can bring clarity to everyday life.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              This approach continues to shape the way she teaches today at her studio near Inverness. Classes are designed to help students explore movement with curiosity and patience, creating space for both physical development and inner awareness. Whether practising <Link href="/classes/seasonal-flow-yoga" className="text-sage hover:text-forest underline">Seasonal Flow Yoga</Link>, <Link href="/classes/restorative-yoga" className="text-sage hover:text-forest underline">Restorative Yoga</Link> or <Link href="/classes/breathwork" className="text-sage hover:text-forest underline">Breathwork</Link>, students are guided to move with attention and care.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">Experience in Teaching and Education</h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Before creating Present Heart Living, Audrey spent many years working in education as a primary teacher and later as a head teacher in the Scottish Highlands. This experience has had a strong influence on her teaching style.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              Audrey brings clarity, structure and patience into every class, helping students feel comfortable and supported as they learn. Her background in education also shapes the way she explains movement and breathing practices, ensuring that students can understand not only what they are doing but why those practices support their wellbeing.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              This unique combination of educational expertise and deep personal yoga practice makes Audrey&apos;s classes particularly accessible for <Link href="/locations/beginner-yoga-classes" className="text-sage hover:text-forest underline">beginners</Link> while remaining rich and rewarding for experienced practitioners.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">Training and Professional Development</h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Audrey has completed extensive training in yoga and related wellbeing practices, including:
            </p>
            <div className="bg-sand/10 rounded-xl p-6 mb-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  '500 Hour Yoga Alliance recognised qualification',
                  'Breathwork facilitator certification',
                  'Trauma Informed Yoga training',
                  'Yoga Nidra teaching qualification',
                  'Sacred Sound and mantra training (Yoga Campus)',
                  'Power of Awareness (Jack Kornfield & Tara Brach)',
                  'Hatha, Vinyasa, Yin & Restorative Yoga',
                  'Lolita Legacy Comprehensive Pilates Training (in progress)',
                ].map((q) => (
                  <li key={q} className="flex items-start gap-2 text-peat/70 text-sm">
                    <span className="text-sage mt-0.5">✓</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-peat/70 leading-relaxed">
              Audrey is currently undertaking the Lolita Legacy Comprehensive <Link href="/classes/pilates" className="text-sage hover:text-forest underline">Pilates</Link> Training, which will qualify her as a third-generation Pilates teacher. She believes strongly in continuing education and regularly deepens her understanding of movement, mindfulness and wellbeing practices.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">A Supportive Approach to Practice</h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Audrey&apos;s teaching focuses on helping students develop awareness through movement and breath. Rather than encouraging performance or pushing the body beyond its limits, classes invite students to move in ways that feel supportive and sustainable.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              This approach allows individuals of all experience levels to explore yoga and mindful movement with confidence. Many students find that over time this style of practice supports not only greater physical strength and flexibility but also a deeper sense of calm and balance in everyday life.
            </p>
            <p className="text-peat/70 leading-relaxed">
              Students travel from across the Highlands to practise with Audrey — from Inverness and the Black Isle to Dingwall, Beauly, Conon Bridge and beyond. Her warm and inclusive style creates a welcoming space for everyone.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        heading="Interested in Practising with Audrey?"
        description="Explore our range of yoga, Pilates and breathwork classes in the Scottish Highlands."
        primaryCTA={{ label: 'Explore Classes', href: '/classes' }}
        secondaryCTA={{ label: 'Book a Class', href: '/contact' }}
      />
    </>
  );
}
