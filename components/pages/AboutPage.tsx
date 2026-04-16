import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { getLocaleContent, resumeFile, type Locale } from '@/data/site-content';
import styles from '@/components/pages/InternalPage.module.css';

export function AboutPage({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);
  const currentPath = locale === 'en' ? '/en/about' : '/zh/about';

  return (
    <main className={styles.page}>
      <SiteHeader currentPath={currentPath} locale={locale} />
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.narrow}>
            <SectionLabel>{content.navigation.about}</SectionLabel>
            <h1 className={styles.title}>{content.about.heading}</h1>
            <p className={styles.intro}>{content.about.intro}</p>
            <p className={styles.note}>{content.about.note}</p>
            <div className={styles.actions}>
              <ButtonLink download href={resumeFile}>{content.resume.downloadLabel}</ButtonLink>
            </div>
          </div>

          <div className={styles.timelineRail}>
            {content.timeline.items.map((item) => (
              <article key={`${item.organization}-${item.period}`} className={styles.timelineItem}>
                <span className={styles.timelineDot} />
                <div className={styles.timelineGrid}>
                  <div>
                    <p className={styles.timelinePeriod}>{item.period}</p>
                    <p className={styles.timelineLocation}>{item.location}</p>
                  </div>
                  <div>
                    <h2 className={styles.timelineTitle}>{item.organization}</h2>
                    <div className={styles.timelineMeta}>
                      <span>{item.role}</span>
                      <span className={styles.timelineDivider} />
                      <span>{item.theme}</span>
                    </div>
                    <p className={styles.timelineSummary}>{item.summary}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
