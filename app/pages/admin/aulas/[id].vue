<script setup>
definePageMeta({ middleware: 'admin' })
const route = useRoute()
const { data, refresh } = await useFetch(`/api/admin/aulas/${route.params.id}`)

const titulo = ref('')
const resumo = ref('')
const publicada = ref(false)
const tempo = ref(20)
const nivel = ref('basico')
const precisaPagina = ref(false)

watch(
  () => data.value?.aula,
  (a) => {
    if (!a) return
    titulo.value = a.titulo
    resumo.value = a.resumo
    publicada.value = a.publicada
    tempo.value = a.tempo_minutos
    nivel.value = a.nivel || 'basico'
    precisaPagina.value = Boolean(a.precisa_pagina)
  },
  { immediate: true },
)

const tipos = [
  { valor: 'texto', rotulo: 'Texto' },
  { valor: 'conceito', rotulo: 'Palavra nova' },
  { valor: 'codigo', rotulo: 'Código' },
  { valor: 'youtube', rotulo: 'Vídeo' },
  { valor: 'arquivo', rotulo: 'Arquivo para baixar' },
  { valor: 'imagem', rotulo: 'Imagem' },
  { valor: 'tente', rotulo: 'Você tenta' },
  { valor: 'exercicio', rotulo: 'Exercício' },
]

const tipoNovo = ref('texto')
const campos = reactive(camposVazios())
const editandoId = ref(null)
const salvando = ref(false)
const salvandoBloco = ref(false)

function camposVazios() {
  return {
    linguagem: 'javascript',
    markdown: '',
    termo: '',
    explicacao: '',
    codigo: '',
    video_id: '',
    titulo: '',
    canal: '',
    href: '',
    rotulo: '',
    src: '',
    alt: '',
    legenda: '',
    credito: '',
    instrucao: '',
    enunciado: '',
    resposta: '',
  }
}

function zerarCampos() {
  Object.assign(campos, camposVazios())
  tipoNovo.value = 'texto'
  editandoId.value = null
}

function conteudoDoTipo() {
  switch (tipoNovo.value) {
    case 'texto':
      return { markdown: campos.markdown }
    case 'conceito':
      return { termo: campos.termo, explicacao: campos.explicacao }
    case 'codigo':
      return { linguagem: campos.linguagem || 'javascript', codigo: campos.codigo }
    case 'youtube':
      return { video_id: campos.video_id.trim(), titulo: campos.titulo, canal: campos.canal }
    case 'arquivo':
      return { href: campos.href.trim(), rotulo: campos.rotulo || 'Baixar arquivo' }
    case 'imagem':
      return {
        src: campos.src.trim(),
        alt: campos.alt,
        legenda: campos.legenda,
        credito: campos.credito,
      }
    case 'tente':
      return { instrucao: campos.instrucao }
    case 'exercicio':
      return { enunciado: campos.enunciado, resposta: campos.resposta }
    default:
      return { markdown: campos.markdown }
  }
}

function preencherDe(bloco) {
  zerarCampos()
  editandoId.value = bloco.id
  tipoNovo.value = bloco.tipo
  const c = bloco.conteudo || {}
  campos.markdown = c.markdown || c.texto || ''
  campos.termo = c.termo || ''
  campos.explicacao = c.explicacao || ''
  campos.codigo = c.codigo || ''
  campos.linguagem = c.linguagem || 'javascript'
  campos.video_id = c.video_id || ''
  campos.titulo = c.titulo || ''
  campos.canal = c.canal || ''
  campos.href = c.href || ''
  campos.rotulo = c.rotulo || ''
  campos.src = c.src || ''
  campos.alt = c.alt || ''
  campos.legenda = c.legenda || ''
  campos.credito = c.credito || ''
  campos.instrucao = c.instrucao || ''
  campos.enunciado = c.enunciado || ''
  campos.resposta = c.resposta || ''
}

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
        nivel: nivel.value,
        precisa_pagina: precisaPagina.value,
      },
    })
    await refresh()
  } finally {
    salvando.value = false
  }
}

