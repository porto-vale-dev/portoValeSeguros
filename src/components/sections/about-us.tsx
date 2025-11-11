
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section id="about-us" className="w-full py-12 md:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Sobre Nós
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Porto Vale</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Com vasta experiência no mercado de seguros, a Porto Vale se dedica a proteger o que é mais importante para você. Somos especialistas em encontrar as melhores soluções de seguro para o seu dia a dia.
            </p>
             <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nossa equipe de especialistas está pronta para oferecer um atendimento personalizado e encontrar a cobertura ideal que se encaixa perfeitamente em suas necessidades e orçamento.
            </p>
          </div>
          <Image
            src="/img/porto-vale-team.jpg"
            alt="Nossa Equipe"
            width={600}
            height={400}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </div>
    </section>
  );
}
