<template>
  <section class="flex gap-4 text-xl">
    <h2 class="sr-only">Redes sociais</h2>

    <div class="flex items-center">
      <NuxtLink
        class="inline-flex"
        to="https://www.facebook.com/Ai-Solutions-101748418331072"
        target="_blank"
        aria-label="Facebook"
      >
        <Icon name="mdi:facebook" />
      </NuxtLink>
    </div>

    <div class="flex items-center">
      <NuxtLink
        class="inline-flex"
        to="https://www.instagram.com/aisolutions.tec/"
        target="_blank"
        aria-label="Instagram"
      >
        <Icon name="mdi:instagram" />
      </NuxtLink>
    </div>

    <div class="flex items-center">
      <NuxtLink
        class="inline-flex"
        to="https://www.linkedin.com/company/aisolutions-tec/"
        target="_blank"
        aria-label="LinkedIn"
      >
        <Icon name="mdi:linkedin" />
      </NuxtLink>
    </div>
  </section>
</template>
