import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale' | 'blur';
}

export const AnimateOnScroll = ({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fade-up' 
}: AnimateOnScrollProps) => {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClasses = {
    'fade-up': 'translate-y-8 opacity-0',
    'fade-in': 'opacity-0',
    'slide-left': '-translate-x-8 opacity-0',
    'slide-right': 'translate-x-8 opacity-0',
    'scale': 'scale-95 opacity-0',
    'blur': 'opacity-0 blur-sm',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible ? 'translate-y-0 translate-x-0 opacity-100 scale-100 blur-0' : animationClasses[animation]
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const StaggerChildren = ({ 
  children, 
  className = '',
  staggerDelay = 100 
}: { 
  children: ReactNode[]; 
  className?: string;
  staggerDelay?: number;
}) => {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <AnimateOnScroll key={index} delay={index * staggerDelay}>
          {child}
        </AnimateOnScroll>
      ))}
    </div>
  );
};
