<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import OrixaHero from '../components/OrixaHero.vue'
import CozinhaRitualistica from '../components/CozinhaRitualistica.vue'

const secaoFilhos = ref(null)

function limitarAberturaDesktop() {
  if (window.innerWidth < 768 || !secaoFilhos.value) return
  const abertos = [...secaoFilhos.value.querySelectorAll('details[open]')]
  abertos.slice(1).forEach((cartao) => {
    cartao.open = false
  })
}

function aoAlternarFilho(event) {
  if (!event.target.open || window.innerWidth < 768 || !secaoFilhos.value) return
  secaoFilhos.value.querySelectorAll('details[open]').forEach((cartao) => {
    if (cartao !== event.target) cartao.open = false
  })
}

onMounted(() => window.addEventListener('resize', limitarAberturaDesktop))
onUnmounted(() => window.removeEventListener('resize', limitarAberturaDesktop))

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

    <!-- Características e tradições de Oxóssi -->
    <section class="bg-white px-6 py-20">
      <div class="mx-auto max-w-5xl">
        <div class="text-center">
          <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">
            Fundamentos e tradições
          </p>

          <h2 class="font-serif text-3xl sm:text-4xl text-[#244A32]">Características de Oxóssi</h2>

          <p class="mx-auto mt-5 max-w-2xl leading-8 text-[#5C6859]">
            Conheça as características, os elementos e as correspondências de Oxóssi apresentados no
            material de estudo da Sociedade Espiritualista Mata Virgem.
          </p>
        </div>

        <!-- Identidade: cor e saudação -->
        <div
          class="mx-auto mt-12 max-w-2xl rounded-2xl border border-[#DCE7D8] bg-[#F8F5EE] p-6 text-center sm:p-8"
        >
          <div class="mx-auto mb-5 h-16 w-16 rounded-full bg-[#244A32]"></div>

          <h3 class="font-serif text-2xl text-[#244A32]">Sua cor: Verde</h3>

          <p class="mt-4 leading-7 text-[#5C6859]">
            No Abaçá de Oxóssi e Oxum, o verde é a cor associada a Oxóssi, em sintonia com sua
            ligação com as matas e a natureza.
          </p>

          <p class="mt-3 text-sm text-[#5C6859]">No Candomblé: Azul Celeste Claro.</p>

          <div class="mt-8 border-t border-[#DCE7D8] pt-6">
            <p class="mb-2 text-sm uppercase tracking-widest text-[#B58D38]">Saudação</p>

            <h3 class="font-serif text-3xl text-[#244A32]">Okê Arô!</h3>

            <p class="mt-3 text-sm text-[#5C6859]">O documento também apresenta: Odé Kokê Maior.</p>
          </div>
        </div>

        <!-- Demais características -->
        <div class="mt-10 grid gap-5 md:grid-cols-2">
          <!-- Fio de contas -->
          <article class="rounded-2xl border border-[#DCE7D8] bg-[#F8F5EE] p-6">
            <h3 class="font-serif text-2xl text-[#244A32]">Fio de contas</h3>
            <p class="mt-4 leading-7 text-[#5C6859]">Verde Leitosas (Azul Turquesa, Azul Claro).</p>
          </article>

          <!-- Símbolo e natureza -->
          <article class="rounded-2xl border border-[#DCE7D8] bg-[#F8F5EE] p-6">
            <h3 class="font-serif text-2xl text-[#244A32]">Símbolo e natureza</h3>
            <p class="mt-4 leading-7 text-[#5C6859]">
              <strong>Símbolo:</strong> Ofá (arco e flecha).
            </p>
            <p class="mt-2 leading-7 text-[#5C6859]"><strong>Pontos da Natureza:</strong> Matas.</p>
            <p class="mt-2 leading-7 text-[#5C6859]"><strong>Elemento:</strong> Terra.</p>
          </article>

          <!-- Ervas -->
          <article class="rounded-2xl border border-[#DCE7D8] bg-[#F8F5EE] p-6 md:col-span-2">
            <h3 class="font-serif text-2xl text-[#244A32]">Ervas</h3>
            <p class="mt-4 leading-8 text-[#5C6859]">
              Alecrim, Guiné, Vence Demanda, Abre Caminho, Peregum (verde), Taioba, Espinheira
              Santa, Jurema, Jureminha, Mangueira, Desata Nó.
            </p>
            <p class="mt-3 leading-8 text-[#5C6859]">
              (Erva de Oxossi, Erva da Jurema, Alfavaca, Caiçara, Eucalipto)
            </p>
          </article>

          <!-- Flores e essências -->
          <article class="rounded-2xl border border-[#DCE7D8] bg-[#F8F5EE] p-6">
            <h3 class="font-serif text-2xl text-[#244A32]">Flores e essências</h3>
            <p class="mt-4 leading-7 text-[#5C6859]"><strong>Flores:</strong> Flores do campo.</p>
            <p class="mt-2 leading-7 text-[#5C6859]"><strong>Essências:</strong> Alecrim.</p>
          </article>

          <!-- Pedras e metal -->
          <article class="rounded-2xl border border-[#DCE7D8] bg-[#F8F5EE] p-6">
            <h3 class="font-serif text-2xl text-[#244A32]">Pedras e metal</h3>
            <p class="mt-4 leading-7 text-[#5C6859]">
              <strong>Pedras:</strong> Esmeralda, Amazonita. (Turquesa, Quartzo Verde, Calcita
              Verde)
            </p>
            <p class="mt-2 leading-7 text-[#5C6859]"><strong>Metal:</strong> Bronze (Latão).</p>
          </article>

          <!-- Correspondências -->
          <article class="rounded-2xl border border-[#DCE7D8] bg-[#F8F5EE] p-6">
            <h3 class="font-serif text-2xl text-[#244A32]">Correspondências</h3>
            <p class="mt-4 leading-7 text-[#5C6859]"><strong>Planeta:</strong> Vênus.</p>
            <p class="mt-2 leading-7 text-[#5C6859]"><strong>Chakra:</strong> Esplênico.</p>
            <p class="mt-2 leading-7 text-[#5C6859]">
              <strong>Saúde:</strong> Aparelho Respiratório.
            </p>
          </article>

          <!-- Calendário -->
          <article class="rounded-2xl border border-[#DCE7D8] bg-[#F8F5EE] p-6">
            <h3 class="font-serif text-2xl text-[#244A32]">Calendário e Tradição</h3>
            <p class="mt-4 leading-7 text-[#5C6859]">
              <strong>Dia da Semana:</strong> Quinta-feira.
            </p>
            <p class="mt-2 leading-7 text-[#5C6859]"><strong>Número:</strong> 6.</p>
            <p class="mt-2 leading-7 text-[#5C6859]">
              <strong>Data Comemorativa:</strong> 20 de janeiro.
            </p>
            <p class="mt-2 leading-7 text-[#5C6859]"><strong>Sincretismo:</strong> S. Sebastião.</p>
          </article>

          <!-- Bebidas -->
          <article class="rounded-2xl border border-[#DCE7D8] bg-[#F8F5EE] p-6">
            <h3 class="font-serif text-2xl text-[#244A32]">Bebidas</h3>
            <p class="mt-4 leading-7 text-[#5C6859]">
              Vinho tinto (água de coco, caldo de cana, aluá).
            </p>
          </article>

          <!-- Animais -->
          <article class="rounded-2xl border border-[#DCE7D8] bg-[#F8F5EE] p-6">
            <h3 class="font-serif text-2xl text-[#244A32]">Animais</h3>
            <p class="mt-4 leading-7 text-[#5C6859]">
              Tatu, Veado, Javali. (qualquer tipo de caça)
            </p>
          </article>

          <!-- Comidas -->
          <article class="rounded-2xl border border-[#DCE7D8] bg-[#F8F5EE] p-6 md:col-span-2">
            <h3 class="font-serif text-2xl text-[#244A32]">Comidas</h3>
            <p class="mt-4 leading-8 text-[#5C6859]">
              Axoxô – milho com fatias de coco, Frutas. (Carne de caça, Taioba, Ewa - feijão
              fradinho torrado na panela de barro, papa de coco e frutas.)
            </p>
          </article>

          <!-- Incompatibilidades -->
          <article class="rounded-2xl border border-[#DCE7D8] bg-[#F8F5EE] p-6 md:col-span-2">
            <h3 class="font-serif text-2xl text-[#244A32]">Incompatibilidades</h3>
            <p class="mt-4 leading-7 text-[#5C6859]">
              Mel, Cabeça de bicho (nos sacrifícios e alimentos), Ovo.
            </p>
          </article>
        </div>

        <p class="mx-auto mt-10 max-w-3xl text-center text-sm italic leading-7 text-[#5C6859]">
          As informações apresentadas correspondem às associações religiosas descritas no material
          de estudo e podem variar conforme a tradição e os fundamentos de cada casa.
        </p>

        <p class="mt-4 text-center text-sm italic text-[#5C6859]">
          Fonte: Curso de Umbanda — Sociedade Espiritualista Mata Virgem.
        </p>
      </div>
    </section>

    <!-- Qualidades de Oxóssi: lista recolhível com hover original -->
    <section class="bg-white px-6 py-20">
      <div class="mx-auto max-w-5xl">
        <div class="mb-10 text-center">
          <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">
            Tradição e ancestralidade
          </p>
          <h2 class="font-serif text-3xl sm:text-4xl text-[#244A32]">Qualidades de Oxóssi</h2>
          <p class="mx-auto mt-5 max-w-2xl leading-7 text-[#5C6859]">
            Conheça os nomes das qualidades de Oxóssi apresentados no material de estudo da
            Sociedade Espiritualista Mata Virgem.
          </p>
        </div>

        <details class="group mx-auto max-w-5xl">
          <summary
            class="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl border border-[#DCE7D8] bg-[#F8F5EE] px-6 py-4 font-medium text-[#244A32] transition-colors hover:border-[#B58D38] [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B58D38]"
          >
            <span class="group-open:hidden">Ver as 15 denominações</span>
            <span class="hidden group-open:inline">Recolher denominações</span>
            <span aria-hidden="true" class="text-xl transition-transform group-open:rotate-180"
              >⌄</span
            >
          </summary>

          <div class="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            <div
              v-for="qualidade in qualidadesOxossi"
              :key="qualidade"
              class="flex min-h-28 items-center justify-center rounded-2xl border border-[#DCE7D8] bg-[#F8F5EE] p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B58D38] hover:shadow-md"
            >
              <h3 class="font-serif text-lg text-[#244A32]">{{ qualidade }}</h3>
            </div>
          </div>
        </details>

        <p class="mt-8 text-center text-sm italic text-[#5C6859]">
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

    <!-- Características e personalidade dos filhos de Oxóssi -->
    <section class="bg-white px-6 py-20">
      <div class="mx-auto max-w-5xl">
        <div class="mb-12 text-center">
          <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">
            Comportamento e individualidade
          </p>
          <h2 class="font-serif text-3xl sm:text-4xl text-[#244A32]">Os filhos de Oxóssi</h2>
          <p class="mx-auto mt-6 max-w-2xl leading-8 text-[#5C6859]">
            Conheça as características físicas e comportamentais atribuídas aos filhos de Oxóssi no
            material de estudo, relacionadas ao arquétipo do caçador.
          </p>
        </div>

        <div ref="secaoFilhos" class="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          <details
            @toggle="aoAlternarFilho"
            v-for="item in caracteristicasFilhos"
            :key="item.titulo"
            class="group self-start rounded-2xl border border-[#DCE7D8] bg-[#F8F5EE] p-6"
          >
            <summary
              class="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-2xl text-[#244A32] [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B58D38]"
            >
              <span>{{ item.titulo }}</span>
              <span
                aria-hidden="true"
                class="shrink-0 text-xl transition-transform group-open:rotate-180"
                >⌄</span
              >
            </summary>
            <div class="mt-5 space-y-4 leading-8 text-[#5C6859]">
              <p v-for="paragrafo in item.paragrafos" :key="paragrafo">{{ paragrafo }}</p>
            </div>
          </details>
        </div>

        <p class="mx-auto mt-10 max-w-3xl text-center text-sm italic leading-7 text-[#5C6859]">
          As características apresentadas representam descrições arquetípicas presentes no material
          de estudo, não sendo regras sobre a aparência, o comportamento ou a personalidade de cada
          pessoa.
        </p>
        <p class="mt-4 text-center text-sm italic text-[#5C6859]">
          Fonte: Curso de Umbanda — Sociedade Espiritualista Mata Virgem.
        </p>
      </div>
    </section>

    <!-- Lendas de Oxóssi -->
    <section class="bg-[#F8F5EE] px-6 py-20">
      <div class="mx-auto max-w-5xl">
        <div class="mb-12 text-center">
          <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">
            Histórias e ancestralidade
          </p>

          <h2 class="font-serif text-3xl sm:text-4xl text-[#244A32]">Lendas de Oxóssi</h2>

          <p class="mx-auto mt-6 max-w-2xl leading-8 text-[#5C6859]">
            Conheça as narrativas e tradições apresentadas em nosso material de estudo, que revelam
            as origens de Oxóssi, suas relações com outros Orixás, sua ligação com as florestas, a
            ancestralidade e a fartura.
          </p>
        </div>

        <div class="space-y-8">
          <!-- Introdução mitológica de Oxóssi -->
          <article class="rounded-2xl border border-[#DCE7D8] bg-white p-6 shadow-sm md:p-10">
            <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">
              Tradições e mitologia
            </p>

            <h3 class="font-serif text-3xl text-[#244A32]">
              Oxóssi: o Rei de Keto e Senhor das Matas
            </h3>

            <p class="mt-5 leading-8 text-[#5C6859]">
              Divindade da caça que vive nas florestas, Oxóssi está ligado aos animais, às árvores e
              aos antepassados. O material de estudo apresenta suas origens, suas relações com
              outros Orixás e suas representações tradicionais.
            </p>

            <details class="mt-6 border-t border-[#DCE7D8] pt-6">
              <summary
                class="cursor-pointer font-medium text-[#244A32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B58D38]"
              >
                Ler o conteúdo completo
              </summary>

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
            </details>
          </article>

          <!-- Primeira lenda -->
          <article class="rounded-2xl border border-[#DCE7D8] bg-white p-6 shadow-sm md:p-10">
            <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">Primeira lenda</p>

            <h3 class="font-serif text-3xl text-[#244A32]">Como Oxóssi virou Orixá</h3>

            <p class="mt-5 leading-8 text-[#5C6859]">
              A história de Odé, o grande caçador, seu encontro com Oxumaré e seu renascimento como
              Orixá.
            </p>

            <details class="mt-6 border-t border-[#DCE7D8] pt-6">
              <summary
                class="cursor-pointer font-medium text-[#244A32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B58D38]"
              >
                Ler a lenda completa
              </summary>

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
            </details>
          </article>

          <!-- Segunda lenda -->
          <article class="rounded-2xl border border-[#DCE7D8] bg-white p-6 shadow-sm md:p-10">
            <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">Segunda lenda</p>

            <h3 class="font-serif text-3xl text-[#244A32]">Orixá da Caça e da Fartura</h3>

            <p class="mt-5 leading-8 text-[#5C6859]">
              A história de Òsotokànsosó, o caçador de uma única flecha, e da vitória que lhe trouxe
              o reconhecimento de seu povo.
            </p>

            <details class="mt-6 border-t border-[#DCE7D8] pt-6">
              <summary
                class="cursor-pointer font-medium text-[#244A32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B58D38]"
              >
                Ler a lenda completa
              </summary>

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
            </details>
          </article>
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
