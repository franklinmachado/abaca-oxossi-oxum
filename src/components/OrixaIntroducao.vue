<script setup>
defineProps({
  nome: { type: String, required: true },
  paragrafos: { type: Array, required: true },
  simbolos: { type: Array, required: true },
  variante: { type: String, default: "padrao" },
})
</script>

<template>
  <template v-if="variante === 'oxossi'">

    <section class="bg-[#F8F5EE] px-6 py-16 sm:py-20">
      <div class="mx-auto max-w-5xl">
        <div class="text-center">
          <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">Nossa ancestralidade</p>
          <h2 class="font-serif text-3xl sm:text-4xl text-[#244A32]">Conhecendo {{ nome }}</h2>
          <div class="mx-auto mt-6 h-0.5 w-14 bg-[#B58D38]"></div>
          <div class="mx-auto mt-8 max-w-2xl space-y-6 leading-8 text-[#5C6859]">
            <p v-for="(paragrafo, index) in paragrafos" :key="index">{{ paragrafo }}</p>
          </div>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article v-for="s in simbolos" :key="s.titulo" class="rounded-2xl border border-[#E5D9BE] bg-white p-8 shadow-sm">
            <div class="mb-5 text-4xl">{{ s.icone }}</div>
            <h3 class="mb-3 font-serif text-2xl text-[#244A32]">{{ s.titulo }}</h3>
            <p class="leading-7 text-[#5C6859]">{{ s.texto }}</p>
          </article>
        </div>
      </div>
    </section>
  </template>
  <template v-else>
    <section class="px-6 py-20">
      <div class="mx-auto max-w-5xl">
        <div class="text-center">
          <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">Nossa ancestralidade</p>
          <h2 class="font-serif text-4xl">Conhecendo {{ nome }}</h2>
          <div class="mx-auto mt-5 h-0.5 w-16 bg-[#B58D38]"></div>
        </div>
        <div class="mx-auto mt-8 max-w-3xl space-y-5 text-center leading-8 text-[#5C6859]">
          <p v-for="(paragrafo, index) in paragrafos" :key="index">{{ paragrafo }}</p>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article
            v-for="s in simbolos"
            :key="s.titulo"
            class="rounded-2xl border border-[#DFD6C5] bg-white p-7 shadow-sm"
          >
            <div class="mb-4 text-4xl">{{ s.icone }}</div>
            <h3 class="font-serif text-2xl">{{ s.titulo }}</h3>
            <p class="mt-3 leading-7 text-[#5C6859]">{{ s.texto }}</p>
          </article>
        </div>
      </div>
    </section>
  </template>
</template>
