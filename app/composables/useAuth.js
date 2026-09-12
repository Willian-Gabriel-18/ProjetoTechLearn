export function useAuth() {
  const usuario = useState('usuario', () => null)

  async function carregar() {
    const { data } = await useFetch('/api/auth/eu')
    usuario.value = data.value?.usuario || null
    return usuario.value
  }

  async function sair() {
    await $fetch('/api/auth/sair', { method: 'POST' })
    usuario.value = null
    await navigateTo('/')
  }

  return { usuario, carregar, sair }
}
