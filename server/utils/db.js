import { neon } from '@neondatabase/serverless'

let cliente

// Cliente HTTP do Neon (serve no Vercel sem manter conexão TCP).
export function db() {
  const url = useRuntimeConfig().databaseUrl
  if (!url) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Banco não configurado (DATABASE_URL).',
    })
  }
  if (!cliente) {
    cliente = neon(url)
  }
  return cliente
}
