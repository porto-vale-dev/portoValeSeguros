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
  income: z.coerce.number().min(0, "Income must be a positive number."),
  creditScore: z.coerce.number().min(300, "Credit score must be at least 300.").max(850, "Credit score cannot exceed 850."),
  employmentStatus: z.enum(["employed", "self-employed", "unemployed", "student", "retired"]),
  purpose: z.string().min(3, "Purpose must be at least 3 characters."),
  amountNeeded: z.coerce.number().min(100, "Amount must be at least 100."),
  financialGoals: z.string().min(5, "Financial goals must be at least 5 characters."),
  existingDebt: z.coerce.number().min(0, "Existing debt must be a positive number."),
  location: z.string().min(2, "Location must be at least 2 characters."),
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
      purpose: "Debt consolidation",
      amountNeeded: 10000,
      financialGoals: "Reduce monthly payments",
      existingDebt: 5000,
      location: "New York, NY",
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
        throw new Error("Received no recommendations.");
      }
    } catch (error) {
      console.error("Failed to get recommendations:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not fetch recommendations. Please try again later.",
      });
    }
    setIsLoading(false);
  }

  return (
    <section id="recommendations" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your Personal AI Financial Advisor</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Fill in your details below, and our AI will suggest the most suitable credit products for you.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Tell us about yourself</CardTitle>
                <CardDescription>All information is handled securely.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField control={form.control} name="income" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Monthly Income ($)</FormLabel>
                        <FormControl><Input type="number" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="creditScore" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Credit Score</FormLabel>
                        <FormControl><Input type="number" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="employmentStatus" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employment Status</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl><SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger></FormControl>
                          <SelectContent>
                            <SelectItem value="employed">Employed</SelectItem>
                            <SelectItem value="self-employed">Self-Employed</SelectItem>
                            <SelectItem value="unemployed">Unemployed</SelectItem>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="retired">Retired</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="amountNeeded" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount Needed ($)</FormLabel>
                        <FormControl><Input type="number" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="purpose" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Purpose of Loan</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="financialGoals" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Financial Goals</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                     <FormField control={form.control} name="existingDebt" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Existing Debt ($)</FormLabel>
                        <FormControl><Input type="number" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                     <FormField control={form.control} name="location" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location (City, State)</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" disabled={isLoading} className="w-full">
                      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                      Get Recommendations
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Recommended Products</CardTitle>
                <CardDescription>Based on your profile, here are our top suggestions.</CardDescription>
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
                    <p>Your personalized recommendations will appear here.</p>
                  </div>
                )}
                {recommendations && (
                  <div className="space-y-6">
                    {recommendations.recommendedProducts.map((product, index) => (
                      <div key={index} className="space-y-3">
                        <h3 className="text-lg font-semibold text-primary">{product.productName}</h3>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-muted-foreground">Suitability Score</span>
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
