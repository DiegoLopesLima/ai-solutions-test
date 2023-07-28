<template>
  <nav
    :class="[
      'flex items-center w-full overflow-hidden transition-all lg:w-auto lg:h-auto',
      {
        'h-44': menu.isOpen,
        'h-0': !menu.isOpen,
      },
    ]"
  >
    <ul class="flex flex-col w-full gap-1 lg:gap-4 lg:flex-row">
      <li>
        <NuxtLink
          class="flex items-center gap-2 py-2 font-semibold hover:underline"
          to="/"
        >
          <Icon name="mdi:home" size="1.4em" />

          Início
        </NuxtLink>
      </li>

      <li>
        <NuxtLink
          class="flex items-center gap-2 py-2 font-semibold hover:underline"
          :to="{ hash: '#about-section' }"
        >
          <Icon name="mdi:information" size="1.4em" />

          Sobre nós
        </NuxtLink>
      </li>

      <li>
        <NuxtLink
          class="flex items-center gap-2 py-2 font-semibold hover:underline"
          :to="{ hash: '#products-section' }"
        >
          <Icon name="mdi:apps" size="1.4em" />

          Produtos
        </NuxtLink>
      </li>

      <li>
        <NuxtLink
          class="flex items-center gap-2 py-2 font-semibold hover:underline"
          :to="{ hash: '#contact-section' }"
        >
          <Icon name="mdi:mail" size="1.4em" />

          Fale conosco
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { useMenu } from "@/stores/menu";

const menu = useMenu();
</script>
