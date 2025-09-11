import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Landmark, ShieldCheck, Home, Briefcase } from 'lucide-react'

const products = [
  {
    icon: <Landmark className="h-10 w-10 text-primary" />,
    title: 'Empréstimos com Garantia',
    description: 'Use seus ativos para obter empréstimos com taxas de juros mais baixas e melhores condições.',
  },
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: 'Financiamento',
    description: 'Opções de financiamento flexíveis para suas necessidades pessoais ou empresariais, de veículos a equipamentos.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Seguros',
    description: 'Proteja-se e seus ativos com nossos planos de seguro abrangentes.',
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Outros Serviços',
    description: 'Explore uma gama de outros serviços financeiros projetados para ajudá-lo a atingir seus objetivos.',
  },
]

export default function ProductShowcase() {
  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossos Produtos Financeiros</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Oferecemos uma gama diversificada de soluções de crédito e financeiras para atender às suas necessidades únicas. Explore nossos produtos e encontre o ideal para você.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.title} className="flex flex-col items-center justify-center text-center p-6 transition-all hover:scale-105 hover:shadow-xl">
              <CardHeader className="items-center">
                {product.icon}
                <CardTitle>{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
