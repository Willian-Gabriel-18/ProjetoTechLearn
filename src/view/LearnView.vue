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
  clipBoard.copy(texto.trim());

  setTimeout(()=>{
    clipBoard.isCopied.value = false;
  }, clipBoard.notifyDuration);
}

</script>

<template>
  <section class="max-w-full py-8 px-4 lg:px-40">
    <div class="indicadorLeitura bg-stone-500 origin-left h-2 inset-0 fixed"> </div>

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
        class="w-full md:h-[520px] object-cover rounded-lg outline outline-stone-400 outline-2 outline-offset-4"
      />
    </div>

    <!--Resumo do que será apresentado-->
    <p class="texto text-xl mt-2 indent-4">{{ lesson.resumo }}</p>

    <!--Tópicos da aula-->
    <div class="mt-4">
      <h2 class="text-3xl md:text-5xl text-stone-900 font-bold text-start">Tópicos</h2>

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

        <!--INSERIR OUTROS CONTÉUDOS(VÍDEO OU IMAGEM), DANDO LOOP EM TODAS CONTEUDOS NÃO
        TEXTUAIS DA AULA, E RENDERIZANDO SOMENTE SE A PROPRIEDADE 'textoIndex' DO CONTEUDO
        FOR IGUAL AO 'textoIndex', OU, MELHOR DIZENDO, O INDICE DO ITEM NA LISTA DE CONTEUDO
        FOR IGUAL AO INDICE APONTADO PELA PROPRIEDADE 'textoIndex' DO CONTEUDO.OUTRA CONDIÇÃO
        DE RENDERIZAÇÃO É QUE ELA SÓ VAI SER RENDERIZADA QUANDO A PROPRIEDADE 'insertTop' FOR
        TRUE, SE NÃO FOR, LÁ EM BAIXO VAI TER OUTRA, FAZENDO MESMA COISA.
        -->
        <div v-for="(conteudo, index) in lesson.outrosConteudos" :key="index">
          <div v-if="conteudo.insertTop && (conteudo.textoIndex === textoIndex)"
          class="outrosConteudosContainer">

            <div v-if="(conteudo.type === 'image')">
              <img :alt="conteudo.descricao"
              class="rounded-md max-h-96 object-cover shadow-lg shadow-black" :src="conteudo.url">
              <p class="text-stone-800 text-center italic mt-2">
              {{ index + 1 }} -  {{ conteudo.descricao }}
              </p>
            </div>

            <div v-if="(conteudo.type === 'video')" class="text-center">
              <video controls
              class="rounded-md max-h-96 object-cover shadow-lg shadow-black mb-4 sm:mb-6">
                <source :src="conteudo.url">
              </video>
              <a class="text-stone-800 underline underline-offset-2 hover:cursor-pointer italic" :href="conteudo.urlOriginal" target="_blank" ref="external">
                {{ index + 1 }} -  {{ conteudo.descricao }}
              </a>
            </div>

          </div>
        </div>

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
          <div class="w-max max-w-full border-b-4 rounded-b-md border-green-400">
            <h3
              v-if="texto.tipo === 'topico'"
              :class="{
                'texto text-2xl mt-7 flex flex-wrap items-center': true,
                'font-bold': trecho.isBold,
                italic: trecho.isItalic,
                linkText: trecho.isLink,
              }"
              :id="textoIndex"
            >
              <span>
                <i class="pi pi-arrow-circle-right align-middle mr-1 md:mr-2"></i>
                {{ trecho.texto }}
              </span>
            </h3>
          </div>
        </div>

        <!-- Paragrafos só vai ser gerado se a propriedade tipo do iteravel texto do objeto
        lesson.conteudo for igual a paragrafo-->
        <div v-for="(trecho, index) in texto.trechos" :key="index">
          <div v-if="texto.tipo === 'paragrafo'" class="mt-2 md:mt-4 paragrafo">
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
          <div v-if="texto.tipo === 'script'" class="bg-cyan-950 relative inset-0 text-white font-semibold py-2 px-5 md:px-8 rounded-md overflow-x-scroll">
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
          <div v-if="isCopiedToClipBoard" class="animNotifierCopyClipBoard text-nowrap text-white bg-slate-800 py-2 px-3 rounded-md fixed right-1/2 translate-x-1/2 top-0">
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

        <!--INSERIR OUTROS CONTÉUDOS(VÍDEO OU IMAGEM), DANDO LOOP EM TODAS CONTEUDOS NÃO
        TEXTUAIS DA AULA, E RENDERIZANDO SOMENTE SE A PROPRIEDADE 'textoIndex' DO CONTEUDO
        FOR IGUAL AO 'textoIndex', OU, MELHOR DIZENDO, O INDICE DO ITEM NA LISTA DE CONTEUDO
        FOR IGUAL AO INDICE APONTADO PELA PROPRIEDADE 'textoIndex' DO CONTEUDO.OUTRA CONDIÇÃO
        DE RENDERIZAÇÃO É QUE ELA SÓ VAI SER RENDERIZADA QUANDO A PROPRIEDADE 'insertTop' FOR
        FALSE, SE NÃO FOR, LÁ EM CIMA VAI TER OUTRA, FAZENDO MESMA COISA.
        -->
        <div v-for="(conteudo, index) in lesson.outrosConteudos" :key="index">
          <div v-if="(!conteudo.insertTop) && (conteudo.textoIndex === textoIndex)"
          class="outrosConteudosContainer">

            <div v-if="(conteudo.type === 'image')">
              <img :alt="conteudo.descricao"
              class="rounded-md max-h-96 object-cover shadow-lg shadow-black" :src="conteudo.url">
              <p class="text-stone-800 text-center italic mt-2">
              {{ index + 1 }} -  {{ conteudo.descricao }}
              </p>
            </div>

            <div v-if="(conteudo.type === 'video')" class="text-center">
              <video controls
              class="rounded-md max-h-96 object-cover shadow-lg shadow-black mb-4 sm:mb-6">
                <source :src="conteudo.url">
              </video>
              <a class="text-stone-800 underline underline-offset-2 hover:cursor-pointer italic" :href="conteudo.urlOriginal" target="_blank" ref="external">
                {{ index + 1 }} -  {{ conteudo.descricao }}
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>

    <!-- Referencias para aula -->
    <div class="mt-8">
      <h2 class="text-3xl md:text-5xl text-stone-900 font-bold text-wrap text-start">Referências</h2>

      <ul class="pl-4">
        <li v-for="(item, index) in lesson.referencias" :key="index" class="linkText mt-8 text-xl md:text-2xl">
          <a :href="item.url">
            <span>{{ item.titulo }} - {{ item.url }}</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- Links para interação com o usuário -->
    <div class="mt-10 flex flex-nowrap justify-center">
      <a class="bg-orange-600 text-xl md:text-3xl text-white py-2 px-4 rounded-md font-bold shadow-md shadow-black hover:cursor-pointer hover:scale-125 transition-all duration-300" :href="lesson.leia_tambem">Leia Tambem</a>
    </div>
  </section>
