'use client';

import { useState } from 'react';
import FadeIn from './FadeIn';
import JsonLd from './JsonLd';
import { faqSchema } from '@/lib/schema';

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQAccordion({ faqs, title = 'Frequently Asked Questions' }: { faqs: FAQ[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20">
      <JsonLd data={faqSchema(faqs) as unknown as Record<string, unknown>} />
      <div className="max-w-3xl mx-auto px-4">
        <FadeIn>
          <h2 className="font-heading text-2xl md:text-3xl text-forest text-center mb-10">
            {title}
          </h2>
        </FadeIn>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="bg-white rounded-xl border border-mist/50 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4"
                  aria-expanded={openIndex === i}
                >
                  <h3 className="font-heading text-lg text-forest font-medium">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-sage shrink-0 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-96 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 text-peat/70 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
