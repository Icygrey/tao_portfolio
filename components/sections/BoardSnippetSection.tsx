import { SectionLabel } from '@/components/ui/SectionLabel';
import type { Locale } from '@/data/site-content';

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
    <section className="rounded-[2rem] border border-line bg-white/72 p-7 shadow-whisper backdrop-blur">
      <SectionLabel>{content.label}</SectionLabel>
      <h3 className="mt-4 font-serif text-4xl tracking-tight text-ink">{content.heading}</h3>
      <p className="mt-5 text-base leading-8 text-ink/70">{content.intro}</p>
      <div className="mt-8 space-y-4">
        {content.entries.map((entry) => (
          <article key={entry} className="rounded-[1.2rem] border border-line/80 bg-ivory/70 px-5 py-4">
            <p className="font-serif text-2xl italic leading-snug text-ink">“{entry}”</p>
          </article>
        ))}
      </div>
    </section>
  );
}
