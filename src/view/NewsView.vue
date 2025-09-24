<script setup>
import { inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const newsData = inject('NewsData');
const route = useRoute();
const router = useRouter();

const idRouteParam = route.params.id;

const noticia = newsData.getAllDataById(idRouteParam);

//Se noticia nao tiver valor, ou, nao achar
if (!noticia) {
  router.push('/news/notfound');
}
</script>

<template>
<section class="max-w-full py-8 px-4 md:px-24">
  <div>
    <h1 class="text-3xl md:text-5xl text-stone-900 font-bold text-wrap text-center">{{ noticia.titulo }}</h1>
    <p class="text-center text-stone-800 mt-2">{{ noticia.subtitulo }}</p>
    <div class="text-stone-800">
      <p>Autor: {{ noticia.autor }}</p>
      <p>Data da publicação: {{ noticia.data_publicacao }}</p>
    </div>
  </div>

  <div class="py-2 px-1">
    <img :src="noticia.imagem_principal" :alt="'Banner notícia - ' + noticia.subtitulo" class="w-full rounded-lg outline outline-stone-400 outline-2 outline-offset-4">
  </div>

  <p class="texto mt-4 md:mt-8" >{{ noticia.resumo }}</p>

  <div class="mt-2">
    <p v-for="(paragrafo, index) in noticia.conteudo" :key="index" :class="{texto: true, destaque: (paragrafo.tipo) === 'destaque' }">
      {{ paragrafo.texto }}
    </p>
  </div>

  <div class="mt-8">
    <h3 class="text-3xl md:text-5xl text-stone-800">Referências: </h3>
    <ul class="underline underline-offset-2 text-blue-800 mt-2 pl-6">
      <li v-for="(referencia, index) in noticia.referencias" :key="index"><a :href="referencia.url" target="_blank" :title="referencia.titulo" rel="noreffer" class="hover:cursor-pointer hover:text-blue-950 visited:text-violet-800">
         {{ referencia.titulo }} - Clique no link</a>
      </li>
    </ul>
  </div>
</section>
</template>

<style scoped>
.texto{
  @apply mt-2 text-xl text-wrap text-justify indent-4 text-stone-900 whitespace-nowrap;
}
.destaque{
  @apply bg-green-200 mt-3 mb-1 rounded-md py-5 px-4;
}
</style>
