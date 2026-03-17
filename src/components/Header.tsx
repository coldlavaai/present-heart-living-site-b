'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navItems = [
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Meet Audrey Buchanan', href: '/about/audrey-buchanan' },
      { label: 'Teaching Philosophy', href: '/about/teaching-philosophy' },
    ],
  },
  {
    label: 'Classes',
    href: '/classes',
    children: [
      { label: 'Seasonal Flow Yoga', href: '/classes/seasonal-flow-yoga' },
      { label: 'Restorative Yoga', href: '/classes/restorative-yoga' },
      { label: 'Yin Yoga', href: '/classes/yin-yoga' },
      { label: 'Pilates', href: '/classes/pilates' },
      { label: 'Breathwork', href: '/classes/breathwork' },
      { label: 'Sound Baths', href: '/classes/sound-baths' },
    ],
  },
  {
    label: 'Retreats',
    href: '/retreats',
    children: [
      { label: 'UK Retreats', href: '/retreats/uk-retreats' },
      { label: 'International Retreats', href: '/retreats/international-retreats' },
      { label: 'The Retreat Experience', href: '/retreats/retreat-experience' },
    ],
  },
  {
    label: 'Local Classes',
    href: '/locations',
    children: [
      { label: 'Yoga Classes Inverness', href: '/yoga-classes-inverness' },
      { label: 'Yoga Classes Black Isle', href: '/yoga-classes-black-isle' },
      { label: 'Pilates Highlands', href: '/pilates-classes-highlands' },
      { label: 'Beginner Yoga', href: '/beginner-yoga-classes-highlands' },
    ],
  },
  { label: 'Corporate', href: '/corporate-wellbeing' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-linen/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="transition-colors" style={{ color: scrolled ? '#2d3b2d' : '#FFFFFF' }}>
          <span className="font-heading text-xl md:text-2xl font-medium tracking-wide" style={{ color: 'inherit' }}>
            Present Heart Living
          </span>
          <span className="hidden md:block text-xs tracking-widest mt-0.5" style={{ color: scrolled ? 'rgba(45,59,45,0.5)' : 'rgba(255,255,255,0.8)' }}>
            Yoga · Pilates · Breathwork · Retreats
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative group"
              onMouseEnter={() => item.children && setOpenDropdown(item.href)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="text-sm font-medium hover:text-sage transition-colors py-2" style={{ color: '#7A8B6F' }}
              >
                {item.label}
              </Link>
              {item.children && openDropdown === item.href && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-white rounded-lg shadow-lg border border-mist/50 py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-peat hover:bg-linen hover:text-sage transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex bg-sage text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-forest transition-colors"
            style={{ color: '#FFFFFF' }}
          >
            Book a Class
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2" style={{ color: '#7A8B6F' }}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-linen/98 backdrop-blur-md border-t border-mist">
          <nav className="max-w-7xl mx-auto px-4 py-6 space-y-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-forest hover:text-sage transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm text-peat/70 hover:text-sage transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block bg-sage text-white px-5 py-3 rounded-lg text-center font-medium hover:bg-forest transition-colors mt-4"
              style={{ color: '#FFFFFF' }}
            >
              Book a Class
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
