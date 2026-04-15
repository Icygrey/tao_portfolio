import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  download?: boolean;
  external?: boolean;
  className?: string;
};

export function ButtonLink({ href, children, variant = 'primary', download, external, className }: ButtonLinkProps) {
  const classes = cn(
    'group inline-flex items-center gap-3 rounded-full border px-5 py-3 text-xs uppercase tracking-[0.22em] transition duration-300',
    variant === 'primary'
      ? 'border-ink bg-ink text-ivory hover:bg-transparent hover:text-ink'
      : 'border-line bg-white/50 text-ink hover:border-ink hover:bg-ink hover:text-ivory',
    className
  );

  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </>
  );

  if (download || external) {
    return (
      <a className={classes} href={href} download={download} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
