<template>
  <div>
    <ClientOnly>
      <div>
        <div>
          <img src="~assets/images/hero-banner-1.jpg" alt="" />
        </div>

        <div class="hidden">
          <img src="~assets/images/hero-banner-2.jpg" alt="" />
        </div>
      </div>
    </ClientOnly>

    <section class="px-2 pb-10 lg:px-20">
      <h2 class="sr-only">{{ $t("pageIndex.heroBanner.title") }}</h2>

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
              {{ $t("pageIndex.heroBanner.button.more") }}

              <Icon name="mdi:more" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();

const contents = reactive([
  {
    id: "1",
    title: t("pageIndex.heroBanner.content.naturalLanguage.title"),
    body: t("pageIndex.heroBanner.content.naturalLanguage.description"),
  },
  {
    id: "2",
    title: t("pageIndex.heroBanner.content.computationalVision.title"),
    body: t("pageIndex.heroBanner.content.computationalVision.description"),
  },
  {
    id: "3",
    title: t("pageIndex.heroBanner.content.predictionAndOptimization.title"),
    body: t(
      "pageIndex.heroBanner.content.predictionAndOptimization.description",
    ),
  },
]);
</script>
