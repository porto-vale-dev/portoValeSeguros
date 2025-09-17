import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '../ui/button';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Sarah J.',
    role: 'Dona de Pequena Empresa',
    text: 'A assessoria da Porto Vale foi um divisor de águas para a expansão do meu negócio! Encontraram a melhor solução de crédito para mim.',
    imageUrl: 'https://picsum.photos/seed/t1/100/100',
    imageHint: 'person portrait',
  },
  {
    id: 'testimonial-2',
    name: 'Michael B.',
    role: 'Comprador de Imóvel',
    text: 'As opções de financiamento eram claras e o processo foi rápido. Estamos em nossa nova casa graças à Porto Vale.',
    imageUrl: 'https://picsum.photos/seed/t2/100/100',
    imageHint: 'person portrait',
  },
  {
    id: 'testimonial-3',
    name: 'Emily R.',
    role: 'Autônoma',
    text: 'Consegui o capital de giro que precisava com ótimas condições. A equipe de suporte foi incrivelmente prestativa e atenciosa.',
    imageUrl: 'https://picsum.photos/seed/t3/100/100',
    imageHint: 'person portrait',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-muted/20 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O que nossos clientes dizem</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Veja o que nossos clientes satisfeitos têm a dizer sobre sua experiência com a Porto Vale.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => {
                return (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4">
                      <Card className="h-full bg-background">
                        <CardContent className="flex h-full flex-col justify-between p-6">
                          <p className="mb-4 text-lg italic text-muted-foreground">"{testimonial.text}"</p>
                          <div className="flex items-center gap-4">
                              <Avatar>
                                <AvatarImage
                                  src={testimonial.imageUrl}
                                  alt={`Avatar de ${testimonial.name}`}
                                  data-ai-hint={testimonial.imageHint}
                                />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                            <div>
                              <p className="font-semibold">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg">
                <a href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TEkzLKk0KTAxYLRSNaiwNElONkk0NDUxSrQwSLJMszKosEgxtDCzTDE0SzY2N0pNNPUSLcgvKslXKEvMSVVIzs8rzi9KzswvBgBMlBdt&q=porto+vale+consorcios&rlz=1C1GCEU_pt-BRBR1162BR1163&oq=porto+vale&gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYgAQYjgUyDggAEEUYJxg5GIAEGIoFMhAIARAuGK8BGMcBGIAEGI4FMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMjY5NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x94cc4a1542a80b9f:0x8d1869d16c372ea5,1,,,," target="_blank" rel="noopener noreferrer">
                    Deixe sua Avaliação no Google
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
