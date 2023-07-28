<template>
  <div>
    <div class="relative aspect-video">
      <div
        v-for="(image, index) in images"
        :key="image.id"
        :class="[
          'flex justify-center items-center absolute top-0 left-0 w-full h-full transition-opacity duration-1000 opacity-0 bg-center bg-cover',
          {
            'opacity-100': index === currentImageIndex,
          },
        ]"
        :style="{ backgroundImage: `url(${image.src})` }"
      >
        <PageContainer class="grid grid-cols-2">
          <div class="flex flex-col gap-2 text-justify lg:gap-4">
            <div class="text-lg md:text-3xl lg:text-7xl text-[#004a52]">
              {{ image.title }}
            </div>

            <div class="text-sm md:text-lg">{{ image.body }}</div>
          </div>
        </PageContainer>
      </div>
    </div>

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

const images = reactive([
  {
    id: "1",
    src: "/images/hero-banner-1.jpg",
    title: "Lorem ipsum",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "2",
    src: "/images/hero-banner-2.jpg",
    title: "Lorem ipsum",
    body: "Vitae dolores corporis? Voluptas itaque, ratione ut sed quod rem dolorem molestias doloribus!",
  },
]);

const duration = 5000;
const currentImageIndex = ref(0);

const interval = setInterval(() => {
  if (images.length - 1 === currentImageIndex.value) {
    currentImageIndex.value = 0;
  } else {
    currentImageIndex.value += 1;
  }
}, duration);

onUnmounted(() => {
  clearInterval(interval);
});
</script>
