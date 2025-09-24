<script setup>
import { inject, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useClipBoard } from '@/utilities/useClipBoard'

const tutorialsData = inject('TutorialsData')
const router = useRouter()
const route = useRoute()
const clipBoard = useClipBoard();

const lesson = tutorialsData.getAllDataById(route.params.id)

if (!lesson) {
  router.push(`/${route.params.categoria}/notfound`)
}

const listaTopicos = computed(() => {
  let lista = lesson.conteudo
      .map((elem, index) => {
        //Colocar em todos elementos de conteudo uma propriedade indexOriginal
        return { ...elem, indexOriginal: index }
      })
      //Filtrar para os que sao do tipo topico
      .filter((texto) => texto.tipo === 'topico');

  return lista;
});

const isCopiedToClipBoard = computed(()=>{
  return clipBoard.isCopied.value;
});

const copiarCodigoParaClipBoard = (texto) => {
  clipBoard.copy(texto);

  setTimeout(()=>{
    clipBoard.isCopied.value = false;
  }, clipBoard.notifyDuration);
}

</script>

<template>
  <section class="max-w-full py-8 px-4 md:px-24">
    <div>
      <h1 class="text-4xl md:text-5xl text-stone-900 font-bold text-wrap text-center">
        {{ lesson.titulo }}
      </h1>

      <div class="text-stone-800 mt-2">
        <p>Autor: {{ lesson.autor }}</p>
        <p>Data da publicação: {{ lesson.data_publicacao }}</p>
      </div>
      <div class="text-stone-800">
        <p>
          <i class="pi pi-book align-middle"></i> {{ lesson.meta.tempo_estimado_leitura }} -
          {{ lesson.meta.nivel }}
        </p>
      </div>
    </div>

    <!-- Banner -->
    <div class="py-2 px-1">
      <img
        :src="lesson.bannerImgUrl"
        :alt="'Banner aula - ' + lesson.titulo"
        class="w-full rounded-lg outline outline-stone-400 outline-2 outline-offset-4"
      />
    </div>

    <!--Resumo do que será apresentado-->
    <p class="texto text-xl mt-2 indent-4">{{ lesson.resumo }}</p>

    <!--Tópicos da aula-->
    <div class="mt-4">
      <h2 class="text-3xl md:text-5xl text-stone-900 font-bold text-wrap text-start">Tópicos</h2>

      <ul class="pl-4">
        <li v-for="(topico, index) in listaTopicos" :key="index" class="topicoItem mt-2 w-max">
          <a :href="'#' + topico.indexOriginal" class="flex items-center justify-start">
            <i class="pi pi-hashtag align-middle no-underline mr-3"></i>
            <span class="underline underline-offset-4">{{ topico.trechos[0].texto }}</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- Inserindo os conteudos da página dinamicamente -->
    <div class="border-t-2 mt-4">
      <div v-for="(texto, textoIndex) in lesson.conteudo" :key="textoIndex">
        <!--
        OBS: Importante colocar uma div para ser pai
        dos titulos, paragrafos, destaques e explicações,
        por conta do uso de v-for para iterar sobre o array
        de trechos. Isso deve ser feito em cada elemento
        separadamente para não haver erros.
        -->

        <!-- Título do tópico só vai aparecer quando a
        propriedade tipo do valor interado de
        lesson.conteudo, texto, for igual 'topico'-->
        <div v-for="(trecho, index) in texto.trechos" :key="index">
          <h3
            v-if="texto.tipo === 'topico'"
            :class="{
              'texto text-2xl mt-7 flex flex-nowrap items-center': true,
              'font-bold': trecho.isBold,
              italic: trecho.isItalic,
              linkText: trecho.isLink,
            }"
            :id="textoIndex"
          >
            <i class="pi pi-arrow-circle-right align-middle mr-2"></i>
            {{ trecho.texto }}
          </h3>
        </div>

        <!-- Paragrafos só vai ser gerado se a propriedade tipo do iteravel texto do objeto
        lesson.conteudo for igual a paragrafo-->
        <div v-for="(trecho, index) in texto.trechos" :key="index">
          <div v-if="texto.tipo === 'paragrafo'" class="mt-4 paragrafo">
            <p v-if="!trecho.isLink"
              :class="{
                'font-bold': trecho.isBold,
                italic: trecho.isItalic,
                linkText: trecho.isLink,
              }">
              {{ trecho.texto }}
            </p>
            <a v-else :href="trecho.urlPage" target="_blank" rel="noreffer"
            :class="{
                'font-bold': trecho.isBold,
                italic: trecho.isItalic,
                linkText: trecho.isLink,
              }">
              {{trecho.texto}}
            </a>
          </div>
        </div>

        <!-- Script só vai ser gerado se a propriedade tipo do iteravel texto do objeto
        lesson.conteudo for igual a script -->
        <div v-for="(trecho, index) in texto.trechos" :key="index" class="mt-4">
          <div v-if="texto.tipo === 'script'" class="bg-cyan-950 text-white font-semibold py-2 px-1 md:px-5 rounded-md overflow-x-scroll">
            <button class="copyButton" @click="copiarCodigoParaClipBoard(trecho.texto)">
                <i class="pi pi-copy"></i> Copy
            </button>

            <pre
              :class="{
                'font-bold': trecho.isBold,
                italic: trecho.isItalic,
                linkText: trecho.isLink,
              }">
              {{ trecho.texto }}
            </pre>
          </div>

          <!-- Notificador de texto copiado -->
          <div v-if="isCopiedToClipBoard" class="animNotifierCopyClipBoard text-2xl text-nowrap text-white bg-slate-800 py-2 px-3 rounded-md fixed right-1/2 translate-x-1/2 top-16">
            Código copiado
          </div>
        </div>

        <!-- Destaques e Explicações só vão ser gerados se a propriedade tipo do iteravel texto do objeto
        lesson.conteudo for igual ao tipo correspondente-->
        <div v-for="(trecho, index) in texto.trechos" :key="index">
          <div v-if="texto.tipo === 'destacar' || texto.tipo === 'explicacao'">
            <h4 v-if="texto.tipo === 'destacar'"
            class="destacar mt-4">
              Conceito: {{ trecho.texto }}
            </h4>

            <p v-if="texto.tipo === 'explicacao'"
            class="explicacao">
              Explicação: <br> {{ trecho.texto }}
            </p>
          </div>
        </div>

      </div>
    </div>

    <!-- Referencias para aula -->
    <div class="mt-8">
      <h2 class="text-3xl md:text-5xl text-stone-900 font-bold text-wrap text-start">Referências</h2>

      <ul class="pl-4">
        <li v-for="(item, index) in lesson.referencias" :key="index" class="linkText mt-3">
          <a :href="item.url">
            <span>{{ item.titulo }} - {{ item.url }}</span>
          </a>
        </li>
      </ul>
    </div>

  </section>
