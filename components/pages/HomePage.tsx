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
    <article className={[styles.workCard, indexClassNames[item.index] ?? ''].filter(Boolean).join(' ')}>
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

  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className={styles.heroTop}>
          <p className={styles.heroEyebrow}>{content.home.eyebrow}</p>
          <a className={styles.heroEmail} href="mailto:thuang0209@outlook.com">
            {content.home.emailLabel}
          </a>
        </div>

        <div className={styles.marqueeWrap}>
          <div className={styles.marquee}>
            {content.home.badge}
            {content.home.marquee}{' '}
          </div>
        </div>

        <div className={styles.heroBottom}>
          <p className={styles.heroIntro}>{content.home.intro}</p>
          <div aria-hidden="true" />
          <div className={styles.signalCluster}>
            <p className={styles.signalLabel}>{content.home.stripLabel}</p>
            <div className={styles.signalRow}>
              {content.home.stripItems.map((item, index) => (
                <div key={item} className={[styles.signalBox, signalClassNames[index] ?? ''].join(' ')}>
                  <span className={styles.signalLetter}>{item.slice(0, 1)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gallerySection}>
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

      <section className={styles.statementSection}>
        <div className={styles.statementInner}>
          <div className={styles.statementWrap}>
            <p className={styles.statement}>
              {content.home.statement}{' '}
              <span className={styles.statementMuted}>{content.home.statementMuted}</span>
            </p>
            <a className={styles.resumeLink} href={resumeFile} download>
              {content.home.resumeLinkLabel}
            </a>
          </div>

          <div className={styles.services}>
            {content.home.services.map((service) => (
              <article key={service.title} className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceBody}>{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.footerSection}>
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
            <p className={styles.footerPrompt}>{content.home.footerPrompt}</p>
          </div>
        </div>

        <div className={styles.footerMarquee}>{content.home.marquee}</div>

        <div className={styles.footerLinksWrap}>
          <div className={styles.footerLinks}>
            <span>ABOUT</span>
            <span>CONTACT</span>
            <span>BRAND</span>
            <span>{content.home.footerLegal}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
