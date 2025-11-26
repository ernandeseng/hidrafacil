
import QuoteForm from './quote-form';

export default function Quote() {
  return (
    <section id="orcamento" className="py-16 sm:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                Orçamento Instantâneo com IA
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Receba uma estimativa de custo para o seu projeto em segundos.
            </p>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
