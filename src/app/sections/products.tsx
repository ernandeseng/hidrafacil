
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 'product-irrigation-system',
    name: 'Sistemas de Irrigação',
    brand: 'Rain Bird',
  },
  {
    id: 'product-pex-pipe',
    name: 'Tubulação PEX Gás',
    brand: 'Amanco',
  },
  {
    id: 'product-sprinkler',
    name: 'Aspersores e Controladores',
    brand: 'Rain Bird',
  },
  {
    id: 'product-connections',
    name: 'Conexões Hidráulicas',
    brand: 'Diversas',
  },
  {
    id: 'product-electrical',
    name: 'Materiais Elétricos',
    brand: 'Nambei',
  },
  {
    id: 'product-controller',
    name: 'Controladores de Irrigação',
    brand: 'Rain Bird',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                Principais Produtos
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
                      src={`https://picsum.photos/seed/${index + 1}/400/300`}
                      alt={`Placeholder para ${product.name}`}
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
