import type { TextSegment } from "@/features/emprestimo/ui";

import {
  CREDIT_MAX,
  CREDIT_MIN,
  MONTHLY_RATE,
  REFERENCE_TERM_MONTHS,
} from "../constants/simulator.constants";
import { formatCurrencyThousands } from "../utils/currency";

/**
 * Conteúdo estático do simulador.
 *
 * Títulos, apoios e rótulos ficam centralizados para evitar copy divergente
 * entre etapas. Alterações de texto começam por aqui. Os textos do painel
 * lateral e da capa são os mesmos do ProjetoBV.
 */

const RATE_LABEL = `${(MONTHLY_RATE * 100).toFixed(2).replace(".", ",")}% a.m.`;

/** Título da capa, com o trecho em ênfase em Lora itálico. */
const COVER_TITLE: readonly TextSegment[] = [
  { text: "Simule seu " },
  { em: true, text: "empréstimo com garantia de veículo" },
  { text: " em poucos minutos" },
];

export const simulatorContent = {
  meta: {
    title: "Simulador de Empréstimo com Garantia de Veículo | Porto Vale Seguros",
    description:
      "Crédito facilitado de até 120% do valor do seu veículo, sem deixar de rodar com ele.",
  },

  brand: {
    name: "PORTO VALE CRÉDITO",
  },

  sidePanel: {
    title: "Seu veículo pode virar o crédito que você precisa.",
    text: "Empréstimo com garantia de veículo, com as menores taxas do mercado e sem deixar de rodar com seu carro.",
    stats: [
      { value: "120%", label: "do valor do veículo em crédito" },
      { value: RATE_LABEL, label: "taxa de juros a partir de" },
      { value: `${REFERENCE_TERM_MONTHS} meses`, label: "de prazo para pagar" },
    ],
  },

  progressLabel: "Progresso da simulação",

  dados: {
    title: COVER_TITLE,
    sub: `Crédito facilitado de até 120% do valor do seu veículo, sem deixar de rodar com ele. Garanta as menores taxas sem comprometer seu orçamento, e tenha até ${REFERENCE_TERM_MONTHS} meses para pagar.`,
    callout: {
      strong: "Lembre-se:",
      text: " multas e impostos do veículo devem estar regularizados.",
    },
    stats: [
      { label: "Crédito de até", value: "120% do veículo" },
      { label: "Taxa a partir de", value: RATE_LABEL },
      { label: "Prazo de até", value: `${REFERENCE_TERM_MONTHS} meses` },
    ],
    fields: {
      fullName: "Nome completo",
      fullNamePlaceholder: "Como no seu documento",
      email: "E-mail",
      emailPlaceholder: "voce@email.com",
      phone: "Celular com DDD (WhatsApp)",
      phonePlaceholder: "+55 (00) 90000-0000",
      creditRestriction: "Possui alguma restrição no SPC ou Serasa?",
      creditRestrictionPlaceholder: "Selecione",
      vehicleYear: "Ano do veículo",
      vehicleYearPlaceholder: "Ex.: 2020",
      vehicleModel: "Modelo do veículo",
      vehicleModelPlaceholder: "Ex.: Onix",
      cpf: "CPF",
      cpfPlaceholder: "000.000.000-00",
    },
    privacy: {
      before: "Li e concordo com a ",
      link: "Política de Privacidade",
      after:
        " e autorizo a Porto Vale e seus parceiros a entrarem em contato comigo.",
      url: "/politicas-de-privacidade",
    },
    action: "Continuar",
  },

  valor: {
    eyebrow: "02 · SIMULAÇÃO",
    title: "Escolha o valor do seu empréstimo",
    sub: "Ajuste o valor de que você precisa e veja uma estimativa da parcela.",
    sliderLabel: "De qual valor você precisa?",
    sliderMin: formatCurrencyThousands(CREDIT_MIN),
    sliderMax: formatCurrencyThousands(CREDIT_MAX),
    installmentLabel: "Parcelas a partir de",
    perMonth: `por mês, em ${REFERENCE_TERM_MONTHS}x · taxa a partir de ${RATE_LABEL}`,
    caption:
      "*Simulação ilustrativa. Valores sujeitos a análise de crédito. Consulte um consultor Porto Vale.",
    action: "Enviar simulação",
    sending: "Enviando...",
  },

  /** Perguntas e respostas oficiais enviadas pela equipe. */
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        question: "Como funciona o processo de empréstimo?",
        answer:
          "O empréstimo com garantia de veículo, também conhecido como refinanciamento de veículo, é uma modalidade de crédito em que você utiliza um carro quitado como garantia do contrato. O veículo continua no seu nome e pode ser usado normalmente durante o pagamento das parcelas, ficando apenas alienado à instituição financeira até a quitação da dívida. Como o risco da operação é menor, essa modalidade costuma oferecer taxas de juros mais baixas, prazos maiores e limites de crédito mais altos do que um empréstimo pessoal tradicional.",
      },
      {
        question: "É cobrado algum valor antecipado no processo?",
        answer:
          "O empréstimo com garantia de veículo funciona utilizando um carro quitado como garantia da operação. Após a solicitação, o Santander realiza a análise de crédito e a avaliação do veículo. Se aprovado, o veículo permanece com o proprietário, ficando apenas alienado até a quitação da dívida.",
      },
      {
        question: "Meu carro não está quitado, posso solicitar um empréstimo?",
        answer:
          "É necessário atender aos critérios da análise de crédito da instituição. Atualmente, clientes com restrições no CPF não podem contratar essa modalidade.",
      },
      {
        question: "Posso continuar usando o meu carro?",
        answer:
          "Sim. Você continua sendo dono do carro e pode seguir usando o veículo normalmente. O objetivo da garantia é diminuir o valor da taxa e da parcela mensal pra você.",
      },
      {
        question: "Quais são as documentações necessárias no processo?",
        answer:
          "Apenas documento de identificação (CNH ou RG), comprovante de endereço e comprovante de renda.",
      },
      {
        question: "Quanto tempo leva pro dinheiro cair na minha conta?",
        answer:
          "Costuma levar poucos dias, dependendo do envio dos documentos e da vistoria. Depois da assinatura do contrato, o dinheiro é depositado em até 24h na sua conta.",
      },
    ],
  },

  obrigado: {
    meta: {
      title: "Recebemos sua solicitação | Porto Vale Seguros",
    },
    icon: "✓",
    title: "Recebemos sua solicitação!",
    sub: "Um consultor Porto Vale vai analisar sua simulação e entrar em contato em breve pelo WhatsApp ou telefone informado.",
    caption:
      "*Simulação ilustrativa. Valores sujeitos a análise de crédito.",
    action: "Fazer nova simulação",
  },

  errors: {
    submit:
      "Não foi possível enviar sua simulação agora. Verifique sua conexão e tente novamente.",
    notConfigured:
      "O envio ainda não está configurado neste ambiente. Tente novamente mais tarde.",
  },

  navigation: {
    back: "←",
    backLabel: "Voltar",
  },
} as const;
