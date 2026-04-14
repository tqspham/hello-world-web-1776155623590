import type { Metadata } from 'next';
import React from 'react';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Hello World Web',
  description: 'A minimal, accessible Next.js application displaying a Hello World greeting with responsive design support.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<React.ReactElement> {
  return (
    <html lang="en" className="antialiased">
      <head />
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}