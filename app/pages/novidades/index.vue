<script setup>
const { data } = await useFetch('/api/noticias')
useHead({ title: 'Novidades — TechLearn' })
</script>

<template>
  <section class="mx-auto max-w-5xl px-4 py-10">
    <h1 class="font-display text-4xl">Novidades</h1>
    <p class="mt-3 text-lg max-w-leitura">
      Textos sobre tecnologia, completos e em linguagem simples. Cada texto pode complementar uma
      aula ou só apresentar um tema.
    </p>
    <ul v-if="data?.noticias?.length" class="mt-8 space-y-4">
      <li v-for="n in data.noticias" :key="n.id" class="border border-linha rounded-md overflow-hidden bg-white/40">
        <NuxtLink :to="`/novidades/${n.slug}`" class="block md:flex gap-4 items-stretch">
          <span
            v-if="n.imagem_capa"
            class="block w-full md:w-64 h-40 shrink-0 bg-papel"
          >
            <img
              :src="n.imagem_capa"
              :alt="n.titulo"
              class="w-full h-full object-contain p-2"
            />
          </span>
          <span class="block p-4">
            <span class="font-display text-2xl underline text-cerrado inline-flex items-center gap-2">
              <i class="pi pi-file" aria-hidden="true" />
              {{ n.titulo }}
            </span>
            <span class="mt-1 block">{{ n.resumo }}</span>
          </span>
        </NuxtLink>
      </li>
    </ul>
    <p v-else class="mt-8 border border-linha p-4 rounded-md">
      Ainda não publicamos novidades. Enquanto isso, comece pela trilha
      <NomeTrilha id="comecar" />.
    </p>
  </section>
</template>
