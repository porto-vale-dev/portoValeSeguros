"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Car, Home } from 'lucide-react'

// Image paths are now direct URL paths from the `public` directory.
const imovelBgPath = '/img/slide2-carrossel-home.jpg';
const veiculoBgPath = '/img/slide1-carrossel-home.jpg';


function SimulationForm({ type }: { type: 'imovel' | 'veiculo' }) {
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
                
                <Button size="lg" className="w-full h-12 text-lg">
                    {buttonText}
                </Button>
            </CardContent>
        </Card>
    );
}


export default function Simulation() {
    const [activeTab, setActiveTab] = useState('imovel');

    return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 z-[-1]">
            <Image
                src={imovelBgPath}
                alt="Background para simulação de imóvel"
                fill
                quality={100}
                className={`object-cover transition-opacity duration-500 ${activeTab === 'imovel' ? 'opacity-100' : 'opacity-0'}`}
                data-ai-hint="modern house"
                priority
            />
             <Image
                src={veiculoBgPath}
                alt="Background para simulação de veículo"
                fill
                quality={100}
                className={`object-cover transition-opacity duration-500 ${activeTab === 'veiculo' ? 'opacity-100' : 'opacity-0'}`}
                data-ai-hint="car road"
                priority
            />
            <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="lg:col-start-2 flex flex-col items-center lg:items-start">
              <div className="space-y-6 text-center lg:text-left">
                  <h1 className="font-headline text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                      Empréstimo com garantia, <span className="text-primary">fácil e rápido.</span>
                  </h1>
                  <p className="text-lg text-gray-200 md:text-xl">
                      Use seu imóvel ou veículo para conseguir as melhores taxas de juros do mercado. Dinheiro na sua conta em poucos dias.
                  </p>
              </div>
              
               <div className="relative mt-8 w-full">
                   <Tabs defaultValue="imovel" className="w-full max-w-md mx-auto" onValueChange={setActiveTab}>
                      <TabsList className="grid w-full grid-cols-2 h-16">
                          <TabsTrigger value="imovel" className="flex flex-col gap-1 h-full">
                              <Home className="w-6 h-6 text-[#009de1]" />
                              <span className="text-xs">Imóvel</span>
                          </TabsTrigger>
                          <TabsTrigger value="veiculo" className="flex flex-col gap-1 h-full">
                              <Car className="w-6 h-6 text-[#009de1]" />
                              <span className="text-xs">Veículo</span>
                          </TabsTrigger>
                      </TabsList>
                      <TabsContent value="imovel" className="mt-4">
                          <SimulationForm type="imovel" />
                      </TabsContent>
                      <TabsContent value="veiculo" className="mt-4">
                          <SimulationForm type="veiculo" />
                      </TabsContent>
                  </Tabs>
               </div>
            </div>
        </div>
    </section>
  )
}
