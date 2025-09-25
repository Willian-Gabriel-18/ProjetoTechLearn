<script setup>
import { ref } from 'vue';

const link = ref(null);
</script>

<template>
  <a href="#topo" ref="link" class="fixed z-50 text-stone-900 right-4 bottom-4 text-2xl bg-slate-300/60 w-16 h-16 rounded-full flex items-center justify-center">
    <i class="pi pi-arrow-up"></i>
  </a>
</template>

<style setup>
</style>
