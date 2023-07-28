<template>
  <div>
    <div>
      <div>
        <img src="~assets/images/hero-banner-1.jpg" alt="" />
      </div>

      <div class="hidden">
        <img src="~assets/images/hero-banner-2.jpg" alt="" />
      </div>
    </div>

    <section class="px-2 pb-10 lg:px-20">
      <h2 class="sr-only">Introdução</h2>

      <div
        class="relative z-10 grid gap-8 mx-auto -mt-10 md:grid-cols-2 xl:grid-cols-3 xl:max-w-7xl"
      >
        <div
          v-for="content in contents"
          :key="content.id"
          class="relative px-6 py-10 bg-white rounded-sm shadow-lg bg-opacity-30 backdrop-blur-md border-2 border-b-[#e94d65]"
        >
          <h3 class="mb-4 text-xl font-semibold text-[#004a52]">
            {{ content.title }}
          </h3>

          <div class="text-justify">
            <p>{{ content.body }}</p>
          </div>

          <div
            class="absolute flex justify-center -translate-x-1/2 left-1/2 -bottom-5"
          >
            <button
              type="button"
              class="inline-flex items-center gap-2 px-4 py-2 text-white bg-[#00848c] rounded-sm"
            >
              Saiba mais

              <Icon name="mdi:more" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const contents = reactive([
  {
    id: "1",
    title: "Processamento de linguagem natural",
    body: "O Processamento de Linguagem Natural (PLN) é a subárea da Artificial intelligence (AI) que estuda a capacidade e as limitações de uma máquina em entender a linguagem dos seres humanos. O objetivo é fornecer aos computadores a capacidade de entender e compor textos. Nossas soluções de AI utilizam esta solução para extrair automaticamente insights de negócios essenciais e tendências emergentes de grandes quantidades de conteúdo estruturado e não estruturado.",
  },
  {
    id: "2",
    title: "Visão computacional",
    body: "Visão computacional é um assunto consideravelmente novo e totalmente conectado com o aprendizado de máquina “machine learning”. Este conceito também é conhecido como visão por computador, é a área da ciência que desenvolve teorias e métodos voltados à extração automática de informações úteis contidas em imagens, com objetivo de criar e transmitir essas informações de forma compreensível. Nossas soluções de AI utilizam visão computacional para acelerar automação inteligente com ferramentas simples de processamento, reconhecimento e detecção de imagens.",
  },
  {
    id: "3",
    title: "Previsão e Otimização",
    body: "O prognóstico auxilia a antever resultados futuros, já a Otimização proporciona os melhores resultados mesmo com restrições de recursos. A AI oferece suporte a todos os estágios de fluxo de trabalho de prognóstico e otimização, habilitando automação em larga escala para prever resultados e otimizar decisões.",
  },
]);
</script>
