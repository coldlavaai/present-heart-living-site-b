import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import ClassCard from '@/components/ClassCard';
import SectionHeading from '@/components/SectionHeading';
import TestimonialCard from '@/components/TestimonialCard';
import CTABanner from '@/components/CTABanner';
import SplitSection from '@/components/SplitSection';
import FadeIn from '@/components/FadeIn';
import JsonLd from '@/components/JsonLd';
import { localBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Yoga & Pilates Classes Scottish Highlands | Present Heart Living',
  description:
    'Yoga, Pilates and breathwork classes in the Scottish Highlands near Inverness. Mindful movement, restorative practices and yoga retreats Scotland. Book your class today.',
  alternates: { canonical: 'https://presentheartliving.co.uk' },
  openGraph: {
    title: 'Yoga & Pilates Classes Scottish Highlands | Present Heart Living',
    description:
      'Yoga, Pilates and breathwork classes in the Scottish Highlands near Inverness. Mindful movement, restorative practices and yoga retreats Scotland. Book your class today.',
    url: 'https://presentheartliving.co.uk',
    siteName: 'Present Heart Living',
    locale: 'en_GB',
    type: 'website',
  },
};

const classes = [
  {
    title: 'Seasonal Flow Yoga',
    description:
      'A flowing practice combining breath and movement to build strength, flexibility and body awareness through the seasons.',
    href: '/classes/seasonal-flow-yoga',
    icon: '🌿',
    imageSrc: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
    imageAlt: 'Seasonal flow yoga practice',
  },
  {
    title: 'Restorative Yoga',
    description:
      'A deeply relaxing practice designed to calm the nervous system and encourage profound rest and recovery.',
    href: '/classes/restorative-yoga',
    icon: '🕊️',
    imageSrc: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
    imageAlt: 'Restorative yoga practice',
  },
  {
    title: 'Yin Yoga',
    description:
      'A slower, reflective practice that supports joint mobility, connective tissue health and mindful awareness.',
    href: '/classes/yin-yoga',
    icon: '🌙',
    imageSrc: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&h=400&fit=crop',
    imageAlt: 'Yin yoga practice',
  },
  {
    title: 'Pilates',
    description:
      'Controlled movement, alignment and core strength to support healthy posture and balanced movement.',
    href: '/classes/pilates',
    icon: '💪',
    imageSrc: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop',
    imageAlt: 'Pilates mat practice',
  },
  {
    title: 'Breathwork',
    description:
      'Conscious breathing techniques for relaxation, emotional balance and stress relief.',
    href: '/classes/breathwork',
    icon: '🌬️',
    imageSrc: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop&q=80',
    imageAlt: 'Breathwork practice in calm setting',
  },
  {
    title: 'Sound Baths',
    description:
      'Immersive relaxation using singing bowls and resonant instruments to encourage deep calm.',
    href: '/classes/sound-baths',
    icon: '🔔',
    imageSrc: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&h=400&fit=crop&q=80',
    imageAlt: 'Sound bath with singing bowls',
  },
];

