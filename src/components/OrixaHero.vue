<script setup>
import { computed } from 'vue'

const props = defineProps({
  titulo: { type: String, required: true },
  subtitulo: { type: String, default: '' },
  saudacao: { type: String, default: '' },
  imagem: { type: String, default: '' },
  imagemMobile: { type: String, default: '' },
  posicaoImagem: { type: String, default: 'center' },
  posicaoMobile: { type: String, default: 'center' },
  corFundo: { type: String, default: '#193521' },
  corDestaque: { type: String, default: '#E8D7A8' },
  alinhamento: { type: String, default: 'centro' },
  tema: { type: String, default: 'oxossi' },
})

const estilo = computed(() => ({
  '--hero-bg': props.corFundo,
  '--hero-accent': props.corDestaque,
  '--hero-position': props.posicaoImagem,
  '--hero-position-mobile': props.posicaoMobile,
}))
</script>

<template>
  <section
    class="orixa-hero relative isolate flex h-[560px] items-end justify-center overflow-hidden px-6 pb-12 text-center text-white md:h-[540px] md:items-center md:pb-0 xl:h-[620px] min-[1600px]:h-[700px]"
    :class="[`orixa-hero--${tema}`, { 'orixa-hero--direita': alinhamento === 'direita' }]"
    :style="estilo"
  >
    <picture v-if="imagem" class="absolute inset-0 z-0 block h-full w-full">
      <source v-if="imagemMobile" media="(max-width: 767px)" :srcset="imagemMobile" />
      <img
        :src="imagem"
        :alt="`Representação artística de ${titulo}`"
        class="orixa-hero-imagem h-full w-full object-cover"
      />
    </picture>

    <div class="orixa-hero-degrade absolute inset-0 z-10"></div>

    <div class="orixa-hero-conteudo relative z-20 mx-auto w-full max-w-3xl">
      <p class="mb-4 text-sm uppercase tracking-[0.3em]" :style="{ color: corDestaque }">
        Nossa ancestralidade
      </p>
      <h1 class="font-serif text-6xl text-white md:text-7xl">{{ titulo }}</h1>
      <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 md:mx-auto">{{ subtitulo }}</p>
      <p v-if="saudacao" class="mt-5 text-xl" :style="{ color: corDestaque }">{{ saudacao }}</p>
    </div>
  </section>
</template>

<style scoped>
.orixa-hero { background-color: var(--hero-bg); }
.orixa-hero-imagem { object-position: var(--hero-position-mobile); }
.orixa-hero-degrade {
  background: linear-gradient(to top, rgb(16 36 24 / 95%), rgb(25 53 33 / 65%), rgb(25 53 33 / 35%));
}
.orixa-hero--oxum .orixa-hero-degrade {
  background: linear-gradient(to top, rgb(16 44 71 / 90%), rgb(23 63 96 / 60%), rgb(23 63 96 / 25%));
}
.orixa-hero--ogum .orixa-hero-degrade {
  background: linear-gradient(to top, rgb(9 27 58 / 88%), rgb(16 43 93 / 62%), rgb(16 43 93 / 25%));
}
@media (min-width: 768px) {
  .orixa-hero-imagem { object-position: var(--hero-position); }
  .orixa-hero--direita .orixa-hero-conteudo {
    width: 42%; max-width: 36rem; margin-left: auto; margin-right: 8%; text-align: left;
  }
  .orixa-hero--direita .orixa-hero-conteudo > p:nth-of-type(2) { margin-left: 0; }
  .orixa-hero--ogum .orixa-hero-degrade {
    background: linear-gradient(to left, rgb(9 27 58 / 80%), rgb(16 43 93 / 35%), transparent);
  }
}
</style>
