import type { ElementType, ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { cn } from '../../utils/cn';

interface RevealOnScrollProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger delay in ms — used for sequential card/word reveals. */
  delay?: number;
}

export function RevealOnScroll({
  children,
  as: Component = 'div',
  className,
  delay = 0,
}: RevealOnScrollProps) {
  const { ref, inView } = useReveal<HTMLElement>();

  return (
    <Component
      ref={ref}
      data-reveal=""
      data-in-view={inView}
      className={cn(className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  );
}
