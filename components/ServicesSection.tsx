'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Package, Share2, Printer, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { ComponentProps, ElementType } from 'react';

interface ServiceItem {
  icon: ElementType;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: Palette,
    title: 'Branding',
    description: 'Crafting identities that resonate deeply.',
  },
  {
    icon: Package,
    title: 'Packaging',
    description: 'Packaging, but make it poetic.',
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Engaging narratives for the digital stage.',
  },
  {
    icon: Printer,
    title: 'Stationery',
    description: 'Tactile stories, beautifully told.',
  },
  {
    icon: BookOpen,
    title: 'Coffee Table Books',
    description: 'Curating legacies, page by page.',
  },
  {
    icon: Sparkles,
    title: 'Creative Projects',
    description: 'Where wild ideas find their form.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
};

interface ServicesSectionProps extends ComponentProps<'section'> {
  id: string;
}

export default function ServicesSection({ id, ...props }: ServicesSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section 
      id={id} 
      ref={ref} 
      className="min-h-screen bg-white py-20 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center"
      {...props}
    >
      <motion.h2 
        className="font-display text-5xl md:text-6xl lg:text-7xl text-primary mb-16 text-center"
        variants={headingVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        What We Do
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 w-full max-w-6xl">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={service.title}
              className="group bg-secondary p-8 rounded-lg shadow-subtle hover:shadow-interactive transition-all duration-300 ease-out flex flex-col items-start aspect-square justify-between"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div>
                <IconComponent className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-3xl text-primary mb-3">{service.title}</h3>
                <p className="font-sans text-neutral-dark text-lg leading-relaxed">{service.description}</p>
              </div>
              <div className="mt-6 w-full flex justify-end">
                <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
