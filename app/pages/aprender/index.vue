<script setup>
import { htmlCitarTrilhas } from '~/utils/trilhas.js'

const { data } = await useFetch('/api/trilhas')
useHead({ title: 'Aprenda — TechLearn' })

function rotuloTrilha(t) {
  if (!t?.publicada) return ''
  if (t.id === 'comecar') return 'O ponto de partida · ' + t.total_aulas + ' aulas'
  if (t.id === 'html-css') return 'Básico disponível · ' + t.total_aulas + ' aulas'
  if (t.id === 'javascript') return 'Básico, intermediário e avançado · ' + t.total_aulas + ' aulas'
  return t.total_aulas + ' aulas'
}
</script>

<template>
  <section class="mx-auto max-w-5xl px-4 py-10">
    <h1 class="font-display text-4xl">Aprenda</h1>
    <p class="mt-3 text-lg max-w-leitura">
      Comece pela trilha <NomeTrilha id="comecar" /> (pasta, VS Code, botão de baixar).
      Depois, <NomeTrilha id="html-css" />. O <NomeTrilha id="javascript" /> usa a página que o HTML monta.
    </p>
    <ul class="mt-8 space-y-4">
      <li
        v-for="t in data?.trilhas || []"
        :key="t.id"
        class="border border-linha rounded-md p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-white/50"
      >
        <div>
          <h2 class="font-display text-2xl">{{ t.titulo }}</h2>
          <p class="mt-1" v-html="htmlCitarTrilhas(t.descricao)" />
          <p v-if="t.id === 'html-css' || t.id === 'javascript'" class="mt-2 text-sm">
            Recomendado antes:
            <NomeTrilha id="comecar" />
            — não é obrigatório.
          </p>
          <p v-if="t.id === 'javascript'" class="mt-2 text-sm">
            Melhor depois da trilha
            <NomeTrilha id="html-css" />
            — recomendado, não obrigatório.
          </p>
          <p v-if="t.publicada" class="mt-1 text-sm text-tinta/70">
            {{ rotuloTrilha(t) }}
            <span v-if="typeof t.feitas === 'number'"> · {{ t.feitas }} feitas</span>
          </p>
          <p
            v-if="t.publicada && data?.logado && t.porNivel"
            class="mt-1 text-sm text-tinta/70"
          >
            <span v-if="t.porNivel.basico?.total">
              Básico {{ t.porNivel.basico.feitas }}/{{ t.porNivel.basico.total }}
            </span>
            <span v-if="t.porNivel.intermediario?.total">
              · Intermediário {{ t.porNivel.intermediario.feitas }}/{{ t.porNivel.intermediario.total }}
            </span>
            <span v-if="t.porNivel.avancado?.total">
              · Avançado {{ t.porNivel.avancado.feitas }}/{{ t.porNivel.avancado.total }}
            </span>
          </p>
        </div>
        <NuxtLink
          v-if="t.publicada"
          :to="`/aprender/${t.id}`"
          class="self-start bg-cerrado text-papel font-bold px-4 py-2 rounded-md inline-flex items-center gap-2"
        >
          Abrir
          <i class="pi pi-arrow-right" aria-hidden="true" />
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
