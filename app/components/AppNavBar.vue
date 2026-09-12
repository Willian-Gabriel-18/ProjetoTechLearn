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
  <header class="border-b border-linha bg-papel/90 backdrop-blur-sm sticky top-0 z-40">
    <div class="mx-auto max-w-5xl px-4 py-3 flex flex-wrap items-center justify-between gap-x-2 gap-y-2 min-w-0">
      <NuxtLink
        to="/"
        class="font-display italic text-xl md:text-2xl text-tinta hover:text-cerrado shrink-0"
      >
        TechLearn
      </NuxtLink>
      <nav aria-label="Principal" class="min-w-0">
        <ul class="flex flex-wrap items-center justify-end gap-0.5 sm:gap-2 text-sm md:text-base">
          <li>
            <NuxtLink
              to="/"
              aria-label="Início"
              class="px-2 py-2 rounded-md inline-flex items-center gap-1.5"
              :class="ativo('/') && route.path === '/' ? 'bg-linha/70' : 'hover:text-cerrado'"
            >
              <i class="pi pi-home" aria-hidden="true" />
              <span class="hidden sm:inline">Início</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/aprender"
              aria-label="Aprenda"
              class="px-2 py-2 rounded-md inline-flex items-center gap-1.5"
              :class="ativo('/aprender') ? 'bg-linha/70' : 'hover:text-cerrado'"
            >
              <i class="pi pi-book" aria-hidden="true" />
              <span class="hidden sm:inline">Aprenda</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/novidades"
              aria-label="Novidades"
              class="px-2 py-2 rounded-md inline-flex items-center gap-1.5"
              :class="ativo('/novidades') ? 'bg-linha/70' : 'hover:text-cerrado'"
            >
              <i class="pi pi-comments" aria-hidden="true" />
              <span class="hidden sm:inline">Novidades</span>
            </NuxtLink>
          </li>
          <li v-if="usuario?.papel === 'admin'">
            <NuxtLink
              to="/admin"
              aria-label="Admin"
              class="px-2 py-2 rounded-md inline-flex items-center gap-1.5 hover:text-cerrado"
            >
              <i class="pi pi-cog" aria-hidden="true" />
              <span class="hidden sm:inline">Admin</span>
            </NuxtLink>
          </li>
          <li v-if="usuario">
            <NuxtLink
              to="/conta"
              aria-label="Conta"
              class="px-2 py-2 rounded-md inline-flex items-center gap-1.5 hover:text-cerrado"
              :class="ativo('/conta') ? 'bg-linha/70' : ''"
            >
              <i class="pi pi-user" aria-hidden="true" />
              <span class="hidden sm:inline">Conta</span>
            </NuxtLink>
          </li>
          <li v-if="usuario">
            <button
              type="button"
              aria-label="Sair"
              class="px-2 py-2 hover:text-cerrado inline-flex items-center gap-1.5"
              @click="sair"
            >
              <i class="pi pi-sign-out" aria-hidden="true" />
              <span class="hidden sm:inline">Sair</span>
            </button>
          </li>
          <li v-else>
            <NuxtLink
              to="/entrar"
              aria-label="Entrar"
              class="px-2 py-2 rounded-md inline-flex items-center gap-1.5 hover:text-cerrado"
            >
              <i class="pi pi-sign-in" aria-hidden="true" />
              <span class="hidden sm:inline">Entrar</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
