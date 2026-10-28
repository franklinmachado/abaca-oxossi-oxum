<script setup>
import { ref } from 'vue'
import OrixaHero from '../components/OrixaHero.vue'
import CozinhaRitualistica from '../components/CozinhaRitualistica.vue'

const mostrarQualidades = ref(false)
const filhoAberto = ref(-1)
const lendaAberta = ref(-1)

const caracteristicas = [
  ['Cores', 'Azul-rei e vermelho'],
  ['Elemento', 'Fogo'],
  ['Símbolo', 'Espada'],
  ['Metal', 'Ferro'],
  ['Dia da semana', 'Terça-feira'],
  ['Data comemorativa', '23 de abril'],
  ['Saudação', 'Ogum Iê!'],
  ['Número', '2'],
]
const extras = [
  ['Domínios', 'Ferro, ferramentas, trabalho, caminhos e proteção.'],
  ['Natureza', 'Caminhos, estradas e locais associados ao trabalho e à transformação.'],
  ['Sincretismo', 'São Jorge, em muitas tradições brasileiras; pode variar conforme a casa.'],
  [
    'Observação',
    'As correspondências, oferendas e fundamentos rituais variam entre tradições. Consulte a orientação da casa.',
  ],
]
const qualidades = [
  'Tisalê',
  'Xoroquê',
  'Ogunjá',
  'Onirê',
  'Alagbede',
  'Omini',
  'Wari',
  'Erotondo',
  'Akoro',
  'Onigbe',
]
const simbolos = [
  {
    icone: '⚔️',
    titulo: 'A espada',
    texto: 'Representa a firmeza, a defesa e a coragem para enfrentar os desafios.',
  },
  {
    icone: '⚒️',
    titulo: 'O ferro',
    texto: 'Associa Ogum à transformação da matéria, às ferramentas e ao trabalho.',
  },
  {
    icone: '🛡️',
    titulo: 'Os caminhos',
    texto: 'Evoca proteção, movimento e determinação diante dos obstáculos.',
  },
]
const filhos = [
  {
    titulo: 'Coragem e iniciativa',
    texto:
      'O arquétipo dos filhos de Ogum valoriza a disposição para agir, enfrentar dificuldades e defender aquilo em que acredita. A coragem é acompanhada pela capacidade de começar novos caminhos.',
  },
  {
    titulo: 'Determinação e trabalho',
    texto:
      'A persistência, o senso prático e a energia para transformar planos em realizações são características frequentemente associadas a Ogum. O trabalho é apresentado como expressão de força e construção.',
  },
  {
    titulo: 'Independência e franqueza',
    texto:
      'A tradição descreve uma postura direta, autônoma e sincera. Essa franqueza pode favorecer decisões firmes, mas também exige atenção à maneira de se comunicar.',
  },
  {
    titulo: 'Intensidade e temperamento',
    texto:
      'A mesma energia que inspira proteção e liderança pode se manifestar como impaciência ou impulsividade. O equilíbrio e a reflexão ajudam a orientar essa força.',
  },
  {
    titulo: 'Lealdade e proteção',
    texto:
      'O cuidado com as pessoas próximas, o senso de justiça e a disposição para proteger quem precisa são temas recorrentes nas descrições tradicionais.',
  },
]
const lendas = [
  {
    titulo: 'Como Ogum virou Orixá',
    texto:
      'Ogum lutava sem cessar contra os reinos vizinhos. De suas expedições, trazia ricos espólios e numerosos escravizados, entregando todos esses bens a Odúduá, seu pai, rei de Ifé.\n\nDurante uma de suas guerras, conquistou Irê, matou seu rei, Onirê, e colocou o próprio filho no trono, conservando para si o título de rei. Por isso, é saudado como Ogum Onirê, “Ogum, Rei de Irê!”. Contudo, foi autorizado a usar apenas uma pequena coroa, chamada akorô, passando também a ser conhecido como Ogum Alakorô, “Ogum, dono da pequena coroa”.\n\nDepois de instalar o filho no trono de Irê, Ogum voltou às guerras e permaneceu afastado por muitos anos. Quando finalmente retornou, já não reconhecia o lugar. Por infelicidade, sua chegada coincidiu com uma cerimônia durante a qual todos deveriam guardar silêncio absoluto.\n\nOgum estava faminto e sedento. Avistou jarras de vinho de palma, sem saber que estavam vazias. Interpretando o silêncio como desprezo, enfureceu-se: quebrou as jarras com golpes de espada e matou pessoas que ali estavam.\n\nQuando a cerimônia terminou, seu filho apareceu e lhe ofereceu seus pratos prediletos: caracóis e feijão regados com dendê, acompanhados de muito vinho de palma. Já calmo, Ogum arrependeu-se profundamente da violência que cometera. Disse que havia vivido o bastante e que chegara a hora de repousar. Então baixou sua espada e desapareceu sob a terra. Ogum tornara-se um Orixá.',
  },
  {
    titulo: 'Ogum Xoroquê',
    texto:
      'Certa vez, ao voltar de uma caçada, Ogum não encontrou vinho de palma para beber. Tomado pela sede e pela ira, subiu a um monte e soltou um grito feroz. Coberto de sangue e fogo, vestiu-se apenas com mariwo. Naquela manifestação de fúria, passou a ser chamado Xoroquê.\n\nOgum Xoroquê partiu para terras distantes: percorreu outros reinos, as terras dos ibos, o Daomé e regiões dos ashantis, sempre guerreando, invadindo e conquistando. Sua cólera era tamanha que muitos pensavam tratar-se de Exu enfurecido por não ter recebido suas oferendas, ou que Ogum houvesse se transformado em Exu. Daí surgem interpretações que aproximam Xoroquê de Exu, embora isso varie entre tradições.\n\nAntes de Xoroquê chegar a Irê, um oluwo que ali vivia aconselhou os habitantes a prepararem oferendas, incluindo um ajá (cachorro), inhame e muito vinho de palma. Orientou também que todos se prostrassem ao chão em sinal de respeito, recitassem seus orikis e tocassem em seu louvor.\n\nOs moradores seguiram o conselho, mas o rei não. Ao chegar, Xoroquê matou o rei. Antes que atacasse o restante da população, os habitantes fizeram o que lhes fora recomendado e conseguiram acalmá-lo.\n\nXoroquê então se proclamou Rei de Irê. Conta a lenda que, quando sua ira desperta, ele parte pelo mundo para guerrear; quando retorna a Irê, reassume sua condição de Ogum, guerreiro vitorioso e Rei de Irê.',
  },
  {
    titulo: 'Ogum dá ao homem o segredo do ferro',
    texto:
      'Na Terra criada por Oxalá, em Ifé, os Orixás e os seres humanos trabalhavam e viviam em igualdade. Todos caçavam e plantavam com instrumentos frágeis, feitos de madeira, pedra ou metal mole. O trabalho exigia muito esforço e, com o crescimento da população, a comida começou a faltar.\n\nEra necessário abrir uma área maior para o plantio. Os Orixás reuniram-se para decidir como removeriam as árvores. Ossãe, Orixá ligado à medicina e às folhas, ofereceu-se para limpar o terreno, mas seu facão de metal mole não resistiu. Um a um, os demais Orixás tentaram e fracassaram.\n\nOgum, que conhecia o segredo do ferro, permanecera em silêncio. Quando todos desistiram, pegou seu facão de ferro, entrou na mata e limpou o terreno. Admirados, os Orixás perguntaram de que material era feita aquela ferramenta tão resistente. Ogum respondeu que era ferro e que recebera esse segredo de Orunmilá.\n\nOs Orixás reconheceram o valor do ferro para a agricultura, a caça e a guerra. Insistiram para que Ogum lhes ensinasse a trabalhá-lo, mas ele guardou o conhecimento por muito tempo. Por fim, ofereceram-lhe o reinado em troca do segredo, e Ogum aceitou. Os humanos também pediram que lhes ensinasse a forja, e ele compartilhou esse saber, até que caçadores e guerreiros passaram a dispor de lanças de ferro.\n\nApesar de ter aceitado governar, Ogum continuava sendo, antes de tudo, um caçador. Certa vez, passou muitos dias na mata. Quando voltou, estava sujo e maltrapilho. Os outros Orixás desprezaram sua aparência e decidiram destituí-lo do reinado.\n\nDecepcionado, Ogum lembrou que haviam feito dele rei quando precisaram do segredo da forja, mas agora o julgavam indigno de governar. Banhou-se, vestiu-se com folhas de palmeira desfiadas, tomou suas armas e partiu. Em Irê, construiu uma casa sob uma árvore de akokô e ali permaneceu.\n\nOs humanos, porém, não esqueceram o conhecimento recebido. Segundo a narrativa, passaram a celebrar, em dezembro, a festa de Uidê Ogum. Caçadores, guerreiros, ferreiros e outros trabalhadores o homenageavam. Ogum permaneceu, para sempre, o senhor do ferro.',
  },
  {
    titulo: 'Ogum livra um pobre de seus exploradores',
    texto:
      'Um homem pobre peregrinava de lugar em lugar, trabalhando em diferentes plantações. Mas, sempre que construía algo, os donos da terra o despediam e se apropriavam de tudo o que ele havia feito.\n\nCerto dia, procurou um babalaô, que o orientou a realizar um ebó na mata. O homem reuniu o material necessário e foi até o local indicado. Enquanto preparava o ebó, fez tanto barulho que chamou a atenção de Ogum.\n\nAo perceber a presença do Orixá, caiu a seus pés e pediu perdão por ter entrado naquela mata. Ofereceu-lhe tudo o que havia levado. Ogum aceitou, ficou satisfeito com o ebó e perguntou por que o homem estava ali. O peregrino contou seus sofrimentos e as injustiças que havia enfrentado.\n\nOgum então lhe ordenou que desfiasse folhas de dendezeiro, chamadas mariwo, e as colocasse nas portas das casas de seus amigos. Essas marcas indicariam quais moradias deveriam ser respeitadas, pois naquela noite Ogum destruiria a cidade de onde o peregrino viera.\n\nAssim aconteceu: a cidade foi destruída, mas as casas protegidas pelo mariwo permaneceram de pé.',
  },
  {
    titulo: 'Ogum chama a Morte para ajudá-lo numa aposta com Xangô',
    texto:
      'Ogum e Xangô viviam em disputa. Ambos eram grandes guerreiros e, vez ou outra, enfrentavam-se pelas mais diversas razões, alimentando uma rivalidade que parecia não ter fim.\n\nCerta vez, Ogum propôs uma trégua até a chegada da próxima lua. Xangô fez gracejos, Ogum respondeu, e os dois acabaram concordando com uma aposta: iriam à praia recolher búzios. Quem juntasse a maior quantidade venceria e receberia também tudo o que o perdedor tivesse coletado.\n\nDepois do acordo, Ogum procurou Iansã e pediu que ela solicitasse a Ikú, a Morte, que fosse à praia no horário combinado com Xangô.\n\nNa manhã seguinte, os dois guerreiros começaram a recolher os búzios. Xangô cantava provocações contra Ogum, enquanto este seguia em silêncio, concentrado na coleta. Xangô não percebeu a aproximação de Ikú.\n\nQuando levantou os olhos e se deparou com a Morte, que ria de seu espanto, Xangô deixou cair o saco de búzios e fugiu, amedrontado, para se esconder.\n\nÀ noite, Ogum foi procurá-lo e mostrou o que havia recolhido. Envergonhado, Xangô abaixou a cabeça e entregou ao rival os búzios de sua própria coleta.',
  },
]
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

    <section class="px-6 py-20">
      <div class="mx-auto max-w-5xl">
        <div class="text-center">
          <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">Nossa ancestralidade</p>
          <h2 class="font-serif text-4xl">Conhecendo Ogum</h2>
          <div class="mx-auto mt-5 h-0.5 w-16 bg-[#B58D38]"></div>
        </div>
        <div class="mx-auto mt-8 max-w-3xl space-y-5 text-center leading-8 text-[#5C6859]">
          <p>
            Ogum é o Orixá associado ao ferro, às ferramentas e ao trabalho. Sua força simboliza a
            capacidade de transformar a matéria, construir caminhos e superar dificuldades.
          </p>
          <p>
            Nas narrativas tradicionais, apresenta-se como guerreiro e protetor. A espada representa
            sua firmeza, enquanto o ferro recorda a importância do conhecimento e do esforço humano.
          </p>
          <p>
            Ogum também nos convida a refletir sobre coragem, disciplina e responsabilidade: abrir
            caminhos é mais do que avançar, é saber como e por que seguir adiante.
          </p>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article
            v-for="s in simbolos"
            :key="s.titulo"
            class="rounded-2xl border border-[#DFD6C5] bg-white p-7 shadow-sm"
          >
            <div class="mb-4 text-4xl">{{ s.icone }}</div>
            <h3 class="font-serif text-2xl">{{ s.titulo }}</h3>
            <p class="mt-3 leading-7 text-[#5C6859]">{{ s.texto }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-white px-6 py-20">
      <div class="mx-auto max-w-5xl">
        <div class="text-center">
          <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">
            Fundamentos e tradições
          </p>
          <h2 class="font-serif text-4xl">Características de Ogum</h2>
          <p class="mx-auto mt-5 max-w-2xl leading-8 text-[#5C6859]">
            Correspondências tradicionais; algumas variam conforme a casa e a vertente religiosa.
          </p>
        </div>
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="[titulo, valor] in caracteristicas"
            :key="titulo"
            class="rounded-2xl border border-[#E1D8C7] bg-[#F8F5EE] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#B58D38] hover:shadow-md"
          >
            <h3 class="text-sm font-semibold text-[#9C3030]">{{ titulo }}</h3>
            <p class="mt-3 leading-6 text-[#42574D]">{{ valor }}</p>
          </article>
        </div>
        <details class="group mt-8 rounded-2xl border border-[#E1D8C7] bg-[#F8F5EE] p-6">
          <summary
            class="flex cursor-pointer list-none items-center justify-between font-semibold [&::-webkit-details-marker]:hidden"
          >
            Outras características <span class="transition group-open:rotate-180">⌄</span>
          </summary>
          <div class="mt-6 grid gap-4 border-t border-[#E1D8C7] pt-6 md:grid-cols-2">
            <div v-for="[titulo, valor] in extras" :key="titulo">
              <h3 class="font-semibold text-[#9C3030]">{{ titulo }}</h3>
              <p class="mt-2 leading-7 text-[#5C6859]">{{ valor }}</p>
            </div>
          </div>
        </details>
      </div>
    </section>

    <section class="px-6 py-20">
      <div class="mx-auto max-w-5xl text-center">
        <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">
          Tradições e denominações
        </p>
        <h2 class="font-serif text-4xl">Qualidades de Ogum</h2>
        <p class="mx-auto mt-5 text-[#5C6859]">
          Dez denominações apresentadas no material de referência.
        </p>
        <button
          type="button"
          :aria-expanded="mostrarQualidades"
          class="mt-8 rounded-full bg-[#173D80] px-7 py-3 font-semibold text-white transition hover:bg-[#102B5D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B58D38]"
          @click="mostrarQualidades = !mostrarQualidades"
        >
          {{ mostrarQualidades ? 'Recolher as 10 denominações' : 'Ver as 10 denominações' }}
        </button>
        <div
          v-if="mostrarQualidades"
          class="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <div
            v-for="(qualidade, i) in qualidades"
            :key="qualidade"
            class="rounded-xl border border-[#E1D8C7] bg-white px-5 py-5 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#B58D38] hover:bg-[#EDF1F9] hover:shadow-md"
          >
            <span class="mr-2 text-sm text-[#B58D38]">{{ String(i + 1).padStart(2, '0') }}</span
            ><span class="font-serif text-xl">{{ qualidade }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white px-6 py-20">
      <div class="mx-auto max-w-3xl text-center">
        <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">Coragem e proteção</p>
        <h2 class="font-serif text-4xl">As atribuições de Ogum</h2>
        <article
          class="mt-10 rounded-3xl border border-[#E1D8C7] bg-[#F8F5EE] p-8 shadow-sm sm:p-12"
        >
          <div class="text-4xl text-[#9C3030]">⚔</div>
          <h3 class="mt-5 font-serif text-3xl">A força que abre caminhos</h3>
          <p class="mt-6 leading-8 text-[#5C6859]">
            Ogum está associado à proteção, ao trabalho e à capacidade de enfrentar obstáculos. Sua
            ligação com o ferro simboliza tanto a força guerreira quanto a criação das ferramentas
            que transformam a vida.
          </p>
          <p class="mt-5 leading-8 text-[#5C6859]">
            Suas atribuições também evocam disciplina, vigilância e responsabilidade diante das
            escolhas e dos caminhos que percorremos.
          </p>
        </article>
      </div>
    </section>

    <section class="px-6 py-20">
      <div class="mx-auto max-w-4xl">
        <div class="text-center">
          <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">
            Arquétipos tradicionais
          </p>
          <h2 class="font-serif text-4xl">Os filhos de Ogum</h2>
          <p class="mx-auto mt-5 max-w-2xl leading-8 text-[#5C6859]">
            Descrições simbólicas e tradicionais, não regras universais sobre a personalidade de
            cada pessoa.
          </p>
        </div>
        <div class="mt-10 space-y-4">
          <article
            v-for="(filho, i) in filhos"
            :key="filho.titulo"
            class="overflow-hidden rounded-2xl border border-[#E1D8C7] bg-white shadow-sm"
          >
            <button
              type="button"
              class="flex w-full items-center justify-between gap-4 p-6 text-left font-serif text-xl transition hover:bg-[#EDF1F9] focus-visible:outline-2 focus-visible:outline-[#B58D38]"
              :aria-expanded="filhoAberto === i"
              @click="filhoAberto = filhoAberto === i ? -1 : i"
            >
              <span>{{ filho.titulo }}</span
              ><span class="text-[#B58D38]">{{ filhoAberto === i ? '−' : '+' }}</span>
            </button>
            <div
              v-if="filhoAberto === i"
              class="border-t border-[#E1D8C7] px-6 py-6 leading-8 text-[#5C6859]"
            >
              {{ filho.texto }}
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-white px-6 py-20">
      <div class="mx-auto max-w-4xl">
        <div class="text-center">
          <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">
            Histórias e ancestralidade
          </p>
          <h2 class="font-serif text-4xl">As lendas de Ogum</h2>
          <p class="mx-auto mt-5 max-w-2xl leading-8 text-[#5C6859]">
            Narrativas tradicionais sobre a força, o ferro e os caminhos de Ogum.
          </p>
        </div>
        <div class="mt-10 space-y-4">
          <article
            v-for="(lenda, i) in lendas"
            :key="lenda.titulo"
            class="overflow-hidden rounded-2xl border border-[#E1D8C7] bg-[#F8F5EE]"
          >
            <button
              type="button"
              class="flex w-full items-center justify-between gap-4 p-6 text-left font-serif text-xl transition hover:bg-[#EDF1F9] focus-visible:outline-2 focus-visible:outline-[#B58D38]"
              :aria-expanded="lendaAberta === i"
              @click="lendaAberta = lendaAberta === i ? -1 : i"
            >
              <span>{{ lenda.titulo }}</span
              ><span class="shrink-0 text-[#B58D38]">{{ lendaAberta === i ? '−' : '+' }}</span>
            </button>
            <div
              v-if="lendaAberta === i"
              class="space-y-4 border-t border-[#E1D8C7] px-6 py-6 leading-8 text-[#5C6859]"
            >
              <p v-for="(paragrafo, indice) in lenda.texto.split('\n\n')" :key="indice">
                {{ paragrafo }}
              </p>
            </div>
          </article>
        </div>
        <p class="mt-6 text-center text-sm italic text-[#5C6859]">
          Narrativas tradicionais apresentadas conforme o material da casa. Versões e interpretações
          podem variar entre tradições.
        </p>
      </div>
    </section>

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
