<script setup>
setResponseStatus(404)
</script>

<template>
  <section class="mx-auto max-w-leitura px-4 py-20 text-center">
    <h1 class="font-display text-4xl">Não achamos essa página</h1>
    <p class="mt-4 text-lg">Pode ser um endereço antigo. Tente o início ou as aulas.</p>
    <p class="mt-6 flex justify-center gap-4">
      <NuxtLink to="/" class="underline text-cerrado">Início</NuxtLink>
      <NuxtLink to="/aprender" class="underline text-cerrado">Aprenda</NuxtLink>
    </p>
  </section>
</template>
