import { useState, useEffect, useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: "slide-up" | "slide-left" | "slide-right" | "fade" | "scale";
  delay?: number;
  className?: string;
}

export const AnimatedSection = ({
  children,
  animation = "slide-up",
  delay = 0,
  className = "",
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animationClass = {
    "slide-up": "animate-slide-in-up",
    "slide-left": "animate-slide-in-left",
    "slide-right": "animate-slide-in-right",
    fade: "animate-fade-in",
    scale: "animate-scale-in",
  }[animation];

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? animationClass : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
