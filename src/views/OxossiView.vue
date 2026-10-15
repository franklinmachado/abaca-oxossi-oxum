<script setup>
import OrixaHero from '../components/OrixaHero.vue'
</script>

<template>
  <main class="min-h-screen bg-[#F8F5EE]">
    <!-- Banner principal de Oxóssi -->
    <OrixaHero
      titulo="Oxóssi"
      subtitulo="Conheça a história, os símbolos e os ensinamentos de Oxóssi, Orixá das matas, da caça e da fartura."
      imagem="/images/orixas/banner-oxossi.png"
      posicaoImagem="35% center"
    />

    <!-- Apresentação -->
    <section class="px-6 py-20">
      <div class="mx-auto max-w-4xl text-center">
        <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">Nossa ancestralidade</p>

        <h2 class="font-serif text-4xl text-[#244A32]">Conhecendo Oxóssi</h2>

        <p class="mx-auto mt-6 max-w-2xl leading-8 text-[#5C6859]">
          Oxóssi é o Orixá das matas, da caça e da fartura, associado ao conhecimento, à sabedoria e
          à conexão com a natureza. Neste espaço, vamos conhecer sua história, seus símbolos, suas
          qualidades e sua importância nas tradições religiosas de matriz africana, respeitando os
          fundamentos do nosso Abaçá.
        </p>
      </div>
    </section>

    <!-- Quem é Oxóssi -->
    <section class="bg-white px-6 py-20">
      <div class="mx-auto max-w-4xl">
        <div class="mb-8 text-center">
          <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">
            História e ancestralidade
          </p>

          <h2 class="font-serif text-4xl text-[#244A32]">Quem é Oxóssi?</h2>
        </div>

        <div class="space-y-6 text-base leading-8 text-[#5C6859] md:text-lg">
          <p>
            Oxóssi é o Orixá associado às matas, à caça e à relação entre o ser humano e a natureza.
            Na tradição apresentada em nossos materiais de estudo, é reconhecido como um caçador
            habilidoso, ligado à floresta, aos animais e à proteção.
          </p>

          <p>
            Seu arco e flecha, conhecidos como Ofá, estão entre seus principais símbolos. As
            narrativas sobre Oxóssi também destacam suas relações com outros Orixás, especialmente
            Ogum, que em uma das histórias lhe entrega suas armas de caçador.
          </p>

          <p>
            Conhecer Oxóssi é também entrar em contato com histórias ancestrais que expressam sua
            ligação com as matas e com a vida.
          </p>
        </div>
      </div>
    </section>

    <!-- Voltar para os Orixás -->
    <div class="pb-20 text-center">
      <RouterLink
        to="/orixas"
        class="inline-block rounded-xl border border-[#B58D38] px-8 py-4 font-medium text-[#244A32] transition hover:bg-[#244A32] hover:text-white"
      >
        ← Voltar para os Orixás
      </RouterLink>
    </div>
  </main>
</template>
