<script setup>
import { defineProps } from 'vue';

defineProps({
  heroTitle: {
    type: String,
    default: "Seja bem vindo"
  },
  heroDescription: {
    type: String,
    default: "Aqui você encontra novidades e muito a aprender do Mundo da Tecnologia"
  },
});

</script>

<template>
<section class="flex flex-col justify-center items-center flex-nowrap pt-8 px-2">

  <div class="flex justify-center items-center flex-nowrap w-80p gap-4 md:gap-0">
     <!-- Esta div está guardando a div de apresentaçaão do site e a imagem -->

    <div class="flex flex-nowrap flex-col justify-center items-center">
      <!-- Esta div está guardando a apresentação do site -->
      <h2 class="text-5xl md:text-7xl text-center font-bold italic text-stone-800">{{ heroTitle }}</h2>
      <p class="mt-3 md:mt-12 md:text-2xl text-center text-stone-700 md:w-80p">{{ heroDescription }}</p>
      <div class="flex flex-nowrap justify-center items-center mt-5 md:mt-8 gap-2 md:gap-4 italic">
        <RouterLink to="/learn" class="interactiveButton bg-green-400 px-4 py-2 rounded text-white flex items-center flex-nowrap gap-2">
          <i class="pi pi-graduation-cap text-xl align-middle md:text-4xl"></i>
          <p class="font-bold">Learn</p>
        </RouterLink>
        <RouterLink to="/news" class="interactiveButton bg-slate-200/70 text-stone-700 px-4 py-2 rounded flex items-center flex-nowrap gap-2">
          <i class="pi pi-sparkles align-middle text-yellow-300 text-xl md:text-4xl"></i>
          <p class="font-bold">News</p>
        </RouterLink>
      </div>
    </div>

    <div class="hidden imgFrame md:block rounded-lg px-3 py-3 overflow-hidden">
      <!-- Esta div está guardando a imagem de apresentação do site -->
      <img src="../../assets/img/heroImage.jpg" alt="Alguns notebooks e tablets em cima de uma mesa" class="h-96 rounded-lg hover:scale-125 transition-all">
    </div>

  </div>

  <div class="w-80p md:w-50p h-[2px] rounded-md bg-stone-200 mt-8"></div>
</section>
</template>

<style scoped>
.pi-sparkles{
  text-shadow: 0 0 .5rem #000000cf;
}

.imgFrame{
  box-shadow: inset 0 0 .5rem #00000048;
}

.interactiveButton{
  @apply md:text-4xl md:hover:scale-105 hover:cursor-pointer md:hover:shadow-lg md:hover:shadow-orange-500 transition-all duration-75;
}
</style>
