import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import ServicesSection from '@/components/ServicesSection';
import PhilosophySection from '@/components/PhilosophySection';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full scroll-smooth">
      <HeroSection id="hero" />
      <StorySection id="story" />
      <ServicesSection id="services" />
      <PhilosophySection id="philosophy" />
      <ContactForm id="contact" />

      {/* Footer */}
      <footer className="w-full py-10 md:py-12 text-center text-sm bg-brand-secondary border-t border-brand-primary/10">
        <p className="text-neutral-dark-grey/80 mb-1">
          &copy; {new Date().getFullYear()} hueneu. All rights reserved.
        </p>
        <a href="https://instagram.com/hueneu_" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-brand-accent transition-colors">
          Instagram: @hueneu_
        </a>
      </footer>
    </main>
  );
}
