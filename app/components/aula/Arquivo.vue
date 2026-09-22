<script setup>
const props = defineProps({ conteudo: { type: Object, default: () => ({}) } })
const ehZip = computed(() => String(props.conteudo?.href || '').toLowerCase().endsWith('.zip'))
</script>

<template>
  <aside
    class="my-6 border-2 border-cerrado rounded-md p-4 bg-postit/60"
    role="note"
  >
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
    <p class="mt-3 font-bold inline-flex items-center gap-2">
      <i class="pi pi-folder-open" aria-hidden="true" />
      Como abrir
    </p>
    <p class="mt-2 leading-relaxed">
      <template v-if="ehZip">
        Extraia o zip. Deixe os arquivos na <strong>mesma pasta</strong>. Abra o
        <code class="fonte-codigo">index.html</code>
        no Chrome (dois cliques ou arrastar para a janela). Não abra o
        <code class="fonte-codigo">.css</code>
        nem o
        <code class="fonte-codigo">.js</code>
        como se fossem a página.
      </template>
      <template v-else>
        Se for
        <code class="fonte-codigo">.html</code>,
        abra no Chrome. Se for
        <code class="fonte-codigo">.js</code>
        ou
        <code class="fonte-codigo">.css</code>,
        abra no VS Code.
      </template>
    </p>
    <p class="mt-3">
      <NuxtLink
        to="/aprender/comecar/baixar-e-abrir"
        class="underline text-cerrado font-bold"
      >
        Não lembra como baixar e abrir?
      </NuxtLink>
    </p>
    <p class="mt-2">
      <NuxtLink
        to="/aprender/comecar/duas-bancadas"
        class="underline text-cerrado font-bold"
      >
        Onde testar: pasta e Chrome, ou Console?
      </NuxtLink>
    </p>
  </aside>
</template>
