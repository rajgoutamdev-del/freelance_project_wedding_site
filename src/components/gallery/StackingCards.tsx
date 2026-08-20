import type { ReactNode } from 'react';
import styles from './StackingCards.module.css';

interface StackingCardsProps {
  children: ReactNode;
}

/**
 * Pure-CSS "pinned reveal" — each item is a tall box with a sticky 100vh
 * stage inside, so as the user scrolls, the current card stays pinned while
 * the next one's edge rises to cover it. No JS/ScrollTrigger required.
 */
export function StackingCards({ children }: StackingCardsProps) {
  return <div className={styles.list}>{children}</div>;
}

export function StackingCardItem({ children }: { children: ReactNode }) {
  return (
    <div className={styles.item}>
      <div className={styles.stage}>{children}</div>
    </div>
  );
}
