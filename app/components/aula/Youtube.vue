<script setup>
const props = defineProps({ conteudo: { type: Object, default: () => ({}) } })
const ativo = ref(false)
const capa = computed(
  () => `https://i.ytimg.com/vi/${props.conteudo?.video_id || ''}/hqdefault.jpg`,
)
const src = computed(
  () =>
    `https://www.youtube-nocookie.com/embed/${props.conteudo?.video_id || ''}?rel=0&autoplay=1`,
)
</script>

<template>
  <figure class="my-6 max-w-full min-w-0">
    <div class="aspect-video w-full max-w-full overflow-hidden rounded-md border border-linha bg-tinta relative">
      <iframe
        v-if="ativo && conteudo.video_id"
        class="h-full w-full"
        :src="src"
        title="Vídeo da aula"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <button
        v-else
        type="button"
        class="absolute inset-0 w-full h-full group"
        @click="ativo = true"
      >
        <img
          :src="capa"
          :alt="conteudo.titulo || 'Vídeo da aula'"
          class="h-full w-full object-cover"
          loading="lazy"
        />
        <span
          class="absolute inset-0 flex items-center justify-center bg-tinta/30 group-hover:bg-tinta/40"
        >
          <span class="bg-cerrado text-papel font-bold px-4 py-2 rounded-md inline-flex items-center gap-2">
            <i class="pi pi-play" aria-hidden="true" />
            Assistir
          </span>
        </span>
      </button>
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