const testimonials = [
  {
    quote:
      "Audrey's classes have been transformative for me. After years of high-stress work, finding Present Heart Living was exactly what I needed. The calm, supportive environment makes every session feel like a sanctuary.",
    author: 'Sarah M.',
    context: 'Yoga student, Inverness',
  },
  {
    quote:
      "I was nervous about trying yoga as a complete beginner, but Audrey made me feel so welcome from the very first class. Six months on, I'm more flexible, sleeping better and feeling genuinely calmer.",
    author: 'James T.',
    context: 'Beginner student, Black Isle',
  },
  {
    quote:
      "The sound bath experience was unlike anything I've tried before — deeply restorative and incredibly peaceful. I left feeling renewed and have been coming back every month since.",
    author: 'Fiona K.',
    context: 'Sound bath attendee, Dingwall',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema as unknown as Record<string, unknown>} />

      {/* Hero */}
      <Hero
        title="Yoga & Pilates Classes in the Scottish Highlands"
        subtitle="Movement, breath and awareness for a balanced life. Present Heart Living offers mindful yoga, Pilates and breathwork practices near Inverness — welcoming all levels."
        primaryCTA={{ label: 'Book a Class', href: '/contact' }}
        secondaryCTA={{ label: 'Explore Classes', href: '/classes' }}
        imageSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&h=900&fit=crop"
        imageAlt="Yoga practice in natural light in the Scottish Highlands"
      />

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionHeading
            title="A Space to Slow Down and Reconnect"
            subtitle="Creating calm amid the beauty of the Scottish Highlands"
          />
          <FadeIn delay={0.2}>
            <p className="mt-6 text-peat/70 leading-relaxed">
              Modern life often moves quickly, leaving little time to pause and care for our wellbeing.
              Present Heart Living provides a calm and supportive environment in the heart of the Scottish
              Highlands where people can step away from the demands of daily life and reconnect with
              themselves through mindful movement and breath awareness.
            </p>
            <p className="mt-4 text-peat/70 leading-relaxed">
              The aim is not to achieve perfect poses, but to develop strength, flexibility and a deeper
              understanding of how the body moves and feels. Whether you live in Inverness, the Black Isle,
              Dingwall or anywhere across the Highlands, you are warmly welcomed to join our community of
              mindful practitioners.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-16 md:py-24 bg-sand/10">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            title="Yoga and Pilates Classes in the Highlands"
            subtitle="A range of practices designed to support both physical and mental wellbeing"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {classes.map((cls, i) => (
              <ClassCard key={cls.href} {...cls} delay={i * 0.08} />
            ))}
          </div>
          <FadeIn delay={0.5}>
            <div className="text-center mt-10">
              <Link
                href="/classes"
                className="inline-flex items-center gap-2 text-sage font-medium hover:text-forest transition-colors"
              >
                View all classes →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Retreats */}
      <SplitSection
        title="Yoga Retreats in Scotland and Beyond"
        imageSrc="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop"
        imageAlt="Scottish Highlands landscape for retreat setting"
      >
        <p>
          Retreats offer the opportunity to step away from everyday routines and reconnect with what
          matters most. Present Heart Living yoga retreats in Scotland combine yoga, breathwork and
          mindfulness practices with time in nature, creating space for reflection, rest and renewed
          energy amid the stunning Scottish Highlands landscape.
        </p>
        <p>
          Whether you choose a weekend retreat in the Highlands or an international wellness
          experience, each retreat is designed to support deep rest, personal reflection and meaningful
          connection with yourself and nature.
        </p>
        <Link
          href="/retreats"
          className="inline-flex items-center gap-2 bg-sage text-white px-6 py-3 rounded-lg font-medium hover:bg-forest transition-colors mt-2"
        >
          Explore Retreats
        </Link>
      </SplitSection>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-mist/30">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            title="What Our Students Say"
            subtitle="Experiences from our yoga community across the Highlands"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Meet Audrey */}
      <SplitSection
        title="Meet Audrey Buchanan"
        imageSrc="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
        imageAlt="Audrey Buchanan, founder of Present Heart Living"
        reverse
      >
        <p>
          Present Heart Living was founded by Audrey Buchanan, an experienced teacher with more than
          thirty years of personal yoga practice based in the Scottish Highlands. With a 500-hour Yoga
          Alliance qualification, breathwork certification and trauma-informed training, Audrey brings
          genuine depth to every class.
        </p>
        <p>
          Her background in education — as both a primary teacher and head teacher — shapes her
          clear, supportive teaching style. Audrey encourages students to move with awareness and
          develop practices that support wellbeing beyond the mat.
        </p>
        <Link
          href="/about/audrey-buchanan"
          className="inline-flex items-center gap-2 text-sage font-medium hover:text-forest transition-colors mt-2"
        >
          Learn more about Audrey →
        </Link>
      </SplitSection>

      {/* Class Schedule Teaser */}
      <section className="py-16 md:py-20 bg-sand/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading
            title="Weekly Class Schedule"
            subtitle="Join us for regular yoga and Pilates classes in the Scottish Highlands"
          />
          <FadeIn delay={0.2}>
            <div className="mt-10 bg-white rounded-xl border border-mist/50 overflow-hidden">
              <div className="grid grid-cols-3 md:grid-cols-5 bg-forest text-white text-sm font-medium" style={{ color: '#FFFFFF' }}>
                <div className="p-3">Day</div>
                <div className="p-3">Class</div>
                <div className="p-3 hidden md:block">Time</div>
                <div className="p-3 hidden md:block">Duration</div>
                <div className="p-3">Level</div>
              </div>
              {[
                { day: 'Monday', cls: 'Seasonal Flow Yoga', time: '9:30am', dur: '75 min', level: 'All levels' },
                { day: 'Tuesday', cls: 'Pilates', time: '10:00am', dur: '60 min', level: 'All levels' },
                { day: 'Wednesday', cls: 'Yin Yoga', time: '7:00pm', dur: '75 min', level: 'All levels' },
                { day: 'Thursday', cls: 'Restorative Yoga', time: '10:00am', dur: '75 min', level: 'All levels' },
                { day: 'Friday', cls: 'Breathwork', time: '9:30am', dur: '60 min', level: 'All levels' },
                { day: 'Saturday', cls: 'Sound Bath', time: '10:00am', dur: '90 min', level: 'All levels' },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 md:grid-cols-5 text-sm ${i % 2 === 0 ? 'bg-linen/50' : ''}`}>
                  <div className="p-3 font-medium text-forest">{row.day}</div>
                  <div className="p-3 text-peat/70">{row.cls}</div>
                  <div className="p-3 text-peat/70 hidden md:block">{row.time}</div>
                  <div className="p-3 text-peat/70 hidden md:block">{row.dur}</div>
                  <div className="p-3 text-peat/50 text-xs">{row.level}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-peat/50 mt-4">Schedule is indicative. Please contact us to confirm class times and availability.</p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Begin Your Yoga Journey in the Highlands"
        description="Whether you are new to yoga or returning after time away, Present Heart Living offers a welcoming place to begin or deepen your practice in the Scottish Highlands."
        primaryCTA={{ label: 'Book Your First Class', href: '/contact' }}
        secondaryCTA={{ label: 'Explore Classes', href: '/classes' }}
      />
    </>
  );
}
