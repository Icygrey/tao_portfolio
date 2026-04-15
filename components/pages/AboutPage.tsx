import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { getLocaleContent, resumeFile, type Locale } from '@/data/site-content';

export function AboutPage({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);
  const currentPath = locale === 'en' ? '/en/about' : '/zh/about';

  return (
    <main>
      <SiteHeader currentPath={currentPath} locale={locale} />
      <section className="px-5 pb-20 pt-10 md:px-8 md:pb-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-3xl">
            <SectionLabel>{content.navigation.about}</SectionLabel>
            <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink md:text-7xl">{content.about.heading}</h1>
            <p className="mt-6 text-base leading-8 text-ink/72 md:text-lg">{content.about.intro}</p>
            <p className="mt-4 text-sm leading-7 text-ink/56">{content.about.note}</p>
            <div className="mt-8">
              <ButtonLink download href={resumeFile}>{content.resume.downloadLabel}</ButtonLink>
            </div>
          </div>
          <div className="mt-14 border-l border-line pl-6 md:pl-10">
            {content.timeline.items.map((item) => (
              <article key={`${item.organization}-${item.period}`} className="relative pb-12 last:pb-0 md:pb-16">
                <span className="absolute -left-[1.72rem] top-1 h-3.5 w-3.5 rounded-full border border-ink/25 bg-ivory md:-left-[2.42rem]" />
                <div className="grid gap-4 md:grid-cols-[220px_1fr] md:gap-10">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/46">{item.period}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-ink/56">{item.location}</p>
                  </div>
                  <div>
                    <h2 className="font-serif text-3xl leading-none text-ink md:text-4xl">{item.organization}</h2>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-ink/66">
                      <span>{item.role}</span>
                      <span className="h-px w-8 bg-line" />
                      <span>{item.theme}</span>
                    </div>
                    <p className="mt-5 max-w-3xl text-base leading-8 text-ink/72">{item.summary}</p>
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
