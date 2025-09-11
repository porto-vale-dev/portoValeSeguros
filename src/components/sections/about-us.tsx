import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Briefcase, Gem, Target } from 'lucide-react';

const values = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Missão',
    description: 'Nossa missão é realizar sonhos e facilitar conquistas, oferecendo soluções de crédito acessíveis e transparentes que impulsionam o futuro financeiro de nossos clientes.',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Visão',
    description: 'Ser a principal referência em assessoria financeira, reconhecida pela excelência no atendimento e pela inovação em nossos produtos e serviços.',
  },
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: 'Valores',
    description: 'Atuamos com ética, transparência, segurança, inovação e um compromisso inabalável com a satisfação e o sucesso de nossos clientes e parceiros.',
  },
];

export default function AboutUs() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-image');

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Sobre a CreditWave
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Com vasta experiência no mercado financeiro, a CreditWave se dedica a transformar seus planos em realidade. Somos especialistas em encontrar as melhores soluções de crédito para você.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nossa equipe de especialistas está pronta para oferecer um atendimento personalizado e encontrar a opção ideal que se encaixa perfeitamente em seu orçamento e em seus objetivos de vida.
              </p>
            </div>
            {aboutImage && (
              <div className="w-full lg:hidden">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  data-ai-hint={aboutImage.imageHint}
                  width={600}
                  height={400}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
            )}
            <div className="grid gap-6 sm:grid-cols-1">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-4">
                  {value.icon}
                  <div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {aboutImage && (
            <div className="hidden lg:flex items-center justify-center">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
