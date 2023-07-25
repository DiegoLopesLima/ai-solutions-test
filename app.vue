<template>
  <div class="bg-red-500">
    Hello world!

    <section>
      <h2>Counter</h2>

      <div>Value: {{ counter.value }}</div>

      <div>
        <button type="button" @click="counter.increment()">Increment</button>

        <button type="button" @click="counter.decrement()">Decrement</button>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
  const counter = useCounter();
</script>
