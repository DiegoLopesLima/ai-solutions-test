<template>
  <div class="flex flex-col gap-1">
    <label v-if="label" :for="id" class="text-sm font-semibold">{{
      label
    }}</label>

    <input
      v-bind="$attrs"
      :id="id"
      type="text"
      :value="modelValue"
      :class="[
        'w-full transition-all duration-200 ease-linear bg-transparent bg-white rounded outline-none',
        variantStylesMap[normalizedVariant],
        sizeStylesMap[size],
      ]"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      @blur="$emit('blur')"
    />

    <div v-if="hasError" class="flex items-center gap-1 text-sm text-red-500">
      <Icon name="mdi:alert-circle-outline" />

      {{ error }}
    </div>
  </div>
</template>

<script lang="ts" setup>
type TextFieldVariant = "default" | "error";

type TextFieldSize = "md";

type TextFieldProps = {
  label?: string;
  id?: string;
  modelValue?: string;
  error?: string;
  variant?: TextFieldVariant;
  size?: TextFieldSize;
  touched?: boolean;
};

defineOptions({
  inheritAttrs: false,
});

defineEmits(["update:modelValue", "blur"]);

const variantStylesMap: Record<TextFieldVariant, string> = {
  default: "border-",
  error: "border-red-500",
};

const sizeStylesMap: Record<TextFieldSize, string> = {
  md: "px-3 py-1.5 text-sm border-2",
};

const props = withDefaults(defineProps<TextFieldProps>(), {
  variant: "default",
  size: "md",
  modelValue: "",
  touched: false,
});

const { label, error, size, variant, touched, modelValue } = toRefs(props);

const hasError = computed(() => touched.value && error?.value);
const normalizedVariant = computed(() =>
  hasError.value ? "error" : variant.value,
);
</script>
