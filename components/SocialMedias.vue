<template>
  <section class="flex gap-4 text-xl">
    <h2 class="sr-only">{{ $t("pageIndex.socialMedia.title") }}</h2>

    <div class="flex items-center">
      <NuxtLink
        class="inline-flex transition-colors hover:text-red-500"
        to="https://www.facebook.com/Ai-Solutions-101748418331072"
        target="_blank"
        :aria-label="$t('pageIndex.socialMedia.item.facebook')"
      >
        <Icon name="mdi:facebook" />
      </NuxtLink>
    </div>

    <div class="flex items-center">
      <NuxtLink
        class="inline-flex transition-colors hover:text-red-500"
        to="https://www.instagram.com/aisolutions.tec/"
        target="_blank"
        :aria-label="$t('pageIndex.socialMedia.item.instagram')"
      >
        <Icon name="mdi:instagram" />
      </NuxtLink>
    </div>

    <div class="flex items-center">
      <NuxtLink
        class="inline-flex transition-colors hover:text-red-500"
        to="https://www.linkedin.com/company/aisolutions-tec/"
        target="_blank"
        :aria-label="$t('pageIndex.socialMedia.item.linkedin')"
      >
        <Icon name="mdi:linkedin" />
      </NuxtLink>
    </div>
  </section>
</template>
