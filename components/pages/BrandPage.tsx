import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { getLocaleContent, type Locale } from '@/data/site-content';
import { getLocalizedPath } from '@/lib/locale';

export function BrandPage({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);
  const currentPath = locale === 'en' ? '/en/brand' : '/zh/brand';
  const brand = content.brandLink;

  return (
    <main>
      <SiteHeader currentPath={currentPath} locale={locale} />
      <section className="px-5 pb-20 pt-10 md:px-8 md:pb-28">
        <div className="mx-auto max-w-[1240px] rounded-[2.5rem] border border-line bg-white/72 p-8 shadow-whisper backdrop-blur md:p-14">
          <SectionLabel>{content.navigation.brand}</SectionLabel>
          <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink md:text-7xl">{content.brand.heading}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-ink/72 md:text-lg">{content.brand.intro}</p>
          <p className="mt-4 text-sm leading-7 text-ink/56">{content.brand.futureLine}</p>
          <div className="mt-10 flex flex-wrap gap-3">
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
