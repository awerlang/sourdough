<template>
  <div>
    <label>
      {{ label }}
      <input v-model.number="value" type="number" v-bind="$attrs" />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useModelValue } from "@/composables/useModelValue";

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: Number,
      required: true
    }
  },
  setup(props, context) {
    return useModelValue(props.modelValue, context);
  }
});
</script>

<style lang="scss" scoped>
label,
input {
  display: block;
}
input:invalid {
  border: solid 1px red;
}
</style>
