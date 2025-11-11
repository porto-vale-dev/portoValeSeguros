
"use client";

import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { submitQuoteForm } from "@/app/actions";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { productsData } from '@/lib/products-data';

const formSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório."),
  telefone: z.string().min(10, "Telefone é obrigatório."),
  tipoSeguro: z.string().min(1, "Selecione o tipo de seguro"),
});

type FormValues = z.infer<typeof formSchema>;

export default function QuoteForm() {
    const { toast } = useToast();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: "",
            telefone: "",
            tipoSeguro: "auto",
        },
    });

    const { formState: { isSubmitting } } = form;

    async function onSubmit(values: FormValues) {
      try {
        const result = await submitQuoteForm(values);
        if (result.success) {
          setIsSubmitted(true);
          toast({
            title: "Cotação enviada!",
            description: "Recebemos seus dados. Em breve um de nossos especialistas entrará em contato.",
          });
        } else {
          throw new Error(result.error || "Erro desconhecido");
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Erro na cotação",
          description: (error as Error).message || "Não foi possível completar a cotação. Tente novamente.",
        });
      }
    }
    
    const resetForm = () => {
      form.reset();
      setIsSubmitted(false);
    }

    return (
      <section id="quote" className="w-full bg-secondary py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="w-full max-w-lg mx-auto shadow-2xl">
              {isSubmitted ? (
                <>
                  <CardHeader className="text-center">
                    <CardTitle>Obrigado!</CardTitle>
                    <CardDescription>Sua solicitação de cotação foi enviada com sucesso. Nossa equipe entrará em contato em breve.</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button size="lg" className="w-full" onClick={resetForm}>
                      Fazer Nova Cotação
                    </Button>
                  </CardContent>
                </>
              ) : (
                <>
                  <CardHeader>
                      <CardTitle>Simule Agora</CardTitle>
                      <CardDescription>Preencha os dados e receba uma proposta personalizada.</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                              <FormField control={form.control} name="nome" render={({ field }) => (
                                  <FormItem>
                                      <FormLabel>Nome Completo</FormLabel>
                                      <FormControl>
                                          <Input placeholder="Seu nome" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                  </FormItem>
                              )}/>
                              <FormField control={form.control} name="telefone" render={({ field }) => (
                                  <FormItem>
                                      <FormLabel>WhatsApp</FormLabel>
                                      <FormControl>
                                          <Input placeholder="(99) 99999-9999" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                  </FormItem>
                              )}/>
                              <FormField control={form.control} name="tipoSeguro" render={({ field }) => (
                                  <FormItem>
                                      <FormLabel>Qual seguro você precisa?</FormLabel>
                                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                                          <FormControl>
                                              <SelectTrigger>
                                                  <SelectValue placeholder="Selecione o tipo de seguro" />
                                              </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                            {productsData.map(p => (
                                              <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                                            ))}
                                          </SelectContent>
                                      </Select>
                                      <FormMessage />
                                  </FormItem>
                              )}/>
                              <Button type="submit" size="lg" className="w-full h-12 text-lg" disabled={isSubmitting}>
                                  {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Cotar agora"}
                              </Button>
                          </form>
                      </Form>
                  </CardContent>
                </>
              )}
          </Card>
        </div>
      </section>
    );
}
