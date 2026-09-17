<script setup>
definePageMeta({ middleware: 'admin' })
const { data, error } = await useFetch('/api/admin/aulas')
useHead({ title: 'Admin — TechLearn' })
</script>

<template>
  <section class="mx-auto max-w-5xl px-4 py-10">
    <h1 class="font-display text-3xl">Aulas</h1>
    <p class="mt-2">Edite título, publicação e blocos. Um bloco de cada vez, com o preview da aula. Sem editor tipo Word.</p>
    <p class="mt-3 rounded-md border border-postit bg-[#fbf6e4] px-3 py-2 text-sm">
      O texto das aulas publicadas também vive no seed (<span class="fonte-codigo">db/seed-blocos/</span>).
      Se o seed rodar de novo, as edições de <strong>bloco</strong> voltam para o arquivo.
    </p>
    <p v-if="error" class="mt-6 text-cerrado">
      {{
        error.statusCode === 401 || error.statusCode === 403
          ? 'Entre de novo como admin.'
          : 'Não deu para carregar as aulas.'
      }}
    </p>
    <p v-else-if="data && !data.aulas?.length" class="mt-6">Nenhuma aula no banco.</p>
    <table v-else class="mt-6 w-full text-left text-sm border border-linha">
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
