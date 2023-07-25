<template>
  <div class="bg-red-500">
    Hello world! <Icon name="mdi:github" />

    <section>
      <h2>Counter</h2>

      <div>Value: {{ counter.value }}</div>

      <div>
        <button type="button" @click="counter.decrement()">
          <Icon name="mdi:minus" />

          Decrement
        </button>

        <button type="button" @click="counter.increment()">
          <Icon name="uil:plus" />

          Increment
        </button>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
  const counter = useCounter();
</script>
