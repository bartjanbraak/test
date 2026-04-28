import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Porsche Visual Garage',
  description: 'A premium Porsche showcase, comparison studio and dream build experience.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-noise grid-noise">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
