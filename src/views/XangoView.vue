<script setup>
import OrixaHero from '../components/OrixaHero.vue'
import OrixaIntroducao from '../components/OrixaIntroducao.vue'
import { xangoIntroducao } from '../data/xangoIntroducao.js'
import OrixaCaracteristicas from '../components/OrixaCaracteristicas.vue'
import OrixaQualidades from '../components/OrixaQualidades.vue'
import OrixaAtribuicoes from '../components/OrixaAtribuicoes.vue'
import OrixaFilhos from '../components/OrixaFilhos.vue'
import OrixaLendas from '../components/OrixaLendas.vue'
import CozinhaRitualistica from '../components/CozinhaRitualistica.vue'
import { xangoCaracteristicas } from '../data/xangoCaracteristicas.js'
import { xangoQualidades } from '../data/xangoQualidades.js'
import { xangoAtribuicoes } from '../data/xangoAtribuicoes.js'
import { xangoFilhos } from '../data/xangoFilhos.js'
import { xangoLendas } from '../data/xangoLendas.js'
</script>

<template>
  <main class="min-h-screen bg-[#F8F5EE] text-[#754735]">
    <OrixaHero
      titulo="Xangô"
      subtitulo="Orixá da justiça, da autoridade, dos raios e dos trovões."
      saudacao="Kaô Cabecile!"
      imagem="/images/banners/xango-banner.png"
      imagemMobile="/images/banners/xango-banner.png"
      posicaoImagem="center"
      posicaoMobile="center"
      corFundo="#754735"
      corDestaque="#E8C57B"
      tema="xango"
    />

    <OrixaIntroducao
      nome="Xangô"
      :paragrafos="xangoIntroducao.paragrafos"
      :simbolos="xangoIntroducao.simbolos"
      variante="xango"
    />

    <OrixaCaracteristicas
      nome="Xangô"
      :caracteristicas="xangoCaracteristicas.caracteristicas"
      :extras="xangoCaracteristicas.extras"
      :descricao="xangoCaracteristicas.descricao"
      :observacao="xangoCaracteristicas.observacao"
      :fonte="xangoCaracteristicas.fonte"
      variante="xango"
    />
    <OrixaQualidades
      nome="Xangô"
      :qualidades="xangoQualidades.qualidades"
      :descricao="xangoQualidades.descricao"
      variante="xango"
    />
    <OrixaAtribuicoes nome="Xangô" :atribuicoes="xangoAtribuicoes" variante="xango" />
    <OrixaFilhos
      nome="Xangô"
      :filhos="xangoFilhos.filhos"
      :descricao="xangoFilhos.descricao"
      variante="xango"
    />
    <OrixaLendas
      nome="Xangô"
      :lendas="xangoLendas.lendas"
      :descricao="xangoLendas.descricao"
      :observacao="xangoLendas.observacao"
      variante="xango"
    />
    <CozinhaRitualistica orixa="Xangô" />
    <div class="flex justify-center px-6 pb-20 pt-12">
      <RouterLink
        to="/orixas"
        class="inline-flex items-center justify-center rounded-xl border border-[#B58D38] px-8 py-4 text-[#754735] transition-colors duration-300 hover:bg-[#B58D38] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#754735]"
      >
        ← Voltar para os Orixás
      </RouterLink>
    </div>
  </main>
</template>
