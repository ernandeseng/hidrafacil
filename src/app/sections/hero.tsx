
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.614 14.735c-.345-.173-.518-.259-.863-.431-.345-.173-1.553-.777-1.726-.863-.173-.086-.345-.086-.518.173-.173.259-.69.863-.863 1.035-.173.173-.345.173-.604.086s-1.122-.431-2.158-1.38-.173-1.64-1.726-1.813c-.086-.086-.173-.173-.173-.259s-.086-.259 0-.345.173-.345.259-.431h.086c.086-.086.173-.173.259-.259s.086-.173.173-.345.086-.259.086-.345c.086-.086.086-.173.086-.345s-.086-.259-.086-.345c0-.086-.086-.173-.086-.259s0-.173.086-.173c.086-.086.173-.173.173-.259s.086-.173.086-.259c.086,0,.086-.086.086-.086s.086-.086.086-.086c0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,a-12.258-2.675c-3.453-2-5.178-6.128-5.178-9.581s1.725-7.581 5.178-9.581c3.453-2 7.768-2 12.258 0 3.453 2 5.178 6.128 5.178 9.581s-1.725 7.581-5.178 9.581c-4.49 2.675-9.805 2.675-12.258 0z" />
    </svg>
  );

export default function Hero() {

  return (
    <section id="inicio" className="relative w-full h-screen min-h-[700px] flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 via-blue-700 to-orange-500 animated-gradient -z-10" />
        <div className="absolute inset-0 w-full h-full bg-slate-900/10 noise-texture -z-10" />

        <div className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-6 w-full animate-fade-in">
            <div className="mb-10 animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
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
                className="font-headline font-extrabold tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-8xl max-w-4xl animate-fade-in-up"
                style={{ animationDelay: '0.8s' }}
            >
                Soluções Completas em<br/>Hidráulica, Elétrica e Irrigação
            </h1>

            <p 
                className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-white/90 animate-fade-in-up"
                style={{ animationDelay: '1.2s' }}
            >
                Qualidade profissional com as melhores marcas do mercado.<br/>Parceiros oficiais Rain Bird, Amanco e Nambei.
            </p>

            <div 
                className="mt-12 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up"
                style={{ animationDelay: '1.6s' }}
            >
                <Button size="lg" asChild className="glass-button primary-glow-button">
                    <Link href="#contato">
                        Solicitar Orçamento
                    </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="glass-button secondary-glow-button">
                    <Link href="https://wa.me/5511987654321" target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon />
                        Falar no WhatsApp
                    </Link>
                </Button>
            </div>
        </div>

        <div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow"
            style={{ animationDelay: '2s' }}
        >
            <ChevronDown className="h-8 w-8 text-white/60" />
        </div>

        <style jsx>{`
            .noise-texture {
                background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                opacity: 0.05;
            }
            .animated-gradient {
                background-size: 200% 200%;
                animation: gradientShift 15s ease infinite;
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

            .glass-button.secondary-glow-button {
                border-color: rgba(245, 158, 11, 0.5);
            }

            .glass-button.secondary-glow-button:hover {
                box-shadow: 0 0 20px rgba(245, 158, 11, 0.4), 0 12px 40px rgba(0, 0, 0, 0.3);
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
            .animate-fade-in-up {
                opacity: 0;
                animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            }
            .animate-fade-in-scale {
                opacity: 0;
                animation: fadeInScale 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            }
            .animate-bounce-slow {
                opacity: 0;
                animation: bounce-slow 2s infinite, fadeIn 1s ease-out forwards;
            }
        `}</style>
    </section>
  );
}
