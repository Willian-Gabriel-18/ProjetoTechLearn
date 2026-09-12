<script setup>
const route = useRoute()
const { data, error } = await useFetch(`/api/trilhas/${route.params.trilha}`)
useHead({ title: () => `${data.value?.trilha?.titulo || 'Trilha'} — TechLearn` })
</script>

<template>
  <section class="mx-auto max-w-5xl px-4 py-10">
    <p v-if="error" class="border border-linha rounded-md p-6">
      <span class="font-display text-2xl block">Esta trilha abre em breve.</span>
      <span class="mt-2 block">Enquanto isso, siga o JavaScript iniciante.</span>
      <NuxtLink to="/aprender/iniciante" class="mt-4 inline-flex underline text-cerrado">
        Ir para o iniciante
      </NuxtLink>
    </p>
    <template v-else>
      <p class="text-sm">
        <NuxtLink to="/aprender" class="underline text-cerrado">Aprenda</NuxtLink>
      </p>
      <h1 class="font-display text-4xl mt-2">{{ data.trilha.titulo }}</h1>
      <p class="mt-3 text-lg max-w-leitura">{{ data.trilha.descricao }}</p>
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
      <ol class="mt-8 space-y-3">
        <li v-for="a in data.aulas" :key="a.id">
          <NuxtLink
            :to="`/aprender/${data.trilha.id}/${a.slug}`"
            class="flex gap-4 items-start border border-linha rounded-md p-4 hover:border-cerrado bg-white/50"
          >
            <span
              class="font-display text-2xl w-10 shrink-0"
              :class="a.feita ? 'text-mata' : 'text-mata'"
            >
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
    </template>
  </section>
</template>
