<script setup>
import OrixaHero from '../components/OrixaHero.vue'
import CozinhaRitualistica from '../components/CozinhaRitualistica.vue'
import OrixaIntroducao from '../components/OrixaIntroducao.vue'
import OrixaQualidades from '../components/OrixaQualidades.vue'
import OrixaAtribuicoes from '../components/OrixaAtribuicoes.vue'
import OrixaFilhos from '../components/OrixaFilhos.vue'
import OrixaLendas from '../components/OrixaLendas.vue'
import { lendasOxossi } from '../data/oxossiLendas.js'
import { filhosOxossi } from '../data/oxossiFilhos.js'
import { atribuicoesOxossi } from '../data/oxossiAtribuicoes.js'
import { qualidadesOxossi } from '../data/oxossiQualidades.js'
import OrixaCaracteristicas from '../components/OrixaCaracteristicas.vue'
import { caracteristicasOxossi, extrasOxossi } from '../data/oxossiCaracteristicas.js'
import { introducaoOxossi, simbolosOxossi } from '../data/oxossiIntroducao.js'
</script>

<template>
  <main class="min-h-screen bg-[#F8F5EE]">
    <!-- Banner principal de Oxóssi -->
    <OrixaHero
      titulo="Oxóssi"
      subtitulo="Conheça a história, os símbolos e os ensinamentos de Oxóssi, Orixá das matas, da caça e da fartura."
      saudacao="Okê Arô!"
      imagem="/public/images/banners/oxossi.png"
      posicaoImagem="35% 0%"
      posicaoMobile="35% 42%"
      corFundo="#193521"
      corDestaque="#E8D7A8"
      tema="oxossi"
    />

    <!-- Introdução e símbolos de Oxóssi, reutilizando o componente -->
    <OrixaIntroducao
      nome="Oxóssi"
      variante="oxossi"
      :paragrafos="introducaoOxossi"
      :simbolos="simbolosOxossi"
    />

    <!-- Características reutilizáveis, com cores e disposição de Oxóssi -->
    <OrixaCaracteristicas
      nome="Oxóssi"
      variante="oxossi"
      :caracteristicas="caracteristicasOxossi"
      :extras="extrasOxossi"
      descricao="Correspondências tradicionais apresentadas no material de estudo. Algumas variam entre casas."
      observacao="Referências culturais que podem variar conforme a tradição; qualquer uso ritualístico deve seguir a orientação da casa."
      fonte="Fonte: Curso de Umbanda — Sociedade Espiritualista Mata Virgem."
    />

    <OrixaQualidades
      nome="Oxóssi"
      variante="oxossi"
      :qualidades="qualidadesOxossi"
      descricao="O material apresenta 15 denominações de Oxóssi."
      fonte="Fonte: Curso de Umbanda — Sociedade Espiritualista Mata Virgem."
    />

    <!-- Atribuições de Oxóssi: componente reutilizável -->
    <OrixaAtribuicoes nome="Oxóssi" variante="oxossi" :atribuicoes="atribuicoesOxossi" />

    <!-- Filhos de Oxóssi: componente reutilizável -->
    <OrixaFilhos
      nome="Oxóssi"
      variante="oxossi"
      :filhos="filhosOxossi"
      descricao="As descrições representam arquétipos tradicionais, não regras universais sobre a aparência ou personalidade das pessoas filhas de Oxóssi."
      fonte="Fonte: Curso de Umbanda — Sociedade Espiritualista Mata Virgem."
    />

    <!-- Lendas de Oxóssi: mesmo layout reutilizável de Ogum -->
    <OrixaLendas
      nome="Oxóssi"
      variante="oxossi"
      :lendas="lendasOxossi"
      descricao="Conheça as narrativas tradicionais de Oxóssi. Toque em uma história para ler o conteúdo completo."
      observacao="Fonte: Curso de Umbanda — Sociedade Espiritualista Mata Virgem."
    />

    <!-- Cozinha ritualística de Oxóssi -->
    <CozinhaRitualistica />

    <!-- Voltar para os Orixás -->
    <div class="pb-20 text-center">
      <RouterLink
        to="/orixas"
        class="inline-block rounded-xl border border-[#B58D38] px-8 py-4 font-medium text-[#244A32] transition hover:bg-[#244A32] hover:text-white"
      >
        ← Voltar para os Orixás
      </RouterLink>
    </div>
  </main>
</template>
