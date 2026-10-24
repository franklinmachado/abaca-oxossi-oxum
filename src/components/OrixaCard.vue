<script setup>
defineProps({
  nome: String,
  descricao: String,
  imagem: String,
  rota: String,
})
</script>

<template>
  <RouterLink
    :to="rota"
    class="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <!-- Imagem padronizada na proporção 1200 x 500 -->
    <div class="aspect-[12/5] w-full overflow-hidden">
      <img
        :src="imagem"
        :alt="`Representação de ${nome}`"
        class="h-full w-full object-cover object-center transition duration-500 group-hover:scale-110"
      />
    </div>

    <!-- Conteúdo do cartão -->
    <div class="flex flex-1 flex-col p-6 text-center">
      <h3 class="font-serif text-2xl text-[#244A32]">
        {{ nome }}
      </h3>

      <p class="mt-3 text-sm leading-relaxed text-[#5C6859]">
        {{ descricao }}
      </p>

      <span class="mt-auto inline-block pt-5 text-sm font-semibold text-[#B58D38]">
        Conhecer Mais →
      </span>
    </div>
  </RouterLink>
</template>
