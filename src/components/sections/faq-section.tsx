"use client";

import Faq from "@/components/faq";

export default function FaqSection() {
  return (
    <div className="faq-container p-14 text-center" data-lazy>
      <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Ainda está com duvidas sobre o seguro?</h2>
      <p className="mx-auto mb-8 max-w-[600px] text-sm">
        Confira algumas dúvidas e informações que pode achar importante para
        protegermos aquilo que é mais importante para você.
      </p>

      <Faq
        title="Por que eu preciso de um seguro?"
        content="Porque imprevistos acontecem. O seguro protege seu patrimônio, sua renda e sua tranquilidade. É a forma mais inteligente de. garantir que, mesmo em situações inesperadas, você e sua família fiquem amparados financeiramente."
      />
      <Faq
        title="O seguro realmente vale a pena?"
        content="Sim. O custo de um seguro é muito menor do que o prejuízo que você teria em caso de acidente, roubo, incêndio ou perda. É proteção com custo-benefício real."
      />
      <Faq
        title="E se eu nunca usar o seguro?"
        content="Melhor ainda, isso significa que você esteve seguro o tempo todo. É como ter um guarda-chuva: se não chover, ótimo. Mas quando chove, faz toda diferença."
      />
      <Faq
        title="Como funciona o processo de contratação?"
        content="Simples: você faz uma simulação, ajusta as coberturas conforme sua necessidade e finaliza a contratação com nossa equipe. Tudo de forma rápida e transparente."
      />
      <Faq
        title="O seguro começa a valer na hora?"
        content="Depende do tipo de seguro, mas geralmente a cobertura é ativada logo após a aprovação e pagamento da primeira parcela. Sem complicação."
      />
      <Faq
        title="E se eu quiser cancelar?"
        content="Sem problema. Você pode cancelar quando quiser, conforme as regras da apólice. Nossa equipe orienta todo o processo de forma simples e transparente."
      />
      <Faq
        title="Como faço para acionar o seguro se acontecer algo?"
        content="Basta entrar em contato com nosso atendimento. Orientamos cada passo, do aviso de sinistro até a indenização."
      />
      <Faq
        title="Como saber qual seguro é ideal para mim?"
        content="Nosso papel é justamente esse: entender seu momento, seu patrimônio e seu objetivo. Assim, indicamos o plano ideal com o melhor custo-benefício."
      />
    </div>
  );
}
