<script setup>
defineProps({ conteudo: { type: Object, default: () => ({}) } })
</script>

<template>
  <section class="my-6 rounded-md border border-cerrado/40 px-4 py-3">
    <p class="font-display text-lg text-cerrado flex items-center gap-2">
      <i class="pi pi-question-circle" aria-hidden="true" />
      Exercício
    </p>
    <p class="mt-1 leading-relaxed">{{ conteudo.enunciado }}</p>
  </section>
</template>
