import { ReactNode } from 'react';
import './globals.css';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export const metadata = {
  title: "EktroMart Store | E-commerce Product Listing Platform",
  description: "Ektromart is the number 1 e-commerce product listing platform which makes buying and selling really easy for everyone.",
  keywords: "Next.js, TypeScript, TailwindCSS, CRUD, E-commerce, Product Listing, Product Management",
  openGraph: {
    type: 'website',
    url: 'https://ektromart.vercel.app',
    title: "EktroMart Store",
    description: "Ektromart is the number 1 e-commerce product listing platform which makes buying and selling really easy for everyone.",
    // images: [
    //   {
    //     url: 'https://yourwebsite.com/path/to/image.jpg',
    //     // url: '/images/logo.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Open Graph Image',
    //   },
    // ], 
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: "EktroMart Store",
  //   description: "Ektromart is the number 1 e-commerce product listing platform which makes buying and selling really easy for everyone.",
  //   image: 'https://yourwebsite.com/path/to/twitter-image.jpg',
  // },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className='font-jost overflow-x-hidden'>
        {children}
        <ScrollToTopButton />

        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/images/favicon_io/site.webmanifest" />

        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </body>
    </html>
  );
}
