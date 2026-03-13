import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import CTABanner from '@/components/CTABanner';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Yoga Teaching Philosophy & Qualifications | Highlands',
  description:
    'Discover the teaching philosophy and professional training behind Present Heart Living. Audrey Buchanan\'s approach to yoga, Pilates and mindful movement in the Scottish Highlands.',
  alternates: { canonical: 'https://presentheartliving.co.uk/about/teaching-philosophy' },
};

const faqs = [
  {
    question: 'What makes the teaching approach at Present Heart Living different?',
    answer: 'Rather than focusing on achieving complex postures, we emphasise awareness, presence and connection with the body. The practice is about understanding how your body moves and developing a sustainable practice that supports long-term wellbeing.',
  },
  {
    question: 'Do I need experience to attend classes?',
    answer: 'Not at all. Classes are designed to be inclusive and accessible for all experience levels. Modifications are always offered so you can practise in a way that feels appropriate for your body.',
  },
  {
    question: 'What qualifications does Audrey Buchanan hold?',
    answer: 'Audrey holds a 500-hour Yoga Alliance qualification, breathwork facilitator certification, trauma-informed yoga training, yoga nidra qualification and sacred sound training. She is currently undertaking Lolita Legacy Comprehensive Pilates Training.',
  },
];

export default function PhilosophyPage() {
  return (
    <>
      <Hero
        variant="narrow"
        title="Teaching Philosophy and Training"
        subtitle="An approach to yoga and mindful movement grounded in awareness, compassion and continuous learning"
        bgGradient="from-forest/85 to-sage/60"
      />
      <Breadcrumbs
        items={[
          { name: 'About', url: '/about' },
          { name: 'Teaching Philosophy', url: '/about/teaching-philosophy' },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">A Philosophy of Awareness</h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              At Present Heart Living, yoga and mindful movement are approached as practices of awareness rather than performance. Set in the calm surroundings of the Scottish Highlands near Inverness, our practice is deeply influenced by the natural environment — the spaciousness of the landscape, the rhythm of the seasons and the quietness that supports reflection.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              The intention of each class is to help students develop a deeper understanding of how their bodies move, how their breath supports that movement and how moments of stillness can bring balance to everyday life. Rather than focusing on achieving complex postures, the emphasis is on building a sustainable practice that supports strength, flexibility and resilience over time.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              Students are encouraged to move with attention, breathe with intention and approach the practice with curiosity and compassion. By developing awareness through movement and breath, individuals often discover that the benefits of yoga extend far beyond the mat.
            </p>
            <p className="text-peat/70 leading-relaxed">
              Over time, this approach can support greater physical wellbeing while also helping students navigate the demands of modern life with a greater sense of calm and clarity. This philosophy underpins all our classes — from <Link href="/classes/seasonal-flow-yoga" className="text-sage hover:text-forest underline">Seasonal Flow Yoga</Link> to <Link href="/classes/restorative-yoga" className="text-sage hover:text-forest underline">Restorative Yoga</Link>, <Link href="/classes/pilates" className="text-sage hover:text-forest underline">Pilates</Link> to <Link href="/classes/breathwork" className="text-sage hover:text-forest underline">Breathwork</Link>.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">Inclusive and Supportive Teaching</h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Present Heart Living is designed to be welcoming to people of all ages and experience levels. You do not need to be flexible or experienced to begin. Our <Link href="/locations/beginner-yoga-classes" className="text-sage hover:text-forest underline">beginner classes</Link> are structured to help students feel comfortable exploring movement at their own pace while learning the foundations of yoga and mindful movement.
            </p>
            <p className="text-peat/70 leading-relaxed">
              Modifications and variations are offered so that each student can practise in a way that feels appropriate for their body. This supportive approach allows individuals to develop confidence gradually while discovering the benefits of regular practice.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">Professional Training and Qualifications</h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              The teaching approach at Present Heart Living is supported by extensive training and ongoing professional development. <Link href="/about/audrey-buchanan" className="text-sage hover:text-forest underline">Audrey Buchanan</Link> holds a 500-hour Yoga Alliance recognised qualification and has trained in several complementary practices that support holistic wellbeing.
            </p>
            <div className="bg-sand/10 rounded-xl p-6 mb-6">
              <h3 className="font-heading text-lg text-forest mb-4">Training includes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  'Hatha Yoga', 'Yin Yoga', 'Restorative Yoga', 'Vinyasa Yoga',
                  'Breathwork Facilitation', 'Trauma Informed Yoga', 'Yoga Nidra',
                  'Sacred Sound and Mantra Practices',
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-peat/70 text-sm">
                    <span className="text-sage">✓</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-peat/70 leading-relaxed">
              Audrey has also completed the Power of Awareness training with internationally respected meditation teachers Jack Kornfield and Tara Brach. She is currently undertaking the Lolita Legacy Comprehensive Pilates Training, which will qualify her as a third-generation Pilates teacher.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">A Commitment to Continued Learning</h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Yoga and mindful movement are lifelong practices, and Audrey believes that teaching should continue to evolve through ongoing study and experience. By continuing to learn from experienced teachers and training programmes, she is able to bring fresh insight and understanding into her classes.
            </p>
            <p className="text-peat/70 leading-relaxed">
              This commitment to continuous learning ensures that the practices offered at Present Heart Living remain thoughtful, informed and supportive for every student — whether they are attending their first class in Inverness or deepening an established practice.
            </p>
          </FadeIn>
        </div>
      </section>

      <FAQAccordion faqs={faqs} />

      <CTABanner
        heading="Experience This Approach to Practice"
        description="Explore our range of yoga and Pilates classes in the Scottish Highlands or book your first session."
        primaryCTA={{ label: 'Explore Classes', href: '/classes' }}
        secondaryCTA={{ label: 'Book a Class', href: '/contact' }}
      />
    </>
  );
}
