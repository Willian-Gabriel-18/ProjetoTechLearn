<script setup>
defineProps({ conteudo: { type: Object, default: () => ({}) } })
</script>

<template>
  <aside class="my-6 border-l-4 border-mata bg-[#e7f0ea] px-4 py-3 rounded-r-md">
    <p class="font-display text-lg text-mata flex items-center gap-2">
      <i class="pi pi-bookmark" aria-hidden="true" />
      Palavra nova: {{ conteudo.termo }}
    </p>
    <p class="mt-1 leading-relaxed">{{ conteudo.explicacao }}</p>
  </aside>
</template>
