<script setup>
const route = useRoute()
const { data, error } = await useFetch(`/api/trilhas/${route.params.trilha}`)
useHead({ title: () => `${data.value?.trilha?.titulo || 'Trilha'} — TechLearn` })
</script>

<template>
  <section class="mx-auto max-w-5xl px-4 py-10">
    <p v-if="error" class="text-cerrado">Essa trilha não existe.</p>
    <template v-else>
      <p class="text-sm">
        <NuxtLink to="/aprender" class="underline text-cerrado">Aprenda</NuxtLink>
      </p>
      <h1 class="font-display text-4xl mt-2">{{ data.trilha.titulo }}</h1>
      <p class="mt-3 text-lg max-w-leitura">{{ data.trilha.descricao }}</p>
      <ol class="mt-8 space-y-3">
        <li v-for="a in data.aulas" :key="a.id">
          <NuxtLink
            :to="`/aprender/${data.trilha.id}/${a.slug}`"
            class="flex gap-4 items-start border border-linha rounded-md p-4 hover:border-cerrado bg-white/50"
          >
            <span class="font-display text-2xl text-mata w-10 shrink-0">{{ a.ordem }}</span>
            <span>
              <span class="font-bold">{{ a.titulo }}</span>
              <span
                v-if="a.tipo === 'projeto'"
                class="ml-2 text-xs px-2 py-0.5 rounded bg-postit"
              >mini-projeto</span>
              <span class="block text-sm mt-1 text-tinta/80">{{ a.resumo }} · {{ a.tempo_minutos }} min</span>
            </span>
          </NuxtLink>
        </li>
      </ol>
    </template>
  </section>
</template>
