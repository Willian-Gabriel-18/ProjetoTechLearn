<script setup>
defineProps({ conteudo: { type: Object, default: () => ({}) } })
</script>

<template>
  <figure class="my-6">
    <img
      :src="conteudo.src"
      :alt="conteudo.alt || ''"
      class="w-full max-w-full h-auto rounded-md border border-linha object-contain max-h-[28rem] bg-papel"
      loading="lazy"
    />
    <!-- Legenda só quando a frase ensina o desenho da aula. Alt nunca vira figcaption. -->
    <figcaption
      v-if="conteudo.legenda"
      class="mt-2 text-sm text-center italic text-tinta/70"
    >
      {{ conteudo.legenda }}
      <span v-if="conteudo.credito"> — {{ conteudo.credito }}</span>
    </figcaption>
  </figure>
</template>
