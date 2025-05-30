// components/HeroSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';
import ScrollIndicator from './ScrollIndicator';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5, // Start after logo animation might have begun
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15, duration: 0.8 },
    },
  };

  return (
    <motion.section
      id={id}
      className={cn(
        'min-h-screen flex flex-col items-center justify-center relative',
        'bg-brand-secondary text-neutral-dark-grey p-8 pt-20 md:pt-24 text-center overflow-hidden'
      )}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Logo */}
      <AnimatedLogo className="mb-10 md:mb-12 lg:mb-16" />

      {/* Tagline */}
      <motion.h1
        className={cn(
          'font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
          'leading-tight tracking-tight text-neutral-dark-grey mb-4 md:mb-6'
        )}
        variants={itemVariants}
      >
        Where stories find their aesthetic.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className={cn(
          'font-sans text-lg sm:text-xl md:text-2xl text-neutral-dark-grey opacity-90',
          'max-w-xl md:max-w-2xl mx-auto'
        )}
        variants={itemVariants}
      >
        Designs that whisper loud stories.
      </motion.p>

      {/* Scroll Down Indicator - targets the 'story' section */}
      <ScrollIndicator targetId="story" />
    </motion.section>
  );
};

export default HeroSection;
