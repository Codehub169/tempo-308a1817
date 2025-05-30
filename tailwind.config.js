/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#5A6B7C', // Dusty Blue-Grey (Neu)
          secondary: '#F0EAD6', // Warm Beige
          accent: '#FF6B6B',    // Vibrant Coral Red (Hue)
        },
        neutral: {
          'off-white': '#F8F8F8',
          'dark-grey': '#333333',
        },
        feedback: {
          success: '#4CAF50',
          'success-content': '#1B5E20', // Darker green for text on light success bg
          'success-bg': '#E8F5E9',    // Light green background for success messages
          warning: '#FFC107',
          error: '#F44336',
          'error-content': '#B71C1C',  // Darker red for text on light error bg
          'error-bg': '#FFEBEE',     // Light red background for error messages
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Raleway', 'sans-serif'],
      },
      borderRadius: {
        'soft': '4px',
        'medium': '8px',
        'large': '12px',
      },
      boxShadow: {
        'subtle': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'interactive': '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'logo-reveal': 'logo-reveal 1.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'subtle-pulse': 'subtle-pulse 2s infinite ease-in-out',
      },
      keyframes: {
        'logo-reveal': {
          '0%': { opacity: 0, transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'subtle-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        }
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
};