</template>

<style scoped>
.texto {
  @apply text-wrap text-justify text-stone-900 whitespace-nowrap tracking-tighter;
}

.topicoItem {
  @apply text-orange-500 hover:cursor-pointer active:text-violet-800 text-start text-wrap whitespace-nowrap tracking-tighter;
}

.paragrafo{
  @apply text-xl text-wrap text-justify text-stone-900 whitespace-nowrap tracking-tighter indent-4;
}

.linkText {
  @apply text-orange-500 underline underline-offset-2 hover:cursor-pointer hover:text-orange-600 visited:visited:text-violet-800;
}

.destacar{
  @apply bg-yellow-300 text-xl text-stone-900 font-bold px-2 py-2 rounded-t-md;
}

.explicacao{
  @apply bg-blue-300 font-semibold text-wrap text-justify text-stone-800 whitespace-nowrap tracking-tighter rounded-b-md px-2 py-2;
}

.copyButton{
  @apply text-xl relative top-0 left-0 px-1 py-2 ml-1 rounded-lg hover:bg-black active:bg-black transition duration-200;
}

@keyframes notifierClipBoardAnim {
  0% {
    opacity: 100%;
  }
  25%{
    opacity: 75%;
  }
  50%{
    opacity: 50%;
  }
  75%{
    opacity: 25%;
  }
  100%{
    opacity: 0%;
  }
}

.animNotifierCopyClipBoard{
  animation: notifierClipBoardAnim 1.5s ease;
}

</style>
