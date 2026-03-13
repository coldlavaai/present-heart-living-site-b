import Link from 'next/link';
import JsonLd from './JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

interface BreadcrumbItem {
  name: string;
  url: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: 'Home', url: '/' }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(allItems) as unknown as Record<string, unknown>} />
      <nav aria-label="Breadcrumb" className="py-4 px-4 max-w-7xl mx-auto">
        <ol className="flex flex-wrap gap-1 text-sm text-peat/60">
          {allItems.map((item, i) => (
            <li key={item.url} className="flex items-center gap-1">
              {i > 0 && <span className="text-sand">/</span>}
              {i === allItems.length - 1 ? (
                <span className="text-forest font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.url} className="hover:text-sage transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
