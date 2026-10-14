/**
 * Webhook do n8n que recebe os leads em produção.
 *
 * Fica no código porque o gatilho do Cloud Build deste site não repassa
 * variáveis de build e os arquivos `.env*` não são versionados. Não é
 * segredo: a URL vai para o navegador de qualquer forma, e o n8n só aceita
 * chamadas dos domínios do site (CORS).
 */
const PRODUCTION_LEAD_WEBHOOK_URL =
  "https://n8n2.portovaleconsorcio.com.br/webhook/simulador-emprestimo-veiculo";

const isDevelopment = process.env.NODE_ENV === "development";

/**
 * Fonte única das configurações públicas da LP de empréstimo.
 *
 * Nenhum componente deve ler `process.env` diretamente. Tudo aqui vai para o
 * navegador — segredos nunca entram neste arquivo.
 *
 * A variável é lida por nome literal porque o Next só embute no bundle as
 * `NEXT_PUBLIC_*` referenciadas dessa forma.
 */
export const env = {
  /**
   * Webhook do lead. `NEXT_PUBLIC_EMPRESTIMO_WEBHOOK_URL`, quando definida
   * (mesmo vazia), substitui o padrão. Em `npm run dev` o padrão é vazio: o
   * envio é simulado e nenhum lead real é criado.
   */
  leadWebhookUrl: (
    process.env.NEXT_PUBLIC_EMPRESTIMO_WEBHOOK_URL ??
    (isDevelopment ? "" : PRODUCTION_LEAD_WEBHOOK_URL)
  ).trim(),

  isDevelopment,
} as const;
