<template>
  <div>
    <label class="block">
      {{ label }}
      <input
        v-model.number="value"
        class="block w-full h-8 invalid:app-border-error focus:outline-none focus:shadow-outline focus:border-blue-300"
        type="number"
        v-bind="$attrs"
      />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from "vue";
import { useModelValue } from "@/composables/useModelValue";

export default defineComponent({
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [Number, String],
      required: true,
    },
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    return useModelValue(toRef(props, "modelValue"), context);
  },
});
</script>

<style lang="scss" scoped></style>
