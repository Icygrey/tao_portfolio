import Link from 'next/link';
import { getAlternatePath } from '@/lib/locale';
import type { Locale } from '@/data/site-content';
import { cn } from '@/lib/utils';

export function LocaleSwitcher({ locale, currentPath }: { locale: Locale; currentPath: string }) {
  const enPath = getAlternatePath(currentPath, 'en');
  const zhPath = getAlternatePath(currentPath, 'zh');

  return (
    <div className="inline-flex items-center rounded-full border border-line bg-white/65 p-1 backdrop-blur">
      <Link className={cn('rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.24em] transition', locale === 'en' ? 'bg-ink text-ivory' : 'text-ink/58 hover:text-ink')} href={enPath}>
        EN
      </Link>
      <Link className={cn('rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.24em] transition', locale === 'zh' ? 'bg-ink text-ivory' : 'text-ink/58 hover:text-ink')} href={zhPath}>
        中
      </Link>
    </div>
  );
}
