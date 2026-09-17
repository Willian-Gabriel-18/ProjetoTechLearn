<script setup>
import { markdownParaHtml } from '~/utils/markdownSimples.js'

const props = defineProps({ conteudo: { type: Object, default: () => ({}) } })
const aberto = ref(false)
const htmlResposta = computed(() => markdownParaHtml(props.conteudo?.resposta || ''))
</script>

<template>
  <section class="my-6 rounded-md border border-cerrado/40 px-4 py-3">
    <p class="font-display text-lg text-cerrado flex items-center gap-2">
      <i class="pi pi-question-circle" aria-hidden="true" />
      Exercício
    </p>
    <p class="mt-1 leading-relaxed">{{ conteudo.enunciado }}</p>
    <div v-if="conteudo.resposta" class="mt-3">
      <button
        type="button"
        class="underline text-cerrado font-bold"
        :aria-expanded="aberto ? 'true' : 'false'"
        @click="aberto = !aberto"
      >
        {{ aberto ? 'Esconder resposta' : 'Consultar resposta' }}
      </button>
      <div
        v-show="aberto"
        class="mt-3 rounded-md border border-linha bg-papel px-3 py-2 texto-aula text-lg leading-relaxed"
        v-html="htmlResposta"
      />
    </div>
  </section>
</template>
