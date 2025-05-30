// components/StorySection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react'; // For a playful touch

interface StorySectionProps {
  id: string;
}

const StorySection: React.FC<StorySectionProps> = ({ id }) => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: whoKnewRef, inView: whoKnewInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 20, duration: 1 },
    },
  };

  const whoKnewContainerVariants = {
    hidden: { opacity: 0 }, // Manages children animation trigger
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    },
  };

  const whoKnewTextVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12, duration: 0.6 },
    },
  };
  
  const whoKnewBackgroundVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1], delay: 0.1 }, // Smooth reveal
    },
  };

  return (
    <motion.section
      id={id}
      ref={sectionRef}
      className={cn(
        'min-h-screen flex flex-col items-center justify-center relative',
        'bg-brand-primary text-brand-secondary px-8 py-16 md:py-24 overflow-hidden'
      )}
      initial="hidden"
      animate={sectionInView ? 'visible' : 'hidden'}
    >
      <motion.div 
        className="max-w-3xl w-full text-center md:text-left space-y-8 md:space-y-12"
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }} // Stagger children of this container
      >
        <motion.h2 
          className="font-display text-4xl md:text-5xl lg:text-6xl text-brand-secondary tracking-tight"
          variants={textVariants}
        >
          The hueneu Story
        </motion.h2>
        
        <motion.p 
          className="font-sans text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90"
          variants={textVariants}
        >
          At hueneu, we believe in the quiet power of thoughtful design. <strong className='text-brand-accent font-semibold'>Hue</strong> represents the vibrant bursts of creativity, the unexpected color that tells a story. <strong className='font-semibold'>Neu</strong> signifies the calm, the grounding neutrality that provides balance and clarity. It's where bold ideas meet intentional execution.
        </motion.p>
        
        <motion.p 
          className="font-sans text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90"
          variants={textVariants}
        >
          We craft designs that don't just shout; they resonate, leaving a lasting impression through subtle sophistication and a touch of the unexpected.
        </motion.p>

        {/* "Who Knew?" Moment */}
        <motion.div
          ref={whoKnewRef}
          className="mt-12 md:mt-16 py-8 md:py-10 relative block mx-auto text-center"
          variants={whoKnewContainerVariants}
          initial="hidden"
          animate={whoKnewInView ? 'visible' : 'hidden'}
        >
          <motion.div 
            className="absolute inset-0 bg-brand-accent rounded-md transform origin-left z-0"
            variants={whoKnewBackgroundVariants}
          />
          <motion.h3 
            className="relative z-10 font-display text-3xl md:text-4xl lg:text-5xl text-brand-secondary px-6 py-2 inline-flex items-center"
            variants={whoKnewTextVariants}
          >
            Who Knew?
            <Sparkles className="ml-3 h-6 w-6 md:h-8 md:w-8 opacity-80" />
          </motion.h3>
        </motion.div>
        
        <motion.p 
          className="font-sans text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90 pt-4"
          variants={textVariants}
        >
          That a little mystery and a dash of playfulness could feel so profound. We find joy in those moments of discovery, designs that make you pause, smile, and see things differently.
        </motion.p>

      </motion.div>
    </motion.section>
  );
};

export default StorySection;
