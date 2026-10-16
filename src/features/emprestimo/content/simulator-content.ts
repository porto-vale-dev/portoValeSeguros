import type { TextSegment } from "@/features/emprestimo/ui";

import {
  CREDIT_MAX,
  CREDIT_MIN,
  FIRST_INSTALLMENT_DAYS,
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
  { em: true, text: "crédito com garantia de veículo" },
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
      { value: `${FIRST_INSTALLMENT_DAYS} dias`, label: "para pagar a 1ª parcela" },
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
      vehiclePlate: "Placa do veículo",
      vehiclePlatePlaceholder: "ABC1D23",
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

  /** Perguntas e respostas oficiais (briefing de ajustes, out/2026). */
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        question: "O que é o Empréstimo com Garantia de Veículo?",
        answer:
          "É uma modalidade de empréstimo em que você utiliza seu veículo quitado como garantia. Isso permite ter acesso a taxas de juros mais baixas e prazos maiores, sem a necessidade de vender seu carro.",
      },
      {
        question: "Quais são as documentações necessárias no processo?",
        answer:
          "Apenas documento de identificação (CNH ou RG).",
      },
      {
        question: "É possível substituir a garantia após a contratação do empréstimo?",
        answer:
          "Após a assinatura do contrato, não é possível substituir a garantia, pois as taxas e os prazos foram definidos com base na garantia informada. Caso deseje utilizar outra garantia, será necessário quitar o contrato atual e solicitar um novo empréstimo.",
      },
      {
        question: "Posso usar o carro normalmente durante o empréstimo?",
        answer:
          "Sim. O veículo permanece em seu nome e pode ser utilizado normalmente durante todo o período do contrato, sem restrições ao uso no dia a dia.",
      },
      {
        question: "Em quanto tempo o dinheiro é liberado na conta?",
        answer:
          "O valor do empréstimo é liberado em até 1 dia útil após a aprovação da garantia.",
      },
      {
        question: "É possível antecipar parcelas ou quitar o empréstimo?",
        answer:
          "Sim. Você pode quitar o contrato ou antecipar o pagamento das parcelas a qualquer momento. Para isso, entre em contato pelos canais oficiais de atendimento.",
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
