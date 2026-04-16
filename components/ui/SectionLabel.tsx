import styles from '@/components/ui/SectionLabel.module.css';

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className={styles.label}>{children}</p>;
}
