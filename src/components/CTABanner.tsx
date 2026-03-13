'use client';

import Link from 'next/link';
import FadeIn from './FadeIn';

interface CTABannerProps {
  heading: string;
  description?: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  variant?: 'sage' | 'forest' | 'sand';
}

const variants = {
  sage: 'bg-sage/10',
  forest: 'bg-forest',
  sand: 'bg-sand/20',
};

export default function CTABanner({
  heading,
  description,
  primaryCTA,
  secondaryCTA,
  variant = 'forest',
}: CTABannerProps) {
  const isLight = variant !== 'forest';
  return (
    <section className={`${variants[variant]} py-16 md:py-20`}>
      <FadeIn className="max-w-3xl mx-auto px-4 text-center">
        <h2
          className={`font-heading text-2xl md:text-3xl lg:text-4xl mb-4 ${
            isLight ? 'text-forest' : 'text-white'
          }`}
        >
          {heading}
        </h2>
        {description && (
          <p className={`text-lg mb-8 ${isLight ? 'text-peat/70' : 'text-white/70'}`}>
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCTA.href}
            className={`inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-medium text-base transition-colors ${
              isLight
                ? 'bg-sage text-white hover:bg-forest'
                : 'bg-white text-forest hover:bg-linen'
            }`}
          >
            {primaryCTA.label}
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className={`inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-medium text-base border transition-colors ${
                isLight
                  ? 'border-sage text-sage hover:bg-sage hover:text-white'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </FadeIn>
    </section>
  );
}
