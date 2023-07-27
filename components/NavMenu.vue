<template>
  <nav>
    <ul class="flex gap-8">
      <li>
        <NuxtLink
          class="inline-flex items-center gap-2 font-semibold hover:underline"
          to="/"
        >
          <Icon name="mdi:home" size="1.4em" />

          Início
        </NuxtLink>
      </li>

      <li>
        <NuxtLink
          class="inline-flex items-center gap-2 font-semibold hover:underline"
          to="/"
        >
          <Icon name="mdi:information" size="1.4em" />

          Sobre nós
        </NuxtLink>
      </li>

      <li>
        <NuxtLink
          class="inline-flex items-center gap-2 font-semibold hover:underline"
          to="/"
        >
          <Icon name="mdi:apps" size="1.4em" />

          Produtos
        </NuxtLink>
      </li>

      <li>
        <NuxtLink
          class="inline-flex items-center gap-2 font-semibold hover:underline"
          to="/"
        >
          <Icon name="mdi:mail" size="1.4em" />

          Fale conosco
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
