/**
 * Resultado padronizado de uma chamada de serviço.
 *
 * Erros de integração viram estado — não exceção — para que a interface possa
 * tratar `not-found` e `error` de forma explícita, sem `try/catch` espalhado
 * pelos componentes.
 */
export type ServiceResult<T> =
  | { status: "success"; data: T }
  | { status: "not-found" }
  | { status: "error"; message: string };
