
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="mr-2"
    >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.74.45 3.38 1.25 4.8L2 22l5.3-1.38c1.37.73 2.93 1.13 4.58 1.13h.1c5.46 0 9.9-4.45 9.9-9.9S17.5 2 12.04 2m.01 1.66c4.56 0 8.25 3.69 8.25 8.25s-3.69 8.25-8.25 8.25h-.1c-1.55 0-3.04-.42-4.33-1.19l-.31-.18-3.21.83.85-3.13-.2-.33c-.85-1.34-1.31-2.9-1.31-4.52C3.79 5.65 7.48 2 12.05 2m4.84 9.17c-.28-.14-1.65-.81-1.9-.91s-.44-.14-.62.14-.72.91-.88 1.1s-.32.21-.6.07c-.28-.14-1.18-.44-2.25-1.39s-1.78-1.55-2-1.82c-.21-.28-.02-.43.12-.57s.28-.32.41-.48c.14-.14.18-.25.28-.41s.05-.3-.02-.45c-.07-.14-.62-1.5-.85-2.05s-.45-.47-.62-.48h-.52c-.18 0-.48.07-.72.34s-.91.88-1.11 2.13-.2 2.45.52 4.19c.72 1.74 1.73 3.32 3.9 5.31l.4.36c2.42 1.71 3.51 1.99 4.82 1.99h.1c1.2 0 2.27-.35 3.04-1.66.77-1.3.77-2.42.54-2.82s-.71-.53-.98-.67Z"/>
    </svg>
  );

export default function Hero() {

  return (
    <section 
        id="inicio" 
        className="relative w-full h-screen min-h-[700px] flex flex-col items-center justify-center text-center text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 35%, #0f3460 70%, #1e3a8a 100%)' }}
    >
        <div className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-6 w-full animate-fade-in">
            <div className="mb-10" style={{ animation: 'fadeInScale 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards', animationDelay: '0.3s', opacity: 0 }}>
                <Image
                    src="https://i.imgur.com/tFzaEIt.png"
                    alt="HidraFácil Logo"
                    width={280}
                    height={70}
                    priority
                    className="drop-shadow-logo"
                />
            </div>

            <h1 
                className="font-headline font-extrabold tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-8xl max-w-4xl text-white"
                style={{ animation: 'fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards', animationDelay: '0.8s', opacity: 0 }}
            >
                Soluções Completas em<br/>Hidráulica, Elétrica e Irrigação
            </h1>

            <p 
                className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-white/90"
                style={{ animation: 'fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards', animationDelay: '1.2s', opacity: 0 }}
            >
                Qualidade profissional com as melhores marcas do mercado.<br/>Parceiros oficiais Rain Bird, Amanco e Nambei.
            </p>

            <div 
                className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
                style={{ animation: 'fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards', animationDelay: '1.6s', opacity: 0 }}
            >
                <Button size="lg" asChild className="glass-button primary-glow-button">
                    <Link href="#contato">
                        Solicitar Orçamento
                    </Link>
                </Button>
                <Button size="lg" asChild className="glass-button bg-green-500/80 hover:bg-green-600 border-green-400/50 text-white">
                    <Link href="https://wa.me/5511987654321" target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon />
                        Falar no WhatsApp
                    </Link>
                </Button>
            </div>
        </div>

        <div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            style={{ animation: 'bounce-slow 2s infinite, fadeIn 1s ease-out forwards', animationDelay: '2s', opacity: 0 }}
        >
            <ChevronDown className="h-8 w-8 text-white/60" />
        </div>

        <style jsx>{`
            .noise-texture {
                background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                opacity: 0.05;
            }
            .drop-shadow-logo {
                filter: drop-shadow(0 0 2rem rgba(255, 255, 255, 0.2));
            }
            h1, p {
                text-shadow: 0 2px 10px rgba(0,0,0,0.25);
            }
            
            .glass-button {
                background-color: rgba(255, 255, 255, 0.15);
                backdrop-filter: blur(10px);
                border-width: 1px;
                border-color: rgba(255, 255, 255, 0.3);
                border-radius: 9999px;
                padding: 0.75rem 2rem;
                font-weight: 600;
                color: white;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .glass-button:hover {
                background-color: rgba(255, 255, 255, 0.25);
                transform: translateY(-2px);
                box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
            }
            
            .glass-button.primary-glow-button {
                border-color: rgba(59, 130, 246, 0.5);
            }

            .glass-button.primary-glow-button:hover {
                box-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 12px 40px rgba(0, 0, 0, 0.3);
            }

            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeInScale {
                from { opacity: 0; transform: scale(0.9); }
                to { opacity: 1; transform: scale(1); }
            }
             @keyframes bounce-slow {
                0%, 100% {
                    transform: translateY(-25%);
                    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
                }
                50% {
                    transform: translateY(0);
                    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
                }
            }

            .animate-fade-in {
                animation: fadeIn 1s ease-out forwards;
            }
        `}</style>
    </section>
  );
}
