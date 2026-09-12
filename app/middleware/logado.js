// Rotas que exigem conta (ex.: /conta). Visitante vai para /entrar.
export default defineNuxtRouteMiddleware(async () => {
  const { data } = await useFetch('/api/auth/eu')
  if (!data.value?.usuario) {
    return navigateTo('/entrar')
  }
})
