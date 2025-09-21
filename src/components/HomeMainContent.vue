<script setup>
import CardSampleTemplate from './CardSampleTemplate.vue';
import tutorial1Img from '../../assets/img/tutorial1Img.jpg';

/*
OBS: Planejo Futuramente criar um componente carrosel e tornar tudo aqui mais dinâmico,
no entanto, vou deixar assim mesmo, pois, é somente representativo.
*/

</script>

<template>

  <section class="mt-8 px-4">
    <div>
      <h3 class="titulos flex items-center flex-nowrap gap-2"><i class="pi pi-graduation-cap text-green-600 text-4xl align-middle"></i> Tutoriais e Guias</h3>
      <div class="carrosel mt-2">
        <!-- Vai guardar os itens do carrosel -->
         <CardSampleTemplate :imgPath="tutorial1Img" title="teste" resume="kfdhshf" :list-icon-class="['pi-star', 'pi-asterisk']" destination-url="/learn"></CardSampleTemplate>
      </div>
    </div>

    <div class="mt-3">
      <h3 class="titulos flex items-center flex-nowrap gap-2"><i class="pi pi-sparkles text-yellow-300 text-4xl align-middle"></i> Novidades e Artigos</h3>
      <div class="carrosel mt-2">
        <!-- Vai guardar os itens do carrosel -->
        <CardSampleTemplate title="tesfdsssssssssfdfdfdte" resume="kfdhadfsfdsfsdfshf dfssssssssssssss dfccsasdfafdcadfdafdaffad kfdhadfsfdsfsdfshf dfssssssssssssss dfccsasdfafdcadfdafdaffad" destination-url="/news"></CardSampleTemplate>
      </div>
    </div>
  </section>
</template>

<style scoped>
.titulos{
  @apply text-3xl font-bold text-stone-700;
}

.carrosel{
  @apply py-2 px-5;
}
</style>
