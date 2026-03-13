import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';
import FAQAccordion from '@/components/FAQAccordion';
import JsonLd from '@/components/JsonLd';
import { serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Corporate Yoga & Wellbeing | Highlands Workplace Programmes',
  description:
    'Corporate wellbeing sessions including yoga, breathwork and mindfulness workshops for businesses in the Scottish Highlands. Support healthier, happier workplaces. Enquire today.',
  alternates: { canonical: 'https://presentheartliving.co.uk/corporate-wellbeing' },
  openGraph: {
    title: 'Corporate Yoga & Wellbeing | Present Heart Living',
    description:
      'Workplace yoga, breathwork and mindfulness programmes for Scottish Highlands businesses. Reduce staff stress, improve focus and support employee wellbeing. Enquire today.',
    url: 'https://presentheartliving.co.uk/corporate-wellbeing',
    siteName: 'Present Heart Living',
    locale: 'en_GB',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is included in a corporate wellbeing session?',
    answer:
      'Sessions can include desk-friendly yoga, breathwork exercises, guided relaxation and mindfulness practices. Programmes are tailored to the needs and time constraints of your team.',
  },
  {
    question: 'Do employees need yoga experience?',
    answer:
      'No. All sessions are designed to be accessible for people with no previous experience. Practices are gentle and adapted to suit a workplace environment.',
  },
  {
    question: 'Where do corporate sessions take place?',
    answer:
      'Sessions can be delivered at your workplace, at the Present Heart Living studio, or at an external venue of your choice across the Scottish Highlands.',
  },
  {
    question: 'How long is a typical corporate session?',
    answer:
      'Sessions can be adapted to suit your schedule. Common formats include 30-minute lunchtime sessions, 60-minute workshops and half-day wellbeing programmes.',
  },
  {
    question: 'Can programmes be tailored for our organisation?',
    answer:
      'Absolutely. Audrey works with each organisation to understand their needs and develop a programme that addresses specific wellbeing goals, whether that is stress reduction, team building or ongoing employee support.',
  },
];

const sessionTypes = [
  {
    title: 'Desk-Friendly Yoga',
    description:
      'Gentle stretches and movements that can be practised at or near a desk, designed to relieve physical tension from prolonged sitting.',
    icon: '💻',
  },
  {
    title: 'Breathwork Sessions',
    description:
      'Conscious breathing techniques to help employees manage stress, improve focus and find calm during busy working days.',
    icon: '🌬️',
  },
  {
    title: 'Mindfulness Workshops',
    description:
      'Practical mindfulness exercises that teams can use daily to support awareness, concentration and emotional resilience.',
    icon: '🧘',
  },
  {
    title: 'Group Yoga Classes',
    description:
      'Accessible yoga sessions for teams of all experience levels, building connection and supporting physical wellbeing.',
    icon: '🌿',
  },
  {
    title: 'Sound Bath Experiences',
    description:
      'Immersive sound-based relaxation sessions that help teams release accumulated tension and restore calm.',
    icon: '🔔',
  },
  {
    title: 'Wellbeing Programmes',
    description:
      'Ongoing programmes designed to embed wellbeing practices into workplace culture over weeks or months.',
    icon: '📋',
  },
];

