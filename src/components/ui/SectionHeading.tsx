import type { ElementType, ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  children: ReactNode;
  as?: ElementType;
  size?: 'xl' | 'lg' | 'md' | 'sm';
  align?: 'left' | 'center';
  eyebrow?: string;
  className?: string;
  maxWidth?: string;
}

export function SectionHeading({
  children,
  as: Component = 'h2',
  size = 'lg',
  align = 'left',
  eyebrow,
  className,
  maxWidth,
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? styles.center : undefined} style={maxWidth ? { maxWidth } : undefined}>
      {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
      <Component className={cn(styles.heading, styles[size], className)}>
        {children}
      </Component>
    </div>
  );
}
