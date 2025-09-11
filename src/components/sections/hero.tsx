import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative flex h-[calc(100vh-4rem)] min-h-[500px] w-full items-center justify-center bg-cover bg-center bg-no-repeat py-12 md:py-24 lg:py-32">
       <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm"></div>
       <div className="container relative mx-auto px-4 text-center md:px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}>
            Soluções de Crédito Inteligentes para o seu Futuro
          </h1>
          <p className="text-lg text-primary-foreground/90 md:text-xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
            Encontre o produto de crédito perfeito com nossas recomendações baseadas em IA. Desbloqueie seu potencial financeiro com a Porto Vale.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg">
              <Link href="#recommendations">Receba sua Recomendação</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
