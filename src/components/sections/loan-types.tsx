import { Car, Home, HeartHandshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const insuranceProducts = [
  {
    icon: <Car className="h-8 w-8 text-primary" />,
    title: 'Seguro Auto',
    description: 'Proteção completa para seu carro com guincho 24h, carro reserva e muito mais.',
    link: '#contact'
  },
  {
    icon: <Home className="h-8 w-8 text-primary" />,
    title: 'Seguro Residencial',
    description: 'Sua casa protegida contra imprevistos, com assistência para reparos e emergências.',
    link: '#contact'
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: 'Seguro de Vida',
    description: 'Garanta a tranquilidade da sua família com coberturas para diversas situações.',
    link: '#contact'
  },
];

export default function LoanTypes() {
  return (
    <section className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nossos principais seguros
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            As melhores condições para você e sua família ficarem seguros.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {insuranceProducts.map((product) => (
            <Card key={product.title} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                {product.icon}
                <CardTitle className="text-2xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between">
                <p className="text-muted-foreground">{product.description}</p>
                <Button asChild className="mt-6 w-full">
                  <Link href={product.link}>Cote agora</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
