import { useEffect, useRef, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-left' | 'slide-right' | 'scale' | 'fade-up';
  delay?: number;
  duration?: number;
}

export const ScrollReveal = ({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  duration = 600,
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClasses = {
    'fade-in': 'opacity-0 translate-y-8',
    'slide-left': 'opacity-0 -translate-x-16',
    'slide-right': 'opacity-0 translate-x-16',
    'scale': 'opacity-0 scale-90',
    'fade-up': 'opacity-0 translate-y-12',
  };

  const visibleClasses = 'opacity-100 translate-x-0 translate-y-0 scale-100';

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        isVisible ? visibleClasses : animationClasses[animation],
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
