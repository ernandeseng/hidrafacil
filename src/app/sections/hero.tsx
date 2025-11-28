
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {

  return (
    <section 
        id="inicio" 
        className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 35%, #0f3460 70%, #1e3a8a 100%)' }}
    >
        <div 
            className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-6 w-full"
            style={{ transform: 'translateY(-30%)' }}
        >
            <div className="mb-10">
                <Image
                    src="https://i.imgur.com/tFzaEIt.png"
                    alt="HidraFácil Logo"
                    width={549}
                    height={137}
                    priority
                    className="drop-shadow-logo"
                />
            </div>

            <h1 
                className="font-headline font-extrabold tracking-tighter text-4xl sm:text-6xl md:text-7xl max-w-4xl text-white"
            >
                Soluções Completas em<br/>Hidráulica, Elétrica e Irrigação
            </h1>

            <p 
                className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-white/90"
            >
                Qualidade profissional com as melhores marcas do mercado.<br/>Parceiros oficiais Rain Bird, Amanco e Nambei.
            </p>

            <div 
                className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
            >
                <Button size="lg" asChild className="bg-amber-400 text-primary-foreground hover:bg-amber-500 text-lg px-10 py-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <Link href="https://wa.me/5511960672876" target="_blank" rel="noopener noreferrer">
                        Solicitar Orçamento
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
                filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.3));
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
