import { FileText, Clock, CircleDollarSign, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: 'Simule e peça',
    description: 'Preencha o formulário e siga o passo a passo. É rápido e 100% online.',
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: 'Aguarde a análise',
    description: 'Analisamos seu perfil para encontrar a melhor oferta para você.',
  },
  {
    icon: <CircleDollarSign className="h-10 w-10 text-primary" />,
    title: 'Dinheiro na conta',
    description: 'Após a aprovação, o dinheiro cai na sua conta em até 24 horas.',
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-secondary py-12 md:py-24 lg:py-32">
      <div className="container mx-auto flex flex-col items-center px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Online rápido e descomplicado
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Veja como é simples conseguir seu empréstimo com a Porto Vale.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                {step.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="absolute top-1/2 -right-6 hidden h-8 w-8 -translate-y-1/2 text-primary/30 md:block" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="#contact">Simule agora</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
