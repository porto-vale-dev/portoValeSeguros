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
  return (
    <section id="about" className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-3">
               <span className="text-sm font-semibold uppercase tracking-wider text-primary">Sobre Nós</span>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                A Porto Vale
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Com vasta experiência no mercado financeiro, a Porto Vale se dedica a transformar seus planos em realidade. Somos especialistas em encontrar as melhores soluções de crédito para você.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nossa equipe de especialistas está pronta para oferecer um atendimento personalizado e encontrar a opção ideal que se encaixa perfeitamente em seu orçamento e em seus objetivos de vida.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-8">
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
      </div>
    </section>
  );
}
