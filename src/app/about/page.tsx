import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'About Present Heart Living | Yoga Studio Scottish Highlands',
  description:
    'Learn about Present Heart Living, a yoga and Pilates studio in the Scottish Highlands founded by Audrey Buchanan. Discover our mindful approach to movement and wellbeing. Visit us today.',
  alternates: { canonical: 'https://presentheartliving.co.uk/about' },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        variant="narrow"
        title="About Present Heart Living"
        subtitle="A yoga and Pilates practice rooted in awareness, set in the heart of the Scottish Highlands"
        bgGradient="from-forest/85 to-sage/60"
      />
      <Breadcrumbs items={[{ name: 'About', url: '/about' }]} />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">A Practice Rooted in Awareness</h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Present Heart Living was created as a space where yoga and mindful movement can be explored in a supportive and accessible way, surrounded by the natural beauty of the Scottish Highlands. Based near Inverness, our studio welcomes students from across the region — from the Black Isle to Dingwall, Beauly to Muir of Ord.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              Rather than focusing on performance or complex poses, the practice emphasises awareness, presence and connection with the body. Yoga and Pilates are approached as tools that support physical wellbeing while encouraging a more balanced and mindful approach to everyday life.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              The Scottish Highlands provide a unique setting for this kind of practice. The natural landscape — with its lochs, mountains and vast open spaces — naturally encourages the sense of spaciousness and calm that lies at the heart of yoga. Many of our students find that practising here, close to nature, deepens their connection to the work.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              We offer a full range of classes including <Link href="/classes/seasonal-flow-yoga" className="text-sage hover:text-forest underline">Seasonal Flow Yoga</Link>, <Link href="/classes/restorative-yoga" className="text-sage hover:text-forest underline">Restorative Yoga</Link>, <Link href="/classes/yin-yoga" className="text-sage hover:text-forest underline">Yin Yoga</Link>, <Link href="/classes/pilates" className="text-sage hover:text-forest underline">Pilates</Link>, <Link href="/classes/breathwork" className="text-sage hover:text-forest underline">Breathwork</Link> and <Link href="/classes/sound-baths" className="text-sage hover:text-forest underline">Sound Baths</Link>. Each practice is designed to support both physical strength and emotional balance.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">Meet Audrey Buchanan</h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              <Link href="/about/audrey-buchanan" className="text-sage hover:text-forest underline">Audrey Buchanan</Link> is the founder and teacher behind Present Heart Living. Her journey with yoga began more than thirty years ago and has developed into a lifelong exploration of movement, mindfulness and wellbeing.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              Audrey brings extensive experience from her career in education, having worked as a primary teacher and head teacher. This background influences her clear and supportive teaching style, helping students feel confident and comfortable within their practice.
            </p>
            <p className="text-peat/70 leading-relaxed">
              Her training includes a 500-hour Yoga Alliance qualification, breathwork facilitator certification, trauma-informed yoga training, yoga nidra qualification and sacred sound training through Yoga Campus. She is currently undertaking Lolita Legacy Comprehensive Pilates Training, working towards qualification as a third-generation Pilates teacher.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">Teaching Philosophy</h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              At the heart of Present Heart Living is a simple belief: yoga and mindful movement help us become more aware of how we move, breathe and live. Classes encourage students to move with attention, breathe with intention and develop compassion toward themselves.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              Over time, this awareness often supports greater balance, resilience and wellbeing in everyday life. Our <Link href="/about/teaching-philosophy" className="text-sage hover:text-forest underline">teaching philosophy</Link> is grounded in the understanding that yoga extends far beyond the mat — it is a way of living with greater presence and care.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        heading="Experience Present Heart Living"
        description="Explore our classes or learn more about Audrey's approach to mindful movement."
        primaryCTA={{ label: 'Explore Classes', href: '/classes' }}
        secondaryCTA={{ label: 'Meet Audrey', href: '/about/audrey-buchanan' }}
      />
    </>
  );
}
