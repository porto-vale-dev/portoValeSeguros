import { FileText, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: 'Preencha e cote',
    description: 'Preencha o formulário com seus dados. É rápido, fácil e 100% online.',
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: 'Aguarde nosso contato',
    description: 'Analisamos seu perfil para encontrar a melhor cobertura e oferta para você.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Fique protegido',
    description: 'Após a aprovação e contratação, você e seu patrimônio já estão protegidos.',
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-secondary py-12 md:py-24 lg:py-32">
      <div className="container mx-auto flex flex-col items-center px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Online, rápido e descomplicado
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Veja como é simples cotar seu seguro com a Porto.
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
        <div className="mt-16 text-center">
            <Button asChild size="lg">
                <Link href="#contact">Cote agora</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
