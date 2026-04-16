import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { getLocaleContent, type Locale } from '@/data/site-content';
import sectionStyles from '@/components/sections/Sections.module.css';

export function BrandSection({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);
  const brand = content.brandLink;

  return (
    <section className={sectionStyles.card}>
      <SectionLabel>{content.navigation.brand}</SectionLabel>
      <h3 className={sectionStyles.cardHeading}>{content.brand.homeLabel}</h3>
      <p className={sectionStyles.cardText}>{content.brand.intro}</p>
      <p className={sectionStyles.subtleText}>{content.brand.futureLine}</p>
      <div className={sectionStyles.actionRow}>
        {brand.status === 'external' && brand.externalUrl ? (
          <ButtonLink external href={brand.externalUrl} variant="secondary">{content.navigation.brand}</ButtonLink>
        ) : (
          <ButtonLink href={brand.internalHoldingPath} variant="secondary">{content.navigation.brand}</ButtonLink>
        )}
      </div>
    </section>
  );
}
