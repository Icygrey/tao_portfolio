import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { getLocaleContent, resumeFile, type Locale } from '@/data/site-content';

export function ResumePage({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);
  const currentPath = locale === 'en' ? '/en/resume' : '/zh/resume';

  return (
    <main>
      <SiteHeader currentPath={currentPath} locale={locale} />
      <section className="px-5 pb-20 pt-10 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>{content.navigation.resume}</SectionLabel>
            <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink md:text-7xl">{content.resume.heading}</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-ink/72 md:text-lg">{content.resume.intro}</p>
            <div className="mt-10">
              <ButtonLink download href={resumeFile}>{content.resume.downloadLabel}</ButtonLink>
            </div>
          </div>
          <div className="rounded-[2rem] border border-line bg-white/72 p-8 shadow-whisper backdrop-blur md:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/48">PDF</p>
            <p className="mt-4 font-serif text-4xl tracking-tight text-ink">{content.resume.filename}</p>
            <ul className="mt-8 space-y-4 text-base leading-8 text-ink/72">
              {content.resume.details.map((item) => (
                <li key={item} className="border-b border-line/70 pb-4 last:border-none last:pb-0">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
