import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ClassCard from '@/components/ClassCard';
import FadeIn from '@/components/FadeIn';
import CTABanner from '@/components/CTABanner';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Yoga & Pilates Classes Scottish Highlands | Inverness',
  description:
    'Explore yoga, Pilates, breathwork and sound bath classes in the Scottish Highlands with Present Heart Living. Suitable for all levels near Inverness. Book your class today.',
  alternates: { canonical: 'https://presentheartliving.co.uk/classes' },
};

const classes = [
  { title: 'Seasonal Flow Yoga', description: 'A dynamic practice blending Hatha and Vinyasa traditions. Breath-led flowing sequences that build strength, flexibility and body awareness through the changing seasons.', href: '/classes/seasonal-flow-yoga', icon: '🌿' },
  { title: 'Restorative Yoga', description: 'A deeply calming practice using props and supported postures. Designed to calm the nervous system, release tension and encourage profound rest and recovery.', href: '/classes/restorative-yoga', icon: '🕊️' },
  { title: 'Yin Yoga', description: 'A slower, meditative practice holding postures for several minutes. Supports joint mobility, connective tissue health and deep mindful awareness.', href: '/classes/yin-yoga', icon: '🌙' },
  { title: 'Pilates', description: 'Controlled movement focused on alignment, core strength and postural awareness. Build stability and resilience through precise, mindful practice.', href: '/classes/pilates', icon: '💪' },
  { title: 'Breathwork', description: 'Conscious breathing techniques for relaxation, stress relief and emotional balance. Learn practical tools to support everyday wellbeing.', href: '/classes/breathwork', icon: '🌬️' },
  { title: 'Sound Baths', description: 'Immersive relaxation experiences using singing bowls and resonant instruments. Deep rest for body and mind in a peaceful Highland setting.', href: '/classes/sound-baths', icon: '🔔' },
];

export default function ClassesPage() {
  return (
    <>
      <Hero
        variant="narrow"
        title="Yoga and Pilates Classes in the Scottish Highlands"
        subtitle="Mindful movement, breathwork and relaxation practices designed to support strength, flexibility and wellbeing"
        bgGradient="from-forest/85 to-sage/60"
      />
      <Breadcrumbs items={[{ name: 'Classes', url: '/classes' }]} />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionHeading title="A Balanced Approach to Movement" />
          <FadeIn delay={0.1}>
            <p className="mt-6 text-peat/70 leading-relaxed">
              Classes at Present Heart Living combine movement, breathing techniques and relaxation practices to support both physical strength and emotional balance. Based near Inverness in the Scottish Highlands, our studio offers a welcoming environment where students are encouraged to move at their own pace while developing awareness of how their bodies feel.
            </p>
            <p className="mt-4 text-peat/70 leading-relaxed">
              Whether you are a complete beginner or an experienced practitioner, every class is designed to be accessible, supportive and nourishing. Students travel from across the Highlands — from Inverness, the Black Isle, Dingwall, Beauly and beyond — to experience our approach to mindful movement.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-8 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((cls, i) => (
              <ClassCard key={cls.href} {...cls} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 bg-sand/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionHeading title="Class Pricing" subtitle="Flexible options for all students" />
          <FadeIn delay={0.1}>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Drop-in Class', price: '£12', desc: 'Single class, no commitment' },
                { label: '5 Class Pass', price: '£50', desc: 'Valid for 8 weeks' },
                { label: '10 Class Pass', price: '£90', desc: 'Valid for 12 weeks' },
              ].map((p) => (
                <div key={p.label} className="bg-white rounded-xl p-6 border border-mist/50">
                  <p className="text-sm text-sage font-medium uppercase tracking-wider">{p.label}</p>
                  <p className="font-heading text-3xl text-forest mt-2 mb-1">{p.price}</p>
                  <p className="text-sm text-peat/50">{p.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-peat/50 mt-6">Prices are indicative. Please contact us for current pricing and availability.</p>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        heading="Start Your Practice Today"
        description="Yoga, Pilates and breathwork classes in the Scottish Highlands. All levels welcome."
        primaryCTA={{ label: 'Book a Class', href: '/contact' }}
        secondaryCTA={{ label: 'View Schedule', href: '/#schedule' }}
      />
    </>
  );
}
