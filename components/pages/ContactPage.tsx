import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { getLocaleContent, type Locale } from '@/data/site-content';
import styles from '@/components/pages/InternalPage.module.css';

export function ContactPage({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);
  const currentPath = locale === 'en' ? '/en/contact' : '/zh/contact';

  return (
    <main className={styles.page}>
      <SiteHeader currentPath={currentPath} locale={locale} />
      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionLabel>{content.navigation.contact}</SectionLabel>
          <h1 className={styles.title}>{content.contact.heading}</h1>
          <p className={styles.intro}>{content.contact.intro}</p>
          <a className={styles.contactEmail} href="mailto:thuang0209@outlook.com">
            thuang0209@outlook.com
          </a>
          <p className={styles.note}>{content.contact.invitation}</p>
          <div className={styles.contactLinks}>
            {content.contactLinks.map((link) => (
              <Link
                key={link.label}
                className={styles.contactLink}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
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
