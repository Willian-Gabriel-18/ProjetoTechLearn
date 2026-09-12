<script setup>
const { usuario, carregar, sair } = useAuth()
onMounted(() => {
  if (!usuario.value) carregar()
})
</script>

<template>
  <div class="min-h-dvh flex flex-col bg-papel text-tinta">
    <AppNavBar />
    <main class="flex-1 w-full">
      <slot />
    </main>
    <AppFooter />
    <AppBackToTop />
  </div>
</template>
