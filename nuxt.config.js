// Configuração do Nuxt 4: app em app/, API em server/, Tailwind e banco via env.
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css', 'primeicons/primeicons.css'],
  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL || '',
    sessionSecret: process.env.SESSION_SECRET || '',
  },
  nitro: {
    preset: 'vercel',
  },
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'TechLearn',
      meta: [
        {
          name: 'description',
          content:
            'Tutoriais de tecnologia claros e lineares, de graça, para quem está começando.',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=Fraunces:opsz,wght@9..144,600;9..144,700&display=swap',
        },
      ],
    },
  },
  routeRules: {
    '/learn': { redirect: '/aprender' },
    '/news': { redirect: '/novidades' },
    '/aprender/iniciante': { redirect: '/aprender/javascript' },
    '/aprender/intermediario': { redirect: '/aprender/javascript' },
    '/aprender/avancado': { redirect: '/aprender/javascript' },
  },
})
