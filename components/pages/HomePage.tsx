'use client';

import { useLayoutEffect, useRef } from 'react';
import { getLocaleContent, type HomeWorkItem, type Locale, resumeFile } from '@/data/site-content';
import styles from '@/components/pages/HomePage.module.css';

const toneClassNames: Record<string, string> = {
  sky: styles.toneSky,
  architecture: styles.toneArchitecture,
  black: styles.toneBlack,
  violet: styles.toneViolet,
};

const signalClassNames = [styles.signalBoxDark, styles.signalBoxLight, styles.signalBoxRust];

const indexClassNames: Record<string, string> = {
  '(1)': styles.workCardOne,
  '(2)': styles.workCardTwo,
  '(3)': styles.workCardThree,
  '(4)': styles.workCardFour,
};

function WorkCard({ item }: { item: HomeWorkItem }) {
  return (
    <article className={[styles.workCard, indexClassNames[item.index] ?? ''].filter(Boolean).join(' ')} data-work-card>
      <p className={styles.workIndex}>{item.index}</p>
      <div className={[styles.workVisual, toneClassNames[item.tone] ?? ''].join(' ')} style={{ aspectRatio: item.aspectRatio }}>
        <div className={styles.workGlow} />
        {item.tone === 'sky' ? (
          <div className={styles.skyHat}>
            <div className={styles.skyCopy}>
              No rules.
              <br />
              Just motion.
            </div>
          </div>
        ) : null}
        {item.tone === 'black' ? (
          <>
            <div className={styles.blackCardOne} />
            <div className={styles.blackCardTwo} />
          </>
        ) : null}
        {item.tone === 'architecture' ? (
          <>
            <div className={styles.archBase} />
            <div className={styles.archFrame} />
            <div className={styles.archOverlay} />
          </>
        ) : null}
        {item.tone === 'violet' ? <div className={styles.violetHaze} /> : null}
      </div>
      <p className={styles.workCaption}>{item.title}</p>
    </article>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale);
  const rootRef = useRef<HTMLElement | null>(null);
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const gallerySectionRef = useRef<HTMLElement | null>(null);
  const statementSectionRef = useRef<HTMLElement | null>(null);
  const footerSectionRef = useRef<HTMLElement | null>(null);
  const eyebrowRef = useRef<HTMLParagraphElement | null>(null);
  const emailRef = useRef<HTMLAnchorElement | null>(null);
  const marqueeWrapRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLSpanElement | null>(null);
  const taoRef = useRef<HTMLSpanElement | null>(null);
  const huangRef = useRef<HTMLSpanElement | null>(null);
  const introRef = useRef<HTMLParagraphElement | null>(null);
  const signalClusterRef = useRef<HTMLDivElement | null>(null);
  const statementRef = useRef<HTMLParagraphElement | null>(null);
  const resumeLinkRef = useRef<HTMLAnchorElement | null>(null);
  const footerPromptRef = useRef<HTMLParagraphElement | null>(null);
  const footerMarqueeRef = useRef<HTMLDivElement | null>(null);
  const [taoWord = 'TAO', huangWord = 'HUANG'] = content.home.marquee.split(/\s+/);

  useLayoutEffect(() => {
    let mounted = true;
    let cleanup: (() => void) | undefined;

    void (async () => {
      const [{ gsap }, { ScrollTrigger }, { ScrambleTextPlugin }, { SplitText }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('gsap/ScrambleTextPlugin'),
        import('gsap/SplitText'),
      ]);

      if (!mounted || !rootRef.current) return;

      gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, SplitText);

      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        if (
          !rootRef.current ||
          !heroSectionRef.current ||
          !gallerySectionRef.current ||
          !statementSectionRef.current ||
          !footerSectionRef.current ||
          !taoRef.current ||
          !huangRef.current
        ) {
          return undefined;
        }

        const splits: Array<{ revert: () => void }> = [];
        const ctx = gsap.context(() => {
          const signalBoxes = gsap.utils.toArray<HTMLElement>('[data-signal-box]', rootRef.current);
          const workCards = gsap.utils.toArray<HTMLElement>('[data-work-card]', rootRef.current);
          const serviceCards = gsap.utils.toArray<HTMLElement>('[data-service-card]', rootRef.current);
          const footerLinks = gsap.utils.toArray<HTMLElement>('[data-footer-link]', rootRef.current);

          const taoSplit = SplitText.create(taoRef.current, { type: 'chars' });
          splits.push(taoSplit);

          const statementSplit = statementRef.current
            ? SplitText.create(statementRef.current, { type: 'lines' })
            : null;
          if (statementSplit) {
            splits.push(statementSplit);
          }

          const playHuangCycle = () => {
            const huangCycle = gsap.timeline();
            huangCycle
              .to(huangRef.current, {
                duration: 1.28,
                scrambleText: {
                  text: huangWord,
                  chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%*',
                  speed: 0.85,
                  revealDelay: 0.08,
                  tweenLength: false,
                },
              }, 0);

            return huangCycle;
          };

          gsap.set([eyebrowRef.current, emailRef.current, introRef.current], { y: 18, opacity: 0 });
          gsap.set(signalBoxes, { y: 24, opacity: 0, scale: 0.92, transformOrigin: '50% 100%' });
          gsap.set(workCards, { y: 64, opacity: 0.3, rotateZ: (index: number) => (index % 2 === 0 ? -1.4 : 1.4) });
          gsap.set(serviceCards, { y: 48, opacity: 0 });
          gsap.set(resumeLinkRef.current, { y: 24, opacity: 0 });
          gsap.set(footerPromptRef.current, { y: 26, opacity: 0.35 });
          gsap.set(footerLinks, { y: 20, opacity: 0.4 });
          gsap.set(footerMarqueeRef.current, { yPercent: 18, opacity: 0.55, scale: 0.96 });
          gsap.set(marqueeWrapRef.current, { transformPerspective: 1200 });
          if (statementSplit) {
            gsap.set(statementSplit.lines, { yPercent: 110, opacity: 0 });
          }

          const heroTimeline = gsap.timeline({ defaults: { ease: 'expo.out' } });
          heroTimeline
            .from(badgeRef.current, { xPercent: -38, opacity: 0, duration: 0.9 }, 0)
            .from(
              taoSplit.chars,
              {
                yPercent: 112,
                rotateX: -92,
                opacity: 0,
                transformOrigin: '50% 100% -120',
                duration: 1.12,
                stagger: 0.05,
              },
              0.06,
            )
            .add(playHuangCycle(), 0.18)
            .to([eyebrowRef.current, emailRef.current, introRef.current], { y: 0, opacity: 1, duration: 0.92, stagger: 0.08 }, 0.28)
            .to(
              signalBoxes,
              {
                keyframes: [
                  { y: 24, opacity: 0, scale: 0.92, duration: 0 },
                  { y: 0, opacity: 1, scale: 1, duration: 0.55, ease: 'power3.out' },
                  { y: -4, duration: 0.16, ease: 'power1.inOut' },
                  { y: 0, duration: 0.16, ease: 'power1.out' },
                ],
                stagger: 0.08,
              },
              0.76,
            )
            .call(() => {
              gsap.timeline({ repeat: -1, repeatDelay: 3 }).add(playHuangCycle());
            }, [], '>-0.1');

          gsap.timeline({
            scrollTrigger: {
              trigger: heroSectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.15,
              invalidateOnRefresh: true,
            },
          })
            .to(marqueeWrapRef.current, { yPercent: 12, scale: 0.93, transformOrigin: '50% 50%', ease: 'none' }, 0)
            .to(introRef.current, { y: 54, opacity: 0.22, ease: 'none' }, 0)
            .to(signalClusterRef.current, { y: -24, opacity: 0.5, ease: 'none' }, 0)
            .to([eyebrowRef.current, emailRef.current], { y: -12, opacity: 0.42, ease: 'none' }, 0);

          workCards.forEach((card, index) => {
            const targetY = [-36, 62, -72, 48][index] ?? 42;
            const targetRotate = index % 2 === 0 ? 0.6 : -0.6;

            gsap.to(card, {
              y: targetY,
              opacity: 1,
              rotateZ: targetRotate,
              ease: 'none',
              scrollTrigger: {
                trigger: gallerySectionRef.current,
                start: 'top 88%',
                end: 'bottom top',
                scrub: 1.2,
                invalidateOnRefresh: true,
              },
            });
          });

          if (statementSplit) {
            gsap.to(statementSplit.lines, {
              yPercent: 0,
              opacity: 1,
              duration: 1.05,
              stagger: 0.1,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: statementSectionRef.current,
                start: 'top 74%',
              },
            });
          }

          gsap.to([resumeLinkRef.current, ...serviceCards], {
            y: 0,
            opacity: 1,
            duration: 1.02,
            stagger: 0.12,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: statementSectionRef.current,
              start: 'top 62%',
            },
          });

          gsap.timeline({
            scrollTrigger: {
              trigger: footerSectionRef.current,
              start: 'top bottom',
              end: 'bottom bottom',
              scrub: 1.1,
              invalidateOnRefresh: true,
            },
          })
            .to(footerMarqueeRef.current, { yPercent: 0, opacity: 1, scale: 1, ease: 'none' }, 0)
            .to(footerPromptRef.current, { y: 0, opacity: 1, ease: 'none' }, 0.14)
            .to(footerLinks, { y: 0, opacity: 1, stagger: 0.05, ease: 'none' }, 0.18);

          ScrollTrigger.refresh();
        }, rootRef);

        return () => {
          splits.forEach((split) => split.revert());
          ctx.revert();
        };
      });

      cleanup = () => mm.revert();
    })();

    return () => {
      mounted = false;
      cleanup?.();
    };
  }, [huangWord]);

  return (
    <main ref={rootRef} className={styles.main}>
      <section ref={heroSectionRef} className={styles.heroSection}>
        <div className={styles.heroTop}>
          <p ref={eyebrowRef} className={styles.heroEyebrow}>{content.home.eyebrow}</p>
          <a ref={emailRef} className={styles.heroEmail} href="mailto:thuang0209@outlook.com">
            {content.home.emailLabel}
          </a>
        </div>

        <div ref={marqueeWrapRef} className={styles.marqueeWrap}>
          <div className={styles.marquee} aria-label={`${content.home.badge}${content.home.marquee}`}>
            <span ref={badgeRef} className={styles.marqueeBadge}>{content.home.badge}</span>
            <span ref={taoRef} className={styles.marqueeWord}>{taoWord}</span>
            <span ref={huangRef} className={[styles.marqueeWord, styles.marqueeWordAccent].join(' ')}>{huangWord}</span>
          </div>
        </div>

        <div className={styles.heroBottom}>
          <p ref={introRef} className={styles.heroIntro}>{content.home.intro}</p>
          <div aria-hidden="true" />
          <div ref={signalClusterRef} className={styles.signalCluster}>
            <p className={styles.signalLabel}>{content.home.stripLabel}</p>
            <div className={styles.signalRow}>
              {content.home.stripItems.map((item, index) => (
                <div key={item} className={[styles.signalBox, signalClassNames[index] ?? ''].join(' ')} data-signal-box>
                  <span className={styles.signalLetter}>{item.slice(0, 1)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={gallerySectionRef} className={styles.gallerySection}>
        <div className={styles.galleryInner}>
          <div className={styles.galleryRowCenter}>
            <WorkCard item={content.home.works[0]} />
          </div>
          <div className={styles.galleryRowSpread}>
            <WorkCard item={content.home.works[2]} />
            <WorkCard item={content.home.works[1]} />
          </div>
          <div className={styles.galleryRowOffset}>
            <WorkCard item={content.home.works[3]} />
          </div>
        </div>
      </section>

      <section ref={statementSectionRef} className={styles.statementSection}>
        <div className={styles.statementInner}>
          <div className={styles.statementWrap}>
            <p ref={statementRef} className={styles.statement}>
              {content.home.statement}{' '}
              <span className={styles.statementMuted}>{content.home.statementMuted}</span>
            </p>
            <a ref={resumeLinkRef} className={styles.resumeLink} href={resumeFile} download>
              {content.home.resumeLinkLabel}
            </a>
          </div>

          <div className={styles.services}>
            {content.home.services.map((service) => (
              <article key={service.title} className={styles.serviceCard} data-service-card>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceBody}>{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section ref={footerSectionRef} className={styles.footerSection}>
        <div className={styles.footerInner}>
          <div className={styles.heroTop}>
            <a className={styles.footerMail} href="mailto:thuang0209@outlook.com">
              {content.home.footerMailLabel}
            </a>
            <div aria-hidden="true" />
          </div>

          <div className={styles.footerBottom}>
            <p className={styles.footerSocial}>
              <a className={styles.footerSocialLink} href="https://www.linkedin.com/in/tao-huang-usc/" target="_blank" rel="noreferrer">
                {content.home.footerSocialLabel.split('LINKEDIN')[0]}LINKEDIN
              </a>
              {content.home.footerSocialLabel.includes('WHATSAPP') ? (
                <>
                  {', OR TEXT ME ON '}
                  <span className={styles.footerSocialLink}>WHATSAPP</span>
                </>
              ) : null}
            </p>
            <p ref={footerPromptRef} className={styles.footerPrompt}>{content.home.footerPrompt}</p>
          </div>
        </div>

        <div ref={footerMarqueeRef} className={styles.footerMarquee}>{content.home.marquee}</div>

        <div className={styles.footerLinksWrap}>
          <div className={styles.footerLinks}>
            <span data-footer-link>ABOUT</span>
            <span data-footer-link>CONTACT</span>
            <span data-footer-link>BRAND</span>
            <span data-footer-link>{content.home.footerLegal}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
