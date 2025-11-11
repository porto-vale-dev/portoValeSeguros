import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Como faço para cotar um seguro?',
    answer: 'É muito simples! Basta preencher o formulário em nosso site com algumas informações básicas e um de nossos especialistas entrará em contato para oferecer a melhor proposta para você.',
  },
  {
    question: 'Quais tipos de seguro a Porto oferece?',
    answer: 'Oferecemos uma vasta gama de seguros, incluindo Seguro Auto, Seguro Residencial e Seguro de Vida. Cada um pode ser personalizado para atender às suas necessidades específicas.',
  },
  {
    question: 'Em caso de sinistro, como devo proceder?',
    answer: 'Acreditamos na transparência e agilidade. Em caso de sinistro, você pode nos contatar através dos nossos canais de atendimento 24h. Nossa equipe irá orientá-lo em todo o processo de forma rápida e eficiente.',
  },
  {
    question: 'Posso personalizar minha apólice de seguro?',
    answer: 'Sim, todos os nossos seguros são flexíveis. Você pode adicionar ou remover coberturas para criar uma apólice que se ajuste perfeitamente às suas necessidades e ao seu orçamento.',
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
