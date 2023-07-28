<template>
  <header>
    <h1 class="sr-only">{{ $t("pageIndex.title") }}</h1>

    <div class="bg-[#004a52] text-white py-2 h-9">
      <PageContainer>
        <div class="flex items-center justify-end">
          <SocialMedias />
        </div>
      </PageContainer>
    </div>

    <div class="py-4">
      <PageContainer>
        <div
          class="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <NuxtLink to="/">
            <img
              src="~assets/images/header-logo.png"
              alt=""
              class="w-14 lg:w-40"
            />
          </NuxtLink>

          <Button
            variant="ghost"
            aria-label="Alternar menu"
            class="lg:hidden"
            @click="menu.toggle()"
          >
            <Icon name="mdi:menu" size="1.4em" />

            {{ $t("pageIndex.nav.title") }}
          </Button>

          <NavMenu />
        </div>
      </PageContainer>
    </div>

    <div
      class="bg-gradient-to-r from-[#004a52] via-[#059e9c] to-[#00848c] h-2 shadow-lg"
    ></div>
  </header>
</template>

<script lang="ts" setup>
import { useMenu } from "@/stores/menu";

const menu = useMenu();
</script>
