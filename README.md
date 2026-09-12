# TechLearn

Tutoriais de JavaScript claros e lineares. Nuxt 4 + Tailwind + Neon.

## Local

```bash
cp .env.example .env
# preencha DATABASE_URL e SESSION_SECRET
npm install
npm run dev
```

Criar admin (opcional):

```bash
# ADMIN_EMAIL e ADMIN_PASSWORD no .env
npm run criar-admin
```

Schema do banco: `db/schema.sql`. Conteúdo das aulas: `db/seed.sql` + `db/seed-blocos.mjs`.
