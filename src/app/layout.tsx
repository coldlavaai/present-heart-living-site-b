import type { Metadata } from 'next';
import { Cormorant_Garamond, Nunito_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
});

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Yoga & Pilates Classes Scottish Highlands | Present Heart Living',
    template: '%s | Present Heart Living',
  },
  description:
    'Yoga, Pilates and breathwork classes in the Scottish Highlands with Present Heart Living. Mindful movement, retreats and restorative practices near Inverness. Book your class today.',
  metadataBase: new URL('https://presentheartliving.co.uk'),
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${nunito.variable}`}>
      <body className="bg-linen text-peat font-body antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-sage focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
