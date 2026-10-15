# LP de Empréstimo com Garantia de Veículo (`/emprestimo`)

Landing page de tráfego pago do simulador de empréstimo com garantia de veículo.
O cliente preenche os dados (etapa 1) e escolhe o valor no slider (etapa 2). O
lead vai para o n8n, que grava no PostgreSQL e cria o lead no CRM C2S.

| Rota | O que é |
|---|---|
| `/emprestimo` | Simulador: formulário, FAQ e etapa de valor |
| `/emprestimo/obrigado` | Página de conversão (fora dos buscadores) |

A LP veio do repositório `porto-vale-dev/simulador-emprestimo`, que continua
existindo. Lá também ficam o workflow do n8n e a documentação dele
(`n8n/README.md`).

## Onde fica cada coisa

A LP é isolada do restante do site e **não usa os componentes shadcn de
`src/components/ui`**. Ela tem um Design System próprio, de outra identidade
visual:

| Caminho | Papel |
|---|---|
| `src/app/emprestimo/layout.tsx` | Fontes (Sora e Lora), CSS da LP e o contêiner `.pv-root` |
| `src/app/emprestimo/page.tsx` | Página do simulador |
| `src/app/emprestimo/obrigado/page.tsx` | Página de obrigado |
| `src/features/emprestimo/ui` | Componentes do Design System da LP (botão, campo, select, slider…) |
| `src/features/emprestimo/styles` | Tokens, reset e estilos da LP — carregados só nas rotas `/emprestimo` |
| `src/features/emprestimo/content/simulator-content.ts` | **Todos os textos** da LP, incluindo o FAQ |
| `src/features/emprestimo/constants/simulator.constants.ts` | Faixa de valor (R$ 5 mil a R$ 300 mil), taxa, prazo e rotas |
| `src/features/emprestimo/schemas` | Validação dos campos |
| `src/features/emprestimo/services/lead.service.ts` | Único ponto que envia o lead |
| `src/features/emprestimo/config/env.ts` | URL do webhook |
| `public/img/emprestimo` | Logo Porto Vale (o mesmo do ProjetoBV), em versão clara e escura |

Para mudar um texto, comece por `simulator-content.ts`. Para mudar a taxa ou a
faixa de valor, use `simulator.constants.ts`.

## Estilos

- Tudo fica dentro de `.pv-root`. Os resets usam `:where(.pv-root)`, que não
  soma especificidade, então as classes de componente (`pv-*`, `app-*`) sempre
  vencem.
- Os tokens (`--pv-*`, `--color-*`, `--space-*`, `--radius-*`, `--shadow-*`)
  não colidem com as variáveis do site (`--primary`, `--background`,
  `--radius`…).
- O build gera um CSS separado, que só as rotas `/emprestimo` carregam. As
  demais páginas do site continuam com o CSS de sempre.
- Não declare cor, espaçamento ou raio literal: use os tokens de
  `styles/tokens.css`.

## Envio do lead

O navegador envia o lead em duas chamadas `POST` para o webhook do n8n, com o
mesmo `sessaoId`:

1. **Etapa `dados`**, ao concluir o formulário, sem esperar resposta.
2. **Etapa `valor`**, ao enviar a simulação. A LP aguarda a resposta e só então
   abre `/emprestimo/obrigado`.

A URL de produção está em `config/env.ts`. Ela fica no código porque o gatilho
do Cloud Build deste site não repassa variáveis de build. Não é segredo, porque
vai para o navegador de qualquer forma. O n8n só aceita chamadas de
`portovaleseguros.com.br` (com e sem `www`).

| Ambiente | Para onde vai o lead |
|---|---|
| `npm run dev` | Lugar nenhum: o envio é **simulado** e nenhum lead real é criado |
| Build de produção (`npm run build`) | Webhook de produção do n8n |
| Qualquer um, com `NEXT_PUBLIC_EMPRESTIMO_WEBHOOK_URL` definida | A URL da variável (vazia = desligado) |

> Atenção: `npm run build && npm start` na sua máquina envia leads reais. Para
> testar o envio localmente sem criar lead, defina
> `NEXT_PUBLIC_EMPRESTIMO_WEBHOOK_URL` com a URL de um servidor de teste antes
> do build.

O formulário tem um campo invisível anti-robô (`website`). Não o remova: o n8n
descarta os envios em que ele vem preenchido.

## Rastreamento

A LP usa o GTM do layout raiz do site (`GTM-K3B6JTTS`) e não carrega pixel
próprio. Os eventos vão para o `dataLayer`, sempre com `lp_slug:
"simulador-emprestimo"`:

| Evento | Quando |
|---|---|
| `form_started` | Primeira interação com o formulário |
| `step_completed` | Cada etapa concluída (`step`: `dados` ou `valor`) |
| `lead_submitted` | Envio da simulação aceito pelo n8n (`credit_amount`: valor escolhido) |
| `lead_submit_error` | Falha no envio da simulação |
| `lead_completed` | Página de obrigado aberta logo após um envio (uma vez por envio) |

A conversão (Google Ads, GA4 e Pixel da Meta) deve ser configurada no GTM, pelo
evento `lead_completed` ou pela URL `/emprestimo/obrigado`. Nenhum dado pessoal
vai para o `dataLayer`.

## Como testar

```bash
npm run dev                  # http://localhost:9002/emprestimo (envio simulado)
npx tsc --noEmit             # o build do site ignora erros de tipo
```

Confira em 375, 430, 768, 1280 e 1440px:

- o painel azul só aparece a partir de 1024px;
- o fluxo vai até `/emprestimo/obrigado`;
- a home e as outras páginas não mudaram.

## Publicação

Todo push na `main` publica o site em produção (Cloud Run `porto-vale-seguros`,
pelo gatilho do Cloud Build). Mudanças na LP devem passar por branch e PR.
