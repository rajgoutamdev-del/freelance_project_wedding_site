import type { CSSProperties } from 'react';
import { cn } from '../../utils/cn';
import styles from './StarDivider.module.css';

interface StarDividerProps {
  withLines?: boolean;
  className?: string;
}

interface StarIconProps {
  className?: string;
  style?: CSSProperties;
}

export function StarIcon({ className, style }: StarIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M12 0c.6 4.8 2.2 8 4 9.6C17.7 11.2 20.4 12 24 12c-3.6 0-6.3.8-8 2.4-1.8 1.6-3.4 4.8-4 9.6-.6-4.8-2.2-8-4-9.6C6.3 12.8 3.6 12 0 12c3.6 0 6.3-.8 8-2.4C9.8 8 11.4 4.8 12 0Z" />
    </svg>
  );
}

export function StarDivider({ withLines = false, className }: StarDividerProps) {
  return (
    <span className={cn(styles.wrap, className)}>
      {withLines ? <span className={styles.line} aria-hidden="true" /> : null}
      <StarIcon className={styles.star} />
      {withLines ? <span className={styles.line} aria-hidden="true" /> : null}
    </span>
  );
}
