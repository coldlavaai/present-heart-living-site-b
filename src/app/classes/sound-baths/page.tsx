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
  title: 'Sound Bath Sessions Scottish Highlands | Near Inverness',
  description:
    'Sound bath sessions in the Scottish Highlands with Present Heart Living. Immersive relaxation using singing bowls and resonant instruments. Release stress and restore calm. Join us.',
  alternates: { canonical: 'https://presentheartliving.co.uk/classes/sound-baths' },
};

const faqs = [
  { question: 'What happens during a sound bath?', answer: 'You lie comfortably while instruments such as singing bowls, chimes and other resonant tools are played to create gentle layers of sound. The vibrations encourage deep relaxation and a meditative state of awareness.' },
  { question: 'Do I need any experience to attend a sound bath?', answer: 'No experience is needed at all. Sound baths are suitable for everyone, including those who have never tried meditation or yoga. You simply need to lie still and receive the sound.' },
  { question: 'What should I bring to a sound bath?', answer: 'Comfortable warm clothing, as the body can cool down during deep relaxation. You may wish to bring a blanket or eye mask for extra comfort. Mats and bolsters are provided.' },
  { question: 'How long does a sound bath last?', answer: 'Sessions typically last 60 to 90 minutes, including time for settling in and a gentle return to full awareness at the end.' },
  { question: 'Is sound healing evidence-based?', answer: 'Research into sound therapy is growing. Many participants report reduced anxiety, improved sleep and a deep sense of calm. The vibrations are thought to help shift brainwave states toward relaxation and rest.' },
];

export default function SoundBathsPage() {
  return (
    <>
      <JsonLd data={courseSchema('Sound Bath Sessions', 'Immersive relaxation experiences using singing bowls and resonant instruments in the Scottish Highlands.', 'sound-baths') as unknown as Record<string, unknown>} />

      <Hero
        variant="narrow"
        title="Sound Bath Sessions"
        subtitle="Immersive relaxation using singing bowls and resonant instruments — deep rest for body and mind"
        bgGradient="from-forest/80 to-sage/50"
      />
      <Breadcrumbs items={[{ name: 'Classes', url: '/classes' }, { name: 'Sound Baths', url: '/classes/sound-baths' }]} />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <p className="text-lg text-peat/70 leading-relaxed mb-6">
              Sound baths are immersive relaxation experiences that use sound and vibration to encourage deep rest and calm. <Link href="/about/audrey-buchanan" className="text-sage hover:text-forest underline">Audrey</Link> trained in Sacred Sound and mantra practices through Yoga Campus, bringing authenticity and depth to every session she offers in the Scottish Highlands.
            </p>
            <p className="text-peat/70 leading-relaxed mb-6">
              During a session at Present Heart Living near Inverness, instruments such as singing bowls, chimes and other resonant tools are played to create gentle layers of sound. Participants usually lie comfortably while the sound fills the space, allowing the mind and body to settle into profound stillness.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">What to Expect in a Sound Bath</h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              The vibrations produced by singing bowls and other instruments can help shift attention away from busy thoughts and into a more relaxed state of awareness. Many people describe the experience as deeply calming and restorative — a unique form of healing that works on levels beyond words.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              Sound baths are often combined with relaxation practices or meditation, creating an environment where the nervous system can slow down and release tension. Sessions may also include brief periods of guided <Link href="/classes/breathwork" className="text-sage hover:text-forest underline">breathwork</Link> to help participants settle into receptivity.
            </p>
            <p className="text-peat/70 leading-relaxed">
              The sessions are suitable for anyone seeking a quiet and supportive space to relax. No previous experience with meditation or yoga is required. For many participants from Inverness, the Black Isle and across the Highlands, sound baths provide a rare opportunity to rest fully and step away from the constant stimulation of modern life.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">Benefits of Sound Bath Sessions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {[
                'Deep relaxation and stress relief',
                'Improved sleep quality',
                'Reduced anxiety and mental chatter',
                'Enhanced sense of calm and peace',
                'Release of physical tension',
                'Meditative state without effort',
                'Support for emotional processing',
                'A rare opportunity for complete rest',
              ].map((b) => (
                <div key={b} className="flex items-start gap-2 text-peat/70 text-sm">
                  <span className="text-sage mt-0.5">✓</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 bg-sand/10">
        <div className="max-w-2xl mx-auto px-4">
          <TestimonialCard
            quote="The sound bath was unlike anything I've experienced before. I felt completely held by the sound — waves of relaxation washing through me. I slept better that night than I had in months."
            author="Fiona K."
            context="Sound bath attendee, Dingwall"
          />
        </div>
      </section>

      <FAQAccordion faqs={faqs} />

      <RelatedClasses
        classes={[
          { title: 'Restorative Yoga', href: '/classes/restorative-yoga', description: 'Deep relaxation through supported postures.', icon: '🕊️' },
          { title: 'Breathwork', href: '/classes/breathwork', description: 'Conscious breathing for calm and clarity.', icon: '🌬️' },
          { title: 'Yin Yoga', href: '/classes/yin-yoga', description: 'Slow, meditative practice for body and mind.', icon: '🌙' },
        ]}
      />

      <CTABanner
        heading="Experience Deep Rest Through Sound"
        description="Sound bath sessions in the Scottish Highlands. No experience needed — simply come and receive."
        primaryCTA={{ label: 'Join a Sound Bath', href: '/contact' }}
        secondaryCTA={{ label: 'View All Classes', href: '/classes' }}
      />
    </>
  );
}
