import { SectionLabel } from '@/components/ui/SectionLabel';
import { getLocaleContent, type Locale } from '@/data/site-content';
import sectionStyles from '@/components/sections/Sections.module.css';

export function ContactSection({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);

  return (
    <section className={sectionStyles.card}>
      <SectionLabel>{content.navigation.contact}</SectionLabel>
      <h3 className={sectionStyles.cardHeading}>{content.contact.heading}</h3>
      <p className={sectionStyles.cardText}>{content.contact.intro}</p>
      <a className={sectionStyles.emailLink} href="mailto:thuang0209@outlook.com">
        thuang0209@outlook.com
      </a>
      <p className={sectionStyles.subtleText}>{content.contact.invitation}</p>
    </section>
  );
}
