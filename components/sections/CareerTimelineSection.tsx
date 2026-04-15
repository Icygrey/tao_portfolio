import { MotionReveal } from '@/components/ui/MotionReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { getLocaleContent, type Locale } from '@/data/site-content';
import { getLocalizedPath } from '@/lib/locale';

export function CareerTimelineSection({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);

  return (
    <section className="border-t border-line/70 px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1440px]">
        <MotionReveal>
          <SectionLabel>{content.timeline.label}</SectionLabel>
          <h2 className="mt-4 max-w-4xl font-serif text-4xl tracking-tight text-ink md:text-6xl">{content.timeline.heading}</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-ink/70 md:text-lg">{content.timeline.intro}</p>
        </MotionReveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {content.timeline.items.slice(0, 3).map((item, index) => (
            <MotionReveal key={item.organization} delay={index * 0.06}>
              <article className="rounded-[1.8rem] border border-line bg-white/68 p-6 shadow-whisper backdrop-blur">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/44">{item.period}</p>
                <p className="mt-6 font-serif text-3xl leading-none text-ink">{item.organization}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-ink/66">{item.role}</p>
                <p className="mt-5 text-base leading-8 text-ink/72">{item.summary}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href={getLocalizedPath(locale, 'about')} variant="secondary">{content.timeline.moreLabel}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
