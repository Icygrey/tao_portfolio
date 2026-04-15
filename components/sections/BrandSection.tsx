import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { getLocaleContent, type Locale } from '@/data/site-content';

export function BrandSection({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);
  const brand = content.brandLink;

  return (
    <section className="rounded-[2rem] border border-line bg-white/72 p-7 shadow-whisper backdrop-blur">
      <SectionLabel>{content.navigation.brand}</SectionLabel>
      <h3 className="mt-4 font-serif text-4xl tracking-tight text-ink">{content.brand.homeLabel}</h3>
      <p className="mt-5 text-base leading-8 text-ink/70">{content.brand.intro}</p>
      <p className="mt-4 text-sm leading-7 text-ink/56">{content.brand.futureLine}</p>
      <div className="mt-8">
        {brand.status === 'external' && brand.externalUrl ? (
          <ButtonLink external href={brand.externalUrl} variant="secondary">{content.navigation.brand}</ButtonLink>
        ) : (
          <ButtonLink href={brand.internalHoldingPath} variant="secondary">{content.navigation.brand}</ButtonLink>
        )}
      </div>
    </section>
  );
}
