import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Juan Pacheco - Designer & Developer',
  description: 'Portfolio of Juan Pacheco, a designer and developer building beautiful web experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
