<script setup>
import OrixaHero from '../components/OrixaHero.vue'
import OrixaIntroducao from '@/components/OrixaIntroducao.vue'
import { introducaoOgum, simbolosOgum } from '@/data/ogumIntroducao'
import OrixaFilhos from '@/components/OrixaFilhos.vue'
import { filhosOgum } from '@/data/ogumFilhos'
import OrixaLendas from '@/components/OrixaLendas.vue'
import OrixaAtribuicoes from '@/components/OrixaAtribuicoes.vue'
import { atribuicoesOgum } from '@/data/ogumAtribuicoes'
import OrixaQualidades from '@/components/OrixaQualidades.vue'
import OrixaCaracteristicas from '@/components/OrixaCaracteristicas.vue'
import { caracteristicasOgum, extrasOgum } from '@/data/ogumCaracteristicas'
import { qualidadesOgum } from '@/data/ogumQualidades'
import { lendasOgum } from '@/data/ogumLendas'
import CozinhaRitualistica from '../components/CozinhaRitualistica.vue'



</script>
<template>
  <main class="min-h-screen bg-[#F8F5EE] text-[#173D80]">
    <OrixaHero
      titulo="Ogum"
      subtitulo="Senhor do ferro, da coragem, do trabalho e dos caminhos."
      saudacao="Ogum Iê!"
      imagem="/images/banners/ogum-banner.png"
      imagemMobile="/images/banners/ogum-banner-mobile.png"
      posicaoImagem="center 25%"
      posicaoMobile="center"
      corFundo="#102B5D"
      corDestaque="#E9C887"
      alinhamento="direita"
      tema="ogum"
    />

    <OrixaIntroducao nome="Ogum" :paragrafos="introducaoOgum" :simbolos="simbolosOgum" />

    <OrixaCaracteristicas
      nome="Ogum"
      :caracteristicas="caracteristicasOgum"
      :extras="extrasOgum"
      descricao="Correspondências tradicionais; algumas variam conforme a casa e a vertente religiosa."
    />

    <OrixaQualidades
      nome="Ogum"
      :qualidades="qualidadesOgum"
      descricao="Dez denominações apresentadas no material de referência."
    />

    <OrixaAtribuicoes nome="Ogum" :atribuicoes="atribuicoesOgum" />

    <OrixaFilhos
      nome="Ogum"
      :filhos="filhosOgum"
      descricao="Descrições simbólicas e tradicionais, não regras universais sobre a personalidade de cada pessoa."
    />

    <OrixaLendas
      nome="Ogum"
      :lendas="lendasOgum"
      descricao="Narrativas tradicionais sobre a força, o ferro e os caminhos de Ogum."
      observacao="Narrativas tradicionais apresentadas conforme o material da casa. Versões e interpretações podem variar entre tradições."
    />

    <CozinhaRitualistica orixa="Ogum" />
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
