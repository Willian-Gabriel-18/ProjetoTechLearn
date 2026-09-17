<template>
  <div class="min-h-dvh flex flex-col bg-papel text-tinta overflow-x-clip max-w-full">
    <a class="pular-conteudo" href="#conteudo">Pular para o conteúdo</a>
    <AppNavBar />
    <main id="conteudo" tabindex="-1" class="flex-1 w-full min-w-0 max-w-full outline-none">
      <slot />
    </main>
    <AppFooter />
    <AppBackToTop />
  </div>
</template>
