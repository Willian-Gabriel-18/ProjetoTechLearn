<script setup>
defineProps({ conteudo: { type: Object, default: () => ({}) } })
</script>

<template>
  <section class="my-6 rounded-md border border-postit bg-[#fbf6e4] px-4 py-3">
    <p class="font-display text-lg flex items-center gap-2">
      <i class="pi pi-pencil" aria-hidden="true" />
      Você tenta
    </p>
    <p class="mt-1 leading-relaxed">{{ conteudo.instrucao }}</p>
  </section>
</template>
