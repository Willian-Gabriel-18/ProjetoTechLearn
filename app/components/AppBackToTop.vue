<script setup>
// O header sticky tem id="topo" e já está na tela — âncora #topo não rola.
function irAoTopo() {
  const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, left: 0, behavior: reduzir ? 'auto' : 'smooth' })
}
</script>

<template>
  <button
    type="button"
    class="fixed z-50 right-4 bottom-4 w-12 h-12 rounded-full bg-cerrado text-papel flex items-center justify-center shadow-md hover:bg-tinta"
    aria-label="Voltar ao topo"
    @click="irAoTopo"
  >
    <i class="pi pi-arrow-up" aria-hidden="true" />
  </button>
</template>
