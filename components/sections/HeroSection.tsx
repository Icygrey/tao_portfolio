import { ButtonLink } from '@/components/ui/ButtonLink';
import { MotionReveal } from '@/components/ui/MotionReveal';
import { getLocaleContent, resumeFile, type Locale } from '@/data/site-content';
import { getLocalizedPath } from '@/lib/locale';
import sectionStyles from '@/components/sections/Sections.module.css';

export function HeroSection({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);

  return (
    <section className={sectionStyles.heroSection}>
      <div className={sectionStyles.heroInner}>
        <MotionReveal>
          <p className="visually-hidden">{content.home.eyebrow}</p>
          <h1 className={sectionStyles.heroTitle}>{content.home.marquee}</h1>
          <p className={sectionStyles.heroIntro}>{content.home.intro}</p>
          <div className={sectionStyles.heroActions}>
            <ButtonLink download href={resumeFile}>{content.resume.downloadLabel}</ButtonLink>
            <ButtonLink href={getLocalizedPath(locale, 'about')} variant="secondary">{content.timeline.moreLabel}</ButtonLink>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
