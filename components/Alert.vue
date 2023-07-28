<template>
  <div
    :class="[
      'flex items-center gap-4 p-4 font-semibold rounded',
      variantStylesMap[variant],
    ]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
type AlertVariant = "default" | "success" | "error";

type AlertProps = {
  variant?: AlertVariant;
};

const variantStylesMap: Record<AlertVariant, string> = {
  error: "text-red-800 bg-red-300",
  success: "text-green-800 bg-green-300",
  default: "text-gray-800 bg-gray-300",
};

const props = withDefaults(defineProps<AlertProps>(), {
  variant: "default",
});

const { variant } = toRefs(props);
</script>
