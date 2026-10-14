<template>
  <section
    class="relative flex min-h-[550px] items-center justify-center overflow-hidden bg-[#193521] px-6 py-20 text-center text-white bg-cover bg-center bg-no-repeat"
    :style="{
      backgroundImage: 'url(/images/banners/banner-principal.png)',
    }"
  >
    <!-- Imagem de fundo será adicionada depois -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-[#193521]/40 via-[#193521]/50 to-[#102418]/90"
    ></div>

    <div class="relative z-10 mx-auto max-w-3xl">
      <div class="mb-6 text-5xl text-[#D9A72F]">🌿</div>

      <h1 class="font-serif text-5xl leading-tight md:text-7xl">
        Abaçá de<br />
        Oxóssi e Oxum
      </h1>

      <p class="mt-5 text-sm uppercase tracking-[0.25em] text-[#E8D7A8] md:text-base">
        Oxóssi Ibualama · Oxum Opará
      </p>

      <p class="mx-auto mt-8 max-w-lg font-serif text-xl leading-relaxed md:text-2xl">
        Conhecimento, tradição e união para fortalecer nossos irmãos.
      </p>

      <RouterLink
        to="/conhecimentos"
        class="mt-10 inline-block rounded-xl border border-[#D9A72F] bg-[#244A32] px-8 py-4 font-medium text-white transition hover:bg-[#356A45]"
      >
        Explorar Conhecimentos
      </RouterLink>
    </div>
  </section>
</template>