export default function CorporateWellbeingPage() {
  return (
    <>
      <JsonLd
        data={
          serviceSchema(
            'Corporate Wellbeing Programmes',
            'Corporate yoga, breathwork and mindfulness sessions designed to support healthier workplaces across the Scottish Highlands. Tailored programmes for organisations of all sizes.',
            '/corporate-wellbeing'
          ) as unknown as Record<string, unknown>
        }
      />

      <Hero
        variant="narrow"
        title="Corporate Wellbeing Programmes"
        subtitle="Yoga, breathwork and mindfulness sessions designed to support healthier, happier workplaces across the Scottish Highlands"
        bgGradient="from-forest/85 to-sage/55"
      />
      <Breadcrumbs
        items={[{ name: 'Corporate Wellbeing', url: '/corporate-wellbeing' }]}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">
              Supporting Wellbeing in the Workplace
            </h2>
            <p className="text-lg text-peat/70 leading-relaxed mb-6">
              Modern working environments can place significant demands on both physical and mental
              wellbeing. Long hours at desks, constant digital communication and the pressures of busy
              schedules can often lead to fatigue, stress and reduced focus.
            </p>
            <p className="text-peat/70 leading-relaxed mb-6">
              Corporate wellbeing programmes offer organisations an opportunity to support their teams by
              creating space for movement, relaxation and mindful awareness. At Present Heart Living,
              sessions are designed to help employees step away from the demands of their workday and
              reconnect with their bodies through simple movement and breathing practices.
            </p>
            <p className="text-peat/70 leading-relaxed">
              These sessions can be particularly beneficial for teams experiencing workplace stress, those
              working in sedentary roles, or organisations seeking to foster a culture of care and wellbeing.
              Learn more about{' '}
              <Link href="/about/audrey-buchanan" className="text-sage hover:text-forest underline">
                Audrey Buchanan&apos;s
              </Link>{' '}
              approach to teaching and her background in education.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-sand/10">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading
            title="Benefits of Workplace Wellbeing"
            subtitle="Supporting employees supports the whole organisation"
          />
          <FadeIn delay={0.1}>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Reduced Stress', desc: 'Yoga and breathwork help regulate the nervous system, supporting calmer and more focused employees.' },
                { title: 'Improved Focus', desc: 'Mindfulness practices enhance concentration and attention, supporting better decision-making.' },
                { title: 'Physical Wellbeing', desc: 'Gentle movement reduces physical tension from desk work, supporting posture and flexibility.' },
                { title: 'Team Connection', desc: 'Shared wellbeing experiences foster a sense of connection and support within teams.' },
                { title: 'Reduced Absenteeism', desc: 'Investment in employee wellbeing can contribute to reduced sick leave and improved morale.' },
                { title: 'Positive Culture', desc: 'Embedding wellbeing practices signals that an organisation values its people and their health.' },
              ].map((b, i) => (
                <FadeIn key={b.title} delay={0.1 + i * 0.05}>
                  <div className="bg-white rounded-xl p-6 border border-mist/50">
                    <h3 className="font-heading text-lg text-forest mb-2">{b.title}</h3>
                    <p className="text-sm text-peat/70 leading-relaxed">{b.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            title="Session Options"
            subtitle="Flexible formats tailored to your organisation&apos;s needs"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {sessionTypes.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-mist/50 h-full">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-heading text-lg text-forest mb-2">{s.title}</h3>
                  <p className="text-sm text-peat/60 leading-relaxed">{s.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-sand/10">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading
            title="How It Works"
            subtitle="A simple process to bring wellbeing into your workplace"
          />
          <FadeIn delay={0.1}>
            <div className="mt-10 space-y-8">
              {[
                { step: '01', title: 'Initial Conversation', desc: 'We discuss your organisation\'s needs, team size, available space and wellbeing goals.' },
                { step: '02', title: 'Tailored Programme', desc: 'Audrey designs a programme that fits your schedule, space and the specific needs of your team.' },
                { step: '03', title: 'Delivery', desc: 'Sessions are delivered at your workplace, our studio or an external venue at times that suit your team.' },
                { step: '04', title: 'Ongoing Support', desc: 'For organisations seeking ongoing wellbeing support, regular programmes can be arranged on a weekly, fortnightly or monthly basis.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="text-sage font-heading text-2xl font-semibold">{item.step}</div>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-1">{item.title}</h3>
                    <p className="text-peat/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <FAQAccordion faqs={faqs} />

      <CTABanner
        heading="Bring Wellbeing to Your Workplace"
        description="Discover how yoga, breathwork and mindfulness can support your team. Programmes tailored for organisations across the Scottish Highlands."
        primaryCTA={{ label: 'Enquire Now', href: '/contact' }}
        secondaryCTA={{ label: 'Explore Classes', href: '/classes' }}
      />
    </>
  );
}
