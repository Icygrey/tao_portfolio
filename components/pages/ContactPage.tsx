import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { getLocaleContent, type Locale } from '@/data/site-content';

export function ContactPage({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);
  const currentPath = locale === 'en' ? '/en/contact' : '/zh/contact';

  return (
    <main>
      <SiteHeader currentPath={currentPath} locale={locale} />
      <section className="px-5 pb-20 pt-10 md:px-8 md:pb-28">
        <div className="mx-auto max-w-[1440px]">
          <SectionLabel>{content.navigation.contact}</SectionLabel>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl tracking-tight text-ink md:text-7xl">{content.contact.heading}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-ink/72 md:text-lg">{content.contact.intro}</p>
          <a className="mt-10 inline-block font-serif text-[clamp(2rem,5vw,5.4rem)] leading-none tracking-tight text-ink" href="mailto:thuang0209@outlook.com">
            thuang0209@outlook.com
          </a>
          <p className="mt-4 text-sm leading-7 text-ink/56">{content.contact.invitation}</p>
          <div className="mt-10 flex flex-wrap gap-6 text-xs uppercase tracking-[0.2em] text-ink/62">
            {content.contactLinks.map((link) => (
              <Link key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
