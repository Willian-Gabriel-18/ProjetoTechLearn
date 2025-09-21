<script setup>
import { RouterLink, useRoute } from 'vue-router';

const isActiveRoute = (path) => {
  const route = useRoute();
  return route.path === path;
};

</script>

<template>
  <header class="py-5 px-4 md:px-8 flex justify-between items-center flex-nowrap border-b border-black/40">
    <RouterLink to="/" class="text-2xl text-black italic">
      <div class="md:hover:scale-150 hover:cursor-pointer md:hover:text-orange-500 md:hover:translate-x-4 transition duration-150">
        <i class="pi pi-box align-middle mb-1"></i>
        TechLearn
      </div>
    </RouterLink>

    <nav>
      <ul class="flex flex-row flex-nowrap gap-2 md:gap-4">
        <li :class="{navItem: true, isActive: (isActiveRoute('/'))}"><RouterLink to="/"><i class="pi pi-home"></i> Home</RouterLink></li>
        <li :class="{navItem: true, isActive: (isActiveRoute('/learn'))}"><RouterLink to="/learn"><i class="pi pi-graduation-cap"></i> Learn</RouterLink></li>
        <li :class="{navItem: true, isActive: (isActiveRoute('/news'))}"><RouterLink to="/news"><i class="pi pi-sparkles"></i> News</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.navItem{
  @apply md:text-xl flex items-center px-2 py-1 rounded-md gap-1 md:hover:scale-110 hover:cursor-pointer md:hover:text-orange-500 md:hover:shadow md:hover:shadow-orange-500 transition-all duration-75;
}

.isActive{
  @apply bg-slate-200 text-slate-900/90 px-2 py-1 rounded-md scale-110;
}
</style>
