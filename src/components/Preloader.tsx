import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { cn } from '../utils/cn';
import styles from './Preloader.module.css';

type Phase = 'hidden' | 'visible' | 'removing';

const STORAGE_KEY = 'dt-visited';

function getInitialPhase(): Phase {
  if (typeof window === 'undefined') return 'hidden';
  return window.sessionStorage.getItem(STORAGE_KEY) ? 'hidden' : 'visible';
}

/** Plays once per session on first load only — does not re-run on internal navigation. */
export function Preloader() {
  const [phase, setPhase] = useState<Phase>(getInitialPhase);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (phase !== 'visible') return;
    window.sessionStorage.setItem(STORAGE_KEY, '1');

    if (reducedMotion) {
      setPhase('hidden');
      return;
    }

    const timer = setTimeout(() => setPhase('removing'), 650);
    return () => clearTimeout(timer);
  }, [phase, reducedMotion]);

  useEffect(() => {
    if (phase !== 'removing') return;
    const timer = setTimeout(() => setPhase('hidden'), 600);
    return () => clearTimeout(timer);
  }, [phase]);

  if (phase === 'hidden') return null;

  return (
    <div className={cn(styles.preloader, phase === 'removing' && styles.removing)} aria-hidden="true">
      <span className={styles.logo}>David Tutera</span>
    </div>
  );
}
