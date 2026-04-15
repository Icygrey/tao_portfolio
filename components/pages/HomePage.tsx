import Link from 'next/link';
import { getLocaleContent, type HomeWorkItem, type Locale, resumeFile } from '@/data/site-content';
import { getLocalizedPath } from '@/lib/locale';

const toneStyles: Record<string, string> = {
  sky: 'bg-[linear-gradient(180deg,#1f9fe2_0%,#78caf1_70%,#dbf3ff_100%)]',
  architecture: 'bg-[linear-gradient(160deg,#005d79_0%,#1c7da0_40%,#f5d9b5_100%)]',
  black: 'bg-[linear-gradient(180deg,#070707_0%,#0f0f0f_100%)]',
  violet: 'bg-[linear-gradient(180deg,#312344_0%,#191420_100%)]'
};

function WorkCard({ item }: { item: HomeWorkItem }) {
  return (
    <article className={`w-full max-w-[250px] ${item.position}`}>
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.24em] text-ink/70">{item.index}</p>
      <div className={`relative overflow-hidden ${toneStyles[item.tone]} shadow-[0_8px_24px_rgba(0,0,0,0.06)]`} style={{ aspectRatio: item.aspectRatio }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_18%,rgba(255,255,255,0.28),transparent_22%)]" />
        {item.tone === 'sky' ? (
          <div className="absolute inset-x-[24%] top-[18%] h-[34%] rounded-[40%_40%_46%_46%] bg-[#f4ede2] shadow-[0_12px_18px_rgba(0,0,0,0.08)] after:absolute after:inset-x-[22%] after:top-[26%] after:h-[36%] after:rounded-[50%] after:border after:border-ink/35 after:content-['']">
            <div className="absolute inset-x-[20%] top-[22%] text-center font-serif text-[clamp(0.55rem,1vw,0.85rem)] uppercase tracking-[0.08em] text-ink/75">
              No rules.<br />Just motion.
            </div>
          </div>
        ) : null}
        {item.tone === 'black' ? (
          <>
            <div className="absolute left-[18%] top-[18%] h-[48%] w-[28%] rotate-[-24deg] rounded-[1.4rem] bg-[linear-gradient(180deg,#101010_0%,#2a2a2a_100%)] shadow-[0_16px_34px_rgba(0,0,0,0.36)]" />
            <div className="absolute left-[43%] top-[26%] h-[54%] w-[34%] rotate-[14deg] rounded-[1.8rem] bg-[linear-gradient(180deg,#a5d85b_0%,#8fcf38_60%,#2d2d2d_100%)] shadow-[0_18px_36px_rgba(0,0,0,0.42)]" />
          </>
        ) : null}
        {item.tone === 'architecture' ? (
          <>
            <div className="absolute bottom-0 right-0 h-[64%] w-[58%] bg-[linear-gradient(180deg,#0b0f13_0%,#16222b_100%)]" />
            <div className="absolute bottom-[20%] right-[20%] h-[72%] w-[46%] border-l-[16px] border-t-[16px] border-[#f4e3c4] bg-transparent" />
            <div className="absolute bottom-[2%] right-[8%] h-[36%] w-[42%] border border-black/20 bg-white/12" />
          </>
        ) : null}
        {item.tone === 'violet' ? (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.08),transparent_20%)]" />
        ) : null}
      </div>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/82">{item.title}</p>
    </article>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);
  const currentPath = locale === 'en' ? '/' : '/zh';
  const aboutPath = getLocalizedPath(locale, 'about');
  const contactPath = getLocalizedPath(locale, 'contact');
  const brandPath = getLocalizedPath(locale, 'brand');

  return (
    <main className="bg-[#f3f2ee] text-[#232323]">
      <section className="flex min-h-[100svh] flex-col justify-between px-3 pb-6 pt-24 md:px-8 md:pb-8 md:pt-20">
        <div className="flex items-start justify-between gap-6">
          <p className="pl-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/72 md:pl-8">{content.home.eyebrow}</p>
          <div className="pr-2 text-right md:pr-8">
            <a className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/72 underline decoration-[1px] underline-offset-2" href="mailto:thuang0209@outlook.com">
              {content.home.emailLabel}
            </a>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="-ml-[2%] whitespace-nowrap font-sans text-[clamp(5.8rem,14vw,13rem)] font-black uppercase leading-[0.82] tracking-[-0.09em] text-[#232323] md:-ml-[3%]">
            {content.home.marquee} <span className="inline-flex h-[0.72em] w-[0.72em] translate-y-[-0.08em] items-center justify-center rounded-full border-[3px] border-[#232323] align-middle font-mono text-[0.24em] tracking-normal">{content.home.badge}</span> {content.home.marquee}
          </div>
        </div>

        <div className="mt-10 grid gap-10 px-2 md:grid-cols-[360px_1fr_300px] md:items-end md:px-8">
          <p className="max-w-[360px] text-[clamp(0.95rem,1.2vw,1.1rem)] leading-[1.08] tracking-[-0.02em] text-ink/82">
            {content.home.intro}
          </p>
          <div className="hidden md:block" />
          <div className="justify-self-start md:justify-self-center">
            <p className="mb-3 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-ink/48">{content.home.stripLabel}</p>
            <div className="flex items-end gap-2">
              {content.home.stripItems.map((item, index) => (
                <div key={item} className={`flex h-8 w-8 items-center justify-center overflow-hidden rounded-[2px] border border-black/15 ${index === 0 ? 'bg-[#14251f]' : index === 1 ? 'bg-[#efefea]' : 'bg-[#7d2f10]'}`}>
                  <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-white/90">{item.slice(0, 1)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[1180px] px-3 pb-24 pt-6 md:px-8 md:pt-0">
        <div className="mx-auto flex max-w-[1560px] flex-col gap-20">
          <div className="flex justify-center">
            <WorkCard item={content.home.works[0]} />
          </div>
          <div className="flex justify-between gap-6">
            <WorkCard item={content.home.works[2]} />
            <WorkCard item={content.home.works[1]} />
          </div>
          <div className="flex justify-center md:justify-start md:pl-[53%]">
            <WorkCard item={content.home.works[3]} />
          </div>
        </div>
      </section>

      <section className="px-3 pb-28 pt-8 md:px-8 md:pb-32 md:pt-10">
        <div className="mx-auto max-w-[1560px]">
          <div className="md:ml-[26%] md:max-w-[73%]">
            <p className="max-w-[1100px] text-[clamp(1.6rem,2.3vw,3rem)] font-semibold leading-[0.94] tracking-[-0.045em] text-[#252525]">
              {content.home.statement}{' '}
              <span className="text-[#b8b4af]">{content.home.statementMuted}</span>
            </p>
            <a className="mt-10 inline-block font-mono text-[12px] uppercase tracking-[0.18em] text-ink/72 underline underline-offset-4" href={resumeFile} download>
              {content.home.resumeLinkLabel}
            </a>
          </div>

          <div className="mt-40 grid gap-16 md:grid-cols-2 md:gap-24">
            {content.home.services.map((service) => (
              <article key={service.title} className="max-w-[420px]">
                <h3 className="font-mono text-[13px] uppercase tracking-[0.18em] text-ink/78">{service.title}</h3>
                <p className="mt-5 text-[clamp(1rem,1.05vw,1.12rem)] leading-[1.32] text-ink/78">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[92vh] overflow-hidden bg-[#2d2d2d] px-3 pb-10 pt-6 text-[#f1efe8] md:px-8 md:pb-14 md:pt-6">
        <div className="mx-auto flex min-h-[82vh] max-w-[1560px] flex-col justify-between">
          <div className="flex items-start justify-between gap-8">
            <a className="whitespace-pre-line font-mono text-[12px] uppercase leading-[1.45] tracking-[0.16em] underline underline-offset-3" href="mailto:thuang0209@outlook.com">
              {content.home.footerMailLabel}
            </a>
            <div className="hidden md:block" />
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-[520px] font-mono text-[12px] uppercase leading-[1.45] tracking-[0.16em] text-[#f1efe8]/88">
              <a className="underline underline-offset-3" href="https://www.linkedin.com/in/tao-huang-usc/" target="_blank" rel="noreferrer">{content.home.footerSocialLabel.split('LINKEDIN')[0]}LINKEDIN</a>
              {content.home.footerSocialLabel.includes('WHATSAPP') ? (
                <>
                  {', OR TEXT ME ON '}
                  <span className="underline underline-offset-3">WHATSAPP</span>
                </>
              ) : null}
            </p>
            <p className="justify-self-start font-mono text-[12px] uppercase tracking-[0.16em] text-[#f1efe8]/88 md:justify-self-end">{content.home.footerPrompt}</p>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-[7%] left-[2%] whitespace-nowrap font-sans text-[clamp(5rem,13vw,12rem)] font-black uppercase tracking-[-0.09em] text-white blur-[2.4px] md:left-[2.5%]">
          {content.home.marquee} <span className="inline-flex h-[0.72em] w-[0.72em] translate-y-[-0.08em] items-center justify-center rounded-full border-[3px] border-white align-middle font-mono text-[0.24em] tracking-normal">{content.home.badge}</span>
        </div>

        <div className="absolute bottom-6 right-4 md:bottom-8 md:right-8">
          <div className="flex flex-wrap items-center gap-5 font-mono text-[12px] uppercase tracking-[0.16em] text-[#f1efe8]/88">
            <Link href={aboutPath}>{locale === 'en' ? 'ABOUT' : '关于'}</Link>
            <Link href={contactPath}>{locale === 'en' ? 'CONTACT' : '联系'}</Link>
            <Link href={brandPath}>{locale === 'en' ? 'BRAND' : '品牌'}</Link>
            <span className="underline underline-offset-3">{content.home.footerLegal}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
