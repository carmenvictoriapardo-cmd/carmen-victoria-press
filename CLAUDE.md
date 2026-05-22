# CLAUDE.md — carmen-victoria-press

## Reglas de Deploy (OBLIGATORIAS)

1. **NUNCA** `git push origin main` directo → SIEMPRE branch + PR
2. **NUNCA** `vercel --prod` ni `vercel deploy --prod` manual
3. Cada env var en Vercel → verificar con `vercel env pull /tmp/v.env` que NO esté vacía
4. Pre-flight `curl` antes de cada alias-swap

## Flujo de Deploy

```bash
# 1. Crear branch
git checkout -b feat/<feature-name> origin/main

# 2. Hacer cambios, commit
git add -p
git commit -m "feat: descripción"

# 3. Push branch
git push origin feat/<feature-name>

# 4. Crear PR (nunca merge directo a main)
gh pr create --title "feat: descripción" --body "..."

# 5. Vercel auto-deploya el PR como preview
# 6. Revisar preview URL
# 7. Merge PR → Vercel auto-deploya a production
```

## Pre-flight Checklist

```bash
# Antes de alias-swap
vercel env pull /tmp/v.env && grep -c "=$" /tmp/v.env  # debe ser 0 (ninguna vacía)
curl -s -o /dev/null -w "%{http_code}" https://press.carmenvictoriapardo.com  # debe ser 200
```

## Stack

- Next.js 15 + App Router
- Tailwind CSS 4
- Framer Motion
- TypeScript
- Vercel (hosting)
- Supabase (PR Auto-Pilot DB)
- Resend (emails)
- Anthropic API (PR scoring)

## Sitio

- Dominio: press.carmenvictoriapardo.com
- Repo: github.com/carmenvictoriapardo-cmd/carmen-victoria-press
- Idioma default: Español
- Inglés: /en/
