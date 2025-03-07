
import { useAnimationOnScroll } from '@/lib/animations';
import { cn } from '@/lib/utils';
import React from 'react';

type AnimatedRevealProps = {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up' | 'slide-in-left' | 'slide-in-right';
  delay?: number;
};

const AnimatedReveal = ({
  children,
  className,
  animation = 'fade-in-up',
  delay = 0,
}: AnimatedRevealProps) => {
  const { ref, isVisible } = useAnimationOnScroll();

  return (
    <div
      ref={ref}
      className={cn(
        className,
        isVisible ? `animate-${animation}` : 'opacity-0',
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedReveal;
