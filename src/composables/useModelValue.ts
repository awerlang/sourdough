import { computed, SetupContext, Ref } from "vue";

export function useModelValue(
  modelValue: Ref<string | number>,
  ctx: SetupContext<"update:modelValue"[]>
) {
  const value = computed<string | number>({
    get() {
      return modelValue.value;
    },
    set(val) {
      ctx.emit("update:modelValue", val);
    },
  });

  return {
    value,
  };
}
