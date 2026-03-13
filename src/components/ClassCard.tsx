'use client';

import Link from 'next/link';
import FadeIn from './FadeIn';

interface ClassCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  delay?: number;
}

export default function ClassCard({ title, description, href, icon, delay = 0 }: ClassCardProps) {
  return (
    <FadeIn delay={delay}>
      <Link
        href={href}
        className="group block bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-mist/50 hover:border-sage/30"
      >
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="font-heading text-xl text-forest mb-3 group-hover:text-sage transition-colors">
          {title}
        </h3>
        <p className="text-peat/70 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <span className="text-sage text-sm font-medium group-hover:underline">
          Learn more →
        </span>
      </Link>
    </FadeIn>
  );
}
