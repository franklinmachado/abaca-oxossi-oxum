<script setup>
import { ref } from 'vue'
import OrixaHero from '../components/OrixaHero.vue'
import CozinhaRitualistica from '../components/CozinhaRitualistica.vue'

const mostrarQualidades = ref(false)
const caracteristicas = [
  ['Cores', 'Azul (amarelo em algumas casas)'],
  ['Elemento', 'Água'],
  ['Natureza', 'Cachoeiras e rios calmos'],
  ['Símbolo', 'Coração ou cachoeira'],
  ['Pedras e metal', 'Topázio amarelo e azul; ouro'],
  ['Flores', 'Lírio e rosa amarela'],
  ['Dia da semana', 'Sábado'],
  ['Data comemorativa', '8 de dezembro'],
  ['Saudação', 'Ora Ieiêô!'],
  ['Número', '5'],
]
const extras = [
  ['Fio de contas', 'Cristal azul; amarelo em algumas casas.'],
  [
    'Ervas',
    'Colônia, macaçá, oriri, Santa Luzia, oripepê, pingo-d’água, agrião, dinheiro-em-penca, manjericão-branco, calêndula, narciso, vassourinha, erva-de-santa-luzia e jasmim. O material ressalva que vassourinha, erva-de-santa-luzia e jasmim não servem para banhos. Outras ervas são mencionadas conforme a tradição da casa.',
  ],
  ['Essências', 'Lírio e rosa.'],
  ['Planeta', 'Vênus (Lua).'],
  ['Chakra', 'Umbilical (frontal).'],
  [
    'Sincretismos',
    'Nossa Senhora da Conceição, Nossa Senhora Aparecida, Nossa Senhora de Fátima, Nossa Senhora de Lourdes, Nossa Senhora das Cabeças e Nossa Senhora de Nazaré.',
  ],
  [
    'Outras correspondências',
    'Saúde: órgãos reprodutores femininos e coração. Animal: pomba-rola. Bebida: champanhe. Comidas mencionadas: omolocum, ipeté e quindim, entre outras variações. Incompatibilidades citadas: abacaxi e barata.',
  ],
]
const qualidades = [
  'Apará',
  'Ijimum',
  'Iápondá',
  'Ifé',
  'Abalu',
  'Jumu',
  'Oxogbo',
  'Ajagura',
  'Yeye Oga',
  'Yeye Petu',
  'Yeye Kare',
  'Yeye Oke',
  'Yeye Oloko',
  'Yeye Merin',
  'Yeye Àyálá',
  'Yeye Lokun',
  'Yeye Odo',
]
const filhos = [
  {
    titulo: 'Sensibilidade e afeto',
    texto:
      'No arquétipo dos filhos de Oxum, destacam-se a sensibilidade, o carinho e a intensidade dos sentimentos. São descritos como pessoas que valorizam os vínculos afetivos, demonstram atenção às pessoas queridas e podem sentir profundamente as experiências emocionais. Essa sensibilidade também pode se manifestar na forma de intuição e percepção das emoções ao seu redor.',
  },
  {
    titulo: 'Elegância e beleza',
    texto:
      'A apreciação pela beleza, pelo cuidado pessoal e pela harmonia é uma característica frequentemente associada aos filhos de Oxum. O material destaca o gosto pela elegância, pelos perfumes, pelos adornos e pelos ambientes agradáveis. Mais do que uma questão de aparência, essa característica representa o apreço pelo refinamento e pela maneira de se apresentar ao mundo.',
  },
  {
    titulo: 'Determinação e inteligência',
    texto:
      'Por trás de uma postura delicada e tranquila, o arquétipo dos filhos de Oxum revela firmeza e persistência. São descritos como observadores, inteligentes e capazes de buscar seus objetivos com paciência e estratégia. Preferem, muitas vezes, a diplomacia ao confronto direto, mas isso não significa falta de coragem ou determinação.',
  },
  {
    titulo: 'Relações e convivência',
    texto:
      'Os filhos de Oxum são associados à sociabilidade, à valorização das relações e ao desejo de manter a harmonia nos ambientes em que convivem. O material também apresenta aspectos desafiadores desse arquétipo, como o ciúme e a tendência a guardar sentimentos. Essas características fazem parte de uma descrição tradicional e não devem ser interpretadas como comportamentos inevitáveis.',
  },
]
const lendas = [
  {
    titulo: 'Como Oxum conseguiu participar das reuniões dos Orixás masculinos',
    texto:
      'Quando os Orixás chegaram à Terra, passaram a realizar reuniões das quais as mulheres eram excluídas. Oxum, impedida de participar das decisões, demonstrou sua importância fazendo cessar a fertilidade das mulheres e a produtividade da Terra. Diante das dificuldades, os Orixás procuraram Olorum, que lhes perguntou se Oxum participava das reuniões. Ao descobrir que ela havia sido excluída, explicou que nada prosperaria sem sua presença e seu poder sobre a fecundidade. Oxum foi então convidada a participar e, depois de aceitar, a fertilidade e a prosperidade retornaram. A narrativa também associa Oxum ao título de Iyalodê, relacionado à liderança feminina.',
  },
  {
    titulo: 'Como Oxum criou o Candomblé',
    texto:
      'Segundo essa narrativa, após a separação entre o Orum (céu) e o Aiê (Terra), Olorum confiou a Oxum a missão de restabelecer a ligação entre os Orixás e os seres humanos. Oxum reuniu mulheres, preparou-as com banhos de ervas e adornou suas cabeças, pescoços e pulsos para que pudessem receber os Orixás. Ao som dos atabaques e xequerês, os Orixás vieram e dançaram entre os humanos. Assim, a lenda apresenta a origem do Candomblé.',
  },
  {
    titulo: 'Oxum é destemida diante das dificuldades enfrentadas pelos seus',
    texto:
      'O material reúne cinco episódios que mostram a coragem e a compaixão de Oxum. Ela convence Ogum a retomar a produção de instrumentos agrícolas, livrando uma comunidade da fome; enfrenta uma longa jornada para pedir a Olorum o retorno das chuvas; ajuda Oxalá a recuperar seu cajado e a curar sua perna; intercede pela vida de Obaluaiê; e acolhe uma princesa grávida lançada ao rio, cuidando também da criança que nasce. São histórias que apresentam Oxum como protetora da vida e daqueles que enfrentam dificuldades.',
  },
  {
    titulo: 'A riqueza de Oxum',
    texto:
      'Esta lenda apresenta Oxum como apreciadora de joias, espelhos, roupas finas e riqueza. Determinada a conquistar uma grande fortuna, ela recorre a uma estratégia diante da casa de Oxalá, provocando um escândalo até conseguir o que deseja. A narrativa destaca sua astúcia e sua ambição, mostrando que a personalidade de Oxum, nos mitos, também possui aspectos complexos.',
  },
  {
    titulo: 'Os amores de Oxum',
    texto:
      'As histórias reunidas sob esse título apresentam as relações de Oxum com Xangô, Oxóssi e Ogum. Ela conquista o amor de Xangô, protege Oxóssi de perigos e lhe oferece riqueza e poder para que se torne Alaketu, rei de Ketu. Também é retratada em disputas amorosas envolvendo Xangô e Ogum. As narrativas associam Oxum ao desejo de ser amada, valorizada e tratada com a dignidade de uma rainha.',
  },
  {
    titulo: 'Como Oxum conseguiu o segredo do jogo de búzios',
    texto:
      'O curso apresenta duas versões dessa história. Na primeira, Oxum procura Exu para aprender os segredos dos búzios. Diante da recusa, utiliza um pó mágico e, enquanto Exu tenta recuperar os dezesseis búzios, aprende seus nomes e segredos. Ifá reconhece sua coragem e inteligência, concedendo-lhe também esse conhecimento. Na segunda versão, Oxum aprende a arte da adivinhação durante sete anos de convivência com Exu. Posteriormente, é levada contra sua vontade por Xangô, mas consegue escapar com a ajuda de Exu e Orumilá, transformando-se em uma pomba dourada.',
  },
]
const filhoAberto = ref(-1)
const lendaAberta = ref(-1)
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

    <section class="px-6 py-20">
      <div class="mx-auto max-w-5xl">
        <div class="text-center">
          <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">Nossa ancestralidade</p>
          <h2 class="font-serif text-4xl">Conhecendo Oxum</h2>
          <div class="mx-auto mt-5 h-0.5 w-16 bg-[#B58D38]"></div>
        </div>
        <div class="mx-auto mt-8 max-w-3xl space-y-5 text-center leading-8 text-[#5C6859]">
          <p>
            Oxum é a Orixá das águas doces, dos rios e das cachoeiras. Suas águas podem parecer
            tranquilas na superfície, mas guardam força e movimento, expressando a profundidade de
            sua natureza.
          </p>
          <p>
            Está associada ao amor, à maternidade, à fertilidade, à abundância e à criatividade. Nas
            tradições apresentadas no material de estudo, sua presença se relaciona ao cuidado com a
            vida, à prosperidade e à capacidade de gerar novas possibilidades.
          </p>
          <p>
            A beleza e a sensibilidade de Oxum caminham ao lado da inteligência, da coragem e da
            determinação. Suas histórias revelam uma Orixá que acolhe, protege e também enfrenta
            desafios para defender aqueles que precisam de sua ajuda.
          </p>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article
            v-for="s in [
              {
                icone: '🌊',
                titulo: 'Águas doces',
                texto: 'Rios e cachoeiras representam a vida, o movimento e a força de Oxum.',
              },
              {
                icone: '🪞',
                titulo: 'O espelho (Abebé)',
                texto:
                  'O abebé, leque ritual que pode conter um espelho, está associado à beleza, à percepção e à dignidade de Oxum.',
              },
              {
                icone: '✦',
                titulo: 'O ouro',
                texto:
                  'O ouro simboliza riqueza, brilho, valor e abundância nas representações de Oxum.',
              },
            ]"
            :key="s.titulo"
            class="rounded-2xl border border-[#E5D9BE] bg-white p-7 shadow-sm"
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
          <h2 class="font-serif text-4xl">Características de Oxum</h2>
          <p class="mx-auto mt-5 max-w-2xl leading-8 text-[#5C6859]">
            Correspondências tradicionais apresentadas no material de estudo. Algumas variam entre
            casas.
          </p>
        </div>
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <article
            v-for="[titulo, valor] in caracteristicas"
            :key="titulo"
            class="rounded-2xl border border-[#E1D8C7] bg-[#F8F5EE] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#B58D38] hover:shadow-md"
          >
            <h3 class="text-sm font-semibold text-[#376F9B]">{{ titulo }}</h3>
            <p class="mt-3 leading-6 text-[#42574D]">{{ valor }}</p>
          </article>
        </div>
        <details class="group mt-8 rounded-2xl border border-[#E1D8C7] bg-[#F8F5EE] p-6">
          <summary
            class="flex cursor-pointer list-none items-center justify-between font-semibold text-[#244A32] [&::-webkit-details-marker]:hidden"
          >
            Outras características <span class="transition group-open:rotate-180">⌄</span>
          </summary>
          <div class="mt-6 grid gap-4 border-t border-[#E1D8C7] pt-6 md:grid-cols-2">
            <div v-for="[titulo, valor] in extras" :key="titulo">
              <h3 class="font-semibold text-[#376F9B]">{{ titulo }}</h3>
              <p class="mt-2 leading-7 text-[#5C6859]">{{ valor }}</p>
            </div>
          </div>
          <p class="mt-5 text-sm italic text-[#5C6859]">
            As ervas e demais elementos são apresentados como referências culturais; qualquer uso
            ritualístico deve seguir a orientação da casa.
          </p>
        </details>
      </div>
    </section>

    <section class="px-6 py-20">
      <div class="mx-auto max-w-5xl text-center">
        <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">
          Tradições e denominações
        </p>
        <h2 class="font-serif text-4xl">Qualidades de Oxum</h2>
        <p class="mx-auto mt-5 text-[#5C6859]">O material apresenta 17 denominações de Oxum.</p>
        <button
          type="button"
          :aria-expanded="mostrarQualidades"
          class="mt-8 rounded-full bg-[#315F85] px-7 py-3 font-semibold text-white transition hover:bg-[#244C72] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B58D38]"
          @click="mostrarQualidades = !mostrarQualidades"
        >
          {{ mostrarQualidades ? 'Recolher as 17 denominações' : 'Ver as 17 denominações' }}
        </button>
        <div
          v-if="mostrarQualidades"
          class="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <div
            v-for="(qualidade, i) in qualidades"
            :key="qualidade"
            class="rounded-xl border border-[#E1D8C7] bg-white px-5 py-5 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#B58D38] hover:bg-[#EDF4F9] hover:shadow-md"
          >
            <span class="mr-2 text-sm text-[#B58D38]">{{ String(i + 1).padStart(2, '0') }}</span
            ><span class="font-serif text-xl">{{ qualidade }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white px-6 py-20">
      <div class="mx-auto max-w-3xl text-center">
        <p class="mb-3 text-sm uppercase tracking-widest text-[#B58D38]">Amor e prosperidade</p>
        <h2 class="font-serif text-4xl">As atribuições de Oxum</h2>
        <article
          class="mt-10 rounded-3xl border border-[#E1D8C7] bg-[#F8F5EE] p-8 shadow-sm sm:p-12"
        >
          <div class="text-4xl text-[#376F9B]">♡</div>
          <h3 class="mt-5 font-serif text-3xl">A força do amor e da união</h3>
          <p class="mt-6 leading-8 text-[#5C6859]">
            Oxum atua na vida dos seres despertando e fortalecendo os sentimentos de amor,
            fraternidade e união, favorecendo os vínculos afetivos e a harmonia entre as pessoas.
          </p>
          <p class="mt-5 leading-8 text-[#5C6859]">
            Em suas atribuições, também está relacionada à união matrimonial, à conquista da riqueza
            espiritual e à abundância material, representando a prosperidade que se manifesta tanto
            nos sentimentos quanto nas realizações da vida.
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
          <h2 class="font-serif text-4xl">Os filhos de Oxum</h2>
          <p class="mx-auto mt-5 max-w-2xl leading-8 text-[#5C6859]">
            As descrições a seguir representam arquétipos tradicionais, não regras universais sobre
            a personalidade de todas as pessoas filhas de Oxum.
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
              class="flex w-full items-center justify-between gap-4 p-6 text-left font-serif text-xl transition hover:bg-[#EDF4F9] focus-visible:outline-2 focus-visible:outline-[#B58D38]"
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
          <h2 class="font-serif text-4xl">As lendas de Oxum</h2>
          <p class="mx-auto mt-5 max-w-2xl leading-8 text-[#5C6859]">
            Narrativas tradicionais que revelam diferentes aspectos da sabedoria, da força e da
            personalidade de Oxum.
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
              class="flex w-full items-center justify-between gap-4 p-6 text-left font-serif text-xl transition hover:bg-[#EDF4F9] focus-visible:outline-2 focus-visible:outline-[#B58D38]"
              :aria-expanded="lendaAberta === i"
              @click="lendaAberta = lendaAberta === i ? -1 : i"
            >
              <span>{{ lenda.titulo }}</span
              ><span class="shrink-0 text-[#B58D38]">{{ lendaAberta === i ? '−' : '+' }}</span>
            </button>
            <div
              v-if="lendaAberta === i"
              class="border-t border-[#E1D8C7] px-6 py-6 leading-8 text-[#5C6859]"
            >
              {{ lenda.texto }}
            </div>
          </article>
        </div>
        <p class="mt-6 text-center text-sm italic text-[#5C6859]">
          Lendas adaptadas do Curso de Umbanda — Sociedade Espiritualista Mata Virgem.
        </p>
      </div>
    </section>

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
