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
    class="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <div class="h6 overflow-hidden">
      <img
        :src="imagem"
        :alt="nome"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-110"
      />
    </div>

    <div class="p-6">
      <h3 class="font-serif text-2xl text-[#244A32]">
        {{ nome }}
      </h3>
      <p class="mt-3 text-sm leading-relaxed text-[#5C6859]">
        {{ descricao }}
      </p>
      <span class="mt-5 inline-block text-sm font-semibold text-[#B58D38]"> Conheçer Mais → </span>
    </div>
  </RouterLink>
</template>
