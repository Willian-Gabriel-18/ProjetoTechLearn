export default defineNuxtRouteMiddleware(async () => {
  const { data } = await useFetch('/api/auth/eu')
  const papel = data.value?.usuario?.papel
  if (papel !== 'admin') {
    return navigateTo('/entrar')
  }
})
