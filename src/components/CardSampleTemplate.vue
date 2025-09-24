<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import defaultImg from '../../assets/img/defaultCardImg.jpg';

const props = defineProps({
  imgPath: {
    type: String,
    required: false,
    default: defaultImg
  },
  title: {
    type: String,
    required: true
  },
  resume: {
    type: String,
    required: true
  },
  destinationUrl: {
    type: Boolean,
    default: true
  },
  listIconClass: {
    type: Array,
  }
});

const propriedadesObrigatorias = ['title', 'resume'];

const renderizar = computed(() => {
  let noRender = false;

  for (let key in props) {
    const objetoDesc = Object.getOwnPropertyDescriptor(props, key);
    console.log(key);
    console.log(objetoDesc);
    console.log("---------------------------------");

    propriedadesObrigatorias.forEach((elem)=>{
      if ((elem === key) && !objetoDesc.value){
        noRender = true;
      }
    });
  }

  return (noRender)? false: true;
});

const resumoFormatado = (resumo, limite = 50) => {
  let resumoVar = resumo;

  if(resumoVar.length > limite){
    resumoVar = resumo.substring(0, limite) + '...';
  }

  return resumoVar;
}

</script>

<template>
  <RouterLink :to="destinationUrl" v-if="renderizar" class="demarcar py-7 px-5 max-w-80 min-w-80 rounded-md flex flex-col flex-nowrap md:hover:scale-105 md:hover:cursor-pointer">

    <div class="overflow-hidden rounded-md">
      <img v-if="imgPath" :src="imgPath" alt="Imagem do card" class="rounded-md hover:scale-125">
    </div>

    <div class="mt-2">
      <h4 class="text-3xl text-center text-stone-700 uppercase font-bold overflow-hidden overflow-ellipsis text-wrap tracking-tighter" :title="title">{{ title }}</h4>
      <p class="text-wrap text-justify whitespace-nowrap indent-4 text-xl text-stone-700 overflow-hidden tracking-tighter" >{{ resumoFormatado(resume, 100) }}</p>
    </div>

    <div class="flex flex-nowrap flex-row justify-between items-center mt-auto">
      <div v-if="listIconClass" class="max-w-50p text-stone-800 text-2xl flex flex-row flex-nowrap gap-2 items-center overflow-hidden mr-auto">
        <i v-for="(item, index) in listIconClass.slice(0, 5 || listIconClass.length)" :key="index" :class="item"> </i>
      </div>
      <RouterLink :to="destinationUrl" class="text-xl text-orange-500 py-2 px-5 md:hover:cursor-pointer md:hover:bg-slate-200 rounded-lg underline decoration-1 decoration-orange-500 ml-auto">Read More</RouterLink>
    </div>
  </RouterLink>

</template>

<style scoped>
.demarcar{
  box-shadow: inset 0 0 .5rem #00000048;
}
</style>
