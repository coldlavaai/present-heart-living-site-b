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
  title: 'Pilates Classes Scottish Highlands | Present Heart Living',
  description:
    'Pilates classes in the Scottish Highlands with Present Heart Living. Improve posture, core strength and body awareness in a calm, supportive environment near Inverness. Book today.',
  alternates: { canonical: 'https://presentheartliving.co.uk/classes/pilates' },
};

const faqs = [
  { question: 'Do I need Pilates experience to attend?', answer: 'Not at all. Classes are designed for beginners through to experienced practitioners. Movements are explained clearly with modifications offered for different levels.' },
  { question: 'Is Pilates good for back pain?', answer: 'Pilates can be very beneficial for back pain as it strengthens the core muscles that support the spine, improves posture and develops body awareness. However, please consult your healthcare provider if you have an existing condition.' },
  { question: 'What is the difference between Pilates and yoga?', answer: 'Pilates focuses primarily on controlled movement, alignment and core strength, while yoga encompasses breath awareness, meditation and a wider range of movement practices. Many students benefit from both, as they complement each other beautifully.' },
  { question: 'What should I wear to a Pilates class?', answer: 'Comfortable, close-fitting clothing that allows free movement. Pilates is usually practised barefoot or in grip socks on a mat.' },
];

export default function PilatesPage() {
  return (
    <>
      <JsonLd data={courseSchema('Pilates', 'Pilates classes focusing on controlled movement, alignment and core strength in the Scottish Highlands.', 'pilates') as unknown as Record<string, unknown>} />

      <Hero
        variant="narrow"
        title="Pilates Classes in the Scottish Highlands"
        subtitle="Controlled movement, alignment and core strength to support healthy posture and balanced movement"
        bgGradient="from-forest/80 to-sage/50"
      />
      <Breadcrumbs items={[{ name: 'Classes', url: '/classes' }, { name: 'Pilates', url: '/classes/pilates' }]} />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <p className="text-lg text-peat/70 leading-relaxed mb-6">
              Pilates is a practice designed to strengthen the body, improve posture and develop greater awareness of movement. At Present Heart Living in the Scottish Highlands near Inverness, Pilates classes are taught with a mindful approach that complements our yoga practices.
            </p>
            <p className="text-peat/70 leading-relaxed mb-6">
              The focus is on controlled movement, alignment and building strength that supports long-term physical wellbeing. Classes are suitable for beginners and those looking to develop a stronger foundation for healthy movement, drawing students from Inverness, the Black Isle, Dingwall and across the Highlands.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">What to Expect in a Pilates Class</h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Each session begins with a gentle warm-up focusing on breath awareness and spinal mobility. The main practice includes a carefully structured series of exercises targeting core strength, spinal alignment, hip stability and shoulder mobility.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              <Link href="/about/audrey-buchanan" className="text-sage hover:text-forest underline">Audrey</Link> guides each movement with clear, detailed instruction — drawing on her background in education to explain not just what to do, but why each exercise supports your body. Modifications are always offered so every student can work at an appropriate level.
            </p>
            <p className="text-peat/70 leading-relaxed">
              Audrey is currently undertaking the Lolita Legacy Comprehensive Pilates Training, working towards qualification as a third-generation Pilates teacher. This lineage training brings depth and authenticity to every class.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">Benefits of Pilates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {[
                'Improved core strength and stability',
                'Better posture and spinal alignment',
                'Increased flexibility and mobility',
                'Reduced back pain and discomfort',
                'Improved movement awareness and control',
                'Greater balance and coordination',
                'Injury prevention and rehabilitation',
                'Enhanced overall body resilience',
              ].map((b) => (
                <div key={b} className="flex items-start gap-2 text-peat/70 text-sm">
                  <span className="text-sage mt-0.5">✓</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">Pilates and Yoga Working Together</h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Pilates and yoga complement one another beautifully. While yoga often focuses on breath awareness and mobility, Pilates strengthens the muscles that stabilise the body and support healthy posture. Together they create a balanced approach to movement and wellbeing.
            </p>
            <p className="text-peat/70 leading-relaxed">
              Many of our students in the Highlands combine Pilates with <Link href="/classes/seasonal-flow-yoga" className="text-sage hover:text-forest underline">Seasonal Flow Yoga</Link> or <Link href="/classes/yin-yoga" className="text-sage hover:text-forest underline">Yin Yoga</Link> for a comprehensive weekly practice. For those new to movement, our <Link href="/locations/beginner-yoga-classes" className="text-sage hover:text-forest underline">beginner classes</Link> offer a gentle introduction.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">Who Pilates Classes Are For</h2>
            <p className="text-peat/70 leading-relaxed">
              Pilates classes are suitable for beginners, people returning to exercise after a break, those looking to improve posture and anyone seeking a mindful approach to building strength. Whether you work at a desk in Inverness, lead an active outdoor life in the Highlands, or are recovering from injury, Pilates offers practical benefits that support everyday movement and comfort.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 bg-sand/10">
        <div className="max-w-2xl mx-auto px-4">
          <TestimonialCard
            quote="Since starting Pilates with Audrey, my chronic back pain has improved dramatically. Her attention to alignment and clear explanations make every session valuable."
            author="Robert H."
            context="Pilates student, Dingwall"
          />
        </div>
      </section>

      <FAQAccordion faqs={faqs} />

      <RelatedClasses
        classes={[
          { title: 'Seasonal Flow Yoga', href: '/classes/seasonal-flow-yoga', description: 'Dynamic practice for flexibility and flow.', icon: '🌿' },
          { title: 'Yin Yoga', href: '/classes/yin-yoga', description: 'Slow practice for flexibility and joint health.', icon: '🌙' },
          { title: 'Breathwork', href: '/classes/breathwork', description: 'Conscious breathing for balance and calm.', icon: '🌬️' },
        ]}
      />

      <CTABanner
        heading="Build Strength with Pilates in the Highlands"
        description="Pilates classes designed for all levels in the Scottish Highlands near Inverness."
        primaryCTA={{ label: 'Book a Pilates Class', href: '/contact' }}
        secondaryCTA={{ label: 'View All Classes', href: '/classes' }}
      />
    </>
  );
}
