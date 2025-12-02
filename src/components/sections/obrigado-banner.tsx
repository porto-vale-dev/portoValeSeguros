
import VideoPlayer from '../video-player';

export default function HeroBanner() {
  return (
    <section id="home" className="w-full">
      <div className="relative w-full min-h-[300px] md:min-h-[500px] overflow-hidden rounded-t-2xl shadow-2xl">
        <VideoPlayer
          src="https://storage.googleapis.com/consorcioportovale/imagensSitePV/check_animado_com_fundo_animado (1).mp4"
          poster="https://storage.googleapis.com/consorcioportovale/imagensSitePV/imagem-porto-vale.avif"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/30 z-10" />

        <div className="relative z-20 flex flex-col justify-center items-center h-full text-white text-center p-8 min-h-[300px] md:min-h-[500px]">
          <div className="mt-48 md:mt-64">
            <p className="text-7xl font-bold tracking-tighter text-white/90 my-4 leading-none">Parabéns!</p>
            <p className="text-[25px] text-white">
              Você acabou de dar um passo inteligente <br /> para proteger aquilo que ama.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
