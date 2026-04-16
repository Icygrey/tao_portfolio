import Link from 'next/link';
import { getLocaleContent, type Locale } from '@/data/site-content';
import { getLocalizedPath } from '@/lib/locale';
import { LocaleSwitcher } from '@/components/layout/LocaleSwitcher';
import styles from '@/components/layout/SiteChrome.module.css';

export function SiteHeader({ locale, currentPath }: { locale: Locale; currentPath: string }) {
  const content = getLocaleContent(locale);
  const brand = content.brandLink;

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link className={styles.brandLink} href={getLocalizedPath(locale, 'home')}>
          Tao Huang
        </Link>
        <nav className={styles.nav}>
          <Link className={styles.navLink} href={getLocalizedPath(locale, 'about')}>
            {content.navigation.about}
          </Link>
          <Link className={styles.navLink} href={getLocalizedPath(locale, 'resume')}>
            {content.navigation.resume}
          </Link>
          <Link className={styles.navLink} href={getLocalizedPath(locale, 'contact')}>
            {content.navigation.contact}
          </Link>
          {brand.status === 'external' && brand.externalUrl ? (
            <a className={styles.navLink} href={brand.externalUrl} rel="noreferrer" target="_blank">
              {content.navigation.brand}
            </a>
          ) : (
            <Link className={styles.navLink} href={brand.internalHoldingPath}>
              {content.navigation.brand}
            </Link>
          )}
        </nav>
        <LocaleSwitcher currentPath={currentPath} locale={locale} />
      </div>
    </header>
  );
}
