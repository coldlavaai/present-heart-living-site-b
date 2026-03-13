'use client';

import Link from 'next/link';
import FadeIn from './FadeIn';

interface RelatedClass {
  title: string;
  href: string;
  description: string;
  icon: string;
}

export default function RelatedClasses({
  classes,
  title = 'You Might Also Enjoy',
}: {
  classes: RelatedClass[];
  title?: string;
}) {
  return (
    <section className="py-16 md:py-20 bg-sand/10">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn>
          <h2 className="font-heading text-2xl md:text-3xl text-forest text-center mb-10">
            {title}
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {classes.map((cls, i) => (
            <FadeIn key={cls.href} delay={i * 0.1}>
              <Link
                href={cls.href}
                className="group block bg-white rounded-xl p-6 shadow-sm border border-mist/50 hover:border-sage/30 hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3">{cls.icon}</div>
                <h3 className="font-heading text-lg text-forest group-hover:text-sage transition-colors mb-2">
                  {cls.title}
                </h3>
                <p className="text-sm text-peat/60">{cls.description}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
