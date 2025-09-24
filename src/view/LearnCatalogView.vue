<script setup>
import CardSampleTemplate from '@/components/CardSampleTemplate.vue';
import { inject } from 'vue';

const tutorialsData = inject('TutorialsData');
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

    <div class="gridContent">
      <!-- Grid com todos os tutoriais do site -->
      <CardSampleTemplate
          v-for="tutorial in tutorialsData.getAllData().slice(0, 3 || tutorialsData.getLength())"
          :key="tutorial.id"
          :img-path="tutorial.bannerImgUrl"
          :title="tutorial.titulo" :resume="tutorial.resumo" :list-icon-class="[tutorial.categoriaIconClass]"
          :destination-url="'/learn/' + tutorial.categoria + '/' + tutorial.id"></CardSampleTemplate>
    </div>
  </div>
</section>

</template>

<style scoped>
.gridContent{
  @apply py-4 md:px-8 grid grid-cols-1 auto-rows-auto md:grid-cols-3 gap-6;
}
</style>
