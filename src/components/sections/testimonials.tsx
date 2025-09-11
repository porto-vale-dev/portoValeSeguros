import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Sarah J.',
    role: 'Dona de Pequena Empresa',
    text: 'O consultor de IA da Porto Vale encontrou um empréstimo para mim que eu nem sabia que me qualificava. Foi um divisor de águas para a expansão do meu negócio!',
  },
  {
    id: 'testimonial-2',
    name: 'Michael B.',
    role: 'Comprador de Imóvel',
    text: 'As opções de financiamento eram claras e a calculadora nos ajudou a fazer o orçamento perfeitamente. Estamos em nossa nova casa graças à Porto Vale.',
  },
  {
    id: 'testimonial-3',
    name: 'Emily R.',
    role: 'Estudante',
    text: 'Consolidar minha dívida estudantil foi muito fácil. O processo foi simples e a equipe de suporte ao cliente foi incrivelmente prestativa.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O que nossos clientes dizem</h2>
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
                const testimonialImage = PlaceHolderImages.find((img) => img.id === testimonial.id);
                return (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4">
                      <Card className="h-full">
                        <CardContent className="flex h-full flex-col justify-between p-6">
                          <p className="mb-4 text-lg italic text-muted-foreground">"{testimonial.text}"</p>
                          <div className="flex items-center gap-4">
                            {testimonialImage && (
                              <Avatar>
                                <AvatarImage
                                  src={testimonialImage.imageUrl}
                                  alt={testimonialImage.description}
                                  data-ai-hint={testimonialImage.imageHint}
                                />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                            )}
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
      </div>
    </section>
  );
}
