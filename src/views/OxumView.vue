<script setup>
import OrixaHero from '../components/OrixaHero.vue'
import OrixaIntroducao from '../components/OrixaIntroducao.vue'
import OrixaCaracteristicas from '../components/OrixaCaracteristicas.vue'
import OrixaQualidades from '../components/OrixaQualidades.vue'
import OrixaAtribuicoes from '../components/OrixaAtribuicoes.vue'
import OrixaFilhos from '../components/OrixaFilhos.vue'
import OrixaLendas from '../components/OrixaLendas.vue'
import { oxumLendas } from '../data/oxumLendas.js'
import { oxumFilhos } from '../data/oxumFilhos.js'
import { oxumQualidades } from '../data/oxumQualidades.js'
import { oxumAtribuicoes } from '../data/oxumAtribuicoes.js'
import { oxumCaracteristicas } from '../data/oxumCaracteristicas.js'
import { oxumIntroducao } from '../data/oxumIntroducao.js'
import CozinhaRitualistica from '../components/CozinhaRitualistica.vue'

</script>

<template>
  <main class="min-h-screen bg-[#F8F5EE] text-[#244A32]">
    <OrixaHero
      titulo="Oxum"
      subtitulo="Senhora das águas doces, do amor, da fertilidade e da abundância."
      saudacao="Ora Ieiêô!"
      imagem="/images/banners/oxum-banner.png"
      imagemMobile="/images/banners/oxum-banner-mobile.png"
      posicaoImagem="center 0%"
      posicaoMobile="center"
      corFundo="#193F64"
      corDestaque="#F1D18A"
      tema="oxum"
    />

    <OrixaIntroducao
      nome="Oxum"
      :paragrafos="oxumIntroducao.paragrafos"
      :simbolos="oxumIntroducao.simbolos"
      variante="oxum"
    />

    <OrixaCaracteristicas
      nome="Oxum"
      :caracteristicas="oxumCaracteristicas.caracteristicas"
      :extras="oxumCaracteristicas.extras"
      :descricao="oxumCaracteristicas.descricao"
      :observacao="oxumCaracteristicas.observacao"
      variante="oxum"
    />

    <OrixaQualidades
      nome="Oxum"
      :qualidades="oxumQualidades.qualidades"
      :descricao="oxumQualidades.descricao"
      variante="oxum"
    />

    <OrixaAtribuicoes
      nome="Oxum"
      :atribuicoes="oxumAtribuicoes"
      variante="oxum"
    />

    <OrixaFilhos
      nome="Oxum"
      :filhos="oxumFilhos.filhos"
      :descricao="oxumFilhos.descricao"
      variante="oxum"
    />

    <OrixaLendas
      nome="Oxum"
      :lendas="oxumLendas.lendas"
      :descricao="oxumLendas.descricao"
      :observacao="oxumLendas.observacao"
      variante="oxum"
    />

    <CozinhaRitualistica orixa="Oxum" />
    <div class="flex justify-center px-6 pb-20 pt-12">
      <RouterLink
        to="/orixas"
        class="inline-flex items-center justify-center rounded-xl border border-[#C99735] px-8 py-4 text-[#244A32] transition-colors duration-300 hover:bg-[#C99735] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#244A32]"
      >
        ← Voltar para os Orixás
      </RouterLink>
    </div>
  </main>
</template>
