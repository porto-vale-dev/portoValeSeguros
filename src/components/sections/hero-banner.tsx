
import Image from 'next/image';
import { Product } from '@/lib/products-data';
import QuoteForm from './quote-form';

interface HeroBannerProps {
  product: Product;
}

export default function HeroBanner({ product }: HeroBannerProps) {
  return (
    <section id="home" className="w-full py-8">
       <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-stretch bg-gradient-to-br from-gray-900 to-[#001f3f] rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -bottom-[70px] -left-[70px] w-3/4 h-3/4 bg-[url('https://storage.googleapis.com/consorcioportovale/imagensSitePV/Logo_PortoVale_Minimalista_verde.avif')] bg-contain bg-left bg-no-repeat opacity-20 z-0 pointer-events-none" />
          
          <div className="flex flex-col justify-center space-y-6 text-white relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-blue-400 leading-snug">
              {product.bannerTitle}
            </h1>
            <p className="max-w-[500px] text-lg text-gray-200 md:text-xl">
              {product.bannerDescription}
            </p>
          </div>

          <div className="relative z-10">
            <QuoteForm product={product} />
          </div>

          <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/img/background-texture.png')] bg-repeat opacity-5 transform-gpu" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl opacity-50" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-500/20 rounded-full filter blur-3xl opacity-40" />

        </div>
      </div>
    </section>
  );
}
