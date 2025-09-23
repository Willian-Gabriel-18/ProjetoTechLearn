<script setup>
import PulseLoader from  'vue-spinner/src/PulseLoader.vue';

defineProps({
  isLoading: {
    type: Boolean,
    default: false
  }
})

</script>

<template>
<section class="w-screen h-screen fixed z-50 top-0 bg-black/40 flex items-center justify-center" v-if="isLoading">
  <PulseLoader size="50px"></PulseLoader>
</section>
</template>

<style scoped>
</style>
