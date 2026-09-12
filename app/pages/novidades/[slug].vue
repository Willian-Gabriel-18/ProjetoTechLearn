<script setup>
import { markdownParaHtml } from '~/utils/markdownSimples.js'
const route = useRoute()
const { data, error } = await useFetch(`/api/noticias/${route.params.slug}`)
const html = computed(() => {
  const corpo = data.value?.noticia?.corpo
  if (typeof corpo === 'string') return markdownParaHtml(corpo)
  if (corpo?.markdown) return markdownParaHtml(corpo.markdown)
  return markdownParaHtml(data.value?.noticia?.resumo || '')
})
</script>

<template>
  <article class="mx-auto max-w-leitura px-4 py-10">
    <p v-if="error">Novidade não encontrada.</p>
    <template v-else-if="data">
      <h1 class="font-display text-4xl">{{ data.noticia.titulo }}</h1>
      <div class="mt-6 text-lg leading-relaxed texto-aula" v-html="html" />
    </template>
  </article>
</template>
