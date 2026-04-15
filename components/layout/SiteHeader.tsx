import Link from 'next/link';
import { getLocaleContent, type Locale } from '@/data/site-content';
import { getLocalizedPath } from '@/lib/locale';
import { LocaleSwitcher } from '@/components/layout/LocaleSwitcher';

export function SiteHeader({ locale, currentPath }: { locale: Locale; currentPath: string }) {
  const content = getLocaleContent(locale);
  const brand = content.brandLink;

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/72 transition hover:text-ink" href={getLocalizedPath(locale, 'home')}>
          Tao Huang
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link className="text-xs uppercase tracking-[0.2em] text-ink/68 transition hover:text-ink" href={getLocalizedPath(locale, 'about')}>
            {content.navigation.about}
          </Link>
          <Link className="text-xs uppercase tracking-[0.2em] text-ink/68 transition hover:text-ink" href={getLocalizedPath(locale, 'resume')}>
            {content.navigation.resume}
          </Link>
          <Link className="text-xs uppercase tracking-[0.2em] text-ink/68 transition hover:text-ink" href={getLocalizedPath(locale, 'contact')}>
            {content.navigation.contact}
          </Link>
          {brand.status === 'external' && brand.externalUrl ? (
            <a className="text-xs uppercase tracking-[0.2em] text-ink/68 transition hover:text-ink" href={brand.externalUrl} rel="noreferrer" target="_blank">
              {content.navigation.brand}
            </a>
          ) : (
            <Link className="text-xs uppercase tracking-[0.2em] text-ink/68 transition hover:text-ink" href={brand.internalHoldingPath}>
              {content.navigation.brand}
            </Link>
          )}
        </nav>
        <LocaleSwitcher currentPath={currentPath} locale={locale} />
      </div>
    </header>
  );
}
