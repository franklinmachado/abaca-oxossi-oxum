<script setup>
defineProps({
  nome: { type: String, required: true },
  caracteristicas: { type: Array, required: true },
  extras: { type: Array, required: true },
  descricao: { type: String, default: '' },
  variante: { type: String, default: 'padrao' },
  observacao: { type: String, default: '' },
  fonte: { type: String, default: '' },
})
</script>

<template>
  <section class="bg-white px-6 py-20">
    <div class="mx-auto max-w-5xl">
      <div class="text-center">
        <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">Fundamentos e tradições</p>
        <h2
          :class="
            variante === 'oxossi'
              ? 'font-serif text-3xl text-[#244A32] sm:text-4xl'
              : 'font-serif text-4xl'
          "
        >
          Características de {{ nome }}
        </h2>
        <p class="mx-auto mt-5 max-w-2xl leading-8 text-[#5C6859]">
          {{ descricao }}
        </p>
      </div>
      <div
        :class="
          variante === 'oxossi'
            ? 'mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5'
            : 'mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'
        "
      >
        <article
          v-for="[titulo, valor] in caracteristicas"
          :key="titulo"
          :class="
            variante === 'oxossi'
              ? 'rounded-2xl border border-[#DCE7D8] bg-[#F8F5EE] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#B58D38] hover:shadow-md'
              : 'rounded-2xl border border-[#E1D8C7] bg-[#F8F5EE] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#B58D38] hover:shadow-md'
          "
        >
          <h3
            :class="
              variante === 'oxossi'
                ? 'text-sm font-semibold text-[#287047]'
                : 'text-sm font-semibold text-[#9C3030]'
            "
          >
            {{ titulo }}
          </h3>
          <p class="mt-3 leading-6 text-[#42574D]">{{ valor }}</p>
        </article>
      </div>
      <details
        :class="
          variante === 'oxossi'
            ? 'group mt-8 rounded-2xl border border-[#DCE7D8] bg-[#F8F5EE] p-6'
            : 'group mt-8 rounded-2xl border border-[#E1D8C7] bg-[#F8F5EE] p-6'
        "
      >
        <summary
          :class="
            variante === 'oxossi'
              ? 'flex cursor-pointer list-none items-center justify-between font-semibold text-[#244A32] [&::-webkit-details-marker]:hidden'
              : 'flex cursor-pointer list-none items-center justify-between font-semibold [&::-webkit-details-marker]:hidden'
          "
        >
          Outras características <span class="transition group-open:rotate-180">⌄</span>
        </summary>
        <div
          :class="
            variante === 'oxossi'
              ? 'mt-6 grid gap-5 border-t border-[#DCE7D8] pt-6 md:grid-cols-2'
              : 'mt-6 grid gap-4 border-t border-[#E1D8C7] pt-6 md:grid-cols-2'
          "
        >
          <div v-for="[titulo, valor] in extras" :key="titulo">
            <h3
              class="font-semibold"
              :class="variante === 'oxossi' ? 'text-[#287047]' : 'text-[#9C3030]'"
            >
              {{ titulo }}
            </h3>
            <p class="mt-2 leading-7 text-[#5C6859]">{{ valor }}</p>
          </div>
        </div>
        <p v-if="observacao" class="mt-6 text-sm italic text-[#5C6859]">{{ observacao }}</p>
      </details>
      <p v-if="fonte" class="mt-8 text-center text-sm italic text-[#5C6859]">{{ fonte }}</p>
    </div>
  </section>
</template>
