import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Landmark, ShieldCheck, Home, Briefcase } from 'lucide-react'

const products = [
  {
    icon: <Landmark className="h-10 w-10 text-primary" />,
    title: 'Secured Loans',
    description: 'Leverage your assets to get loans with lower interest rates and better terms.',
  },
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: 'Financing',
    description: 'Flexible financing options for your personal or business needs, from vehicles to equipment.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Insurance',
    description: 'Protect yourself and your assets with our comprehensive insurance plans.',
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Other Services',
    description: 'Explore a range of other financial services designed to help you achieve your goals.',
  },
]

export default function ProductShowcase() {
  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Financial Products</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a diverse range of credit and financial solutions to meet your unique needs. Explore our products and find the right fit for you.
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
