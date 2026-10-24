<script setup>
import { ref } from 'vue'
import OrixaHero from '../components/OrixaHero.vue'
import CozinhaRitualistica from '../components/CozinhaRitualistica.vue'

const mostrarQualidades = ref(false)
const filhoAberto = ref(-1)
const caracteristicas = [
  ['Cores', 'Verde (azul-celeste-claro no Candomblé)'],
  ['Elemento', 'Terra'],
  ['Natureza', 'Matas'],
  ['Símbolo', 'Ofá (arco e flecha)'],
  ['Saudação', 'Okê Arô! (Odé Kokê Maior)'],
  ['Dia da semana', 'Quinta-feira'],
  ['Data comemorativa', '20 de janeiro'],
  ['Número', '6'],
  ['Pedras e metal', 'Esmeralda, amazonita; bronze (latão)'],
  ['Sincretismo', 'São Sebastião'],
]
const extras = [
  ['Fio de contas', 'Verde leitoso (azul-turquesa e azul-claro).'],
  [
    'Ervas',
    'Alecrim, guiné, vence-demanda, abre-caminho, peregum (verde), taioba, espinheira-santa, jurema, jureminha, mangueira, desata-nó, erva-de-Oxóssi, erva-da-jurema, alfavaca, caiçara e eucalipto.',
  ],
  ['Flores e essências', 'Flores do campo; essência de alecrim.'],
  ['Outras pedras', 'Turquesa, quartzo verde e calcita verde.'],
  ['Correspondências', 'Planeta: Vênus. Chakra: esplênico. Saúde: aparelho respiratório.'],
  ['Bebidas', 'Vinho tinto (água de coco, caldo de cana, aluá).'],
  ['Animais', 'Tatu, veado e javali (animais associados à caça).'],
  [
    'Comidas',
    'Axoxô — milho com fatias de coco; frutas; carne de caça; taioba; ewá — feijão-fradinho torrado na panela de barro, papa de coco e frutas.',
  ],
  ['Incompatibilidades', 'Mel, cabeça de bicho (nos sacrifícios e alimentos) e ovo.'],
]

const qualidadesOxossi = [
  'Êboalama',
  'Orè',
  'Inlé ou Erinlè',
  'Fayemi',
  'Ondun',
  'Asunara',
  'Apala',
  'Agbandada',
  'Owala',
  'Kusi',
  'Ibuanun',
  'Olumeye',
  'Akanbi',
  'Alapade',
  'Mutalambo',
]

const caracteristicasFilhos = [
  {
    titulo: 'Características físicas',
    paragrafos: [
      'O material descreve os filhos de Oxóssi como pessoas geralmente joviais, rápidas e espertas, tanto mental quanto fisicamente.',
      'Fisicamente, são apresentados como relativamente magros, um pouco nervosos, porém controlados.',
    ],
  },
  {
    titulo: 'Concentração e paciência',
    paragrafos: [
      'São associados a uma grande capacidade de concentração, atenção e firme determinação para alcançar seus objetivos.',
      'Assim como o caçador aguarda o momento correto para agir, a paciência é uma característica importante desse arquétipo.',
    ],
  },
  {
    titulo: 'Silêncio e observação',
    paragrafos: [
      'São descritos como reservados, discretos e atentos ao ambiente. O silêncio permite ao caçador observar sem alertar sua caça.',
      'O material também os associa ao respeito pelo espaço individual e à preferência por evitar julgamentos sobre os outros.',
    ],
  },
  {
    titulo: 'Liberdade e independência',
    paragrafos: [
      'A necessidade de independência é uma característica marcante desse arquétipo, relacionada ao caçador que se afasta da comunidade para entrar na mata.',
      'São descritos como pessoas que preferem atividades realizadas com autonomia e pouca dependência do trabalho em equipe.',
    ],
  },
  {
    titulo: 'Trabalho e responsabilidade',
    paragrafos: [
      'Apesar da valorização da independência, são associados a um forte sentido de dever e responsabilidade, especialmente em relação ao sustento de seu grupo ou família.',
      'O material também descreve a demonstração de cuidado e proteção por meio do trabalho e da provisão de recursos.',
    ],
  },
  {
    titulo: 'Relacionamentos e convivência',
    paragrafos: [
      'Nos relacionamentos, o material destaca a valorização da liberdade e do espaço individual, assim como uma possível dificuldade em manter vínculos afetivos muito estáveis.',
      'Também aponta uma preferência por parceiros igualmente independentes.',
      'Apesar da personalidade reservada, são descritos como apreciadores da camaradagem, das conversas prolongadas e das reuniões alegres. Essas características podem ser modificadas pela influência do segundo Orixá.',
    ],
  },
]
</script>

