
import { productsData } from '@/lib/products-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function OurInsurances() {
  return (
    <section id="our-insurances" className="w-full py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Nossos Seguros</h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Encontre a proteção ideal para cada momento da sua vida e para o seu patrimônio.
            </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productsData.map((product) => {
            const Icon = product.icon;
            return (
              <Card key={product.id} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader className="flex-row items-center gap-4 bg-muted/50 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <CardDescription>{product.description}</CardDescription>
                </CardContent>
                <div className="border-t p-4">
                  <Button asChild variant="link" className="w-full justify-start p-0">
                    <Link href="#home">
                      Saber Mais
                    </Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
