'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeIn from './FadeIn';

interface ClassCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
  imageSrc?: string;
  imageAlt?: string;
  delay?: number;
}

export default function ClassCard({ title, description, href, icon, imageSrc, imageAlt, delay = 0 }: ClassCardProps) {
  return (
    <FadeIn delay={delay}>
      <Link
        href={href}
        className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-mist/50 hover:border-sage/30 h-full"
      >
        {imageSrc ? (
          <div className="relative aspect-[3/2]">
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : icon ? (
          <div className="pt-8 px-8">
            <div className="text-4xl mb-4">{icon}</div>
          </div>
        ) : null}
        <div className={`flex-1 flex flex-col ${imageSrc ? 'p-6' : icon ? 'px-8 pb-8' : 'p-8'}`}>
          {!imageSrc && !icon && <div className="mb-4" />}
          <h3 className="font-heading text-xl text-forest mb-3 group-hover:text-sage transition-colors">
            {title}
          </h3>
          <p className="text-peat/70 text-sm leading-relaxed mb-4">
            {description}
          </p>
          <span className="text-sage text-sm font-medium group-hover:underline mt-auto">
            Learn more →
          </span>
        </div>
      </Link>
    </FadeIn>
  );
}
