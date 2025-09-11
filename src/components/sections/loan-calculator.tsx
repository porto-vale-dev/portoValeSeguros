"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

export default function LoanCalculator() {
  const [amount, setAmount] = useState(10000);
  const [interest, setInterest] = useState(5);
  const [term, setTerm] = useState(36);

  const monthlyPayment = useMemo(() => {
    if (amount <= 0 || interest <= 0 || term <= 0) return 0;

    const monthlyInterestRate = interest / 100 / 12;
    const numberOfPayments = term;

    if (monthlyInterestRate === 0) return amount / numberOfPayments;
    
    const payment =
      amount *
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    return payment;
  }, [amount, interest, term]);

  const totalPayment = useMemo(() => monthlyPayment * term, [monthlyPayment, term]);
  const totalInterest = useMemo(() => totalPayment - amount, [totalPayment, amount]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };
  
  return (
    <section id="calculator" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Calculadora de Empréstimos</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Estime suas parcelas mensais para empréstimos e financiamentos. Ajuste os valores para ver como eles afetam seus pagamentos.
            </p>
          </div>
        </div>
        <Card className="mx-auto mt-12 max-w-4xl">
          <CardContent className="p-6 grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <Label htmlFor="amount" className="flex justify-between text-base">
                  <span>Valor do Empréstimo</span>
                  <span className="font-bold text-primary">{formatCurrency(amount)}</span>
                </Label>
                <Slider
                  id="amount"
                  min={1000}
                  max={100000}
                  step={100}
                  value={[amount]}
                  onValueChange={(value) => setAmount(value[0])}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="interest" className="flex justify-between text-base">
                  <span>Taxa de Juros (%)</span>
                   <span className="font-bold text-primary">{interest.toFixed(2)}%</span>
                </Label>
                 <Slider
                  id="interest"
                  min={1}
                  max={25}
                  step={0.1}
                  value={[interest]}
                  onValueChange={(value) => setInterest(value[0])}
                  className="mt-2"
                />
              </div>
              <div>
                 <Label htmlFor="term" className="flex justify-between text-base">
                  <span>Prazo do Empréstimo (Meses)</span>
                   <span className="font-bold text-primary">{term} meses</span>
                </Label>
                <Slider
                  id="term"
                  min={12}
                  max={84}
                  step={1}
                  value={[term]}
                  onValueChange={(value) => setTerm(value[0])}
                  className="mt-2"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-background p-6 space-y-4">
              <div className="text-center">
                <p className="text-lg text-muted-foreground">Parcela Mensal</p>
                <p className="text-4xl font-bold text-primary">
                  {formatCurrency(monthlyPayment)}
                </p>
              </div>
              <div className="w-full text-sm space-y-2 text-center">
                  <div className="flex justify-between">
                      <span className="text-muted-foreground">Pagamento Total:</span>
                      <span>{formatCurrency(totalPayment)}</span>
                  </div>
                   <div className="flex justify-between">
                      <span className="text-muted-foreground">Juros Totais:</span>
                      <span>{formatCurrency(totalInterest)}</span>
                  </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
