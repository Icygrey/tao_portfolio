import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { getLocaleContent, resumeFile, type Locale } from '@/data/site-content';

export function ResumeSection({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);

  return (
    <section className="rounded-[2rem] border border-line bg-white/72 p-7 shadow-whisper backdrop-blur">
      <SectionLabel>{content.navigation.resume}</SectionLabel>
      <h3 className="mt-4 font-serif text-4xl tracking-tight text-ink">{content.resume.heading}</h3>
      <p className="mt-5 text-base leading-8 text-ink/70">{content.resume.intro}</p>
      <ul className="mt-8 space-y-3 text-sm leading-7 text-ink/68">
        {content.resume.details.map((item) => (
          <li key={item} className="border-b border-line/70 pb-3 last:border-none last:pb-0">{item}</li>
        ))}
      </ul>
      <div className="mt-8">
        <ButtonLink download href={resumeFile}>{content.resume.downloadLabel}</ButtonLink>
      </div>
    </section>
  );
}
