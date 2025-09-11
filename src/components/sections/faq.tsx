import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Qual a pontuação de crédito necessária para me qualificar?',
    answer: 'A pontuação de crédito necessária varia de acordo com o produto. Nossa ferramenta de Recomendação de IA pode ajudá-lo a encontrar produtos que correspondam ao seu perfil de crédito. Geralmente, uma pontuação acima de 650 abre mais opções.',
  },
  {
    question: 'Quanto tempo leva o processo de aprovação?',
    answer: 'Os tempos de aprovação podem variar de alguns minutos para solicitações online a alguns dias úteis para empréstimos mais complexos. Nós nos esforçamos para processar todas as solicitações o mais rápido possível.',
  },
  {
    question: 'Existem taxas ocultas?',
    answer: 'Acreditamos na transparência total. Todas as taxas potenciais, como taxas de originação ou multas por atraso no pagamento, são claramente descritas em seu contrato de empréstimo antes de você se comprometer.',
  },
  {
    question: 'Posso quitar meu empréstimo antecipadamente?',
    answer: 'Sim, a maioria dos nossos produtos de empréstimo permite o pagamento antecipado sem nenhuma penalidade. Incentivamos o gerenciamento financeiro responsável.',
  },
  {
    question: 'Minhas informações pessoais estão seguras?',
    answer: 'Com certeza. Usamos criptografia e protocolos de segurança padrão do setor para proteger seus dados o tempo todo. Sua privacidade e segurança são nossas principais prioridades.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Perguntas Frequentes</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tem perguntas? Nós temos respostas. Encontre soluções rápidas para perguntas comuns abaixo.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
