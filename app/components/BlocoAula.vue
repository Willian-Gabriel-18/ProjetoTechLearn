<script setup>
defineProps({
  bloco: { type: Object, required: true },
})
</script>

<template>
  <AulaTexto v-if="bloco.tipo === 'texto'" :conteudo="bloco.conteudo" />
  <AulaConceito v-else-if="bloco.tipo === 'conceito'" :conteudo="bloco.conteudo" />
  <AulaCodigo v-else-if="bloco.tipo === 'codigo'" :conteudo="bloco.conteudo" />
  <AulaYoutube v-else-if="bloco.tipo === 'youtube'" :conteudo="bloco.conteudo" />
  <AulaArquivo v-else-if="bloco.tipo === 'arquivo'" :conteudo="bloco.conteudo" />
  <AulaImagem v-else-if="bloco.tipo === 'imagem'" :conteudo="bloco.conteudo" />
  <AulaTente v-else-if="bloco.tipo === 'tente'" :conteudo="bloco.conteudo" />
  <AulaExercicio v-else-if="bloco.tipo === 'exercicio'" :conteudo="bloco.conteudo" />
</template>
