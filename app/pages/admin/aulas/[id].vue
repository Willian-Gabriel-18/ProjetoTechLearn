<script setup>
definePageMeta({ middleware: 'admin' })
const route = useRoute()
const { data, refresh } = await useFetch(`/api/admin/aulas/${route.params.id}`)

const titulo = ref('')
const resumo = ref('')
const publicada = ref(false)
const tempo = ref(20)

watch(
  () => data.value?.aula,
  (a) => {
    if (!a) return
    titulo.value = a.titulo
    resumo.value = a.resumo
    publicada.value = a.publicada
    tempo.value = a.tempo_minutos
  },
  { immediate: true },
)

const tipoNovo = ref('texto')
const campo = ref('')
const salvando = ref(false)

async function salvarMeta() {
  salvando.value = true
  try {
    await $fetch(`/api/admin/aulas/${route.params.id}`, {
      method: 'PATCH',
      body: {
        titulo: titulo.value,
        resumo: resumo.value,
        publicada: publicada.value,
        tempo_minutos: tempo.value,
      },
    })
    await refresh()
  } finally {
    salvando.value = false
  }
}

function conteudoDoTipo() {
  const t = campo.value
  switch (tipoNovo.value) {
    case 'texto':
      return { markdown: t }
    case 'conceito': {
      const [termo, ...rest] = t.split('\n')
      return { termo: termo.trim(), explicacao: rest.join('\n').trim() }
    }
    case 'codigo':
      return { linguagem: 'javascript', codigo: t }
    case 'youtube':
      return { video_id: t.trim(), titulo: 'Vídeo', canal: '' }
    case 'arquivo':
      return { href: t.trim(), rotulo: 'Baixar arquivo' }
    case 'imagem':
      return { src: t.trim(), alt: '', credito: '' }
    case 'tente':
      return { instrucao: t }
    case 'exercicio':
      return { enunciado: t }
    default:
      return { markdown: t }
  }
}

async function addBloco() {
  await $fetch(`/api/admin/aulas/${route.params.id}/blocos`, {
    method: 'POST',
    body: { tipo: tipoNovo.value, conteudo: conteudoDoTipo() },
  })
  campo.value = ''
  await refresh()
}

async function apagar(id) {
  await $fetch(`/api/admin/blocos/${id}`, { method: 'DELETE' })
  await refresh()
}
</script>

<template>
  <section v-if="data" class="mx-auto max-w-3xl px-4 py-10">
    <NuxtLink to="/admin" class="underline text-cerrado">← lista</NuxtLink>
    <h1 class="font-display text-3xl mt-2">Editar aula</h1>
    <form class="mt-6 space-y-3" @submit.prevent="salvarMeta">
      <label class="block">Título
        <input v-model="titulo" class="mt-1 w-full border border-linha rounded px-2 py-1" />
      </label>
      <label class="block">Resumo
        <textarea v-model="resumo" rows="3" class="mt-1 w-full border border-linha rounded px-2 py-1" />
      </label>
      <label class="flex items-center gap-2">
        <input v-model="publicada" type="checkbox" /> Publicada
      </label>
      <label class="block">Minutos
        <input v-model.number="tempo" type="number" class="mt-1 w-24 border border-linha rounded px-2 py-1" />
      </label>
      <button class="bg-mata text-papel px-3 py-1 rounded" :disabled="salvando">Salvar dados</button>
    </form>

    <h2 class="font-display text-2xl mt-10">Blocos</h2>
    <ol class="mt-4 space-y-2">
      <li v-for="b in data.blocos" :key="b.id" class="border border-linha p-3 rounded flex justify-between gap-2">
        <span><b>{{ b.ordem }}. {{ b.tipo }}</b> — {{ JSON.stringify(b.conteudo).slice(0, 80) }}</span>
        <button class="text-cerrado underline" type="button" @click="apagar(b.id)">apagar</button>
      </li>
    </ol>

    <form class="mt-6 space-y-2" @submit.prevent="addBloco">
      <label class="block">Tipo
        <select v-model="tipoNovo" class="mt-1 border border-linha rounded px-2 py-1">
          <option>texto</option>
          <option>conceito</option>
          <option>codigo</option>
          <option>youtube</option>
          <option>arquivo</option>
          <option>imagem</option>
          <option>tente</option>
          <option>exercicio</option>
        </select>
      </label>
      <label class="block">Conteúdo (conceito: termo na 1ª linha, explicação abaixo)
        <textarea v-model="campo" rows="6" class="mt-1 w-full border border-linha rounded px-2 py-1 font-mono text-sm" />
      </label>
      <button class="bg-cerrado text-papel px-3 py-1 rounded">Adicionar bloco</button>
    </form>
  </section>
</template>
