<template>
  <footer class="text-white border-t-2 border-[#004a52]">
    <div class="py-8 bg-[#059e9c]">
      <PageContainer class="flex flex-col gap-8 md:grid md:grid-cols-3">
        <section>
          <h2 class="flex items-center gap-1 mb-4 font-bold">
            <Icon name="mdi:map-marker" />

            Endereço
          </h2>

          <address class="not-italic">
            <div>Centro Empresarial Parque Brasília</div>

            <div>SIG, quadra 1, lote 985, sala 120</div>

            <div>CEP: 70610-410</div>

            <div>Brasília, DF</div>
          </address>
        </section>

        <section>
          <h2 class="flex items-center gap-1 mb-4 font-bold">
            <Icon name="mdi:phone" />

            Telefones
          </h2>

          <div>
            <NuxtLink to="tel:+556132227243" target="_blank"
              >+55 (61) 3222-7243</NuxtLink
            >
          </div>

          <div>
            <NuxtLink to="tel:+5561995946409" target="_blank"
              >+55 (61) 9 9594-6409</NuxtLink
            >
          </div>
        </section>

        <section>
          <h2 class="flex items-center gap-1 mb-4 font-bold">
            <Icon name="mdi:mail" />

            E-mail
          </h2>

          <div>
            <NuxtLink to="mailto:contato@aisolutions.tec.br"
              >contato@aisolutions.tec.br</NuxtLink
            >
          </div>
        </section>
      </PageContainer>
    </div>

    <div class="py-2 bg-[#00848c]">
      <PageContainer class="text-center md:text-left">
        <small
          >AI Solutions © <time datetime="2023">2023</time> - Todos os direitos
          reservados</small
        >
      </PageContainer>
    </div>
  </footer>
</template>
