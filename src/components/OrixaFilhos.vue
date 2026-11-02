<script setup>
import { ref } from 'vue'

defineProps({
  nome: { type: String, required: true },
  filhos: { type: Array, required: true },
  descricao: { type: String, default: '' },
  variante: { type: String, default: 'padrao' },
  fonte: { type: String, default: '' },
})

const filhoAberto = ref(-1)
</script>

<template>
  <section class="bg-[#F8F5EE] px-6 py-20">
    <div class="mx-auto max-w-4xl">
      <div class="text-center">
        <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">
          Arquétipos tradicionais
        </p>
        <h2 :class="variante === 'oxossi' ? 'font-serif text-3xl text-[#244A32] sm:text-4xl' : 'font-serif text-4xl'">Os filhos de {{ nome }}</h2>
        <p v-if="descricao" class="mx-auto mt-5 max-w-2xl leading-8 text-[#5C6859]">
          {{ descricao }}
        </p>
      </div>
      <div class="mt-10 space-y-4">
        <article
          v-for="(filho, i) in filhos"
          :key="filho.titulo"
          class="overflow-hidden rounded-2xl border border-[#E1D8C7] bg-white shadow-sm"
        >
          <button
            type="button"
            :class="variante === 'oxossi' ? 'flex w-full items-center justify-between gap-4 p-6 text-left font-serif text-xl text-[#244A32] transition hover:bg-[#ECF4EA] focus-visible:outline-2 focus-visible:outline-[#B58D38]' : 'flex w-full items-center justify-between gap-4 p-6 text-left font-serif text-xl transition hover:bg-[#EDF1F9] focus-visible:outline-2 focus-visible:outline-[#B58D38]'"
            :aria-expanded="filhoAberto === i"
            @click="filhoAberto = filhoAberto === i ? -1 : i"
          >
            <span>{{ filho.titulo }}</span>
            <span class="text-[#B58D38]">{{ filhoAberto === i ? '−' : '+' }}</span>
          </button>
          <div
            v-if="filhoAberto === i"
            class="space-y-4 border-t border-[#E1D8C7] px-6 py-6 leading-8 text-[#5C6859]"
          >
            <template v-if="Array.isArray(filho.paragrafos)">
              <p v-for="(paragrafo, j) in filho.paragrafos" :key="j">{{ paragrafo }}</p>
            </template>
            <template v-else>{{ filho.texto }}</template>
          </div>
        </article>
      </div>
      <p v-if="fonte" class="mt-8 text-center text-sm italic text-[#5C6859]">{{ fonte }}</p>
    </div>
  </section>
</template>
