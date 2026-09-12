<script setup>
const props = defineProps({ conteudo: { type: Object, default: () => ({}) } })
const copiado = ref(false)

async function copiar() {
  const t = props.conteudo?.codigo || ''
  try {
    await navigator.clipboard.writeText(t)
    copiado.value = true
    setTimeout(() => {
      copiado.value = false
    }, 1500)
  } catch {
    copiado.value = false
  }
}
</script>

<template>
  <div class="my-6 relative rounded-md bg-[#1c1917] text-papel overflow-x-auto">
    <button
      type="button"
      class="absolute top-2 right-2 text-sm px-2 py-1 rounded bg-white/10 hover:bg-white/20"
      @click="copiar"
    >
      {{ copiado ? 'Copiado' : 'Copiar' }}
    </button>
    <pre class="p-4 pt-10 text-sm md:text-base font-mono whitespace-pre-wrap">{{ conteudo.codigo }}</pre>
  </div>
</template>
