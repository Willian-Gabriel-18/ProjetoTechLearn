export default defineNuxtPlugin(async () => {
  const { usuario } = useAuth()
  try {
    const req = useRequestFetch()
    const r = await req('/api/auth/eu')
    usuario.value = r.usuario
  } catch {
    usuario.value = null
  }
})
