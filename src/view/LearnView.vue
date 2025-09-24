<script setup>
import { inject } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const tutorialsData = inject('TutorialsData');
const router = useRouter();
const route = useRoute();

const lesson = tutorialsData.getAllDataById(route.params.id);

if(!lesson){
  router.push(`/${route.params.categoria}/notfound`);
}
</script>

<template>
<h1>kjsdj</h1>
</template>

<style scoped>
</style>
