import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { getLocaleContent, resumeFile, type Locale } from '@/data/site-content';
import styles from '@/components/pages/InternalPage.module.css';

export function ResumePage({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);
  const currentPath = locale === 'en' ? '/en/resume' : '/zh/resume';

  return (
    <main className={styles.page}>
      <SiteHeader currentPath={currentPath} locale={locale} />
      <section className={styles.section}>
        <div className={[styles.inner, styles.split].join(' ')}>
          <div>
            <SectionLabel>{content.navigation.resume}</SectionLabel>
            <h1 className={styles.title}>{content.resume.heading}</h1>
            <p className={styles.intro}>{content.resume.intro}</p>
            <div className={styles.actions}>
              <ButtonLink download href={resumeFile}>{content.resume.downloadLabel}</ButtonLink>
            </div>
          </div>
          <div className={styles.panel}>
            <p className={styles.panelEyebrow}>PDF</p>
            <p className={styles.panelTitle}>{content.resume.filename}</p>
            <ul className={styles.detailList}>
              {content.resume.details.map((item) => (
                <li key={item} className={styles.detailItem}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
