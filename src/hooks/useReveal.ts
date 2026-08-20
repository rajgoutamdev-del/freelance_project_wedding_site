import { useEffect, useRef, useState } from 'react';

type RevealCallback = () => void;

let sharedObserver: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, RevealCallback>();

function getSharedObserver() {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const callback = callbacks.get(entry.target);
          callback?.();
          sharedObserver?.unobserve(entry.target);
          callbacks.delete(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
  }
  return sharedObserver;
}

/**
 * One shared IntersectionObserver drives every reveal-on-scroll element on the
 * page instead of instantiating a new observer per component.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getSharedObserver();
    callbacks.set(el, () => setInView(true));
    observer.observe(el);

    return () => {
      observer.unobserve(el);
      callbacks.delete(el);
    };
  }, []);

  return { ref, inView };
}
