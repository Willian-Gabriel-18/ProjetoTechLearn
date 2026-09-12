<script setup>
const props = defineProps({ conteudo: { type: Object, default: () => ({}) } })
const ehZip = computed(() => String(props.conteudo?.href || '').toLowerCase().endsWith('.zip'))
</script>

<template>
  <div class="my-4">
    <p>
      <a
        class="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-mata text-papel font-bold hover:opacity-90"
        :href="conteudo.href || '#'"
        download
      >
        <i class="pi pi-download" aria-hidden="true" />
        {{ conteudo.rotulo || 'Baixar arquivo' }}
      </a>
    </p>
    <p class="mt-2 text-sm text-tinta/80">
      <template v-if="ehZip">
        Extraia o zip, deixe os arquivos na mesma pasta e abra o
        <code class="fonte-codigo">index.html</code>
        no Chrome. JavaScript: F12 → Console.
      </template>
      <template v-else>
        Abra o arquivo no Chrome (dois cliques ou arrastar para a janela).
      </template>
      <NuxtLink to="/aprender/html-css/abrir-o-arquivo" class="underline text-cerrado ml-1">
        Como abrir
      </NuxtLink>
    </p>
  </div>
</template>
