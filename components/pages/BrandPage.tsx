import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { getLocaleContent, type Locale } from '@/data/site-content';
import { getLocalizedPath } from '@/lib/locale';
import styles from '@/components/pages/InternalPage.module.css';

export function BrandPage({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);
  const currentPath = locale === 'en' ? '/en/brand' : '/zh/brand';
  const brand = content.brandLink;

  return (
    <main className={styles.page}>
      <SiteHeader currentPath={currentPath} locale={locale} />
      <section className={styles.section}>
        <div className={[styles.inner, styles.panel, styles.panelNarrow].join(' ')}>
          <SectionLabel>{content.navigation.brand}</SectionLabel>
          <h1 className={styles.title}>{content.brand.heading}</h1>
          <p className={styles.intro}>{content.brand.intro}</p>
          <p className={styles.note}>{content.brand.futureLine}</p>
          <div className={styles.actions}>
            <ButtonLink href={getLocalizedPath(locale, 'home')} variant="secondary">
              {locale === 'en' ? 'Back to home' : '返回首页'}
            </ButtonLink>
            {brand.status === 'external' && brand.externalUrl ? (
              <ButtonLink external href={brand.externalUrl}>{locale === 'en' ? 'Open brand site' : '打开品牌站'}</ButtonLink>
            ) : null}
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
