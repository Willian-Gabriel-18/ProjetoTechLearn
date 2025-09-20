<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  heroTitle: {
    type: String,
    default: "Seja bem vindo"
  },
  heroDescription: {
    type: String,
    default: "Aqui você tem novidades e aprendizado do Mundo Tech"
  },
});
</script>

<template>
<section class="">
  <h2>{{ heroTitle }}</h2>
  <p>{{ heroDescription }}</p>
</section>
</template>

<style scoped>

</style>
