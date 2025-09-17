
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2, Home, Car, ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { simulateCredit } from "@/app/actions";


type LoanType = 'imovel' | 'veiculo';

const formSchema = z.object({
  // Step 1
  valorBem: z.string().min(1, "Campo obrigatório"),
  valorDesejado: z.string().min(1, "Campo obrigatório"),
  estado: z.string().min(1, "Selecione um estado"),
  tipoCredito: z.string(),
  prazo: z.number().min(12).max(240),
  tipoGarantia: z.enum(['imovel', 'veiculo']),
  // Step 2
  nome: z.string().min(2, "Nome é obrigatório."),
  email: z.string().email("E-mail inválido."),
  telefone: z.string().min(10, "Telefone é obrigatório.")
});


type FormValues = z.infer<typeof formSchema>;
type SimulationResult = {
  parcelaInicial: string;
  parcelaFinal: string;
  taxaJuros: string;
}

const states = [
  { value: "AC", label: "Acre" }, { value: "AL", label: "Alagoas" }, { value: "AP", label: "Amapá" }, 
  { value: "AM", label: "Amazonas" }, { value: "BA", label: "Bahia" }, { value: "CE", label: "Ceará" }, 
  { value: "DF", label: "Distrito Federal" }, { value: "ES", label: "Espírito Santo" }, { value: "GO", label: "Goiás" }, 
  { value: "MA", label: "Maranhão" }, { value: "MT", label: "Mato Grosso" }, { value: "MS", label: "Mato Grosso do Sul" }, 
  { value: "MG", label: "Minas Gerais" }, { value: "PA", label: "Pará" }, { value: "PB", label: "Paraíba" }, 
  { value: "PR", label: "Paraná" }, { value: "PE", label: "Pernambuco" }, { value: "PI", label: "Piauí" }, 
  { value: "RJ", label: "Rio de Janeiro" }, { value: "RN", label: "Rio Grande do Norte" }, { value: "RS", label: "Rio Grande do Sul" }, 
  { value: "RO", label: "Rondônia" }, { value: "RR", label: "Roraima" }, { value: "SC", label: "Santa Catarina" }, 
  { value: "SP", label: "São Paulo" }, { value: "SE", label: "Sergipe" }, { value: "TO", label: "Tocantins" }
];

