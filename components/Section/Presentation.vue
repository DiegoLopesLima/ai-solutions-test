<template>
  <article
    class="flex bg-gradient-to-r from-[#004a52] via-[#059e9c] to-[#004a52]"
  >
    <PageContainer class="flex justify-center">
      <ClientOnly fallback-tag="span" fallback="Carregando vídeo...">
        <iframe
          class="w-full lg:w-2/3 aspect-video"
          src="https://www.youtube.com/embed/tW2hH-pdAto"
          :title="$t('pageIndex.sectionPresentation.video.alt')"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </ClientOnly>
    </PageContainer>
  </article>
</template>
