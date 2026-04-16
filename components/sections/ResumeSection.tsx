import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { getLocaleContent, resumeFile, type Locale } from '@/data/site-content';
import sectionStyles from '@/components/sections/Sections.module.css';

export function ResumeSection({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);

  return (
    <section className={sectionStyles.card}>
      <SectionLabel>{content.navigation.resume}</SectionLabel>
      <h3 className={sectionStyles.cardHeading}>{content.resume.heading}</h3>
      <p className={sectionStyles.cardText}>{content.resume.intro}</p>
      <ul className={sectionStyles.list}>
        {content.resume.details.map((item) => (
          <li key={item} className={sectionStyles.listItem}>{item}</li>
        ))}
      </ul>
      <div className={sectionStyles.actionRow}>
        <ButtonLink download href={resumeFile}>{content.resume.downloadLabel}</ButtonLink>
      </div>
    </section>
  );
}
