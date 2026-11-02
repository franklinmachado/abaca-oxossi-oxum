<script setup>
import { ref } from 'vue'

defineProps({
  nome: { type: String, required: true },
  qualidades: { type: Array, required: true },
  descricao: { type: String, default: '' },
  variante: { type: String, default: 'padrao' },
  fonte: { type: String, default: '' },
})

const mostrarQualidades = ref(false)
</script>

<template>
    <section  :class="variante === 'oxum' ? 'px-6 py-20' : 'bg-[#F8F5EE] px-6 py-20'">
      <div class="mx-auto max-w-5xl text-center">
        <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">
          Tradições e denominações
        </p>
        <h2 :class="variante === 'oxossi' ? 'font-serif text-3xl text-[#244A32] sm:text-4xl' : 'font-serif text-4xl'">Qualidades de {{ nome }}</h2>
        <p class="mx-auto mt-5 text-[#5C6859]">
          {{ descricao }}
        </p>
        <button
          type="button"
          :aria-expanded="mostrarQualidades"
          :class="variante === 'xango' ? 'mt-8 rounded-full bg-[#754735] px-7 py-3 font-semibold text-white transition hover:bg-[#A13D32] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B58D38]' : variante === 'oxum' ? 'mt-8 rounded-full bg-[#315F85] px-7 py-3 font-semibold text-white transition hover:bg-[#244C72] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B58D38]' : variante === 'oxossi' ? 'mt-8 rounded-full bg-[#244A32] px-7 py-3 font-semibold text-white transition hover:bg-[#346D4A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B58D38]' : 'mt-8 rounded-full bg-[#173D80] px-7 py-3 font-semibold text-white transition hover:bg-[#102B5D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B58D38]'"
          @click="mostrarQualidades = !mostrarQualidades"
        >
          {{ mostrarQualidades ? `Recolher as ${qualidades.length} denominações` : `Ver as ${qualidades.length} denominações` }}
        </button>
        <div
          v-if="mostrarQualidades"
          class="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <div
            v-for="(qualidade, i) in qualidades"
            :key="qualidade"
            :class="variante === 'oxum' ? 'rounded-xl border border-[#E1D8C7] bg-white px-5 py-5 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#B58D38] hover:bg-[#EDF4F9] hover:shadow-md' : variante === 'oxossi' ? 'rounded-xl border border-[#DCE7D8] bg-white px-5 py-5 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#B58D38] hover:bg-[#ECF4EA] hover:shadow-md' : 'rounded-xl border border-[#E1D8C7] bg-white px-5 py-5 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#B58D38] hover:bg-[#EDF1F9] hover:shadow-md'"
          >
            <span class="mr-2 text-sm text-[#B58D38]">{{ String(i + 1).padStart(2, '0') }}</span
            ><span :class="variante === 'oxossi' ? 'font-serif text-xl text-[#244A32]' : 'font-serif text-xl'">{{ qualidade }}</span>
          </div>
        </div>
        <p v-if="fonte" class="mt-8 text-sm italic text-[#5C6859]">{{ fonte }}</p>
      </div>
    </section>
</template>
