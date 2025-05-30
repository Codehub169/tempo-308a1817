// components/ScrollIndicator.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScrollIndicatorProps {
  className?: string;
  targetId?: string; // Optional: for smooth scroll to a specific element
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ className, targetId }) => {
  const handleClick = () => {
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <motion.div
      className={cn(
        'absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer',
        'flex flex-col items-center text-neutral-dark hover:text-primary transition-colors duration-300',
        className
      )}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8, ease: 'easeInOut' }}
      onClick={handleClick}
      title="Scroll down"
    >
      <motion.div
        animate={{
          y: [0, 8, 0], // Playful bounce animation
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatDelay: 0.5,
        }}
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </motion.div>
      <span className="mt-1 text-xs font-sans tracking-wider">SCROLL</span>
    </motion.div>
  );
};

export default ScrollIndicator;
