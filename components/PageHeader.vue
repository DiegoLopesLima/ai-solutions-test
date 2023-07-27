<template>
  <header>
    <h1 class="sr-only">AI Solutions</h1>

    <div class="bg-[#004a52] text-white py-2 h-9">
      <PageContainer>
        <div class="flex items-center justify-end">
          <SocialMedias />
        </div>
      </PageContainer>
    </div>

    <div class="py-4">
      <PageContainer>
        <div class="flex items-center justify-between">
          <NuxtLink to="/">
            <img src="~assets/images/header-logo.png" width="160" alt="" />
          </NuxtLink>

          <NavMenu />
        </div>
      </PageContainer>
    </div>

    <div
      class="bg-gradient-to-r from-[#004a52] via-[#059e9c] to-[#00848c] h-2 shadow-lg"
    ></div>
  </header>
</template>
