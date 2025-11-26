'use server';

/**
 * @fileOverview Generates an estimated quote for a project based on user-provided details.
 *
 * - instantQuoteForProject - A function that handles the quote generation process.
 * - InstantQuoteForProjectInput - The input type for the instantQuoteForProject function.
 * - InstantQuoteForProjectOutput - The return type for the instantQuoteForProject function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InstantQuoteForProjectInputSchema = z.object({
  projectDetails: z
    .string()
    .describe(
      'Detailed description of the project, including size of area, type of work needed, and specific requirements.'
    ),
});
export type InstantQuoteForProjectInput = z.infer<
  typeof InstantQuoteForProjectInputSchema
>;

const InstantQuoteForProjectOutputSchema = z.object({
  estimatedQuote: z.string().describe('The estimated cost for the project.'),
  breakdown: z
    .string()
    .describe('A detailed breakdown of the estimated costs, including materials and labor.'),
});
export type InstantQuoteForProjectOutput = z.infer<
  typeof InstantQuoteForProjectOutputSchema
>;

export async function instantQuoteForProject(
  input: InstantQuoteForProjectInput
): Promise<InstantQuoteForProjectOutput> {
  return instantQuoteForProjectFlow(input);
}

const prompt = ai.definePrompt({
  name: 'instantQuoteForProjectPrompt',
  input: {schema: InstantQuoteForProjectInputSchema},
  output: {schema: InstantQuoteForProjectOutputSchema},
  prompt: `You are an AI assistant specializing in providing estimated quotes for hydraulic, electrical, and irrigation projects.

  Based on the project details provided, generate an estimated quote, including a breakdown of costs for materials and labor.

  Project Details: {{{projectDetails}}}
  \n  Ensure the quote is clear, concise, and provides a realistic expectation of the project costs.
  Include a statement that this is only an estimate and the final cost may vary.
  Respond in markdown format.
  `,
});

const instantQuoteForProjectFlow = ai.defineFlow(
  {
    name: 'instantQuoteForProjectFlow',
    inputSchema: InstantQuoteForProjectInputSchema,
    outputSchema: InstantQuoteForProjectOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
