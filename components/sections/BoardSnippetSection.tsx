import { SectionLabel } from '@/components/ui/SectionLabel';
import type { Locale } from '@/data/site-content';
import sectionStyles from '@/components/sections/Sections.module.css';

const copy = {
  en: {
    label: 'Anonymous board / preview only',
    heading: 'Public notes, later.',
    intro: 'A placeholder zone for future public notes, fragments, or anonymous traces.',
    entries: [
      'Quiet work leaves a longer afterimage.',
      'The name already feels like a label.',
      'Restraint can be the loudest statement.'
    ]
  },
  zh: {
    label: '匿名留言板 / 预览版',
    heading: '先预留，再公开。',
    intro: '为未来公开留言、匿名片段和更轻的情绪表达预留的一块安静区域。',
    entries: ['安静本身也能成为一种存在感。', '这个名字已经像一个品牌。', '留白让信息更有力量。']
  }
} as const;

export function BoardSnippetSection({ locale }: { locale: Locale }) {
  const content = copy[locale];

  return (
    <section className={sectionStyles.card}>
      <SectionLabel>{content.label}</SectionLabel>
      <h3 className={sectionStyles.cardHeading}>{content.heading}</h3>
      <p className={sectionStyles.cardText}>{content.intro}</p>
      <div className={sectionStyles.quoteStack}>
        {content.entries.map((entry) => (
          <article key={entry} className={sectionStyles.quoteCard}>
            <p className={sectionStyles.quoteText}>“{entry}”</p>
          </article>
        ))}
      </div>
    </section>
  );
}
