<template>
  <div class="min-h-dvh flex flex-col bg-papel text-tinta overflow-x-clip max-w-full">
    <AppNavBar />
    <main class="flex-1 w-full min-w-0 max-w-full">
      <slot />
    </main>
    <AppFooter />
    <AppBackToTop />
  </div>
</template>
