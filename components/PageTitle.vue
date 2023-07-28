<template>
  <component
    :is="as"
    class="flex items-center gap-2 text-xl font-bold text-[#004a52] border-b-2 border-[#004a52] pb-1 mb-4"
  >
    <Icon v-if="icon" :name="icon" />

    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
type PageTitleProps = {
  as?: "h2" | "h3";
  icon?: string;
};

const props = withDefaults(defineProps<PageTitleProps>(), {
  as: "h2",
});

const { as, icon } = toRefs(props);
</script>
