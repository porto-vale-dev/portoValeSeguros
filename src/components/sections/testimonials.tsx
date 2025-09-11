import { PlaceHolderImages } from '@/lib/placeholder-images'
import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

const testimonials = [
  {
    name: 'Sarah J.',
    role: 'Dona de Pequena Empresa',
    quote: "O consultor de IA da Porto Vale encontrou um empréstimo para mim que eu nem sabia que me qualificava. Foi um divisor de águas para a expansão do meu negócio!",
    avatarId: 'testimonial-1',
  },
  {
    name: 'Michael B.',
    role: 'Comprador de Imóvel',
    quote: "As opções de financiamento eram claras e a calculadora nos ajudou a fazer o orçamento perfeitamente. Estamos em nossa nova casa graças à Porto Vale.",
    avatarId: 'testimonial-2',
  },
  {
    name: 'Emily R.',
    role: 'Estudante',
    quote: 'Consolidar minha dívida estudantil foi muito fácil. O processo foi simples e a equipe de suporte ao cliente foi incrivelmente prestativa.',
    avatarId: 'testimonial-3',
  },
]

export default function Testimonials() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Veja o que nossos clientes satisfeitos têm a dizer sobre sua experiência com a Porto Vale.
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mx-auto mt-12 w-full max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const avatar = getImage(testimonial.avatarId);
              return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center space-y-4">
                      <p className="text-lg font-medium">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-3 pt-4">
                        <Avatar>
                          {avatar && (
                            <AvatarImage 
                              src={avatar.imageUrl} 
                              alt={testimonial.name}
                              data-ai-hint={avatar.imageHint}
                            />
                          )}
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
            )})}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
