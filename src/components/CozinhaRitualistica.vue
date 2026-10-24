<script setup>
const props = defineProps({ orixa: { type: String, default: 'Oxóssi' } })
const receitasOxossi = [
  {
    nome: 'Axoxô',
    imagem: '/images/comidas/axoxo.png',
    descricao: 'A comida mais comum de Oxóssi, preparada com milho vermelho e coco.',
    ingredientes: ['Milho vermelho', 'Água', 'Coco em fatias', 'Amendoim (opcional)'],
    preparo: [
      'Cozinha-se o milho vermelho somente em água.',
      'Depois de esfriar, coloca-se numa gamela e enfeita-se com fatias de coco.',
      'Pode-se cozinhar junto com o milho um pouco de amendoim.',
    ],
  },
  {
    nome: 'Quibebe',
    imagem: '/images/comidas/quibebe.png',
    descricao: 'Preparação de abóbora com temperos, conforme o material de estudo.',
    ingredientes: [
      '1 kg de abóbora',
      '2 colheres de manteiga',
      '1 cebola média',
      '2 ou 3 tomates',
      '1 pimenta malagueta',
      'Água, sal e açúcar',
    ],
    preparo: [
      'Descasca-se e corta-se a abóbora em pedaços.',
      'Refoga-se a manteiga com a cebola picada até ficar transparente ou levemente corada.',
      'Acrescentam-se os tomates, a pimenta e a abóbora.',
      'Adicionam-se um pouco de água, sal e açúcar. Cozinha-se tampado em fogo lento até amaciar.',
      'Ao colocar na travessa, amassa-se um pouco.',
    ],
  },
  {
    nome: 'Pamonha de milho verde',
    imagem: '/images/comidas/pamonha.png',
    descricao: 'Preparação de milho verde com coco, envolvida em palha de milho.',
    ingredientes: [
      '24 espigas de milho verde',
      '1 coco ralado',
      'Sal',
      'Açúcar',
      'Palhas de milho',
    ],
    preparo: [
      'Rala-se o milho verde, não muito fino, e escorre-se o caldo.',
      'Mistura-se o bagaço com o coco ralado, sem retirar o leite do coco.',
      'Tempera-se com sal e açúcar.',
      'Enrolam-se pequenas porções em palha de milho e amarram-se bem.',
      'Cozinha-se em água fervente com sal até desprender um bom cheiro de milho verde.',
    ],
  },
]
const receitasOxum = [
  {
    nome: 'Omolocum',
    imagem: '/images/comidas/oxum-omolocum.png',
    descricao: 'Preparação com feijão-fradinho, dendê, salsa, camarão seco e ovos cozidos.',
    ingredientes: [
      'Feijão-fradinho',
      'Azeite de dendê',
      'Salsa picada',
      'Camarão seco picado ou ralado',
      'Ovos cozidos',
    ],
    preparo: [
      'Cozinha-se o feijão-fradinho.',
      'Passa-se no azeite de dendê com a salsa e o camarão seco.',
      'Coloca-se em uma tigela de louça branca e acrescentam-se os ovos cozidos por cima.',
    ],
  },
  {
    nome: 'Canjica branca com feijão-fradinho',
    imagem: '/images/comidas/oxum-canjica.png',
    descricao: 'Preparação de canjica branca, feijão-fradinho e ovos cozidos.',
    ingredientes: ['Canjica branca', 'Feijão-fradinho', 'Três ovos cozidos'],
    preparo: [
      'Cozinham-se separadamente a canjica e o feijão-fradinho em água pura, sem sal.',
      'Em uma tigela de louça branca, coloca-se uma camada de canjica e outra de feijão-fradinho.',
      'Finaliza-se com três ovos cozidos cortados em rodelas.',
    ],
  },
]
const receitas = props.orixa === 'Oxum' ? receitasOxum : receitasOxossi
const ehOxum = props.orixa === 'Oxum'
</script>

<template>
  <section class="bg-[#F8F5EE] px-6 py-20">
    <div class="mx-auto max-w-6xl">
      <div class="mb-12 text-center">
        <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">Cozinha ritualística</p>

        <h2 class="font-serif text-4xl text-[#244A32]">Preparações de {{ orixa }}</h2>

        <p class="mx-auto mt-6 max-w-2xl leading-8 text-[#5C6859]">
          Conheça as preparações tradicionais apresentadas no material de estudo da Sociedade
          Espiritualista Mata Virgem.
        </p>
      </div>

      <div class="grid items-start gap-8" :class="ehOxum ? 'lg:grid-cols-2' : 'lg:grid-cols-3'">
        <article
          v-for="receita in receitas"
          :key="receita.nome"
          class="self-start overflow-hidden rounded-2xl border bg-white shadow-sm"
          :class="ehOxum ? 'border-[#E5D9BE]' : 'border-[#DCE7D8]'"
        >
          <div class="h-56 overflow-hidden bg-[#E8E8DC]">
            <img
              :src="receita.imagem"
              :alt="`Representação ilustrativa de ${receita.nome}`"
              class="h-full w-full object-cover"
              @error="
                (event) => {
                  event.target.style.display = 'none'
                }
              "
              loading="lazy"
            />
          </div>

          <div class="p-6">
            <h3 class="font-serif text-3xl text-[#244A32]">
              {{ receita.nome }}
            </h3>

            <p class="mt-4 leading-7 text-[#5C6859]">
              {{ receita.descricao }}
            </p>

            <details class="group mt-6 rounded-xl border border-[#DCE7D8] bg-white p-5">
              <summary
                class="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-[#244A32] [&::-webkit-details-marker]:hidden"
              >
                <span class="group-open:hidden"> Ver receita completa </span>

                <span class="hidden group-open:inline"> Recolher receita </span>

                <span
                  aria-hidden="true"
                  class="shrink-0 text-xl transition-transform group-open:rotate-180"
                >
                  ˅
                </span>
              </summary>

              <div class="mt-5 border-t border-[#DCE7D8] pt-5">
                <h4 class="font-semibold text-[#244A32]">Ingredientes</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-[#5C6859]">
                  <li v-for="ingrediente in receita.ingredientes" :key="ingrediente">
                    {{ ingrediente }}
                  </li>
                </ul>

                <h4 class="mt-6 font-semibold text-[#244A32]">Modo de preparo</h4>
                <ol class="mt-3 list-decimal space-y-3 pl-5 leading-7 text-[#5C6859]">
                  <li v-for="passo in receita.preparo" :key="passo">
                    {{ passo }}
                  </li>
                </ol>
              </div>
            </details>
          </div>
        </article>
      </div>

      <p class="mx-auto mt-10 max-w-3xl text-center text-sm italic leading-7 text-[#5C6859]">
        Estas preparações correspondem às receitas apresentadas no material de estudo. Sua
        utilização ritualística deve respeitar os fundamentos e as orientações da casa.
      </p>

      <p class="mt-3 text-center text-sm italic text-[#5C6859]">
        Fonte: Curso de Umbanda — Sociedade Espiritualista Mata Virgem.
      </p>
    </div>
  </section>
</template>
