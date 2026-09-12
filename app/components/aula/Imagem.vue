<script setup>
defineProps({ conteudo: { type: Object, default: () => ({}) } })
</script>

<template>
  <figure class="my-6">
    <img
      :src="conteudo.src"
      :alt="conteudo.alt || ''"
      class="w-full rounded-md border border-linha object-cover max-h-[28rem]"
    />
    <figcaption v-if="conteudo.credito || conteudo.alt" class="mt-2 text-sm text-center italic text-tinta/70">
      {{ conteudo.alt }}
      <span v-if="conteudo.credito"> — {{ conteudo.credito }}</span>
    </figcaption>
  </figure>
</template>
