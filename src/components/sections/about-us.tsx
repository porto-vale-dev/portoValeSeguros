
import VideoPlayer from '@/components/video-player';

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
            Na <b>Porto Vale Seguros</b>, oferecemos proteção completa para pessoas, famílias e empresas.
            </p>
             <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
Amparados pela solidez do Grupo Porto Vale, que há mais de <b>20 anos atua ao lado da Porto Seguro</b> como líder nacional em consórcios, ampliamos nossa experiência para o setor de seguros, garantindo credibilidade, inovação e confiança.
            </p>
          </div>
          <VideoPlayer
            src="https://storage.googleapis.com/consorcioportovale/imagensSitePV/video%20drone%20fachada.mp4"
            poster="https://storage.googleapis.com/consorcioportovale/imagensSitePV/imagem-porto-vale.avif"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </div>
    </section>
  );
}
