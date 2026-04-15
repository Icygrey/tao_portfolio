import { ButtonLink } from '@/components/ui/ButtonLink';
import { MotionReveal } from '@/components/ui/MotionReveal';
import { getLocaleContent, resumeFile, type Locale } from '@/data/site-content';
import { getLocalizedPath } from '@/lib/locale';

export function HeroSection({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);

  return (
    <section className="px-5 pb-20 pt-12 md:px-8 md:pb-28 md:pt-20">
      <div className="mx-auto max-w-[1440px]">
        <MotionReveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/52">{content.home.eyebrow}</p>
          <h1 className="mt-6 font-sans text-[clamp(5.4rem,16vw,14rem)] font-black uppercase leading-[0.82] tracking-[-0.09em] text-ink">
            {content.home.marquee}
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-ink/70 md:text-lg">{content.home.intro}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink download href={resumeFile}>{content.resume.downloadLabel}</ButtonLink>
            <ButtonLink href={getLocalizedPath(locale, 'about')} variant="secondary">{content.timeline.moreLabel}</ButtonLink>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
