<script setup>
import { markdownParaHtml } from '~/utils/markdownSimples.js'

const props = defineProps({ conteudo: { type: Object, default: () => ({}) } })
const html = computed(() => markdownParaHtml(props.conteudo?.markdown || props.conteudo?.texto || ''))
</script>

<template>
  <div class="texto-aula text-lg leading-relaxed" v-html="html" />
</template>
