import Link from 'next/link';

const footerLinks = {
  Classes: [
    { label: 'Seasonal Flow Yoga', href: '/classes/seasonal-flow-yoga' },
    { label: 'Restorative Yoga', href: '/classes/restorative-yoga' },
    { label: 'Yin Yoga', href: '/classes/yin-yoga' },
    { label: 'Pilates', href: '/classes/pilates' },
    { label: 'Breathwork', href: '/classes/breathwork' },
    { label: 'Sound Baths', href: '/classes/sound-baths' },
  ],
  Retreats: [
    { label: 'All Retreats', href: '/retreats' },
    { label: 'UK Retreats', href: '/retreats/uk-retreats' },
    { label: 'International Retreats', href: '/retreats/international-retreats' },
    { label: 'Retreat Experience', href: '/retreats/retreat-experience' },
  ],
  'Local Classes': [
    { label: 'Yoga Classes Inverness', href: '/locations/yoga-classes-inverness' },
    { label: 'Yoga Classes Black Isle', href: '/locations/yoga-classes-black-isle' },
    { label: 'Pilates Highlands', href: '/locations/pilates-classes-highlands' },
    { label: 'Beginner Yoga', href: '/locations/beginner-yoga-classes' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Meet Audrey', href: '/about/audrey-buchanan' },
    { label: 'Corporate Wellbeing', href: '/corporate-wellbeing' },
    { label: 'Journal', href: '/journal' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-forest text-white/80">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand + NAP */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-white font-heading text-xl font-medium">
              Present Heart Living
            </Link>
            <address className="not-italic mt-4 text-sm leading-relaxed text-white/60">
              9 Breac An Ord<br />
              Maryburgh<br />
              Ross-shire<br />
              IV7 8DH<br />
              Scottish Highlands
            </address>
            <div className="mt-4 space-y-1 text-sm">
              <p>
                <a href="tel:07805899207" className="text-white/60 hover:text-gold transition-colors">
                  07805 899207
                </a>
              </p>
              <p>
                <a href="mailto:presentheartyoga@gmail.com" className="text-white/60 hover:text-gold transition-colors">
                  presentheartyoga@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-heading text-lg mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Present Heart Living. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm text-white/40">
            <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white/70 transition-colors">Terms</Link>
            <Link href="/cookie-policy" className="hover:text-white/70 transition-colors">Cookies</Link>
            <Link href="/accessibility" className="hover:text-white/70 transition-colors">Accessibility</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
