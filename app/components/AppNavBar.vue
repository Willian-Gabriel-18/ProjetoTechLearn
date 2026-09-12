<script setup>
const route = useRoute()
const { usuario, carregar, sair } = useAuth()

onMounted(() => {
  if (!usuario.value) carregar()
})

function ativo(path) {
  if (path === '/') return route.path === '/'
  return route.path === path || route.path.startsWith(path + '/')
}
</script>

<template>
  <header id="topo" class="border-b border-linha bg-papel/90 backdrop-blur-sm sticky top-0 z-40">
    <div class="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between gap-3">
      <NuxtLink
        to="/"
        class="font-display italic text-xl md:text-2xl text-tinta hover:text-cerrado"
      >
        TechLearn
      </NuxtLink>
      <nav aria-label="Principal">
        <ul class="flex items-center gap-1 md:gap-3 text-sm md:text-base">
          <li>
            <NuxtLink
              to="/"
              class="px-2 py-1 rounded-md"
              :class="ativo('/') && route.path === '/' ? 'bg-linha/70' : 'hover:text-cerrado'"
            >
              Início
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/aprender"
              class="px-2 py-1 rounded-md"
              :class="ativo('/aprender') ? 'bg-linha/70' : 'hover:text-cerrado'"
            >
              Aprenda
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/novidades"
              class="px-2 py-1 rounded-md"
              :class="ativo('/novidades') ? 'bg-linha/70' : 'hover:text-cerrado'"
            >
              Novidades
            </NuxtLink>
          </li>
          <li v-if="usuario?.papel === 'admin'">
            <NuxtLink to="/admin" class="px-2 py-1 rounded-md hover:text-cerrado">Admin</NuxtLink>
          </li>
          <li v-if="usuario">
            <button type="button" class="px-2 py-1 hover:text-cerrado" @click="sair">Sair</button>
          </li>
          <li v-else>
            <NuxtLink to="/entrar" class="px-2 py-1 rounded-md hover:text-cerrado">Entrar</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
