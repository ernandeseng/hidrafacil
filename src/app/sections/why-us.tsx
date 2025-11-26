
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, Archive, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Atendimento Especializado',
    description: 'Nossa equipe está pronta para oferecer a melhor solução para seu projeto.',
  },
  {
    icon: Award,
    title: 'Qualidade Certificada',
    description: 'Trabalhamos apenas com marcas renomadas e produtos de alta performance.',
  },
  {
    icon: Archive,
    title: 'Estoque Completo',
    description: 'Ampla variedade de produtos para atender todas as suas necessidades à pronta entrega.',
  },
  {
    icon: ShieldCheck,
    title: 'Suporte Técnico',
    description: 'Oferecemos suporte completo para garantir o sucesso da sua instalação.',
  },
];

export default function WhyUs() {
  return (
    <section id="diferenciais" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Por que escolher a HidraFácil?
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Nossa dedicação é a sua satisfação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-8 w-8 text-accent" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-6 text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
