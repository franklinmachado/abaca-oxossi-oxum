<script setup>
import OrixaCard from '../components/OrixaCard.vue'

const orixas = [
  {
    nome: 'Oxóssi',
    descricao: 'Conheça a história, os símbolos e os ensinamentos de Oxóssi.',
    imagem: '/images/cards/oxossi-card.png',
    rota: '/orixas/oxossi',
  },
  {
    nome: 'Oxum',
    descricao: 'Conheça a história, os símbolos e os ensinamentos de Oxum.',
    imagem: '/images/cards/oxum-card.png',
    rota: '/orixas/oxum',
  },
  {
    nome: 'Ogum',
    descricao: 'Conheça a história, os símbolos e os ensinamentos de Ogum.',
    imagem: '/images/cards/ogum-card.png',
    rota: '/orixas/ogum',
  },
]
</script>

<template>
  <main class="min-h-screen bg-[#F8F5EE]">
    <section class="mx-auto max-w-7xl px-5 py-16">
      <div class="mb-12 text-center">
        <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">Nossa ancestralidade</p>

        <h1 class="font-serif text-4xl text-[#244A32] md:text-5xl">Conheça os Orixás</h1>

        <p class="mx-auto mt-5 max-w-2xl text-[#5C6859]">
          Conheça as histórias, os símbolos e os ensinamentos dos Orixás que fazem parte da nossa
          tradição.
        </p>
        <div class="mx-auto mt-12 grid max-w-5xl gap-8 px-5 md:grid-cols-2">
          <OrixaCard
            v-for="orixa in orixas"
            :key="orixa.nome"
            :nome="orixa.nome"
            :descricao="orixa.descricao"
            :imagem="orixa.imagem"
            :rota="orixa.rota"
          />
        </div>
      </div>
    </section>
  </main>
</template>
