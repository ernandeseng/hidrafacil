
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const categories = [
  {
    name: 'Irrigação',
    products: [
      {
        id: 'product-irrigation-system',
        name: 'Sistemas de Irrigação',
        brand: 'Rain Bird',
        imageUrl: 'https://i.imgur.com/AXLPZ9X.jpeg',
      },
      {
        id: 'product-sprinkler',
        name: 'Aspersores',
        brand: 'Rain Bird',
        imageUrl: 'https://i.imgur.com/yjqc4oO.jpeg',
      },
      {
        id: 'product-controller',
        name: 'Controladores de Irrigação',
        brand: 'Rain Bird',
        imageUrl: 'https://i.imgur.com/eeYIBYh.jpeg',
      },
      {
        id: 'product-irrigation-valve',
        name: 'Válvula de Irrigação',
        brand: 'Rain Bird',
        imageUrl: 'https://i.imgur.com/pnsNRcV.jpeg',
      },
      {
        id: 'product-drip-system',
        name: 'Sistema de Gotejamento',
        brand: 'Rain Bird',
        imageUrl: 'https://i.imgur.com/bDkYtiK.jpeg',
      },
    ],
  },
  {
    name: 'Hidráulica',
    products: [
      {
        id: 'product-pex-pipe',
        name: 'Tubulação PEX Gás',
        brand: 'Amanco',
        imageUrl: 'https://i.imgur.com/HCPtpaC.jpeg',
      },
      {
        id: 'product-connections',
        name: 'Conexões Hidráulicas',
        brand: 'Diversas',
        imageUrl: 'https://i.imgur.com/heIYuY1.png',
      },
      {
        id: 'product-pvc-connection-1',
        name: 'Conexão PVC',
        brand: 'Diversas',
        imageUrl: 'https://i.imgur.com/CLuFoAd.jpeg',
      },
      {
        id: 'product-pvc-connection-2',
        name: 'Conexão PVC',
        brand: 'Diversas',
        imageUrl: 'https://i.imgur.com/RSJm0Jy.jpeg',
      },
      {
        id: 'product-pvc-connection-3',
        name: 'Conexão PVC',
        brand: 'Diversas',
        imageUrl: 'https://i.imgur.com/DSyWsI4.jpeg',
      },
      {
        id: 'product-pvc-connection-4',
        name: 'Conexão PVC',
        brand: 'Diversas',
        imageUrl: 'https://i.imgur.com/k9Hb02H.jpeg',
      },
      {
        id: 'product-pvc-connection-5',
        name: 'Conexão PVC',
        brand: 'Diversas',
        imageUrl: 'https://i.imgur.com/TIr6xUf.jpeg',
      },
      {
        id: 'product-pvc-connection-6',
        name: 'Conexão PVC',
        brand: 'Diversas',
        imageUrl: 'https://i.imgur.com/XAP1796.jpeg',
      },
    ],
  },
  {
    name: 'Elétrica',
    products: [
      {
        id: 'product-electrical',
        name: 'Materiais Elétricos',
        brand: 'Nambei',
        imageUrl: 'https://i.imgur.com/vuXbE0J.jpeg',
      },
    ],
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

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.name}>
              <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl font-headline mb-8 border-l-4 border-primary pl-4">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {category.products.map((product) => (
                  <Card
                    key={product.id}
                    className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  >
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
                      <Badge variant="secondary" className="mb-2">
                        {product.brand}
                      </Badge>
                      <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
