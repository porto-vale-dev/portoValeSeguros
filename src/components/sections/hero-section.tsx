
import Image from 'next/image';
import { Home, Car, Diamond } from 'lucide-react';
import InsuranceSimulator from './insurance-simulator';

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-stretch bg-gradient-to-br from-gray-900 to-[#001f3f] rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Left Column - Banner */}
          <div className="flex flex-col justify-center space-y-6 text-white relative z-10">
            <Image 
              src="/img/black-porto.png"
              alt="Black Porto"
              width={200}
              height={200}
              className="self-start mb-4"
            />
            <div className="flex items-center gap-4 text-blue-300">
              <Image src="/img/porto-icon.svg" alt="Porto Icon" width={28} height={28} />
              <Home className="w-7 h-7" />
              <Car className="w-7 h-7" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-blue-400">
              PROTEJA O QUE IMPORTA
            </h1>
            <p className="max-w-[500px] text-lg text-gray-200 md:text-xl">
              Planos de Seguro Auto, Residencial, Vida e Empresarial com benefícios exclusivos Porto.
            </p>
          </div>

          {/* Right Column - Simulator */}
          <div className="relative z-10">
            <InsuranceSimulator />
          </div>

          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/img/background-texture.png')] bg-repeat opacity-5 transform-gpu" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl opacity-50" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-500/20 rounded-full filter blur-3xl opacity-40" />

        </div>
      </div>
    </section>
  );
}
