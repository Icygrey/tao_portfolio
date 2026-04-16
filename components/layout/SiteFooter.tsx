import Link from 'next/link';
import { getLocaleContent, type Locale } from '@/data/site-content';
import styles from '@/components/layout/SiteChrome.module.css';

export function SiteFooter({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div>
          <p className={styles.footerTitle}>
            {locale === 'en' ? 'Software, image, and quiet ambition.' : '软件、影像，以及安静的野心。'}
          </p>
          <p className={styles.footerNote}>{content.footerNote}</p>
        </div>
        <div className={styles.footerLinks}>
          {content.contactLinks.map((link) => {
            const external = link.href.startsWith('http');
            return external ? (
              <a key={link.label} className={styles.footerLink} href={link.href} rel="noreferrer" target="_blank">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} className={styles.footerLink} href={link.href}>
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
