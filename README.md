# Boreal Clean — Landing page

Site institucional da **Boreal Clean**, empresa de higienização de estofados (sofás, poltronas, colchões, cadeiras) e limpeza de evaporadoras de ar-condicionado. Todos os botões de chamada levam o cliente direto ao WhatsApp da empresa, (17) 99271-1318, com uma mensagem pronta.

## Tecnologias

- TanStack Start + React 19
- Tailwind CSS 4
- Netlify (hospedagem e Image CDN para servir as fotos otimizadas em WebP)

## Rodando localmente

```bash
pnpm install
pnpm dev
```

Para emular os recursos da Netlify (como o Image CDN), use `netlify dev`.

## Personalização

- Número do WhatsApp e mensagens: constantes no topo de `src/routes/index.tsx`.
- Serviços, benefícios, passos e perguntas frequentes: arrays no mesmo arquivo.
- Cores e fontes: `src/styles.css`.
- Fotos: `public/img/`.
