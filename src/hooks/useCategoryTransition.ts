import { useEffect, useRef, useState } from 'react';
import { getEventsByCategory, type EventCategory } from '../data/events';
import { unsplashUrl } from '../utils/unsplash';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export type Category = EventCategory | 'all';
export type TransitionPhase = 'idle' | 'exiting' | 'label' | 'entering';

// Kept in sync with the CSS keyframe durations in GalleryIndexPage.module.css.
const EXIT_MS = 380;
const LABEL_IN_MS = 320;
const LABEL_HOLD_MS = 480;
const LABEL_OUT_MS = 320;
const LABEL_TOTAL_MS = LABEL_IN_MS + LABEL_HOLD_MS + LABEL_OUT_MS;
const ENTER_MS = 520;
const PRELOAD_TIMEOUT_MS = 650;

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function preloadFirstImage(category: Category): Promise<void> {
  const [first] = getEventsByCategory(category);
  if (!first) return Promise.resolve();
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = unsplashUrl(first.heroPhotoId, 1080);
  });
}

interface UseCategoryTransitionResult {
  phase: TransitionPhase;
  /** The category whose events should actually be rendered right now. */
  displayedCategory: Category;
  /** Label text to show in the full-screen reveal, valid only while phase === 'label'. */
  labelCategory: Category | null;
}

/**
 * Drives the cinematic "exit current grid → reveal category name → enter new
 * grid" sequence as an explicit state machine, rather than chained
 * setTimeouts toggling visibility directly. Clicking a new category while a
 * run is in flight never starts a second overlapping run — it just updates
 * the target the in-flight run will land on once it reaches its next
 * checkpoint, so rapid changes always resolve to the latest request.
 *
 * Internal bookkeeping (which phase is active, which category is currently
 * displayed) is mirrored into refs so it can be read from async callback
 * continuations and from other effects without listing it as a dependency —
 * only the render-facing state below is exposed to consumers.
 */
export function useCategoryTransition(targetCategory: Category): UseCategoryTransitionResult {
  const reducedMotion = usePrefersReducedMotion();
  const [phase, setPhase] = useState<TransitionPhase>('idle');
  const [displayedCategory, setDisplayedCategory] = useState<Category>(targetCategory);
  const [labelCategory, setLabelCategory] = useState<Category | null>(null);

  const targetRef = useRef(targetCategory);
  const phaseRef = useRef<TransitionPhase>('idle');
  const displayedRef = useRef<Category>(targetCategory);
  const runIdRef = useRef(0);

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  function commitDisplayedCategory(category: Category) {
    displayedRef.current = category;
    setDisplayedCategory(category);
  }

  async function runSequence() {
    const runId = ++runIdRef.current;
    setPhase('exiting');

    await delay(EXIT_MS);
    if (runId !== runIdRef.current) return;

    const nextForLabel = targetRef.current;
    setLabelCategory(nextForLabel);
    setPhase('label');

    const preloadBounded = Promise.race([
      preloadFirstImage(nextForLabel),
      delay(PRELOAD_TIMEOUT_MS),
    ]);
    await Promise.all([delay(LABEL_TOTAL_MS), preloadBounded]);
    if (runId !== runIdRef.current) return;

    const finalTarget = targetRef.current;
    commitDisplayedCategory(finalTarget);
    setLabelCategory(null);
    setPhase('entering');

    await delay(ENTER_MS);
    if (runId !== runIdRef.current) return;

    setPhase('idle');
  }

  // Trigger (or update the pending target of) a run whenever the requested
  // category changes.
  useEffect(() => {
    targetRef.current = targetCategory;

    if (reducedMotion) {
      runIdRef.current += 1; // supersede any in-flight run
      setPhase('idle');
      setLabelCategory(null);
      commitDisplayedCategory(targetCategory);
      return;
    }

    if (targetCategory === displayedRef.current) return;
    if (phaseRef.current !== 'idle') return; // picked up at the run's next checkpoint

    void runSequence();
  }, [targetCategory, reducedMotion]);

  // Safety net: if the target changed too late to be caught by a checkpoint
  // in the run that just finished, start a fresh run instead of going stale.
  useEffect(() => {
    if (reducedMotion) return;
    if (phase !== 'idle') return;
    if (targetRef.current !== displayedRef.current) {
      void runSequence();
    }
  }, [phase, reducedMotion]);

  // Bail out any in-flight run on unmount so it never calls setState after.
  useEffect(() => {
    return () => {
      runIdRef.current += 1;
    };
  }, []);

  return { phase, displayedCategory, labelCategory };
}
