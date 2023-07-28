<template>
  <button
    :type="type"
    :class="[
      'inline-flex items-center text-sm rounded transition-colors',
      variantStylesMap[variant],
      sizeStylesMap[size],
    ]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
type ButtonVariant = "default";

type ButtonSize = "md";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantStylesMap: Record<ButtonVariant, string> = {
  default: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700",
};

const sizeStylesMap: Record<ButtonSize, string> = {
  md: "gap-2 px-4 py-2 text-sm",
};

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "button",
  variant: "default",
  size: "md",
});

const { type, variant, size } = toRefs(props);
</script>
