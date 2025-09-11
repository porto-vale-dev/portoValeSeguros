// src/ai/flows/personalized-product-recommendations.ts
'use server';

/**
 * @fileOverview AI-powered credit product recommender.
 *
 * This module defines a Genkit flow that analyzes user-provided financial data
 * and recommends the most suitable credit product.
 *
 * @module ai/flows/personalized-product-recommendations
 *
 * @function personalizedProductRecommendations - The main function to initiate the recommendation process.
 * @interface PersonalizedProductRecommendationsInput - Defines the input schema for user financial data.
 * @interface PersonalizedProductRecommendationsOutput - Defines the output schema for the recommended credit products.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';


const PersonalizedProductRecommendationsInputSchema = z.object({
  income: z.number().describe('Monthly income of the user.'),
  creditScore: z.number().describe('Credit score of the user.'),
  employmentStatus: z.string().describe('Employment status of the user (e.g., employed, self-employed, unemployed).'),
  purpose: z.string().describe('The purpose of the credit product (e.g., debt consolidation, home improvement, personal loan).'),
  amountNeeded: z.number().describe('The amount of credit needed.'),
  financialGoals: z.string().describe('The financial goals of the user.'),
  existingDebt: z.number().describe('The existing debt of the user.'),
  location: z.string().describe('The location of the user.'),
});
export type PersonalizedProductRecommendationsInput = z.infer<typeof PersonalizedProductRecommendationsInputSchema>;

const PersonalizedProductRecommendationsOutputSchema = z.object({
  recommendedProducts: z.array(
    z.object({
      productName: z.string().describe('Name of the recommended credit product.'),
      suitabilityScore: z.number().describe('A score indicating how well the product suits the user, from 0 to 1.'),
      rationale: z.string().describe('Explanation of why the product is recommended for the user.'),
    })
  ).describe('A list of recommended credit products, sorted by suitability score.'),
});
export type PersonalizedProductRecommendationsOutput = z.infer<typeof PersonalizedProductRecommendationsOutputSchema>;

export async function personalizedProductRecommendations(input: PersonalizedProductRecommendationsInput): Promise<PersonalizedProductRecommendationsOutput> {
  return personalizedProductRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedProductRecommendationsPrompt',
  input: { schema: PersonalizedProductRecommendationsInputSchema },
  output: { schema: PersonalizedProductRecommendationsOutputSchema },
  prompt: `You are an AI assistant that analyzes user financial data and recommends the most suitable credit products.

  Analyze the following user data:
  - Monthly Income: {{income}}
  - Credit Score: {{creditScore}}
  - Employment Status: {{employmentStatus}}
  - Purpose of Credit Product: {{purpose}}
  - Amount Needed: {{amountNeeded}}
  - Financial Goals: {{financialGoals}}
  - Existing Debt: {{existingDebt}}
  - Location: {{location}}

  Based on this data, recommend the top credit products, and explain why each product is suitable for the user.  Provide a suitability score between 0 and 1.

  Ensure the output is a valid JSON object conforming to the PersonalizedProductRecommendationsOutputSchema schema.
  `,
});

const personalizedProductRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedProductRecommendationsFlow',
    inputSchema: PersonalizedProductRecommendationsInputSchema,
    outputSchema: PersonalizedProductRecommendationsOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
