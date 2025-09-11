"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Wand2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { getPersonalizedRecommendations } from "@/app/actions";
import type { PersonalizedProductRecommendationsOutput } from "@/ai/flows/personalized-product-recommendations";

const formSchema = z.object({
  income: z.coerce.number().min(0, "A renda deve ser um número positivo."),
  creditScore: z.coerce.number().min(300, "A pontuação de crédito deve ser de pelo menos 300.").max(850, "A pontuação de crédito não pode exceder 850."),
  employmentStatus: z.enum(["employed", "self-employed", "unemployed", "student", "retired"]),
  purpose: z.string().min(3, "O propósito deve ter pelo menos 3 caracteres."),
  amountNeeded: z.coerce.number().min(100, "O valor deve ser de pelo menos 100."),
  financialGoals: z.string().min(5, "Os objetivos financeiros devem ter pelo menos 5 caracteres."),
  existingDebt: z.coerce.number().min(0, "A dívida existente deve ser um número positivo."),
  location: z.string().min(2, "A localização deve ter pelo menos 2 caracteres."),
});

type FormValues = z.infer<typeof formSchema>;

export default function RecommendationTool() {
  const [recommendations, setRecommendations] = useState<PersonalizedProductRecommendationsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      income: 5000,
      creditScore: 720,
      employmentStatus: "employed",
      purpose: "Consolidação de dívidas",
      amountNeeded: 10000,
      financialGoals: "Reduzir pagamentos mensais",
      existingDebt: 5000,
      location: "São Paulo, SP",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setRecommendations(null);
    try {
      const result = await getPersonalizedRecommendations(values);
      if (result) {
        setRecommendations(result);
      } else {
        throw new Error("Não foram recebidas recomendações.");
      }
    } catch (error) {
      console.error("Falha ao obter recomendações:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível buscar as recomendações. Por favor, tente novamente mais tarde.",
      });
    }
    setIsLoading(false);
  }

  return (
    <section id="recommendations" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Seu Consultor Financeiro Pessoal de IA</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Preencha seus dados abaixo e nossa IA sugerirá os produtos de crédito mais adequados para você.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Conte-nos sobre você</CardTitle>
                <CardDescription>Todas as informações são tratadas com segurança.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField control={form.control} name="income" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Renda Mensal (R$)</FormLabel>
                        <FormControl><Input type="number" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="creditScore" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pontuação de Crédito</FormLabel>
                        <FormControl><Input type="number" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="employmentStatus" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Situação Profissional</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl><SelectTrigger><SelectValue placeholder="Selecione o status" /></SelectTrigger></FormControl>
                          <SelectContent>
                            <SelectItem value="employed">Empregado</SelectItem>
                            <SelectItem value="self-employed">Autônomo</SelectItem>
                            <SelectItem value="unemployed">Desempregado</SelectItem>
                            <SelectItem value="student">Estudante</SelectItem>
                            <SelectItem value="retired">Aposentado</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="amountNeeded" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Valor Necessário (R$)</FormLabel>
                        <FormControl><Input type="number" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="purpose" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Propósito do Empréstimo</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="financialGoals" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Objetivos Financeiros</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                     <FormField control={form.control} name="existingDebt" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dívida Existente (R$)</FormLabel>
                        <FormControl><Input type="number" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                     <FormField control={form.control} name="location" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Localização (Cidade, Estado)</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" disabled={isLoading} className="w-full">
                      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                      Obter Recomendações
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Produtos Recomendados</CardTitle>
                <CardDescription>Com base no seu perfil, aqui estão nossas principais sugestões.</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading && (
                  <div className="space-y-6">
                    {[...Array(2)].map((_, i) => (
                       <div key={i} className="space-y-2">
                        <div className="h-6 w-1/2 rounded-md bg-muted animate-pulse"></div>
                        <div className="h-4 w-full rounded-md bg-muted animate-pulse"></div>
                        <div className="h-4 w-3/4 rounded-md bg-muted animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                )}
                {!isLoading && !recommendations && (
                  <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-full min-h-[300px]">
                    <Wand2 className="h-12 w-12 mb-4" />
                    <p>Suas recomendações personalizadas aparecerão aqui.</p>
                  </div>
                )}
                {recommendations && (
                  <div className="space-y-6">
                    {recommendations.recommendedProducts.map((product, index) => (
                      <div key={index} className="space-y-3">
                        <h3 className="text-lg font-semibold text-primary">{product.productName}</h3>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-muted-foreground">Pontuação de Adequação</span>
                            <span className="text-sm font-medium">{Math.round(product.suitabilityScore * 100)}%</span>
                          </div>
                          <Progress value={product.suitabilityScore * 100} className="h-2" />
                        </div>
                        <p className="text-sm text-foreground/80">{product.rationale}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
