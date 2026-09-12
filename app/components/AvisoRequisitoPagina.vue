<script setup>
defineProps({
  // Na listagem da trilha o aviso é geral; na aula, o mesmo texto.
  compacto: { type: Boolean, default: false },
})
</script>

<template>
  <aside
    class="my-6 border border-linha rounded-md p-4 bg-postit/60"
    role="note"
  >
    <p class="font-bold inline-flex items-center gap-2">
      <i class="pi pi-info-circle" aria-hidden="true" />
      Recomendado antes
    </p>
    <p class="mt-2 leading-relaxed" :class="compacto ? 'text-sm' : ''">
      Esta aula usa uma página em HTML e CSS. Se você ainda não fez o
      <NuxtLink to="/aprender/html-css" class="underline text-cerrado font-bold">
        HTML e CSS básico
      </NuxtLink>,
      começa por lá — é recomendado, não obrigatório.
    </p>
  </aside>
</template>
