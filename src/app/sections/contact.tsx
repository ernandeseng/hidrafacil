
import Image from 'next/image';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import ContactForm from './contact-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
    <section id="contato" className="py-16 sm:py-24 bg-background">
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
            
            <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-card-foreground mb-6">Envie uma Mensagem</h3>
                <ContactForm />
            </div>
        </div>
      </div>
    </section>
  );
}
