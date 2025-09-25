<script setup>
import NavBar from './components/NavBar.vue'
import BackToTop from './components/BackToTop.vue';
import { RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue';

</script>

<template>
  <NavBar></NavBar>
  <RouterView class="flex-grow"></RouterView>

  <FooterComponent></FooterComponent>

  <BackToTop></BackToTop>
</template>

<style scoped></style>
