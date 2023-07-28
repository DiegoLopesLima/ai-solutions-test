<template>
  <div class="flex flex-col min-h-screen">
    <PageHeader />

    <HeroBanner />

    <main class="flex-1">
      <SectionPresentation />

      <SectionAbout />

      <SectionProducts />

      <SectionContact />
    </main>

    <PageFooter />
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();

useHead({
  title: t("pageIndex.title"),
  meta: [{ name: "description", content: t("pageIndex.description") }],
});
</script>
