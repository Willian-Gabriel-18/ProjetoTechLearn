<script setup>
const route = useRoute()
await navigateTo(`/aprender/javascript/${route.params.slug}`, { redirectCode: 301 })
</script>
<template><p>Redirecionando…</p></template>
