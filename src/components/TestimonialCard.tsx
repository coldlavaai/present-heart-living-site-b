'use client';

import FadeIn from './FadeIn';

interface TestimonialCardProps {
  quote: string;
  author: string;
  context?: string;
  delay?: number;
}

export default function TestimonialCard({ quote, author, context, delay = 0 }: TestimonialCardProps) {
  return (
    <FadeIn delay={delay}>
      <div
        className="bg-white rounded-xl p-8 shadow-sm border border-mist/50"
        itemScope
        itemType="https://schema.org/Review"
      >
        <svg className="w-8 h-8 text-sage/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="font-heading text-lg italic text-forest/80 leading-relaxed mb-4" itemProp="reviewBody">
          &ldquo;{quote}&rdquo;
        </p>
        <div>
          <p className="font-medium text-forest text-sm" itemProp="author">{author}</p>
          {context && <p className="text-xs text-peat/50 mt-1">{context}</p>}
        </div>
      </div>
    </FadeIn>
  );
}
