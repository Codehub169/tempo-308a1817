import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'hueneu - Where stories find their aesthetic.',
  description: 'hueneu is a graphic design studio specializing in story-first, intentional, and evocative designs. Designs that whisper loud stories.',
  keywords: ['graphic design', 'branding', 'packaging', 'social media', 'stationery', 'creative studio', 'hueneu', 'storytelling design'],
  authors: [{ name: 'hueneu' }],
  openGraph: {
    title: 'hueneu - Where stories find their aesthetic.',
    description: 'Designs that whisper loud stories.',
    url: 'https://hueneu.com', // Replace with actual domain
    siteName: 'hueneu',
    // images: [
    //   {
    //     url: 'https://hueneu.com/og-image.png', // Replace with actual OG image URL
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'hueneu - Where stories find their aesthetic.',
    description: 'Designs that whisper loud stories.',
    // siteId: 'YourTwitterID', // Optional: Your Twitter ID
    // creator: '@hueneu_', // Optional: Your Twitter handle
    // images: ['https://hueneu.com/twitter-image.png'], // Replace with actual Twitter image URL
  },
  icons: {
    // icon: '/favicon.ico', // Example: if favicon.ico is in public folder
    // shortcut: '/favicon-16x16.png',
    // apple: '/apple-touch-icon.png',
  },
  // themeColor: '#F0EAD6', // Warm Beige from palette
  // colorScheme: 'light', // Assuming a light theme primarily
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-secondary text-neutral-dark antialiased selection:bg-accent selection:text-neutral-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
