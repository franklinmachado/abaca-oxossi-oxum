<script setup>
import { RouterLink } from 'vue-router'

const categorias = [
  {
    titulo: 'Orixás',
    descricao: 'Conheça as histórias, símbolos e fundamentos dos Orixás.',
    imagem: '/images/orixas/card-orixas.webp',
    rota: '/orixas',
  },
  {
    titulo: 'Ervas e Plantas',
    descricao: 'Explore o conhecimento tradicional sobre as folhas e suas utilizações.',
    imagem: '/images/ervas/card-ervas.webp',
    rota: '/ervas',
  },
  {
    titulo: 'Conhecimentos',
    descricao: 'Aprenda sobre nossa cultura, tradições e ensinamentos.',
    imagem: '/images/conteudos/card-conhecimentos.webp',
    rota: '/conhecimentos',
  },
  {
    titulo: 'Nosso Terreiro',
    descricao: 'Conheça nossa história, comunidade e atividades.',
    imagem: '/images/conteudos/card-terreiro.webp',
    rota: '/terreiro',
  },
]
</script>

<template>
  <section class="bg-[#F8F5EE] px-5 py-20">
    <div class="mx-auto max-w-7xl">
      <!-- Título da seção -->
      <div class="mb-12 text-center">
        <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">Explore nosso portal</p>

        <h2 class="font-serif text-4xl text-[#244A32]">Caminhos do Conhecimento</h2>

        <p class="mx-auto mt-4 max-w-2xl text-[#5C6859]">
          Um espaço dedicado à preservação da cultura, da ancestralidade e dos nossos ensinamentos.
        </p>
      </div>

      <!-- Grade de cartões -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <RouterLink
          v-for="categoria in categorias"
          :key="categoria.rota"
          :to="categoria.rota"
          class="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <!-- Imagem -->
          <div class="h-52 overflow-hidden">
            <img
              :src="categoria.imagem"
              :alt="categoria.titulo"
              loading="lazy"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>

          <!-- Conteúdo -->
          <div class="p-6">
            <h3 class="font-serif text-xl text-[#244A32]">
              {{ categoria.titulo }}
            </h3>

            <p class="mt-3 text-sm leading-relaxed text-[#5C6859]">
              {{ categoria.descricao }}
            </p>

            <span class="mt-5 inline-block text-sm font-semibold text-[#B58D38]"> Explorar → </span>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
