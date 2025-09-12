"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Car, Home, Landmark } from 'lucide-react'

function SimulationForm({ type }: { type: 'imovel' | 'veiculo' | 'financiamento' }) {
    const [amount, setAmount] = useState(type === 'imovel' ? 100000 : 30000);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    }
    
    let title = '';
    let description = '';
    let sliderMin = 0;
    let sliderMax = 0;
    let sliderStep = 100;
    let buttonText = 'Simular empréstimo';

    switch (type) {
        case 'imovel':
            title = 'Empréstimo com Garantia de Imóvel';
            description = 'Use seu imóvel para conseguir as melhores taxas.';
            sliderMin = 50000;
            sliderMax = 3000000;
            sliderStep = 10000;
            break;
        case 'veiculo':
            title = 'Empréstimo com Garantia de Veículo';
            description = 'Use seu carro para conseguir crédito com taxas mais baixas.';
            sliderMin = 5000;
            sliderMax = 150000;
            sliderStep = 1000;
            break;
        case 'financiamento':
             title = 'Financiamento';
             description = 'Financie seu imóvel ou veículo com as melhores condições.';
            sliderMin = 10000;
            sliderMax = 1000000;
            sliderStep = 5000;
            buttonText = 'Simular financiamento';
            break;
    }


    return (
        <Card className="w-full max-w-md shadow-2xl">
            <CardContent className="p-8 space-y-6">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-muted-foreground">{description}</p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="amount">Quanto você precisa?</Label>
                        <Input 
                            id="amount" 
                            className="text-2xl font-bold h-14 text-center"
                            value={formatCurrency(amount)}
                            onChange={(e) => {
                                const value = parseInt(e.target.value.replace(/\D/g, '')) || 0;
                                setAmount(value);
                            }}
                        />
                    </div>
                    <Slider
                        value={[amount]}
                        min={sliderMin}
                        max={sliderMax}
                        step={sliderStep}
                        onValueChange={(value) => setAmount(value[0])}
                    />
                </div>
                {type !== 'financiamento' && (
                    <Button size="lg" className="w-full h-12 text-lg">
                        {buttonText}
                    </Button>
                )}
            </CardContent>
        </Card>
    );
}


export default function Hero() {
    return (
    <section className="relative w-full bg-muted/20 py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-center lg:text-left">
                <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
                    Empréstimo com garantia, <span className="text-primary">fácil e rápido.</span>
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                    Use seu imóvel ou veículo para conseguir as melhores taxas de juros do mercado. Dinheiro na sua conta em poucos dias.
                </p>
                <div className="flex gap-4 justify-center lg:justify-start">
                    <Button size="lg" asChild>
                        <a href="#contact">Simule agora</a>
                    </Button>
                     <Button size="lg" variant="outline" asChild>
                        <a href="#about">Saiba mais</a>
                    </Button>
                </div>
            </div>
            
             <div className="relative">
                 <Tabs defaultValue="imovel" className="w-full max-w-md mx-auto">
                    <TabsList className="grid w-full grid-cols-3 h-16">
                        <TabsTrigger value="imovel" className="flex flex-col gap-1 h-full">
                            <Home className="w-6 h-6 text-[#009de1]" />
                            <span className="text-xs">Imóvel</span>
                        </TabsTrigger>
                        <TabsTrigger value="veiculo" className="flex flex-col gap-1 h-full">
                            <Car className="w-6 h-6 text-[#009de1]" />
                            <span className="text-xs">Veículo</span>
                        </TabsTrigger>
                        <TabsTrigger value="financiamento" className="flex flex-col gap-1 h-full">
                            <Landmark className="w-6 h-6 text-[#009de1]" />
                             <span className="text-xs">Financiamento</span>
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="imovel" className="mt-4">
                        <SimulationForm type="imovel" />
                    </TabsContent>
                    <TabsContent value="veiculo" className="mt-4">
                        <SimulationForm type="veiculo" />
                    </TabsContent>
                     <TabsContent value="financiamento" className="mt-4">
                        <SimulationForm type="financiamento" />
                    </TabsContent>
                </Tabs>
             </div>
        </div>
    </section>
  )
}
