<script setup>
definePageMeta({ middleware: 'admin' })
const { data } = await useFetch('/api/admin/aulas')
useHead({ title: 'Admin — TechLearn' })
</script>

<template>
  <section class="mx-auto max-w-5xl px-4 py-10">
    <h1 class="font-display text-3xl">Aulas</h1>
    <p class="mt-2">Edite título, publicação e blocos. Um bloco de cada vez, com o preview da aula. Sem editor tipo Word.</p>
    <table class="mt-6 w-full text-left text-sm border border-linha">
      <thead class="bg-linha/40">
        <tr>
          <th class="p-2">Trilha</th>
          <th class="p-2">Nível</th>
          <th class="p-2">Ordem</th>
          <th class="p-2">Título</th>
          <th class="p-2">Blocos</th>
          <th class="p-2">Pub</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in data?.aulas || []" :key="a.id" class="border-t border-linha">
          <td class="p-2">{{ a.trilha_id }}</td>
          <td class="p-2">{{ a.nivel }}</td>
          <td class="p-2">{{ a.ordem }}</td>
          <td class="p-2">
            <NuxtLink :to="`/admin/aulas/${a.id}`" class="underline text-cerrado">{{ a.titulo }}</NuxtLink>
          </td>
          <td class="p-2">{{ a.blocos }}</td>
          <td class="p-2">{{ a.publicada ? 'sim' : 'não' }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
