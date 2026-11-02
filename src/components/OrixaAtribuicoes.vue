<script setup>
defineProps({
  nome: { type: String, required: true },
  atribuicoes: { type: Object, required: true },
  variante: { type: String, default: 'padrao' },
})
</script>

<template>
  <section class="bg-white px-6 py-20">
    <div class="mx-auto max-w-3xl text-center">
      <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">
        {{ atribuicoes.chamada }}
      </p>
      <h2
        class="font-serif text-4xl"
        :class="variante === 'oxossi' ? 'text-[#244A32]' : ''"
      >
        As atribuições de {{ nome }}
      </h2>
      <article class="mt-10 rounded-3xl border border-[#E1D8C7] bg-[#F8F5EE] p-8 shadow-sm sm:p-12">
        <div class="text-4xl" :class="variante === 'oxossi' ? 'text-[#287047]' : 'text-[#9C3030]'">
          {{ atribuicoes.icone }}
        </div>
        <h3
          class="mt-5 font-serif text-3xl"
          :class="variante === 'oxossi' ? 'text-[#244A32]' : ''"
        >
          {{ atribuicoes.titulo || (variante === 'oxossi' ? 'A busca pelo conhecimento' : '') }}
        </h3>
        <p class="mt-6 leading-8 text-[#5C6859]">{{ atribuicoes.paragrafos[0] }}</p>
        <p class="mt-5 leading-8 text-[#5C6859]">{{ atribuicoes.paragrafos[1] }}</p>
      </article>
      <p v-if="atribuicoes.fonte" class="mt-6 text-sm italic text-[#5C6859]">
        {{ atribuicoes.fonte }}
      </p>
    </div>
  </section>
</template>
