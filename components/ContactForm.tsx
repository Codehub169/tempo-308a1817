'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Loader2, CheckCircle, AlertTriangle, Instagram } from 'lucide-react'; // Removed unused Mail icon
import { ComponentProps } from 'react';

interface FormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

interface ContactFormProps extends ComponentProps<'section'> {
  id: string;
}

export default function ContactForm({ id, ...props }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus(null);
    setSubmissionMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus('success');
        setSubmissionMessage(result.message || 'Your message has been sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmissionStatus('error');
        setSubmissionMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Contact form submission error:', error); // Log the actual error for debugging
      setSubmissionStatus('error');
      setSubmissionMessage('An unexpected error occurred. Please try again later.');
    }
    setIsLoading(false);
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.7, ease: 'easeOut', delay: 0.3 } 
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    },
  };

  return (
    <section 
      id={id} 
      ref={ref}
      className="min-h-screen bg-brand-secondary py-20 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center"
      {...props}
    >
      <motion.h2 
        className="font-display text-5xl md:text-6xl lg:text-7xl text-brand-primary mb-12 text-center"
        variants={headingVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        Let's Work Together
      </motion.h2>
      
      <motion.div 
        className="w-full max-w-2xl bg-white p-8 sm:p-10 md:p-12 rounded-large shadow-interactive relative overflow-hidden"
        variants={formVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Decorative 'letter' flap - uses neutral-off-white from theme */}
        <div className="absolute top-0 left-0 w-full h-16 bg-neutral-off-white opacity-50 transform -skew-y-3 -translate-y-1/3 pointer-events-none"></div>
        
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-primary mb-1 font-sans">Full Name</label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-medium focus:ring-brand-accent focus:border-brand-accent transition-colors duration-200 font-sans bg-white text-neutral-dark-grey placeholder-gray-500" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-primary mb-1 font-sans">Email Address</label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-medium focus:ring-brand-accent focus:border-brand-accent transition-colors duration-200 font-sans bg-white text-neutral-dark-grey placeholder-gray-500" placeholder="your@email.com" />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-brand-primary mb-1 font-sans">Subject (Optional)</label>
            <input type="text" name="subject" id="subject" value={formData.subject || ''} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-medium focus:ring-brand-accent focus:border-brand-accent transition-colors duration-200 font-sans bg-white text-neutral-dark-grey placeholder-gray-500" placeholder="Project Idea" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-brand-primary mb-1 font-sans">Your Message</label>
            <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-medium focus:ring-brand-accent focus:border-brand-accent transition-colors duration-200 font-sans bg-white text-neutral-dark-grey placeholder-gray-500 resize-none" placeholder="Tell us about your story..."></textarea>
          </div>
          <div>
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full flex items-center justify-center px-8 py-4 bg-brand-accent text-white font-sans font-semibold rounded-medium hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-secondary transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {isLoading ? (
                <Loader2 className="w-6 h-6 animate-spin mr-2" />
              ) : (
                <Send className="w-5 h-5 mr-2 transform transition-transform duration-300 group-hover:rotate-[-15deg]" />
              )}
              Let's design your story
            </button>
          </div>
        </form>

        {submissionStatus && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className={`mt-6 p-4 rounded-medium flex items-center text-sm font-sans ${submissionStatus === 'success' ? 'bg-feedback-success-bg text-feedback-success-content' : 'bg-feedback-error-bg text-feedback-error-content'}`}
          >
            {submissionStatus === 'success' ? <CheckCircle className="w-5 h-5 mr-2" /> : <AlertTriangle className="w-5 h-5 mr-2" />}
            {submissionMessage}
          </motion.div>
        )}

        <div className="mt-10 text-center">
          <p className="font-sans text-neutral-dark-grey mb-2">Connect with us:</p>
          <a href="https://instagram.com/hueneu_" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-brand-primary hover:text-brand-accent transition-colors duration-200 font-sans">
            <Instagram className="w-5 h-5 mr-2" /> @hueneu_
          </a>
        </div>
        
      </motion.div>
    </section>
  );
}
