import type { MetadataRoute } from 'next';

const BASE_URL = 'https://presentheartliving.co.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const routes: MetadataRoute.Sitemap = [
    // Core pages
    { url: `${BASE_URL}`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/about/audrey-buchanan`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/about/teaching-philosophy`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // Classes
    { url: `${BASE_URL}/classes`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/classes/seasonal-flow-yoga`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/classes/restorative-yoga`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/classes/yin-yoga`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/classes/pilates`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/classes/breathwork`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/classes/sound-baths`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Retreats
    { url: `${BASE_URL}/retreats`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/retreats/uk-retreats`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/retreats/international-retreats`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/retreats/retreat-experience`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Local SEO pages
    { url: `${BASE_URL}/yoga-classes-inverness`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/yoga-classes-black-isle`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/pilates-classes-highlands`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/beginner-yoga-classes-highlands`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // Corporate & Journal
    { url: `${BASE_URL}/corporate-wellbeing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/journal`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },

    // Contact
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Legal pages
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms-and-conditions`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/cookie-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/accessibility`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  return routes;
}
