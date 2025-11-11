
"use client";

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { Car, Home, HeartHandshake, Building } from 'lucide-react';

type InsuranceType = 'auto' | 'residencial' | 'vida' | 'empresarial';

const insuranceOptions = {
  auto: { label: 'Auto', min: 20000, max: 200000, step: 5000, baseRate: 0.05 },
  residencial: { label: 'Residencial', min: 50000, max: 1000000, step: 10000, baseRate: 0.0015 },
  vida: { label: 'Vida', min: 100000, max: 2000000, step: 50000, baseRate: 0.001 },
  empresarial: { label: 'Empresarial', min: 200000, max: 5000000, step: 100000, baseRate: 0.002 },
};

export default function InsuranceSimulator() {
  const [selectedInsurance, setSelectedInsurance] = useState<InsuranceType>('auto');
  const [coverageValue, setCoverageValue] = useState<number>(insuranceOptions.auto.min);

  const currentOption = insuranceOptions[selectedInsurance];

  const monthlyPayment = useMemo(() => {
    const valueFactor = coverageValue / currentOption.max;
    const estimated = (currentOption.baseRate * coverageValue * (1 + valueFactor)) / 12;
    return Math.max(estimated, currentOption.baseRate * currentOption.min / 12 * 0.8);
  }, [coverageValue, currentOption]);

  const handleSliderChange = (value: number[]) => {
    setCoverageValue(value[0]);
  };
  
  const handleTypeChange = (type: InsuranceType) => {
    setSelectedInsurance(type);
    setCoverageValue(insuranceOptions[type].min);
  };
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-2xl bg-white/95 backdrop-blur-sm ring-1 ring-white/10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800 text-center">
          Faça sua cotação agora mesmo
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {(Object.keys(insuranceOptions) as InsuranceType[]).map((key) => (
             <Button 
                key={key} 
                variant="outline"
                onClick={() => handleTypeChange(key)}
                className={cn(
                  "flex-col h-16 transition-all duration-200",
                  selectedInsurance === key ? 'bg-primary text-primary-foreground border-primary' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                )}
             >
                {key === 'auto' && <Car className="w-5 h-5 mb-1"/>}
                {key === 'residencial' && <Home className="w-5 h-5 mb-1"/>}
                {key === 'vida' && <HeartHandshake className="w-5 h-5 mb-1"/>}
                {key === 'empresarial' && <Building className="w-5 h-5 mb-1"/>}
               <span className="text-xs">{insuranceOptions[key].label}</span>
             </Button>
          ))}
        </div>
        
        <div className="space-y-4 pt-4">
          <label htmlFor="coverage-slider" className="block text-sm font-medium text-gray-600">
            Escolha o valor da cobertura desejada:
          </label>
          <Slider
            id="coverage-slider"
            min={currentOption.min}
            max={currentOption.max}
            step={currentOption.step}
            value={[coverageValue]}
            onValueChange={handleSliderChange}
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>{formatCurrency(currentOption.min)}</span>
            <span>{formatCurrency(currentOption.max)}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center bg-gray-50 p-4 rounded-lg">
          <div>
            <p className="text-sm text-gray-500">Cobertura</p>
            <p className="text-2xl font-bold text-gray-800">{formatCurrency(coverageValue)}</p>
          </div>
          <div className="border-l">
            <p className="text-sm text-gray-500">Mensalidade estimada</p>
            <p className="text-2xl font-bold text-gray-800">{formatCurrency(monthlyPayment)}</p>
          </div>
        </div>

        <Button size="lg" className="w-full h-12 text-lg font-bold bg-accent hover:bg-accent/90 text-accent-foreground">
          COTAR AGORA
        </Button>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-gray-500 text-center w-full">
            *Consulte condições e coberturas disponíveis.
        </p>
      </CardFooter>
    </Card>
  );
}
