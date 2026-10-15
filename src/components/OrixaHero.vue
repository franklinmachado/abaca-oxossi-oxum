<script setup>
defineProps({
  titulo: {
    type: String,
    required: true,
  },
  subtitulo: {
    type: String,
    default: '',
  },
  imagem: {
    type: String,
    default: '',
  },
  posicaoImagem: {
    type: String,
    default: 'center',
  },
})
</script>

<template>
  <section
    class="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#193521] px-6 py-20 text-center text-white md:min-h-[550px]"
  >
    <img
      v-if="imagem"
      :src="imagem"
      :alt="`Representação artística de ${titulo}`"
      class="orixa-hero-imagem absolute inset-0 h-full w-full object-cover"
      :style="{ objectPosition: posicaoImagem }"
    />

    <div
      class="absolute inset-0 bg-gradient-to-t from-[#102418]/95 via-[#193521]/65 to-[#193521]/35"
    ></div>

    <div class="relative z-10 mx-auto max-w-3xl">
      <p class="mb-4 text-sm uppercase tracking-[0.3em] text-[#E8D7A8]">Nossa ancestralidade</p>

      <h1 class="font-serif text-5xl md:text-7xl">
        {{ titulo }}
      </h1>

      <p class="mx-auto mt-6 max-w-xl text-lg leading-relaxed">
        {{ subtitulo }}
      </p>
    </div>
  </section>
</template>

<style scoped>
/* Monitores ultrawide */
@media (min-width: 1800px) and (min-aspect-ratio: 21/9) {
  .orixa-hero-imagem {
    object-position: center 15% !important;
  }
}
</style>
