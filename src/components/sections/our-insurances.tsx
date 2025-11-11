import { productsData } from '@/lib/products-data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function OurInsurances() {
  const insuranceDetails = {
    auto: 'Proteção completa com assistência 24h para o seu veículo.',
    residencial: 'Segurança para o seu lar com cobertura contra imprevistos.',
    vida: 'Tranquilidade e proteção financeira para quem você ama.',
    empresarial: 'Proteja seu negócio com coberturas sob medida e personalizadas.',
  };

  return (
    <section id="our-insurances" className="w-full bg-white py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Nossos Seguros</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Encontre a proteção ideal para cada momento da sua vida e para o seu patrimônio.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {productsData.map((product) => (
            <Card key={product.id} className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <product.icon className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>
                  {insuranceDetails[product.id as keyof typeof insuranceDetails]}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
