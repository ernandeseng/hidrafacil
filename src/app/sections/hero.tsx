
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-banner');

  return (
    <section id="inicio" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-primary/30" />

      <div className="relative z-10 p-4 sm:p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline text-shadow-lg animate-fade-in-down">
          Soluções completas para sua obra e irrigação
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-shadow animate-fade-in-up">
          Sua loja especializada em materiais hidráulicos, elétricos e produtos de irrigação com atendimento de excelência.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#produtos">Conhecer Produtos</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="bg-background/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
            <Link href="#contato">Falar com Especialista</Link>
          </Button>
        </div>
      </div>
       <style jsx>{`
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        .text-shadow-lg {
          text-shadow: 0 4px 8px rgba(0,0,0,0.5);
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
       `}</style>
    </section>
  );
}
