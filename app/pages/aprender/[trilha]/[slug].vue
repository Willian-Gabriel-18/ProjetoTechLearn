<script setup>
const route = useRoute()
const { usuario, carregar } = useAuth()
const { data, error } = await useFetch(
  `/api/aulas/${route.params.trilha}/${route.params.slug}`,
)

useHead({ title: () => `${data.value?.aula?.titulo || 'Aula'} — TechLearn` })

onMounted(() => {
  if (!usuario.value) carregar()
})

const marcando = ref(false)
async function marcarFeita() {
  if (!data.value?.aula) return
  marcando.value = true
  const antes = data.value.feita
  data.value.feita = true
  try {
    await $fetch('/api/progresso', {
      method: 'POST',
      body: { aulaId: data.value.aula.id },
    })
  } catch (e) {
    data.value.feita = antes
    throw e
  } finally {
    marcando.value = false
  }
}

async function desmarcarFeita() {
  if (!data.value?.aula) return
  marcando.value = true
  const antes = data.value.feita
  data.value.feita = false
  try {
    await $fetch('/api/progresso', {
      method: 'DELETE',
      body: { aulaId: data.value.aula.id },
    })
  } catch (e) {
    data.value.feita = antes
    throw e
  } finally {
    marcando.value = false
  }
}
</script>

<template>
  <article class="mx-auto max-w-leitura px-4 py-10 min-w-0 overflow-x-clip">
    <p v-if="error" class="text-cerrado">
      {{ error.statusCode === 403 ? 'Esta trilha abre em breve.' : 'Aula não encontrada.' }}
    </p>
    <template v-else-if="data">
      <p class="text-sm">
        <NuxtLink :to="`/aprender/${data.aula.trilha_id}`" class="underline text-cerrado">
          {{ data.aula.trilha_titulo }}
        </NuxtLink>
      </p>
      <p class="mt-2 text-sm text-tinta/70">
        {{
          data.aula.nivel === 'intermediario'
            ? 'Intermediário'
            : data.aula.nivel === 'avancado'
              ? 'Avançado'
              : 'Básico'
        }}
        · aula {{ data.aula.ordem }} · {{ data.aula.tempo_minutos }} min
        <span v-if="data.aula.tipo === 'projeto'"> · mini-projeto</span>
      </p>
      <h1 class="font-display text-3xl sm:text-4xl md:text-5xl mt-2 leading-tight break-words">{{ data.aula.titulo }}</h1>
      <p class="mt-4 text-xl leading-relaxed">{{ data.aula.resumo }}</p>

      <AvisoRequisitoPagina v-if="data.aula.precisa_pagina" />

      <p v-if="!data.blocos?.length" class="mt-8 border border-linha p-4 rounded-md">
        O texto desta aula ainda está sendo preparado. Volte em breve.
      </p>

      <div class="mt-8 space-y-6 border-t border-linha pt-6">
        <BlocoAula v-for="b in data.blocos" :key="b.id" :bloco="b" />
      </div>

      <div class="mt-10 flex flex-col gap-3">
        <p v-if="data.feita" class="text-mata font-bold inline-flex items-center gap-2">
          <i class="pi pi-check-circle" aria-hidden="true" />
          Você já marcou esta aula como feita.
        </p>
        <button
          v-if="data.logado && !data.feita"
          type="button"
          class="self-start bg-mata text-papel font-bold px-4 py-2 rounded-md disabled:opacity-60 inline-flex items-center gap-2"
          :disabled="marcando"
          @click="marcarFeita"
        >
          <i class="pi pi-check" aria-hidden="true" />
          Marcar como feita
        </button>
        <button
          v-else-if="data.logado && data.feita"
          type="button"
          class="self-start border border-linha px-4 py-2 rounded-md disabled:opacity-60 inline-flex items-center gap-2"
          :disabled="marcando"
          @click="desmarcarFeita"
        >
          Desmarcar
        </button>
        <p v-else class="text-sm">
          Quer guardar o progresso?
          <NuxtLink to="/entrar" class="underline text-cerrado">Entre</NuxtLink>
          ou
          <NuxtLink to="/cadastrar" class="underline text-cerrado">crie uma conta</NuxtLink>.
          A aula você já pode ler de graça.
        </p>
      </div>

      <nav class="mt-10 flex justify-between gap-4 border-t border-linha pt-6" aria-label="Aulas">
        <NuxtLink
          v-if="data.anterior"
          :to="`/aprender/${data.aula.trilha_id}/${data.anterior.slug}`"
          class="underline text-cerrado"
        >
          ← {{ data.anterior.titulo }}
        </NuxtLink>
        <span v-else />
        <NuxtLink
          v-if="data.proxima"
          :to="`/aprender/${data.aula.trilha_id}/${data.proxima.slug}`"
          class="bg-cerrado text-papel font-bold px-4 py-2 rounded-md"
        >
          Próxima aula
        </NuxtLink>
        <span v-else class="flex flex-col sm:flex-row gap-3 sm:items-center">
          <NuxtLink
            v-if="data.aula.trilha_id === 'html-css'"
            to="/aprender/javascript/o-que-e-javascript"
            class="bg-cerrado text-papel font-bold px-4 py-2 rounded-md text-center"
          >
            Começar o JavaScript
          </NuxtLink>
          <NuxtLink
            :to="`/aprender/${data.aula.trilha_id}`"
            class="underline text-cerrado"
          >
            Voltar à trilha
          </NuxtLink>
        </span>
      </nav>
    </template>
  </article>
</template>
