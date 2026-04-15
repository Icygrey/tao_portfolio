import { SectionLabel } from '@/components/ui/SectionLabel';
import { getLocaleContent, type Locale } from '@/data/site-content';

export function ContactSection({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);

  return (
    <section className="rounded-[2rem] border border-line bg-white/72 p-7 shadow-whisper backdrop-blur">
      <SectionLabel>{content.navigation.contact}</SectionLabel>
      <h3 className="mt-4 font-serif text-4xl tracking-tight text-ink">{content.contact.heading}</h3>
      <p className="mt-5 text-base leading-8 text-ink/70">{content.contact.intro}</p>
      <a className="mt-8 inline-block font-serif text-[clamp(1.8rem,3vw,2.8rem)] tracking-tight text-ink" href="mailto:thuang0209@outlook.com">
        thuang0209@outlook.com
      </a>
      <p className="mt-4 text-sm leading-7 text-ink/56">{content.contact.invitation}</p>
    </section>
  );
}