function SimulationForm({ loanType, setLoanType }: { loanType: LoanType; setLoanType: (type: LoanType) => void; }) {
    const { toast } = useToast();
    const [resultado, setResultado] = useState<SimulationResult | null>(null);
    const [step, setStep] = useState(1);

    const prazoMaximo = loanType === 'imovel' ? 240 : 60;

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            // Step 1
            valorBem: "",
            valorDesejado: "",
            estado: "",
            tipoCredito: "Pessoa Física",
            prazo: prazoMaximo,
            tipoGarantia: loanType,
            // Step 2
            nome: "",
            email: "",
            telefone: "",
        },
    });

    const { watch, trigger, formState: { isSubmitting } } = form;

    const watchedPrazo = watch('prazo', prazoMaximo);

    const handleLoanTypeChange = (value: string) => {
      const newLoanType = value as LoanType;
      setLoanType(newLoanType);
      const newPrazoMaximo = newLoanType === 'imovel' ? 240 : 60;
      form.reset({
        ...form.getValues(),
        tipoGarantia: newLoanType,
        prazo: newPrazoMaximo
      });
      setStep(1); // Reset to step 1 on tab change
      setResultado(null);
    };

    const formatCurrency = (value: number | string) => {
        let numericValue = 0;
        if (typeof value === 'string') {
            numericValue = parseFloat(value.replace(/\D/g, '')) / 100;
        } else if (typeof value === 'number') {
            numericValue = value;
        }
        
        if (isNaN(numericValue)) return "";

        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(numericValue);
    }
    
    const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>, field: any) => {
        const value = e.target.value.replace(/\D/g, '');
        field.onChange(value);
    }
    
    const handleNextStep = async () => {
        const fieldsToValidate: (keyof FormValues)[] = ['valorBem', 'valorDesejado', 'estado'];
        const isValid = await trigger(fieldsToValidate);
        if (isValid) {
            setStep(2);
        }
    };

    async function onSubmit(values: FormValues) {
      try {
        const numericValues = {
            ...values,
            valorImovel: values.tipoGarantia === 'imovel' ? parseFloat(values.valorBem.replace(/\D/g, '') || '0') / 100 : undefined,
            valorVeiculo: values.tipoGarantia === 'veiculo' ? parseFloat(values.valorBem.replace(/\D/g, '') || '0') / 100 : undefined,
            valorDesejado: parseFloat(values.valorDesejado.replace(/\D/g, '') || '0') / 100,
        }
        delete (numericValues as any).valorBem;

        const result = await simulateCredit(numericValues);
        if (result.success && result.data) {
          setResultado(result.data);
          toast({
            title: "Simulação Realizada!",
            description: "Confira abaixo os resultados da sua simulação.",
          });
        } else {
          throw new Error(result.error || "Erro desconhecido");
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Erro na simulação",
          description: (error as Error).message || "Não foi possível completar a simulação. Tente novamente.",
        });
      }
    }
    
    const resetForm = () => {
      setResultado(null);
      form.reset({
        valorBem: "",
        valorDesejado: "",
        estado: "",
        tipoCredito: "Pessoa Física",
        prazo: prazoMaximo,
        tipoGarantia: loanType,
        nome: "",
        email: "",
        telefone: "",
      });
      setStep(1);
    }

    if (resultado) {
      return (
        <Card className="w-full max-w-md shadow-2xl">
          <CardHeader>
            <CardTitle>Resultado da Simulação</CardTitle>
            <CardDescription>Valores aproximados com base nos dados fornecidos.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm text-muted-foreground">Primeira parcela</p>
              <p className="text-3xl font-bold text-primary">R$ {resultado.parcelaInicial}</p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm text-muted-foreground">Última parcela</p>
              <p className="text-3xl font-bold text-primary">R$ {resultado.parcelaFinal}</p>
            </div>
            <p className="text-sm text-muted-foreground">Taxa de juros: {resultado.taxaJuros}</p>
            <Button size="lg" className="w-full" onClick={resetForm}>
              Fazer Nova Simulação
            </Button>
          </CardContent>
        </Card>
      )
    }

    return (
        <Card className="w-full max-w-md shadow-2xl">
            <CardContent className="p-0">
              <Tabs value={loanType} onValueChange={handleLoanTypeChange} className="w-full">
                 <TabsList className="grid w-full grid-cols-2 h-16 rounded-t-lg rounded-b-none">
                  <TabsTrigger value="imovel" className="h-full text-lg gap-2" disabled={step === 2}>
                    <Home /> Imóvel
                  </TabsTrigger>
                  <TabsTrigger value="veiculo" className="h-full text-lg gap-2" disabled={step === 2}>
                    <Car /> Veículo
                  </TabsTrigger>
                </TabsList>
                <div className="p-6">
                  <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                          {step === 1 && (
                            <>
                              <FormField control={form.control} name="valorBem" render={({ field }) => (
                                  <FormItem>
                                      <FormLabel>{loanType === 'imovel' ? 'Valor do imóvel' : 'Valor do veículo'}</FormLabel>
                                      <FormControl>
                                          <Input placeholder="R$ 0,00" {...field} onChange={(e) => handleCurrencyChange(e, field)} value={formatCurrency(field.value)} />
                                      </FormControl>
                                      <FormMessage />
                                  </FormItem>
                              )}/>
                              <FormField control={form.control} name="valorDesejado" render={({ field }) => (
                                  <FormItem>
                                      <FormLabel>Valor desejado</FormLabel>
                                      <FormControl>
                                          <Input placeholder="R$ 0,00" {...field} onChange={(e) => handleCurrencyChange(e, field)} value={formatCurrency(field.value)}/>
                                      </FormControl>
                                      <FormMessage />
                                  </FormItem>
                              )}/>
                               <FormField control={form.control} name="estado" render={({ field }) => (
                                  <FormItem>
                                      <FormLabel>Estado</FormLabel>
                                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                                          <FormControl>
                                              <SelectTrigger>
                                                  <SelectValue placeholder="Selecione o estado" />
                                              </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                              {states.map(s => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
                                          </SelectContent>
                                      </Select>
                                      <FormMessage />
                                  </FormItem>
                              )}/>
                              <FormField control={form.control} name="tipoCredito" render={({ field }) => (
                                   <FormItem>
                                      <FormLabel>Crédito para:</FormLabel>
                                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                                          <FormControl>
                                              <SelectTrigger>
                                                  <SelectValue />
                                              </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                              <SelectItem value="Pessoa Física">Pessoa Física</SelectItem>
                                              <SelectItem value="Pessoa Jurídica">Pessoa Jurídica</SelectItem>
                                          </SelectContent>
                                      </Select>
                                      <FormMessage />
                                  </FormItem>
                              )}/>
                              <FormField control={form.control} name="prazo" render={({ field }) => (
                                 <FormItem>
                                      <FormLabel>Prazo: {field.value} meses</FormLabel>
                                      <FormControl>
                                          <Slider
                                              min={12}
                                              max={prazoMaximo}
                                              step={12}
                                              value={[field.value]}
                                              onValueChange={(vals) => field.onChange(vals[0])}
                                          />
                                      </FormControl>
                                 </FormItem>
                              )}/>
                              <Button type="button" size="lg" className="w-full h-12 text-lg" onClick={handleNextStep}>
                                  Avançar
                              </Button>
                            </>
                          )}

                          {step === 2 && (
                            <>
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
                                            <Input placeholder="seuemail@exemplo.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                <FormField control={form.control} name="telefone" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Telefone / WhatsApp</FormLabel>
                                        <FormControl>
                                            <Input placeholder="(00) 90000-0000" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                <div className="flex gap-4">
                                  <Button type="button" variant="outline" className="w-1/3" onClick={() => setStep(1)}>
                                      <ArrowLeft className="mr-2" /> Voltar
                                  </Button>
                                  <Button type="submit" size="lg" className="w-2/3 h-12 text-lg" disabled={isSubmitting}>
                                      {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Simular agora"}
                                  </Button>
                                </div>
                            </>
                          )}
                      </form>
                  </Form>
                </div>
              </Tabs>
            </CardContent>
        </Card>
    );
}

export default function Simulation() {
    const [loanType, setLoanType] = useState<LoanType>('imovel');
    
    const bgImage = loanType === 'imovel' ? '/img/slide1-carrossel-home.jpg' : '/img/slide2-carrossel-home.jpg';
    const dataAiHint = loanType === 'imovel' ? 'modern house' : 'new car';


    return (
    <section id="contact" className="relative w-full overflow-hidden">
        <div className="absolute inset-0 z-[-1]">
            <Image
                key={loanType}
                src={bgImage}
                alt={`Background para simulação de ${loanType}`}
                fill
                quality={100}
                className="object-cover object-center"
                priority
                data-ai-hint={dataAiHint}
            />
            <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 py-20 md:py-32 lg:py-40">
            <div className="space-y-6 text-left">
                <h1 className="font-headline text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                    Empréstimo com garantia, <span className="text-primary">fácil e rápido.</span>
                </h1>
                <p className="max-w-[600px] text-lg text-gray-200 md:text-xl">
                    Use seu imóvel ou veículo para conseguir as melhores taxas de juros do mercado. Dinheiro na sua conta em poucos dias.
                </p>
            </div>
              
            <div className="relative w-full flex justify-center lg:justify-end">
               <SimulationForm loanType={loanType} setLoanType={setLoanType} />
            </div>
        </div>
    </section>
  )
}

    

    