/* eslint-disable */
// components/AnimatedLogo.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // Assuming utils.ts for cn function

interface AnimatedLogoProps {
  className?: string;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ className }) => {
  // Animation variants for the SVG elements
  // This is a conceptual animation. The actual logo.svg might have a different structure
  // and require different animation choreography for an "Instagram-like" reveal.
  const svgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.4, // Animate children sequentially
      },
    },
  };

  const hueVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 10, duration: 0.8 },
    },
  };

  const neuVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 10, duration: 0.8 },
    },
  };
  
  // Placeholder for a dot or small element, common in logo reveals
  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120, damping: 8, delay: 0.8, duration: 0.5 },
    }
  }

  return (
    <motion.div
      className={cn('relative', className)}
      initial="hidden"
      animate="visible"
      variants={svgVariants}
    >
      {/* 
        This is a placeholder SVG demonstrating the animation concept.
        Ideally, you would import your actual logo.svg and animate its specific paths.
        For example, using an SVG loader and then targeting elements by ID.
        <Image src="/logo.svg" alt="hueneu logo" width={250} height={80} /> 
        If logo.svg is complex, it might be better to use it as a React component (e.g. SVGR)
        and pass motion props to its internal elements.
      */}
      <motion.svg
        viewBox="0 0 300 100" // Adjusted viewBox for better spacing
        className="w-64 h-auto md:w-80 lg:w-96" // Responsive sizing
        aria-label="hueneu logo"
      >
        {/* "hue" part - could be styled with a vibrant color burst */}
        <motion.text
          x="50%"
          y="50%"
          dy="-5px" // Adjust vertical position
          textAnchor="end"
          className="font-display text-6xl md:text-7xl lg:text-8xl fill-current text-accent"
          variants={hueVariants}
        >
          hue
        </motion.text>
        
        {/* "neu" part - styled with grounding neutrality */}
        <motion.text
          x="50%"
          y="50%"
          dy="-5px" // Adjust vertical position
          dx="10px" // Add spacing between hue and neu
          textAnchor="start"
          className="font-display text-6xl md:text-7xl lg:text-8xl fill-current text-primary"
          variants={neuVariants}
        >
          neu
        </motion.text>

        {/* Optional: A small design element, like a dot, animating in */}
        <motion.circle 
          cx="50%" 
          cy="75%" // Positioned below the text
          r="6"
          className="fill-current text-accent"
          variants={dotVariants}
        />
      </motion.svg>
    </motion.div>
  );
};

export default AnimatedLogo;
