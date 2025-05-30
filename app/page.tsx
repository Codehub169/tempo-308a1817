import React from 'react';

// Components will be imported once created in their respective files
// import HeroSection from '@/components/HeroSection';
// import StorySection from '@/components/StorySection';
// import ServicesSection from '@/components/ServicesSection';
// import PhilosophySection from '@/components/PhilosophySection';
// import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full scroll-smooth">
      {/* Hero Section Placeholder */}
      <section id="hero" className="w-full h-screen flex flex-col items-center justify-center p-4 bg-neutral-off-white text-center">
        {/* AnimatedLogo will be here */}
        <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mb-8">
          <span className="text-primary font-display text-2xl">h</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display text-primary mb-4 animate-fade-in-up">
          Where stories find their aesthetic.
        </h1>
        <p className="text-lg md:text-xl text-neutral-dark max-w-xl mb-8 animate-fade-in-up animation-delay-300">
          Designs that whisper loud stories.
        </p>
        {/* ScrollIndicator will be here */}
        <div className="absolute bottom-10 animate-subtle-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </section>

      {/* The hueneu Story Placeholder */}
      <section id="story" className="w-full min-h-screen py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-secondary">
        <h2 className="text-3xl md:text-4xl font-display text-primary text-center mb-12 md:mb-16">
          The hueneu Story
        </h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-neutral-dark leading-relaxed">
          Placeholder for the narrative about hueneu, the balance of color and calm, and the 'Who Knew?' moment.
        </p>
      </section>

      {/* What We Do Placeholder */}
      <section id="services" className="w-full min-h-screen py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-neutral-white">
        <h2 className="text-3xl md:text-4xl font-display text-primary text-center mb-12 md:mb-16">
          What We Do
        </h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-neutral-dark leading-relaxed">
          Placeholder for the 5-6 core offerings with icons/visuals and microcopy.
        </p>
      </section>

      {/* Why hueneu? Placeholder */}
      <section id="philosophy" className="w-full min-h-screen py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-secondary">
        <h2 className="text-3xl md:text-4xl font-display text-primary text-center mb-12 md:mb-16">
          Why hueneu?
        </h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-neutral-dark leading-relaxed">
          Placeholder for the emotional brand pitch and poetic copy highlighting calm, mystery, and balance.
        </p>
      </section>

      {/* Let's Work Together (Contact) Placeholder */}
      <section id="contact" className="w-full min-h-screen py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-neutral-off-white">
        <h2 className="text-3xl md:text-4xl font-display text-primary text-center mb-12 md:mb-16">
          Let's Work Together
        </h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-neutral-dark leading-relaxed">
          Placeholder for the contact form styled as a note/letter with a playful CTA.
        </p>
      </section>

      {/* Footer */}
      <footer className="w-full py-10 md:py-12 text-center text-sm bg-secondary border-t border-primary/10">
        <p className="text-neutral-dark/80 mb-1">
          &copy; {new Date().getFullYear()} hueneu. All rights reserved.
        </p>
        <a href="https://instagram.com/hueneu_" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
          Instagram: @hueneu_
        </a>
      </footer>
    </main>
  );
}
