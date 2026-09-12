<script setup>
const { data } = await useFetch('/api/trilhas')
useHead({ title: 'TechLearn — comece por aqui' })
</script>

<template>
  <div>
    <section class="mx-auto max-w-5xl px-4 pt-10 pb-6 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 class="font-display text-4xl md:text-6xl leading-tight text-tinta">
          Aprenda JavaScript sem pressa e sem enrolação.
        </h1>
        <p class="mt-4 text-lg md:text-xl text-tinta/80 max-w-md">
          Aulas curtas, uma depois da outra. Feito para quem tem pouco tempo em Gurupi/TO — e para quem acompanha de qualquer lugar.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <NuxtLink
            to="/aprender/iniciante"
            class="inline-flex items-center gap-2 bg-mata text-papel font-bold px-5 py-3 rounded-md hover:opacity-90"
          >
            Começar pelo iniciante
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
      <h2 class="font-display text-2xl md:text-3xl">Três caminhos</h2>
      <p class="mt-2 text-tinta/80">Termine o iniciante. Depois o intermediário. Só então o avançado.</p>
      <ol class="mt-6 grid md:grid-cols-3 gap-4">
        <li
          v-for="t in data?.trilhas || []"
          :key="t.id"
          class="border border-linha rounded-md p-4 bg-white/40"
        >
          <p class="text-sm text-cerrado">{{ t.ordem }}º</p>
          <h3 class="font-display text-xl mt-1">{{ t.titulo }}</h3>
          <p class="mt-2 text-sm leading-relaxed">{{ t.descricao }}</p>
          <p class="mt-3 text-sm">{{ t.total_aulas }} aulas</p>
          <NuxtLink
            :to="`/aprender/${t.id}`"
            class="mt-3 inline-block underline text-cerrado underline-offset-4"
          >
            {{ t.publicada ? 'Entrar na trilha' : 'Ver o que vem' }}
          </NuxtLink>
        </li>
      </ol>
    </section>
  </div>
</template>
