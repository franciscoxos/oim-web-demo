# AGENTS.md — oim-web

> Guía para agentes IA (Codex, Cursor, Aider, Devin, Copilot, Claude Code) trabajando en este repo.
> Para humanos: ver `README.md`.

## Project Overview

Landing page Next.js 16 para cliente OIM. Demo cliente con subpath build (`oim-demo`).

## Setup commands

```bash
npm install
npm run dev          # localhost:3000
npm run build        # build estándar
npm run build:oim-demo   # build con SUBPATH=oim-demo
npm run start
```

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16.2.4 (App Router) |
| React | 19.2.4 |
| Styling | Tailwind CSS v4 |
| Animations | framer-motion 12 |
| Icons | lucide-react |
| Sliders | swiper |
| TypeScript | 5 |

<!-- BEGIN:nextjs-agent-rules -->
## Important: Next.js 16 breaking changes

This is **NOT** the Next.js you know from training data. Next.js 16 has breaking changes — APIs, conventions, and file structure differ. **Read the relevant guide in `node_modules/next/dist/docs/` before writing any code.** Heed deprecation notices.

Key changes (verify against installed version):
- Cache Components (replaces `unstable_cache`)
- `'use cache'` directive
- `cacheLife()` / `cacheTag()` / `updateTag()`
- Async `cookies()` / `headers()`
- `connection()` for dynamic rendering
- `forbidden()` / `unauthorized()` helpers
- `proxy.ts` (replaces some middleware patterns)
- `after()` / `refresh()`
<!-- END:nextjs-agent-rules -->

## Code style

- TypeScript estricto, no `any` implícito
- Server Components by default, Client Components solo cuando necesario
- Tailwind classes ordenadas con Prettier plugin si está config
- No emojis en código (sí en UI cuando el diseño lo pida)

## Testing instructions

```bash
# Type check
npx tsc --noEmit

# Lint
npm run lint   # si está configurado

# Build production
npm run build
```

## Deploy

- Hosted en Vercel (auto-deploy si conectado)
- Subpath build para demo: `SUBPATH=oim-demo next build` → output en `out/oim-demo`
- Verificar `next.config.ts` antes de cambiar deployment

## Security considerations

- No secrets en código ni en `.env*` commiteados
- Cualquier API key vive en Vercel env vars
- RLS si hay Supabase (verificar antes de poner en prod)
- Cliente externo — IP IA&N NO debe filtrarse (este repo NO tiene prompts internos, mantener limpio)

## PR instructions

1. Branch desde `main`: `feature/<descripción>`
2. PR title: corto, descriptivo (under 70 chars)
3. Antes de pedir review: `npx tsc --noEmit` pasa, `npm run build` exitoso
4. Si el cambio toca homepage o copy: incluir screenshot

## Key files

- `src/app/` — App Router pages
- `next.config.ts` — config Next.js (incluye SUBPATH logic)
- `tailwind.config` — Tailwind v4 config
- `public/` — assets estáticos

## Conventions specific to this repo

1. **SUBPATH env var**: la build dinámica con subpath usa env `SUBPATH=oim-demo`. Verificar lógica en `next.config.ts` antes de cambiar
2. **Cliente OIM externo**: este repo se sirve al cliente — NO incluir IP/prompts internos IA&N
3. **Next.js 16**: validar contra docs locales antes de usar APIs que recuerdes de versiones anteriores

## See also

- `README.md` — Next.js create-app instructions estándar
- `node_modules/next/dist/docs/` — docs Next.js 16 instalado
- `CLAUDE.md` — pointer `@AGENTS.md` (formato Codex)
