
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Droplets, Wrench, Zap } from 'lucide-react';

const specialties = [
  {
    icon: Droplets,
    title: 'Irrigação Profissional',
    description: 'Sistemas completos Rain Bird para jardins, gramados e agricultura, garantindo eficiência e economia de água.',
  },
  {
    icon: Wrench,
    title: 'Sistemas Hidráulicos',
    description: 'Especialização em sistemas de gás, água quente e fria com a tecnologia Amanco PEX GAS, sinônimo de segurança e durabilidade.',
  },
  {
    icon: Zap,
    title: 'Instalações Elétricas',
    description: 'Produtos de alta qualidade Nambei para projetos residenciais e comerciais, oferecendo segurança e performance.',
  },
];

export default function Specialties() {
  return (
    <section id="servicos" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Nossas Especialidades
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Soluções inovadoras para cada etapa do seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="text-center flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="items-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="pt-4 text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-muted-foreground mb-6">{item.description}</p>
                    <Button variant="outline">Saiba Mais</Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
