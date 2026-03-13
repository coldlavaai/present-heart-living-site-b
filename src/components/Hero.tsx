'use client';

import Link from 'next/link';
import FadeIn from './FadeIn';

interface HeroProps {
  title: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  variant?: 'full' | 'narrow';
  bgGradient?: string;
}

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  variant = 'full',
  bgGradient,
}: HeroProps) {
  const isNarrow = variant === 'narrow';
  const gradient = bgGradient || 'from-forest/90 via-forest/70 to-forest/50';

  return (
    <section
      className={`relative bg-gradient-to-br ${gradient} flex items-center justify-center text-center ${
        isNarrow ? 'pt-32 pb-16 md:pt-36 md:pb-20' : 'min-h-[80vh] md:min-h-[90vh]'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4">
        <FadeIn>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4 drop-shadow-sm">
            {title}
          </h1>
        </FadeIn>
        {subtitle && (
          <FadeIn delay={0.15}>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              {subtitle}
            </p>
          </FadeIn>
        )}
        {(primaryCTA || secondaryCTA) && (
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="inline-flex items-center justify-center bg-white text-forest px-8 py-3.5 rounded-lg font-medium hover:bg-linen transition-colors"
                >
                  {primaryCTA.label}
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center border border-white/40 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  {secondaryCTA.label}
                </Link>
              )}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
