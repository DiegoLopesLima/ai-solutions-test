<template>
  <article id="products-section" class="py-4">
    <PageContainer>
      <PageTitle icon="mdi:apps">Produtos</PageTitle>

      <div
        class="flex flex-wrap gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
          v-for="item in data"
          :key="item.id"
          class="inline-flex flex-col gap-1"
        >
          <img :src="item.image" alt="" />

          <h3 class="font-semibold">{{ item.name }}</h3>

          <div>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </PageContainer>
  </article>
</template>

<script lang="ts" setup>
const { data } = await useFetch("/api/products");
</script>
