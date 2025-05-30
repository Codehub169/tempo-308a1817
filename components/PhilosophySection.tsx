'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ComponentProps } from 'react';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 } 
  },
};

interface PhilosophySectionProps extends ComponentProps<'section'> {
  id: string;
}

export default function PhilosophySection({ id, ...props }: PhilosophySectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const poeticLines = [
    "We don’t just design—",
    "we decode stories.",
    "Designs that speak quietly,",
    "but stay with you.",
    "Embracing calm, mystery, and balance,",
    "to create the unforgettable."
  ];

  return (
    <section 
      id={id} 
      ref={ref}
      className="min-h-screen bg-primary text-secondary py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center"
      {...props}
    >
      <motion.h2 
        className="font-display text-5xl md:text-6xl lg:text-7xl mb-12 md:mb-16"
        variants={headingVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        Why hueneu?
      </motion.h2>
      
      <div className="max-w-3xl space-y-6 md:space-y-8">
        {poeticLines.map((line, index) => (
          <motion.p 
            key={index}
            className={`font-sans text-2xl md:text-3xl lg:text-4xl leading-snug md:leading-tight ${index % 2 !== 0 ? 'font-semibold' : ''}`}
            custom={index}
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {line}
          </motion.p>
        ))}
      </div>

      <motion.div 
        className="mt-16 md:mt-20 w-24 h-1 bg-accent rounded-full"
        initial={{ opacity: 0, scaleX: 0.5 }}
        animate={inView ? { opacity: 1, scaleX: 1, transition: { delay: poeticLines.length * 0.3 + 0.5, duration: 0.8, ease: 'easeOut' } } : {}}
      />
      
    </section>
  );
}
