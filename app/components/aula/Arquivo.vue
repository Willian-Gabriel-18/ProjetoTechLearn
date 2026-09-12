<script setup>
defineProps({ conteudo: { type: Object, default: () => ({}) } })
</script>

<template>
  <p class="my-4">
    <a
      class="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-mata text-papel font-bold hover:opacity-90"
      :href="conteudo.href || '#'"
      download
    >
      <i class="pi pi-download" aria-hidden="true" />
      {{ conteudo.rotulo || 'Baixar arquivo' }}
    </a>
  </p>
</template>
