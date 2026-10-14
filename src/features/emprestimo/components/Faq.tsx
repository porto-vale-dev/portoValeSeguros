import { Accordion, AccordionItem } from "@/features/emprestimo/ui";

import { simulatorContent } from "../content/simulator-content";

/**
 * Perguntas frequentes, exibidas abaixo do formulário.
 *
 * Componente de servidor: as respostas chegam no HTML inicial, mesmo com os
 * itens fechados. Um item aberto fecha o anterior (`group`).
 */
export function Faq() {
  const content = simulatorContent.faq;

  return (
    <section aria-labelledby="faq-title" className="faq">
      <h2 className="faq-title" id="faq-title">
        {content.title}
      </h2>

      <Accordion>
        {content.items.map((item) => (
          <AccordionItem group="faq" key={item.question} title={item.question}>
            {item.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
