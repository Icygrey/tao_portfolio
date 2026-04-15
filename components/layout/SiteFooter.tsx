import Link from 'next/link';
import { getLocaleContent, type Locale } from '@/data/site-content';

export function SiteFooter({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);

  return (
    <footer className="border-t border-line/70 px-5 py-10 md:px-8">
      <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[1.3fr_1fr] md:items-end">
        <div>
          <p className="font-serif text-3xl italic tracking-tight text-ink md:text-4xl">
            {locale === 'en' ? 'Software, image, and quiet ambition.' : '软件、影像，以及安静的野心。'}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-ink/66">{content.footerNote}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-ink/62 md:justify-end">
          {content.contactLinks.map((link) => {
            const external = link.href.startsWith('http');
            return external ? (
              <a key={link.label} href={link.href} rel="noreferrer" target="_blank">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
