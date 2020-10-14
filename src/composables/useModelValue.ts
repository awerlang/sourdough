import { computed, ref, SetupContext } from "vue";

export function useModelValue(modelValue: string | number, ctx: SetupContext) {
  const newVal = ref(modelValue);
  const value = computed<string | number>({
    get() {
      return newVal.value;
    },
    set(val) {
      newVal.value = val;
      ctx.emit("update:modelValue", val);
    }
  });

  return {
    value
  };
}
