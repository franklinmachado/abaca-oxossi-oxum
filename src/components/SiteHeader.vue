<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuAberto = ref(false)

const links = [
  { nome: 'Início', rota: '/' },
  { nome: 'Orixás', rota: '/orixas' },
  { nome: 'Ervas e Plantas', rota: '/ervas' },
  { nome: 'Conhecimentos', rota: '/conhecimentos' },
  { nome: 'Terreiro', rota: '/terreiro' },
  { nome: 'Contato', rota: '/contato' },
]
</script>

<template>
  <header class="bg-[#F8F5EE] shadow-sm">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
      <RouterLink to="/" class="flex items-center gap-3">
        <div
          class="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AA43] text-2xl text-[#244A32]"
        >
          🌿
        </div>

        <div>
          <h1 class="font-serif text-lg leading-tight text-[#244A32]">
            Abaçá de<br />
            Oxóssi e Oxum
          </h1>

          <p class="text-[9px] tracking-widest text-[#8B743F]">OXÓSSI IBUALAMA · OXUM OPARÁ</p>
        </div>
      </RouterLink>

      <nav class="hidden items-center gap-6 lg:flex">
        <RouterLink
          v-for="link in links"
          :key="link.rota"
          :to="link.rota"
          class="text-sm font-medium text-[#29442A] transition hover:text-[#C79B32]"
        >
          {{ link.nome }}
        </RouterLink>
      </nav>

      <button
        class="rounded-lg p-2 text-2xl text-[#244A32] lg:hidden"
        type="button"
        :aria-expanded="menuAberto"
        aria-label="Abrir ou fechar menu"
        @click="menuAberto = !menuAberto"
      >
        {{ menuAberto ? '✕' : '☰' }}
      </button>
    </div>

    <nav
      v-if="menuAberto"
      class="flex flex-col gap-1 border-t border-[#E7E0D2] px-5 py-3 lg:hidden"
    >
      <RouterLink
        v-for="link in links"
        :key="link.rota"
        :to="link.rota"
        class="rounded-lg px-3 py-3 text-sm text-[#29442A] hover:bg-[#EAE7DC]"
        @click="menuAberto = false"
      >
        {{ link.nome }}
      </RouterLink>
    </nav>
  </header>
</template>
