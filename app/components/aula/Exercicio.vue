<script setup>
defineProps({ conteudo: { type: Object, default: () => ({}) } })
</script>

<template>
  <section class="my-6 rounded-md border border-cerrado/40 px-4 py-3">
    <p class="font-display text-lg text-cerrado">Exercício</p>
    <p class="mt-1 leading-relaxed">{{ conteudo.enunciado }}</p>
  </section>
</template>
