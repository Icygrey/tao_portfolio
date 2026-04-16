import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import styles from '@/components/ui/ButtonLink.module.css';

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  download?: boolean;
  external?: boolean;
  className?: string;
};

export function ButtonLink({ href, children, variant = 'primary', download, external, className }: ButtonLinkProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ');

  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight className={styles.icon} />
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
