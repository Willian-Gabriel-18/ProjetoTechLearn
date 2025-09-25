<script setup>
import NavBar from './components/NavBar.vue'
import BackToTop from './components/BackToTop.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <NavBar></NavBar>
  <RouterView></RouterView>

  <BackToTop></BackToTop>
</template>

<style scoped></style>
