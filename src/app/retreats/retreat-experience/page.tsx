import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import CTABanner from '@/components/CTABanner';
import FAQAccordion from '@/components/FAQAccordion';
import TestimonialCard from '@/components/TestimonialCard';
import RelatedClasses from '@/components/RelatedClasses';
import JsonLd from '@/components/JsonLd';
import { localBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'What to Expect on a Yoga Retreat | The Retreat Experience',
  description:
    'Discover what to expect on a Present Heart Living yoga retreat in Scotland. From daily yoga practices to meals, nature walks and relaxation — learn how our retreats support rest and renewal. Explore retreat experiences today.',
  alternates: { canonical: 'https://presentheartliving.co.uk/retreats/retreat-experience' },
  openGraph: {
    title: 'What to Expect on a Yoga Retreat | The Retreat Experience',
    description:
      'Discover what to expect on a Present Heart Living yoga retreat in Scotland. From daily yoga practices to meals, nature walks and relaxation.',
    url: 'https://presentheartliving.co.uk/retreats/retreat-experience',
    siteName: 'Present Heart Living',
    locale: 'en_GB',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What should I bring to a yoga retreat?',
    answer:
      'Comfortable clothing for yoga, warm layers for outdoor activities, a water bottle, a journal if you like to write, and any personal items you need for overnight stays. Yoga mats and props are provided.',
  },
  {
    question: 'Will I have free time during the retreat?',
    answer:
      'Yes. Retreat schedules are designed to balance guided practices with plenty of free time for rest, nature walks, reading or quiet reflection.',
  },
  {
    question: 'Are meals included?',
    answer:
      'Yes. Nourishing meals are included in the retreat, with care taken to provide wholesome, balanced food that supports your wellbeing. Dietary requirements can be accommodated with advance notice.',
  },
  {
    question: 'Do I need to participate in every session?',
    answer:
      'Not at all. Retreats are designed to be flexible. You are encouraged to participate in what feels supportive and to rest when you need to. There is no pressure to attend every session.',
  },
];

export default function RetreatExperiencePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema as unknown as Record<string, unknown>} />

      <Hero
        variant="narrow"
        title="The Retreat Experience"
        subtitle="More than a series of yoga classes — a genuine opportunity to pause, restore and reconnect"
        bgGradient="from-forest/80 to-sage/50"
      />
      <Breadcrumbs
        items={[
          { name: 'Retreats', url: '/retreats' },
          { name: 'Retreat Experience', url: '/retreats/retreat-experience' },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <p className="text-lg text-peat/70 leading-relaxed mb-6">
              A retreat is more than simply attending a series of yoga classes. It is an opportunity to step away from everyday responsibilities and create space for reflection, rest and renewal. At Present Heart Living, retreats are designed to provide a supportive environment where participants can explore yoga and mindfulness at a slower, more spacious pace.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">
              A Typical Retreat Day
            </h2>
            <div className="space-y-6">
              {[
                {
                  time: 'Morning',
                  title: 'Gentle Awakening',
                  desc: 'Days begin with gentle yoga or breathwork practices that help participants settle into the day. The morning practice is designed to awaken the body gently while encouraging a sense of presence and calm.',
                },
                {
                  time: 'Mid-Morning',
                  title: 'Nourishing Breakfast',
                  desc: 'A wholesome breakfast is shared in a relaxed group setting. This is a time for connection, conversation and preparing for the day ahead.',
                },
                {
                  time: 'Late Morning',
                  title: 'Flowing Practice',
                  desc: 'A more dynamic yoga session — perhaps Seasonal Flow or Vinyasa — builds strength, flexibility and body awareness. All levels are supported with modifications and variations.',
                },
                {
                  time: 'Afternoon',
                  title: 'Free Time & Nature',
                  desc: 'Participants are encouraged to spend time in nature, rest, journal or explore the surroundings. This unstructured time is a vital part of the retreat experience.',
                },
                {
                  time: 'Late Afternoon',
                  title: 'Restorative Session',
                  desc: 'A slower practice — Yin Yoga, Restorative Yoga or guided relaxation — helps the body and mind settle as the day draws to a close.',
                },
                {
                  time: 'Evening',
                  title: 'Shared Meal & Sound Bath',
                  desc: 'A nourishing evening meal is followed by an optional sound bath or meditation, creating a deeply restful close to the day.',
                },
              ].map((block) => (
                <div key={block.time} className="flex gap-4">
                  <div className="w-24 shrink-0 text-right">
                    <span className="text-xs font-medium text-sage uppercase tracking-wide">
                      {block.time}
                    </span>
                  </div>
                  <div className="border-l-2 border-sage/20 pl-4 pb-2">
                    <h3 className="font-heading text-lg text-forest mb-1">{block.title}</h3>
                    <p className="text-peat/70 text-sm leading-relaxed">{block.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">
              The Setting and Environment
            </h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Whether you join a <Link href="/retreats/uk-retreats" className="text-sage hover:text-forest underline">yoga retreat in Scotland</Link> or an <Link href="/retreats/international-retreats" className="text-sage hover:text-forest underline">international experience</Link>, locations are chosen carefully to support the retreat intention. Peaceful natural surroundings, comfortable accommodation and nourishing food all contribute to creating an environment where genuine rest can happen.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              Meals are often shared within a small group setting, creating opportunities for conversation and connection with others who are also seeking time for rest and reflection.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">
              The Benefits of Retreat Time
            </h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Many people find that retreat experiences allow them to step back from the busyness of everyday life and reconnect with a deeper sense of clarity and calm. Benefits often include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Deep physical and mental rest',
                'Renewed sense of clarity and purpose',
                'Deeper connection to yoga practice',
                'Improved sleep and reduced tension',
                'Fresh perspective on daily life',
                'Meaningful connections with others',
              ].map((b) => (
                <div key={b} className="flex items-start gap-2 text-peat/70 text-sm">
                  <span className="text-sage mt-0.5">✓</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <p className="text-peat/70 leading-relaxed mt-4">
              Between retreats, our regular <Link href="/classes" className="text-sage hover:text-forest underline">yoga and Pilates classes</Link> in the Scottish Highlands help maintain the sense of balance and presence that retreat time cultivates.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 bg-mist/30">
        <div className="max-w-2xl mx-auto px-4">
          <TestimonialCard
            quote="I was nervous about attending a retreat alone, but from the moment I arrived I felt welcomed and at ease. The balance of yoga, free time and beautiful surroundings was exactly what I needed."
            author="Ruth A."
            context="First-time retreat attendee, Inverness"
          />
        </div>
      </section>

      <FAQAccordion faqs={faqs} />

      <RelatedClasses
        title="Explore Our Retreats"
        classes={[
          { title: 'UK Retreats', href: '/retreats/uk-retreats', description: 'Yoga retreat Scotland experiences in the Highlands.', icon: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
          { title: 'International Retreats', href: '/retreats/international-retreats', description: 'Mindful travel and yoga in inspiring destinations.', icon: '🌍' },
          { title: 'Restorative Yoga', href: '/classes/restorative-yoga', description: 'Deeply calming practice for nervous system recovery.', icon: '🕊️' },
        ]}
      />

      <CTABanner
        heading="Ready to Experience a Retreat?"
        description="Explore upcoming retreat dates or get in touch to discuss which retreat experience is right for you."
        primaryCTA={{ label: 'View UK Retreats', href: '/retreats/uk-retreats' }}
        secondaryCTA={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
