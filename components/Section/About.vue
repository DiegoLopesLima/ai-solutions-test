<template>
  <article id="about-section" class="py-4">
    <PageContainer>
      <PageTitle icon="mdi:information">
        {{ $t("pageIndex.sectionAbout.title") }}
      </PageTitle>

      <h3 class="mb-4 text-lg font-semibold">
        {{ $t("pageIndex.sectionAbout.subtitle") }}
      </h3>

      <div class="gap-8 text-justify md:columns-2">
        {{ $t("pageIndex.sectionAbout.content") }}
      </div>
    </PageContainer>
  </article>
</template>
