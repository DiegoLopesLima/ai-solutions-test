<template>
  <div class="bg-red-500">
    {{ $t("app.title") }} <Icon name="mdi:github" />

    <section>
      <h2>{{ $t("app.counter.title") }}</h2>

      <div>{{ $t("app.counter.value") }} {{ counter.value }}</div>

      <div>
        <button type="button" @click="counter.decrement()">
          <Icon name="mdi:minus" />

          {{ $t("app.counter.button.decrement") }}
        </button>

        <button type="button" @click="counter.increment()">
          <Icon name="uil:plus" />

          {{ $t("app.counter.button.increment") }}
        </button>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const counter = useCounter();
</script>
