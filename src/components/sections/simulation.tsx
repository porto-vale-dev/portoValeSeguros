"use client";

import { useState } from 'react';
import Image from 'next/image';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { submitQuoteForm } from "@/app/actions";

const formSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório."),
  email: z.string().email("E-mail inválido."),
  telefone: z.string().min(10, "Telefone é obrigatório."),
  tipoSeguro: z.string().min(1, "Selecione o tipo de seguro"),
});

type FormValues = z.infer<typeof formSchema>;

function QuoteForm() {
    const { toast } = useToast();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: "",
            email: "",
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

    if (isSubmitted) {
      return (
        <Card className="w-full max-w-md shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle>Obrigado!</CardTitle>
            <CardDescription>Sua solicitação de cotação foi enviada com sucesso. Nossa equipe entrará em contato em breve.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button size="lg" className="w-full" onClick={resetForm}>
              Fazer Nova Cotação
            </Button>
          </CardContent>
        </Card>
      )
    }

    return (
        <Card className="w-full max-w-md shadow-2xl">
            <CardHeader>
                <CardTitle>Cote seu Seguro</CardTitle>
                <CardDescription>Preencha os dados abaixo e receba uma proposta personalizada.</CardDescription>
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
                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                                <FormLabel>E-mail</FormLabel>
                                <FormControl>
                                    <Input placeholder="email@exemplo.com" {...field} />
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
                                        <SelectItem value="auto">Seguro Auto</SelectItem>
                                        <SelectItem value="residencial">Seguro Residencial</SelectItem>
                                        <SelectItem value="vida">Seguro de Vida</SelectItem>
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
        </Card>
    );
}

export default function Simulation() {
    return (
    <section id="contact" className="relative w-full overflow-hidden">
        <div className="absolute inset-0 z-[-1]">
            <Image
                src="/img/slide1-carrossel-home.jpg"
                alt="Background de uma família feliz"
                fill
                quality={100}
                className="object-cover object-center"
                priority
                data-ai-hint="happy family"
            />
            <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 py-20 md:py-32 lg:py-40">
            <div className="space-y-6 text-left">
                <h1 className="font-headline text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                    Seguro para Auto, Vida e Residência. <span className="text-primary">Simples e rápido.</span>
                </h1>
                <p className="max-w-[600px] text-lg text-gray-200 md:text-xl">
                    Proteja o que mais importa com as melhores coberturas do mercado. Receba sua cotação em poucos minutos.
                </p>
            </div>
              
            <div className="relative w-full flex justify-center lg:justify-end">
               <QuoteForm />
            </div>
        </div>
    </section>
  )
}
