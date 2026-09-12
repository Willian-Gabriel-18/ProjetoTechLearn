export default defineEventHandler(async (event) => {
  await exigirAdmin(event)
  const id = getRouterParam(event, 'id')
  const corpo = await readBody(event)
  const sql = db()
  const titulo = String(corpo?.titulo || '').trim()
  const resumo = String(corpo?.resumo || '')
  const publicada = Boolean(corpo?.publicada)
  const tempo = Number(corpo?.tempo_minutos) || 20
  const niveis = ['basico', 'intermediario', 'avancado']
  const nivel = niveis.includes(corpo?.nivel) ? corpo.nivel : 'basico'
  const precisaPagina = Boolean(corpo?.precisa_pagina)
  await sql`
    UPDATE aulas
    SET titulo = ${titulo},
        resumo = ${resumo},
        publicada = ${publicada},
        tempo_minutos = ${tempo},
        nivel = ${nivel}::nivel_aula,
        precisa_pagina = ${precisaPagina},
        atualizado_em = now()
    WHERE id = ${id}
  `
  return { ok: true }
})
