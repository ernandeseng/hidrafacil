
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});


export const metadata: Metadata = {
  title: 'HidraFácil | Soluções para Obra e Irrigação',
  description:
    'Sua loja especializada em materiais hidráulicos, elétricos e produtos para irrigação. Soluções completas com atendimento especializado.',
  keywords: ['hidráulica', 'elétrica', 'irrigação', 'Rain Bird', 'Amanco', 'Nambei', 'materiais de construção'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-body antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
