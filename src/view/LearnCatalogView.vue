<script setup>
import CardSampleTemplate from '@/components/CardSampleTemplate.vue';
</script>

<template>
<section class="py-6 px-5">
  <h2 class="text-4xl text-stone-800 flex flex-nowrap gap-2 items-center font-bold">
    <i class="pi pi-graduation-cap text-green-600 text-4xl align-middle"></i> Tutoriais e Guias
  </h2>

  <div>
    <h3 class="text-2xl text-stone-800 flex flex-nowrap gap-1 items-center font-bold mt-3">
      <i class="fa-brands fa-js text-yellow-400 text-2xl align-middle"></i>JavaScript
    </h3>

    <div class="carrosel">
      <!-- Vai guardar os itens do carrosel -->
      <CardSampleTemplate v-for="(n,index) in [0,1,2]" :key="index" title="teste" resume="kkfdhadfsfdsfsdfshf dfssssssssssssss dfccsasdfafdcadfdafdaffad kfdhadfsfdsfsdfshf dfssssssssssssss dfccsasdfafdcadfdafdaffad" :list-icon-class="['fa-brands fa-js']" destination-url="/learn"></CardSampleTemplate>
    </div>
  </div>
</section>

</template>

<style scoped>
.carrosel{
  @apply py-4 md:mx-8 grid grid-cols-1 auto-rows-auto md:grid-cols-3 gap-6;
}
</style>
