<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="py-5 px-4 md:px-8 flex justify-between items-center flex-nowrap border-b border-black/40">
    <RouterLink to="/" class="text-3xl text-black ">
      <i class="pi pi-box hover:scale-150 hover:cursor-pointer hover:text-orange-500 hover:translate-x-4 transition duration-150"></i>
    </RouterLink>

    <nav>
      <ul class="flex flex-row flex-nowrap gap-4">
        <li class="navItem"><RouterLink to="/"><i class="pi pi-home"></i> Home</RouterLink></li>
        <li class="navItem"><RouterLink to="/learn"><i class="pi pi-graduation-cap"></i> Learn</RouterLink></li>
        <li class="navItem"><RouterLink to="/news"><i class="pi pi-envelope"></i> News</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.navItem{
  @apply text-xl flex items-center gap-1 hover:scale-110 hover:cursor-pointer hover:text-orange-500 transition duration-150 hover:border-b hover:border-orange-500;
}
</style>
