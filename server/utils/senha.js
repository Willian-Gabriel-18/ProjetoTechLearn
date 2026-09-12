import { randomBytes, scrypt, timingSafeEqual, createHmac } from 'node:crypto'
import { promisify } from 'node:util'

const scryptAsync = promisify(scrypt)

// Hash de senha com scrypt (nativo do Node, sem biblioteca extra).
export async function hashSenha(senha) {
  const salt = randomBytes(16).toString('hex')
  const buf = await scryptAsync(senha, salt, 64)
  return `${salt}:${buf.toString('hex')}`
}

export async function senhaConfere(senha, guardado) {
  const [salt, hex] = String(guardado).split(':')
  if (!salt || !hex) return false
  const buf = await scryptAsync(senha, salt, 64)
  const a = Buffer.from(hex, 'hex')
  const b = Buffer.from(buf)
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}

export function tokenSessao() {
  return randomBytes(32).toString('base64url')
}

export function hashToken(token, segredo) {
  return createHmac('sha256', segredo).update(token).digest('hex')
}
