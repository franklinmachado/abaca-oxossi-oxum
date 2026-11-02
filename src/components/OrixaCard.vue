<script setup>
import { computed } from 'vue'

const props = defineProps({
  nome: String,
  descricao: String,
  imagem: String,
  rota: String,
})

const disponivel = computed(() => Boolean(props.rota))
</script>

<template>
  <component
    :is="disponivel ? 'RouterLink' : 'article'"
    v-bind="disponivel ? { to: rota } : {}"
    :class="[
      'group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition duration-300',
      disponivel ? 'hover:-translate-y-2 hover:shadow-xl' : '',
    ]"
  >
    <!-- Mantém a proporção 1200 x 500 dos cards existentes. -->
    <div class="aspect-[12/5] w-full overflow-hidden">
      <img
        v-if="imagem"
        :src="imagem"
        :alt="`Representação de ${nome}`"
        :class="[
          'h-full w-full object-cover transition duration-500',
          nome === 'Xangô' ? 'object-top' : 'object-center',
          disponivel ? 'group-hover:scale-110' : '',
        ]"
      />
      <div
        v-else
        class="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#244A32] via-[#42664C] to-[#B58D38] px-5 text-center"
        aria-hidden="true"
      >
        <span class="font-serif text-3xl text-white/95 sm:text-4xl">{{ nome }}</span>
      </div>
    </div>

    <div class="flex flex-1 flex-col p-6 text-center">
      <h3 class="font-serif text-2xl text-[#244A32]">{{ nome }}</h3>
      <p class="mt-3 text-sm leading-relaxed text-[#5C6859]">{{ descricao }}</p>
      <span
        :class="[
          'mt-auto inline-block pt-5 text-sm font-semibold',
          disponivel ? 'text-[#B58D38]' : 'text-[#6F786F]',
        ]"
      >
        {{ disponivel ? 'Conhecer Mais →' : 'Conteúdo em preparação' }}
      </span>
    </div>
  </component>
</template>
