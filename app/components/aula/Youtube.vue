<script setup>
const props = defineProps({ conteudo: { type: Object, default: () => ({}) } })
const src = computed(
  () =>
    `https://www.youtube-nocookie.com/embed/${props.conteudo?.video_id || ''}?rel=0`,
)
</script>

<template>
  <figure class="my-6">
    <div class="aspect-video w-full overflow-hidden rounded-md border border-linha bg-tinta">
      <iframe
        v-if="conteudo.video_id"
        class="h-full w-full"
        :src="src"
        title="Vídeo da aula"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <figcaption class="mt-2 text-sm text-tinta/80">
      <i class="pi pi-youtube mr-1" aria-hidden="true" />
      {{ conteudo.titulo }}
      <template v-if="conteudo.canal"> — {{ conteudo.canal }}</template>
      <a
        v-if="conteudo.video_id"
        class="ml-1 underline text-cerrado"
        :href="`https://www.youtube.com/watch?v=${conteudo.video_id}`"
        target="_blank"
        rel="noopener noreferrer"
      >ver no YouTube</a>
    </figcaption>
  </figure>
</template>
