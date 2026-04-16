import Link from 'next/link';
import { getAlternatePath } from '@/lib/locale';
import type { Locale } from '@/data/site-content';
import styles from '@/components/layout/SiteChrome.module.css';

export function LocaleSwitcher({ locale, currentPath }: { locale: Locale; currentPath: string }) {
  const enPath = getAlternatePath(currentPath, 'en');
  const zhPath = getAlternatePath(currentPath, 'zh');

  return (
    <div className={styles.localeSwitcher}>
      <Link className={[styles.localeLink, locale === 'en' ? styles.localeLinkActive : ''].filter(Boolean).join(' ')} href={enPath}>
        EN
      </Link>
      <Link className={[styles.localeLink, locale === 'zh' ? styles.localeLinkActive : ''].filter(Boolean).join(' ')} href={zhPath}>
        中
      </Link>
    </div>
  );
}
