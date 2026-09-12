export default defineEventHandler(async (event) => {
  const usuario = await usuarioDaSessao(event)
  return { usuario }
})
