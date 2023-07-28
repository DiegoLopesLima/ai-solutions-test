<template>
  <div class="flex flex-col gap-1">
    <label v-if="label" :for="id" class="text-sm font-semibold">{{
      label
    }}</label>

    <textarea
      v-bind="$attrs"
      :id="id"
      type="text"
      :class="[
        'w-full h-40 transition-all duration-200 ease-linear bg-transparent bg-white rounded outline-none',
        variantStylesMap[normalizedVariant],
        sizeStylesMap[size],
      ]"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      @blur="$emit('blur')"
    ></textarea>

    <div v-if="hasError" class="flex items-center gap-1 text-sm text-red-500">
      <Icon name="mdi:alert-circle-outline" />

      {{ error }}
    </div>
  </div>
</template>

<script lang="ts" setup>
type TextAreaFieldVariant = "default" | "error";

type TextAreaFieldSize = "md";

type TextAreaFieldProps = {
  label?: string;
  id?: string;
  modelValue?: string;
  error?: string;
  variant?: TextAreaFieldVariant;
  size?: TextAreaFieldSize;
  touched?: boolean;
};

defineOptions({
  inheritAttrs: false,
});

defineEmits(["update:modelValue", "blur"]);

const variantStylesMap: Record<TextAreaFieldVariant, string> = {
  default: "border-",
  error: "border-red-500",
};

const sizeStylesMap: Record<TextAreaFieldSize, string> = {
  md: "px-3 py-1.5 text-sm border-2",
};

const props = withDefaults(defineProps<TextAreaFieldProps>(), {
  variant: "default",
  size: "md",
  modelValue: "",
  touched: false,
});

const { label, error, size, variant, touched } = toRefs(props);

const hasError = computed(() => touched.value && error?.value);
const normalizedVariant = computed(() =>
  hasError.value ? "error" : variant.value,
);
</script>