async function addOuSalvarBloco() {
  salvandoBloco.value = true
  try {
    if (editandoId.value) {
      await $fetch(`/api/admin/blocos/${editandoId.value}`, {
        method: 'PATCH',
        body: { tipo: tipoNovo.value, conteudo: conteudoDoTipo() },
      })
    } else {
      await $fetch(`/api/admin/aulas/${route.params.id}/blocos`, {
        method: 'POST',
        body: { tipo: tipoNovo.value, conteudo: conteudoDoTipo() },
      })
    }
    zerarCampos()
    await refresh()
  } finally {
    salvandoBloco.value = false
  }
}

async function apagar(id) {
  await $fetch(`/api/admin/blocos/${id}`, { method: 'DELETE' })
  if (editandoId.value === id) zerarCampos()
  await refresh()
}

async function mover(id, direcao) {
  await $fetch(`/api/admin/blocos/${id}/mover`, {
    method: 'POST',
    body: { direcao },
  })
  await refresh()
}

useHead({ title: 'Editar aula — TechLearn' })
</script>

<template>
  <section v-if="data" class="mx-auto max-w-3xl px-4 py-10">
    <NuxtLink to="/admin" class="underline text-cerrado">← lista</NuxtLink>
    <h1 class="font-display text-3xl mt-2">Editar aula</h1>
    <form class="mt-6 space-y-3" @submit.prevent="salvarMeta">
      <label class="block">Título
        <input v-model="titulo" class="mt-1 w-full border border-linha rounded px-2 py-1 bg-white" />
      </label>
      <label class="block">Resumo
        <textarea v-model="resumo" rows="3" class="mt-1 w-full border border-linha rounded px-2 py-1 bg-white" />
      </label>
      <label class="flex items-center gap-2">
        <input v-model="publicada" type="checkbox" /> Publicada
      </label>
      <label class="block">Nível
        <select v-model="nivel" class="mt-1 border border-linha rounded px-2 py-1 bg-white">
          <option value="basico">Básico</option>
          <option value="intermediario">Intermediário</option>
          <option value="avancado">Avançado</option>
        </select>
      </label>
      <label class="flex items-center gap-2">
        <input v-model="precisaPagina" type="checkbox" /> Precisa de página (aviso de HTML/CSS)
      </label>
      <label class="block">Minutos
        <input v-model.number="tempo" type="number" class="mt-1 w-24 border border-linha rounded px-2 py-1 bg-white" />
      </label>
      <button class="bg-mata text-papel px-3 py-1 rounded" :disabled="salvando">Salvar dados</button>
    </form>

    <h2 class="font-display text-2xl mt-10">Blocos</h2>
    <p class="mt-1 text-sm text-tinta/70">O preview é o mesmo que o aluno vê.</p>
    <ol class="mt-4 space-y-6">
      <li v-for="b in data.blocos" :key="b.id" class="border border-linha rounded-md p-3 bg-white/50">
        <div class="flex flex-wrap gap-2 text-sm mb-3">
          <span class="font-bold">{{ b.ordem }}. {{ tipos.find((t) => t.valor === b.tipo)?.rotulo || b.tipo }}</span>
          <button class="underline text-cerrado" type="button" @click="preencherDe(b)">editar</button>
          <button class="underline" type="button" @click="mover(b.id, 'cima')">subir</button>
          <button class="underline" type="button" @click="mover(b.id, 'baixo')">descer</button>
          <button class="underline text-cerrado" type="button" @click="apagar(b.id)">apagar</button>
        </div>
        <BlocoAula :bloco="b" />
      </li>
    </ol>

    <form class="mt-8 space-y-3 border border-linha rounded-md p-4 bg-white/40" @submit.prevent="addOuSalvarBloco">
      <h3 class="font-display text-xl">{{ editandoId ? 'Editar bloco' : 'Adicionar bloco' }}</h3>
      <label class="block">Tipo
        <select v-model="tipoNovo" class="mt-1 border border-linha rounded px-2 py-1 bg-white">
          <option v-for="t in tipos" :key="t.valor" :value="t.valor">{{ t.rotulo }}</option>
        </select>
      </label>

      <template v-if="tipoNovo === 'texto'">
        <label class="block">Texto (markdown simples)
          <textarea v-model="campos.markdown" rows="8" class="mt-1 w-full border border-linha rounded px-2 py-1 font-mono text-sm bg-white" />
        </label>
      </template>
      <template v-else-if="tipoNovo === 'conceito'">
        <label class="block">Termo
          <input v-model="campos.termo" class="mt-1 w-full border border-linha rounded px-2 py-1 bg-white" />
        </label>
        <label class="block">Explicação
          <textarea v-model="campos.explicacao" rows="4" class="mt-1 w-full border border-linha rounded px-2 py-1 bg-white" />
        </label>
      </template>
      <template v-else-if="tipoNovo === 'codigo'">
        <label class="block">Linguagem
          <select v-model="campos.linguagem" class="mt-1 border border-linha rounded px-2 py-1 bg-white">
            <option value="javascript">JavaScript</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
          </select>
        </label>
        <label class="block">Código
          <textarea v-model="campos.codigo" rows="8" class="mt-1 w-full border border-linha rounded px-2 py-1 font-mono text-sm bg-white" />
        </label>
      </template>
      <template v-else-if="tipoNovo === 'youtube'">
        <label class="block">ID do vídeo no YouTube
          <input v-model="campos.video_id" class="mt-1 w-full border border-linha rounded px-2 py-1 bg-white" />
        </label>
        <label class="block">Título
          <input v-model="campos.titulo" class="mt-1 w-full border border-linha rounded px-2 py-1 bg-white" />
        </label>
        <label class="block">Canal
          <input v-model="campos.canal" class="mt-1 w-full border border-linha rounded px-2 py-1 bg-white" />
        </label>
      </template>
      <template v-else-if="tipoNovo === 'arquivo'">
        <label class="block">Caminho (ex. /files/hello.js)
          <input v-model="campos.href" class="mt-1 w-full border border-linha rounded px-2 py-1 bg-white" />
        </label>
        <label class="block">Rótulo do botão
          <input v-model="campos.rotulo" class="mt-1 w-full border border-linha rounded px-2 py-1 bg-white" />
        </label>
      </template>
      <template v-else-if="tipoNovo === 'imagem'">
        <label class="block">Caminho (ex. /images/…)
          <input v-model="campos.src" class="mt-1 w-full border border-linha rounded px-2 py-1 bg-white" />
        </label>
        <label class="block">Alt (acessibilidade)
          <input v-model="campos.alt" class="mt-1 w-full border border-linha rounded px-2 py-1 bg-white" />
        </label>
        <label class="block">Legenda (só se ensina o desenho; senão deixe vazio)
          <input v-model="campos.legenda" class="mt-1 w-full border border-linha rounded px-2 py-1 bg-white" />
        </label>
        <label class="block">Crédito
          <input v-model="campos.credito" class="mt-1 w-full border border-linha rounded px-2 py-1 bg-white" />
        </label>
      </template>
      <template v-else-if="tipoNovo === 'tente'">
        <label class="block">Instrução
          <textarea v-model="campos.instrucao" rows="4" class="mt-1 w-full border border-linha rounded px-2 py-1 bg-white" />
        </label>
      </template>
      <template v-else>
        <label class="block">Enunciado
          <textarea v-model="campos.enunciado" rows="4" class="mt-1 w-full border border-linha rounded px-2 py-1 bg-white" />
        </label>
        <label class="block">Resposta (oculta até o aluno clicar em Consultar resposta)
          <textarea v-model="campos.resposta" rows="6" class="mt-1 w-full border border-linha rounded px-2 py-1 bg-white" />
        </label>
      </template>

      <div class="flex gap-3">
        <button class="bg-cerrado text-papel px-3 py-1 rounded" :disabled="salvandoBloco">
          {{ editandoId ? 'Guardar bloco' : 'Adicionar bloco' }}
        </button>
        <button v-if="editandoId" type="button" class="underline" @click="zerarCampos">Cancelar edição</button>
      </div>
    </form>
  </section>
</template>
