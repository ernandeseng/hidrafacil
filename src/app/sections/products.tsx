
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 'product-irrigation-system',
    name: 'Sistemas de Irrigação',
    brand: 'Rain Bird',
    imageUrl: 'https://i.imgur.com/AXLPZ9X.jpeg',
  },
  {
    id: 'product-pex-pipe',
    name: 'Tubulação PEX Gás',
    brand: 'Amanco',
    imageUrl: 'https://i.imgur.com/HCPtpaC.jpeg',
  },
  {
    id: 'product-sprinkler',
    name: 'Aspersores e Controladores',
    brand: 'Rain Bird',
    imageUrl: 'https://i.imgur.com/yjqc4oO.jpeg',
  },
  {
    id: 'product-connections',
    name: 'Conexões Hidráulicas',
    brand: 'Diversas',
    imageUrl: 'https://i.imgur.com/heIYuY1.png',
  },
  {
    id: 'product-electrical',
    name: 'Materiais Elétricos',
    brand: 'Nambei',
    imageUrl: 'https://i.imgur.com/vuXbE0J.jpeg',
  },
  {
    id: 'product-controller',
    name: 'Controladores de Irrigação',
    brand: 'Rain Bird',
    imageUrl: 'https://i.imgur.com/eeYIBYh.jpeg',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                Nossa linha de produtos
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Um estoque completo para atender todas as suas necessidades.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
              <Card key={product.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="aspect-h-3 aspect-w-4 overflow-hidden">
                    <Image
                      src={product.imageUrl}
                      alt={`Imagem do produto ${product.name}`}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">{product.brand}</Badge>
                  <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
