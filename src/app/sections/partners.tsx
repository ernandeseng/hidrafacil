
import Image from 'next/image';

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
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none">
          {partnerLogos.map((partner) => (
            <div
              key={partner.name}
              className="flex justify-center"
            >
              <Image
                className="col-span-2 max-h-12 w-auto object-contain lg:col-span-1 transition-all duration-300 ease-in-out"
                src={partner.logoUrl}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
