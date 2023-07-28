<template>
  <article class="py-4">
    <PageContainer>
      <PageTitle icon="mdi:apps">Produtos</PageTitle>

      <div
        class="flex flex-wrap gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div v-for="item in 7" :key="item" class="inline-flex flex-col gap-1">
          <img src="https://dummyimage.com/615x345/ef4444/ffffff" alt="" />

          <h3 class="font-semibold">Lorem ipsum</h3>

          <div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </PageContainer>
  </article>
</template>
