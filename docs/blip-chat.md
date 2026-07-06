# Blip Chat — desativação temporária e guia de reativação

O widget de chat Blip está **temporariamente desativado** via feature flag. Nenhum código foi
removido — todos os arquivos do widget continuam no repositório, prontos para reativação.

## Como funciona

A renderização do componente `<BlipChat />` em `src/app/page.tsx` é condicionada à variável
de ambiente `NEXT_PUBLIC_BLIP_CHAT_ENABLED`:

- `NEXT_PUBLIC_BLIP_CHAT_ENABLED=true` → widget ativo
- Qualquer outro valor, ou variável ausente → widget desativado (fail-safe)

Quando desativado, o componente nem é montado: o script do CDN
(`https://unpkg.com/blip-chat-widget`), o CSS/fonte da blip.ai e o iframe do chat **não são
carregados** — não é apenas ocultação visual.

> Como a variável tem prefixo `NEXT_PUBLIC_`, o valor é embutido no bundle **em tempo de
> build**. Mudar a flag exige novo build/deploy (não basta alterar a env em runtime).

## Como reativar

1. **Produção (Firebase App Hosting):** em `apphosting.yaml`, mude o valor da variável
   `NEXT_PUBLIC_BLIP_CHAT_ENABLED` de `"false"` para `"true"` e faça novo deploy.
2. **Desenvolvimento local:** em `.env.local`, mude para `NEXT_PUBLIC_BLIP_CHAT_ENABLED=true`
   e reinicie o dev server (`npm run dev`).

Nenhum código precisa ser alterado.

## Inventário dos arquivos do widget

| Arquivo | Papel |
|---|---|
| `src/app/page.tsx` | Único ponto de uso — renderiza `<BlipChat />` condicionado à flag |
| `src/components/blip-chat.tsx` | Componente client: monta o widget, balão de mensagem e opções |
| `src/components/blip-chat.css` | Estilos do widget (importado apenas pelo componente) |
| `src/lib/blip-chat.service.ts` | Serviço singleton: injeta o script do CDN e cria/destrói o widget |
| `src/custom.d.ts` | `declare module '*.css'` — necessário para o import do CSS (usado por outros também) |

## Configurações do Blip

- `APP_KEY` e a URL do tenant (`https://portovale.chat.blip.ai/`) estão hardcoded em
  `src/lib/blip-chat.service.ts`.
- O script vem do CDN em runtime — **não há dependência do Blip no `package.json`**.
