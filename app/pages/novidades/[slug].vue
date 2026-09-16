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
      <h1 class="font-display text-3xl sm:text-4xl break-words">{{ data.noticia.titulo }}</h1>
      <figure v-if="data.noticia.imagem_capa" class="mt-6">
        <img
          :src="data.noticia.imagem_capa"
          :alt="data.noticia.titulo"
          class="w-full max-w-full h-auto rounded-md border border-linha object-cover max-h-[22rem]"
        />
      </figure>
      <div class="mt-6 text-lg leading-relaxed texto-aula" v-html="html" />
    </template>
  </article>
</template>
