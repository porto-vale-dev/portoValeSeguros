import { Car, Home } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const loanProducts = [
  {
    icon: <Home className="h-8 w-8 text-primary" />,
    title: 'Garantia de Imóvel',
    rate: 'Taxas a partir de 0,99% a.m.',
    term: 'Até 240 meses para pagar',
    amount: 'Crédito de R$ 50 mil a R$ 3 milhões',
    link: '#contact'
  },
  {
    icon: <Car className="h-8 w-8 text-primary" />,
    title: 'Garantia de Veículo',
    rate: 'Taxas a partir de 1,49% a.m.',
    term: 'Até 60 meses para pagar',
    amount: 'Crédito de R$ 5 mil a R$ 150 mil',
    link: '#contact'
  },
];

export default function LoanTypes() {
  return (
    <section className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Empréstimo com garantia de veículo e imóvel
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            As melhores condições para você usar seu bem como garantia e conseguir o crédito que precisa.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {loanProducts.map((product) => (
            <Card key={product.title} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                {product.icon}
                <CardTitle className="text-2xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between">
                <ul className="space-y-2 text-muted-foreground">
                  <li>{product.rate}</li>
                  <li>{product.term}</li>
                  <li>{product.amount}</li>
                </ul>
                <Button asChild className="mt-6 w-full">
                  <Link href={product.link}>Simule agora</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
