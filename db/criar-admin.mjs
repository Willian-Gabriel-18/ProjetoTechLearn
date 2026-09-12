import { readFileSync } from 'node:fs'
import { neon } from '@neondatabase/serverless'
import { randomBytes, scrypt } from 'node:crypto'
import { promisify } from 'node:util'

const scryptAsync = promisify(scrypt)

function envLocal() {
  const t = readFileSync(new URL('../.env', import.meta.url), 'utf8')
  const out = {}
  for (const line of t.split('\n')) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
    if (m) out[m[1]] = m[2]
  }
  return out
}

const env = { ...envLocal(), ...process.env }
const sql = neon(env.DATABASE_URL)
const email = (env.ADMIN_EMAIL || '').toLowerCase()
const senha = env.ADMIN_PASSWORD || ''
const nome = env.ADMIN_NOME || 'Admin TechLearn'
if (!email || senha.length < 8) {
  console.error('Defina ADMIN_EMAIL e ADMIN_PASSWORD (>= 8) no .env')
  process.exit(1)
}
const salt = randomBytes(16).toString('hex')
const buf = await scryptAsync(senha, salt, 64)
const senha_hash = `${salt}:${buf.toString('hex')}`
const ja = await sql`SELECT id FROM usuarios WHERE lower(email) = ${email} LIMIT 1`
if (ja[0]) {
  await sql`
    UPDATE usuarios
    SET senha_hash = ${senha_hash}, papel = 'admin', nome = ${nome}
    WHERE id = ${ja[0].id}
  `
} else {
  await sql`
    INSERT INTO usuarios (email, senha_hash, nome, papel)
    VALUES (${email}, ${senha_hash}, ${nome}, 'admin')
  `
}
console.log('Admin ok:', email)
