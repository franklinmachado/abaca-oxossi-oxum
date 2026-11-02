<script setup>
import { ref } from 'vue'

defineProps({
  nome: { type: String, required: true },
  lendas: { type: Array, required: true },
  descricao: { type: String, default: '' },
  observacao: { type: String, default: '' },
  variante: { type: String, default: 'padrao' },
})

const lendaAberta = ref(-1)
</script>

<template>
  <section class="bg-white px-6 py-20">
    <div class="mx-auto max-w-4xl">
      <div class="text-center">
        <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">
          Histórias e ancestralidade
        </p>
        <h2 class="font-serif text-4xl" :class="variante === 'xango' ? 'text-[#754735]' : variante === 'oxossi' || variante === 'oxum' ? 'text-[#244A32]' : 'text-[#103D86]'">As lendas de {{ nome }}</h2>
        <p v-if="descricao" class="mx-auto mt-5 max-w-2xl leading-8 text-[#5C6859]">
          {{ descricao }}
        </p>
      </div>
      <div class="mt-10 space-y-4">
        <article
          v-for="(lenda, i) in lendas"
          :key="lenda.titulo"
          class="overflow-hidden rounded-2xl border border-[#E1D8C7] bg-[#F8F5EE]"
        >
          <button
            type="button"
            class="flex w-full items-center justify-between gap-4 p-6 text-left font-serif text-xl transition focus-visible:outline-2 focus-visible:outline-[#B58D38]"
            :class="variante === 'xango' ? 'text-[#754735] hover:bg-[#F3EAE0]' : variante === 'oxossi' ? 'text-[#244A32] hover:bg-[#ECF4EA]' : variante === 'oxum' ? 'text-[#244A32] hover:bg-[#EDF4F9]' : 'text-[#103D86] hover:bg-[#EDF1F9]'"
            :aria-expanded="lendaAberta === i"
            @click="lendaAberta = lendaAberta === i ? -1 : i"
          >
            <span>{{ lenda.titulo }}</span>
            <span class="shrink-0 text-[#B58D38]">{{ lendaAberta === i ? '−' : '+' }}</span>
          </button>
          <div
            v-if="lendaAberta === i"
            :class="variante === 'oxum' ? 'border-t border-[#E1D8C7] px-6 py-6 leading-8 text-[#5C6859]' : 'space-y-4 border-t border-[#E1D8C7] px-6 py-6 leading-8 text-[#5C6859]'"
          >
            <template v-if="lenda.blocos?.length">
              <template v-for="(bloco, indice) in lenda.blocos" :key="indice">
                <h3 v-if="bloco.tipo === 'subtitulo'" class="font-serif text-2xl" :class="variante === 'xango' ? 'text-[#754735]' : variante === 'oxossi' || variante === 'oxum' ? 'text-[#244A32]' : 'text-[#103D86]'">{{ bloco.texto }}</h3>
                <p v-else>{{ bloco.texto }}</p>
              </template>
            </template>
            <template v-else>
              <p v-for="(paragrafo, indice) in (lenda.texto || '').split('\n\n')" :key="indice">{{ paragrafo }}</p>
            </template>
          </div>
        </article>
      </div>
      <p v-if="observacao" class="mt-6 text-center text-sm italic text-[#5C6859]">
        {{ observacao }}
      </p>
    </div>
  </section>
</template>
