<template>
  <main>
    <HeroBanner />

    <div class="flex-1">
      <SectionPresentation />

      <SectionAbout />

      <SectionProducts />

      <SectionContact />
    </div>
  </main>
</template>

<script lang="ts" setup>
const { t } = useI18n();

useHead({
  title: t("pageIndex.title"),
  meta: [{ name: "description", content: t("pageIndex.description") }],
});
</script>
