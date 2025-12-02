import Link from 'next/link';
import Image from 'next/image';

export default function QuoteFormSection() {
  return (
    <section className="w-full bg-[#afcfde] rounded-b-2xl">
      <div className="flex flex-col justify-center items-center text-center py-8 md:py-12 lg:py-16 px-4">
        <Image
            src="https://storage.googleapis.com/consorcioportovale/imagensSitePV/Porto_verde_agua.avif"
            alt="Porto"
            width={180}
            height={45}
            className="mb-6"
        />
            <p className="text-xl text-gray-800">
            Não sabe como funciona os Seguros da Porto?
        </p>
        <Link href="#" className="transition-colors hover:text-primary/90">
            <span className="text-sm font-bold text-primary underline">
                Clique aqui e entenda tudo sobre o melhor Seguro do Brasil.
            </span>
        </Link>
      </div>
    </section>
  );
}