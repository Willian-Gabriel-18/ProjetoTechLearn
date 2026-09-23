<script setup>
import { trilhaPorId } from '~/utils/trilhas.js'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  id: { type: String, required: true },
})

const item = computed(() => trilhaPorId(props.id))
</script>

<template>
  <NuxtLink
    v-if="item"
    :to="item.href"
    class="underline text-cerrado underline-offset-4"
    v-bind="$attrs"
  >“{{ item.titulo }}”</NuxtLink>
</template>
