<script setup>
defineProps({
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
      Pasta, VS Code e o botão de baixar ficam na trilha
      <NuxtLink to="/aprender/comecar" class="underline text-cerrado font-bold">
        Antes de começar
      </NuxtLink>.
      É recomendado, não obrigatório.
    </p>
  </aside>
</template>
