/**
 * Acesso ao `sessionStorage` sem risco de quebrar a jornada.
 *
 * Navegação anônima, cookies bloqueados ou cota cheia fazem o storage lançar
 * erro. Nada que fica aqui é essencial: na falha, a leitura devolve `null` e
 * a gravação é ignorada.
 */

export function readSession(key: string): string | null {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

export function writeSession(key: string, value: string): void {
  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    // Sem storage disponível o dado vale apenas para esta página.
  }
}

export function removeSession(key: string): void {
  try {
    window.sessionStorage.removeItem(key);
  } catch {
    // Idem: não há o que limpar.
  }
}
