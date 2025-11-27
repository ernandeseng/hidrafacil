import Image from 'next/image';
import { InfiniteSlider } from '@/components/ui/infinite-slider';

const partnerLogos = [
  {
    name: 'Rain Bird',
    logoUrl: 'https://i.imgur.com/XEaWpcD.png',
    width: 160,
    height: 60,
  },
  {
    name: 'Amanco',
    logoUrl: 'https://i.imgur.com/juYXQrQ.png',
    width: 160,
    height: 60,
  },
  {
    name: 'Nambei',
    logoUrl: 'https://i.imgur.com/3tMcAb1.png',
    width: 160,
    height: 60,
  },
  {
    name: 'Rain Bird',
    logoUrl: 'https://i.imgur.com/XEaWpcD.png',
    width: 160,
    height: 60,
  },
  {
    name: 'Amanco',
    logoUrl: 'https://i.imgur.com/juYXQrQ.png',
    width: 160,
    height: 60,
  },
  {
    name: 'Nambei',
    logoUrl: 'https://i.imgur.com/3tMcAb1.png',
    width: 160,
    height: 60,
  },
];

export default function Partners() {
  return (
    <section id="marcas" className="bg-secondary py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                Marcas Parceiras
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Trabalhamos com os líderes do mercado para garantir a máxima qualidade.
            </p>
        </div>
        <div className="relative w-full">
            <InfiniteSlider
                gap={64}
                duration={30}
                className="[mask-image:linear-gradient(to_right,transparent_0,hsl(var(--secondary))_10%,hsl(var(--secondary))_90%,transparent_100%)]"
            >
                {partnerLogos.map((partner, index) => (
                    <Image
                        key={`${partner.name}-${index}`}
                        className="max-h-12 w-auto object-contain"
                        src={partner.logoUrl}
                        alt={partner.name}
                        width={partner.width}
                        height={partner.height}
                    />
                ))}
            </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}
