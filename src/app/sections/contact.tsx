
import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone, Clock, MessageSquareHeart } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-2 h-5 w-5"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);


const contactDetails = [
  {
    icon: MapPin,
    text: 'Rua Exemplo, 123, Bairro, Cidade - SP, 01234-567',
  },
  {
    icon: Phone,
    text: '(11) 98765-4321',
    href: 'tel:+5511987654321',
  },
  {
    icon: Mail,
    text: 'contato@hidrafacil.com',
    href: 'mailto:contato@hidrafacil.com',
  },
  {
    icon: Clock,
    text: 'Seg-Sex: 8:00 - 18:00 | Sáb: 8:00 - 12:00',
  },
];

export default function Contact() {
  const mapImage = PlaceHolderImages.find((img) => img.id === 'contact-map');

  return (
    <section id="contato" className="py-16 sm:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                Entre em Contato
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Estamos prontos para atender você.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Informações de Contato</h3>
                    <ul className="space-y-4">
                        {contactDetails.map((item, index) => {
                            const Icon = item.icon;
                            const content = (
                                <span className="flex items-start gap-4">
                                    <Icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                                    <span>{item.text}</span>
                                </span>
                            );
                            return (
                                <li key={index}>
                                    {item.href ? (
                                        <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">{content}</a>
                                    ) : (
                                        <p className="text-muted-foreground">{content}</p>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {mapImage && (
                    <div className="aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={mapImage.imageUrl}
                            alt="Mapa de localização da HidraFácil"
                            width={600}
                            height={450}
                            className="w-full h-full object-cover"
                            data-ai-hint={mapImage.imageHint}
                        />
                    </div>
                )}
            </div>
            
            <div className="bg-gradient-to-br from-primary/90 to-primary/70 p-8 rounded-2xl shadow-2xl text-center flex flex-col items-center justify-center h-full text-primary-foreground transform hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-white/20 p-4 rounded-full mb-6">
                <MessageSquareHeart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 font-headline">Fale com um Especialista</h3>
              <p className="text-white/80 mb-8 max-w-sm">
                  Clique no botão abaixo para tirar suas dúvidas e solicitar um orçamento diretamente pelo WhatsApp.
              </p>
              <Button size="lg" asChild className="bg-green-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-all duration-200 ring-2 ring-white/50">
                <Link href="https://wa.me/5511987654321" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  Iniciar Conversa no WhatsApp
                </Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
