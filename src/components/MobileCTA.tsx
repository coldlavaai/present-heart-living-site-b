'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-forest/95 backdrop-blur-md border-t border-white/10 p-3">
      <Link
        href="/contact"
        className="block bg-sage text-white text-center py-3.5 rounded-lg font-medium hover:bg-sage/90 transition-colors"
      >
        Book a Class
      </Link>
    </div>
  );
}
