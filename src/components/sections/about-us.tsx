import Image from 'next/image';

export default function AboutUs() {
  return (
    <section id="about" className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
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
          <div className="relative mx-auto h-full min-h-[300px] w-full max-w-lg lg:max-w-none lg:min-h-full">
            <Image
              src="/img/porto vale.png"
              fill
              alt="Equipe da Porto Vale"
              className="overflow-hidden rounded-xl object-cover"
              data-ai-hint="office meeting"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
