<script setup>
import CardSampleTemplate from '@/components/CardSampleTemplate.vue';
import { inject } from 'vue';

const newsData = inject('NewsData');
</script>

<template>
<section class="py-6 px-5">
  <h2 class="text-4xl text-stone-800 flex flex-nowrap gap-2 items-center font-bold"><i class="pi pi-sparkles text-yellow-300 text-4xl align-middle"></i> Novidades</h2>
  <div class="gridContent">
    <!-- Grid com todos as noticias do site -->
    <CardSampleTemplate v-for="noticia in newsData.getAllData()" :key="noticia.id" :title="newsData.getTitulo(noticia.id)" :resume="newsData.getResumo(noticia.id)" :img-path="newsData.getURLBannerImg(noticia.id)" :destination-url="'/news/'+ noticia.id"></CardSampleTemplate>
  </div>
</section>

</template>

<style scoped>
.gridContent{
  @apply py-4 md:px-8 grid grid-cols-1 auto-rows-auto md:grid-cols-3 gap-6;
}
</style>
