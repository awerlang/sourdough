<template>
  <div>
    <label class="block">
      {{ label }}
      <input
        v-model.number="value"
        class="block invalid:app-border-error"
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
      required: true
    },
    modelValue: {
      type: [Number, String],
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    return useModelValue(toRef(props, "modelValue"), context);
  }
});
</script>

<style lang="scss" scoped></style>
