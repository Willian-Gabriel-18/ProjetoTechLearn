<script setup>
const { data } = await useFetch('/api/trilhas')
useHead({ title: 'Aprenda — TechLearn' })
</script>

<template>
  <section class="mx-auto max-w-5xl px-4 py-10">
    <h1 class="font-display text-4xl">Aprenda</h1>
    <p class="mt-3 text-lg max-w-leitura">
      Comece pelo HTML e CSS básico. O JavaScript usa o que essa trilha ensina.
    </p>
    <ul class="mt-8 space-y-4">
      <li
        v-for="t in data?.trilhas || []"
        :key="t.id"
        class="border border-linha rounded-md p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-white/50"
      >
        <div>
          <h2 class="font-display text-2xl">{{ t.titulo }}</h2>
          <p class="mt-1">{{ t.descricao }}</p>
          <p v-if="t.id === 'javascript'" class="mt-2 text-sm">
            Usa o
            <NuxtLink to="/aprender/html-css" class="underline text-cerrado">HTML e CSS básico</NuxtLink>
            (recomendado, não obrigatório).
          </p>
          <p v-if="t.publicada" class="mt-1 text-sm text-tinta/70">
            {{ t.total_aulas }} aulas
            <span v-if="typeof t.feitas === 'number'"> · {{ t.feitas }} feitas</span>
          </p>
          <p v-if="t.porNivel" class="mt-1 text-sm text-tinta/70">
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
          <p v-else class="mt-1 text-sm text-tinta/70">Em breve — ainda não dá para entrar.</p>
        </div>
        <NuxtLink
          v-if="t.publicada"
          :to="`/aprender/${t.id}`"
          class="self-start bg-cerrado text-papel font-bold px-4 py-2 rounded-md inline-flex items-center gap-2"
        >
          Abrir
          <i class="pi pi-arrow-right" aria-hidden="true" />
        </NuxtLink>
        <p
          v-else
          class="self-start inline-flex items-center gap-2 px-4 py-2 rounded-md border border-linha text-tinta/60 font-bold"
        >
          <i class="pi pi-lock" aria-hidden="true" />
          Em breve
        </p>
      </li>
    </ul>
  </section>
</template>