<template>
  <main class="min-h-screen bg-[#F8F5EE]">
    <!-- Banner principal de Oxóssi -->
    <OrixaHero
      titulo="Oxóssi"
      subtitulo="Conheça a história, os símbolos e os ensinamentos de Oxóssi, Orixá das matas, da caça e da fartura."
      imagem="/images/orixas/banner-oxossi.png"
      posicaoImagem="35% center"
    />

    <!-- Apresentação unificada de Oxóssi -->
    <section class="bg-[#F8F5EE] px-6 pt-16 pb-10 sm:pt-20 sm:pb-12">
      <div class="mx-auto max-w-4xl text-center">
        <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">Nossa ancestralidade</p>
        <h2 class="font-serif text-3xl sm:text-4xl text-[#244A32]">Conhecendo Oxóssi</h2>
        <div class="mx-auto mt-6 h-0.5 w-14 bg-[#B58D38]"></div>
        <div class="mx-auto mt-8 max-w-2xl space-y-6 leading-8 text-[#5C6859]">
          <p>
            Oxóssi é o Orixá das matas, da caça e da fartura, associado ao conhecimento, à sabedoria
            e à conexão com a natureza. No material de estudo, é apresentado como um caçador
            habilidoso, ligado às florestas, aos animais e à ancestralidade.
          </p>
          <p>
            Entre seus principais símbolos está o Ofá, seu arco e flecha. As narrativas também
            apresentam sua ligação com outros Orixás, especialmente Ogum, de quem recebe suas armas
            de caçador em uma das histórias.
          </p>
          <p>
            Neste espaço, vamos conhecer sua história, seus símbolos, suas qualidades e seus
            ensinamentos, respeitando os fundamentos e as tradições do nosso Abaçá.
          </p>
        </div>
      </div>
    </section>

    <!-- Símbolos e elementos de Oxóssi -->
    <section class="bg-[#F8F5EE] px-6 pt-10 pb-16 sm:pt-12 sm:pb-20">
      <div class="mx-auto max-w-5xl">
        <div class="mb-12 text-center">
          <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">Tradição e simbolismo</p>

          <h2 class="font-serif text-3xl sm:text-4xl text-[#244A32]">
            Símbolos e elementos de Oxóssi
          </h2>

          <p class="mx-auto mt-5 max-w-2xl leading-8 text-[#5C6859]">
            Conheça alguns dos elementos associados a Oxóssi nas tradições apresentadas em nossos
            materiais de estudo.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <!-- Ofá -->
          <article class="rounded-2xl border border-[#E5D9BE] bg-white p-8 shadow-sm">
            <div class="mb-5 text-4xl">🏹</div>
            <h3 class="mb-3 font-serif text-2xl text-[#244A32]">Ofá</h3>
            <p class="leading-7 text-[#5C6859]">
              O arco e flecha representam Oxóssi como caçador, destacando sua habilidade e sua
              ligação com a caça.
            </p>
          </article>

          <!-- Matas -->
          <article class="rounded-2xl border border-[#E5D9BE] bg-white p-8 shadow-sm">
            <div class="mb-5 text-4xl">🌿</div>
            <h3 class="mb-3 font-serif text-2xl text-[#244A32]">As matas</h3>
            <p class="leading-7 text-[#5C6859]">
              As florestas são espaços associados a Oxóssi, às árvores, aos animais e às narrativas
              ancestrais.
            </p>
          </article>

          <!-- Eruexim -->
          <article class="rounded-2xl border border-[#E5D9BE] bg-white p-8 shadow-sm">
            <div class="mb-5 text-4xl">✦</div>
            <h3 class="mb-3 font-serif text-2xl text-[#244A32]">Eruexim</h3>
            <p class="leading-7 text-[#5C6859]">
              O material de estudo também apresenta o Eruexim, descrito como um rabo de boi, entre
              os símbolos associados a Oxóssi.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Características organizadas conforme o padrão de Oxum -->
    <section class="bg-white px-6 py-20">
      <div class="mx-auto max-w-5xl">
        <div class="text-center">
          <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">
            Fundamentos e tradições
          </p>
          <h2 class="font-serif text-3xl text-[#244A32] sm:text-4xl">Características de Oxóssi</h2>
          <p class="mx-auto mt-5 max-w-2xl leading-8 text-[#5C6859]">
            Correspondências tradicionais apresentadas no material de estudo. Algumas variam entre
            casas.
          </p>
        </div>
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <article
            v-for="[titulo, valor] in caracteristicas"
            :key="titulo"
            class="rounded-2xl border border-[#DCE7D8] bg-[#F8F5EE] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#B58D38] hover:shadow-md"
          >
            <h3 class="text-sm font-semibold text-[#287047]">{{ titulo }}</h3>
            <p class="mt-3 leading-6 text-[#42574D]">{{ valor }}</p>
          </article>
        </div>
        <details class="group mt-8 rounded-2xl border border-[#DCE7D8] bg-[#F8F5EE] p-6">
          <summary
            class="flex cursor-pointer list-none items-center justify-between font-semibold text-[#244A32] [&::-webkit-details-marker]:hidden"
          >
            Outras características <span class="transition group-open:rotate-180">⌄</span>
          </summary>
          <div class="mt-6 grid gap-5 border-t border-[#DCE7D8] pt-6 md:grid-cols-2">
            <div v-for="[titulo, valor] in extras" :key="titulo">
              <h3 class="font-semibold text-[#287047]">{{ titulo }}</h3>
              <p class="mt-2 leading-7 text-[#5C6859]">{{ valor }}</p>
            </div>
          </div>
          <p class="mt-6 text-sm italic text-[#5C6859]">
            Referências culturais que podem variar conforme a tradição; qualquer uso ritualístico
            deve seguir a orientação da casa.
          </p>
        </details>
        <p class="mt-8 text-center text-sm italic text-[#5C6859]">
          Fonte: Curso de Umbanda — Sociedade Espiritualista Mata Virgem.
        </p>
      </div>
    </section>

    <section class="bg-[#F8F5EE] px-6 py-20">
      <div class="mx-auto max-w-5xl text-center">
        <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">
          Tradições e denominações
        </p>
        <h2 class="font-serif text-3xl text-[#244A32] sm:text-4xl">Qualidades de Oxóssi</h2>
        <p class="mx-auto mt-5 text-[#5C6859]">O material apresenta 15 denominações de Oxóssi.</p>
        <button
          type="button"
          :aria-expanded="mostrarQualidades"
          class="mt-8 rounded-full bg-[#244A32] px-7 py-3 font-semibold text-white transition hover:bg-[#346D4A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B58D38]"
          @click="mostrarQualidades = !mostrarQualidades"
        >
          {{ mostrarQualidades ? 'Recolher as 15 denominações' : 'Ver as 15 denominações' }}
        </button>
        <div
          v-if="mostrarQualidades"
          class="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <div
            v-for="(qualidade, i) in qualidadesOxossi"
            :key="qualidade"
            class="rounded-xl border border-[#DCE7D8] bg-white px-5 py-5 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#B58D38] hover:bg-[#ECF4EA] hover:shadow-md"
          >
            <span class="mr-2 text-sm text-[#B58D38]">{{ String(i + 1).padStart(2, '0') }}</span
            ><span class="font-serif text-xl text-[#244A32]">{{ qualidade }}</span>
          </div>
        </div>
        <p class="mt-8 text-sm italic text-[#5C6859]">
          Fonte: Curso de Umbanda — Sociedade Espiritualista Mata Virgem.
        </p>
      </div>
    </section>

    <!-- Atribuições de Oxóssi -->
    <section class="bg-[#F8F5EE] px-6 py-20">
      <div class="mx-auto max-w-4xl">
        <div class="mb-10 text-center">
          <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">
            Sabedoria e conhecimento
          </p>

          <h2 class="font-serif text-3xl sm:text-4xl text-[#244A32]">As atribuições de Oxóssi</h2>
        </div>

        <div class="rounded-2xl border border-[#DCE7D8] bg-[#F8F5EE] p-8 md:p-12">
          <div class="mb-6 text-center text-4xl">🌿</div>

          <p class="text-center text-lg leading-9 text-[#244A32]">
            Oxóssi é o caçador por excelência, mas sua busca também representa a procura pelo
            conhecimento.
          </p>

          <p class="mt-6 text-center leading-8 text-[#5C6859]">
            No material de estudo, é apresentado como cientista e doutrinador, aquele que leva o
            alimento da fé e o saber aos espíritos fragilizados, fortalecendo o conhecimento e a fé
            religiosa.
          </p>
        </div>

        <p class="mt-6 text-center text-sm italic text-[#5C6859]">
          Fonte: Curso de Umbanda — Sociedade Espiritualista Mata Virgem.
        </p>
      </div>
    </section>

    <section class="bg-white px-6 py-20">
      <div class="mx-auto max-w-4xl">
        <div class="text-center">
          <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">
            Arquétipos tradicionais
          </p>
          <h2 class="font-serif text-3xl text-[#244A32] sm:text-4xl">Os filhos de Oxóssi</h2>
          <p class="mx-auto mt-5 max-w-2xl leading-8 text-[#5C6859]">
            As descrições representam arquétipos tradicionais, não regras universais sobre a
            aparência ou personalidade das pessoas filhas de Oxóssi.
          </p>
        </div>
        <div class="mt-10 space-y-4">
          <article
            v-for="(filho, i) in caracteristicasFilhos"
            :key="filho.titulo"
            class="overflow-hidden rounded-2xl border border-[#DCE7D8] bg-white shadow-sm"
          >
            <button
              type="button"
              :aria-expanded="filhoAberto === i"
              class="flex w-full items-center justify-between gap-4 p-6 text-left font-serif text-xl text-[#244A32] transition hover:bg-[#ECF4EA] focus-visible:outline-2 focus-visible:outline-[#B58D38]"
              @click="filhoAberto = filhoAberto === i ? -1 : i"
            >
              <span>{{ filho.titulo }}</span
              ><span class="shrink-0 text-[#B58D38]">{{ filhoAberto === i ? '−' : '+' }}</span>
            </button>
            <div
              v-if="filhoAberto === i"
              class="space-y-4 border-t border-[#DCE7D8] px-6 py-6 leading-8 text-[#5C6859]"
            >
              <p v-for="paragrafo in filho.paragrafos" :key="paragrafo">{{ paragrafo }}</p>
            </div>
          </article>
        </div>
        <p class="mt-8 text-center text-sm italic text-[#5C6859]">
          Fonte: Curso de Umbanda — Sociedade Espiritualista Mata Virgem.
        </p>
      </div>
    </section>

    <!-- Lendas: leitura progressiva sem retirar o texto original -->
    <section class="bg-[#F8F5EE] px-6 py-20">
      <div class="mx-auto max-w-4xl">
        <div class="text-center">
          <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">
            Histórias e ancestralidade
          </p>
          <h2 class="font-serif text-3xl text-[#244A32] sm:text-4xl">Lendas de Oxóssi</h2>
          <p class="mx-auto mt-5 max-w-2xl leading-8 text-[#5C6859]">
            Conheça as narrativas tradicionais de Oxóssi. Toque em uma história para ler o conteúdo
            completo.
          </p>
        </div>
        <div class="mt-10 space-y-4">
          <details
            class="group overflow-hidden rounded-2xl border border-[#DCE7D8] bg-white shadow-sm"
          >
            <summary
              class="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-serif text-xl text-[#244A32] transition hover:bg-[#ECF4EA] [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-[#B58D38]"
            >
              <span>Oxóssi: o Rei de Keto e Senhor das Matas</span
              ><span class="shrink-0 font-sans text-[#B58D38] group-open:hidden">+</span
              ><span class="hidden shrink-0 font-sans text-[#B58D38] group-open:inline">−</span>
            </summary>
            <div class="space-y-5 border-t border-[#DCE7D8] px-6 py-6 leading-8 text-[#5C6859]">
              <p class="mt-5 leading-8 text-[#5C6859]">
                Divindade da caça que vive nas florestas, Oxóssi está ligado aos animais, às árvores
                e aos antepassados. O material de estudo apresenta suas origens, suas relações com
                outros Orixás e suas representações tradicionais.
              </p>
              <div class="mt-6 space-y-8 leading-8 text-[#5C6859]">
                <div>
                  <h4 class="mb-3 font-serif text-2xl text-[#244A32]">A divindade da caça</h4>

                  <p>
                    Oxóssi é a divindade da caça que vive nas florestas. Seus principais símbolos
                    são o arco e flecha, chamado Ofá, e um rabo de boi chamado Eruexim. Em algumas
                    lendas, aparece como irmão de Ogum e de Exú.
                  </p>
                </div>

                <div>
                  <h4 class="mb-3 font-serif text-2xl text-[#244A32]">Origens e parentesco</h4>

                  <p>
                    Oxóssi é o rei de Keto, filho de Oxalá e Yemanjá, ou, nos mitos, filho de Apaoka
                    (jaqueira). É o Orixá da caça e foi um caçador de elefantes, animal associado à
                    realeza e aos antepassados.
                  </p>

                  <p class="mt-4">
                    Diz um mito que Oxóssi encontrou Iansã na floresta, sob a forma de um grande
                    elefante, que se transformou em mulher. Casa com ela e tem muitos filhos, que
                    são abandonados e criados por Oxum.
                  </p>
                </div>

                <div>
                  <h4 class="mb-3 font-serif text-2xl text-[#244A32]">
                    A floresta e a ancestralidade
                  </h4>

                  <p>
                    Oxóssi vive na floresta, onde moram os espíritos, e está relacionado com as
                    árvores e os antepassados. As abelhas pertencem-lhe e representam os espíritos
                    dos antepassados femininos.
                  </p>

                  <p class="mt-4">
                    Relaciona-se com os animais, cujos gritos imita à perfeição. É apresentado como
                    caçador valente, ágil e generoso, que propicia a caça e protege contra o ataque
                    das feras.
                  </p>

                  <p class="mt-4">
                    O material também o descreve como um solitário solteirão, depois de ser
                    abandonado por Iansã. Na narrativa, sua condição de caçador exige afastamento
                    das mulheres, consideradas nefastas à caça nesse contexto mitológico.
                  </p>
                </div>

                <div>
                  <h4 class="mb-3 font-serif text-2xl text-[#244A32]">Oxóssi, Ogum e Ossãe</h4>

                  <p>
                    Oxóssi está estreitamente ligado a Ogum, de quem recebeu suas armas de caçador.
                  </p>

                  <p class="mt-4">
                    Ossãe apaixonou-se pela beleza de Oxóssi e prendeu-o na floresta. Ogum conseguiu
                    penetrar na mata com suas armas de ferreiro e libertá-lo.
                  </p>

                  <p class="mt-4">
                    Oxóssi também é associado ao frio, à noite e à lua. Suas plantas são descritas
                    como refrescantes.
                  </p>
                </div>

                <div>
                  <h4 class="mb-3 font-serif text-2xl text-[#244A32]">
                    Vestimentas e representações
                  </h4>

                  <p>
                    Em algumas caracterizações, Oxóssi veste-se de azul-turquesa ou de azul e
                    vermelho.
                  </p>

                  <p class="mt-4">
                    Leva um elegante chapéu de abas largas, enfeitado com penas de avestruz nas
                    cores azul e branco. Carrega dois chifres de touro na cintura, um arco e uma
                    flecha de metal dourado.
                  </p>
                </div>

                <div>
                  <h4 class="mb-3 font-serif text-2xl text-[#244A32]">A dança de Oxóssi</h4>

                  <p>
                    Sua dança simula o gesto de atirar flechas para a direita e para a esquerda.
                  </p>

                  <p class="mt-4">
                    O ritmo é descrito como "corrido", no qual imita o cavaleiro que persegue a
                    caça, deslizando devagar, às vezes pulando e girando sobre si mesmo.
                  </p>

                  <p class="mt-4">
                    O material apresenta essa dança como uma das mais bonitas do Candomblé.
                  </p>
                </div>
              </div>
            </div>
          </details>
          <details
            class="group overflow-hidden rounded-2xl border border-[#DCE7D8] bg-white shadow-sm"
          >
            <summary
              class="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-serif text-xl text-[#244A32] transition hover:bg-[#ECF4EA] [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-[#B58D38]"
            >
              <span>Como Oxóssi virou Orixá</span
              ><span class="shrink-0 font-sans text-[#B58D38] group-open:hidden">+</span
              ><span class="hidden shrink-0 font-sans text-[#B58D38] group-open:inline">−</span>
            </summary>
            <div class="space-y-5 border-t border-[#DCE7D8] px-6 py-6 leading-8 text-[#5C6859]">
              <p class="mt-5 leading-8 text-[#5C6859]">
                A história de Odé, o grande caçador, seu encontro com Oxumaré e seu renascimento
                como Orixá.
              </p>
              <div class="mt-6 space-y-5 leading-8 text-[#5C6859]">
                <p>
                  Odé era um grande caçador. Certo dia, saiu para caçar sem consultar o oráculo Ifá
                  e sem cumprir os ritos necessários.
                </p>

                <p>
                  Depois de caminhar pela floresta, encontrou uma serpente: era Oxumaré em sua forma
                  terrestre. A serpente pediu que Odé não a matasse, mas ele ignorou o aviso.
                </p>

                <p>
                  Odé matou a serpente, cortou-a em pedaços, levou-a para casa, preparou-a como
                  alimento e depois foi dormir.
                </p>

                <p>
                  No dia seguinte, sua esposa Oxum encontrou-o morto, com um rastro de cobra saindo
                  de seu corpo em direção à mata.
                </p>

                <p>
                  Oxum chorou e lamentou profundamente sua morte. Diante de seu sofrimento, Ifá fez
                  Odé renascer como Orixá, com o nome de Oxossi.
                </p>
              </div>
            </div>
          </details>
          <details
            class="group overflow-hidden rounded-2xl border border-[#DCE7D8] bg-white shadow-sm"
          >
            <summary
              class="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-serif text-xl text-[#244A32] transition hover:bg-[#ECF4EA] [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-[#B58D38]"
            >
              <span>Orixá da Caça e da Fartura</span
              ><span class="shrink-0 font-sans text-[#B58D38] group-open:hidden">+</span
              ><span class="hidden shrink-0 font-sans text-[#B58D38] group-open:inline">−</span>
            </summary>
            <div class="space-y-5 border-t border-[#DCE7D8] px-6 py-6 leading-8 text-[#5C6859]">
              <p class="mt-5 leading-8 text-[#5C6859]">
                A história de Òsotokànsosó, o caçador de uma única flecha, e da vitória que lhe
                trouxe o reconhecimento de seu povo.
              </p>
              <div class="mt-6 space-y-5 leading-8 text-[#5C6859]">
                <p>
                  Em tempos distantes, Odùdùwa, Rei de Ifé, celebrava com seu povo uma colheita
                  abundante de inhames. Durante a festa, um grande pássaro pousou sobre o palácio,
                  ameaçando destruir tudo ao redor.
                </p>

                <p>
                  O pássaro havia surgido porque uma parte da colheita não fora oferecida às
                  feiticeiras Ìyamì Òsóróngà. Diante do perigo, o rei convocou grandes caçadores.
                </p>

                <p>
                  Osotadotá, com suas cinquenta flechas, falhou. Osotogi, com quarenta flechas,
                  também não conseguiu. Osotogum, guardião de vinte flechas, igualmente fracassou.
                </p>

                <p>Por fim, chamaram Òsotokànsosó, caçador que possuía apenas uma flecha.</p>

                <p>
                  Sua mãe consultou Ifá e recebeu dos Babalaôs orientações para preparar uma
                  oferenda. Seguindo essas orientações, realizou o que havia sido indicado para
                  apaziguar a fúria das èlèye.
                </p>

                <p>
                  No momento da oferenda, Òsotokànsosó disparou sua única flecha. O grande pássaro
                  abriu sua guarda e foi atingido mortalmente.
                </p>

                <p>O povo comemorou a vitória, dançando e gritando: “Oxossi! Oxossi!”</p>

                <p>
                  A partir daquele dia, o caçador passou a ser reconhecido e reverenciado por sua
                  grande façanha, carregando o título de Oxossi.
                </p>
              </div>
            </div>
          </details>
        </div>
        <p class="mt-10 text-center text-sm italic text-[#5C6859]">
          Fonte: Curso de Umbanda — Sociedade Espiritualista Mata Virgem.
        </p>
      </div>
    </section>

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