</template>

<style scoped>
@keyframes aumentarIndicador {
  from{
    opacity: 1;
    scale: 0 1;
  }
  to{
    opacity: 1;
    scale: 1 1;
  }
}

.indicadorLeitura{
  opacity: 0;
  animation: aumentarIndicador 3ms ease-in-out;
  animation-timeline: scroll();
}

.outrosConteudosContainer{
  @apply w-full flex flex-nowrap flex-col items-center justify-center mt-8;
}

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
  @apply text-orange-500 underline underline-offset-2 hover:cursor-pointer hover:text-orange-600 visited:text-violet-800;
}

.destacar{
  @apply bg-green-200 text-xl text-stone-900 font-bold px-2 py-2 rounded-md;
}

.explicacao{
  @apply bg-blue-300 text-xl font-semibold text-wrap text-justify text-stone-800 whitespace-nowrap tracking-tighter rounded-md px-4 py-2;
}

.copyButton{
  @apply text-xl absolute top-4 right-4 px-1 sm:px-3 py-2 ml-1 bg-slate-900 opacity-60 hover:opacity-100 active:opacity-100 rounded-lg hover:cursor-pointer hover:bg-black active:bg-black transition duration-200;
}

@keyframes notifierClipBoardAnim {
  0% {
    opacity: 1;
  }

  100%{
    opacity: 0;
    top: 48px;

    font-size: 1.5rem;
    transform: translateX(0.5);
  }
}

.animNotifierCopyClipBoard{
  animation: notifierClipBoardAnim 1.5s ease;
}

</style>
