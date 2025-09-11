import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const reviews = [
  {
    name: 'João P.',
    rating: 5,
    comment: 'Atendimento excepcional! A equipe foi muito atenciosa e encontrou a melhor solução de crédito para minha necessidade. Recomendo a todos!',
  },
  {
    name: 'Maria S.',
    rating: 5,
    comment: 'Processo rápido, transparente e sem burocracia. Consegui o financiamento do meu carro em tempo recorde. Muito satisfeita!',
  },
  {
    name: 'Carlos F.',
    rating: 5,
    comment: 'Empresa séria e de confiança. A consultoria que recebi foi fundamental para organizar minhas finanças e realizar meu sonho da casa própria.',
  },
];

export default function GoogleReviews() {
  return (
    <section id="reviews" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O que Nossos Clientes Dizem</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Confira as avaliações de quem já confiou em nosso trabalho.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm">
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-muted-foreground/50" />
                  ))}
                </div>
                <p className="mt-4 text-muted-foreground">"{review.comment}"</p>
              </div>
              <p className="mt-6 font-semibold">- {review.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild size="lg">
            <Link href="https://g.page/r/YOUR_GOOGLE_PAGE_ID/review" target="_blank" rel="noopener noreferrer">
              Deixe sua Avaliação no Google
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
