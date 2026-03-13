/* JSON-LD Schema helpers for Present Heart Living */

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'Present Heart Living',
  founder: {
    '@type': 'Person',
    name: 'Audrey Buchanan',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '9 Breac An Ord',
    addressLocality: 'Maryburgh',
    addressRegion: 'Ross-shire',
    postalCode: 'IV7 8DH',
    addressCountry: 'GB',
  },
  telephone: '07805 899207',
  email: 'presentheartyoga@gmail.com',
  url: 'https://presentheartliving.co.uk',
  description:
    'Yoga, Pilates and breathwork classes in the Scottish Highlands. Mindful movement, restorative practices and retreats designed to support balance and wellbeing.',
  priceRange: '££',
  areaServed: [
    { '@type': 'Place', name: 'Inverness' },
    { '@type': 'Place', name: 'Black Isle' },
    { '@type': 'Place', name: 'Scottish Highlands' },
    { '@type': 'Place', name: 'Dingwall' },
    { '@type': 'Place', name: 'Muir of Ord' },
    { '@type': 'Place', name: 'Beauly' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Yoga & Pilates Classes',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seasonal Flow Yoga' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Restorative Yoga' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Yin Yoga' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pilates' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Breathwork' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sound Baths' } },
    ],
  },
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Audrey Buchanan',
  jobTitle: 'Yoga Teacher & Founder',
  worksFor: {
    '@type': 'Organization',
    name: 'Present Heart Living',
  },
  description:
    'Founder of Present Heart Living with over 30 years of yoga practice. 500hr Yoga Alliance qualified, breathwork facilitator, trauma-informed yoga teacher based in the Scottish Highlands.',
  knowsAbout: ['Yoga', 'Pilates', 'Breathwork', 'Mindfulness', 'Meditation', 'Sound Healing'],
  alumniOf: [
    { '@type': 'EducationalOrganization', name: 'Yoga Alliance (500hr)' },
    { '@type': 'EducationalOrganization', name: 'Yoga Campus' },
  ],
  url: 'https://presentheartliving.co.uk/about/audrey-buchanan',
};

export function courseSchema(name: string, description: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Present Heart Living',
      url: 'https://presentheartliving.co.uk',
    },
    courseMode: 'onsite',
    location: {
      '@type': 'Place',
      name: 'Present Heart Living Studio',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9 Breac An Ord',
        addressLocality: 'Maryburgh',
        addressRegion: 'Ross-shire',
        postalCode: 'IV7 8DH',
        addressCountry: 'GB',
      },
    },
    url: `https://presentheartliving.co.uk/classes/${slug}`,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://presentheartliving.co.uk${item.url}`,
    })),
  };
}

export function eventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Scottish Highlands',
        addressCountry: 'GB',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Present Heart Living',
      url: 'https://presentheartliving.co.uk',
    },
    url: event.url,
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: 'Audrey Buchanan',
      url: 'https://presentheartliving.co.uk/about/audrey-buchanan',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Present Heart Living',
      url: 'https://presentheartliving.co.uk',
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    url: `https://presentheartliving.co.uk/journal/${article.slug}`,
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Present Heart Living',
      url: 'https://presentheartliving.co.uk',
    },
    areaServed: [
      { '@type': 'Place', name: 'Scottish Highlands' },
      { '@type': 'Place', name: 'Inverness' },
      { '@type': 'Place', name: 'Black Isle' },
    ],
    url: `https://presentheartliving.co.uk${url}`,
  };
}
