<script setup>
const route = useRoute()
const { data, error } = await useFetch(`/api/trilhas/${route.params.trilha}`)
useHead({ title: () => `${data.value?.trilha?.titulo || 'Trilha'} — TechLearn` })

const niveis = [
  { id: 'basico', titulo: 'Básico' },
  { id: 'intermediario', titulo: 'Intermediário' },
  { id: 'avancado', titulo: 'Avançado' },
]

function aulasDoNivel(id) {
  return (data.value?.aulas || []).filter((a) => a.nivel === id)
}

function progressoNivel(id) {
  return data.value?.resumoProgresso?.porNivel?.[id] || null
}

const soUmNivel = computed(() => niveis.filter((nv) => aulasDoNivel(nv.id).length).length <= 1)
</script>

<template>
  <section class="mx-auto max-w-5xl px-4 py-10">
    <p v-if="error" class="border border-linha rounded-md p-6">
      <span class="font-display text-2xl block">Esta trilha ainda não está no ar.</span>
      <span class="mt-2 block">Enquanto isso, comece por Antes de começar.</span>
      <NuxtLink to="/aprender/comecar" class="mt-4 inline-flex underline text-cerrado">
        Ir para Antes de começar
      </NuxtLink>
    </p>
    <template v-else>
      <p class="text-sm">
        <NuxtLink to="/aprender" class="underline text-cerrado">Aprenda</NuxtLink>
      </p>
      <h1 class="font-display text-4xl mt-2">{{ data.trilha.titulo }}</h1>
      <p class="mt-3 text-lg max-w-leitura">{{ data.trilha.descricao }}</p>
      <AvisoAntesDeComecar v-if="data.trilha.id === 'html-css' || data.trilha.id === 'javascript'" />
      <AvisoRequisitoPagina v-if="data.trilha.id === 'javascript'" />
      <p v-if="data.resumoProgresso" class="mt-4 text-sm">
        {{ data.resumoProgresso.feitas }} de {{ data.resumoProgresso.total }} aulas
      </p>
      <div
        v-if="data.resumoProgresso"
        class="mt-2 h-2 max-w-md rounded-full bg-linha overflow-hidden"
        role="progressbar"
        :aria-valuenow="data.resumoProgresso.feitas"
        :aria-valuemin="0"
        :aria-valuemax="data.resumoProgresso.total"
      >
        <div
          class="h-full bg-mata"
          :style="{
            width:
              data.resumoProgresso.total > 0
                ? `${Math.round((100 * data.resumoProgresso.feitas) / data.resumoProgresso.total)}%`
                : '0%',
          }"
        />
      </div>

      <section
        v-for="nv in niveis"
        v-show="aulasDoNivel(nv.id).length"
        :key="nv.id"
        class="mt-10"
      >
        <h2 v-if="!soUmNivel" class="font-display text-2xl">{{ nv.titulo }}</h2>
        <p v-if="progressoNivel(nv.id)?.total" class="mt-1 text-sm text-tinta/70">
          {{ progressoNivel(nv.id).feitas }} de {{ progressoNivel(nv.id).total }} aulas
        </p>
        <div
          v-if="progressoNivel(nv.id)?.total"
          class="mt-2 h-2 max-w-xs rounded-full bg-linha overflow-hidden"
          role="progressbar"
          :aria-valuenow="progressoNivel(nv.id).feitas"
          :aria-valuemin="0"
          :aria-valuemax="progressoNivel(nv.id).total"
          :aria-label="'Progresso do ' + nv.titulo"
        >
          <div
            class="h-full bg-mata"
            :style="{
              width: `${Math.round(
                (100 * progressoNivel(nv.id).feitas) / progressoNivel(nv.id).total,
              )}%`,
            }"
          />
        </div>
        <ol class="mt-4 space-y-3">
          <li v-for="a in aulasDoNivel(nv.id)" :key="a.id">
            <NuxtLink
              :to="`/aprender/${data.trilha.id}/${a.slug}`"
              class="flex gap-4 items-start border border-linha rounded-md p-4 hover:border-cerrado bg-white/50"
            >
              <span class="font-display text-2xl w-10 shrink-0 text-mata">
                <i v-if="a.feita" class="pi pi-check-circle" aria-hidden="true" />
                <template v-else>{{ a.ordem }}</template>
              </span>
              <span>
                <span class="font-bold">{{ a.titulo }}</span>
                <span
                  v-if="a.tipo === 'projeto'"
                  class="ml-2 text-xs px-2 py-0.5 rounded bg-postit"
                >mini-projeto</span>
                <span
                  v-if="a.feita"
                  class="ml-2 text-xs px-2 py-0.5 rounded bg-[#e7f0ea] text-mata"
                >feita</span>
                <span class="block text-sm mt-1 text-tinta/80">{{ a.resumo }} · {{ a.tempo_minutos }} min</span>
              </span>
            </NuxtLink>
          </li>
        </ol>
      </section>

      <p
        v-if="data.trilha.id === 'html-css'"
        class="mt-10 max-w-leitura leading-relaxed border border-linha rounded-md p-4 bg-white/40"
      >
        O básico desta trilha está no ar. Mais HTML e CSS (layout, página no celular) entram
        depois. Agora o próximo passo é o
        <NuxtLink to="/aprender/javascript" class="underline text-cerrado font-bold">JavaScript</NuxtLink>.
      </p>
    </template>
  </section>
</template>
