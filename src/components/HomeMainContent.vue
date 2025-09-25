<script setup>
import CardSampleTemplate from './CardSampleTemplate.vue';
import { inject } from 'vue';

/*
OBS: Planejo Futuramente criar um componente carrosel e tornar tudo aqui mais dinâmico,
no entanto, vou deixar assim mesmo, pois, é somente representativo.
*/

const tutorialsData = inject('TutorialsData');
const newsData = inject('NewsData');

</script>

<template>

  <section class="mt-8 px-4 py-2 max-w-full">
    <div>
      <h3 class="titulos flex items-center flex-nowrap gap-2"><i class="pi pi-graduation-cap text-green-600 text-4xl align-middle"></i> Tutoriais e Guias</h3>
      <div class="carrosel">
        <!-- Vai guardar os itens do carrosel -->
         <CardSampleTemplate
          v-for="tutorial in tutorialsData.getAllData().slice(0, 3 || tutorialsData.getLength())"
          :key="tutorial.id"
          :img-path="tutorial.bannerImgUrl"
          :title="tutorial.titulo" :resume="tutorial.resumo" :list-icon-class="[tutorial.categoriaIconClass]"
          :destination-url="'/learn/' + tutorial.categoria + '/' + tutorial.id"></CardSampleTemplate>
      </div>
    </div>

    <div class="mt-3">
      <h3 class="titulos flex items-center flex-nowrap gap-2"><i class="pi pi-sparkles text-yellow-300 text-4xl align-middle"></i> Novidades e Artigos</h3>
      <div class="carrosel">
        <!-- Vai guardar os itens do carrosel -->
        <CardSampleTemplate v-for="noticia in newsData.getAllData().slice(0, 3 || newsData.getLength())" :key="noticia.id" :title="newsData.getTitulo(noticia.id)" :resume="newsData.getResumo(noticia.id)" :list-icon-class="[noticia.categoriaIconClass]" :img-path="newsData.getURLBannerImg(noticia.id)" :destination-url="'/news/'+ noticia.id"></CardSampleTemplate>
      </div>
    </div>
  </section>
</template>

<style scoped>
.titulos{
  @apply text-3xl font-bold text-stone-700;
}

.carrosel{
  @apply py-3 px-3 md:px-5 mt-2 flex flex-nowrap gap-6 overflow-y-hidden overflow-x-auto;
}
</style>
