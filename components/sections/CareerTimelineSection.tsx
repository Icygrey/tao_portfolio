import { MotionReveal } from '@/components/ui/MotionReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { getLocaleContent, type Locale } from '@/data/site-content';
import { getLocalizedPath } from '@/lib/locale';
import sectionStyles from '@/components/sections/Sections.module.css';

export function CareerTimelineSection({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);

  return (
    <section className={sectionStyles.timelineSection}>
      <div className={sectionStyles.timelineInner}>
        <MotionReveal>
          <SectionLabel>{content.timeline.label}</SectionLabel>
          <h2 className={sectionStyles.timelineHeading}>{content.timeline.heading}</h2>
          <p className={sectionStyles.timelineIntro}>{content.timeline.intro}</p>
        </MotionReveal>
        <div className={sectionStyles.timelineGrid}>
          {content.timeline.items.slice(0, 3).map((item, index) => (
            <MotionReveal key={item.organization} delay={index * 0.06}>
              <article className={sectionStyles.timelineCard}>
                <p className={sectionStyles.timelinePeriod}>{item.period}</p>
                <p className={sectionStyles.timelineOrganization}>{item.organization}</p>
                <p className={sectionStyles.timelineRole}>{item.role}</p>
                <p className={sectionStyles.timelineSummary}>{item.summary}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
        <div className={sectionStyles.actionRow}>
          <ButtonLink href={getLocalizedPath(locale, 'about')} variant="secondary">{content.timeline.moreLabel}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
