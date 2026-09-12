<script setup>
const { data } = await useFetch('/api/trilhas')
useHead({ title: 'Aprenda — TechLearn' })
</script>

<template>
  <section class="mx-auto max-w-5xl px-4 py-10">
    <h1 class="font-display text-4xl">Aprenda</h1>
    <p class="mt-3 text-lg max-w-leitura">
      Uma trilha de cada vez. Não pule o iniciante: cada aula usa o que a anterior ensinou.
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
          <p class="mt-1 text-sm text-tinta/70">{{ t.total_aulas }} aulas · {{ t.publicada ? 'aberta' : 'em breve / rascunho' }}</p>
        </div>
        <NuxtLink
          :to="`/aprender/${t.id}`"
          class="self-start bg-cerrado text-papel font-bold px-4 py-2 rounded-md"
        >
          Abrir
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
