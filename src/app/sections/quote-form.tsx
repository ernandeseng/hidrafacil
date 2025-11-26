
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { instantQuoteForProject, type InstantQuoteForProjectOutput } from '@/ai/flows/instant-quote-for-project';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { LoaderCircle, Wand2 } from 'lucide-react';

type State = {
  data: InstantQuoteForProjectOutput | null;
  error?: string;
};

async function handleQuoteRequest(prevState: State, formData: FormData): Promise<State> {
  const projectDetails = formData.get('projectDetails') as string;
  if (!projectDetails || projectDetails.length < 20) {
    return { data: null, error: 'Por favor, forneça mais detalhes sobre o seu projeto para um orçamento preciso.' };
  }
  try {
    const result = await instantQuoteForProject({ projectDetails });
    return { data: result };
  } catch (e: any) {
    console.error(e);
    return { data: null, error: e.message || 'Ocorreu um erro inesperado. Tente novamente.' };
  }
}

const initialState: State = {
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          Gerando Orçamento...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Gerar Orçamento Instantâneo
        </>
      )}
    </Button>
  );
}

export default function QuoteForm() {
  const [state, formAction] = useFormState(handleQuoteRequest, initialState);

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Descreva seu Projeto</CardTitle>
          <CardDescription>
            Forneça o máximo de detalhes possível, como tamanho da área, tipo de trabalho e requisitos específicos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <Textarea
              name="projectDetails"
              placeholder="Ex: Preciso de um sistema de irrigação para um jardim de 100m², com gramado e canteiros de flores. Gostaria de usar aspersores e um controlador automático."
              rows={6}
              required
            />
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      {state.error && (
        <Alert variant="destructive" className="mt-4">
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      {state.data && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Seu Orçamento Estimado</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 prose prose-sm max-w-none dark:prose-invert">
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-bold text-lg">Estimativa Total: {state.data.estimatedQuote}</p>
            </div>
            <h3 className="text-md font-semibold">Detalhamento:</h3>
            <div
                className="whitespace-pre-wrap text-sm"
                dangerouslySetInnerHTML={{ __html: state.data.breakdown.replace(/```markdown|```/g, '') }}
            />
            <p className="text-xs text-muted-foreground italic pt-4">
              Atenção: Este é um orçamento estimado gerado por IA. O valor final pode variar após análise técnica.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
