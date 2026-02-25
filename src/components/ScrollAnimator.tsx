import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimatorProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'blur';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export default function ScrollAnimator({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.15,
  once = true,
}: ScrollAnimatorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, once]);

  const baseStyles: React.CSSProperties = {
    transitionProperty: 'opacity, transform, filter',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: `${delay}ms`,
  };

  const hiddenStyles: Record<string, React.CSSProperties> = {
    'fade-up': { opacity: 0, transform: 'translateY(60px)' },
    'fade-down': { opacity: 0, transform: 'translateY(-60px)' },
    'fade-left': { opacity: 0, transform: 'translateX(-60px)' },
    'fade-right': { opacity: 0, transform: 'translateX(60px)' },
    scale: { opacity: 0, transform: 'scale(0.85)' },
    blur: { opacity: 0, filter: 'blur(12px)' },
  };

  const visibleStyles: React.CSSProperties = {
    opacity: 1,
    transform: 'translateY(0) translateX(0) scale(1)',
    filter: 'blur(0)',
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        ...baseStyles,
        ...(isVisible ? visibleStyles : hiddenStyles[animation]),
      }}
    >
      {children}
    </div>
  );
}
