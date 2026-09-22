<script setup>
const { data } = await useFetch('/api/trilhas')
useHead({
  title: 'TechLearn — comece por aqui',
  meta: [
    {
      name: 'description',
      content: 'Tutoriais de tecnologia claros e lineares, de graça, para quem está começando.',
    },
  ],
})

function rotuloTrilha(t) {
  if (!t?.publicada) return ''
  if (t.id === 'comecar') return 'O ponto de partida · ' + t.total_aulas + ' aulas'
  if (t.id === 'html-css') return 'Básico disponível · ' + t.total_aulas + ' aulas'
  if (t.id === 'javascript') return 'Básico, intermediário e avançado · ' + t.total_aulas + ' aulas'
  return t.total_aulas + ' aulas'
}
</script>

<template>
  <div>
    <section class="mx-auto max-w-5xl px-4 pt-10 pb-6 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 class="font-display text-4xl md:text-6xl leading-tight text-tinta break-words">
          Aprenda tecnologia sem pressa e sem enrolação.
        </h1>
        <p class="mt-4 text-lg md:text-xl text-tinta/80 max-w-md">
          Aulas de graça para quem está começando. Abre a primeira trilha e tenta.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <NuxtLink
            v-if="data?.continuar"
            :to="`/aprender/${data.continuar.trilha_id}/${data.continuar.slug}`"
            class="inline-flex items-center gap-2 bg-mata text-papel font-bold px-5 py-3 rounded-md hover:opacity-90"
          >
            <i class="pi pi-play" aria-hidden="true" />
            Continuar: {{ data.continuar.titulo }}
          </NuxtLink>
          <p
            v-else-if="data?.trilhaConcluida"
            class="inline-flex items-center gap-2 text-mata font-bold"
          >
            <i class="pi pi-check-circle" aria-hidden="true" />
            Você concluiu as trilhas abertas.
          </p>
          <NuxtLink
            v-if="!data?.continuar && !data?.trilhaConcluida"
            to="/aprender/comecar"
            class="inline-flex items-center gap-2 bg-mata text-papel font-bold px-5 py-3 rounded-md hover:opacity-90"
          >
            <i class="pi pi-book" aria-hidden="true" />
            Começar por aqui
          </NuxtLink>
          <NuxtLink
            to="/aprender"
            class="inline-flex items-center gap-2 border border-linha px-5 py-3 rounded-md hover:border-cerrado"
          >
            Ver trilhas
          </NuxtLink>
        </div>
      </div>
      <div class="hidden md:block">
        <img
          src="/images/hero.jpg"
          alt="Cadernos e notebooks numa mesa de estudo"
          class="rounded-md border-4 border-linha object-cover h-[22rem] w-full"
        />
      </div>
    </section>

    <section class="mx-auto max-w-5xl px-4 py-8">
      <h2 class="font-display text-2xl md:text-3xl">As trilhas</h2>
      <p class="mt-2 text-tinta/80">
        Primeiro a trilha Antes de começar. Depois HTML e CSS. O JavaScript usa a página que você monta lá.
      </p>
      <ol class="mt-6 grid md:grid-cols-3 gap-4">
        <li
          v-for="t in data?.trilhas || []"
          :key="t.id"
          class="border border-linha rounded-md p-4 bg-white/40 flex flex-col"
          :class="t.publicada ? '' : 'opacity-90'"
        >
          <p class="text-sm text-cerrado">{{ t.ordem }}º</p>
          <h3 class="font-display text-xl mt-1">{{ t.titulo }}</h3>
          <p class="mt-2 text-sm leading-relaxed flex-1">{{ t.descricao }}</p>
          <p v-if="t.publicada" class="mt-3 text-sm">
            {{ rotuloTrilha(t) }}
            <span v-if="typeof t.feitas === 'number'"> · {{ t.feitas }} feitas</span>
          </p>
          <p
            v-if="t.publicada && data?.logado && t.porNivel"
            class="mt-1 text-xs text-tinta/70"
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
          <NuxtLink
            v-if="t.publicada"
            :to="`/aprender/${t.id}`"
            class="mt-3 inline-flex items-center gap-1 underline text-cerrado underline-offset-4"
          >
            Entrar na trilha
            <i class="pi pi-arrow-right text-xs" aria-hidden="true" />
          </NuxtLink>
        </li>
      </ol>
    </section>
  </div>
</template>
