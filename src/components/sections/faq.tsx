import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What credit score do I need to qualify?',
    answer: 'The required credit score varies depending on the product. Our AI Recommendation tool can help you find products that match your credit profile. Generally, a score above 650 opens up more options.',
  },
  {
    question: 'How long does the approval process take?',
    answer: 'Approval times can range from a few minutes for online applications to a few business days for more complex loans. We strive to process all applications as quickly as possible.',
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'We believe in full transparency. All potential fees, such as origination fees or late payment penalties, are clearly outlined in your loan agreement before you commit.',
  },
  {
    question: 'Can I pay off my loan early?',
    answer: 'Yes, most of our loan products allow for early repayment without any prepayment penalties. We encourage responsible financial management.',
  },
  {
    question: 'Is my personal information secure?',
    answer: 'Absolutely. We use industry-standard encryption and security protocols to protect your data at all times. Your privacy and security are our top priorities.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions? We have answers. Find quick solutions to common inquiries below.
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
