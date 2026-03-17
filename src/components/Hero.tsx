'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeIn from './FadeIn';

interface HeroProps {
  title: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  variant?: 'full' | 'narrow';
  bgGradient?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  variant = 'full',
  bgGradient,
  imageSrc,
  imageAlt,
}: HeroProps) {
  const isNarrow = variant === 'narrow';
  const gradient = bgGradient || 'from-forest/90 via-forest/70 to-forest/50';

  return (
    <section
      className={`relative flex items-center justify-center text-center overflow-hidden ${
        isNarrow ? 'pt-32 pb-16 md:pt-36 md:pb-20' : 'min-h-[80vh] md:min-h-[90vh]'
      } ${!imageSrc ? `bg-gradient-to-br ${gradient}` : ''}`}
    >
      {imageSrc && (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt || ''}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/40 to-white/30" />
        </>
      )}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <FadeIn>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-forest mb-4 drop-shadow-sm" style={{ color: '#2d3b2d' }}>
            {title}
          </h1>
        </FadeIn>
        {subtitle && (
          <FadeIn delay={0.15}>
            <p className="text-lg md:text-xl text-peat max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: '#4a5548' }}>
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
                  className="inline-flex items-center justify-center bg-sage text-white px-8 py-3.5 rounded-lg font-medium hover:bg-forest transition-colors"
                  style={{ color: '#FFFFFF' }}
                >
                  {primaryCTA.label}
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center border border-forest/40 text-forest px-8 py-3.5 rounded-lg font-medium hover:bg-forest/10 transition-colors"
                  style={{ color: '#2d3b2d' }}
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
